export class WAM {
  project:      string;
  projectName:  string;
  task:         string;
  taskName:     string;
  from:         string;
  to:           string;

  constructor(proj: string, projName: string,
              task: string, taskName: string,
              from: string, to: string) {
    this.project = proj;
    this.projectName = projName;
    this.task = task;
    this.taskName = taskName;
    this.from = from;
    this.to = to;
  }

}
