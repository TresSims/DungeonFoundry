import { Grid } from "@react-three/drei"

export const Layer = () => {
  return <Grid position={[0, .001, 0]} cellSize={0.03} args={[.42, .42]} />
}
