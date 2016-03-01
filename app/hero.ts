export interface Hero{
    id: number;
    name: string;
    save():Promise<boolean>;
}

export class HeroModel{
    
    constructor(
        public id: number,
        public name: string,
        public power:string,
        public alterEgo?: string
    ) {}
}

export class TodoItem {
  constructor(
      public text: string, 
      public completed: boolean
      ) {
  }
}

export class Post {
    constructor(
        public id: string,
        public title: string,
        public description: string
        ){}
}