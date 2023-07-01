import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('myChart') chartRef!: ElementRef;

  ngAfterViewInit() {
    const chartElement = this.chartRef.nativeElement;
    const ctx = chartElement.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 20, 30],
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
            borderColor: 'rgba(75, 192, 192, 1)', // Border color
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
