import { Layout } from '@/components/dom/Layout'
import { MenuBar } from '@/components/dom/MenuBar'
import '@/global.css'

export const metadata = {
  title: 'The Dungeon Foundry',
  description: 'A custom tool for designing Tabletop Minitaure Terrain',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        <MenuBar title={metadata.title} />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
