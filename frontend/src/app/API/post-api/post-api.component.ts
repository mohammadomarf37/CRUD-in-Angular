import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  postForm = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: ''
  }

  constructor(private http: HttpClient){}

  onSubmit(){
    this.http.post('http://127.0.0.1:8000/api/post-api', this.postForm)
    .subscribe({
      next: (res: any) => {
        alert(res.message);
        this.postForm = { firstName: '', lastName: '', email: '', address: '', password: '' };
      },
      error: (err: any) => {
        console.error('Error:', err);
          alert('❌ Failed: ' + (err.error?.error || err.message));
      }
    })
  }

}
