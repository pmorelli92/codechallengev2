import { Contact } from './contactModel';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';

@Injectable()
export class ContactProvider {

  private _http: Http;
  private _apiUrl: string;
  private _contacts: Contact[];

  private _otherContacts: Contact[];
  private _favoriteContacts: Contact[];

  constructor(public http: Http) {
    this._http = http;
    this._apiUrl = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';
  }

  public getContacts(): Observable<Contact[]> {
    return this._http.get(this._apiUrl)
      .map((res: Response) => <Contact[]>res.json())
      .do(contacts => { 
        this._contacts = contacts;
        this.sliceContacts(); 
      })
      .catch(this.handleError);
  }

  private sliceContacts() {

    this._otherContacts = new Array<Contact>();
    this._favoriteContacts = new Array<Contact>();

    for (let contact of this._contacts) {
      if (contact.isFavorite) {
        this._favoriteContacts.push(contact);
      } else {
        this._otherContacts.push(contact);
      }
    }

    this._favoriteContacts = _.sortBy(this._favoriteContacts, e => e.name);
    this._otherContacts = _.sortBy(this._otherContacts, e => e.name);
  }

  private handleError(error: Response) {
          console.log(error);
          return Observable.throw(error.json().error || 'Internal Server Error');
  }

  getFavoriteContacts() : Contact[] {
    return this._favoriteContacts;
  }

  getOtherContacts() : Contact[] {
    return this._otherContacts;
  }

  editContact(contact: Contact) {
    this._contacts.find(e => e.id == contact.id).isFavorite = contact.isFavorite;
    this.sliceContacts();
  }
}
