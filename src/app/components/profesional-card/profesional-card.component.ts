
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profesional-card',
  templateUrl: './profesional-card.component.html',
  styleUrls: ['./profesional-card.component.scss'],
  standalone: false,
})
export class ProfesionalCardComponent {
  @Input() nombre: string = '';
  @Input() especialidad: string = '';
}
