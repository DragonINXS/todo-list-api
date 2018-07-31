import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
  
export class AllTasksService {

  constructor(private myHttp: Http) { }

  getTasks() {
    return this.myHttp.get('http://localhost:3000/api/tasks')
      .map((response) => response.json());
  };

  addNewTask(theNewTaskObject) {
    return this.myHttp.post('http://localhost:3000/api/tasks/create', theNewTaskObject)
      .map((res) => res.json());
  }

  getATask(theIdOfTheTask) {
    return this.myHttp.get('http://localhost:3000/api/tasks/:id/details' + theIdOfTheTask)
      .map((response) => response.json());
  }






}
