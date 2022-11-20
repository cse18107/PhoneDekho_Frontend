import React from "react";
import "../index.css";
import { CChart } from "@coreui/react-chartjs";

const BarChart = () => {
  return (
    <div className="chart_1">
      <div className="chart_header">
        <div className="chart_heading">Chart heading</div>
        <div className="chart_query">
          <select>
            <option>Select year</option>
            <option>2001</option>
            <option>2002</option>
            <option>2003</option>
            <option>2004</option>
          </select>
        </div>
      </div>
      <div className="chart-content">
        <CChart
          type="bar"
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "GitHub Commits",
                backgroundColor: "#f87979",
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
            ],
          }}
          labels="months"
        />
      </div>
    </div>
  );
};

export default BarChart;
