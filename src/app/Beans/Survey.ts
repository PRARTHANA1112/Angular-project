export class Survey{
    question:string;
    answer:string;
    hide:boolean;
    constructor(question:string){
        this.question = question;
    }
    toggle(){
        this.hide = !this.hide;
    }
}