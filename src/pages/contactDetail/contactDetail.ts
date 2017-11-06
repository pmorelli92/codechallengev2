import { Contact, Address } from './../../providers/contact/contactModel';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contactDetail',
  templateUrl: 'contactDetail.html',
})
export class ContactDetailPage {

  contact: Contact;

  constructor(_navCtrl: NavController, _navParams: NavParams) {
    this.contact = <Contact>_navParams.data;
  }


  displayAddress(address: Address) : string {
    return address.street + '<p></p>' + address.city + ', ' + address.state + ' ' + address.zipCode + ', ' + address.country;
  }


}
