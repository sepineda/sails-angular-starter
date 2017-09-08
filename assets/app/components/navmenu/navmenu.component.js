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
var NavMenuComponent = (function () {
    function NavMenuComponent() {
        this.menuItems = [
            { name: "Nuestra historia", route: "nuestra-historia" },
            { name: "Donde y cuando", route: "donde-y-cuando" },
            { name: "Confirmar", route: "confirmar" }
        ];
    }
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            templateUrl: './navmenu.component.html',
            styleUrls: ['./navmenu.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=navmenu.component.js.map