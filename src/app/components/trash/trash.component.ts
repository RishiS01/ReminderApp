import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NoteService } from '../../services/note.service';
import { User } from 'firebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrashComponent implements OnInit {

authUser:User;
n=[]
trashedNotes=[]
  constructor(
  	public authService:AuthService,
  	public noteService:NoteService,
  	public router:Router
  	) { 
  		this.authService.getAuth().subscribe(auth=>{
  			this.authUser=auth;
  		})
  	}

  ngOnInit() {
  	this.noteService.getTrashedNotes(this.authUser.uid).valueChanges().subscribe(data=>{
  		console.log(data);
  		this.trashData()
  		if(typeof data !== typeof null){
  			Object.keys(data).forEach(key=>{
  				const $key=key;
  				const note=data[key].Note
  				this.trashedNotes.push({key:$key,Note:note})
  			})
  			console.log(this.trashedNotes)
  		}
  	})
  	}
  	onRemoveNoteFromTrash(note){debugger
  		if(confirm('Note will be deleted permanently, Sure to continue?')){
  			this.noteService.deleteFromTrash(this.authUser.uid,note);
  		}
  	}
  	
  	trashData(){
  		this.noteService.getTrashedNotes(this.authUser.uid);
  		this.trashedNotes=[];
  	}
}
