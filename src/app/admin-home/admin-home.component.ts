import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { Quiz } from '../model/quiz';
import { LocalstoragequizService } from '../service/localstoragequiz.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private _quizservice:LocalstoragequizService,private toastr: ToastrService) { }
  postForm : FormGroup;
  
  ngOnInit(): void {
    this.postForm = new FormGroup
    ({
      titreQuizz:new FormControl('',Validators.required),
      questions: new FormArray([]),
    })
  }
  suggestions(Qindex:number)
  {
    return this.questions().at(Qindex).get('suggestions') as FormArray;
  }
  questions()
  {
    return this.postForm.get('questions') as FormArray;
  }
  oneQuestion(i:number)
  {
      return this.questions().at(i) as FormGroup;
  }

  addQuestion()
  {
    this.questions().push(new FormGroup({
        textQuestion:new FormControl(''),
        indexOfBonneReponse : new FormControl(null),
        suggestions:new FormArray([])
      })) 
  }
  removeSuggestion(i:number,j:number)
  {
    this.suggestions(i).removeAt(j);
  }
  addSuggestion(i:number)
  {
    this.suggestions(i).push(new FormControl(''))
  } 
  correctResponse(i:number,j:number)
  {
    this.oneQuestion(i).patchValue({indexOfBonneReponse: j})
  }
  
  newElement()
  {
    
      const quiz = new Quiz(this.postForm.controls.questions.value,this.postForm.controls.titreQuizz.value)
      console.log(quiz);
    this._quizservice.storeOnLocalStorage(quiz);
   // this.postForm.controls.reset
   
      this.toastr.success('Bonne reponse valide');
      //alert("Veuillez valider la réponse correcte");
    
  } 
}
function question(question: any, arg1: FormControl) {
  throw new Error('Function not implemented.');
}

