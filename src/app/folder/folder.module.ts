import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ComponentsModule } from '../components/components.module';

// Componentes personalizados
// import { ProfesionalCardComponent } from '../components/profesional-card/profesional-card.component';
// import { CitaDetalleComponent } from '../components/cita-detalle/cita-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
