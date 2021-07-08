import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { MainComponent } from './main/main.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MainComponent },
  { path: 'quizPage', component: QuizPageComponent },
  { path: 'result', component: ResultComponent },
  { path: 'confirm', component: ConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
