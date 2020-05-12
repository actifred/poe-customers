import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjetLien } from '../shared/structures';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public liens:ObjetLien[];

  @Input() displaySidebar;

  @Output() hideSidebar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.liens = [
      { url: '/', intitule: 'Accueil' },
      { url: '/liste', intitule: 'Liste des clients' }
    ];
  }

  public onHide() {
    this.hideSidebar.emit();
  }

}
