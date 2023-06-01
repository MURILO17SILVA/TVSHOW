export class  Show  {
  id: string;
  title: string;
  premiere: Date;
  isRunning?: boolean;
  language: string;
  mainGenre: string;
  posterUrl?: string;

constructor(id: string,title: string,premiere: Date,isRunning?:boolean,language: string, mainGenre: string,
posterUrl?: string) {
    this.id = id
    this.title =  title
    this.premiere = premiere
    this.isRunning= isRunning
    this.language = language
    this.mainGenre = mainGenre
    this.posterUrl = posterUrl
  }
}