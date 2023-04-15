import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Spotify',
  description: 'Listen your music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  )
}
