import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import {CartState} from '../context/Context';

const SingleProduct = ({ prod }) => {

  const {
    state: {cart}, dispatch,
  } = CartState();

  return (
    <React.Fragment>
      <div className="products">
        <Card>
          <Card.Img variant="top" src={prod.image} alt={prod.name} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span> ₹ {prod.price.split(".")[0]}</span>
              {prod.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>4 days delivery</div>
              )}
              <Rating rating={prod.ratings} />
            </Card.Subtitle>
            {
              cart.some(p=>p.id===prod.id) ? (
                <Button 
                onClick={()=>
                  dispatch({
                    type: 'Remove_From_Cart',
                    payload: prod,
                  })
                }
                variant='danger'> Remove From Cart</Button>
              ) : ( 
                <Button 
                onClick={()=>
                  dispatch({
                    type: 'Add_To_Cart',
                    payload: prod,
                  })
                }
                disabled={!prod.inStock}> 
                {
                  !prod.inStock ? 'Out of Stock': 'Add To Cart'
                }
                </Button>)
            }
           
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
