import { Component , Input} from '@angular/core';
import {Card} from '../../Interface/card/card'

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  standalone: true,
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() card!: Card[];

}
