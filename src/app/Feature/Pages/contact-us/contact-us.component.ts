import {Component, Output} from '@angular/core';
import {Card} from '../../../Shared/Interface/card/card';
import {CardComponent} from '../../../Shared/UI/card/card.component';

@Component({
  selector: 'app-contact-us',
  imports: [
    CardComponent
  ],
  templateUrl: './contact-us.component.html',
  standalone: true,
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {



   card : Card[] = [
    {
      icon : "store.png",
      title : "ADDRESS",
      paragraph : "234 Hai Trieu, Ho Chi Minh City, \n" +
        "Viet Nam"
    },
    {
      icon : "call.svg",
      title : "Contact Us",
      paragraph : "+84 234 567 890"
    },
    {
      icon : "mail.png",
      title : "Email",
      paragraph : "hello@3legant.com"
    },
  ];
}
