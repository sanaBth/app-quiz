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

  constructor(private _quizservice:LocalstoragequizService,
    private toastr: ToastrService,
) { }
  postForm : FormGroup;

 
  ngOnInit(): void {
    this.postForm = new FormGroup
    ({
      titreQuizz:new FormControl('',Validators.required),
      questions: new FormArray([new FormGroup({
        textQuestion:new FormControl('',Validators.required),
        indexOfBonneReponse : new FormControl(null),
        suggestions:new FormArray([new FormControl('',Validators.required)])
      })]),
    })
  }
  questionError(i:number) {  
      const question = this.questions().at(i).get('textQuestion') ;  
      //console.log(question);  
     return question?.touched && question?.hasError('required');
   
}
errorSugg(i:number,j:number) {  
 const sugg = this.suggestions(i).at(j);    
 //console.log(sugg);
  return sugg?.touched && sugg?.hasError('required'); 
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
        indexOfBonneReponse   : new FormControl(null),
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
   const sugg = this.suggestions(i).at(j);   
    if (!sugg?.hasError('required'))
    {
      this.oneQuestion(i).patchValue({indexOfBonneReponse: j})
    }
    else{
      this.toastr.warning('veuillez remplir ce champs');
    }
  }
  verifyChecked(i:number,j:number)
  {
      const bonneReponseIndex = this.questions().at(i).get('indexOfBonneReponse') ;  
    if (bonneReponseIndex?.value == null )
    {
      return true;
    }
    else 
    if (bonneReponseIndex?.value == j)
     {
      return false;
    }
    else{
      return true
    }
  }

  verifierCheckedReponse()
  {
    const lengQuestion = this.questions().length ;
    for(let i=0; i< lengQuestion; i++)
    {
      const indexOf = this.oneQuestion(i).get('indexOfBonneReponse');
    // console.log(indexOf);
    if (indexOf?.value == null)
    {
    
      return i;
    }
    
    }
    return -1;
     
  }
  newElement()
  {
    const verif = this.verifierCheckedReponse()
    console.log(verif);
    if (verif == -1)
    {
      const quiz = new Quiz(this.postForm.controls.questions.value,this.postForm.controls.titreQuizz.value)
     
    this._quizservice.storeOnLocalStorage(quiz);
  
   this.toastr.success('Quizz ajoutée');
    }
    else
    {
      this.toastr.error(`Veuillez cocher la reponse correcte du question N ${verif+1}` );
    }
  } 
}
function question(question: any, arg1: FormControl) {
  throw new Error('Function not implemented.');
}

