import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../ui/ProductCard";
import styles from "./index.module.scss";

export default function Index() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book"
      )
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <section className={styles.ebooks}>
      <Container>
        <Row>
          <Col xs={12} className={styles.titleConatiner}>
            <h1>EXPLORE OUR E-BOOKS</h1>
            <Button>See all</Button>
          </Col>
          <Col xs={12}>
            {data.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
