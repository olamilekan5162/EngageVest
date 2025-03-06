import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; 

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
