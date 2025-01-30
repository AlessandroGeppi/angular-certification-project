import { Component, Input, OnInit } from "@angular/core";
import { Job } from "../../../types";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { JobsService } from "../../services/jobs.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-job-recap",
  standalone: true,
  imports: [ButtonModule, DividerModule, RouterModule],
  templateUrl: "./job-recap.component.html",
  styleUrl: "./job-recap.component.css",
})
export class JobRecapComponent implements OnInit {
  @Input() job!: Job;
  @Input() showFavouriteIcon: boolean = true;

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {}

  addRemoveToFavourite(item: Job): void {
    this.jobService.favouriteJobs.update((jobs) => {
      const jobIndex: number = jobs.findIndex((job) => job.id === item.id);
      jobIndex > -1 ? jobs.splice(jobIndex, 1) : jobs.push(item);
      return jobs;
    });
    localStorage.setItem(this.jobService.localStorageFavouriteJobsKey, JSON.stringify(this.jobService.favouriteJobs()));
  }

  isFavourite(jobId: number): string {
    return this.jobService
      .favouriteJobs()
      .map((m) => m.id)
      .includes(jobId)
      ? "-fill"
      : "";
  }
}
