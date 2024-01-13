import { vec3 } from "wgpu-matrix";

import textureShader from "./shaders/texture.wgsl";
import meshShader from "./shaders/mesh.wgsl";

import { makeTriangle, makeQuad, makeBox } from "./assets";
import { updateFloor, updateTriangles } from "./utils";

const floorCount = 40
const triangleCount = 40;

const textureVertexLayout = [{
    arrayStride: 20,
    attributes: [
        {
            shaderLocation: 0,
            format: `float32x3`,
            offset: 0
        },
        {
            shaderLocation: 1,
            format: `float32x2`,
            offset: 12
        }
    ]
}]

const meshVertexLayout = [{
    arrayStride: 24,
    attributes: [
        {
            shaderLocation: 0,
            format: `float32x3`,
            offset: 0
        },
        {
            shaderLocation: 1,
            format: `float32x3`,
            offset: 12
        }
    ]
}]

const makeExample = () => [
    // { 
    //     bufferSize: 64 * 1,
    //     renderPipelineOpts: {
    //         shader: textureShader,
    //         vertexBufferLayout: meshVertexLayout
    //     },
    //     bufferCb: (device: GPUDevice, buffer: GPUBuffer) => {
    //         const boxMesh = makeBox(device, buffer);
    //         boxMesh.makeObjects([vec3.create(2, 2, -1)]);
    //         updateFloor(boxMesh);            
    //         return boxMesh      
    //     } 
    // },
    { 
        bufferSize: 64 * (1 + (floorCount*2))**2,
        texturePipelineOpts: {
            materialUrl: 'floor.jpeg',
        },
        renderPipelineOpts: {
            shader: textureShader,
            vertexBufferLayout: textureVertexLayout
        },
        bufferCb: (device: GPUDevice, buffer: GPUBuffer) => {
            const floorMesh = makeQuad(device, buffer);
            const objects = Array(floorCount**2).fill(0).map(
                (_, i) => vec3.create(i%floorCount, Math.floor(i/floorCount), -1)
            );

            floorMesh.makeObjects(objects);
            updateFloor(floorMesh);  
            return floorMesh      
        } 
    }, { 
        bufferSize: 64 * floorCount,
        renderPipelineOpts: {
            shader: meshShader,
            vertexBufferLayout: meshVertexLayout
        }, 
        bufferCb: (device: GPUDevice, buffer: GPUBuffer) => {
            const triangleMesh = makeTriangle(device, buffer);
            const objects = Array(triangleCount).fill(0).map((_, i) =>  vec3.create(2, i, -0.5));
            triangleMesh.makeObjects(objects);
            triangleMesh.updateMaterial = updateTriangles;
            return triangleMesh
        } 
    }
]

export default makeExample;