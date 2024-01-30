import './globals.css'
import Layout from "@/components/Layout.client";

export const metadata = {
  title: 'maple',
  description: 'maple open api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-['LINESeedKR-Rg']">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
