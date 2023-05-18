import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './body/home/home.component';
import { InventoryComponent } from './body/inventory/inventory.component';
import {MatButtonModule} from '@angular/material/button';
import { FormComponent } from './body/form/form.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { AnimateOnScrollModule, ScrollService } from 'ng2-animate-on-scroll';
import { DeleteFormComponent } from './body/delete-form/delete-form.component';
import { NgChartsModule } from 'ng2-charts';
import { ContactFormComponent } from './body/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InventoryComponent,
    FormComponent,
    DeleteFormComponent,
    ContactFormComponent,
  ],
  imports: [
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    AnimateOnScrollModule,
    NgChartsModule,
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
