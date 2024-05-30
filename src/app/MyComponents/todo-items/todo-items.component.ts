import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../Todo';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [TodosComponent],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo = new Todo(); 

  constructor() { }

  ngOnInit(): void {

  }
}
