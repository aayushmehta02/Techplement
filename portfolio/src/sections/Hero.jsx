import { PerspectiveCamera, useFaceControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import HackerRoom from '../components/HackerRoom';


const Hero = () => {
    const controls = useFaceControls
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm-text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                Hi, I am Aayush <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'> Building Products & Brands</p>
        </div>
        <div className='w-full h-full absolute inset-0'>
            <Canvas className='w-full h-full' >
            <Suspense fallback={<CanvasLoader/>}>
                <PerspectiveCamera makeDefault position = {[0,0,30]}/>
                <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
                <HackerRoom 
  scale={0.1} 
  position={[0, -7, 2]} 
  rotation={[0, -Math.PI / 4, 0]} 
/>

            </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero