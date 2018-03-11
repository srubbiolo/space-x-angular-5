import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';

const routes: Routes = [
  { path: '',
    children: [
    { path: '', redirectTo: '/component-a', pathMatch: 'full' },
     { path: 'component-a', component: ComponentAComponent },
     { path: 'component-b', component: ComponentBComponent }
    ]
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}