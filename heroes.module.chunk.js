webpackJsonp(["heroes.module"],{

/***/ "../../../../../src/app/heroes/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"section-title\">{{'heroDetail' | translate}}</h1>\n<mat-progress-spinner *ngIf=\"!hero\"\n                      class=\"progress-spinner\"\n                      [color]=\"'primary'\"\n                      [mode]=\"'indeterminate'\">\n</mat-progress-spinner>\n<div id=\"heroe-detail\" *ngIf=\"hero\">\n    <ng-container>\n        <mat-card class=\"hero-card\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"hero-header-image\"\n                     [ngStyle]=\"{'background-image': 'url(assets/images/heroes/' + hero.id + '-thumbnail.jpg)'}\"></div>\n                <mat-card-title>{{hero.name}}</mat-card-title>\n                <mat-card-subtitle>{{hero.alterEgo}}</mat-card-subtitle>\n                <div class=\"flex-spacer\"></div>\n                <div class=\"hero-actions\">\n                    {{hero.likes}}\n                    <mat-icon matTooltip=\"{{(canVote ? 'canVote' : 'cannotVote') | translate}}\"\n                              [matTooltipPosition]=\"'above'\"\n                              class=\"like-icon\" (click)=\"like(hero)\">favorite\n                    </mat-icon>\n                </div>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/images/heroes/{{hero.id}}.jpg\">\n        </mat-card>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/heroes/hero-detail/hero-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#heroe-detail {\n  width: 65%;\n  margin: 0 auto;\n  margin-top: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_hero_service__ = __webpack_require__("../../../../../src/app/heroes/shared/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, activatedRoute) {
        var _this = this;
        this.heroService = heroService;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
                _this.heroService.getHeroById(params['id']).subscribe(function (hero) {
                    _this.hero = hero;
                });
            }
        });
    }
    HeroDetailComponent.prototype.like = function (hero) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.heroService.like(hero).subscribe(function () {
                _this.canVote = _this.heroService.checkIfUserCanVote();
                resolve(true);
            }, function (error) {
                reject(error);
            });
        });
    };
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-detail',
            template: __webpack_require__("../../../../../src/app/heroes/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroes/hero-detail/hero-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/hero-list/hero-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"left\">\n    <h2 class=\"section-title\">{{ 'heroesList' | translate }}</h2>\n    <div>\n        <mat-progress-spinner *ngIf=\"!heroes\"\n                              class=\"progress-spinner\"\n                              [color]=\"'primary'\"\n                              [mode]=\"'indeterminate'\">\n        </mat-progress-spinner>\n        <mat-list>\n            <mat-list-item *ngFor=\"let hero of heroes\">\n                <img *ngIf=\"hero.default\" class=\"cp\"\n                     (click)=\"seeHeroDetails(hero);\" mat-list-avatar\n                     src=\"assets/images/heroes/{{hero.id}}-thumbnail.jpg\">\n                <img *ngIf=\"!hero.default\"\n                     (click)=\"seeHeroDetails(hero);\" mat-list-avatar src=\"assets/images/heroes/default.png\">\n                <h3 mat-line [ngClass]=\"{'cp': hero.default}\" (click)=\"seeHeroDetails(hero);\"> {{hero.name}} </h3>\n                <p mat-line [ngClass]=\"{'cp': hero.default}\" (click)=\"seeHeroDetails(hero);\">\n                    <span>{{hero.alterEgo}}</span>\n                </p>\n                <div class=\"hero-actions\">\n                    {{hero.likes}}\n                    <mat-icon matTooltip=\"{{(canVote ? 'canVote' : 'cannotVote') | translate}}\"\n                              [matTooltipPosition]=\"'above'\"\n                              class=\"like-icon\" (click)=\"like(hero)\">\n                        favorite\n                    </mat-icon>\n                    <mat-icon class=\"remove-icon\" *ngIf=\"!hero.default\"\n                              (click)=\"remove(hero);\">\n                        delete\n                    </mat-icon>\n                </div>\n            </mat-list-item>\n        </mat-list>\n    </div>\n</div>\n<div id=\"right\">\n    <h2 class=\"section-title\">{{ 'createHero' | translate }}</h2>\n    <div>\n        <form [formGroup]=\"newHeroForm\" #form=\"ngForm\" (ngSubmit)=\"createNewHero(newHeroForm.value)\">\n            <mat-input-container class=\"input-container\">\n                <input matInput type=\"text\"\n                       placeholder=\"{{'name' | translate}}\"\n                       formControlName=\"name\">\n            </mat-input-container>\n\n            <mat-input-container class=\"input-container\">\n                <input matInput type=\"text\"\n                       placeholder=\"{{'realName' | translate}}\"\n                       formControlName=\"alterEgo\">\n            </mat-input-container>\n\n            <button mat-raised-button type=\"submit\" [disabled]=\"!newHeroForm.valid\">\n                {{'create' | translate}}\n            </button>\n\n            <div *ngIf=\"error\">{{error | translate}}</div>\n        </form>\n    </div>\n</div>\n<div class=\"clear\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/heroes/hero-list/hero-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#left {\n  width: 50%;\n  float: left;\n  margin-left: 6%; }\n\n#right {\n  margin-left: 50%;\n  text-align: center;\n  padding-right: 17%; }\n\n.clear {\n  clear: both; }\n\n.mat-list {\n  margin: 0 auto;\n  display: table; }\n  .mat-list /deep/ .mat-list-text {\n    text-align: left !important; }\n\n.hero-actions {\n  padding-bottom: 0; }\n  .hero-actions .remove-icon {\n    padding-left: 0.5em;\n    color: darkslategrey;\n    cursor: pointer; }\n\nform {\n  display: -ms-grid;\n  display: grid;\n  width: 80%;\n  margin: 0 auto; }\n  form .mat-raised-button {\n    color: white;\n    background: #3f51b5;\n    width: 50%;\n    margin: 0 auto; }\n  form .mat-form-field {\n    width: 100%; }\n\n@media (max-width: 680px) {\n  #left {\n    width: 100%;\n    float: none;\n    margin: 0 auto; }\n  #right {\n    margin: 1em auto 0;\n    width: 90%;\n    float: none;\n    padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/hero-list/hero-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoveHeroDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_hero_service__ = __webpack_require__("../../../../../src/app/heroes/shared/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeroListComponent = (function () {
    function HeroListComponent(heroService, dialog, router, formBuilder) {
        var _this = this;
        this.heroService = heroService;
        this.dialog = dialog;
        this.router = router;
        this.formBuilder = formBuilder;
        this.canVote = false;
        this.canVote = this.heroService.checkIfUserCanVote();
        this.newHeroForm = this.formBuilder.group({
            'name': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]],
            'alterEgo': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]]
        });
        this.heroService.getAllHeroes().subscribe(function (heroes) {
            _this.heroes = heroes.sort(function (a, b) {
                return b.likes - a.likes;
            });
        });
    }
    HeroListComponent.prototype.like = function (hero) {
        var _this = this;
        this.heroService.like(hero).subscribe(function () {
            _this.canVote = _this.heroService.checkIfUserCanVote();
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_6__core_logger_service__["a" /* LoggerService */].error('maximum votes limit reached', error);
        });
    };
    HeroListComponent.prototype.createNewHero = function (newHero) {
        var _this = this;
        this.heroService.createHero(newHero).subscribe(function (newHeroWithId) {
            _this.heroes.push(newHeroWithId);
            _this.myNgForm.resetForm();
        }, function (response) {
            if (response.status === 500) {
                _this.error = 'errorHasOcurred';
            }
        });
    };
    HeroListComponent.prototype.seeHeroDetails = function (hero) {
        if (hero.default) {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__config_app_config__["b" /* AppConfig */].routes.heroes + '/' + hero.id]);
        }
    };
    HeroListComponent.prototype.remove = function (heroToRemove) {
        var _this = this;
        var dialogRef = this.dialog.open(RemoveHeroDialogComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.heroService.deleteHeroById(heroToRemove.id).subscribe(function () {
                    _this.heroService.showSnackBar('heroRemoved');
                    _this.heroes = _this.heroes.filter(function (hero) { return hero.id !== heroToRemove.id; });
                }, function (response) {
                    if (response.status === 500) {
                        _this.error = 'heroDefault';
                    }
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('form'),
        __metadata("design:type", Object)
    ], HeroListComponent.prototype, "myNgForm", void 0);
    HeroListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-list',
            template: __webpack_require__("../../../../../src/app/heroes/hero-list/hero-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroes/hero-list/hero-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], HeroListComponent);
    return HeroListComponent;
}());

var RemoveHeroDialogComponent = (function () {
    function RemoveHeroDialogComponent() {
    }
    RemoveHeroDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-remove-hero-dialog',
            template: __webpack_require__("../../../../../src/app/heroes/hero-list/remove-hero.dialog.html"),
        }),
        __metadata("design:paramtypes", [])
    ], RemoveHeroDialogComponent);
    return RemoveHeroDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/hero-list/remove-hero.dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{'removeHero' | translate}}</h2>\n<mat-dialog-content>{{'areYouSure' | translate}}</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button mat-dialog-close>{{'no' | translate}}</button>\n    <button mat-button [mat-dialog-close]=\"true\">{{'yes' | translate}}</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/heroes/heroes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_list_hero_list_component__ = __webpack_require__("../../../../../src/app/heroes/hero-list/hero-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/heroes/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var heroesRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__heroes_component__["a" /* HeroesComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__hero_list_hero_list_component__["a" /* HeroListComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] }
        ]
    }
];
var HeroRoutingModule = (function () {
    function HeroRoutingModule() {
    }
    HeroRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(heroesRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ]
        })
    ], HeroRoutingModule);
    return HeroRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroesComponent = (function () {
    function HeroesComponent() {
    }
    HeroesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroes',
            template: __webpack_require__("../../../../../src/app/heroes/heroes.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/heroes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesModule", function() { return HeroesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_routing_module__ = __webpack_require__("../../../../../src/app/heroes/heroes-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__ = __webpack_require__("../../../../../src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hero_list_hero_list_component__ = __webpack_require__("../../../../../src/app/heroes/hero-list/hero-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_hero_service__ = __webpack_require__("../../../../../src/app/heroes/shared/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/heroes/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HeroesModule = (function () {
    function HeroesModule() {
    }
    HeroesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__heroes_routing_module__["a" /* HeroRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__heroes_component__["a" /* HeroesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__hero_list_hero_list_component__["a" /* HeroListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__hero_list_hero_list_component__["b" /* RemoveHeroDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__hero_list_hero_list_component__["b" /* RemoveHeroDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_hero_service__["a" /* HeroService */]
            ]
        })
    ], HeroesModule);
    return HeroesModule;
}());



/***/ })

});
//# sourceMappingURL=heroes.module.chunk.js.map