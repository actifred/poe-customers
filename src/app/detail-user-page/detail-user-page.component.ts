import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-user-page',
  templateUrl: './detail-user-page.component.html',
  styleUrls: ['./detail-user-page.component.css']
})
export class DetailUserPageComponent implements OnInit {

  @Input() public paramId: string;

  public currentUser : any;

  constructor(private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    
    this.currentUser = {
    "id": 0,
    "firstname": "Non défini",
    "lastname": "Non défini",
    "email": "Non défini",
    "avatar": "***"

    }

    this.activatedRoute.params.subscribe(
    (params: Params) => { this.currentUser.id = params['paramId']; });
    this.currentUser.id = this.paramId;
  }

}
