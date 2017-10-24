import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthGuard } from '../core/auth.guard';


const routes: Routes = [
  ///...
  { path: 'notes', component: AppComponent,  canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }