import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  standalone: false,
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public pageId: string = '';
  public mostrarDetalle: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private alertController: AlertController, 
    private router: Router
  ) {}

  ngOnInit() {
    this.pageId = this.activatedRoute.snapshot.paramMap.get('id') || 'inbox';
  }

  async confirmarCerrarSesion() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sí',
          handler: () => {

          // Borrar datos del almacenamiento
          localStorage.clear();
          sessionStorage.clear();

            // Redirige a la página de logout o login
            this.router.navigateByUrl('/folder/logout');
          },
        },
      ],
    });

    await alert.present();
  }

  mostrarDetalleCita() {
    this.mostrarDetalle = true;
  }
  
  async agendarCita() {
    const alert = await this.alertCtrl.create({
      header: 'Cita Agendada',
      message: 'Tu cita ha sido registrada con éxito.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-folder',
//   standalone: false,
//   templateUrl: './folder.page.html',
//   styleUrls: ['./folder.page.scss'],
// })
// export class FolderPage implements OnInit {
//   public pageId: string = '';

//   constructor(private activatedRoute: ActivatedRoute) {}

//   ngOnInit() {
//     this.pageId = this.activatedRoute.snapshot.paramMap.get('id') || 'inbox';
//   }
// }
