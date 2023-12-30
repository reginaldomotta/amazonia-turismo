import { Component } from '@angular/core';
import { ToastController} from '@ionic/angular'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(public toastController: ToastController) {}

  openSite(url: string) {
    window.open(url);
  }

  async like(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Obrigado por curtir',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
