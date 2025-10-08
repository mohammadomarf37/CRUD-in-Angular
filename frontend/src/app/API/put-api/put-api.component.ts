import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-put-api',
  imports: [FormsModule, CommonModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent implements OnInit {

  userLists: any[] = [];
  selectedUserId = '';

  updateForm = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: ''
    }

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/get-api')
      .subscribe((result: any) => {
        this.userLists = result;
      });
  }

  editUser(user: any){
    this.selectedUserId = user.id;
    this.updateForm.firstName = user.firstName;
    this.updateForm.lastName = user.lastName;
    this.updateForm.email = user.email;
    this.updateForm.address = user.address;
    this.updateForm.password = user.password;
  }

  onUpdate(id: any){
    if(!this.selectedUserId) return;

    this.http.put(`http://127.0.0.1:8000/api/put-api/${this.selectedUserId}`, this.updateForm)
    .subscribe({
      next: (result: any) => {
        alert(result.message);
        this.selectedUserId = '';
        this.updateForm = { firstName: '', lastName: '', email: '', address: '', password: '' };
        this.ngOnInit();
      },
      error: (err: any) => {
        console.error('Error: ', err);
        alert('Failed: ' + (err.error?.error || err.message));
      }
    })
  }

}
