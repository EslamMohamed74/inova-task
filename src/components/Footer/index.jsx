import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.top}>
          <Col xs={12} lg={3}>
            <img
              src="https://placehold.co/600x400"
              alt="logo"
              className={styles.logo}
            />
          </Col>
          <Col xs={12} lg={3}>
            <h6>Join our</h6>
            <p>Newsetter</p>
          </Col>
          <Col xs={12} lg={6}>
            <Form inline>
              <Row>
                <Col className="px-0" xs="auto">
                  <Form.Control type="text" placeholder="Search" className="" />
                </Col>
                <Col className="px-0" xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <hr className={styles.hr} />
        <Row className="pb-5">
          <Col xs={12} lg={3}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesett ing
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <small>Follow us on</small>
            <div className={styles.iconsConatiner}>
              <div className={styles.icon}>
                <AiOutlineTwitter />
              </div>
              <div className={styles.icon}>
                <AiFillInstagram />
              </div>
              <div className={styles.icon}>
                <AiFillLinkedin />
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <ul className={styles.linksList}>
              <li>News</li>
              <li>Tournaments</li>
              <li>Courses</li>
              <li>E-Books</li>
            </ul>
          </Col>
          <Col xs={12} lg={3}>
            <ul className={styles.linksList}>
              <li>Privacy policies</li>
              <li>Terms & Conditions</li>
              <li>E-Contact Us</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <p className={styles.endFooter}>2023 LOGO. All Rights Reserved.</p>
    </footer>
  );
}
