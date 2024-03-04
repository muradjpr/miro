import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  mobileMenuState,
  subMenuState,
} from '../../../core/constants/header.animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [subMenuState, mobileMenuState],
})
export class HeaderComponent implements OnInit {
  menuItems: any[] = [];
  showMenu: boolean = false;
  showMobileMenu: boolean = false;

  ngOnInit(): void {
    this.menuItems = [
      {
        menu: 'products',
        link: '/home',
        subMenuItems: [{ submenu: 'sub menu', subLink: '/sub-menu' }],
      },
      { menu: 'resources', link: '/resources' },
      { menu: 'solutions', link: '/solutions' },
      { menu: 'pricing', link: '/pricing' },
      { menu: 'enterprise', link: '/enterprise' },
      { menu: 'about', link: '/about' },
    ];
  }

  onShowSubmenu(index: number) {
    if (this.menuItems[index].subMenuItems.length > 0) {
      this.showMenu = !this.showMenu;
    }
  }

  onShowMenu(event: Event) {
    event.preventDefault();
    this.showMobileMenu = !this.showMobileMenu;
  }

  onClose() {
    this.showMenu = false;
  }
}
