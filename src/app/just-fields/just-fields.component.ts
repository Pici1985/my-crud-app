import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-just-fields',
  templateUrl: './just-fields.component.html',
  styleUrls: ['./just-fields.component.css']
})
export class JustFieldsComponent implements OnInit {

  // ide: https://justfields.com/project/eXrglmyB/json 

  title = 'JustFields';

  public entries!: any;

  public getData(): Observable<any> {
    return this.http.get<any>(`https://justfields.com/project/eXrglmyB/json`);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData().subscribe(res => {
      this.entries = res;
      console.log(this.entries);
    });
  }

}
