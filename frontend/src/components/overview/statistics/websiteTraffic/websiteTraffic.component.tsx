import ReactECharts from "echarts-for-react";
import { ThreeDots } from "react-bootstrap-icons";

const WebsiteTrafficComponent = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "18",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 1048,
            name: "Search Engine",
          },
          {
            value: 735,
            name: "Direct",
          },
          {
            value: 580,
            name: "Email",
          },
          {
            value: 484,
            name: "Union Ads",
          },
          {
            value: 300,
            name: "Video Ads",
          },
        ],
      },
    ],
  };

  return (
    <div className="card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown">
          <ThreeDots />
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Today
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              This Month
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              This Year
            </a>
          </li>
        </ul>
      </div>

      <div className="card-body pb-0">
        <h5 className="card-title">
          Website Traffic <span>| Today</span>
        </h5>

        {/* <ReactECharts
          option={option}
          style={{ minHeight: "400px" }}
          className="echart"
        /> */}
      </div>
    </div>
  );
};

export default WebsiteTrafficComponent;
