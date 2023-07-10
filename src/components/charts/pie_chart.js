import { Doughnut } from "react-chartjs-2";


const pie_label = ["Cash", "Paytm", "Card"];
const pie = {
  labels: pie_label,
  datasets: [
    {
      label: "Total Amount",
      backgroundColor:[
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        // 'rgba(75, 192, 192, 0.5)',
        // 'rgba(54, 162, 235, 0.5)',
        // 'rgba(153, 102, 255, 0.5)',
        // 'rgba(201, 203, 207, 0.5)'
      ],
      borderWidth: 2,
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        // 'rgb(75, 192, 192)',
        // 'rgb(54, 162, 235)',
        // 'rgb(153, 102, 255)',
        // 'rgb(201, 203, 207)'
      ],
      data: [35, 10, 5],
      // className:'barchart',
    },
  ],
};

const displayData = [
  {
    payment:"cash",
    amount:"₹2453"
  },
  {
    payment:"paytm",
    amount:"₹2453"
  },
  {
    payment:"card",
    amount:"₹2453"
  },
]

function pie_chart() {


  return (
    <div className="pieChart">
        <Doughnut data={pie} />
        <div className="pieData" >
          {
            displayData.map((item) => (
              <div className="displayData" >
                <div>{item.payment}</div>
                <div>{item.amount}</div>
              </div>
            ))
          }
        </div>
    </div>
  );
}

export default pie_chart;
