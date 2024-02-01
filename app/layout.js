import './globals.css'
import Layout from "@/components/layouts/Layout.client";

export const metadata = {
  title: 'maple',
  description: 'maple open api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-['LINESeedKR-Rg']">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
