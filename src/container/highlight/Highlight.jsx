import React from "react";
import { Card, Container } from "react-bootstrap";
import { Prompter } from "../../components";
import ArrowUp from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/Vector 120-highlight.svg";
import Group1 from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/Group 1185.svg";
import Group2 from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/Group 1186.svg";
import "./highlight.css";

const Highlight = ({ image, figure, text }) => {
  return (
    <div className="besnik__highlight">
      <div className="besnik__highlight-card__container">
        <Card className="besnik__highlight-image__container">
          <Card.Img variant="top" src={image} />
        </Card>
      </div>
      <div className="besnik__highlight-card_float">
        <Card className="besnik__highlight-card_float-card">
          <Card.Body className="besnik__highlight-card_float-content ">
            <Card.Title className="besnik__highlight-card_float-content_text">
              {figure}
              <img src={ArrowUp} alt="trend" />
              <p className="besnik__highlight-card_float-content_text-desc">
                {text}
              </p>
            </Card.Title>
            <div></div>
            <Container>
              <div class="row besnik__highlight-card_float-content_image-container">
                <img src={Group1} alt="users-group" />
                <img src={Group2} alt="users-group" />
              </div>
            </Container>
          </Card.Body>
        </Card>
      </div>
      <Prompter
        title="You've found a neighborhood you love."
        text="When you own a home, you're committing to living in one location for a while. In a recent Trulia survey, we found that five out of six respondents said finding the right neighborhood "
      />
    </div>
  );
};

export default Highlight;
