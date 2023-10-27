import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./index.module.scss";

export default function Index({ data }) {
  const {
    id,
    attributes: {
      name,
      currency,
      price,
      avg_review,
      num_of_reviews,
      book: { image_url },
    },
  } = data;
  const navigate = useNavigate();
  return (
    <Card
      className={styles.card}
      onClick={() => navigate(`/productdetails/${id}`)}
    >
      <Card.Img variant="top" className={styles.img} src={image_url} />
      <Card.Body>
        <Card.Title className={styles.title}>{name}</Card.Title>
        <div className={styles.ratting}>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={avg_review}
          />
          <small>({num_of_reviews})</small>
        </div>
        <div>
          <p>
            {currency} <span>{price}</span>
          </p>
        </div>
        <Button className="w-75">Pay</Button>
        <Button>
          <AiOutlineShoppingCart />
        </Button>
      </Card.Body>
    </Card>
  );
}
