import { Component } from '@angular/core';
import { Country } from './country';
import { CountryService } from './country.service';
//import { COUNTRIES } from './all-countries';
import {OrderBy } from './orderBy-pipe'

import { Pipe, PipeTransform } from '@angular/core';
///**************************************************************************

///**************************************************************************
@Component({
    selector: 'my-app',
    template: `<div class="container-fluid" style="position:relative;">
                    <div class="jumbotron">
                        <h1>{{title}}</h1>
                        
                    </div>
                    
                    <div class="row">     
                        <div class="col-sm-8" style="background-color:lavender;height:100%">
            
                            <ul class="countries">
                                    
                                  <li  *ngFor="let country of countries ;let i = index;"
                                    [class.selected]="country === selectedCountry"
                                    (click)="onSelect(country)">

                                        <span class="badge">{{i+1}}</span> 
                                        <span style="position:absolute;left:5%;"><img src={{country.imgUrl}} /> </span>
                                        <span class="klik" style="position:absolute;left:10%;width:10%;" (click)="changeOrder('name',['+name','+silver','+bronze'])">{{country.name}}</span>
                                        <span style="position:absolute;left:40%;" >{{country.gold}}</span>
                                        <span class="klik" style="position:absolute;left:43%;" (click)="changeOrder('gold',['+gold','+silver','+bronze'])"><img src="app/icons/medal-gold-1-icon.png" /></span>
                                        <span style="position:absolute;left:55%; ">{{country.silver}}</span>    
                                        <span style="position:absolute;left:58%;"><img src="app/icons/medal-gold-2-icon.png" /></span>
                                        <span style="position:absolute;left:70%;">{{country.bronze}}</span>    
                                        <span style="position:absolute;left:73%;"><img src="app/icons/medal-gold-3-icon.png" /></span>
                                        <span style="position:absolute;right:2%;top:1%;" (click)="deleteCountry(i)"><img src="app/icons/cross-icon.png" /></span>              
                                    </li>
                             </ul>
                             <br/>   
                             <span class="add" style="position:absolute;left:90%;bottom:1%;" (click)="addCountry()"><img src="app/icons/add2.png" /></span>
                        </div>
                        <div class="col-sm-4" >
                            <country-detail [country]="selectedCountry"></country-detail>
                               
                        </div>         
                    </div>

               </div> 
             
             `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    
    .countriesList{
      width:100%;
      overflow:auto;
      background-color:black; 
      max-height:300px;     
    }
    .countries {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 100%;
    }
    .countries li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 30px;
      border-radius: 4px;
      width:100%;  
    }
    .countries li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .countries li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .countries .text {
      position: relative;
      top: -3px;
    }
    .countries .klik{
        cursor: pointer;
    }
    .countries .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
      height: 2em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
      height:100%;  
        
    }
    .add {
         cursor: pointer;
          position: relative;
          left: 0;
         
        }
  `],
 
    providers: [CountryService]
    
})
   
export class AppComponent {
    title = 'Olympic medals';
    countries: Country[] ;
    emptyCountry: Country;// = COUNTRIES[COUNTRIES.length - 1];
    selectedCountry: Country;
    order: string[];//, 'silver', 'bronze'];
    orderSign: boolean = true;
     columns: any[];
     data: any[];
     sort: any;


    constructor(private countryService: CountryService) {
       
        this.emptyCountry = new Country(0, '', 0, 0, 0, '');
        this.order = ['name'];
        this.countryService.getCountries().then(countries => this.countries = countries).then(countries => this.emptyCountry.id = this.countries[this.countries.length - 1].id + 1).then(countries=>this.selectedCountry = this.countries[0]);
        
    }

    getCountries(): void {
        this.countryService.getCountries().then(countries => this.countries = countries);
    }
    ngOnInit(): void {
        this.getCountries();
        
    }
    onSelect(country: Country): void {
        this.selectedCountry = country;
        console.log("Countries=" )
        console.log(this.countries);
    }
    
    //empty right side / empty selected Country and increment id 
    addCountry(): void {
       
        var c: Country;
        if (this.selectedCountry.id <= this.countries[this.countries.length-1].id){ 
            c = new Country(0, '', 0, 0, 0, '');
            c.id = this.emptyCountry.id;
            this.selectedCountry = c;
            this.emptyCountry.id  += 1;
        }
        c = null;
    }

    saveCountry(newCountry:Country): void {
        this.countryService.addToArray(newCountry).then(selectedCountry => this.selectedCountry = this.countries[this.countries.length - 1]);
    }
    //delete country
    deleteCountry(index: number): void {
        if (index > -1) {
            this.countries.splice(index, 1);
        }
    }
    //change order
    changeOrder(orderBy:string,properties:any[]): void {
        console.log("ORDER=");
        console.log(properties);
        var sign = '';
        if (this.orderSign === true) {
            this.orderSign=false;
            sign = "+";
        }
        else {
            this.orderSign = true;
            sign = '-';
        }
        //sort by name OR  gold,silver,bronze  more properties
        
            console.log("Multi ORDER=");
            console.log(orderBy);
            this.countries.sort(function (a: any, b: any) {
                    for (var i: number = 0; i < properties.length; i++) {
                        var desc = properties[i].substr(0, 1) == sign;
                        var property = properties[i].substr(0, 1) == '+' || properties[i].substr(0, 1) == '-' ? properties[i].substr(1) : properties[i];
                        console.log("property="+property);
                        var comparison = !desc ? OrderBy._orderByComparator(a[property], b[property]) : -OrderBy._orderByComparator(a[property], b[property]);
                        
                        //Don't return 0 yet in case of needing to sort by next property
                        if (comparison != 0) return comparison;
                        console.log()
                    }

                    return 0; //equal each other
                });
            

    }

    //Compare 
    static _orderByComparator(a: any, b: any): number {

        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) return -1;
            if (parseFloat(a) > parseFloat(b)) return 1;
        }

        return 0; //equal each other
    }
}
