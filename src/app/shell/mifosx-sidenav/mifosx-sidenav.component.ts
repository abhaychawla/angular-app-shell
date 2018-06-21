import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mifosx-sidenav',
  templateUrl: './mifosx-sidenav.component.html',
  styleUrls: ['./mifosx-sidenav.component.css']
})
export class MifosxSidenavComponent implements OnInit {

  @Input() sidenavCollapsed: boolean;

  constructor() {}

  ngOnInit() {}

}
