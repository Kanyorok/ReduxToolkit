import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    // api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const cards = products.map((product) => {
    return (
      <div className="col-md-3 mt-4">
        <Card key={product.id} style={{ width: "18rem"}}>
          <div class="text-center">
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
                <Button variant="primary">Add to Cart</Button>
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