import { Component, OnInit } from '@angular/core';
// importalom a http klienst es az observable-t
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent implements OnInit {

  // letrehozok egy valtozot ami bejegyzesek tomb tipusu 
  public Telefonkonyv?: Bejegyzesek[];

  // letrehozok egy fuggvenyt ami egy observablet ad vissza a megadott API endpointra kuldott 
  // get method valasza kent 

  public getData(): Observable<Bejegyzesek[]> {
    return this.http.get<Bejegyzesek[]>(`/api/telefonkonyv`);
  }

  // a constructorban letrehezok egy http nevu valtozot HttpClient tipussal
  constructor(private http: HttpClient) { }

  // amikor a komponens letrejon lehivodik az ngOnInit ami lehivja a getData-t
  // amire feliratkozva megkapom az adatokat amit a televonkonyv tombbe mentek
  ngOnInit(): void {
    this.getData().subscribe(res => {
      this.Telefonkonyv = res;
    });  
  }
}

// itt hozom letre a Bejegyzesek tipust ami a bejovo adat modellje
interface Bejegyzesek {
  name: string;
  phoneNr: number;
  email: string;
} 
