import "./Dashboard_style.css";
import Chart from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import { DataGrid } from "@mui/x-data-grid";
import Pie_chart from "./charts/pie_chart";
import Bar_chart from "./charts/line_chart";
import Customer_table from "./tables/customer_table";
import Radar from "./charts/radar_chart";
import Menu from "./pages/menu";
import Billing from "./billing/Bill_menu";
import TodayBooking from "./tables/Today_Bookings";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [customersData, setCustomersData] = useState([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date().toISOString().slice(0, 10);
  const customersForToday = customersData.filter((customer) =>
    customer.createdAt.startsWith(today)
  );
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let monthlySale = 0;
  let monthwalkin = 0;
  let todaySale = 0;
  let Todaywalkin = 0;

  customersData.forEach((customer) => {
    const customerDate = new Date(customer.createdAt);
    const customerMonth = customerDate.getMonth();
    if (customerMonth === currentMonth) {
      monthlySale += parseFloat(customer.custumerAmount);
      monthwalkin += 1;
    }
  });

  customersForToday.forEach((customer) => {
    todaySale += parseFloat(customer.custumerAmount);
    Todaywalkin += 1;
  });

  const currentYear = currentDate.getFullYear();
  const dailyTotals = {};
  customersData.forEach((customer) => {
    const createdAt = new Date(customer.createdAt);
    if (
      createdAt.getMonth() === currentMonth &&
      createdAt.getFullYear() === currentYear
    ) {
      const day = createdAt.getDate();
      const servicePrice = parseInt(
        customer.custumerServices_id[0].servicePrice
      );
      if (dailyTotals[day]) {
        dailyTotals[day] += servicePrice;
      } else {
        dailyTotals[day] = servicePrice;
      }
    }
  });

  const resultArray = [];

  for (const day in dailyTotals) {
    const dayOfMonth = parseInt(day);
    const currentDate = new Date();
    currentDate.setDate(dayOfMonth);

    const monthName = monthNames[currentDate.getMonth()];
    const dateWithMonth = `${monthName} ${dayOfMonth}`;

    resultArray.push(dateWithMonth);
  }
  const totalPriceArray = Object.values(dailyTotals);
  console.log(totalPriceArray);
  console.log(resultArray);

  useEffect(() => {
    getcustomerData();
  }, []);

  const getcustomerData = () => {
    axios.get(`${process.env.REACT_APP_API}/custumer/get`).then(function (res) {
      setCustomersData(res.data);
    });
  };

  const dataset = [
    {
      names: "today sale",
      count: `₹${todaySale}`,
    },
    {
      names: "Monthly Sale",
      count: `₹${monthlySale}`,
    },
    {
      names: "Today walkin's",
      count: Todaywalkin,
    },
    {
      names: "This month walkin",
      count: monthwalkin,
    },
  ];

  return (
    <div className="home">
      <div className="home_dashboard">
        <div className="sale_list">
          {dataset.map((item) => (
            <div className="sale_card">
              <div className="today_sale">{item.names}</div>
              <div className="money">{item.count}</div>
            </div>
          ))}
        </div>
        <div className="sale">Employee-wise Revenue</div>
        <div className="chart">
          <div className="bar">
            monthly sale chart1
            <Bar_chart />
          </div>
        </div>
        <div className="cusChart">
          <div className="cusRadar">
            <div className="sale">Payment Method Comparison - ₹49,368.00</div>
            <div className="bar">
              monthly sale chart1
              <Pie_chart />
            </div>
          </div>
          <div className="cusRadar">
            <div className="sale">sales - ₹49,368.00</div>
            <div className="bar">
              monthly sale chart1
              <Radar />
            </div>
          </div>
        </div>
        <div className="sale">Today Bookings</div>
        <div className="data_table">
          <div>
            <TodayBooking />
          </div>
        </div>
        <div className="bill">
          <Billing />
        </div>
      </div>
    </div>
  );
}

export default Home;
