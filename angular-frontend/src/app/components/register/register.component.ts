import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from  'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    firstname: String;
    lastname: String;
    username: String;
    email: String;
    password: String;



  constructor(
              private validateService: ValidateService, 
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password
    }

    if(!this.validateService.validateRegister(user)){
     this.flashMessage.show('One or some of the fields might be invalid or empty.', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please enter a valid email address in its field.', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered as a user.', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      }else{
        this.flashMessage.show('There is a problem.', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/login']);
      }
    });

  }

}
