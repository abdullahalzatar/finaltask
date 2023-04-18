
import { useEffect } from "react"
import { Chart } from "chart.js";
import { colors } from "@mui/material";

export default function LineChart() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ["Jan 2022", "Jan 2022", "Mar 2022", "Apr 2022", "May 2022", "Jun 2022", "Jul 2022", "Aug 2022", "Sep 2022", "Oct 2022", "Nov 2022", "Dec 2022"],
            datasets: [ {
              data: [20000, 32000, 52000, 43000, 73000, 43000, 23000, 52000, 43000, 90000,50000, 63000],
              label: "Rejected",
              borderColor: "#009AAC",
              backgroundColor: "#009AAC",
              fill: false,
            }
            ],
            
          },options: {
            
            legend: {
               display: false //This will do the task
            },
            scales:{
             
                yAxes: [{
                    gridLines: {
                        display: false,
                   },
                   ticks: {
                    min: 0,
                    max:100000,
                    callback:  function(value, index, ticks) {
                      if(value === 100000){
                        return "100K";
                      }
                      if(value === 80000){
                        return "80K";
                      }
                      if(value === 60000){
                        return "60K";
                      }
                      if(value === 40000){
                        return "40K";
                      }
                      if(value === 20000){
                        return "20K";
                      }
                      if(value === 0){
                        return "0";
                      }
                      
                    },
                    fontColor:"#3c3c3c70",
                    
                    
                }
                }],
                 xAxes: [{
                    gridLines: {
                        borderDash: [5, 5],
                   },
                   ticks:{
                    fontColor:"#3c3c3c70",
                   },
                  
                }],
                
            },
         }
        });
      }, [])

  return (
    <>
      {/* line chart */}
     
          <canvas height={50} id='myChart'></canvas>
        
    </>
  )
}
