import React from "react";
import { CardHighlight } from "../../components";
import { BsArrowRight } from "react-icons/bs";
import Featured1 from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/image-featured-1.svg";
import Featured2 from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/image-featured-2.svg";
import Featured3 from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/image-featured-3.svg";
import "./featured.css";

const Featured = ({ title, subtext, linktext }) => {
  return (
    <div className="besnik__featured section__padding ">
      <div className="besnik__featured-title_container">
        <div className="besnik__featured-title_left">
          <p className="besnik__featured-title_left-title"> {title} </p>
          <p className="besnik__featured-title_left-subtext"> {subtext} </p>
        </div>
        <div className="besnik__featured-title_right">
          <div>
            <a>{linktext}</a>
            <BsArrowRight />
          </div>
        </div>
      </div>
      <div className="besnik__featured-cards_container">
        <CardHighlight
          image={Featured1}
          amount="135.000"
          address="8502 Preston Rd. Inglewood, Maine 98280"
          bed="5 rooms"
          garage="1 garage"
          size=" 2000 sqft"
        />
        <CardHighlight
          image={Featured2}
          amount="1.175.000"
          address="2617 Princeton Av. Lorraine, Bridgetown 75143"
          bed="9 rooms"
          garage="3 garages"
          size=" 8000 sqft"
        />
        <CardHighlight
          image={Featured3}
          amount="351.000"
          address="6609 Crook Rd. Bottleneck, Stapletown 11465"
          bed="5 rooms"
          garage="2 garage"
          size=" 5000 sqft"
        />
      </div>
    </div>
  );
};

export default Featured;
