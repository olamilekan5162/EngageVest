import styles from "./Button.module.css";

const Button = ({
  text,
  onClick,
  type = "button",
  size = "medium",
  disabled = false,
  fullWidth = false,
  className = "",
}) => {
  return (
    <button
      className={`
        ${styles.button} 
        ${styles[size]} 
        ${fullWidth ? styles.fullWidth : ""}
        ${className}
      `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
