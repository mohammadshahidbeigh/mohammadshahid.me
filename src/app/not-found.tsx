import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='text-center flex justify-center flex-col  min-h-screen p-0 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm '>
      <p className='text-lg'>Page Not Found</p>
      <p>Could not find requested resource</p>
      <Link href="/" className='dark:bg-[#161616] bg-[#e6e6e6] hover:bg-[#dedede] dark:hover:bg-[#1e1e1e] w-max mx-auto rounded-md p-2 m-2'>Return Home</Link>
    </div>
  )
}