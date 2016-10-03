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
//import { COUNTRIES } from './all-countries';
var COUNTRIES = [
    new country_1.Country(1, 'Croatia', 5, 1, 2, './app/flags/Croatia.png'),
    new country_1.Country(2, 'UK', 5, 3, 3, "./app/flags/United_Kingdom.png"),
    new country_1.Country(3, 'Italy', 5, 3, 3, './app/flags/Italy.png'),
    new country_1.Country(4, 'France', 1, 2, 30, './app/flags/France.png'),
    new country_1.Country(5, 'Senegal', 6, 5, 3, './app/flags/Germany.png'),
    new country_1.Country(6, 'Chile', 1, 4, 5, './app/flags/Germany.png'),
    new country_1.Country(7, 'Venezuela', 1, 2, 2, './app/flags/France.png')
];
var CountryService = (function () {
    function CountryService() {
    }
    CountryService.prototype.getCountries = function () {
        console.log(" Countries in get=");
        console.log(COUNTRIES);
        return Promise.resolve(COUNTRIES);
    };
    CountryService.prototype.addToArray = function (country) {
        console.log("COUNTRIES pRIJE=");
        console.log(COUNTRIES);
        var inArray = 0;
        for (var i = 0; i < COUNTRIES.length; i++) {
            if (country.id == COUNTRIES[i].id) {
                COUNTRIES[i] = country;
                return;
            }
            else if (i == COUNTRIES.length - 1) {
                COUNTRIES.push(country);
                console.log("Countries Poslije=");
                console.log(COUNTRIES);
            }
        }
        return Promise.resolve(country);
    };
    CountryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map