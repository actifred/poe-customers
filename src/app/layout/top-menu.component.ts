import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  public faBars = faBars;

  @Output() showSidebar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onMenuButtonClick(event) {
    this.showSidebar.emit();
  }

}
