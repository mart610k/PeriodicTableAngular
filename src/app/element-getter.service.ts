import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Element } from "./element";


@Injectable({
  providedIn: 'root'
})
export class ElementGetterService {
  api = "https://neelpatel05.pythonanywhere.com";
  //https://github.com/neelpatel05/periodic-table-api
  constructor(private _http: HttpClient) { }

  getElements(){
    return this._http.get<Element[]>(this.api);
  }
}
