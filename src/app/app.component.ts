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
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'E-commerce';

  _flowbiteService : FlowbiteService = inject(FlowbiteService);
  _authService : AuthServiceService = inject(AuthServiceService)


  ngOnInit() {
    this._flowbiteService.loadFlowbite(flowbite => {});
    this._authService.logedINChecker();
  }


}
