import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  validateLogin() {
    if (!this.email || !this.password) {
      this.errorMessage = "Email and password can't be empty";
      return;
    }
    // Basic authentication logic (replace with real authentication service)
    if (this.email === 'test@example.com' && this.password === 'password') {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}

