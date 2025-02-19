import {Component, inject, OnInit} from '@angular/core';
import {FlowbiteService} from '../../Services/flowbite.service';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {ButtomComponent} from '../../UI/buttom/buttom.component';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtomComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {


  _flowbiteService = inject(FlowbiteService);
  _breakpointObserver = inject(BreakpointObserver);
  screenSize!: boolean;
  cart_count : number = 0;
  wishlist_count : number = 0;


  constructor() {
  }

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
  }
}
