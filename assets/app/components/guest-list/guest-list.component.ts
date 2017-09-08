import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Guest } from '../../models/guest';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  private guests: Guest[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('Guest')
      .subscribe(result => {
        this.guests = result.json();
      });
  }

}
