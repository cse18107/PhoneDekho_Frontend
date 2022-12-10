import React from "react";
import upload from "../../../assets/icons/upload.png";
import imagepreview from "../../../assets/icons/imagepreview.png"

const ImageInput = ({ images, setImages }) => {
  const removeImageHandler = (index) => {
    images.splice(index, 1);
    setImages(images);
  };

  const getImage = (e) => {
    setImages([...images, URL.createObjectURL(e.target.files[0])]);
  };

  return (
    <div className="image_input-container">
      <div className="image_input_field">
        <div className="drag_drop_content">
          <div className="drag_drop_text">
            <h5>Drag and drop your image file</h5>
            <img
              style={{ width: "5rem", height: "5rem" }}
              src={upload}
              alt="upload"
            />
          </div>
          <p>or</p>
          <h5>Click to upload your image file</h5>
        </div>
        <input type="file" value="" onChange={getImage} />
      </div>
      <div className="image_input_preview add_item-scroll-style">
        {images.length === 0 && <><img src={imagepreview} alt="imagepreview" style={{marginRight:"5px"}} /><p>Image Preview</p></>}
        {images.length > 0 && (
          <div className="preview-images">
            {images.map((image, index) => {
              return (
                <div className="preview">
                  <img src={image} alt="preview" />
                  <div
                    className="close"
                    onClick={() => removeImageHandler(index)}
                  >
                    X
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
