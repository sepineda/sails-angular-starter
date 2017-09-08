import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Guest } from '../../models/guest';
import { Status } from '../../models/status';

@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest.component.html',
  styleUrls: ['./new-guest.component.css']
})
export class NewGuestComponent implements OnInit {
  form: FormGroup;
  status: Status;

  constructor(private http: Http, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ''
    });

    this.status = { color: 'white-text', message: '' }
  }

  onSubmit() {

    if (this.form.valid) {
          console.log('yes')
      const formModel = this.form.value;

      let newGuest: Guest = {
        first_name: formModel.first_name as string,
        last_name: formModel.last_name as string,
        phone: formModel.phone as string,
        email: formModel.email as string,
        active: true,
        _wedding: '59ad8bd0a48dace266f1935d'
      }

      this.http.post('Guest', newGuest)
        .subscribe(result => {
          this.status.color = 'green-text';
          this.status.message = 'Nuevo invitado agregado exitosamente';
        });
    }else{
      this.status.color = 'red-text';
      this.status.message = 'Por favor complete los campos requeridos';
    }
  }
}
