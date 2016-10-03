"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var country_1 = require('./country');
var country_service_1 = require('./country.service');
//import { COUNTRIES } from './all-countries';
var orderBy_pipe_1 = require('./orderBy-pipe');
///**************************************************************************
///**************************************************************************
var AppComponent = (function () {
    function AppComponent(countryService) {
        var _this = this;
        this.countryService = countryService;
        this.title = 'Olympic medals';
        this.orderSign = true;
        this.emptyCountry = new country_1.Country(0, '', 0, 0, 0, '');
        this.order = ['name'];
        this.countryService.getCountries().then(function (countries) { return _this.countries = countries; }).then(function (countries) { return _this.emptyCountry.id = _this.countries[_this.countries.length - 1].id + 1; }).then(function (countries) { return _this.selectedCountry = _this.countries[0]; });
    }
    AppComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries().then(function (countries) { return _this.countries = countries; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    AppComponent.prototype.onSelect = function (country) {
        this.selectedCountry = country;
        console.log("Countries=");
        console.log(this.countries);
    };
    //empty right side / empty selected Country and increment id 
    AppComponent.prototype.addCountry = function () {
        var c;
        if (this.selectedCountry.id <= this.countries[this.countries.length - 1].id) {
            c = new country_1.Country(0, '', 0, 0, 0, '');
            c.id = this.emptyCountry.id;
            this.selectedCountry = c;
            this.emptyCountry.id += 1;
        }
        c = null;
    };
    AppComponent.prototype.saveCountry = function (newCountry) {
        var _this = this;
        this.countryService.addToArray(newCountry).then(function (selectedCountry) { return _this.selectedCountry = _this.countries[_this.countries.length - 1]; });
    };
    //delete country
    AppComponent.prototype.deleteCountry = function (index) {
        if (index > -1) {
            this.countries.splice(index, 1);
        }
    };
    //change order
    AppComponent.prototype.changeOrder = function (orderBy, properties) {
        console.log("ORDER=");
        console.log(properties);
        var sign = '';
        if (this.orderSign === true) {
            this.orderSign = false;
            sign = "+";
        }
        else {
            this.orderSign = true;
            sign = '-';
        }
        //sort by name OR  gold,silver,bronze  more properties
        console.log("Multi ORDER=");
        console.log(orderBy);
        this.countries.sort(function (a, b) {
            for (var i = 0; i < properties.length; i++) {
                var desc = properties[i].substr(0, 1) == sign;
                var property = properties[i].substr(0, 1) == '+' || properties[i].substr(0, 1) == '-' ? properties[i].substr(1) : properties[i];
                console.log("property=" + property);
                var comparison = !desc ? orderBy_pipe_1.OrderBy._orderByComparator(a[property], b[property]) : -orderBy_pipe_1.OrderBy._orderByComparator(a[property], b[property]);
                //Don't return 0 yet in case of needing to sort by next property
                if (comparison != 0)
                    return comparison;
                console.log();
            }
            return 0; //equal each other
        });
    };
    //Compare 
    AppComponent._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"container-fluid\" style=\"position:relative;\">\n                    <div class=\"jumbotron\">\n                        <h1>{{title}}</h1>\n                        \n                    </div>\n                    \n                    <div class=\"row\">     \n                        <div class=\"col-sm-8\" style=\"background-color:lavender;height:100%\">\n            \n                            <ul class=\"countries\">\n                                    \n                                  <li  *ngFor=\"let country of countries ;let i = index;\"\n                                    [class.selected]=\"country === selectedCountry\"\n                                    (click)=\"onSelect(country)\">\n\n                                        <span class=\"badge\">{{i+1}}</span> \n                                        <span style=\"position:absolute;left:5%;\"><img src={{country.imgUrl}} /> </span>\n                                        <span class=\"klik\" style=\"position:absolute;left:10%;width:10%;\" (click)=\"changeOrder('name',['+name','+silver','+bronze'])\">{{country.name}}</span>\n                                        <span style=\"position:absolute;left:40%;\" >{{country.gold}}</span>\n                                        <span class=\"klik\" style=\"position:absolute;left:43%;\" (click)=\"changeOrder('gold',['+gold','+silver','+bronze'])\"><img src=\"app/icons/medal-gold-1-icon.png\" /></span>\n                                        <span style=\"position:absolute;left:55%; \">{{country.silver}}</span>    \n                                        <span style=\"position:absolute;left:58%;\"><img src=\"app/icons/medal-gold-2-icon.png\" /></span>\n                                        <span style=\"position:absolute;left:70%;\">{{country.bronze}}</span>    \n                                        <span style=\"position:absolute;left:73%;\"><img src=\"app/icons/medal-gold-3-icon.png\" /></span>\n                                        <span style=\"position:absolute;right:2%;top:1%;\" (click)=\"deleteCountry(i)\"><img src=\"app/icons/cross-icon.png\" /></span>              \n                                    </li>\n                             </ul>\n                             <br/>   \n                             <span class=\"add\" style=\"position:absolute;left:90%;bottom:1%;\" (click)=\"addCountry()\"><img src=\"app/icons/add2.png\" /></span>\n                        </div>\n                        <div class=\"col-sm-4\" >\n                            <country-detail [country]=\"selectedCountry\"></country-detail>\n                               \n                        </div>         \n                    </div>\n\n               </div> \n             \n             ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    \n    .countriesList{\n      width:100%;\n      overflow:auto;\n      background-color:black; \n      max-height:300px;     \n    }\n    .countries {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 100%;\n    }\n    .countries li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 30px;\n      border-radius: 4px;\n      width:100%;  \n    }\n    .countries li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .countries li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .countries .text {\n      position: relative;\n      top: -3px;\n    }\n    .countries .klik{\n        cursor: pointer;\n    }\n    .countries .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -1px;\n      height: 2em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n      height:100%;  \n        \n    }\n    .add {\n         cursor: pointer;\n          position: relative;\n          left: 0;\n         \n        }\n  "],
            providers: [country_service_1.CountryService]
        }), 
        __metadata('design:paramtypes', [country_service_1.CountryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map