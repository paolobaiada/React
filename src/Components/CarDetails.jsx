import { useRef } from "react";
import "../CarDetails.css";
const CarDetails = (props) => {
  const brand = useRef(props.brand);
  const model = useRef();
  const year = useRef();
  const color = useRef();
  return (
    <form>
      <p>
        <label htmlFor="brand">Brand:</label>
        <input type="text" name="brand" value={props.brand} />
      </p>
      <p>
        <label htmlFor="model" name="model">
          Model:
        </label>
        <input type="text" />
      </p>
      <p>
        <label htmlFor="year" name="year">
          Year:
        </label>
        <input type="text" />
      </p>
      <p>
        <label htmlFor="color" name="color">
          Color:
        </label>
        <input type="text" />
      </p>
    </form>
  );
};
export default CarDetails;
