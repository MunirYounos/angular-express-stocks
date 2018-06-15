webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".footer{\n    padding-top: 12rem;\n    padding-bottom: 5rem;\n    color: snow;\n   }\n   .top{\n       margin-top: 4rem;\n       padding-bottom: 6rem;\n   }\n   .flash-messages{\n       margin-top: 1rem;\n   }\n   .alink{\n       color: indianred;\n       font-weight: 100;\n       -webkit-transition: .5s ease-in-out all;\n       transition: .5s ease-in-out all;\n       text-decoration: none;\n       text-underline-position: above;\n   }\n   .alink:hover{\n    color: gold;\n    font-weight: 500;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<div class=\"container\">\n      <flash-messages></flash-messages>\n</div>\n<router-outlet></router-outlet>\n\n<div class=\" top container-fluid bg-dark bg-primary\">\n    <div class=\" container bg-dark\">\n      <div class=\"footer col-md-12 text-center\">\n        <small>All Rights reserced to School Project 2018, Business Academy Aarhus by: <a class=\"alink\" href=\"http://multimunir.com\">Munir Younosi </a></small>\n      </div>\n    </div>\n   </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'iExamProject';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_stocks_stocks_component__ = __webpack_require__("./src/app/components/stocks/stocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__watchdog_auth_watch__ = __webpack_require__("./src/app/watchdog/auth.watch.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { StocksOrderDate } from './components/stocks/stocksOrderDate.pipe';
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'stocks', component: __WEBPACK_IMPORTED_MODULE_10__components_stocks_stocks_component__["a" /* StocksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__watchdog_auth_watch__["a" /* AuthWatch */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__watchdog_auth_watch__["a" /* AuthWatch */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_stocks_stocks_component__["a" /* StocksComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__watchdog_auth_watch__["a" /* AuthWatch */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bs-component\">\n    <div class=\"jumbotron\">\n     <div class=\"container\">\n      <h2 class=\"display-4\">Wellcome to Stock Exchange Market</h2>\n      <p class=\"lead\">This Application is provided to make it easier for you as business person. So you can buy and sell you shares.</p>\n      <hr class=\"my-4\">\n      <p>Only shareholders can add stocks, add them or sell them. Please Register to do so or login with a valid User account.</p>\n      <div>\n        <a class=\"btn btn-primary btn-md\" [routerLink]=\"['/login']\"role=\"button\">Login</a>\n        <a class=\"btn btn-success btn-md\" [routerLink]=\"['/register']\"role=\"button\">Register</a>\n        <a class=\"btn btn-danger btn-md\" [routerLink]=\"['/stocks']\"role=\"button\">Add Stocks</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n       \n      <h2>All Available Stocks </h2>\n      <table class=\"table table-hover\">\n          <thead>\n                <tr class=\"table-info\">\n                  <th scope=\"col\">Share Holder</th>\n                  <th scope=\"col\">Stock Name</th>\n                  <th scope=\"col\">Shares</th>\n                  <th scope=\"col\">Profit %</th>\n                  <th scope=\"col\">Price + / -</th>\n                  <th scope=\"col\">Date</th>\n                </tr>\n          </thead>\n              <tbody>\n                  <tr class=\"table-success\" *ngFor=\"let stocks of stockMessages\">\n                     <td>{{stocks.username | uppercase}}</td>\n                    <td>{{stocks.stockName | uppercase }}</td>\n                    <td>{{stocks.body}}</td>\n                    <td>{{stocks.profit}}</td>\n                    <td>{{stocks.price}}</td>\n                    <td>{{stocks.date |  date:'dd MM yy HH:mm:ss'}}</td>\n                  </tr>\n                </tbody>\n        </table> \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stock_service__ = __webpack_require__("./src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rxjs_operators__ = __webpack_require__("./src/app/services/rxjs-operators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(stockService) {
        this.stockService = stockService;
        this.isSubmitted = false;
        this.title = 'Stocks Business with Socket IO';
        this.stockMessages = [];
    }
    HomeComponent.prototype.getStocks = function () {
        var _this = this;
        //console.log('Subscribe to service');
        this.stockService.getStocks()
            .subscribe(function (messages) {
            //console.log("Messages:",messages);
            _this.stockMessages = messages;
        }, function (error) { return _this.title = error; });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getStocks();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <h2 class=\"display-4\">Login</h2>\n        <form (submit)=\"onLoginSubmit()\">\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\"  name=\"username\" placeholder=\"Enter Your Username\">\n              <small  class=\"form-text text-muted\">This field is requied.</small>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"  placeholder=\"Password\">\n            </div>\n           \n            <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n        </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['stocks']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
        //console.log(this.username);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bs-component\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n      <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"favicon.ico\">Stock Exchange Market</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n        <ul class=\"navbar-nav mr-auto navbar-left\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav  mr-auto navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\n                <a  class=\"nav-link\" [routerLink]=\"['/stocks']\">Stocks</a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\"   class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n              </li>\n\n            <li *ngIf=\"!authService.loggedIn()\"  class=\"nav-item\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\n                <a  class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n            </li>\n            <li  *ngIf=\"!authService.loggedIn()\"  class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a  class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n            </li>\n            <li  *ngIf=\"authService.loggedIn()\"  class=\"nav-item\"  >\n                <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n            </li>\n          </ul>\n      </div>\n    </div>\n    </nav>\n  </div>\n\n\n \n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are no longer loged in.', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".top{\n    margin-top: 8rem;\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"top\" *ngIf=\"user\">\n        <h2 class=\"display-6\"><strong>You are logged in as: </strong>{{user.username}}</h2>\n          <table class=\"table table-hover\">\n              <thead>\n                <tr class=\"table-info\">\n                  <th scope=\"col\">First Name</th>\n                  <th scope=\"col\">Last Name</th>\n                  <th scope=\"col\">User Name</th>\n                  <th scope=\"col\">Email</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"table-success\">\n                  <th scope=\"row\">{{user.firstname}}</th>\n                  <td>{{user.lastname}}</td>\n                  <td>{{user.username}}</td>\n                  <td>{{user.email}}</td>\n                </tr>\n              </tbody>\n            </table> \n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return true;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".top{\n    margin-top: 8rem;\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n    <h2 class=\"display-4\">Register</h2>\n    <form (submit)=\"onRegisterSubmit()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstname\"  name=\"firstname\" placeholder=\"First Name\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">This field is requied.</small>\n          </div>\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastname\" name=\"lastname\" placeholder=\"Last Name\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\"  name=\"username\" placeholder=\"User Name\">\n                <small id=\"emailHelp\" class=\"form-text text-muted\">This field is requied.</small>\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\"  name=\"email\" placeholder=\"email@example.com\">\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">This field is requied.</small>\n                </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"  placeholder=\"Password\">\n          </div>\n         \n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </form>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('One or some of the fields might be invalid or empty.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please enter a valid email address in its field.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered as a user.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('There is a problem.', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/stocks/stocks.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/stocks/stocks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2 class=\" top display-4\">{{title}}</h2>\n\n        <hr>\n        \n        <h2 class=\"display-6\">Add new stocks</h2>\n        <form (ngSubmit)=\"submitStock()\">\n\n          <div class=\"form-group\">\n            <input type=\"text\"  class=\"form-control\" id=\"stockName\"\n            required\n            [(ngModel)]=\"model.stockName\" name=\"stockName\" placeholder=\"Stock name EX Gold\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"body\"\n                   required\n                   [(ngModel)]=\"model.body\" name=\"body\" placeholder=\"Shares add numbers\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"body\"\n                   required\n                   [(ngModel)]=\"model.profit\" name=\"profit\" placeholder=\"Profit in %\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"body\" required\n                   [(ngModel)]=\"model.price\" name=\"price\" placeholder=\"Price\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">Select your Username</label>\n          <select class=\"custom-select\" [(ngModel)]=\"model.username\" name=\"{{user.username}}\" value=\"{{user.username}}\" id=\"exampleSelect1\">\n              <option disabled selected>Select your Name</option>\n                <option selected=\"selected\" value=\"{{user.username}}\">{{user.username}}</option>\n          </select>\n            </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n        <hr>\n        <h2>All Stocks</h2>\n        <table class=\"table table-hover\">\n            <thead>\n                  <tr class=\"table-info\">\n                    <th scope=\"col\">Share Holder</th>\n                    <th scope=\"col\">Stock Name</th>\n                    <th scope=\"col\">shares</th>\n                    <th scope=\"col\">Profit %</th>\n                    <th scope=\"col\">Price + / -</th>\n                    <th scope=\"col\">Date</th>\n                  </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-success\" *ngFor=\"let stocks of stockMessages\">\n                  <td>{{stocks.username | uppercase}}</td>\n                  <td>{{stocks.stockName | uppercase }}</td>\n                <td>{{stocks.body}}</td>\n                <td>{{stocks.profit}}</td>\n                <td>{{stocks.price}}</td>\n                <td>{{stocks.date |  date:'dd MM yy HH:mm:ss'}}</td>\n              </tr>\n            </tbody>\n        </table> \n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/stocks/stocks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stocks__ = __webpack_require__("./src/app/services/stocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stock_service__ = __webpack_require__("./src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_rxjs_operators__ = __webpack_require__("./src/app/services/rxjs-operators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StocksComponent = /** @class */ (function () {
    function StocksComponent(stockService, authService, router) {
        this.stockService = stockService;
        this.authService = authService;
        this.router = router;
        this.isSubmitted = false;
        this.title = 'Stocks Business with Socket IO';
        this.model = new __WEBPACK_IMPORTED_MODULE_1__services_stocks__["a" /* Stock */]('', '', '', '', '', '');
        this.stockMessages = [];
    }
    StocksComponent.prototype.submitStock = function () {
        var _this = this;
        this.stockService.addStocks(this.model)
            .subscribe(function (stocksMsg) {
            _this.model = stocksMsg;
            //this.getStocks();
        }, function (error) { return _this.title = error; });
    };
    StocksComponent.prototype.getStocks = function () {
        var _this = this;
        //console.log('Subscribe to service');
        this.stockService.getStocks()
            .subscribe(function (messages) {
            //console.log("Messages:",messages);
            _this.stockMessages = messages;
        }, function (error) { return _this.title = error; });
    };
    //date
    StocksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getStocks();
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return true;
        });
    };
    StocksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stocks',
            template: __webpack_require__("./src/app/components/stocks/stocks.component.html"),
            styles: [__webpack_require__("./src/app/components/stocks/stocks.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], StocksComponent);
    return StocksComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //login authentication..
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get profile
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.accessToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    //Token 
    AuthService.prototype.accessToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    //login
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    // logout
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/rxjs-operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// Statics

// Operators








/***/ }),

/***/ "./src/app/services/stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockService = /** @class */ (function () {
    function StockService(http) {
        this.http = http;
        this.getStockUrl = 'users/stocks'; // URL to web API
        this.postStockUrl = 'users/stocks'; // URL to web API
        this.url = window.location.origin;
    }
    /*
     * Get blog messages from server
     */
    StockService.prototype.getStocks = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(_this.url);
            _this.socket.on('refresh', function (data) {
                console.log('refresh' + data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    /*
     * Send blog message to server
     */
    StockService.prototype.addStocks = function (stocks) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.postStockUrl, stocks, options)
            .map(this.extractData);
        // .catch(this.handleError);
    };
    /*
     * Data handlers
     */
    StockService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    StockService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.log(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    StockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], StockService);
    return StockService;
}());



/***/ }),

/***/ "./src/app/services/stocks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stock; });
var Stock = /** @class */ (function () {
    function Stock(username, stockName, profit, price, body, date) {
        this.username = username;
        this.stockName = stockName;
        this.profit = profit;
        this.price = price;
        this.body = body;
        this.date = date;
        this.dateoff = new Date(date);
    }
    return Stock;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    //validations
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstname == undefined || user.lastname == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    //validate email
    ValidateService.prototype.validateEmail = function (email) {
        var RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return RegEx.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/watchdog/auth.watch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthWatch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthWatch = /** @class */ (function () {
    function AuthWatch(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthWatch.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthWatch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthWatch);
    return AuthWatch;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map