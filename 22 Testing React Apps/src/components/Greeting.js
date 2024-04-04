import React, { Fragment, useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [isChanged, setIsChanged] = useState(false);

  const changeTextHandler = () => {
    setIsChanged(true);
  };

  return (
    <Fragment>
      <h1>Hello World!</h1>
      {!isChanged && <Output>It is so nice to see you</Output>}
      {isChanged && <Output>Text changed</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </Fragment>
  );
};

export default Greeting;
