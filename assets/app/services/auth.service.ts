import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  redirectUrl: string;

  login(name: string, password: string) {

    return this.http.post('auth/login', { email: name, password: password })
      .map((result: Response) => {
        let user = result.json();

        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
