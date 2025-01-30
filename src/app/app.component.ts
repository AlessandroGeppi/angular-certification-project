import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { mockHandlers } from "../mocks";
import { TabViewModule } from 'primeng/tabview';
import { AllJobsComponent } from "./components/all-jobs/all-jobs.component";
import { FavouriteJobsComponent } from "./components/favourite-jobs/favourite-jobs.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, TabViewModule, AllJobsComponent, FavouriteJobsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "ng-job-search";

  constructor() {}

  ngOnInit() {}
}
