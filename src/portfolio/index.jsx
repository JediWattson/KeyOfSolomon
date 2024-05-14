'use client';

import React, { useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Color } from 'three';

function Model({ url }) {
    const gltf = useLoader(GLTFLoader, url);
    useEffect(() => {
        gltf.scene.traverse((child) => {                
            if (child.material?.name !== 'Material.004') return;
            // child.material.toneMapped = false;  
            const color = new Color('red');
            color.convertSRGBToLinear();
            child.material.emissive = color;
            child.material.emissiveIntensity = 20
        });
    }, [gltf.scene]);
    return <primitive object={gltf.scene} />;
}

function Portfolio() {
    return (

        <Canvas style={{ height: 'calc(100vh - 36px)' }}>
            <EffectComposer>
                <Bloom 
                    luminanceThreshold={0.1} // Higher threshold
                    luminanceSmoothing={2} // Lower smoothing for less intense bloom
                    intensity={0.3} // Lower intensity
                    radius={100} // Larger radius for more diffusion
                    levels={8} // More levels for softer bloom
                />
            </EffectComposer>
            <directionalLight position={[10, 2, 2]} intensity={3} />
            <Model url="milkjug.glb" />
            <OrbitControls />
        </Canvas>
    );
}

export default Portfolio