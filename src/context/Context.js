import React, { useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer } from "./Reducers";
import { createContext } from "react";
import { productReducer } from "./Reducers";

const CartContent = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock:false,
    byFastDeliver:false,
    byRating:0,
    searchQuery:"",
  });

  return (
    <CartContent.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </CartContent.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartContent);
};
