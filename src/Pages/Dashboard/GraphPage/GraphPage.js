import React from 'react'
import { CChart } from "@coreui/react-chartjs";
import { PieChart } from "react-minimal-pie-chart";
import Wrapper from '../../../Components/Wrapper/Wrapper';
import './GraphPage.css';
import user from '../../../assets/icons/user_logo.png'
import products from '../../../assets/icons/products.png'
import orders from '../../../assets/icons/order.png'
import delevered from '../../../assets/icons/delevered.png'

const GraphPage = () => {
  return (
    <Wrapper>
            <div className="dashboard-right_chart-header">
              <div className="overview-details user-count">
                <div className="count-text user-count-num"><img style={{"marginBottom":"2.8px"}} src={user} alt="user"/>User Number</div>
                <div className="count-num">1052</div>
              </div>
              <div className="overview-details item-count">
                <div className="count-text item-count-num"><img style={{"marginBottom":"2.8px"}} src={products} alt="user"/>Product Number</div>
                <div className="count-num">52235</div>
              </div>
              <div className="overview-details order-count">
                <div className="count-text order-count-num"><img style={{"marginBottom":"2.8px"}} src={orders} alt="user"/>Order Number</div>
                <div className="count-num">342</div>
              </div>
              <div className="overview-details delivery-count">
                <div className="count-text delivery-count-num"><img style={{"marginBottom":"2.8px"}} src={delevered} alt="user"/>Delivery Number</div>
                <div className="count-num">244</div>
              </div>
            </div>
            <div className="dashboard-chart-container">
              <div className="chart_1">
                <div className='chart_header'>
                  <div className='chart_heading'>Chart heading</div>
                  <div className='chart_query'>
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
              <div className="chart_2">
                <div className="chart-content-pie">
                <PieChart
                  
                  data={[
                    { title: "Apple", value: 10, color: "#1FA2FF",label:"one" },
                    { title: "Samsung", value: 15, color: "#f5af19",label:"two" },
                    { title: "Google", value: 20, color: "#12D8FA",label:"three" },
                    { title: "LG", value: 10, color: "#E14D2A",label:"three" },
                    { title: "Motorola", value: 31, color: "#FD841F",label:"three" },
                    { title: "OnePlus", value: 36, color: "#3E6D9C",label:"three" },
                  ]}
                  animate={true}
                />
                <div className='pie-chart-desc'>
                  <div></div>
                </div>
                </div>
              </div>
            </div>
            <div className="dashboard-chart-container">
              <div className="chart_1">
              <div className='chart_header'>
                  <div className='chart_heading'>Chart heading</div>
                  <div className='chart_query'>
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
                          backgroundColor: "#1FA2FF",
                          data: [80, 20, 12, 39, 10, 40, 39, 80, 40],
                        },
                      ],
                    }}
                    labels="months"
                  />
                </div>
              </div>
              <div className="chart_2">
                <div className="chart-content">
                  <CChart
                    type="line"
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
                          label: "My First dataset",
                          backgroundColor: "rgba(220, 220, 220, 0.2)",
                          borderColor: "rgba(220, 220, 220, 1)",
                          pointBackgroundColor: "rgba(220, 220, 220, 1)",
                          pointBorderColor: "#fff",
                          data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                        },
                        {
                          label: "My Second dataset",
                          backgroundColor: "rgba(151, 187, 205, 0.2)",
                          borderColor: "rgba(151, 187, 205, 1)",
                          pointBackgroundColor: "rgba(151, 187, 205, 1)",
                          pointBorderColor: "#fff",
                          data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="dashboard-chart-container">
              <div className="chart_1">
                <div className="chart-content">
                  <PieChart
                  
                    data={[
                      { title: "One", value: 10, color: "#1FA2FF",label:"one" },
                      { title: "Two", value: 15, color: "#f5af19",label:"two" },
                      { title: "Three", value: 20, color: "#12D8FA",label:"three" },
                    ]}
                    animate={true}
                  />
                </div>
              </div>
              <div className="chart_2">
                <div className="chart-content">
                  <CChart
                    type="line"
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
                          label: "My First dataset",
                          backgroundColor: "rgba(220, 220, 220, 0.2)",
                          borderColor: "rgba(220, 220, 220, 1)",
                          pointBackgroundColor: "rgba(220, 220, 220, 1)",
                          pointBorderColor: "#fff",
                          data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                        },
                        {
                          label: "My Second dataset",
                          backgroundColor: "rgba(151, 187, 205, 0.2)",
                          borderColor: "rgba(151, 187, 205, 1)",
                          pointBackgroundColor: "rgba(151, 187, 205, 1)",
                          pointBorderColor: "#fff",
                          data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </Wrapper>
  )
}

export default GraphPage