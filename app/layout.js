import './globals.css'

export const metadata = {
  title: 'Yeri',
  description: 'Yeri is a simple, fast, and powerful product management tool.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
