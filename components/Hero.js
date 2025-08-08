import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Canvas className="absolute inset-0">
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      </Canvas>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <img src="/logo.png" alt="AuctaMorph Logo" className="mx-auto mb-4" style={{ width: '200px' }} />
        <h1 className="text-5xl font-bold text-primary">AuctaMorph</h1>
        <p className="mt-2 text-xl">Technology with Precision</p>
      </motion.div>
    </section>
  );
}
