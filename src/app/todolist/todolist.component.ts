import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
todos = [
  {
    label : "X",
    done : false,
    priority : 1
  },
  {
    label : "y",
    done : true,
    priority : 2
  }, {
    label : "Z",
    done : false,
    priority : 3
  },
];

addTodo(newTodoLabel){
  var newTodo = {
    label : newTodoLabel,
    priority : 1 ,
    done : false
  };
  this.todos.push(newTodo);
}
deleteTodo(todo){
  this.todos = this.todos.filter(t => t.label !== todo.label);
}
}
