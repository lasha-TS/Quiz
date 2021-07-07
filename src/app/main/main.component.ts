import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, difficulity, ISelectedOptions } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  categories: any[] = [];
  difficulties: difficulity[] = ['easy', 'medium', 'hard'];
  selectedOptions: ISelectedOptions = { id: 0, difficulty: 'easy'}

  constructor(
    private _dataService: DataService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._dataService.getCategory()
      .subscribe(data => this.categories = data.trivia_categories);
  }

  onSubmit() {
      if(!this.selectedOptions.id || !this.selectedOptions.difficulty) return;
      this._router.navigate(['/quizPage'],{queryParams: this.selectedOptions})
  }

}
