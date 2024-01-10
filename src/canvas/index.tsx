import { useRef } from "react";
import { useRender } from "webgpu-fun";
import example from "../../lib/example";

import styles from "./styles.module.css";

function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useRender(canvasRef, example())
    return <canvas className={styles.canvas} ref={canvasRef} tabIndex={0} />
}

export default Canvas;