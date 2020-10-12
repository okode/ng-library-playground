import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryNg10Service {

  constructor(private http: HttpClient) { }

  public greeting(name: string) {
    return this.http.get< { response: string } >(`http://localhost:8080/greeting/${name}`);
  }

}
