import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model/quiz';
import { LocalstoragequizService } from '../service/localstoragequiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public quizs : Quiz[] =[];
  constructor(private _quizService : LocalstoragequizService) { }

  ngOnInit(): void {
    this.quizs=this._quizService.getQuiz();
  }

}
