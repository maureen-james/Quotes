export class Quote {
    showDescription: boolean;
      id:number;
      quote: string;
      author:string;
      like: number;
      dislike: number;
      description : string;
      submitted_by:string;
      postdate:Date;
  
      constructor (id:number, quote: string,  author:string, like: number, dislike: number, description:string,submitted_by:string, postdate:Date){
      this.id = id;
      this.quote = quote;
      this.author=author;
      this.like = like;
      this.dislike = dislike;
      this.description = description;
      this.submitted_by = submitted_by
      this.postdate =postdate;
      this.showDescription=false;
    }}
