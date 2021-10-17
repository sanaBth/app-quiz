import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Quiz } from '../model/quiz';
import { LocalstoragequizService } from '../service/localstoragequiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public quizs : Quiz[] =[];
 // clicked = false;
  constructor(private _quizService : LocalstoragequizService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.quizs=this._quizService.getQuiz();
    
          
   
    }
  
  check(e:any,z:number, i :number, j:number)
  {
    this.quizs[z].questions[i].indexOfUserReponse=j;
  
//console.log(this.quizs[z].questions[i]);
  }
  validSubmit(z:number)
  {
    let score = 0;
    let ok = true;
    let sommeQuestion =  this.quizs[z].questions.length;
    this.quizs[z].questions.every(question=>{
      console.log(question.indexOfUserReponse);
     if(question.indexOfUserReponse !== undefined ) 
     {
      if (question.indexOfBonneReponse == question.indexOfUserReponse)
      {
        score+=1;
      }
      
      
     } else 
      {
        this.toastr.warning('Veuillez répondre à toutes les questions');
       ok = false;
       return false
      }
    
    console.log(ok);
    return true
    })
    if (ok)
    {
      this.toastr.success(`Votre score est : ${score}/${sommeQuestion}`);
      console.log(`Votre score est : ${score}/${sommeQuestion}`);

    }
      
    
    
  }}
