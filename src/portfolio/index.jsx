'use client';

import React, { useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import styles from './styles.module.css'

const Model = ({ url }) => {
    const gltf = useLoader(GLTFLoader, url);
    return <primitive object={gltf?.scene} />;
}

function Portfolio({ assetManifest }) {
    const [objectUrl, setObjectUrl] = useState(assetManifest[0].url)

    return (
        <>            
            <div className={styles.buttonGroup}>
                {assetManifest.map((asset,index) => 
                    <button key={index} onClick={() => setObjectUrl(asset.url)}>
                        {asset.name}
                    </button>
                )}
            </div>
            <Canvas style={{ height: 'calc(100vh - 36px)' }}>
                <EffectComposer>
                    <Bloom 
                        luminanceThreshold={3} // Higher threshold
                        luminanceSmoothing={2} // Lower smoothing for less intense bloom
                    />
                </EffectComposer>
                <directionalLight position={[-8, 8, 18]} intensity={2} />
                <directionalLight position={[-10, 0, -8]} intensity={2} />
                <group dispose={null}>
                    <Model url={objectUrl} />
                </group>
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default Portfolio