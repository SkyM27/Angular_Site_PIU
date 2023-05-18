import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { InventoryComponent } from './body/inventory/inventory.component';
// import { GraphsComponent } from './body/graphs/graphs.component';
import { ContactFormComponent } from './body/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inventory', component: InventoryComponent },
  // { path: 'graph', component: GraphsComponent },
  { path: 'contact', component: ContactFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
