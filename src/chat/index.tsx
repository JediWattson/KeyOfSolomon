import React, { useEffect, useRef, useState } from "react";
import Button from "../button";
import Textarea from "../textarea";

import styles from "./style.module.css";


const postOracle = async (text?: string[]) => {
  const res = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ text }),
  });
  const data = await res.json();  
  return data.text;
}

const Chat = () => {
  const [oracleSays, setOracle] = useState<string[]>([]);
  const textValueRef = useRef(null);
  
  useEffect(() => {
    const init = async () => {
      const text = await postOracle();
      setOracle([text]);  
    }
    init()
  }, [])
  const handleClick = async () => {
    const { value } = textValueRef.current;
    textValueRef.current.value = "";
    const chatArr= [...oracleSays, `Adventurer: ${value}`];
    setOracle(chatArr);
    const text = await postOracle(chatArr);
    setOracle([...chatArr, text]);
  };
  return (
    <>
      <div className={styles.textBox}>
        {oracleSays.map(o => 
          <p>{o}<br /></p>
        )}
      </div>
      <div className={styles.actions}>
        <Button onClick={handleClick} text="Send" />
        <Textarea textValueRef={textValueRef} className={styles.textarea} />
      </div>
    </>
  );
};

export default Chat;
