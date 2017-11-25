webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\nmat-sidenav {\n  width: 320px;\n}\n\n.content {\n  padding: 12px;\n}\n\n/deep/ mat-icon.avatar {\n  overflow: hidden;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  margin: 12px;\n}\n\n.fab-bottom-right {\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n}\n\n/deep/ .mat-list-item-content {\n  height: auto !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex [class.dark-theme]=\"isDarkTheme\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Angular Material</span>\n\n      <!-- Filler that pushes the menu button to the end of the toolbar -->\n      <span fxFlex></span>\n\n      <button mat-icon-button [matMenuTriggerFor]=\"themeMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-sidenav-container fxFlex>\n    <mat-sidenav mode=\"side\" opened>\n\n      <mat-tab-group>\n        <mat-tab label=\"Users\">\n          <mat-nav-list>\n            <mat-list-item *ngFor=\"let user of users\" (click)=\"selectedUser = user\">\n              <mat-icon matListAvatar svgIcon=\"avatars:{{user.avatar}}\" class=\"avatar\"></mat-icon>\n              <span>{{user.name}}</span>\n            </mat-list-item>\n          </mat-nav-list>\n        </mat-tab>\n        <mat-tab label=\"Settings\">\n          <span>Settings</span>\n        </mat-tab>\n      </mat-tab-group>\n\n    </mat-sidenav>\n    <div class=\"content\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutGap=\"16px\">\n\n      <mat-card fxFlex=\"80\">\n        <mat-icon svgIcon=\"avatars:{{selectedUser.avatar}}\" class=\"avatar\"></mat-icon>\n        <h2>{{selectedUser.name}}</h2>\n        <p>{{selectedUser.details}}</p>\n      </mat-card>\n\n      <mat-card fxFlex fxLayout=\"column\" fxLayoutGap=\"14px\">\n        <mat-slide-toggle [(ngModel)]=\"selectedUser.isAdmin\">Is Admin?</mat-slide-toggle>\n        <mat-slide-toggle [(ngModel)]=\"selectedUser.isCool\">Is Cool?</mat-slide-toggle>\n      </mat-card>\n\n    </div>\n  </mat-sidenav-container>\n\n  <mat-menu #themeMenu x-position=\"before\">\n    <button mat-menu-item (click)=\"isDarkTheme = !isDarkTheme\">Toggle Theme</button>\n  </mat-menu>\n\n  <button mat-fab (click)=\"openAdminDialog()\" class=\"fab-bottom-right\">\n    <mat-icon>add</mat-icon>\n  </button>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(iconRegistry, sanitizer, dialog) {
        this.dialog = dialog;
        this.users = [
            {
                name: 'Lia Lugo',
                avatar: 'svg-11',
                details: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage ' +
                    'cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta ' +
                    'who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue ' +
                    'castello caerphilly chalk and cheese. Lancashire.',
                isAdmin: true,
                isCool: false
            },
            {
                name: 'George Duke',
                avatar: 'svg-12',
                details: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata ' +
                    'corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor ' +
                    'dictum mauris.',
                isAdmin: false,
                isCool: true
            },
            {
                name: 'Gener Delosreyes',
                avatar: 'svg-13',
                details: 'Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney\'s ' +
                    'blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats ' +
                    'chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. ' +
                    'Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter ' +
                    'Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack ' +
                    'literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.',
                isAdmin: true,
                isCool: true
            },
            {
                name: 'Lawrence Ray',
                avatar: 'svg-14',
                details: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill ' +
                    'a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. ' +
                    'Always hungry pelt around the house and up and down stairs chasing phantoms.',
                isAdmin: false,
                isCool: false
            },
            {
                name: 'Ernesto Urbina',
                avatar: 'svg-10',
                details: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku ' +
                    'wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
                isAdmin: false,
                isCool: true
            },
            {
                name: 'Gani Ferrer',
                avatar: 'svg-16',
                details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
                    'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
                    'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
                    'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
                    'malesuada.',
                isAdmin: true,
                isCool: true
            }
        ];
        this.selectedUser = this.users[0];
        this.isDarkTheme = false;
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        var avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
        iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
    }
    AppComponent.prototype.openAdminDialog = function () {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */]).afterClosed()
            .filter(function (result) { return !!result; })
            .subscribe(function (user) {
            _this.users.push(user);
            _this.selectedUser = user;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__["a" /* DialogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // Material
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatToolbarModule */],
                // Flex-layout
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__["a" /* DialogComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add User Dialog</h3>\n<form #form=\"ngForm\" (ngSubmit)=\"dialogRef.close(form.value)\" ngNativeValidate>\n  <div fxLayout=\"column\" fxLayoutGap=\"8px\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <mat-icon svgIcon=\"avatars:{{selectedAvatar}}\" class=\"avatar\"></mat-icon>\n      <mat-form-field>\n        <mat-select name=\"avatar\" fxFlex placeholder=\"Avatar\" [(ngModel)]=\"selectedAvatar\">\n          <mat-option *ngFor=\"let avatar of avatars; let i = index;\" [value]=\"avatar\">Avatar - {{i + 1}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <mat-form-field>\n      <input matInput ngModel name=\"name\" placeholder=\"Full name\" required>\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput ngModel name=\"details\" placeholder=\"Details\" rows=\"15\" cols=\"60\" required></textarea>\n    </mat-form-field>\n\n    <div fxLayout=\"row\" fxLayoutGap=\"24px\">\n      <mat-checkbox ngModel name=\"isAdmin\">Is Admin?</mat-checkbox>\n      <mat-checkbox ngModel name=\"isCool\">Is Cool?</mat-checkbox>\n    </div>\n  </div>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button type=\"button\" (click)=\"dialogRef.close()\">Cancel</button>\n    <button mat-button color=\"accent\">Save User</button>\n  </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.avatars = new Array(16).fill(0).map(function (_, i) { return "svg-" + (i + 1); });
        this.selectedAvatar = this.avatars[0];
    }
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map