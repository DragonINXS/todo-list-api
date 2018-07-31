import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllTasksService } from '../../services/all-tasks.service';  // <------- Import YOUR service


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  theTaskSelected: any;

  constructor(private theRoute: ActivatedRoute, 
    private myService: AllTasksService
  ) { }
  
  ngOnInit() {
    this.theRoute.params
      .subscribe((params) => {
        this.myService.getATask(params['id'])
          .subscribe((theTaskFromService) => {
            this.theTaskSelected = theTaskFromService
          })
      });
  }
}
