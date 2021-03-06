import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const routes: RouteInfo[]=[
  { path: '/home', title: 'Home',  icon: 'fa-home', class: '' },
  { path: '/events', title: 'Events',  icon:'fa-calendar', class: '' },
  { path: '/projects', title: 'Projects', icon:'fa-sticky-note', class:''},
  {path:'/team',title:'Team',icon:'fa-users',class:''},
  {path:'/contact',title:'Contact',icon:'fa-phone',class:''}
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems:any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = routes.filter(menuItem => menuItem);
  }

  navbarToggle(){
    let node = document.getElementById('navbar-toggler');
    if(node.classList.contains('open')){
      node.classList.remove('open');
      node.classList.add('close');
    }
    else{
      node.classList.remove('close');
      node.classList.add('open');
    }
  }
}
