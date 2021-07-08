import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  successAnswer: any;

  constructor(private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.successAnswer = this.Route.snapshot.queryParams.count;
  }


}
