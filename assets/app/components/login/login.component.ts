import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Status } from '../../models/status';

@Component({
  selector: 'wedding-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  status: Status = { color: 'green', message: ''};
  loading = false;
  returnUrl: string;

  constructor(private http: Http,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.form = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
    // reset login status
    this.authService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
  }

  onSubmit() {

    if (this.form.valid) {
      let model = this.form.value;
      let user = { email: model.email as string, password: model.password as string };

      this.authService.login(user.email, model.password)
        .subscribe(data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.status.color = 'red';
          this.status.message = error;
        }
        );

    } else {
    }
  }
}
