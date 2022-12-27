import React,{useState, useEffect} from "react";


const pStyle = {
  fontSize: "0.9rem",
  textAlign: "center",
};
const indexPos = [0, 105, 210];
const max = 2;
const AddItemCarousel = ({dataList}) => {
  const [ind, setInd] = useState(0);
  const [position, setPosition] = useState(0);

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
    <div className="item_logo_content">
      {dataList.map((data) => {
        return <div
        className={`item_logo item_${data._id}`}
        style={{ right: `${-105 * (data._id-1) + position}%` }}
      >
        <div className="items">
          <img
            style={{ width: "20%", height: "55%", marginBottom: "7px" }}
            src={data.icon}
            alt="Item"
          />
          <p style={pStyle}>
            {data.desc}
          </p>
        </div>
      </div>
      })}
      {/* <div
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
      </div> */}
    </div>
  );
};

export default AddItemCarousel;
