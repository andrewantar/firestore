import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AuthGuard } from '../core/auth.guard';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  constructor(public auth: AuthService) { }
}

const routes: Routes = [
  ///...
  { path: 'notes', component: UserProfileComponent,  canActivate: [AuthGuard] },
];