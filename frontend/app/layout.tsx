import { Layout } from '@/components/dom/Layout'
import { MenuBar } from '@/components/dom/MenuBar'
import '@/global.css'

export const metadata = {
  title: 'The Dungeon Forge',
  description: 'A custom tool for designing Tabletop Minitaure Terrain',
}

export default function RootLayout(props: { children: JSX.Element }): JSX.Element {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        <MenuBar title={metadata.title} />
        <Layout>{props.children}</Layout>
      </body>
    </html>
  )
}
