import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate,Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AuthService } from '../services/auth.service';


@Injectable()

export class AuthGuard implements CanActivate{

isAuthorised:boolean=false;
	
	constructor(
		public angularFireAuth:AngularFireAuth,
		private router:Router,
		public authService:AuthService
		){}

	canActivate():Observable<boolean>{
		return this.angularFireAuth.authState.map(auth=>{
			if(!auth){
				this.router.navigate(['/login'])
				return false;
			}else{
				return true;
			}
		});
	}
}