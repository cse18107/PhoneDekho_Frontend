import React from "react";
import ItemLogo from "../../../assets/icons/menu.png";
import ItemLogo1 from "../../../assets/icons/list.png";
import ItemLogo2 from "../../../assets/icons/internet.png";

const pStyle = {
  fontSize: "0.9rem",
  textAlign: "center",
};

const AddItemCarousel = ({ position }) => {
  return (
    <div className="item_logo_content">
      <div
        className="item_logo item_1"
        style={{ right: `${-105 * 0 + position}%` }}
      >
        <div className="items">
          <img
            style={{ width: "20%", height: "55%", marginBottom: "7px" }}
            src={ItemLogo}
            alt="Item"
          />
          <p style={pStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div
        className="item_logo item_2"
        style={{ right: `${-105 * 1 + position}%` }}
      >
        <div className="items">
          <img
            style={{ width: "15%", height: "40%", marginBottom: "7px" }}
            src={ItemLogo1}
            alt="Item"
          />
          <p style={pStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
        </div>
      </div>
      <div
        className="item_logo item_3"
        style={{ right: `${-105 * 2 + position}%` }}
      >
        <div className="items">
          <img
            style={{ width: "23%", height: "60%" }}
            src={ItemLogo2}
            alt="Item"
          />
          <p style={pStyle}>
            Text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddItemCarousel;
