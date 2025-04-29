import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesBoardComponent } from './components/notes-board/notes-board.component';
import { NoteComponent } from './components/note/note.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { IfNoNotesDirective } from './directives/if-no-notes.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotesBoardComponent,
    NoteComponent,
    HighlightDirective,
    AutofocusDirective,
    IfNoNotesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
