import NavBar from './components/NavBar';
import './globals.css'
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'] })
export const dynamic = "force-dynamic";
export const metadata = {
  title: 'Deliver Next',
  description: 'Your Best Shipping Platform',
}

export default function RootLayout({ children }) {
  return (
       <html lang="en">
      <body className={`${rubik.className} relative`}>
        <NavBar />
        {children}
    </body>
    </html>
  )
}
