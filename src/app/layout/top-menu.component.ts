import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  @Input() user;
  public faBars = faBars;

  @Output() showSidebar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onMenuButtonClick(event) {
    this.showSidebar.emit();
  }

}
