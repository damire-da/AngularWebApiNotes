import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-note',
  templateUrl: './add-edit-note.component.html',
  styleUrls: ['./add-edit-note.component.css']
})
export class AddEditNoteComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() note: any;
  NoteId: 0;
  Title: "";
  TextNote: "";


  ngOnInit(): void {
    this.NoteId = this.note.NoteId;
    this.Title = this.note.Title;
    this.TextNote = this.note.TextNote;
  }

  addNote() {
    var val = {
      NoteId: this.NoteId,
      Title: this.Title,
      TextNote: this.TextNote
    };

    this.service.addNote(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateNote() {
    var val = {
      NoteId: this.NoteId,
      Title: this.Title,
      TextNote: this.TextNote
    };

    this.service.updateNote(val).subscribe(res => {
      alert(res.toString());
    });
  }
}


