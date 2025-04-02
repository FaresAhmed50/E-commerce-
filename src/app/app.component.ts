import {afterNextRender, Component, inject, OnInit} from '@angular/core';
import {NavbarComponent} from './Shared/Layout/navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './Shared/Layout/footer/footer.component';
import {FlowbiteService} from './Shared/Services/Flowbit/flowbite.service';
import {AuthServiceService} from './Core/Services/auth/auth-service.service';

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
export class AppComponent implements OnInit  {
  title = 'E-commerce';

  _flowbiteService : FlowbiteService = inject(FlowbiteService);
  _authService : AuthServiceService = inject(AuthServiceService)

  constructor() {
    afterNextRender(()=>{
      this._authService.longedINChecker();
    })
  }

  ngOnInit() {
    this._flowbiteService.loadFlowbite(flowbite => {});

  }


}
