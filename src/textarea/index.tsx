import React from "react";

import styles from "./style.module.css";

const Textarea = ({ textValueRef, className = "" }) => {
  return (
    <textarea
      onChange={(e) => {
        textValueRef.current = e.currentTarget.value;
      }}
      className={`${className} ${styles.textareaContainer}`}
    />
  );
};

export default Textarea;
