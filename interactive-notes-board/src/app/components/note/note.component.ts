import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() note!: Note;
  @Output() delete = new EventEmitter<void>();

  deleteNote() {
    this.delete.emit();
  }
}
