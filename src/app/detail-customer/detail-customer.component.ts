import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  public currentUser = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
