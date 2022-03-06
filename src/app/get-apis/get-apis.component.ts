import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-apis',
  templateUrl: './get-apis.component.html',
  styleUrls: ['./get-apis.component.css']
})
export class GetApisComponent implements OnInit {

  public entries!: any;

  public getData(): Observable<any> {
    return this.http.get<any>(`https://api.publicapis.org/entries`);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData().subscribe(res => {
      this.entries = res;
      console.log(this.entries.entries);
    }); 
  }

}
