import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  IsLogin = true;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }
  login(loginForm: NgForm) {
    this.loginService.login(loginForm.value).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/accueil']);
      },
      (error) => {
        console.log(error.error.error);
        this.errorMessage = error.error.error;
      }
    );
  }
}
