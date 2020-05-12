import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { dbAccesServices } from '../services/dbAcces.services';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  public formulaire=null;
  constructor(private http:dbAccesServices) {}

  traiteFormulaire(valeur) {
    console.log(valeur);
      this.http.addUser(valeur);
      console.log(valeur);
  }
  ngOnInit(): void {
  }

}
