import styles from "./Container.module.css"
const Container = (probes) => {
  return <>
    <div className = {styles.container}>{probes.children}</div>
   

  </>
  
}
export default Container;