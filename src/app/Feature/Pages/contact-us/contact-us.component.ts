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
      icon : "mail.png",
      title : "Hello",
      paragraph : "Test"
    },
    {
      icon : "mail.png",
      title : "Helloooo",
      paragraph : "Test"
    },
    {
      icon : "mail.png",
      title : "Hellopppooo",
      paragraph : "Test"
    },
     {
       icon : "mail.png",
       title : "Helloppppppp",
       paragraph : "Test"
     }
  ];

}
