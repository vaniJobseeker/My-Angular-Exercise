import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'user.component.html' })
export class UserDashboardComponent {
    loading = false;
    users: User[];
    currentUserToken: string;
    currentUser: User;

    constructor(private userService: UserService, private authService: AuthenticationService) { }

    ngOnInit() {
        this.loading = true;
        this.currentUserToken = this.authService.currentUserValue.token;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });

        this.authService.currentUser.subscribe(x => this.currentUser = x);
    }
}