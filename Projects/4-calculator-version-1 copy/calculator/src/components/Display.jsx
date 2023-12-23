import styles from "./Display.module.css";
const Display = ({ DisplayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={DisplayValue}
      readOnly
    />
  );
};
export default Display;
