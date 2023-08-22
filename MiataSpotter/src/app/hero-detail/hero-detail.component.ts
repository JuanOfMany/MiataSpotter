import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MiataService } from '../miata.service';

@Component({
  selector: 'app-hero-detail',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  template: `<div
    class="hero-container"
    [ngStyle]="{
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./assets/junkyard.avif)',
      backgroundSize: 'cover'
    }"
  >
    <div class="img-holder">
      <img
        class="brand-logo"
        src="/assets/Miata.png"
        alt="logo"
        aria-hidden="true"
      />
    </div>
    <div class="text-holder">
      <h1 class="hero-text">
        Want alerts whenever there's a Miata at the Pick N' Pull?
      </h1>
    </div>
    <form [formGroup]="signUpForm" (submit)="submitSignUp()">
    <div class="input-container">
      <label for="first-name">First Name:</label>
      <input type="text" placeholder="Enter your name..." formControlName="firstName" required>
    </div>
    <div class="input-container">
      <label for="phone-number">Phone Number:</label>
      <input type="tel" placeholder="Enter your phone number..." pattern="[0-9]{3}[0-9]{3}[0-9]{4}" formControlName="phoneNumber" required>
    </div>
    <button class="primary" type="submit" class="primary">Sign Up!</button>
  </form>
  <div class="text-holder">
    <h2 class="see-below-text">See examples below!</h2>
  </div>
  </div>`,
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {

  miataService: MiataService = inject(MiataService);

  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  constructor() {}
  submitSignUp() {
    this.miataService.signUpForNotifications(
      this.signUpForm.value.firstName ?? '',
      this.signUpForm.value.phoneNumber ?? ''
    );
  }
}
