import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NavbarComponent} from './Shared/Layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'E-commerce';

}
