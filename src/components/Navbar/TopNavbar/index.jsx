import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.topNav}>
      <Container>
        <Row>
          <Col className="d-flex justify-content-end" xs={12}>
            <p>العربية</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
