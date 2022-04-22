import React from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filter = () => {

  const {
    productState:{byStock,byFastDelivery,sort,byRating}, 
    productDispatch} = CartState();

    console.log(byStock,byFastDelivery,sort,byRating);

  return (
    <React.Fragment>
      <div className="filters">
        <span className="title">Filter Products</span>
        <span>
          <Form.Check
            inline
            label="Ascending - Low to High"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={()=>
            productDispatch({
              type:'Sort_By_Price',
              payload: 'lowToHigh'
            })}
            checked={sort === 'lowToHigh'?true:false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Descending - High to Low"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={()=>
              productDispatch({
                type:'Sort_By_Price',
                payload: 'highToLow'
              })}
              checked={sort === 'highToLow'?true:false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={()=>
            productDispatch({
              type:'Filter_By_Stock'
            })
            }
            checked={byStock}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={()=>
              productDispatch({
                type:'Filter_By_Delivery'
              })
              }
              checked={byFastDelivery}
          />
        </span>
        <span>
          <label style={{paddingRight:10}}>Rating: </label>
          <Rating 
          rating={byRating} 
          onClick={(i)=> productDispatch({
            type:'Filter_By_Rating',
            payload: i+1,
          })
        } style={{cursor:'pointer'}}/>
        </span>
        <Button 
        variant='light'
        onClick={()=>
          productDispatch({
            type:'Clear_Filters',
          })
          }
        >
        Clear Filters
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Filter;
