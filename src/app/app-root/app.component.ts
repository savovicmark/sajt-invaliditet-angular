import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'miBokeFront';
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;
  icon = 'menu';
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faSearch = faSearch;
  search = false;
  searchIcon = 'search';

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 599px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sidenav.mode = 'over';
        } else {
        this.sidenav.opened = false;
        this.sidenav.mode = 'side';
      }
    });
  }
  closeSideNav() {
    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      this.sidenav.close();
      this.icon = 'menu';
    }
  }
  toggleSidenav() {
    if (this.sidenav.opened) {
      this.sidenav.close();
      this.icon = 'menu';
    } else {
      this.sidenav.open();
      this.icon = 'close';
    }
  }

  toggleSearch() {
    this.search = !this.search;
    if (this.search) {
      this.searchIcon = 'close';
    } else {
      this.searchIcon = 'search';
    }
  }
}
