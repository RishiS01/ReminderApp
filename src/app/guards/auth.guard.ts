import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate,Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()

export class AuthGuard implements CanActivate{

	constructor(
		public angularFireAuth:AngularFireAuth,
		private router:Router
		){}

	canActivate():Observable<boolean>{
		return this.angularFireAuth.authState.map(auth=>{
			if(!auth){
				this.router.navigate([''])
				return false;
			}else{
				return true;
			}
		});
	}
}