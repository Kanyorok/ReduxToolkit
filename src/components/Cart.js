import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from "react-bootstrap";
import { remove } from '../store/cartSlice';

const Cart = () => {
  const productCart = useSelector(state => state.cartBag)
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch(remove(id));
  }
  const cards = productCart.map((product) => {
    return (
      <div className="col-md-12 mt-4">
        <Card key={product.id}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
              <br />
              <i>${product.price}</i>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white"}}>
                <Button variant="danger" onClick={() => removeCart(product.id)}>Remove</Button>
            </Card.Footer>
        </Card>
      </div>
    );
  });
  
  return (
    <>
        <h2>Cart</h2>
        <div className="row">{cards}</div>
    </>
  )
}

export default Cart;