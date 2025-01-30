import { Component } from "@angular/core";
import { JobsService } from "../../services/jobs.service";
import { DividerModule } from "primeng/divider";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { JobRecapComponent } from "../job-recap/job-recap.component";

@Component({
  selector: "app-favourite-jobs",
  standalone: true,
  imports: [ProgressSpinnerModule, DividerModule, JobRecapComponent],
  templateUrl: "./favourite-jobs.component.html",
  styleUrl: "./favourite-jobs.component.css",
})
export class FavouriteJobsComponent {
  constructor(public jobService: JobsService) {}
}
