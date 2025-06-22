import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // ✅ Importa IonicModule
import { ProfesionalCardComponent } from './profesional-card/profesional-card.component';
import { CitaDetalleComponent } from './cita-detalle/cita-detalle.component';

@NgModule({
  declarations: [ProfesionalCardComponent, CitaDetalleComponent],
  imports: [CommonModule, IonicModule],
  exports: [ProfesionalCardComponent, CitaDetalleComponent]
})
export class ComponentsModule {}
