export class Quiz
{
    id:number=0;
    quizzTitle:string;
    //theme:string;
    question :[]
    suggestion:[]
   
    reponse :number
    constructor(question :[],suggestion : [],reponse:number)
    {
        this.id=this.id++;
        this.question=question;
        this.suggestion=suggestion;
        this.reponse=reponse;
    }

}