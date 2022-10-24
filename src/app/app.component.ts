import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string = 'Aplicación Calculadora';
  resultado : number =  0;

  public actualizarResultado(result : number) : void {
    this.resultado = result;
  }
}
