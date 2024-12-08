import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})

export class AppComponent {
  public title: String = 'Minhas Tarefas';
  public todos: Todo[] = [];

  constructor(){
    this.todos.push(new Todo(1,'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'Ir ao supermercado', false));
    this.todos.push(new Todo(3, 'Cortar o cabelo', false));
  }
}
