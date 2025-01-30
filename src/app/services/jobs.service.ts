import { effect, Injectable, signal, WritableSignal } from "@angular/core";
import { Job } from "../../types";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  jobs: WritableSignal<Job[]> = signal([]);
  favouriteJobs: WritableSignal<Job[]> = signal([]);
  localStorageFavouriteJobsKey: string = "favouriteJobs";
  
  constructor() {}

  async getJobs(): Promise<void> {
    (await fetch("http://localhost:4200/jobs")).json().then((jobs: Job[]) => this.jobs.set(jobs));
  }
}
