import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private httpServe:HttpClient;
  data:any=[];
  constructor(private http:HttpClient){
    this.httpServe=http;
  }
  ngOnInit(): void {
    this.data=['loading'];
    this.http.get('https://fakestoreapi.com/products').subscribe(x=>{
      this.data=x;
    });
  }
}
