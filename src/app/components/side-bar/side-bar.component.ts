import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Notes } from '../../Models/Notes';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideBarComponent implements OnInit {

authUser:User;
notes={} as Notes;
n=[];
  constructor(
  	public authService:AuthService,
  	public noteService:NoteService,
  	public router:Router
  	) { 
  	this.authService.getAuth().subscribe(auth=>{
  		this.authUser =auth
  	})
  }

  ngOnInit() {
  	this.noteService.getNotes(this.authUser.uid).valueChanges().subscribe((data:any) =>{
  		console.log(data)
  		this.refresh()
  		Object.keys(data).forEach(key=>{
  			const $key=key
  			const note =data[key].Note
  			const title=data[key].Title
  			this.n.push({key:$key,Note:note,Title:title})
  			console.log(this.n)
  		})
  		
  	})
  }

  onDeleteNote(note){
  	if(confirm('are you sure?')){
  		// this.noteService.onRemove(this.authUser.uid,note);
  	}
  	

  }



  refresh(){
  	this.noteService.getNotes(this.authUser.uid)
  	this.n=[]
  }

}
