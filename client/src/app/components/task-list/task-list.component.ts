import { Component, OnInit } from '@angular/core';
import { AllTasksService } from '../../services/all-tasks.service';  // <------- Import YOUR service

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  tasks: Array<any>;

  theNewTask: any = {};

  constructor(private theService: AllTasksService) { }
  
  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.theService.getTasks()
      .subscribe((tasks) => {
        this.tasks = tasks;
      })
  }

  addTask() {
    this.theService.addNewTask(this.theNewTask)
      .subscribe((response) => {
        console.log(this.theNewTask);
        this.theNewTask = {};
        this.getTasks();
        console.log('Got task and added');
    })
  }



}

