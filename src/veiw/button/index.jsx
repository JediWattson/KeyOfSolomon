import styles from "./styles.module.css";

function Button({ large, text, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`${styles.buttonContainer} ${
        disabled ? styles.disabled : ""
      } ${large ? styles.large : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
