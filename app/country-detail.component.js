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
var CountryDetailComponent = (function () {
    function CountryDetailComponent(countryService) {
        this.countryService = countryService;
    }
    CountryDetailComponent.prototype.saveCountry = function (newCountry) {
        this.countryService.addToArray(newCountry);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', country_1.Country)
    ], CountryDetailComponent.prototype, "country", void 0);
    CountryDetailComponent = __decorate([
        core_1.Component({
            selector: 'country-detail',
            template: "\n              <div class=\"container\" *ngIf=\"country\" style=\"position:absolute;left:2%;width:400px;height:100%\">\n                    <h2>{{country.name}} details!</h2>\n                    \n                        <div class=\"row\" style=\"position:relative;width:400px;\">\n                            <div style=\"position:relative\">\n                                <label>id: </label>\n                                {{country.id}}\n                            \n                            </div>    \n                        \n                            <div style=\"position:relative\">\n                                <label> name: </label>\n                                <input [(ngModel)]=\"country.name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" style=\"width:150px;\"/>\n                            </div>\n                        \n                            <div style=\"position:relative\">     \n                                <label> Flag: </label>\n                                <input [(ngModel)]=\"country.imgUrl\" type=\"text\" class=\"form-control\" placeholder=\"Flag path\" style=\"width:150px;\"/>\n                                \n                            </div>\n                        </div>\n                        <div class=\"row\" style=\"position:relative;width:400px;\">\n                                                   \n                                <div class=\"col-sm-4\" >     \n                                    <label> Gold: </label>\n                                    <input [(ngModel)]=\"country.gold\" type=\"text\" class=\"form-control\" placeholder=\"Gold\" style=\"width:35%;\"/>\n                                </div>\n                        \n                                <div class=\"col-sm-4\" >                        \n                                    <label> Silver: </label>\n                                    <input [(ngModel)]=\"country.silver\"type=\"text\" class=\"form-control\" placeholder=\"Silver\" style=\"width:35%;\"/>\n                                </div>\n                        \n                                <div class=\"col-sm-4\" >\n                                    <label> Bronze: </label>\n                                    <input [(ngModel)]=\"country.bronze\" type=\"text\" class=\"form-control\" placeholder=\"Bronze\" style=\"width:35%;\"/>\n                                </div>\n                            \n                        </div>                        \n                        <br />    \n                        <div class=\"row\" style=\"position:relative;width:400px;\">\n                            <span style=\"position:relative;left:90%;\" class=\"add\"  (click)=\"saveCountry(country)\"><img src=\"app/icons/save.png\" /></span>\n                        </div>                 \n                    \n                         \n                </div>      \n                ",
            providers: [country_service_1.CountryService]
        }), 
        __metadata('design:paramtypes', [country_service_1.CountryService])
    ], CountryDetailComponent);
    return CountryDetailComponent;
}());
exports.CountryDetailComponent = CountryDetailComponent;
//# sourceMappingURL=country-detail.component.js.map