import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) {
    }

    logout(): any {
        setTimeout(() => {
            this.authService.deAuth();
            this.router.navigate(['/']);
        }, 3000);
    }

    ngOnInit(): void {
        this.logout();
    }
}
