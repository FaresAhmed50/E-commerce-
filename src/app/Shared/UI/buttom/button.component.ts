import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [
    RouterLink
  ],
  templateUrl: './button.component.html',
  standalone: true,
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() href!: string;

}
