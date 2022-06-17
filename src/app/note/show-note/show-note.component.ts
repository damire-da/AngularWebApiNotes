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
  ActivateAddEditNoteComp: boolean = false;
  
  NoteIdFilter: string = "";
  NoteNameFilter: string = "";
  NoteListWithoutFilter: any[];

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

  deleteClick(item: any) {
    if (confirm("Are you sure?")) {
      this.service.deleteNote(item.NoteId).subscribe(data => {
        alert(data.toString());
        this.refreshNoteList();
      });
    }

  }

  refreshNoteList() {
    this.service.getNoteList().subscribe(data => {
      this.NoteList = data;
      this.NoteListWithoutFilter = data;
    });
  }

  FilterFn() {
    var NoteIdFilter = this.NoteIdFilter;
    var NoteNameFilter = this.NoteNameFilter;

    this.NoteList = this.NoteListWithoutFilter.filter(function (el) {
      return el.NoteId.toString().toLowerCase().includes(
        NoteIdFilter.toString().trim().toLowerCase()
      ) &&
        el.Title.toString().toLowerCase().includes(
        NoteNameFilter.toString().trim().toLowerCase()
        ) 
    });
  }

  sortResult(prop: any, asc: boolean) {
    this.NoteList = this.NoteListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }
}
