import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  erroMessage = '';
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }
  registre(registreForm: NgForm) {
    this.loginService.regitre(registreForm.value).subscribe(
      () => {
        this.erroMessage = '';
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error.error.error);
        this.erroMessage = error.error.error;
      }
    );
  }

}
