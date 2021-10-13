export class Quiz
{
    question :string
    suggestion:[]
   
    reponse :number
    constructor(question :string,suggestion : [],reponse:number)
    {
        this.question=question;
        this.suggestion=suggestion;
        this.reponse=reponse;
    }

}