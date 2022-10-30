import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const PieDataChart = ({pieChartData}) => {
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
            <PieChart data={pieChartData} animate={true} />
            <div className="pie-chart-desc scroll-style">
              {pieChartData.map((item) => {
                return (
                  <div className="chart-item">
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
  )
}

export default PieDataChart