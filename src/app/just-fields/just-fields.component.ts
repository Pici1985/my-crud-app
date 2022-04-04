import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-just-fields',
  templateUrl: './just-fields.component.html',
  styleUrls: ['./just-fields.component.css']
})
export class JustFieldsComponent implements OnInit {

  // ide: https://justfields.com/project/eXrglmyB/json 

  title = 'JustFields';

  public data!: any;
  public post!: any;

  public getData(): Observable<any> {
    return this.http.get<any>(`https://justfields.com/project/eXrglmyB/json`);
  }

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getData().subscribe(res => {
      this.data = res;
        console.log(this.data.posts.post)
    });
  }

  traverse(id: any){
    console.log('clicked', id);
    this.router.navigateByUrl('/post');
  }
}
