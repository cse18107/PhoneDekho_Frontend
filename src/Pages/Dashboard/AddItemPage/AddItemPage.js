import React from "react";
import SpcialInput from "../../../Components/Service/SpcialInput/SpcialInput";
import Wrapper from "../../../Components/Wrapper/Wrapper";
import "./AddItemPage.css";

const AddItemPage = () => {
  return (
    <Wrapper>
      <div className="add-item_content">
        <div className="add-item_content__left">
          <SpcialInput label={"Name"} placeholder={"Enter your name"} success_message={"Please enter valid name"} />
          <SpcialInput label={"Short description"} placeholder={"Enter short description"} success_message={"Please enter valid short description"} />
          <SpcialInput label={"Brand"} placeholder={"Enter brand name"} success_message={"Please enter valid brand name"} />
          <SpcialInput label={"About phone"} placeholder={"Enter about phone"} success_message={"Please enter valid description"} />
          <SpcialInput label={"Price"} placeholder={"Enter price"} success_message={"Please enter valid price"} />
        </div>
        <div className="add-item_content__right"></div>
      </div>
    </Wrapper>
  );
};

export default AddItemPage;
