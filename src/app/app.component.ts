import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
=======
  templateUrl: 'app.component.html',
>>>>>>> 3af2b3d7d3a1133a472ec90df24c55292df706d5
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
