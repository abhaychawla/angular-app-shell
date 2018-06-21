import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'mifosx-toolbar',
  templateUrl: './mifosx-toolbar.component.html',
  styleUrls: ['./mifosx-toolbar.component.css']
})
export class MifosxToolbarComponent implements OnInit {

  searchVisible = false;
  selectedLanguage = "English";
  sidenavCollapsed = false;

  @Input() sidenav: MatSidenav;
  @Output() collapse = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  toggleSidenav() {
    this.sidenav.toggle();
  }

  toggleCollapse() {
    this.sidenavCollapsed = !this.sidenavCollapsed;
    this.collapse.emit(this.sidenavCollapsed);
  }

  toggleVisibility() {
    this.searchVisible = !this.searchVisible;
  }

}
