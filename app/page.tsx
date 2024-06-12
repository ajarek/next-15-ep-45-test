import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen gap-8">
     <h1>Lol</h1>
     <Link className="bg-amber-500 px-4 py-1" href='/userDashboard'>userDashboard</Link>
     <Link className="bg-amber-500 px-4 py-1" href='/login'>Login</Link>
    </div>
  );
}
