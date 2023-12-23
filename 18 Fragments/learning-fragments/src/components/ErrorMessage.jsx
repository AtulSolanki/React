const ErrorMessage = ({items}) => {
  // let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];
  //let foodItems = [];
  return <>{items.length===0 && <h3>I am Hungry</h3> }</>;
}
export default ErrorMessage;