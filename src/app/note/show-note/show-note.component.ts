import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.css']
})
export class ShowNoteComponent implements OnInit {

  constructor(private service:SharedService ) { }

  NoteList: any = [];

  ModalTitle: string = "";
  note: any;
  ActivateAddEditNoteComp:boolean=false;

  ngOnInit(): void {
    this.refreshNoteList();
  }

  addClick() {
    this.note={
      NoteId: 0,
      Title: "",
      NoteText:""
    }
    this.ModalTitle = "Add Note";
    this.ActivateAddEditNoteComp = true;
  }

  editClick(item: any) {
    this.note = item;
    this.ModalTitle = "Edit Note";
    this.ActivateAddEditNoteComp = true;
  }

  closeClick() {
    this.ActivateAddEditNoteComp = false;
    this.refreshNoteList();
  }

  refreshNoteList() {
    this.service.getNoteList().subscribe(data => {
      this.NoteList = data;
    });
  }
}
