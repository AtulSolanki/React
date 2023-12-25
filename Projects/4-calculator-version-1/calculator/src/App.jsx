import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainers from "./components/ButtonsContainer";
function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainers />
    </div>
  );
}

export default App;
