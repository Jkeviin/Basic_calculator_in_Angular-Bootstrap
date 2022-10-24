import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string = 'Aplicación Calculadora';
  operandoA : number = 0;
  operandoB : number = 0;
  resultado : number =  0;

  public sumar() : void {
    this.resultado = this.operandoA + this.operandoB;
  }

  public restar() : void {
    this.resultado = this.operandoA - this.operandoB;
  }

  public multiplicar() : void {
    this.resultado = this.operandoA * this.operandoB
  }

  public dividir() : void {

    if (this.operandoB == 0) {
      this.resultado =  0;
      return;
    }
    
    this.resultado = this.operandoA / this.operandoB;
  }

}
