import { useEffect } from "react";
import { Chart } from "chart.js";

export default function SquChart() {
  

  useEffect(() => {
    var ctx = document.getElementById("myCharts1").getContext("2d");
    var myCharts1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [100, 144, 146, 200, 400, 301],
            borderColor: "#009AAC",
            backgroundColor: "#009AAC",
            borderWidth: 2,
            borderRadius: 15,
            borderSkipped: false,

          },
        ],
      },
      options: {
        legend: {
          display: false, //This will do the task
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                min: 0,
                max: 400,
                callback: function (value, index, ticks) {
                  if (value === 400) {
                    return "400";
                  }
                  if (value === 200) {
                    return "200";
                  }
                  if (value === 0) {
                    return "0";
                  }
                },
                fontColor: "#3c3c3c70",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <>
      {/* line chart */}

      <canvas height={150} id="myCharts1"></canvas>
    </>
  );
}
