import { Line } from "react-chartjs-2";

const labels = ['apr 1', 'apr 2', 'apr 3', 'apr 4', 'apr 5', 'apr 6', 'apr 7', 'apr 8', 'apr 9', 'apr 10', 'apr 11', 'apr 12', 'apr 13', 'apr 14', 'apr 15', 'apr 16', 'apr 17', 'apr 18', 'apr 19', 'apr 20', 'apr 21', 'apr 22', 'apr 23', 'apr 24', 'apr 25', 'apr 26', 'apr 27', 'apr 28', 'apr 29', 'apr 30',];
// const labels = Utils.months({count: 7});

const data = {
  labels: labels,
  datasets: [
    {
      label: 'my data',
      backgroundColor: [
        '#004f875f',
        // 'papayawhip',
        // 'rgba(255, 159, 64, 0.5)',
        // 'rgba(255, 205, 86, 0.5)',
        // 'rgba(75, 192, 192, 0.5)',
        // 'rgba(54, 162, 235, 0.5)',
        // 'rgba(153, 102, 255, 0.5)',
        // 'rgba(201, 203, 207, 0.5)'
      ],
      borderWidth: 2,
      borderColor: [
        '#004f87',
        // 'black'
        // 'rgb(255, 159, 64)',
        // 'rgb(255, 205, 86)',
        // 'rgb(75, 192, 192)',
        // 'rgb(54, 162, 235)',
        // 'rgb(153, 102, 255)',
        // 'rgb(201, 203, 207)'
      ],
      data: [35, 10, 5, 2, 20, 30, 45, 15, 18, 10, 5, 2, 20, 30, 45, 15, 18, 10, 5, 2, 20, 30, 45, 15, 18, 10, 5, 2, 20, 30, 45, 15, 18],
      className: 'barchart',
      fill: true,
      options: {
        legend: { display: false },
      },
      tension: 0.5,
    },
  ],
};

function bar_chart() {
  return (
    <>
      <Line width={625} data={data} />
    </>
  );
}

export default bar_chart;
