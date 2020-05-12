import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ligne-liste-customers',
  templateUrl: './ligne-liste-customers.component.html',
  styleUrls: ['./ligne-liste-customers.component.css']
})
export class LigneListeCustomersComponent implements OnInit {
  @Input() public currentUser:any;
  constructor() { }

  ngOnInit(): void {
  }

}
