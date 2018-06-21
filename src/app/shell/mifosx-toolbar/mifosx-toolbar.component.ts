import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mifosx-toolbar',
  templateUrl: './mifosx-toolbar.component.html',
  styleUrls: ['./mifosx-toolbar.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition(':leave', [
        animate(500, style({opacity:0}))
      ])
    ])
  ]
})
export class MifosxToolbarComponent implements OnInit {

  searchVisible = false;
  selectedLanguage = "English";
  sidenavCollapsed = false;

  @Input() sidenav: MatSidenav;
  @Output() collapse = new EventEmitter<boolean>();

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.isHandset$.subscribe(isHandset => {
      this.isHandset = isHandset;
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isHandset: boolean;

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

  onMouseEnter(menuTrigger) {
    if(!this.isHandset) {
      menuTrigger.openMenu()
    }
  }

}
