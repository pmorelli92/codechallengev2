import { ContactDetailPage } from './../contactDetail/contactDetail';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';
import { Contact } from '../../providers/contact/contactModel';

@Component({
  selector: 'page-contactList',
  templateUrl: 'contactList.html'
})
export class ContactListPage implements OnInit {

  otherContacts: Contact[];
  favoriteContacts: Contact[];

  constructor(private _navCtrl: NavController, private _contactProvider: ContactProvider) {
  }

  ngOnInit(): void {
    // Get contacts from the provider
    this._contactProvider.getContacts().subscribe();
  }

  ionViewWillEnter() {
    this.otherContacts = this._contactProvider.getOtherContacts();
    this.favoriteContacts = this._contactProvider.getFavoriteContacts();
  }

  detail(contact: Contact) {
    console.log(contact);
    this._navCtrl.push(ContactDetailPage, contact);
  }
}
