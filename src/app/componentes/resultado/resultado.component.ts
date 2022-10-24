import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent{

  @Input() resultado : number = 0; // se inicializa en 0 para evitar errores

}
