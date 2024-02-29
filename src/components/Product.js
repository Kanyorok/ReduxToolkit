import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const {data: products } = useSelector(state=> state.products)
  useEffect(() => {
    // api
    // dispatch api
    dispatch(getProducts())
  }, []);

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product))
  }

  const cards = products.map((product) => {
    return (
      <div className="col-md-3 mt-4">
        <Card key={product.id} style={{ width: "18rem"}}>
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
                <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>
            </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
