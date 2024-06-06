import React, { useEffect, useState } from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const LoadMoreData = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [itemlist, setItemlist] = useState([]);
  const [disabledButton, setDisabledButton] = useState(false);

  const url = `https://dummyjson.com/products?limit=20&skip=${
    count === 0 ? 0 : count * 20
  }`;
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const results = await response.json();
      console.log(results);
      setItemlist((prevData) => [...prevData, ...results.products]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, [count]);
  useEffect(() => {
    if (itemlist && itemlist.length >= 100) {
      setDisabledButton(true);
    }
  }, [itemlist]);

  if (loading) {
    return (
      <div>
        <h3>Getting products list, please wait....!</h3>
      </div>
    );
  }
  return (
    <div className="product-container">
      <div className="grid-container ">
        {itemlist && itemlist.length ? (
          <Row lg={4}>
            {itemlist.map((product) => {
              const { id, title, price, category, description } = product;
              return (
                <Col className="d-flex">
                  <Card className="flex-fill productlist" key={id}>
                    <Card.Img
                      height={150}
                      variant="top"
                      src={product.images[0]}
                    />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                      <Card.Text>{category}</Card.Text>
                      <Card.Text>{price}</Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        ) : (
          <p>No items to display</p>
        )}
      </div>
      <br></br>
      <Button
        variant="primary"
        disabled={disabledButton}
        onClick={() => setCount(count + 1)}
      >
        Load more
      </Button>
      {disabledButton && <p>Loaded all the itmes</p>}
    </div>
  );
};

export default LoadMoreData;
