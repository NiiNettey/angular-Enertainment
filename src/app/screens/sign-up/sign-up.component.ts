import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule ,RouterLink, RouterLinkActive],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  validateSignUp() {
    if (!this.email || !this.password || !this.repeatPassword) {
      this.errorMessage = "All fields can't be empty";
      return;
    }
    if (this.password !== this.repeatPassword) {
      this.errorMessage = "Passwords don't match";
      return;
    }
    // Basic signup logic (replace with real signup service)
    if (this.email && this.password === this.repeatPassword) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Sign-up failed';
    }
  }
}
