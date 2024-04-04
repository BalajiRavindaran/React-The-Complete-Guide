// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    },
  }
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === "toggle") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
