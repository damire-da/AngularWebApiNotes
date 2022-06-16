import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-note',
  templateUrl: './add-edit-note.component.html',
  styleUrls: ['./add-edit-note.component.css']
})
export class AddEditNoteComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() note: any;
  NoteId: Number=0;
  Title: string="";
  NoteText: string="";

  ngOnInit(): void {
    this.NoteId = this.note.NoteId;
    this.Title = this.note.Title;
    this.NoteText = this.note.NoteText;
  }

  addNote() {
    var val = {
      NoteId: this.NoteId,
      Title: this.Title,
      NoteText: this.NoteText
    };

    this.service.addNote(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateNote() {
    var val = {
      NoteId: this.NoteId,
      Title: this.Title,
      NoteText: this.NoteText
    };

    this.service.updateNote(val).subscribe(res => {
      alert(res.toString());
    });
  }
}


