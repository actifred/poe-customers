import { Component, OnInit } from '@angular/core';
//import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-list-user-page',
  templateUrl: './list-user-page.component.html',
  styleUrls: ['./list-user-page.component.css']
})


export class ListUserPageComponent implements OnInit {

  public users = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        "id": 0,
        "firstname": "Serena",
        "lastname": "Pfeffer",
        "email": "Koby_Gislason23@hotmail.com",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg"
      },
      {
        "id": 1,
        "firstname": "London",
        "lastname": "Wehner",
        "email": "Domingo_Ankunding@yahoo.com",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bu7921/128.jpg"
      }

    ]
  }
}
