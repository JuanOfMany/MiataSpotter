import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiataCard } from '../miatacard';

@Component({
  selector: 'app-miata-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class=listing>
      <img class="listing-photo" [src]="miataCard.photo" alt="photo of a yellow miata">
      <div>
        <h2 class="listing-heading">Arrived: </h2>
        <p class="listing-detail">Year: {{miataCard.year}} </p>
        <p class="listing-detail">Color: {{miataCard.color}}</p>
        <p class="listing-detail">Available: {{miataCard.available}}</p>
      </div>
    </section>
  `,
  styleUrls: ['./miata-cards.component.css']
})
export class MiataCardsComponent {
  @Input() miataCard!: MiataCard;
}
