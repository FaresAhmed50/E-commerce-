import {Component, inject, OnInit} from '@angular/core';
import {FlowbiteService} from '../../Services/Flowbit/flowbite.service';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {ButtonComponent} from '../../UI/buttom/button.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {URLService} from '../../../Core/Services/NavServices/urlservice.service';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {


  _flowbiteService : FlowbiteService = inject(FlowbiteService);
  _breakpointObserver :BreakpointObserver = inject(BreakpointObserver);
  _uRLService:URLService = inject(URLService)
  screenSize!: boolean;
  cart_count : number = 0;
  wishlist_count : number = 0;




  ngOnInit() {
    this._flowbiteService.loadFlowbite( flowbite => {});
    this._breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        console.log(result.matches);
        this.screenSize = result.matches;
      } else {
        console.log(false)
        this.screenSize = result.matches;
      }
    });
    this._uRLService.isAuthRoute()
    console.log( "servicesss" , this._uRLService.isAuthRoute())
  }
}
