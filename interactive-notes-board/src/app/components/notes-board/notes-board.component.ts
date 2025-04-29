import { Component, OnInit } from '@angular/core';
import { Note } from 'models/note.model';

@Component({
  selector: 'app-notes-board',
  templateUrl: './notes-board.component.html',
  styleUrls: ['./notes-board.component.scss']
})
export class NotesBoardComponent implements OnInit {
  noteText = '';
  notes: Note[] = [];

  ngOnInit(): void {
    const storedNotes = localStorage.getItem('notes');
    this.notes = storedNotes ? JSON.parse(storedNotes) : [];
  }

  addNote(): void {
    if (this.noteText.trim()) {
      const newNote: Note = {
        id: this.generateRandomNoteId(),
        text: this.noteText.trim()
      };
      this.notes.unshift(newNote);
      this.noteText = '';
      this.saveNotes();
    }
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  }

  saveNotes(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  generateRandomNoteId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
