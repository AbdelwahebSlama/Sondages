import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Sujet} from "../models/sujet";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private http: HttpClient) { }


}
