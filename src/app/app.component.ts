import {Component} from '@angular/core';
import {NavbarComponent} from './Shared/Layout/navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './Shared/Layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'E-commerce';

}
