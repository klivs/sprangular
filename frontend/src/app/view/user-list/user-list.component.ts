import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {User} from "../../model/user/user";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    users: MatTableDataSource<User>;
    displayedColumns: string[] = ['uuid', 'username', 'firstName', 'lastName'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.list().subscribe(
            value => {
                this.users = new MatTableDataSource<User>(value);
                this.users.paginator = this.paginator;
                this.users.sort = this.sort;
            },
            error1 => {
                console.error(error1);
            });
    }

}
