import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contact } from './contact';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {

  private contactUrl = 'http://ryusukelavalla.com/api/contacts/create/';

  constructor(private http: Http) { }

  getCookie(name){
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts.pop().split(";").shift();
  }


  addContact(body: Object): Observable<Contact[]>{
    let bodyString = JSON.stringify(body);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-CSRFToken': this.getCookie('csrftoken')});
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    return this.http.post(this.contactUrl, body, options)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
