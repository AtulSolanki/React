import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      console.log("Food value entered is " + newFoodItem);
      setFoodItems(newItems);
    }
  };

  return (
    <Container>
      <h1 className="food-heading"> Healthy Food</h1>

      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />

      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;