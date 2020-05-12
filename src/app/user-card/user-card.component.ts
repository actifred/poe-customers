import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() public paramUser: any;

  constructor() { }

  ngOnInit(): void {
  }

  getUserDetailUrl() {
    return `/detailUser/${this.paramUser.id}`;
  }

}
