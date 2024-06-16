'use server'

import connectToDb from './connectToDb'
import { User, UserWithoutId } from './models'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export const getUser = async (formData: FormData) => {

  const email = formData.get('email')
  const password = formData.get('password')
  
    
 
  if (password !== null) {
    
    const passwordValue = password.toString()
   
    await connectToDb()
    const user = await User.findOne({ email: email })
   
    try {
      if (user) {
        const isPasswordCorrect = await bcrypt.compare(
          passwordValue,
          user.password
        )
        if (isPasswordCorrect) {
          const expires = new Date(Date.now() + 3600 * 1000);
          const session = await encrypt({ user, expires });
          
          // Save the session in a cookie
          cookies().set("session", session, { expires, httpOnly: true });
         
        }
        else {
          console.log('no password correct')
         
      }
        
      }else{
        console.log('no user')
      }

    } catch (err) {
      console.log(err)
    }finally{
      const session = await  getSession()
     session?redirect("/userDashboard"):redirect('/');
    }
  }
}
export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export const addUser = async (formData: UserWithoutId) => {
  const { username, email, password, img, isAdmin } = formData
  const hashedPassword = await bcrypt.hash(password, 5)
  try {
    connectToDb()
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    })
    await newUser.save()
    console.log('saved' + newUser)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('_id')

  try {
    await connectToDb()
    await User.findOneAndDelete({ _id: id })
    revalidatePath('/dashboard')
    console.log({ message: `Deleted user ${id}` })
    return { message: `Deleted user ${id}` }
  } catch (err) {
    return { message: 'Failed to delete user' }
  }
}

export const updateUser = async (formData: FormData) => {
  const _id = formData.get('_id')
  const username = formData.get('username')
  const email = formData.get('email')
  const img = formData.get('img')
  const isAdmin = formData.get('isAdmin')

  try {
    await connectToDb()
    await User.findOneAndUpdate(
      { _id: _id },
      {
        username: username,
        email: email,
        img: img,
        isAdmin: isAdmin === 'true' ? Boolean(true) : Boolean(false),
      }
    )
    revalidatePath(`/dashboard`)

    return { message: `Updated user ${_id}` }
  } catch (err) {
    return { message: 'Failed to update to db' }
  } finally {
    redirect('/dashboard/')
  }
}
