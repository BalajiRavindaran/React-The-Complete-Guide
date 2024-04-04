import { initStore } from "./store";

// configureStore is used to set the initial value for globalState and add actions to the actions object.
// In this case the state slice of products is added to the globalState object and the TOGGLE_FAV action to the action object.

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productID) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productID);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };

  initStore(
    {
      products: [
        {
          id: "p1",
          title: "Red Scarf",
          description: "A pretty red scarf.",
          isFavorite: false,
        },
        {
          id: "p2",
          title: "Blue T-Shirt",
          description: "A pretty blue t-shirt.",
          isFavorite: false,
        },
        {
          id: "p3",
          title: "Green Trousers",
          description: "A pair of lightly green trousers.",
          isFavorite: false,
        },
        {
          id: "p4",
          title: "Orange Hat",
          description: "Street style! An orange hat.",
          isFavorite: false,
        },
      ],
    },
    actions
  );
};

export default configureStore;
