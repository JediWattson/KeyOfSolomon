import React, { useRef, useState } from "react";
import Button from "../button";
import Textarea from '../textarea'

import styles from './style.module.css';

const Chat = () => {
    const [oracleSays, setOracle] = useState("Oracle: Ask me a question, go ahead, I'm waiting!")
    const textValueRef = useRef("");
    const handleClick = async () => {
        setOracle("Oracle: Let me think about that...")
        const res = await fetch('/api/chat', { method: "POST", body: JSON.stringify({ text: textValueRef.current }) });
        const data = await res.json();
        setOracle(data.text);
    }
    return (
        <>
            <div className={styles.textBox}>
                {oracleSays}
            </div>
            <div className={styles.actions}>
                <Button onClick={handleClick} text="Send" />
                <Textarea textValueRef={textValueRef} className={styles.textarea} />
            </div>
        </>
    )
}


export default Chat;
