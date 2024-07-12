import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  validateSignUp() {
    if (!this.email || !this.password || !this.repeatPassword) {
      this.errorMessage = "All fields can't be empty";
      return;
    }
    if (this.password !== this.repeatPassword) {
      this.errorMessage = "Passwords don't match";
      return;
    }

    this.authService.register(this.email, this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Sign-up failed';
        console.error(err);
      },
    });
  }
}
