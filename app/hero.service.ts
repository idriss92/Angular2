import {Hero} from './hero';
//import {HEROES} from './mock-heroes';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';


@Injectable()
export class HeroService {
  
  constructor(private http: Http){
      
  }

  private _heroesUrl= 'app/heroes';
  
  getHeroes() {
          return this.http.get(this._heroesUrl)
                    .toPromise()
                    .then(res => <Hero[]> res.json().data, this.handleError)
                    .then(data => {console.log(data); return data;});
    //return Promise.resolve(HEROES);
  }

  
  addHero(name:string) : Promise<Hero> {
      let body = JSON.stringify({name});
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers:headers});
      
      return this.http.post(this._heroesUrl,body,options)
                        .toPromise()
                        .then(res => <Hero> res.json().data)
                        .catch(this.handleError);
  }
  
    private handleError (error: any) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Promise.reject(error.json().error || 'Server error');
  }
  
  //getHeroesSlowly() {
    //return new Promise<Hero[]>(resolve =>
      //setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    //);
  //}

  //getHero(id: number) {
    //return Promise.resolve(HEROES).then(
      //heroes => heroes.filter(hero => hero.id === id)[0]
    //);
  //}
}