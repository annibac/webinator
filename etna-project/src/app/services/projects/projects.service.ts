import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  private _projects = [{'name' : 'MyLib: Compl�ter un biblioth�que de fonctions basiques en C.', 'level': 1, 'difficulty': 15, 'language': 'C', 'score': 30},
  {'name' : 'Rendez-vous p�dagogique.', 'level': 1, 'difficulty': 30, 'language': null, 'score': 30}];

  constructor() {

  }

  get projects(): any {
    return this._projects;
  }

  set projects(projects: any) {
    this._projects = projects;
  }

  // Remove 1 project from projects array
  delProject(index: number) {
    if (index !== -1) {
        this._projects.splice(index, 1);
    }
  }

  getProject(index: number) {
    return this._projects[index];
  }
}
