import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor } from '@angular/common';
import { TodoItemsComponent } from '../todo-items/todo-items.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemsComponent],
  templateUrl: './todos.component.html', 
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[]= [];
  constructor(){
    this.todos= [
      {
        sno: 1,
        title: "This is title",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is title",
        desc: "Description",
        active: true
      },
      {
        sno: 3,
        title: "This is title",
        desc: "Description",
        active: true
      }
    ]
   }

  ngOnInit(): void {

  }
}
