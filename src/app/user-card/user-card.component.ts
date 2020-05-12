import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserModel;

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

}
