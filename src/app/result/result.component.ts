import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  successAnswer: any;
  text?: string;

  constructor(private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.successAnswer = this.Route.snapshot.queryParams.count;
    if(this.successAnswer <= 5){
      this.text = `Your score: ${this.successAnswer}. The result is low`
    }else if(this.successAnswer > 5 && this.successAnswer < 10){
      this.text = `Your score: ${this.successAnswer}. You can do more`
    }else{
      this.text = `Your score: ${this.successAnswer}. Excellent`
    }
  }


}
