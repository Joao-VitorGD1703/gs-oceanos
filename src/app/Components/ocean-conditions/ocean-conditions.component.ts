import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { OceanDataService } from '../../Services/ocean-data.service';
import { OceanData } from '../../types/oceanData';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ResquestType } from '../../types/requestTypes';
declare var bootstrap: any;

@Component({
  selector: 'app-ocean-conditions',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ReactiveFormsModule],
  templateUrl: './ocean-conditions.component.html',
  styleUrls: ['./ocean-conditions.component.css']
})
export class OceanConditionsComponent implements OnInit {
  pag = 1;
  oceanData: OceanData[] = [];
  currentOceanData: OceanData = {} as OceanData;
  oceanForm: FormGroup;

  constructor(
    private oceanDataService: OceanDataService, 
    private formBuilder: FormBuilder
  ) {
    this.oceanForm = this.formBuilder.group({
      regiao: [''],
      statusConservacao: [''],
      especie: [''],
      temperaturaMin: [''],
      temperaturaMax: [''],
      phMin: [''],
      phMax: [''],
      nivelPoluicao: ['']
    });
  }

  ngOnInit(): void {
    this.loadOceanData();
  }

  loadOceanData(): void {
    const req: ResquestType = {
      regiao: this.oceanForm.get('regiao')?.value ?? '',
      statusConservacao: this.oceanForm.get('statusConservacao')?.value ?? '',
      especie: this.oceanForm.get('especie')?.value ?? '',
      temperaturaMin: this.oceanForm.get('temperaturaMin')?.value ?? undefined,
      temperaturaMax: this.oceanForm.get('temperaturaMax')?.value ?? undefined,
      phMin: this.oceanForm.get('phMin')?.value ?? undefined,
      phMax: this.oceanForm.get('phMax')?.value ?? undefined,
      nivelPoluicao: this.oceanForm.get('nivelPoluicao')?.value ?? '',
      pagina: this.pag,
    };

    this.oceanDataService.list(req).subscribe((oceanData) => {
      this.oceanData = oceanData;
    });
  }

  pesquisar(): void {
    this.pag = 1; // Reset to the first page on a new search
    this.loadOceanData();
  }

  mudarPagina(pagInput: number): void {
    this.pag = pagInput;
    this.loadOceanData();
  }

  verDetalhes(ocean: OceanData): void {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    this.currentOceanData = ocean;
    myModal.show();
  }

  trackByFn(index: number, item: any): any {
    return item ? item.id : index;
  }
}
