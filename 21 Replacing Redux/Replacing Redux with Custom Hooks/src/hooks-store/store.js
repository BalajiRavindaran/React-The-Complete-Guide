import { useState, useEffect } from "react";

// Setting up variables that gets initiated once.
// The first and only instance is created when the file gets executed for the first time.
// Hence we can share data across multiple components.

// globalState contains data that needs to be shared across components.
// globalState contains key:value pairs of data such as {key1:{},key2:{}}, and these keys are considered as different state slices.

let globalState = {};

// listeners are used to update the components when there is any change in the globalState just like in redux store subscribers.
// listeners contains multiple instances of the setState function that the useState hook returned.
// Each component that listens to changes in globalState gets assigned a new listener function.

let listeners = [];

// actions are user defined actions that are combined with the dispatch function in the components that uses it.
// actions contains key:value pairs such that the keys are the action identifiers and the values are the action functions.

let actions = {};

// useStore is a custom hook that returns the globalState and the dispatch function just like useSelector and useDispatch respectively from redux.
// shouldListen is used to avoid assigning listener functions to "all" components.
// By default shouldListen is true, and the components that uses useStore gets a listener function.
// shouldListen can be set to false in the component that uses useStore eg.(useStore(false)).

export const useStore = (shouldListen = true) => {
  // Using useState hook to get the automatic component updating functionalities across all the listeners and assigning the current globalState object as initial value.

  const setState = useState(globalState)[1];

  // Using useEffect to assign a setState function instance to the component that listens to the store.

  useEffect(() => {
    // Adding the function slice to the listeners list on component's mount.

    // Adding and removing listener functions only when shouldListen is true.

    if (shouldListen) {
      listeners.push(setState);
    }

    // Removing the function slice from the listeners list using the cleanup function from useEffect on component's unmount.

    return () => {
      // Removing the specific setState function instance for the component that is unmounted.
      // As every instance contains different memory address the comparison of functions work.

      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
      
    };
  }, [setState, shouldListen]);

  // The dispatch function that gets called in the component receives an action identifier and a payload.
  // The dispatch function then calls all the setState instances and provide the current/updated globalState, thus updating all the listener components.

  const dispatch = (actionIdentifier, payload) => {
    // Using the actionIdentifier key to find the appropriate action from the actions object.
    // Invoking the appropriate action function and providing the current globalState and payload.

    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    // Invoking all the setState instances and proving the updated globalState.

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  return [globalState, dispatch];
};

// initStore is used to initialize the globalState and actions object with initial values.
// initStore can be called multiple times for creating different state slices (eg: adding a new key:value pair to the globalState).
// initStore can also be called multiple times for adding new actions into the actions object.

export const initStore = (initialState, userActions) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
