import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    message: string;
    isSubmitted = false;

    constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
    }

    get lf() {
        return this.loginForm.controls;
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login() {
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.auth.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
            user => {
                this.auth.user = user;
                this.auth.baseAuth = btoa(this.loginForm.value.username + ':' + this.loginForm.value.password);
                this.router.navigate(['/protected']);
            },
            error => {
                this.auth.deAuth();
                this.message = 'Login failed!';
            });
    }

}
