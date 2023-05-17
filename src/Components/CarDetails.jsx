import { useEffect, useRef } from "react";
import "../CarDetails.css";

const CarDetails = (props) => {
  const brand = useRef();
  const model = useRef();
  const year = useRef();
  const color = useRef();
  
useEffect(() => {
  brand.current.reset()
  model.current.reset()
  year.current.reset()
  color.current.reset()
},[props.brand,props.model,props.year,props.color])
  
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
