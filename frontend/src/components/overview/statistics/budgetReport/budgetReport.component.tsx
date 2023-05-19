import ReactEcharts from "echarts-for-react";
import { ThreeDots } from "react-bootstrap-icons";

export default function BudgetReportComponent() {
  const option = {
    legend: {
      data: ["Allocated Budget", "Actual Spending"],
    },
    radar: {
      // shape: 'circle',
      indicator: [
        {
          name: "Sales",
          max: 6500,
        },
        {
          name: "Administration",
          max: 16000,
        },
        {
          name: "Information Technology",
          max: 30000,
        },
        {
          name: "Customer Support",
          max: 38000,
        },
        {
          name: "Development",
          max: 52000,
        },
        {
          name: "Marketing",
          max: 25000,
        },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "Allocated Budget",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: "Actual Spending",
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
          Budget Report <span>| This Month</span>
        </h5>

        {/* <ReactEcharts
          style={{ minHeight: "400px" }}
          className="echart"
          option={option}
        /> */}
      </div>
    </div>
  );
}
