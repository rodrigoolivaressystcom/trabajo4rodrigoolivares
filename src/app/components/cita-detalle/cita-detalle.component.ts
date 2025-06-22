
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cita-detalle',
  templateUrl: './cita-detalle.component.html',
  styleUrls: ['./cita-detalle.component.scss'],
  standalone: false,
})
export class CitaDetalleComponent {
  @Input() profesional: string = '';
  @Input() fecha: string = '';
  @Input() hora: string = '';
}



