import MainHeader from '@/components/MainHeader'
import './globals.css'
import { Cormorant_Garamond, Inter, Jost } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flavor fusion',
  description: 'Take test to find your favourite food flavor',
}

const jost = Jost({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
  variable: '--font-jost',
})

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant_garamond',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={` ${cormorantGaramond.variable} ${jost.variable}`}
        suppressHydrationWarning={true}
      >
        <header className="text-center">
          <MainHeader />
        </header>
        <main>{children}</main>
        <footer className={`text-center font-jost`}>foot</footer>
      </body>
    </html>
  )
}
