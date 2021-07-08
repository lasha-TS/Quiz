import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, ISelectedOptions } from '../data.service';




@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  correctAnswer: string = '';
  color: string = 'white';
  quiz: any[] = [];
  selectedOptions: ISelectedOptions;
  trueCount: any = 0;
  allCount: number = 0;

  constructor(
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.selectedOptions = this._activatedRoute.snapshot.queryParams as ISelectedOptions;
  }

  ngOnInit(): void {
    this._dataService.getQuestion(this.selectedOptions.id, this.selectedOptions.difficulty)
      .subscribe(data => {
        this.quiz = data.results
        this.quiz.forEach(quizData => {
          quizData.incorrect_answers.push(quizData.correct_answer);
          quizData.incorrect_answers.sort(() => .5 - Math.random());
          quizData.selectedAnswer = '';
          quizData.isAnswered = false;
        });
      });
  }

  trueOrFalse(quizQuestion: any, selectedAnswer: string) {
    quizQuestion.isAnswered = true;
    quizQuestion.selectedAnswer = selectedAnswer;
    if (selectedAnswer === quizQuestion.correct_answer) {
      this.trueCount++;
    }
    this.allCount++;

  }
}
