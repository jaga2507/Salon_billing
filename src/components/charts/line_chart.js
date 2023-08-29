import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";


function Bar_chart() {

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

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const resultArray = [];
  const dailyTotals = {};

  for (let day = 1; day <= daysInMonth; day++) {
    dailyTotals[day] = 0;
  }

  customersData.forEach((customer) => {
    const createdAt = new Date(customer.createdAt);
    if (
      createdAt.getMonth() === currentMonth - 1 &&
      createdAt.getFullYear() === currentYear
    ) {
      const day = createdAt.getDate();
      const servicePrice = parseInt(
        customer.custumerServices_id[0].servicePrice
      );
      dailyTotals[day] += servicePrice;
    }
  });

  for (const day in dailyTotals) {
    const dayOfMonth = parseInt(day);
    const currentDate = new Date();
    currentDate.setDate(dayOfMonth);
    const monthName = monthNames[currentDate.getMonth()];
    const dateWithMonth = `${monthName} ${dayOfMonth}`;

    resultArray.push(dateWithMonth);
  }
  const totalPriceArray = Object.values(dailyTotals);

  useEffect(() => {
    getcustomerData();
  }, []);

  const getcustomerData = () => {
    axios.get(`${process.env.REACT_APP_API}/custumer/get`).then(function (res) {
      setCustomersData(res.data);
    });
  };


  const data = {
    labels: resultArray,
    datasets: [
      {
        label: 'my data',
        backgroundColor: [
          '#004f875f',
        ],
        borderWidth: 2,
        borderColor: [
          '#004f87',
        ],
        data: totalPriceArray,
        className: 'barchart',
        fill: true,
        options: {
          legend: { display: false },
        },
        tension: 0.5,
      },
    ],
  };

  return (
    <>
      <Line width={625} data={data} />
    </>
  );
}

export default Bar_chart;
