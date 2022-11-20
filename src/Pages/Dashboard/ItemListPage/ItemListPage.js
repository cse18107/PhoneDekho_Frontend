import React from "react";
import "./ItemListPage.css";
import Wrapper from "../../../Components/Wrapper/Wrapper";
import { DemoItems } from "../../../Demofiles/Demo";
import Carousel from "../../../Components/Service/Carousel/Carousel";
import Stars from "../../../Components/Service/Stars/Stars";
import search from "../../../assets/icons/search.png";
import SearchItem from "../../../Components/Service/SearchItem/SearchItem";
import SelectItem from "../../../Components/Service/SelectItem/SelectItem";
import { textResize } from "../../../utils/textResize";

const ItemListPage = () => {
  const options = ["Select by ratings","1","1.5","2","2.5","3","3.5","4","4.5","5"];
  return (
    <Wrapper>
      <div className="item_list-container">
        <div className="item_list_query">
          <div className="item_list_query_content">
            <SearchItem placeholder={"Search by name"}/>
            <SearchItem placeholder={"search by company"}/>
            <SearchItem placeholder={"search by admin"}/>
            <SearchItem placeholder={"search by price"}/>
            <SearchItem placeholder={"search by quantity"}/>
            <SelectItem options={options} width={"170px"}/>
          </div>
        </div>
        <div className="item_list-content">
          <div className="item_list scroll-style">
            {DemoItems.map((item) => {
              return (
                <div className="item_list-item">
                  <div className="item_list-item__left">
                    <Carousel item={item} />
                  </div>
                  <div className="item_list-item__right">
                    <div className="item_list_right-content">
                      <div className="item_list_right-content-upper">
                        <div className="item_name">
                          <span>name</span> {item.name}
                        </div>
                        <div className="item_ratings">
                          <span>ratings</span> <Stars ratings={item.ratings} />
                        </div>
                        <div className="item_views">
                          <span>views</span> 11,214
                        </div>
                      </div>
                      <div className="item_list_right-content-middle">
                      <span>description</span> {textResize(item.description,400)}
                      </div>
                      <div className="item_list_right-content-lower">
                        <div>
                          <span>price</span>
                          {item.price}
                        </div>
                        <div>
                          <span>added by</span>
                          {item.addedBy}
                        </div>
                        <div>
                          <span>company</span>
                          {item.companyName}
                        </div>
                        <div>
                          <span>quantity</span>
                          {item.quantity}
                        </div>
                        <div>
                          <span>date of entry</span>
                          {item.dateOfEntry}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ItemListPage;
