import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
  { title: 'Inicio', url: '/folder/inbox', icon: 'home' },
  { title: 'Agendar Cita', url: '/folder/agendar', icon: 'calendar' },
  { title: 'Profesionales', url: '/folder/profesionales', icon: 'people' },
  { title: 'Historial', url: '/folder/historial', icon: 'time' },
  { title: 'Notificaciones', url: '/folder/notificaciones', icon: 'notifications' },
  { title: 'Mi Perfil', url: '/folder/perfil', icon: 'person-circle' },
  { title: 'Cerrar Sesión', url: '/folder/logout', icon: 'log-out' }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
