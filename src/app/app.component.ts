import { Component } from '@angular/core';
import { ListaElementosComponent } from './lista-elementos/lista-elementos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaElementosComponent],
  template: '<app-lista-elementos></app-lista-elementos>'
})
export class AppComponent {
  title = 'lista-de-elementos';
}