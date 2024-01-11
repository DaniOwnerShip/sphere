import { Inter } from 'next/font/google'
import '../styles/main.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sphere',
  description: 'Testing Sphere APP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body> 
    </html>
  )
}
