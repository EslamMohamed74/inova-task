import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className={styles.middleNav}>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col>
            <Link to={"/"}>
              <img
                src="https://placehold.co/600x400"
                alt="logo"
                className={styles.logo}
              />
            </Link>
          </Col>
          <Col className="text-end" xs={5} md={3} lg={2}>
            <p>
              <Link>Sign In</Link> or <Link>Sign Up</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
