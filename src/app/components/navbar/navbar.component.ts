import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean=false;
  isLoggedInUser:string;

  constructor(
  	public authService:AuthService,
  	public noteService:NoteService,
  	public router:Router
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
  		// console.log(auth)
  		if(auth){
  			this.isLoggedIn=true;
  			this.isLoggedInUser=auth.displayName;
  		}else{
  			this.isLoggedIn=false;
  		}
  	})
  }
  onLogout(){
  	this.authService.logout();
  	this.router.navigate(['/']);
  }
}
