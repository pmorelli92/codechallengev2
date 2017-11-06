import { ContactDetailPage } from './../contactDetail/contactDetail';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';
import { Contact } from '../../providers/contact/contactModel';
import * as _ from 'lodash';

@Component({
  selector: 'contactList',
  templateUrl: 'contactList.html'
})
export class ContactListPage implements OnInit {

  otherContacts: Contact[];
  favoriteContacts: Contact[];

  constructor(private _navCtrl: NavController, private _contactProvider: ContactProvider) {
    this.otherContacts = new Array();
    this.favoriteContacts = new Array();
  }

  ngOnInit(): void {

    // Get contacts from the provider
    this._contactProvider.getContacts()
      .subscribe(contacts => {
        for (let contact of contacts) {
          if (contact.isFavorite) {
            this.favoriteContacts.push(contact);
          } else {
            this.otherContacts.push(contact);
          }
        }

        // This sortering should not be here if we are subscribing to a streaming observable
        this.favoriteContacts = _.sortBy(this.favoriteContacts, e => e.name);
        this.otherContacts = _.sortBy(this.otherContacts, e => e.name);
      }, error => console.log(error));
  }

  detail(contact: Contact) {
    console.log(contact);
    this._navCtrl.push(ContactDetailPage, contact);
  }
}
