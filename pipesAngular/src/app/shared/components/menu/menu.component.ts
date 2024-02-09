
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'shared-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    menuItems: MenuItem[] | undefined;

    ngOnInit() {
      this.menuItems = [
        {
          label: 'Pipes de angular',
          icon: 'pi pi-desktop',
          routerLink: '/',
          items : [
            {
              label: "Textos y fechas",
              icon: 'pi pi-align-left',
              routerLink: ''
            },
            {
              label: "Números",
              icon: 'pi pi-dollar',
              routerLink: 'numbers'
            },
            {
              label: "No comunes",
              icon: 'pi pi-globe',
              routerLink: 'uncommon'
            }]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items : [
            {
              label: "Custom Pipes",
              icon: 'pi pi-globe',
              routerLink: 'custom'

            }
          ]
        }
      ];
    }
}
