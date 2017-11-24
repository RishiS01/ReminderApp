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
 
  timer:any;
  noteData=[];
  notesValue=[];
  dataValue=[];
  noteValue:any;
  tagdata=[];
  tag:boolean=false;
  getData:boolean=false;
  showAddInput:boolean=false;
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
            const $key=key
            const note =data[key].Note
            const title = data[key].Title
            const Id=data[key].id
            this.noteData.push({key:$key,Note:note,Title:title,id:Id})
            // console.log(this.noteData)
            data[key].Title.forEach(t=>{             
             this.n.push(t)  
            });
           this.n = _.uniqBy(this.n,'display');
           // console.log(this.n)
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
  	}debugger
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
  
  onAddNoteToTrash(note){
    if(confirm('Are you sure ?')){
  	  this.noteService.onAddToTrash(this.authUser.uid,note);
    }
  }
  
  getTagData(tag){debugger
    this.tagdata=[]
    this.noteData.map(obj=>{
      console.log(obj)

      obj.Title.map(val=>{
        // console.log(val)
        if(tag.display === val.display){debugger
          this.tag=true
          // console.log(tag.display,val.display)
         
          this.tagdata.push({...obj})
          console.log(this.tagdata);
        }
      })
    })
  }

  
  onRemoveNote(note,i){
    // this.noteService.onDeleteNote(this.authUser.uid,note)
    console.log(note)
    if(confirm('Are you sure?')){
      this.noteService.onDelete(this.authUser.uid,note)
    }
  }
  
  getNoteData(nt,i){
    // console.log(nt)
    // console.log(this.dataValue)
    this.dataValue.map(a=>{
      // console.log(a)
      if(nt.id === a.id){
       this.getData=true
        this.noteValue = nt
        // console.log(this.noteValue)
        
      }
    })
      // if(nt.id === this.dataValue.id){}
    
    // this.noteService.onUpdateNote(this.authUser.uid,this.noteValue)
  }
  updateNote(n){
    
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.update(n)
    },5000);
  }
  update(n){debugger
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


}
