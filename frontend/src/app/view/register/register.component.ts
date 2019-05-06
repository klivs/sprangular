import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    message = {
        success: null,
        error: null
    };
    registrationForm: FormGroup;
    isSubmitted: boolean;

    constructor(private auth: AuthService, private fb: FormBuilder) {
    }

    get rf() {
        return this.registrationForm.controls;
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
    }

    register() {
        this.isSubmitted = true;
        if (this.registrationForm.invalid) {
            return;
        }

        this.auth.register(this.registrationForm.value)
            .subscribe(
                value => {
                    this.message.success = "Registered successfully";
                    this.message.error = null;
                },
                error => {
                    this.message.error = "Failed to register.";
                    this.message.success = null;
                });
    }

    reset() {
        this.registrationForm.clearValidators();
        this.registrationForm.reset();
        this.message = null;
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
