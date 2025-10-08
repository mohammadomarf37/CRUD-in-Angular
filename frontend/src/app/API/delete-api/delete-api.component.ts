import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-delete-api',
  imports: [CommonModule],
  templateUrl: './delete-api.component.html',
  styleUrl: './delete-api.component.css'
})
export class DeleteApiComponent implements OnInit {

  userLists: any[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/get-api')
    .subscribe((result: any) => {
      this.userLists = result;
    })
  }

  deleteUser(id: any){
    if(confirm("Are you sure to delete this record?")){
      this.http.delete(`http://127.0.0.1:8000/api/delete-api/${id}`)
      .subscribe({
        next: (result: any) => {
          alert(result.message);
          this.userLists = this.userLists.filter(users => users.id !== id);
        },
        error: (error) => {
          alert('Failed to delete user!'); // error case
          console.error(error);
        }
      });
    }
  }

}
