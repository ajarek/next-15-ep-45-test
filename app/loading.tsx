const Loading = () => {
  return (
    <div
      role='status'
      className='flex flex-col items-center justify-center min-h-screen'
    >
      <div className='flex items-center justify-center'>
        <div
          className='inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-blue-500'
          role='status'
        >
          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] '>
            Loading...
          </span>
        </div>
      </div>
    </div>
  )
}

export default Loading
