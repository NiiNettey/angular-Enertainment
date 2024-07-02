import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, SignUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should show an error message if any fields are empty", () => {
    component.email = '';
    component.password = '';
    component.repeatPassword = '';
    component.validateSignUp();
    expect(component.errorMessage).toBe("All fields can't be empty");

    component.email = 'test@example.com';
    component.password = '';
    component.repeatPassword = '';
    component.validateSignUp();
    expect(component.errorMessage).toBe("All fields can't be empty");

    component.email = 'test@example.com';
    component.password = 'password';
    component.repeatPassword = '';
    component.validateSignUp();
    expect(component.errorMessage).toBe("All fields can't be empty");
  });

  it("should show an error message if passwords don't match", () => {
    component.email = 'test@example.com';
    component.password = 'password';
    component.repeatPassword = 'differentPassword';
    component.validateSignUp();
    expect(component.errorMessage).toBe("Passwords don't match");
  });

  it('should navigate to /home if email and passwords are correct', () => {
    spyOn(router, 'navigate');

    component.email = 'test@example.com';
    component.password = 'password';
    component.repeatPassword = 'password';
    component.validateSignUp();

    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should show an error message if sign-up fails', () => {
    component.email = 'test@example.com';
    component.password = 'password';
    component.repeatPassword = 'password123';
    component.validateSignUp();
    expect(component.errorMessage).toBe("Passwords don't match");
  });
});
