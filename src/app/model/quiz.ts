export class Quiz
{
    id:number=0;
    quizzTitle:string;
    questions :[Question]
    constructor(questions :[Question],quizzTitle : string)
    {

        this.id=this.id++;
        this.questions=questions;
        this.quizzTitle=quizzTitle;
    }

}

export class Question 
{
    textQuestion:string;
    indexOfBonneReponse : number; 
     suggestions : [string];
    indexOfUserReponse : number
}