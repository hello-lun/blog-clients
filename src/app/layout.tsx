import Head from "next/head"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <Head>
        <title>Kenji Ding blog</title>
        <meta name="description" content="Technology Blog, about front-end, back-end, full-stack, react, vue, nextjs, nestjs, docker" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
