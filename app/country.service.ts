import { Injectable } from '@angular/core';
import { Country } from './country';
//import { COUNTRIES } from './all-countries';
var COUNTRIES: Country[] = [
    new Country(1, 'Croatia', 5, 1, 2, './app/flags/Croatia.png' ),
    new Country(2, 'UK', 5, 3, 3, "./app/flags/United_Kingdom.png"),
    new Country(3, 'Italy', 5, 3, 3, './app/flags/Italy.png'),  
    new Country(4, 'France', 1, 2, 30, './app/flags/France.png'),
    new Country(5, 'Senegal', 6, 5, 3, './app/flags/Germany.png'),
    new Country(6, 'Chile', 1, 4, 5, './app/flags/Germany.png'),
    new Country(7, 'Venezuela', 1, 2, 2, './app/flags/France.png')    
];


@Injectable()
export class CountryService {

  

    getCountries(): Promise<Country[]> {
        console.log(" Countries in get=");
        console.log(COUNTRIES);
        return Promise.resolve(COUNTRIES);

    }
    addToArray(country: Country): Promise<Country> {
        console.log("COUNTRIES pRIJE=");
        console.log(COUNTRIES);
        var inArray: number = 0;

        for (var i: number = 0; i < COUNTRIES.length; i++){
            if (country.id == COUNTRIES[i].id) {
                COUNTRIES[i] = country;
                return;

            }
            else if (i == COUNTRIES.length - 1) {
                COUNTRIES.push(country);
                console.log("Countries Poslije=")
                console.log(COUNTRIES);

            }
        }
        return Promise.resolve(country);
        
    }
    
}