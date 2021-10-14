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
  reponseCorrect : string =''
  correctresponse : number;
  question:string;
  
  ngOnInit(): void {
    this.postForm = new FormGroup
    ({
      titreQuizz:new FormControl('',Validators.required),
      questions: new FormArray([]),
     
    //      suggestion:new FormArray([new FormControl('',Validators.required)])
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

  addQuestion()
  {
    this.questions().push(new FormGroup({
        textQuestion:new FormControl(''),
        suggestions:new FormArray([])
      })) 
      
  }
  removeSuggestion()
  {
   // this.suggestions().removeAt(this.suggestion.length-1);
  }
  addSuggestion(i:number)
  {
/* this.suggestions(i).push(
  new FormArray([
    suggestion : new FormControl(''),
  ])
  ) */
  } 
  correctResponse()
  {
  /*   this.correctresponse= i;
    this.reponseCorrect = this.suggestion.value[i] */
  }
  
  newElement()
  {
   /*  if (this.reponseCorrect != '')
    {
      const quiz = new Quiz(this.postForm.controls.question.value,suggestions(),this.correctresponse)
    this._quizservice.storeOnLocalStorage(quiz);
   // this.postForm.controls.reset
    }else{
      this.toastr.success('Veuillez valider la réponse correcte');
      //alert("Veuillez valider la réponse correcte");
    }*/
  } 
}
function question(question: any, arg1: FormControl) {
  throw new Error('Function not implemented.');
}

