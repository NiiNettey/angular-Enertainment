import { Component } from '@angular/core';
import { NavItems } from '../../Interface/navItems';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  navItems: NavItems[] = [
    {
      name: 'grid_view',
      location: '../home',
      img: '../../../assets/icon-nav-home.svg',
    },
    {
      name: 'theaters',
      location: '../movies',
      img: '../../../assets/icon-nav-movies.svg',
    },
    {
      name: 'live_tv',
      location: '../series',
      img: '../../../assets/icon-nav-tv-series.svg',
    },
    {
      name: 'bookmark',
      location: '../bookmarks',
      img: '../../../assets/icon-nav-bookmark.svg',
    },
  ];

  isCurrentLocation(location: string): boolean {
    const trimmedLocation = location.trim().replace('..', '');
    return window.location.pathname === trimmedLocation;

  }
}


{/* 

  ANGULAR SHORT NOTES ON EVENT BINDING

  So when you shoot a (input) event in angular -- you can bind that event value
  Say from input component to a function or something 
  Eg. <input (input)="onInputValue($event)" 
  Where $event is the event object fired when the input State/Event changes
  We can now maybe assign that value to another variable, and use for something else
  :)

*/}