"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var AdminComponent = (function () {
    function AdminComponent(http, router) {
        this.http = http;
        this.router = router;
        this.category = 'Invitados';
        this.categories = [];
        this.categories.push({ name: 'Nueva Seccion', route: '/admin/nueva-seccion', icon: 'add' });
        this.categories.push({ name: 'Nuevo Invitado', route: '/admin/invitar', icon: 'person_add' });
        this.categories.push({ name: 'Invitados', route: '/admin//lista', icon: 'list' });
        this.sidenavActions = new core_1.EventEmitter();
        this.sidenavParams = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.http.get('Wedding')
            .subscribe(function (result) {
            //For now just pick the first
            _this.wedding = result.json()[0];
        });
        //Get route info
        var tree = this.router.parseUrl(this.router.url);
        var g = tree.root.children[router_1.PRIMARY_OUTLET];
        var cat = this.categories.filter(function (c) { return c.name === g.segments[0].toString(); })[0];
        if (cat) {
            this.category = cat.name;
        }
    };
    AdminComponent.prototype.changeCategory = function (cat) {
        this.category = cat.name;
        this.sidenavParams = ['hide'];
        this.sidenavActions.emit('sideNav');
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map