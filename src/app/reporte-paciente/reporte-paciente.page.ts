import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-reporte-paciente',
  templateUrl: './reporte-paciente.page.html',
  styleUrls: ['./reporte-paciente.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule]
})
export class ReportePacientePage implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const canvas = document.getElementById('graficoDiagnosticos') as HTMLCanvasElement;
    
    if (!canvas) return;

    new Chart(canvas, {
      type: 'pie', // Tipo de gráfico circular
      data: {
        labels: ['Leche Formula', 'Lactancia Materna', 'Leche Autologa', 'Pasteurizada',],
        datasets: [{
          data: [30.5, 20, 15, 25], // Datos de ejemplo
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Permite ajustar la altura libremente
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}
