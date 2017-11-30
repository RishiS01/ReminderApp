import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable()
export class NoteService {
	notes:AngularFireObject<any>;
	trash:AngularFireList<any>;
	user:AngularFireList<any>;

  constructor(
  	public angularFire:AngularFireDatabase,
  	public router:Router
  	) { 
  	this.user = this.angularFire.list('/user'),
  	this.trash=this.angularFire.list('/trash')
    // this.notes=this.angularFire.object('/notes')
  }
  addNote(id,n){
  	const note =this.angularFire.list(`/user/${id}/notes/`)
  	
  	 return note.push({...n,id: new Date().valueOf()})

  }
  getNotes(id){
  	return this.angularFire.object(`/user/${id}/notes/`)

  }
  onAddToTrash(id,i){

  	const trash= this.angularFire.object(`/user/${id}/trash/${i.key}`)
    if(typeof i.Title === typeof undefined){
      delete i.Title
    }
    
    trash.set({...i})
    console.log(i)
    return this.angularFire.object(`user/${id}/notes/${i.key}`).remove();
  }
  deleteFromTrash(id,n){
    return this.angularFire.object(`user/${id}/trash/${n.key}`).remove();
  }
  getTrashedNotes(id){
    return this.angularFire.object(`user/${id}/trash/`);
  }
  onUpdateNote(id,n,k){debugger
    
   return this.angularFire.object(`user/${id}/notes/${k}`).update(n);
  }
  onDelete(id,i){
    console.log(id);
    console.log(i);
    return this.angularFire.object(`user/${id}/notes/${i.key}`).remove();
  }
}
	