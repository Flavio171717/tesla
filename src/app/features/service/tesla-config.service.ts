import { ModelsDTO } from './../order/dto/models.dto';
import { Option } from './../order/dto/option';
import { Models } from './../order/dto/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeslaConfigService {

constructor(protected http: HttpClient) { }

getModel(): Observable<Models[]> {
  return this.http.get<Models[]>('/models')
}

getOptions(id:string): Observable<Option> {
return this.http.get<Option>('/options/'+id)
}
}
