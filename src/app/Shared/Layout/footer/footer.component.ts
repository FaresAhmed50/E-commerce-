import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {URLService} from '../../../Core/Services/NavServices/urlservice.service';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  _uRLService = inject(URLService);

  ngOnInit() {
    this._uRLService.isAuthRoute();
  }


}
