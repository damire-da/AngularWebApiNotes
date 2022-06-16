import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:7125/api";


  constructor(private http: HttpClient) { }
  
  getNoteList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Note');
  }

  getNote(val: any): Observable<any>{
    return this.http.get<any>(this.APIUrl + '/Note/' + val);
  }

  addNote(val: any) {
    return this.http.post(this.APIUrl + '/AddNote', val);
  }

  updateNote(val: any) {
    return this.http.put(this.APIUrl + '/Update', val);
  }

  deleteNote(val: any) {
    return this.http.delete(this.APIUrl + '/Delete/' + val);
  }
}
