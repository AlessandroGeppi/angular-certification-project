import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { JobsService } from "../../services/jobs.service";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ButtonModule } from "primeng/button";
import { ChipModule } from "primeng/chip";

@Component({
  selector: "app-job-details",
  standalone: true,
  imports: [ProgressSpinnerModule, ButtonModule, RouterModule, ChipModule],
  templateUrl: "./job-details.component.html",
  styleUrl: "./job-details.component.css",
})
export class JobDetailsComponent implements OnInit {
  jobId: number = -1;
  constructor(private route: ActivatedRoute, public jobService: JobsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.jobId = parseInt(params.get("jobId") ?? "-1");
        this.jobService.getJobDetails(this.jobId);
      },
      error: (error) => console.error(error),
    });
  }
}
