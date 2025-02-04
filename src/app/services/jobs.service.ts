import { Injectable, signal, WritableSignal } from "@angular/core";
import { Job, JobDetails } from "../../types";
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  jobs: WritableSignal<Job[]> = signal([]);
  jobDetails: WritableSignal<JobDetails> = signal({} as JobDetails);
  localStorageFavouriteJobsKey: string = "favouriteJobs";

  constructor() {}

  get favoriteJobs(): Job[] {
    const localStorageJobs: string = localStorage.getItem(this.localStorageFavouriteJobsKey) ?? "";
    return ((localStorageJobs ? JSON.parse(localStorageJobs ?? "") : []) as Job[]).slice().filter((job: Job) => job.isFavorite);
  }

  async getJobs(): Promise<void> {
    (await fetch(`${environment.baseUrl}/jobs`)).json().then((jobs: Job[]) => this.jobs.set(jobs));
  }

  async getJobDetails(jobId: number): Promise<void> {
    (await fetch(`${environment.baseUrl}/jobs/${jobId}`)).json().then((details: JobDetails) => this.jobDetails.set(details));
  }
}
