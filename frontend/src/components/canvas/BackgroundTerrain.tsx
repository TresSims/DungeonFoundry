import { useGLTF } from "@react-three/drei";

export const BackgroundTerrain = ({ props }: any): JSX.Element => {
  const { scene } = useGLTF('/3D/BackgroundTerrain.glb')

  return (
    <primitive object={scene} {...props} />
  )
}
