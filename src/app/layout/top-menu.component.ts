import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ObjetLien } from '../shared/structures';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  private liens: ObjetLien[];
  public faBars = faBars;

  @Output() showSidebar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.liens = [
      { url: '/', intitule: 'Accueil!' },
      { url: '/liste', intitule: 'Liste des clients' }
    ];

  }

  public onMenuButtonClick(event) {
    this.showSidebar.emit();
  }

}
