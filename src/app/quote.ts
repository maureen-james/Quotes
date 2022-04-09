// export class Quote {
//     id: number;
//     quote:string;
//     author:string;
//     // completeDate: Date
//     upvotes:number;
//     downvotes:number;

//     constructor(id:number, quote:string, author:string, upvotes:number, downvotes:number){
//     this.id =id;
//     this.quote =quote;
//     this.author =author;
//     // this.completeDate = completeDate
//     this.upvotes =upvotes;
//     this.downvotes =downvotes
// }}
export class Quote {
    showDescription: boolean;
      id:number;
      quote: string;
      author:string;
      upvotes: number;
      downvotes: number;
      description : string;
      submitted_by:string;
      postdate:Date;
  
      constructor (id:number, quote: string,  author:string, upvotes: number, downvotes: number, description:string,submitted_by:string, postdate:Date){
      this.id = id;
      this.quote = quote;
      this.author=author;
      this.upvotes = upvotes;
      this.downvotes = downvotes;
      this.description = description;
      this.submitted_by = submitted_by
      this.postdate =postdate;
      this.showDescription=false;
    }}
