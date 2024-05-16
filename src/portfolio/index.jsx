'use client';

import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Color } from 'three';

const Model = ({ url }) => {
    console.log(url, "HELLO")
    const gltf = useLoader(GLTFLoader, url);
    return <primitive object={gltf?.scene} />;
}

const ObjectEnum = {
    MILK_GALLON: 'milkgallon',
    JETPACK: 'jetpack'
}

function Portfolio() {
    const [object, setObject] = useState(ObjectEnum.MILK_GALLON)

    return (
        <>            
            <div style={{ zIndex: 1000, bottom: 32, position: 'absolute', display: 'flex', gap: 10, margin: 22 }}>
                <button onClick={() => setObject(ObjectEnum.JETPACK)}>
                    JetPack
                </button>
                <button onClick={() => setObject(ObjectEnum.MILK_GALLON) }>
                    Milk Gallon
                </button>
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
                    <Model url={`scenes/${object}.glb`} />
                </group>
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default Portfolio