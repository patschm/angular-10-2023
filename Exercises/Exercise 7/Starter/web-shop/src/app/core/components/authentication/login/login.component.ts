import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[FormsModule, CommonModule]
})
export class LoginComponent implements OnInit
{
  public username?: string;
  public password?: string;
  public isAuthenticated: boolean = false;
  public message?: string;

  public onSubmit()
  {
    this.authSvc.login(this.username, this.password)
    if (this.authSvc.isLoggedIn)
    {
      this.router.navigate([this.authSvc.requestedUrl]);
    }
    else
    {
      this.message = "Invalid username or password";
    }
  }

  constructor(private authSvc: AuthenticationService, private router: Router) { }
  
  ngOnInit() {
  }

}
