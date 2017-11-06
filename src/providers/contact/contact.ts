import { Contact } from './contactModel';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactProvider {

  private _apiUrl: string;
  private _http: Http;

  constructor(public http: Http) {
    this._http = http;
    this._apiUrl = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';
  }

  getContacts(): Observable<Contact[]> {
    return this._http.get(this._apiUrl)
        .map((res: Response) => <Contact[]>res.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
          console.log(error);
          return Observable.throw(error.json().error || 'Internal Server Error');
  }
}
