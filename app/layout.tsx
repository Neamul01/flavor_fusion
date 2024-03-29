import MainHeader from '@/components/MainHeader'
import './globals.css'
import { Cormorant, Inter, Jost } from 'next/font/google'
import 'swiper/swiper.min.css'
import 'swiper/css'
import 'swiper/css/pagination'
import MainFooter from '@/components/Footer/MainFooter'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flavor fusion',
  description: 'Take test to find your favourite food flavor',
}

const jost = Jost({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
})

const cormorantGaramond = Cormorant({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/flavor-fusion-logo2.png"
          type="image/x-icon"
        />
      </head>
      <body
        className={`min-h-screen ${cormorantGaramond.variable} ${jost.variable}`}
        suppressHydrationWarning={true}
      >
        <header className={`text-center sticky top-0 left-0 z-50`}>
          <MainHeader />
        </header>
        <main>{children}</main>
        <footer className="bg-[linear-gradient(rgba(9,22,29,.9),rgba(9,22,29,.9)),url('/footer-bg.png')] relative bg-cover bg-no-repeat">
          <MainFooter />
        </footer>
      </body>
    </html>
  )
}
