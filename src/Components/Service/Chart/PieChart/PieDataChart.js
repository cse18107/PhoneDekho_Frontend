import React, {useState} from "react";
import "../index.css";
import { PieChart } from "react-minimal-pie-chart";

const PieDataChart = ({ pieChartData }) => {

  const [pieData, setPieData] = useState(pieChartData);
  const [pieIndex, setPieIndex] = useState(-1);

  const setPieIndexData = (index) => {
    if(pieIndex===index){
      setPieIndex(-1);
    } else {
      setPieIndex(index);
    }
    console.log(index);
  }

  return (
    <div className="chart_2">
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
      <div className="chart-content-pie">
        <PieChart data={pieData} animate={true} radius={40} segmentsShift={(segmentIndex) => segmentIndex===pieIndex?4:0} />
        <div className="pie-chart-desc scroll-style">
          {pieData.map((item,index) => {
            return (
              <div className="chart-item" onClick={()=>setPieIndexData(index)}>
                <div
                  className="colorIndi"
                  style={{ backgroundColor: `${item.color}` }}
                ></div>
                <div className="company_name">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PieDataChart;
