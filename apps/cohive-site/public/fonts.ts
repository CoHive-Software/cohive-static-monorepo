import { Abril_Fatface, Lato } from 'next/font/google'

export const abril = Abril_Fatface({
  subsets: ['latin'],
  variable: '--font-abril',
  display: 'swap',
  weight: '400',
})

export const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
})