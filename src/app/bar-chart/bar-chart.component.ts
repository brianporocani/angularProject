import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart: any;
  
  data = [
    {"createdAt":"2023-06-04T07:46:41.977Z","message":"message 1","id":"1"},
    {"createdAt":"2023-03-03T15:21:21.254Z","message":"message 2","id":"2"},
    {"createdAt":"2023-05-11T14:58:57.530Z","message":"message 3","id":"3"},
    {"createdAt":"2023-03-31T10:50:29.828Z","message":"message 4","id":"4"}
  ];

  ngOnInit() {
    this.createBarChart();
  }

  // ...

createBarChart() {
  const dates = this.data.map(entry => new Date(entry.createdAt));
  const messages = this.data.map(entry => entry.message);

  this.chart = new Chart('canvas', {
    type: 'bar',
    data: {
      labels: messages,
      datasets: [
        {
          label: 'Messages',
          data: dates,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM D'
            }
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10
          }
        },
        y: {
          beginAtZero: true // Updated line
        }
      }
    }
  });
  }
}