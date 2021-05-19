import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TemplateVessels } from '../TemplateVessels';
import { Field } from '../Field';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private apiUrl = 'http://localhost:5000/templateVessels'

  fields: Field[] = [];

  constructor(private http: HttpClient) { }

  getShips(): Observable<TemplateVessels[]> {
    return this.http.get<TemplateVessels[]>(this.apiUrl)
  }

  generateFields(size:number): Field[]{
    for(let i=0; i<size*size; i++) {
      this.fields[i] = {id: i, occupied: false};

    }
    return this.fields;
  }

}
