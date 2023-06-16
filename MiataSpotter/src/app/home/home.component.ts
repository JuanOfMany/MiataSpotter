import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiataCardsComponent } from '../miata-cards/miata-cards.component';
import { MiataCard } from '../miatacard';
import { MiataService } from '../miata.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MiataCardsComponent, ReactiveFormsModule],
  template: `
  <section class="main-container">
    <form [formGroup]="signUpForm" (submit)="submitSignUp()">
      <label for="first-name">First Name:</label>
      <input type="text" placeholder="Enter your name..." formControlName="firstName" required>
      <label for="phone-number">Phone Number:</label>
      <input type="tel" placeholder="Enter your phone number to get alerts..." pattern="[0-9]{3}[0-9]{3}[0-9]{4}" formControlName="phoneNumber" required>
      <button class="primary" type="submit" class="primary">Sign Up!</button>
    </form>
    <app-miata-cards
      *ngFor="let miataCard of miataTestList"
      [miataCard]="miataCard">
    </app-miata-cards>
  </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  miataTestList: MiataCard[] = [];
  filteredMiataList: MiataCard[] = [];
  miataService: MiataService = inject(MiataService);

  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  constructor() {
    this.miataService.getAllMiatas().then((miataTestList: MiataCard[]) => {
      this.miataTestList = miataTestList;
      this.filteredMiataList = miataTestList
    })
  }

  submitSignUp() {
    this.miataService.signUpForNotifications(
      this.signUpForm.value.firstName ?? '',
      this.signUpForm.value.phoneNumber ?? ''
    )
  }
}
