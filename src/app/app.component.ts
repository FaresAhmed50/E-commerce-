import {Component, inject, OnInit} from '@angular/core';
import {FlowbiteService} from './Shared/Services/flowbite.service';
import {RouterLink} from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  title = 'E-commerce';

  _flowbiteService = inject(FlowbiteService);
  _breakpointObserver = inject(BreakpointObserver);
   screenSize!: boolean;

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
