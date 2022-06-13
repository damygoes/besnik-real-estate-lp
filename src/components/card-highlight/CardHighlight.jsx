import React from "react";
import { Container, Card } from "react-bootstrap";
import {
  IoBedOutline,
  IoCarSportOutline,
  IoResizeOutline,
} from "react-icons/io5";
import "./cardhighlight.css";

const CardHighlight = ({ image, amount, address, bed, garage, size }) => {
  return (
    <div className="besnik__cardhighlight">
      <Card className="besnik__cardhighlight-card">
        <Card.Img variant="top" src={image} />
        <Card.Body className="besnik__cardhighlight-card_body ">
          <Card.Title className="besnik__cardhighlight-card_title">
            €{amount}
          </Card.Title>
          <Card.Text className="besnik__cardhighlight-card_address">
            {address}
          </Card.Text>
          <Container>
            <div class="row besnik__cardhighlight-card_snippets">
              <div class="col ">
                <IoBedOutline />
                <p> {bed} </p>
              </div>
              <div class="col">
                <IoCarSportOutline />
                <p> {garage} </p>
              </div>
              <div class="col">
                <IoResizeOutline />
                <p> {size} </p>
              </div>
            </div>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardHighlight;
