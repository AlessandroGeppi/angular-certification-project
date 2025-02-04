import { Component, OnInit } from "@angular/core";
import { JobsService } from "../../services/jobs.service";
import { DividerModule } from "primeng/divider";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { JobRecapComponent } from "../job-recap/job-recap.component";

@Component({
  selector: "app-favorite-jobs",
  standalone: true,
  imports: [ProgressSpinnerModule, DividerModule, JobRecapComponent],
  templateUrl: "./favorite-jobs.component.html",
  styleUrl: "./favorite-jobs.component.css",
})
export class FavoriteJobsComponent {
  constructor(public jobService: JobsService) {}
}
