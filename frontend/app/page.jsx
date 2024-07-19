'use client'

import dynamic from 'next/dynamic'

const SceneRoot = dynamic(() => import('@/components/canvas/SceneRoot').then((mod) => mod.SceneRoot), { ssr: false })
const Layer = dynamic(() => import('@/components/canvas/Layer').then((mod) => mod.Layer), { ssr: false })

export default function Page() {
  return (
    <SceneRoot>
      <Layer />
    </SceneRoot>
  )
}
