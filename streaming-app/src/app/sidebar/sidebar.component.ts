import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="sidebar">
      <div class="logo"><img src="../../assets/logo.svg"></div>
      <nav>
        <ul>
          <li routerLinkActive="active" [routerLink]="['/']"><img src="../../assets/icon-nav-home.svg"></li>
          <li routerLinkActive="active" [routerLink]="['/movies']"><img src="../../assets/icon-nav-movies.svg"></li>
          <li routerLinkActive="active" [routerLink]="['/series']"><img src="../../assets/icon-nav-tv-series.svg"></li>
          <li routerLinkActive="active" [routerLink]="['/favorites']"><img src="../../assets/icon-nav-bookmarks.svg"></li>
        </ul>
      </nav>
      <div class="profile-button"><img src="../../assets/image-avatar.png"></div>
    </div>
  `,
  styles: [`
    .sidebar {
      width: 5%;
      background-color: #161D2F;
      color: #FFFFFF;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 20px;
      margin-top: 2%;
      position: fixed;
      height: 70%;
      border-radius: 20px;
    }
    .logo {
      font-size: 30px;
      margin-bottom: 20px;
    }
    nav ul {
      list-style: none;
      padding: 0;
    }
    nav ul li {
      padding: 10px 0;
      cursor: pointer;
    }
    nav ul li.active {
      background-color: #FFFFFF;
      border-radius: 8px;
    }
    .profile-button {
      margin-top: auto;
      padding: 10px 0;
      cursor: pointer;
    }
  `]
})
export class SidebarComponent { }
