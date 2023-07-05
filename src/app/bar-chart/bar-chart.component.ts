import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment'; // Import the Moment.js adapter

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const data = [
      {"createdAt":"2023-06-04T07:46:41.977Z","message":"message 1","id":"1"},{"createdAt":"2023-03-03T15:21:21.254Z","message":"message 2","id":"2"},{"createdAt":"2023-05-11T14:58:57.530Z","message":"message 3","id":"3"},{"createdAt":"2023-03-31T10:50:29.828Z","message":"message 4","id":"4"},{"createdAt":"2022-12-25T02:14:08.442Z","message":"message 5","id":"5"},{"createdAt":"2023-01-14T19:45:36.808Z","message":"message 6","id":"6"},{"createdAt":"2022-10-02T07:43:07.918Z","message":"message 7","id":"7"},{"createdAt":"2022-10-10T11:20:00.531Z","message":"message 8","id":"8"}
    ];

    const chartData = data.map(item => ({
      x: item.createdAt,
      y: parseInt(item.id)
    }));

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'XY Chart',
            data: chartData,
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          x: {
            type: 'time', // Use the 'time' scale
            time: {
              displayFormats: {
                day: 'MMM D' // Format for displaying dates
              }
            }
          },
          y: {
            type: 'linear',
            beginAtZero: true
          }
        }
      }
    });
  }
}
