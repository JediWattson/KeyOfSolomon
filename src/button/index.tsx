import styles from "./styles.module.css";

type ButtonPropsType = {
  text: string;
  onClick: (any) => void;
  disabled?: boolean;
};

function Button({ text, onClick, disabled }: ButtonPropsType) {
  return (
    <button
      disabled={disabled}
      className={`${styles.container} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
