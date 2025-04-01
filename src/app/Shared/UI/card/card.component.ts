import {Component, inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NgStyle } from '@angular/common';
import { Card } from '../../Interface/card/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnChanges, OnInit {
  @Input() cards!: Card[];
  @Input() indicator!: boolean;
  _breakpointObserver = inject(BreakpointObserver);

  cardWidth: string = '85%';
  cardsPerRow: number = 1;

  ngOnInit() {
    this.breakpointObserver();
  }

  breakpointObserver(){

    this._breakpointObserver
      .observe([
        '(max-width: 639px)',
        '(min-width: 640px) and (max-width: 767px)',
        '(min-width: 768px) and (max-width: 1023px)',
        '(min-width: 1280px)',
      ])
      .subscribe((result: BreakpointState) => {
        if (result.breakpoints['(max-width: 639px)']) {
          // Extra small screens
          this.cardsPerRow = 1;
        } else if (result.breakpoints['(min-width: 640px) and (max-width: 767px)']) {
          // Small screens
          this.cardsPerRow = 1;
        } else if (result.breakpoints['(min-width: 768px) and (max-width: 1023px)']) {
          // Medium screens
          this.cardsPerRow = 2;
        }else if (result.breakpoints['(min-width: 1280px)']) {
          // Extra large screens
          this.cardsPerRow = this.cards.length;
        }

        // Update the card width based on the number of cards per row
        this.updateCardWidth();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cards'] && this.cards) {
      this.updateCardWidth();
    }
  }

  updateCardWidth() {
    // Calculate the width dynamically based on the number of cards per row
    this.cardWidth = `${92 / this.cardsPerRow}%`;
  }
}
