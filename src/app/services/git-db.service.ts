import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitDBService {

  constructor(private http:HttpClient) { }

  httpGetType<T>(url:string):Observable<T>{
    return this.http.get<T>(url)
  }
}
