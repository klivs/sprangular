import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user/user';
import {AuthService} from '../../service/auth/auth.service';

@Component({
    selector: 'app-protected-resource',
    templateUrl: './protected-resource.component.html',
    styleUrls: ['./protected-resource.component.css']
})
export class ProtectedResourceComponent implements OnInit {

    user: User;
    message: string;

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.user = this.auth.user;
        this.message = 'You are logged in!';
    }

}
