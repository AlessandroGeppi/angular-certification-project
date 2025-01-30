import { Component, OnInit } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ButtonModule, DividerModule, RouterModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "ng-job-search";

  constructor() {}

  ngOnInit() {}
}
