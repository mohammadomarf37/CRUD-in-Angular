import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent implements OnInit {
  
  userLists: any[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/get-api')
      .subscribe((result: any) => {
        this.userLists = result;
      });
  }
}
