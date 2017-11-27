import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Notes } from '../../Models/Notes';
import { User } from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as _ from 'lodash'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  id:string;
  notes={} as Notes;
  authUser:User;
  n=[];
  trashedNotes=[]
  timer:any;
  noteData=[];
  notesValue=[];
  dataValue=[];
  noteValue:any;
  tagdata=[];
  tag:boolean=false;
  getData:boolean=false;
  showAddInput:boolean=false;
  trashdata:boolean=false;
  constructor(
  	public noteService:NoteService,
  	public authService:AuthService,
  	public router:Router,
  	public flashMessagesService:FlashMessagesService
  	) { 
		this.authService.getAuth().subscribe(auth=>{
      this.authUser=auth;
    })
  }

  ngOnInit() {
      this.getNotes()

  }

getNotes(){
      this.tag=false;
      this.noteService.getNotes(this.authUser.uid).valueChanges().subscribe((data:any[]) =>{
        // console.log(data)
       
         this.n=[];
         this.dataValue=[];
         this.notesValue=[];
         this.tagdata=[];
         this.trashedNotes=[];
       
        Object.keys(data).forEach(val=>{
            const $key=val
            const note =data[val].Note
            const title = data[val].Title
            const Id=data[val].id
          this.notesValue.push({key:$key,Note:note,Title:title,id:Id})
        })
      
        // console.log(this.notesValue)
      if(typeof data === typeof null){
  
        Object.keys(data).forEach(key=>{
            const $key=key
            const note =data[key].Note
            const title = data[key].Title
            const Id=data[key].id
          if(typeof data[key].Title !== typeof undefined ){ 
            this.noteData.push({key:$key,Note:note,Title:title,id:Id})
            // console.log(this.noteData)
            data[key].Title.forEach(t=>{  

             this.n.push({key:$key,Title:t,Note:note})
            });
           this.n = _.uniqBy(this.n,'display');
           console.log(this.n)
          }
          this.dataValue.push({key:$key,Note:note,Title:title,id:Id})
        })
        // console.log(this.dataValue)
      }
    })
}





  saveNote(f:NgForm){
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.onAddNote(f)
    },5000);
  }
 
 onAddNote(f:NgForm){ 
	  const notes={} as Notes;
  	notes.Title=f.value.title;
    notes.Note=f.value.note;
  	if(typeof notes.Title === typeof undefined){
  		delete notes.Title
  	}
    if(notes.Note && notes.Note !== ""){
      this.noteService.addNote(this.authUser.uid,notes);

    }
  }
  
  onItemAdded($event){
    console.log($event)
  }
  
  onItemRemoved($event){
    console.log($event)
  }
  
  onAddNoteToTrash(note,i){
    if(confirm('Are you sure ?')){
      this.noteData.splice(i,1);
  	  this.noteService.onAddToTrash(this.authUser.uid,note);
    }
  }
  
  getTagData(tag){
    this.trashdata=false;
    this.tagdata=[]
    this.noteData.map(obj=>{
      console.log(obj)
      obj.Title.map(t=>{
        obj.Title.map(val=>{
          if(t.display === val.display){
            this.tag=true
            this.tagdata.push({...obj})
            console.log(this.tagdata);
          }
        })
      })
    })
  }

  
  onRemoveNote(note,i){
    console.log(note)
    if(confirm('Are you sure?')){
      this.noteService.onDelete(this.authUser.uid,note)
    }
  }
  
  getNoteData(nt,i){
    this.dataValue.map(a=>{
      if(nt.id === a.id){
       this.getData=true
        this.noteValue = nt
      }
    })
  }
  

  updateNote(n){
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.update(n)
    },5000);
  }
  

  update(n){
    console.log(n)
    let key= n.key;
    delete n.key
    if(typeof n.Title === typeof undefined){
      delete n.Title
    }
    if(n.Note !== ""){
      this.noteService.onUpdateNote(this.authUser.uid,n,key)
    }
    
  }
  openAddForm(){
    this.getData=false;
    this.showAddInput=true
  }
  onRemoveNoteFromTrash(note,i){
    if(confirm('Note will be deleted permanently, Sure to continue?')){
      this.trashedNotes.splice(i,1);
      this.noteService.deleteFromTrash(this.authUser.uid,note);

    }
  }
    
  trashData(){
     this.trashdata=false;
     this.tag=false;
      this.noteService.getTrashedNotes(this.authUser.uid).valueChanges().subscribe((data:any[])=>{
      
      console.log(data);
      // this.trashData()
      if(typeof data === typeof null){
        this.trashdata=true;
        Object.keys(data).forEach(key=>{
          const $key=key;
         const note=data[key].Note
          this.trashedNotes.push({key:$key,Note:note})
        })
        console.log(this.trashedNotes)
        // this.trashdata=true;
      }
    })
      this.trashedNotes=[];
    }


}
