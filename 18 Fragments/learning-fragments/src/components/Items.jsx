import styles from "./Items.module.css";
const Items = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item kg-foodItem ${bought && 'active'}`}>
      <span>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Items;
