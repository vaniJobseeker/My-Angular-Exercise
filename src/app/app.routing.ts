import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { UserDashboardComponent } from './user/user.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserDashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);