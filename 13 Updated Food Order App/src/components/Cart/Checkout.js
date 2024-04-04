import { useState, useRef } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formsInputValidity, setFormsInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormsInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      cityIsValid: cityIsValid,
      postalCode: postalCodeIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formsInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formsInputValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formsInputValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formsInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formsInputValidity.name && <p>Enter Valid Name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formsInputValidity.street && <p>Enter Valid Street</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formsInputValidity.postalCode && <p>Enter Valid Postal Code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formsInputValidity.city && <p>Enter Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
