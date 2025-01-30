import { Component, OnInit } from "@angular/core";
import { JobsService } from "../../services/jobs.service";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { JobRecapComponent } from "../job-recap/job-recap.component";

@Component({
  selector: "app-all-jobs",
  standalone: true,
  imports: [ProgressSpinnerModule, ButtonModule, DividerModule, JobRecapComponent],
  templateUrl: "./all-jobs.component.html",
  styleUrl: "./all-jobs.component.css",
})
export class AllJobsComponent implements OnInit {
  constructor(public jobService: JobsService) {
    jobService.getJobs();
    const localStorageJobs: string = localStorage.getItem(this.jobService.localStorageFavouriteJobsKey) ?? "";
    this.jobService.favouriteJobs.set(localStorageJobs ? JSON.parse(localStorageJobs ?? "") || [] : []);
  }

  ngOnInit(): void {}
}
