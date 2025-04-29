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
        text: this.noteText.trim(),
        color: this.getRandomColor()
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

  getRandomColor(): string {
    const colors = ['#f8d7da', '#d4edda', '#cfe2ff', '#fff3cd', '#e2e3e5', '#d9ead3', '#f9cb9c', '#f6bcf2', '#d0e0e3', '#ffe6cc', '#d9d2e9', '#f4cccc', '#cfe2f3', '#f6b93b', '#f1c232', '#a4c8f0', '#b6d7a8', '#f6b93b', '#f1c232', '#a4c8f0', '#b6d7a8', '#f9cb9c', '#f6bcf2', '#d0e0e3', '#ffe6cc', '#d9d2e9', '#f4cccc', '#cfe2f3'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  generateRandomNoteId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
