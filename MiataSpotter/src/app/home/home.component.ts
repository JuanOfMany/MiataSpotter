import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiataCardsComponent } from '../miata-cards/miata-cards.component';
import { MiataCard } from '../miatacard';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MiataService } from '../miata.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MiataCardsComponent, ReactiveFormsModule, HeroDetailComponent],
  template: `
  <section class="main-container">
    <app-hero-detail></app-hero-detail>
    <div class="card-container">
      <app-miata-cards
        *ngFor="let miataCard of miataTestList"
        [miataCard]="miataCard">
      </app-miata-cards>
    </div>
  </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  miataTestList: MiataCard[] = [];
  filteredMiataList: MiataCard[] = [];
  miataService: MiataService = inject(MiataService);

  constructor() {
    this.miataService.getAllMiatas().then((miataTestList: MiataCard[]) => {
      this.miataTestList = miataTestList;
      this.filteredMiataList = miataTestList
    })
  }

}
