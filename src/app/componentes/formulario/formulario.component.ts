import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  @Output() resultadoCreado = new EventEmitter<number>();

  operandoA : number = 0;
  operandoB : number = 0;

  public sumar() : void {
    this.resultadoCreado.emit(this.operandoA + this.operandoB);
  }

  public restar() : void {
    this.resultadoCreado.emit(this.operandoA - this.operandoB);
  }

  public multiplicar() : void {
    this.resultadoCreado.emit(this.operandoA * this.operandoB);
  }

  public dividir() : void {

    if (this.operandoB == 0) {
      this.resultadoCreado.emit(0);
      return;
    }
    this.resultadoCreado.emit(this.operandoA / this.operandoB);
  }

}
