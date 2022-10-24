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
    if(!this.Validacion()) return;
    this.resultadoCreado.emit(this.operandoA + this.operandoB);
  }

  public restar() : void {
    if(!this.Validacion()) return;
    this.resultadoCreado.emit(this.operandoA - this.operandoB);
  }

  public multiplicar() : void {
    if(!this.Validacion()) return;
    this.resultadoCreado.emit(this.operandoA * this.operandoB);
  }

  public dividir() : void {

    if(!this.Validacion()) return;

    if (this.operandoB == 0) {
      this.resultadoCreado.emit(0);
      return;
    }
    this.resultadoCreado.emit(this.operandoA / this.operandoB);
  }

  private Validacion(): boolean {
    if(this.operandoA == null || this.operandoB == null){
      alert("Los operandos no pueden ser nulos");
      return false
    }

    return true
  }

  public limpiar() : void {
    this.operandoA = 0;
    this.operandoB = 0;
    this.resultadoCreado.emit(0);
  }
}
