import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;

  constructor(projectsServices: ProjectsService) {
    this.projects = projectsServices.projects;
  }

  ngOnInit() {
  }
}
