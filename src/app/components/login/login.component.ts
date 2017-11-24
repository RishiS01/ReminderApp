import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(
  	public authService:AuthService,
  	public router:Router
  	) { }

  ngOnInit() {
  }

  signInWithFacebook(){
  	this.authService.signInWithFacebook()
  	.then((res)=>{
  		console.log(res)
  		this.router.navigate(['/home'])
  	})
  	.catch((err)=>{
  		console.log(err)
  		// this.router.navigate(['/login'])
  	})

  }
  signInWithGoogle(){
  	this.authService.signInWithGoogle()
  	.then((res)=>{
  		console.log(res)
  		this.router.navigate(['/home'])
  	})
  	.catch((err)=>{
  		console.log(err)
  	})

  }

}
