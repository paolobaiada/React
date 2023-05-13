import { useRef } from "react";
import "../CarDetails.css";

const CarDetails = (props) => {
  const brand = useRef();
  const model = useRef();
  const year = useRef();
  const color = useRef();

/* function handleChange(event){
  if (event.target.name === "brand") {
    brand.current.value = event.target.value
const inputValue = brand.current.value
console.log(inputValue)
  }
  else if (event.target.name === "model") {
    model.current.value = event.target.value
    const inputValue = model.current.value
    console.log(inputValue)
  }
  else if (event.target.name === "year") {
    year.current.value = event.target.value
    const inputValue = year.current.value
    console.log(inputValue)
  }
  else 
    color.current.value = event.target.value
    const inputValue = color.current.value
    console.log(inputValue)
  

} */
  
  return (
    <div>
  <form>
      <p>
        <label htmlFor="brand">Brand:</label>
        <input type="text" name="brand" ref={brand} defaultValue={props.brand} />
      </p>
      <p>
        <label htmlFor="model">Model:</label>
        <input type="text" name="model" ref={model} defaultValue={props.model} />
      </p>
      <p>
        <label htmlFor="year">Year:</label>
        <input type="text" name="year" ref={year} defaultValue={props.year} />
      </p>
      <p>
        <label htmlFor="color">Color:</label>
        <input type="text" name="color" ref={color} defaultValue={props.color} />
      </p>
    </form>
    </div>
  
  );
};
CarDetails.defaultProps = {
  brand: "lamborghini",
  model: "aventador",
  yaer: "2015",
  color: "yellow"
};
export default CarDetails;
