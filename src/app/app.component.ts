import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit{
    currentUser: User;
    isAdmin: boolean = false;
    isUser:boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        if((this.currentUser!=null)) {
            if(this.currentUser.username == "admin") {
                this.isAdmin = true;
            }

            if(this.currentUser.username == "user") {
                this.isUser = true;
            }
        }
    }
    ngOnInit(): void {

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
       
        if((this.currentUser!=null)) {
            if(this.currentUser.username == "admin") {
                this.isAdmin = true;
            }

            if(this.currentUser.username == "user") {
                this.isUser = true;
            }
        }
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    goToAdminDashboard() {
        this.router.navigate(['/admin']);
    }

    goToUserDashboard() {
        this.router.navigate(['/user']);
    }
}