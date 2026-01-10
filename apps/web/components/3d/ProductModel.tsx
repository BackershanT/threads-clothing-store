import { useGLTF } from "@react-three/drei";

export default function ProductModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.2} />;
}