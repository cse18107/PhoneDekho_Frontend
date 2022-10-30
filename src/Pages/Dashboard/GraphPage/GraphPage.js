import React from "react";
import { CChart } from "@coreui/react-chartjs";
import { PieChart } from "react-minimal-pie-chart";
import Wrapper from "../../../Components/Wrapper/Wrapper";
import "./GraphPage.css";
import user from "../../../assets/icons/user_logo.png";
import products from "../../../assets/icons/products.png";
import orders from "../../../assets/icons/order.png";
import delevered from "../../../assets/icons/delevered.png";
import { setBg } from "../../../utils/getRandomColor";
import BarChart from "../../../Components/Service/Chart/BarChart/BarChart";
import PieDataChart from "../../../Components/Service/Chart/PieChart/PieDataChart";
import LineChart from "../../../Components/Service/Chart/LineChart/LineChart";

const pieChartData = [
  { title: "Apple", value: 10, color: `${setBg()}`, label: "one" },
  { title: "Samsung", value: 15, color: `${setBg()}`, label: "two" },
  { title: "Google", value: 20, color: `${setBg()}`, label: "three" },
  { title: "LG", value: 10, color: `${setBg()}`, label: "three" },
  { title: "Motorola", value: 31, color: `${setBg()}`, label: "three" },
  { title: "OnePlus", value: 36, color: `${setBg()}`, label: "three" },
  { title: "Apple", value: 10, color: `${setBg()}`, label: "one" },
  { title: "Samsung", value: 15, color: `${setBg()}`, label: "two" },
  { title: "Google", value: 20, color: `${setBg()}`, label: "three" },
  { title: "LG", value: 10, color: `${setBg()}`, label: "three" },
  { title: "Motorola", value: 31, color: `${setBg()}`, label: "three" },
  { title: "OnePlus", value: 36, color: `${setBg()}`, label: "three" },
  { title: "Apple", value: 10, color: `${setBg()}`, label: "one" },
  { title: "Samsung", value: 15, color: `${setBg()}`, label: "two" },
];
const companyName = ["Apple", "Samsung", "Google", "LG", "Motorola", "OnePlus"];

const GraphPage = () => {
  return (
    <Wrapper>
      <div className="dashboard-right_chart-header">
        <div className="overview-details user-count">
          <div className="count-text user-count-num">
            <img style={{ marginBottom: "2.8px" }} src={user} alt="user" />
            User Number
          </div>
          <div className="count-num">1052</div>
        </div>
        <div className="overview-details item-count">
          <div className="count-text item-count-num">
            <img style={{ marginBottom: "2.8px" }} src={products} alt="user" />
            Product Number
          </div>
          <div className="count-num">52235</div>
        </div>
        <div className="overview-details order-count">
          <div className="count-text order-count-num">
            <img style={{ marginBottom: "2.8px" }} src={orders} alt="user" />
            Order Number
          </div>
          <div className="count-num">342</div>
        </div>
        <div className="overview-details delivery-count">
          <div className="count-text delivery-count-num">
            <img style={{ marginBottom: "2.8px" }} src={delevered} alt="user" />
            Delivery Number
          </div>
          <div className="count-num">244</div>
        </div>
      </div>
      <div className="dashboard-chart-container">
        <BarChart />
        <PieDataChart pieChartData={pieChartData} />
      </div>
      <div className="dashboard-chart-container">
        <BarChart />
        <LineChart />
      </div>
      <div className="dashboard-chart-container">
        <PieDataChart pieChartData={pieChartData} />
        <LineChart />
      </div>
    </Wrapper>
  );
};

export default GraphPage;
