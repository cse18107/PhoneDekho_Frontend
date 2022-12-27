import React from "react";
import "./AddUserPage.css";
import Wrapper from "../../../Components/Wrapper/Wrapper";
import SpcialInput from "../../../Components/Service/SpcialInput/SpcialInput";
import AddItemCarousel from "../AddItemPage/AddItemCarousel";

const AddUserPage = () => {
  return (
    <Wrapper>
      <div className="addUserPage_container">
        <div className="addUserPage_left">
          <div className="addUserPage_left_inputs">
            {/* <AddItemCarousel/> */}
            <SpcialInput label={"Name"} placeholder={"Enter your name"} />
            <SpcialInput label={"Email"} placeholder={"Enter your email"} />
            <SpcialInput
              label={"Phone number"}
              placeholder={"Enter your phone number"}
            />
            <SpcialInput label={"Address"} placeholder={"Enter your address"} />
            <SpcialInput
              label={"Description"}
              placeholder={"Enter your self"}
            />
          </div>
        </div>
        <div className="addUserPage_right"></div>
      </div>
    </Wrapper>
  );
};

export default AddUserPage;
