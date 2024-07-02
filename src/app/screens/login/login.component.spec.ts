import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an error message if email or password is empty', () => {
    component.email = '';
    component.password = '';
    component.validateLogin();
    expect(component.errorMessage).toBe("Email and password can't be empty");

    component.email = 'test@example.com';
    component.password = '';
    component.validateLogin();
    expect(component.errorMessage).toBe("Email and password can't be empty");

    component.email = '';
    component.password = 'password';
    component.validateLogin();
    expect(component.errorMessage).toBe("Email and password can't be empty");
  });

  it('should navigate to /home if email and password are correct', () => {
    spyOn(router, 'navigate');

    component.email = 'test@example.com';
    component.password = 'password';
    component.validateLogin();

    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should show an error message if email or password are incorrect', () => {
    component.email = 'wrong@example.com';
    component.password = 'wrongpassword';
    component.validateLogin();
    expect(component.errorMessage).toBe('Invalid email or password');
  });
});
