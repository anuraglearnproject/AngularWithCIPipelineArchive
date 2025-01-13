import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent implements OnInit {
userForm:FormGroup;
processing='';
constructor(private fb:FormBuilder,private http:HttpClient){
  this.userForm=this.fb.group({
    email: ['', [Validators.required, Validators.email]],  // Email is required and must be valid
    username: ['', [Validators.required]],   // No validation on username
    password: ['', [Validators.required]],  // Password is required
    firstname: ['', [Validators.required]],  // Password is required
    lastname: ['', [Validators.required]],  // Password is required
    name: this.fb.group({
      firstname: ['', []],  // First name is required
      lastname: ['', []],   // Last name is required
    }),
    address: this.fb.group({
      city: ['', []],  // No validation on city
      street: ['', []],  // No validation on street
      number: ['', []],  // No validation on number
      zipcode: ['', []],  // No validation on zipcode
      geolocation: this.fb.group({
        lat: ['', []],  // No validation on latitude
        long: ['', []],  // No validation on longitude
      }),
    }),
    city: ['', []],  // No validation on city
      street: ['', []],  // No validation on street
      number: ['', []],  // No validation on number
      zipcode: ['', []],  // No validation on zipcode
      latitude: ['', []],  // No validation on latitude
        longitude: ['', []],  // No validation on longitude
    phone: ['', []],  // No validation on phone number
  });
}
ngOnInit(): void {
  
}
onSubmit() {
  if (this.userForm.valid) {
    this.processing='processing';
    const userData = this.userForm.value;
    
    // Assuming there's a backend API to handle the POST request
    let data=JSON.stringify(userData);
    console.log(data);
    this.http.post('https://fakestoreapi.com/users', data).subscribe({
      next:(response) => {
        this.processing='User created successfully:'+ JSON.stringify(response);
        console.log(this.processing);
      },
      error:(error) => {
        this.processing='Error creating user:'+ JSON.stringify(error);
        console.error(this.processing);
      }
    }
    );
  } else {
    console.log('Form is not valid');
  }
}
}
