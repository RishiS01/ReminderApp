import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable()
export class NoteService {
	notes:AngularFireList<any>;
	trash:AngularFireList<any>;
	user:AngularFireList<any>;

  constructor(
  	public angularFire:AngularFireDatabase,
  	public router:Router
  	) { 
  	this.user = this.angularFire.list('/user'),
  	this.trash=this.angularFire.list('/trash')
  }
  addNote(id,n){
  	const note =this.angularFire.list(`/user/${id}/notes/`)
  	return note.push({...n})
  }
  getNotes(id){
  	return this.angularFire.list(`/user/${id}/notes/`)
    .snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    })
  }
  onAddToTrash(id,i){
    return this.angularFire.object(`/user/${id}/trash/${i.key}`)
  }
  removeNoteFromList(id,i){
    return this.angularFire.object(`user/${id}/notes/${i.key}`).remove();
  }
  deleteFromTrash(id,n){
    return this.angularFire.object(`user/${id}/trash/${n.key}`).remove();
  }
  getTrashedNotes(id){
    return this.angularFire.list(`user/${id}/trash/`).snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, ...action.payload.val() }));
  });
  }
  onUpdateNote(id,n,k){
    this.angularFire.object(`user/${id}/notes/${k}`).update(n);
    return
  }
  onDelete(id,i){
    return this.angularFire.object(`user/${id}/notes/${i.key}`).remove();
  }
  onUndoNote(id,note){
    const nt= this.angularFire.object(`user/${id}/notes/${note.key}`)
    // delete note.key
    return nt.set(note)  
  }

  onDeleteTrash(id){
    return this.angularFire.object(`/user/${id}/trash`).remove();
  }
}
	