import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, NgFor, NgIf, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contact = {
    name: '',
    email: '',
    contact_number: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('http://127.0.0.1:8000/api/contact', this.contact)
      .subscribe({
        next: (res: any) => {
          console.log('Response:', res);
          alert('✅ ' + res.message);
          this.contact = { name: '', email: '', contact_number: '', subject: '', message: '' };
        },
        error: (err) => {
          console.error('Error:', err);
          alert('❌ Failed: ' + (err.error?.error || err.message));
        }
      });
  }
}
