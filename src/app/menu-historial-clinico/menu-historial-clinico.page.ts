import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-historial-clinico',
  templateUrl: './menu-historial-clinico.page.html',
  styleUrls: ['./menu-historial-clinico.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule ]
})
export class MenuHistorialClinicoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToPage(route: string) {
    this.router.navigate([route]);
  }

}
