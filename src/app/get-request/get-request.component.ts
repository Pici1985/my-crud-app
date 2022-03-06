import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent implements OnInit {

  public Telefonkonyv?: Bejegyzesek[];

  public getData(): Observable<Bejegyzesek[]> {
    return this.http.get<Bejegyzesek[]>(`/api/telefonkonyv`);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData().subscribe(res => {
      this.Telefonkonyv = res;
    });  
  }
}

interface Bejegyzesek {
  name: string;
  phoneNr: number;
  email: string;
} 
