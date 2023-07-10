import { Line } from "react-chartjs-2";

// const labels = ['furkaan Raza', 'Salman Raza', 'Naved', 'Aalam Malik', 'Firoz Ali','mefoz Ali', 'karim', 'nadeem Ali', 'junaid', 'saleem'];
// const labels = Utils.months({count: 7});


function bar_chart(props) {
    const data = {
      labels: props.labels,
    //   label: label,
      datasets: [
        {
          label: 'my data',
          backgroundColor:[
            'rgb(218 165 32 / 10%)',
            // 'papayawhip'
            // 'rgba(255, 159, 64, 0.5)',
            // 'rgba(255, 205, 86, 0.5)',
            // 'rgba(75, 192, 192, 0.5)',
            // 'rgba(54, 162, 235, 0.5)',
            // 'rgba(153, 102, 255, 0.5)',
            // 'rgba(201, 203, 207, 0.5)'
          ],
          borderWidth: 2,
          borderColor: [
            'goldenrod',
            // 'rgb(255, 159, 64)',
            // 'rgb(255, 205, 86)',
            // 'rgb(75, 192, 192)',
            // 'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
            // 'rgb(201, 203, 207)'
          ],
          data: props.count,
          className:'barchart',
          fill: true,
          options: {
            legend: {display: false},
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
  
  export default bar_chart;
  