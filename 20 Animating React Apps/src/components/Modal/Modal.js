import React from "react";

import "./Modal.css";
import CSSTransition from "react-transition-group/CSSTransition";

const animationTimings = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTimings}
      mountOnEnter
      unmountOnExit
      // Transition Events
      onEnter={() => console.log("onEnter")}
      onEntering={() => console.log("onEntering")}
      onEntered={() => console.log("onEntered")}
      onExit={() => console.log("onExit")}
      onExiting={() => console.log("onExiting")}
      onExited={() => console.log("onExited")}

      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClose"
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
