import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-elementos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-elementos.component.html',
  styleUrls: ['./lista-elementos.component.css']
})
export class ListaElementosComponent {
  elementos: string[] = [];
  nuevoElemento: string = '';

  agregarElemento() {
    if (this.nuevoElemento.trim() !== '') {
      this.elementos.push(this.nuevoElemento);
      this.nuevoElemento = '';
    }
  }
}