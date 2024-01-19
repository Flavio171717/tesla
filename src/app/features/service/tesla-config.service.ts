import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeslaConfigService {

constructor(protected http: HttpClient) { }

getModel(): Observable<any> {
  return this.http.get('/models')
}

getOptions(id:string): Observable<any> {
return this.http.get('/options/'+id)
}
}
