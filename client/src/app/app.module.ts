import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AllTasksService } from './services/all-tasks.service';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'index', component: TaskListComponent },
  { path: 'details/:id',  component: TaskDetailComponent },
  // {path: 'entries/:id', component: EntryDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AllTasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
