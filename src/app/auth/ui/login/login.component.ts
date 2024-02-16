import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {AuthenticationService} from "../../domain/services/authentication.service";
import {Router} from "@angular/router";
import {LoginRequestDto} from "../../domain/dtos/login-request.dto";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  constructor(private authService: AuthenticationService, private router: Router) {}

  login() {
    const loginDto = new LoginRequestDto(this.username, this.password);
    this.authService.authenticate(loginDto.username, loginDto.password).subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/home']);
      }
    })
  }
}
