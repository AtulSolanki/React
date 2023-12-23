import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = ({ todoItems }) => {
  return (
    todoItems.length === 0 && <h1 className={styles.welcome}>Enjoy Your Day</h1>
  );
};
export default WelcomeMessage;
