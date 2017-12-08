import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Notes } from '../../Models/Notes';
import { User } from 'firebase/app';
import * as _ from 'lodash'; 
import { SlicePipe } from '@angular/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';



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
  trashedNotes=[]
  timer:any;
  noteValue:any;
  tagData=[];
  tag:boolean=false;
  getData:boolean=false;
  showAddInput:boolean=false;
  trashdata:boolean=false;
  sideNote:any;
  myForm:NgForm;
  key:string;
  noteUpdate:boolean=false;
  userNotes:Notes[];
  notesWithTags=[]
  editNotes:any;

  constructor(
  	public noteService:NoteService,
  	public authService:AuthService,
  	public router:Router,
   
  	) { 
		this.authService.getAuth().subscribe(auth=>{
      this.authUser=auth;
    })
  }

  ngOnInit() {
    this.getNotes()
  }

  getNotes(){
    this.notesWithTags=[]
    this.tag=false;
    this.trashdata=false;
    this.noteService.getNotes(this.authUser.uid).subscribe(data =>{
      this.userNotes=data;
      this.userNotes.forEach(val=>{
        if(val.Title !== undefined){
          val.Title.map(tag=>{
            // this.notesWithTags = _.uniqBy(this.notesWithTags,'display')
            if(_.findIndex(this.notesWithTags,['display',val.Title]) === -1){
              this.notesWithTags.push(tag)
            }
            this.notesWithTags = _.uniqBy(this.notesWithTags,'display')
          })
        }
      })
    });
  }
  
  openAddForm(){
    this.getData=false;
    this.tag=false;
    this.key=null;
    this.showAddInput=true;
    this.timer=setTimeout(()=>{
      if(this.myForm){
      this.myForm.reset()
    }
  },300); 
    console.log(this.userNotes);
  }
  
  saveNote(f:NgForm){
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.onAddNote(f)
    },500);
  }

  onAddNote(f:NgForm){ 
    let $this = this;
    this.notes.Title=f.value.title;
    this.notes.Note=f.value.note;
    this.myForm = f
    console.log(this.key);
    if(this.key === null){
      if(typeof this.notes.Title === typeof undefined){
        delete this.notes.Title
      }
      if(this.notes.Note && this.notes.Note !== ""){
        this.notes.id=new Date().valueOf();
        this.noteService.addNote(this.authUser.uid,this.notes).then(
          (ref)=>{
            this.key=ref.key;
          });
      }
    }else{
      if(typeof this.notes.Title === typeof undefined){
        delete this.notes.Title
      }
      if(typeof this.notes.Note && this.notes.Note !== ""){
        this.noteService.onUpdateNote(this.authUser.uid,this.notes,this.key)
      }
    }
    this.getNotes();
  } 
  
  trashData(){
    this.tag=false;
    this.getData=false;
    this.showAddInput=false;
    this.trashdata=true;
    this.trashedNotes=[]
    this.noteService.getTrashedNotes(this.authUser.uid).subscribe(trashData=>{
      this.trashedNotes = trashData;
    })
  }
  
  getNoteData(data,i){
    this.getData=true;
    this.key = data.key
    this.editNotes=[]
    this.editNotes=data;
  }

  onAddNoteToTrash(data,i){
    if(confirm('Are you sure')){
      const trash =  this.noteService.onAddToTrash(this.authUser.uid,data)
      if(typeof data.Title  === typeof undefined){
        delete data.Title
        // delete data.id
      }
      trash.set({...data});
     this.noteService.removeNoteFromList(this.authUser.uid,data);
    }
    this.getNotes();
  }

  getTagData(data){
    this.trashdata=false;
    this.tag=true;
    this.tagData=[]
    this.userNotes
    this.userNotes.map(value=>{
      if(value.Title !== undefined){
        value.Title.map(val=>{
          if(val.display === data.display){
            this.tagData.push(value)
          }
        })
      }
    })
  }
  onItemAdded($event,f:NgForm){
    console.log($event);
    this.onAddNote(f)
  }
 
  onItemRemoved($event,f:NgForm){
    console.log($event);
    if(confirm('Do you really want to remove this tag?')){
      this.onAddNote(f)
    }
  }
  onRemoveFromTrash(data,i){
    if(confirm('Are you sure you want to permanently delete this trashed note?')){
      this.noteService.deleteFromTrash(this.authUser.uid,data)
    }
  }
  
  onUndoNoteFromTrash(note,i){
    if(confirm('Sure to restore trashed note?')){
      this.noteService.onUndoNote(this.authUser.uid,note)
      this.noteService.deleteFromTrash(this.authUser.uid,note)
      this.trashedNotes=[]
    }
  }

  onEmptyTrash(){
    if(confirm('Are you sure you want to permanently delete your trashed notes?')){
      this.noteService.onDeleteTrash(this.authUser.uid)
    }
  }
}
