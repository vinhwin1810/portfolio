import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import pirate from "../assets/img/pirate.svg";
import Love from "../assets/img/love.svg";
import Love1 from "../assets/img/love1.svg";
import Love2 from "../assets/img/love3.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={pirate} alt="Pirate" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://codemyui.com/wp-content/uploads/2017/08/I-Love-You.mp4">
                <img src={Love} alt="" />
              </a>
              <a href="https://media.tenor.com/kl_HHAGP2X8AAAAi/bunny-i-love-you.gif">
                <img src={Love1} alt="" />
              </a>
              <a href="https://media.tenor.com/NEXkjuU30Z0AAAAd/snowball-bunny-carrot.gif">
                <img src={Love2} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
