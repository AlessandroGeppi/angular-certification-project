import { Routes } from "@angular/router";
import { AllJobsComponent } from "./components/all-jobs/all-jobs.component";
import { JobDetailsComponent } from "./components/job-details/job-details.component";
import { FavoriteJobsComponent } from "./components/favorite-jobs/favorite-jobs.component";

export const routes: Routes = [
  {
    path: "",
    component: AllJobsComponent,
    pathMatch: "full",
  },
  {
    path: "jobs",
    component: AllJobsComponent,
  },
  {
    path: "jobs/:jobId",
    component: JobDetailsComponent,
  },
  {
    path: "favorites",
    component: FavoriteJobsComponent,
  },
];
