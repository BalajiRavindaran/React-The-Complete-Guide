import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <h1>The Home Page</h1>
      <p>
        Go To <Link to="/products">The Products Page</Link>
      </p>
      <button onClick={()=>{navigate("/products")}}>Products</button>
    </Fragment>
  );
};

export default HomePage;
