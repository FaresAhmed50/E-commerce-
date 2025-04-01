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



  indecator1 = true
   card : Card[] = [
    {
      icon : "store.png",
      title : "ADDRESS",
      paragraph : "234 Hai Trieu, Ho Chi Minh City"

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
   card2 :Card[] = [
     {
       icon : "fast delivery.svg",
       title : "Free Shipping",
       paragraph : "Order above $200"
     },
     {
       icon : "money.svg",
       title : "Money-back",
       paragraph : "30 days guarantee"
     },
     {
       icon : "lock 01.svg",
       title : "Secure Payments",
       paragraph : "Secured by Stripe"
     },
     {
       icon : "call.svg",
       title : "24/7 Support",
       paragraph : "Phone and Email support"
     }
   ]

}
