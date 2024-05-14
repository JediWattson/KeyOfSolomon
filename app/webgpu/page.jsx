import Canvas from "../../src/canvas";
import { handleSession } from "../../src/lib/utils";

function WebGPU() {
    handleSession('WebGPU')
    return <Canvas />;
}

export default WebGPU;
