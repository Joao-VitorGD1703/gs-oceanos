import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { OceanDataService } from '../../Services/ocean-data.service';
import { OceanData } from '../../types/oceanData';

@Component({
  selector: 'app-ocean-conditions',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './ocean-conditions.component.html',
  styleUrl: './ocean-conditions.component.css'
})
export class OceanConditionsComponent {

  oceanData: OceanData[] = [];

  constructor(private oceanDataService: OceanDataService) {
    this.list();
  }

  list(): void {
    //retorna uma lista de clientes do servidor e atribui à propriedade 'clientes'
     this.oceanDataService.list().subscribe((list) => (this.oceanData = list));
  }
    //método para remover um cliente
  ngOnInit(): void {
    this.list();
  }

}
