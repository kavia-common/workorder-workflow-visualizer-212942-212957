import { Routes } from '@angular/router';
import { WireframeComponent } from './wireframe/wireframe.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'wireframe' },
  { path: 'wireframe', component: WireframeComponent },
];
