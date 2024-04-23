'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className='text-center flex justify-center flex-col  min-h-screen p-0 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm '>
          <p className="text-lg">Something went wrong!</p>
          <button className='dark:bg-[#161616] bg-[#e6e6e6] hover:bg-[#dedede] dark:hover:bg-[#1e1e1e] w-max mx-auto rounded-md p-2 m-2' onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  )
}