import { Component, Input } from '@angular/core';
import { Country } from './country';
import {CountryService } from './country.service';

@Component({
    selector: 'country-detail',
    template:`
              <div class="container" *ngIf="country" style="position:absolute;left:2%;width:400px;height:100%">
                    <h2>{{country.name}} details!</h2>
                    
                        <div class="row" style="position:relative;width:400px;">
                            <div style="position:relative">
                                <label>id: </label>
                                {{country.id}}
                            
                            </div>    
                        
                            <div style="position:relative">
                                <label> name: </label>
                                <input [(ngModel)]="country.name" type="text" class="form-control" placeholder="Name" style="width:150px;"/>
                            </div>
                        
                            <div style="position:relative">     
                                <label> Flag: </label>
                                <input [(ngModel)]="country.imgUrl" type="text" class="form-control" placeholder="Flag path" style="width:150px;"/>
                                
                            </div>
                        </div>
                        <div class="row" style="position:relative;width:400px;">
                                                   
                                <div class="col-sm-4" >     
                                    <label> Gold: </label>
                                    <input [(ngModel)]="country.gold" type="text" class="form-control" placeholder="Gold" style="width:35%;"/>
                                </div>
                        
                                <div class="col-sm-4" >                        
                                    <label> Silver: </label>
                                    <input [(ngModel)]="country.silver"type="text" class="form-control" placeholder="Silver" style="width:35%;"/>
                                </div>
                        
                                <div class="col-sm-4" >
                                    <label> Bronze: </label>
                                    <input [(ngModel)]="country.bronze" type="text" class="form-control" placeholder="Bronze" style="width:35%;"/>
                                </div>
                            
                        </div>                        
                        <br />    
                        <div class="row" style="position:relative;width:400px;">
                            <span style="position:relative;left:90%;" class="add"  (click)="saveCountry(country)"><img src="app/icons/save.png" /></span>
                        </div>                 
                    
                         
                </div>      
                `
    ,
    providers: [CountryService]
})
export class CountryDetailComponent {
    @Input()
    country: Country;  

    constructor(private countryService: CountryService) {
    }
     
    saveCountry(newCountry: Country): void {
        this.countryService.addToArray(newCountry);
    }
}