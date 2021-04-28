import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP10SirFrontEnd';

  constructor(private route: Router) {}
  utilisateur(): any{
    this.route.navigate(['utilisateur']);
  }
  tags(): any{
    this.route.navigate(['tag']);
  }
}
