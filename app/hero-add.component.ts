import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'
import {HeroModel} from './hero'
import {CanActivate} from 'angular2/router';
import {tokenNotExpired} from 'angular2-jwt';


@Component({
    selector: 'hero-add',
    templateUrl: 'app/hero-add.component.html'
})

@CanActivate(() => tokenNotExpired())

export class HeroAddComponent{
    
    
    powers = ['Really Smart', 'Super Flexible',
                'Super Hot','Weather Changer'];
    
    model = new HeroModel(18, 'Dr IQ', this.powers[0],'Chuck Overstreet');
    
    submitted = false;
    active = true;
    
    onSubmit(){
        this.submitted = true;
    }
    
    // Remove this when we're done
    get diagnostic(){
        return JSON.stringify(this.model);
    }
    
    newHero(){
        this.model = new HeroModel(42,'','');
        this.active = false;
        setTimeout(()=> this.active = true,0);
    }
}