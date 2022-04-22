import React from "react";
import { CartState } from "../context/Context";
import "./styles.css";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();

  console.log(products);

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }
    if(byRating){
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >=byRating)
    }
    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) => 
      prod.name.toLowerCase().includes(searchQuery))
    }

    return sortedProducts;
  };

  return (
    <React.Fragment>
      <div className="home">
        <Filter />

        <div className="productContainer">
          {transformProducts().map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
