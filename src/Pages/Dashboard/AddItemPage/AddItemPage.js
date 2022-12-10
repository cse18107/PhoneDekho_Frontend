import React, { useEffect, useState } from "react";
import SpcialInput from "../../../Components/Service/SpcialInput/SpcialInput";
import Wrapper from "../../../Components/Wrapper/Wrapper";
import AddItemCarousel from "./AddItemCarousel";
import "./AddItemPage.css";
import ImageInput from "./ImageInput";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import reset from "../../../assets/icons/reset.png";
import submit from "../../../assets/icons/submit.png";

const indexPos = [0, 105, 210];
const max = 2;
const AddItemPage = () => {
  const [position, setPosition] = useState(0);
  const [images, setImages] = useState([]);
  const [ind, setInd] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setInd((ind) => ind + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  // console.log(ind);
  useEffect(() => {
    // console.log(ind);
    setPosition(indexPos[ind]);
    if (ind > max) {
      setInd(0);
    }
  }, [ind]);

  return (
    <Wrapper>
      <div className="add-item_content">
        <div className="add-item_content__left">
          <AddItemCarousel position={position} />
          <SpcialInput
            label={"Name"}
            show={false}
            placeholder={"Enter your name"}
            success_message={"Please enter valid name"}
          />
          <SpcialInput
            label={"Short description"}
            show={false}
            placeholder={"Enter short description"}
            success_message={"Please enter valid short description"}
          />
          <SpcialInput
            label={"Brand"}
            show={false}
            placeholder={"Enter brand name"}
            success_message={"Please enter valid brand name"}
          />
          <SpcialInput
            label={"About phone"}
            show={false}
            placeholder={"Enter about phone"}
            success_message={"Please enter valid description"}
          />
          <SpcialInput
            label={"Price"}
            show={false}
            placeholder={"Enter price"}
            success_message={"Please enter valid price"}
          />
        </div>
        <div className="add-item_content__middle">
          <ImageInput images={images} setImages={setImages} />
          <div className="description">
            <div
              style={{
                border: "1px solid black",
                padding: "2px",
                minHeight: "280px",
                width: "90%",
              }}
            >
              <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </div>
          </div>
        </div>
        <div className="add-item_content__right">
          <button className="add-item-button add-item-reset">
            <div className="button-div">
              <img src={reset} alt="reset" />
              Reset
            </div>
          </button>
          <button className="add-item-button add-item-submit">
            <div className="button-div">
              <img src={submit} alt="submit" />Submit
            </div>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddItemPage;
