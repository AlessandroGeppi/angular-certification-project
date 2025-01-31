import { effect, Injectable, signal, WritableSignal } from "@angular/core";
import { Job, JobDetails } from "../../types";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  jobs: WritableSignal<Job[]> = signal([]);
  jobDetails: WritableSignal<JobDetails> = signal({} as JobDetails);
  localStorageFavouriteJobsKey: string = "favouriteJobs";

  constructor() {}

  get favoriteJobs(): Job[] {
    return this.jobs()?.filter((job) => job.isFavorite) ?? [];
  }

  async getJobs(): Promise<void> {
    (await fetch("http://localhost:4200/jobs")).json().then((jobs: Job[]) => this.jobs.set(jobs));
  }

  async getJobDetails(jobId: number): Promise<void> {
    (await fetch(`http://localhost:4200/jobs/${jobId}`)).json().then((details: JobDetails) => this.jobDetails.set(details));
  }
}
