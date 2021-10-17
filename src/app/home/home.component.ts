import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
  formQuiz : FormGroup;

  ngOnInit(): void {
    this.quizs=this._quizService.getQuiz();
    this.formQuiz = new FormGroup
    ({
   
        questions: new FormArray([new FormGroup({
        
        indexOfBonneReponse : new FormControl(null),
        listSugg:new FormArray([])
      })])
    })
   
          
    const lengQuestion = this.questions().length ;
    for(let i=0; i< lengQuestion; i++)
    {
      const listSug = this.oneQuestion(i).get('listSugg');
      
    }
    }
  questions()
  {
    return this.formQuiz.get('questions') as FormArray;
  }
  listSugg(Qindex:number)
  {
    return this.questions().at(Qindex).get('listSugg') as FormArray;
  }
  oneQuestion(i:number)
  {
      return this.questions().at(i) as FormGroup;
  }
  validQuizz()
  {

  }
}
