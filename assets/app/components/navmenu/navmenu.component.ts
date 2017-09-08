import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {

    private menuItems: MenuItem[];

    constructor() {
        this.menuItems = [
            { name: "Nuestra historia", route: "nuestra-historia" },
            { name: "Donde y cuando", route: "donde-y-cuando" },
            { name: "Confirmar", route: "confirmar" }
        ];
    }
}

export interface MenuItem {

    name: string;
    route: string;
}
