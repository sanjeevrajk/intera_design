webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/heroes/heroes.module": [
		"../../../../../src/app/heroes/heroes.module.ts",
		"heroes.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroes_hero_top_hero_top_component__ = __webpack_require__("../../../../../src/app/heroes/hero-top/hero-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_error404_error_404_component__ = __webpack_require__("../../../../../src/app/core/error404/error-404.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__heroes_hero_top_hero_top_component__["a" /* HeroTopComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_3__config_app_config__["b" /* AppConfig */].routes.heroes, loadChildren: 'app/heroes/heroes.module#HeroesModule' },
    { path: __WEBPACK_IMPORTED_MODULE_3__config_app_config__["b" /* AppConfig */].routes.error404, component: __WEBPACK_IMPORTED_MODULE_4__core_error404_error_404_component__["a" /* Error404Component */] },
    // otherwise redirect to 404
    { path: '**', redirectTo: '/' + __WEBPACK_IMPORTED_MODULE_3__config_app_config__["b" /* AppConfig */].routes.error404 }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-nav></app-nav>\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(translateService, title, meta, snackBar, router) {
        var _this = this;
        this.translateService = translateService;
        this.title = title;
        this.meta = meta;
        this.snackBar = snackBar;
        this.router = router;
        this.translateService = translateService;
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');
        this.title.setTitle('Angular Example App');
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                switch (event.urlAfterRedirects) {
                    case '/':
                        _this.meta.updateTag({
                            name: 'description',
                            content: 'Angular Example app with Angular CLI, Angular Material and more'
                        });
                        break;
                    case '/' + __WEBPACK_IMPORTED_MODULE_4__config_app_config__["b" /* AppConfig */].routes.heroes:
                        _this.title.setTitle('Heroes list');
                        _this.meta.updateTag({
                            name: 'description',
                            content: 'List of super-heroes'
                        });
                        break;
                }
            }
        });
        this.checkBrowserFeatures();
    }
    AppComponent.prototype.checkBrowserFeatures = function () {
        var _this = this;
        var supported = true;
        for (var feature in Modernizr) {
            if (Modernizr.hasOwnProperty(feature) &&
                typeof Modernizr[feature] === 'boolean' && Modernizr[feature] === false) {
                supported = false;
                break;
            }
        }
        if (!supported) {
            this.translateService.get(['updateBrowser']).subscribe(function (texts) {
                _this.snackBar.open(texts['updateBrowser'], 'OK');
            });
        }
        return supported;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_shared_module__ = __webpack_require__("../../../../../src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_translate_factory__ = __webpack_require__("../../../../../src/app/app.translate.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__heroes_hero_top_hero_top_component__ = __webpack_require__("../../../../../src/app/heroes/hero-top/hero-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_progress_bar_service__ = __webpack_require__("../../../../../src/app/core/progress-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_interceptors_progress_interceptor__ = __webpack_require__("../../../../../src/app/shared/interceptors/progress.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_interceptors_timing_interceptor__ = __webpack_require__("../../../../../src/app/shared/interceptors/timing.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_11__app_translate_factory__["a" /* HttpLoaderFactory */],
                        deps: [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_5__shared_modules_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__heroes_hero_top_hero_top_component__["a" /* HeroTopComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__config_app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_3__config_app_config__["b" /* AppConfig */] },
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_14__shared_interceptors_progress_interceptor__["a" /* ProgressInterceptor */], multi: true, deps: [__WEBPACK_IMPORTED_MODULE_13__core_progress_bar_service__["a" /* ProgressBarService */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_15__shared_interceptors_timing_interceptor__["a" /* TimingInterceptor */], multi: true }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.translate.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HttpLoaderFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");

function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}


/***/ }),

/***/ "../../../../../src/app/config/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('app.config');
var AppConfig = {
    routes: {
        heroes: 'heroes',
        error404: '404'
    },
    endpoints: {
        heroes: 'https://nodejs-example-app.herokuapp.com/heroes'
    },
    votesLimit: 3,
    topHeroesLimit: 4,
    snackBarDuration: 3000,
    repositoryURL: 'https://github.com/Ismaestro/angular5-example-app'
};


/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_import_guard__ = __webpack_require__("../../../../../src/app/core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__ = __webpack_require__("../../../../../src/app/core/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/core/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_shared_module__ = __webpack_require__("../../../../../src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/core/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__error404_error_404_component__ = __webpack_require__("../../../../../src/app/core/error404/error-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_bar_service__ = __webpack_require__("../../../../../src/app/core/progress-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var CoreModule = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_3__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_bar_search_bar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__error404_error_404_component__["a" /* Error404Component */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_11__progress_bar_service__["a" /* ProgressBarService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/error404/error-404.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"section-title\">{{'error404' | translate}}</h1>\n<p class=\"explanation\">{{'mayTheForce' | translate}}</p>\n<img src=\"assets/images/404.gif\">"

/***/ }),

/***/ "../../../../../src/app/core/error404/error-404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  margin: 0 auto;\n  display: block; }\n\n.explanation {\n  margin: 1em 0;\n  text-align: center;\n  font-size: 1.2em;\n  font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/error404/error-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
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

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-404',
            template: __webpack_require__("../../../../../src/app/core/error404/error-404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/error404/error-404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "../../../../../src/app/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div fxFlex fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\"\n         class.xs=\"footer-xs\">\n        <div fxFlex=\"80\">\n            <span>{{ 'angularExampleApp' | translate }} 2017</span>\n        </div>\n        <div fxFlex class=\"text-right\" class.xs=\"footer-xs\">\n            <a href=\"https://angular.io/\" target=\"_blank\"><img src=\"assets/images/angular.svg\"></a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/core/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  padding: 8px 16px;\n  color: white;\n  background: #3f51b5;\n  margin-top: 2em;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 100%; }\n  footer img {\n    width: 25%; }\n\n.footer-xs {\n  text-align: center;\n  padding-top: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.log = function (msg) {
        console.log(msg);
    };
    LoggerService.error = function (msg, obj) {
        if (obj === void 0) { obj = {}; }
        console.error(msg, obj);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "../../../../../src/app/core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav>\n        <div fxFlex fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n            <div fxFlex=\"50\">\n                <a mat-raised-button *ngFor=\"let item of menuItems\" routerLink=\"{{item.link}}\">\n                    {{item.name | uppercase}}\n                </a>\n            </div>\n            <div fxFlex class=\"text-right\">\n                <app-search-bar></app-search-bar>\n                <button mat-icon-button [matMenuTriggerFor]=\"matmenu\">\n                    <mat-icon>public</mat-icon>\n                </button>\n                <mat-menu #matmenu=\"matMenu\">\n                    <button mat-menu-item (click)=\"changeLanguage('en')\">\n                        <mat-icon>flag</mat-icon>\n                        <span>\n                English\n            </span>\n                    </button>\n                    <button mat-menu-item (click)=\"changeLanguage('es')\">\n                        <mat-icon>flag</mat-icon>\n                        <span>\n                Español\n            </span>\n                    </button>\n                    <button mat-menu-item (click)=\"changeLanguage('pt-br')\">\n                        <mat-icon>flag</mat-icon>\n                        <span>\n                Português\n            </span>\n                    </button>\n                </mat-menu>\n                <a class=\"image-icon\" href=\"{{appConfig.repositoryURL}}\" target=\"_blank\">\n                    <img src=\"assets/images/github-circle-white-transparent.svg\">\n                </a>\n            </div>\n        </div>\n    </nav>\n    <section class=\"progress-bar\">\n        <mat-progress-bar\n            [color]=\"'primary'\"\n            [mode]=\"progressBarMode\">\n        </mat-progress-bar>\n    </section>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host(app-nav) {\n  padding-top: 0;\n  padding-bottom: 5em;\n  display: -ms-grid;\n  display: grid; }\n  :host(app-nav) header {\n    position: fixed;\n    z-index: 999;\n    width: 100%; }\n    :host(app-nav) header nav {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 8px 16px;\n      color: white;\n      height: 4em;\n      background: #3f51b5; }\n      :host(app-nav) header nav .mat-raised-button {\n        color: #3f51b5;\n        margin-right: 1em; }\n      :host(app-nav) header nav .progress-bar {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 5px; }\n      :host(app-nav) header nav .image-icon {\n        width: 20px;\n        height: 20px; }\n      :host(app-nav) header nav img {\n        vertical-align: middle; }\n\n@media (max-width: 680px) {\n  :host(app-nav) {\n    padding-top: 0;\n    padding-bottom: 1em; }\n    :host(app-nav) header {\n      position: relative; }\n      :host(app-nav) header nav {\n        height: 7em;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 1em 2em 0; } }\n\n@media (max-width: 425px) {\n  :host(app-nav) {\n    padding-bottom: 0; }\n    :host(app-nav) header nav app-search-bar {\n      width: 75%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_bar_service__ = __webpack_require__("../../../../../src/app/core/progress-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NavComponent = (function () {
    function NavComponent(appConfig, progressBarService, translateService) {
        var _this = this;
        this.progressBarService = progressBarService;
        this.appConfig = appConfig;
        this.translateService = translateService;
        this.loadMenus();
        this.progressBarService.updateProgressBar$.subscribe(function (mode) {
            _this.progressBarMode = mode;
        });
    }
    NavComponent.prototype.changeLanguage = function (language) {
        var _this = this;
        this.translateService.use(language).subscribe(function () {
            _this.loadMenus();
        });
    };
    NavComponent.prototype.loadMenus = function () {
        var _this = this;
        this.translateService.get(['home', 'heroesList'], {}).subscribe(function (texts) {
            _this.menuItems = [
                { link: '/', name: texts['home'] },
                { link: '/' + __WEBPACK_IMPORTED_MODULE_2__config_app_config__["b" /* AppConfig */].routes.heroes, name: texts['heroesList'] }
            ];
        });
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/core/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/nav/nav.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__config_app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_3__progress_bar_service__["a" /* ProgressBarService */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/progress-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarService; });
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

var ProgressBarService = (function () {
    function ProgressBarService() {
        this.requestsRunning = 0;
        this.updateProgressBar$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ProgressBarService.prototype.list = function () {
        return this.requestsRunning;
    };
    ProgressBarService.prototype.increase = function () {
        this.requestsRunning++;
        if (this.requestsRunning === 1) {
            this.updateProgressBar$.emit('query');
        }
    };
    ProgressBarService.prototype.decrease = function () {
        if (this.requestsRunning > 0) {
            this.requestsRunning--;
            if (this.requestsRunning === 0) {
                this.updateProgressBar$.emit('none');
            }
        }
    };
    ProgressBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProgressBarService);
    return ProgressBarService;
}());



/***/ }),

/***/ "../../../../../src/app/core/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-input-container>\n    <input matInput placeholder=\"{{ 'findHero' | translate }}!\"\n           [matAutocomplete]=\"heroesAutocomplete\" [formControl]=\"heroFormControl\">\n</mat-input-container>\n\n<mat-autocomplete #heroesAutocomplete=\"matAutocomplete\">\n    <mat-option *ngFor=\"let hero of filteredHeroes\"\n                (onSelectionChange)=\"searchHero(hero)\"\n                [value]=\"hero.name\">\n        {{hero.name}}\n    </mat-option>\n</mat-autocomplete>\n"

/***/ }),

/***/ "../../../../../src/app/core/search-bar/search-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host(app-search-bar) /deep/ .mat-input-placeholder {\n  font-weight: 100;\n  color: white; }\n\n:host(app-search-bar) /deep/ .mat-input-underline {\n  background-color: white;\n  bottom: 1.5em; }\n\n:host(app-search-bar) /deep/ .mat-input-infix {\n  border-top: 1.2em solid transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_shared_hero_service__ = __webpack_require__("../../../../../src/app/heroes/shared/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchBarComponent = (function () {
    function SearchBarComponent(heroService, router) {
        var _this = this;
        this.heroService = heroService;
        this.router = router;
        this.defaultHeroes = [];
        this.heroFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.heroService.getAllHeroes().subscribe(function (heroes) {
            _this.defaultHeroes = heroes.filter(function (hero) { return hero['default']; });
            _this.heroFormControl.valueChanges
                .startWith(null)
                .map(function (value) { return _this.filterHeroes(value); })
                .subscribe(function (heroesFiltered) {
                _this.filteredHeroes = heroesFiltered;
            });
        });
    }
    SearchBarComponent.prototype.filterHeroes = function (val) {
        return val ? this.defaultHeroes.filter(function (hero) { return hero.name.toLowerCase().indexOf(val.toLowerCase()) === 0 && hero['default']; })
            : this.defaultHeroes;
    };
    SearchBarComponent.prototype.searchHero = function (hero) {
        __WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */].log('Moved to hero with id: ' + hero.id);
        return this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__config_app_config__["b" /* AppConfig */].routes.heroes + '/' + hero.id]);
    };
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-bar',
            template: __webpack_require__("../../../../../src/app/core/search-bar/search-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/search-bar/search-bar.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__heroes_shared_hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/hero-top/hero-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n    <div fxFlex=\"10\" fxFlex.gt-sm=\"20\"></div>\n    <div fxFlex=\"90\" fxFlex.gt-sm=\"80\">\n        <h1 class=\"section-title\">{{'topHeroes' | translate}}</h1>\n        <mat-progress-spinner *ngIf=\"!heroes\"\n                              class=\"progress-spinner\"\n                              [color]=\"'primary'\"\n                              [mode]=\"'indeterminate'\">\n        </mat-progress-spinner>\n        <div id=\"heroes-list\" *ngIf=\"heroes\">\n            <ng-container *ngFor=\"let hero of heroes\">\n                <mat-card class=\"hero-card\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"hero-header-image\"\n                             [ngStyle]=\"{'background-image': 'url(assets/images/heroes/' + hero.id + '-thumbnail.jpg)'}\"></div>\n                        <mat-card-title>{{hero.name}}</mat-card-title>\n                        <mat-card-subtitle>{{hero.alterEgo}}</mat-card-subtitle>\n                        <div class=\"flex-spacer\"></div>\n                        <div class=\"hero-actions\">\n                            {{hero.likes}}\n                            <mat-icon matTooltip=\"{{(canVote ? 'canVote' : 'cannotVote') | translate}}\"\n                                      [matTooltipPosition]=\"'above'\"\n                                      class=\"like-icon\" (click)=\"like(hero)\">favorite\n                            </mat-icon>\n                        </div>\n                    </mat-card-header>\n                    <img mat-card-image src=\"assets/images/heroes/{{hero.id}}.jpg\">\n                </mat-card>\n            </ng-container>\n        </div>\n    </div>\n    <div fxFlex=\"10\" fxFlex.gt-sm=\"20\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/heroes/hero-top/hero-top.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#heroes-list {\n  margin: 2em; }\n\n.hero-card {\n  margin: 2em auto; }\n\n.progress-spinner {\n  margin: 0 auto; }\n\n@media (max-width: 680px) {\n  .hero-card {\n    width: 80%;\n    margin: 0 auto; }\n  .mat-card {\n    margin-bottom: 2em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/hero-top/hero-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_hero_service__ = __webpack_require__("../../../../../src/app/heroes/shared/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroTopComponent = (function () {
    function HeroTopComponent(heroService) {
        var _this = this;
        this.heroService = heroService;
        this.heroes = null;
        this.canVote = false;
        this.canVote = this.heroService.checkIfUserCanVote();
        this.heroService.getAllHeroes().subscribe(function (heroes) {
            _this.heroes = heroes.sort(function (a, b) {
                return b.likes - a.likes;
            }).slice(0, __WEBPACK_IMPORTED_MODULE_2__config_app_config__["b" /* AppConfig */].topHeroesLimit);
        });
    }
    HeroTopComponent.prototype.like = function (hero) {
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
    HeroTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-top',
            template: __webpack_require__("../../../../../src/app/heroes/hero-top/hero-top.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroes/hero-top/hero-top.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_hero_service__["a" /* HeroService */]])
    ], HeroTopComponent);
    return HeroTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/shared/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeroService = (function () {
    function HeroService(http, translateService, snackBar) {
        var _this = this;
        this.http = http;
        this.translateService = translateService;
        this.snackBar = snackBar;
        this.heroesUrl = __WEBPACK_IMPORTED_MODULE_2__config_app_config__["b" /* AppConfig */].endpoints.heroes;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.translateService.get(['heroCreated', 'saved', 'heroLikeMaximum', 'heroRemoved'], {
            'value': __WEBPACK_IMPORTED_MODULE_2__config_app_config__["b" /* AppConfig */].votesLimit
        }).subscribe(function (texts) {
            _this.translations = texts;
        });
    }
    HeroService.prototype.handleError = function (error) {
        if (error instanceof Response) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()['error'] || 'backend server error');
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error || 'backend server error');
    };
    HeroService.prototype.getAllHeroes = function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .map(function (response) {
            return response;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    HeroService.prototype.getHeroById = function (heroId) {
        var _this = this;
        return this.http.get(this.heroesUrl + '/' + heroId)
            .map(function (response) {
            return response;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    HeroService.prototype.createHero = function (hero) {
        var _this = this;
        return this.http
            .post(this.heroesUrl, JSON.stringify({
            name: hero.name,
            alterEgo: hero.alterEgo
        }), { headers: this.headers })
            .map(function (response) {
            _this.showSnackBar('heroCreated');
            return response;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    HeroService.prototype.like = function (hero) {
        var _this = this;
        if (this.checkIfUserCanVote()) {
            var url = this.heroesUrl + "/" + hero.id + "/like";
            return this.http
                .post(url, {}, { headers: this.headers })
                .map(function (response) {
                localStorage.setItem('votes', '' + (Number(localStorage.getItem('votes')) + 1));
                hero.likes += 1;
                _this.showSnackBar('saved');
                return response;
            })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            this.showSnackBar('heroLikeMaximum');
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw('maximum votes');
        }
    };
    HeroService.prototype.checkIfUserCanVote = function () {
        return Number(localStorage.getItem('votes')) < __WEBPACK_IMPORTED_MODULE_2__config_app_config__["b" /* AppConfig */].votesLimit;
    };
    HeroService.prototype.deleteHeroById = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .map(function (response) {
            _this.showSnackBar('heroRemoved');
            return response;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    HeroService.prototype.showSnackBar = function (name) {
        var config = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatSnackBarConfig */]();
        config.duration = __WEBPACK_IMPORTED_MODULE_2__config_app_config__["b" /* AppConfig */].snackBarDuration;
        this.snackBar.open(this.translations[name], 'OK', config);
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatSnackBar */]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/interceptors/progress.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");

var ProgressInterceptor = (function () {
    function ProgressInterceptor(progressBarService) {
        this.progressBarService = progressBarService;
    }
    ProgressInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.progressBarService.increase();
        return next
            .handle(req)
            .do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]) {
                _this.progressBarService.decrease();
            }
        });
    };
    return ProgressInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/interceptors/timing.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");


var TimingInterceptor = (function () {
    function TimingInterceptor() {
    }
    TimingInterceptor.prototype.intercept = function (req, next) {
        var started = Date.now();
        return next
            .handle(req)
            .do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]) {
                var elapsed = Date.now() - started;
                __WEBPACK_IMPORTED_MODULE_1__core_logger_service__["a" /* LoggerService */].log("Request for " + req.urlWithParams + " took " + elapsed + " ms.");
            }
        });
    };
    return TimingInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["m" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["k" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["p" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MatDialogModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["m" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["k" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["p" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MatDialogModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_shared_hero_service__ = __webpack_require__("../../../../../src/app/heroes/shared/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__heroes_shared_hero_service__["a" /* HeroService */]
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map