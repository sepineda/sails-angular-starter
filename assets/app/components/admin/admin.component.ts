import { Component, OnInit, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { MaterializeDirective, MaterializeAction } from "angular2-materialize";
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup } from '@angular/router';

import { Wedding } from '../../models/wedding';
import { User } from '../../models/user';
import { Category } from '../../models/category';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private wedding: Wedding;
  private user: User;
  private paramsSub: Subscription;
  private category: string = 'Invitados';
  private categories: Category[] = [];

  private sidenavActions: EventEmitter<any>;
  private sidenavParams: any[];

  constructor(private http: Http, private router: Router) {
    this.categories.push({ name: 'Nueva Seccion', route: '/admin/nueva-seccion', icon: 'add' });
    this.categories.push({ name: 'Nuevo Invitado', route: '/admin/invitar', icon: 'person_add' });
    this.categories.push({ name: 'Invitados', route: '/admin//lista', icon: 'list' });

    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    this.http.get('Wedding')
      .subscribe(result => {
        //For now just pick the first
        this.wedding = result.json()[0];

      });

    //Get route info
    var tree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    var cat: Category = this.categories.filter(c => c.name === g.segments[0].toString())[0];
    if (cat) {
      this.category = cat.name;
    }
  }

  changeCategory(cat: Category) {

    this.category = cat.name;
    this.sidenavParams = ['hide'];
    this.sidenavActions.emit('sideNav');
  }
}
