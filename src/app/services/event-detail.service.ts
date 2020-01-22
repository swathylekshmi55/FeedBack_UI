import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {
  private baseUrl=environment.authServerUrl;
  constructor(private http: HttpClient) { }
  getEventList():Observable<any>{
    return this.http.get(this.baseUrl+'/getEventDetails');
  }
}
