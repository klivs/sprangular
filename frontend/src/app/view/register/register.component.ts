import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string;
  registrationForm: FormGroup;
  isSubmitted: boolean;

  constructor(private auth: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.isSubmitted = false;

    this.registrationForm = this.fb.group({
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required]],
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
      },
      {
        validators: MustMatch('password', 'confirmPassword')
      });
    console.log('this is it!');
    console.log(this.registrationForm.value);

  }

  get rf() {
    return this.registrationForm.controls;
  }

  register() {
    this.isSubmitted = true;
    if (this.registrationForm.invalid) {
      console.log(this.registrationForm);
      return;
    }

    this.auth.register(this.registrationForm.value)
      .subscribe(
        value => {
          this.message = 'Registered successfully';
        },
        error => {
          console.error(error);
          this.message = 'Failed to register.';
        });
  }

  reset() {
    this.registrationForm.clearValidators();
    this.registrationForm.reset();
  }

}

export function MustMatch(controlName, matchingControlName) {

  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}
