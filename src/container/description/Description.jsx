import React from "react";
import { Prompter, Guide } from "../../components";
import BuyIcon from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/icon-buy.svg";
import RentIcon from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/icon-rent.svg";
import SellIcon from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/icon-sell.svg";

import "./description.css";

const Description = () => {
  return (
    <div className="besnik__description section__padding section__margin">
      <Prompter
        title="How it works?"
        text="Everything you need to know when you're looking to buy, rent, or sell -
        all in one place."
      />
      <div className="besnik__description-guide_container ">
        <Guide icon={BuyIcon} title="Buyer's Guide" linkText="How to buy" />
        <Guide icon={RentIcon} title="Renter's Guide" linkText="How to rent" />
        <Guide icon={SellIcon} title="Seller's Guide" linkText="How to sell" />
      </div>
      <button type="button">See Full Guidelines</button>
    </div>
  );
};

export default Description;
