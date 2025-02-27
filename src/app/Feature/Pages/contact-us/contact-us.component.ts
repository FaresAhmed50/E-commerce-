import { Component } from '@angular/core';
import {Card} from '../../../Shared/Interface/card/card';
import {CardComponent} from '../../../Shared/UI/card/card.component';

@Component({
  selector: 'app-contact-us',
  imports: [
    CardComponent
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  card : Card[] = [
    {
      icon : "mail.png",
      title : "Hello",
      paragraph : "Test"
    }
  ];

}
