import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { Quiz } from '../model/quiz';
import { LocalstoragequizService } from '../service/localstoragequiz.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private _quizservice:LocalstoragequizService) { }
  postForm : FormGroup;
  reponseCorrect : string =''
  correctresponse : number;
  ngOnInit(): void {
    this.postForm = new FormGroup
    ({
      question: new FormControl('',Validators.required),
     
      suggestion:new FormArray([new FormControl('',Validators.required)])
      
    })
  }
  get suggestion()
  {
    return this.postForm.get('suggestion') as FormArray;
  }
  addSuggestion()
  {
  this.suggestion.push(new FormControl(''))
  }
  correctResponse(i:number)
  {
    this.correctresponse= i;
    this.reponseCorrect = this.suggestion.value[i]
  }
  newElement()
  {
    if (this.reponseCorrect != '')
    {
      const quiz = new Quiz(this.postForm.controls.question.value,this.suggestion.value,this.correctresponse)
    this._quizservice.storeOnLocalStorage(quiz);
    }else{
      alert("Veuillez valider la réponse correcte");
    }
  }
}
