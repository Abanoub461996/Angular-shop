import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IsLoggedService} from './../../is-logged.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn;
  constructor(private isLoggedInService: IsLoggedService) { }

  ngOnInit(): void {
  }

  loginFormSubmit() {
    this.isLoggedInService.updateHasLoggedIn(true)
    alert("Hello! email : You have been logged in successfully, you can route to the cart now")
    
  }
  
}

