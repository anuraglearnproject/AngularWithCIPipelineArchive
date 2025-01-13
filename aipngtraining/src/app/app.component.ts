import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { UserCreateComponent } from '../components/user-create/user-create.component';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule,HomeComponent,ProductsComponent,UserCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testApiIntegration';
  ShowProducts:boolean=false;
  ShowHome:boolean=false;
  ShowUserCreate:boolean=false;
}
