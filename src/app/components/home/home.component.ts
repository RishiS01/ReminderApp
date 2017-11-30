import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Notes } from '../../Models/Notes';
import { User } from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as _ from 'lodash'; 
import { SlicePipe } from '@angular/common';


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
  sideNote:any;
  myForm:NgForm;
  u:NgForm;
  key:string;
  noteUpdate:boolean=false;
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
      this.trashdata=false;
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
        
        console.log(this.notesValue)
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
           // this.n = _.uniqBy(this.n,'display');
           // console.log(this.n)
          }
          this.dataValue.push({key:$key,Note:note,Title:title,id:Id})
        })
        // console.log(this.dataValue)
      }
    })
       this.notesValue=[];
}





  saveNote(f:NgForm){
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.onAddNote(f)
    },500);
  }
 
 onAddNote(f:NgForm){ debugger
    let $this = this;
    // let key = this.noteValue.key;
    if(typeof this.noteValue !== typeof undefined){
      
        this.getData=true;
        let n= this.noteValue
        if(typeof this.noteValue.Title === typeof undefined){
          delete this.noteValue.Title
        }
        if(this.noteValue.Note && this.noteValue.Note !== ""){
          this.noteService.onUpdateNote(this.authUser.uid,n,this.noteValue.key)
        }
    }else{    
    const notes={} as Notes;
  	notes.Title=f.value.title;
    notes.Note=f.value.note;
    this.myForm=f
  	if(typeof notes.Title === typeof undefined){
  		delete notes.Title
  	}
    if(notes.Note && notes.Note !== ""){
      if(!this.noteUpdate){debugger
      this.noteService.addNote(this.authUser.uid,notes)
      .then(
        (ref)=>{
          this.key = ref.key;
         this.noteUpdate=true
        });
    }
    else{
    this.update(notes,this.key)
  }
  }

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
    this.getNotes();
  }
  
  getTagData(tag){
    this.trashdata=false;
    this.tagdata=[];
    tag=Object.assign([],tag)
    this.noteData.map(obj=>{
      
    obj=  Object.assign([],obj)
      obj.Title.map(tt=>{
        console.log(tt);
          if(tag.Title.display === tt.display){
            this.tag=true
            console.log()
            if(_.findIndex(this.tagdata,['key',obj.key]) === -1){
              this.tagdata.push({...obj})  
            }
           console.log(this.tagdata);
          }
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
      this.key = nt.key;
      this.noteUpdate=true
    this.dataValue.map(a=>{
      if(nt.id === a.id){
       this.getData=true
        this.noteValue = nt
      }
    })
  }
  

  updateNote( n,k){
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.update(n,k)
    },500);
  }
  

  update(n,k){
    console.log(n) 
    let key
    if(k){
       key= k;
      delete n.key
    }
    else{
        key= n.key;
      delete n.key
    }
    
    if(typeof n.Title === typeof undefined){
      delete n.Title
    }
    if(n.Note !== ""){
      this.noteService.onUpdateNote(this.authUser.uid,n,key)
    }
    
  }
  openAddForm(){
    this.key= null;
    this.getData=false;
    this.showAddInput=true;
    this.noteUpdate=false;
    if(this.myForm){
      this.myForm.reset();

    }
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
      this.trashedNotes=[]
      // this.trashData()
      if(typeof data === typeof null){
        this.trashdata=true;
        Object.keys(data).forEach(key=>{
          const $key=key;
          const note=data[key].Note
          this.trashedNotes.push({key:$key,Note:note})

        })
        console.log(this.trashedNotes)
      }
    })
  }


}
