import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() displaySidebar;

  @Output() hideSidebar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onHide() {
    this.hideSidebar.emit();
  }

  public getUrlListUser() {
    return "listUser";
      }

}
