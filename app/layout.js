import './globals.css';
import Layout from "@/components/layouts/Layout.client";
import ReactQueryProviders from '@/components/providers/ReactQueryProviders.client';

export const metadata = {
  title: 'maple',
  description: 'maple open api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProviders>
          <Layout>{children}</Layout>
        </ReactQueryProviders>
      </body>
    </html>
  )
}
