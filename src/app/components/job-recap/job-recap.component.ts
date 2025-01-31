import { Component, Input, OnInit } from "@angular/core";
import { Job } from "../../../types";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { JobsService } from "../../services/jobs.service";
import { RouterModule } from "@angular/router";
import { ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-job-recap",
  standalone: true,
  imports: [CommonModule, ButtonModule, DividerModule, RouterModule],
  templateUrl: "./job-recap.component.html",
  styleUrl: "./job-recap.component.css",
})
export class JobRecapComponent implements OnInit {
  @Input() job!: Job;
  @Input() showFavouriteIcon: boolean = true;

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {}

  addRemoveToFavourite(item: Job): void {
    this.jobService.jobs.update((jobs) => {
      const jobIndex: number = jobs.findIndex((job) => job.id === item.id);
      jobs[jobIndex].isFavorite = !jobs[jobIndex].isFavorite;
      return jobs;
    });
    localStorage.setItem(this.jobService.localStorageFavouriteJobsKey, JSON.stringify(this.jobService.jobs()));
  }
}
