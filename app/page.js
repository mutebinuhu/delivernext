import Image from 'next/image'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar/>
      <div className='flex items-center justify-center h-screen'>
        <h1 className='text-5xl'>Coming Soon....</h1>
      </div>
    </main>
  )
}
