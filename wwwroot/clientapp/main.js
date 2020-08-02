(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_shop_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shop/navbar/navbar.component */ "./ClientApp/app/components/shop/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_shop_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: "app.component.html",
                styles: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _components_shop_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shop/product-list/product-list.component */ "./ClientApp/app/components/shop/product-list/product-list.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data.service */ "./ClientApp/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_shop_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shop/cart/cart.component */ "./ClientApp/app/components/shop/cart/cart.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shop/shop.component */ "./ClientApp/app/components/shop/shop.component.ts");
/* harmony import */ var _components_shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shop/checkout/checkout.component */ "./ClientApp/app/components/shop/checkout/checkout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./ClientApp/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_shop_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shop/about/about.component */ "./ClientApp/app/components/shop/about/about.component.ts");
/* harmony import */ var _components_shop_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shop/navbar/navbar.component */ "./ClientApp/app/components/shop/navbar/navbar.component.ts");
















const routes = [
    { path: "", component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"] },
    { path: "checkout", component: _components_shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: "about", component: _components_shop_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes, {
                useHash: true,
                enableTracing: false
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_shop_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"],
        _components_shop_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
        _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"],
        _components_shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _components_shop_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
        _components_shop_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_shop_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"],
                    _components_shop_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
                    _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"],
                    _components_shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _components_shop_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                    _components_shop_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes, {
                        useHash: true,
                        enableTracing: false
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
                ],
                providers: [
                    _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./ClientApp/app/components/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/components/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/services/data.service */ "./ClientApp/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    onLogin() {
        this.errorMessage = "";
        this.data.login(this.creds)
            .subscribe(success => {
            if (success) {
                if (this.data.order.items.length == 0) {
                    this.router.navigate([""]);
                }
                else {
                    this.router.navigate(["checkout"]);
                }
            }
        }, err => this.errorMessage = "Failed to login");
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 6, consts: [[1, "row"], [1, "col-md-4", "offset-md-4"], ["class", "alert alert-warning", 4, "ngIf"], ["novalidate", "", 3, "submit"], ["theForm", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", "value", "Login", 1, "btn", "btn-success", 3, "disabled"], ["routerLink", "/", 1, "btn", "btn-default"], [1, "alert", "alert-warning"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_3_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.creds.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.creds.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.creds.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.touched && _r2.invalid && _r2.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.creds.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.touched && _r4.invalid && _r4.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.css"
                ]
            }]
    }], function () { return [{ type: ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./ClientApp/app/components/shop/about/about.component.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/components/shop/about/about.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 23, vars: 0, consts: [[1, "col-md-6", "offset-md-3"], [1, "heading-secondary"], [1, "section-about"], [1, "row"], [1, "col-md-6"], [1, "composition"], ["src", "/img/SK-A-4050.jpg", "alt", "/img/SK-A-4050.jpg", 1, "composition__photo", "composition__photo--p1"], ["src", "/img/SK-A-3307.jpg", "alt", "", 1, "composition__photo", "composition__photo--p2"], ["src", "/img/SK-C-5.jpg", "alt", "", 1, "composition__photo", "composition__photo--p3"], ["src", "/img/SK-C-6.jpg", "alt", "", 1, "composition__photo", "composition__photo--p4"], ["src", "/img/SK-A-3137.jpg", "alt", "", 1, "composition__photo", "composition__photo--p5"], ["src", "/img/SK-C-216.jpg", "alt", "", 1, "composition__photo", "composition__photo--p6"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Who we are and what we offer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enjoy the classic in your everyday life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis soluta sequi iste nostrum ea, inventore sed eos itaque eaque repellat enim nobis quibusdam aspernatur in dicta maiores facere laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis soluta sequi iste nostrum ea, inventore sed eos itaque eaque repellat enim nobis quibusdam aspernatur in dicta maiores facere laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis soluta sequi iste nostrum ea, inventore sed eos itaque eaque repellat enim nobis quibusdam aspernatur in dicta maiores facere laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis soluta sequi iste nostrum ea, inventore sed eos itaque eaque repellat enim nobis quibusdam aspernatur in dicta maiores facere laboriosam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Make your life more beautiful and attractive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis soluta sequi iste nostrum ea, inventore sed eos itaque eaque repellat enim nobis quibusdam aspernatur in dicta maiores facere laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis soluta sequi iste nostrum ea, inventore sed eos itaque eaque repellat enim nobis quibusdam aspernatur in dicta maiores facere laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis soluta sequi iste nostrum ea, inventore sed eos itaque eaque repellat enim nobis quibusdam aspernatur in dicta maiores facere laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis soluta sequi iste nostrum ea, inventore sed eos itaque eaque repellat enim nobis quibusdam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".section-about[_ngcontent-%COMP%] {\n    padding: 5rem 0;\n}\n\n.heading-secondary[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    display: inline-block;\n    background-image: linear-gradient(to right, #a8a8a8, #7b7685);\n    -webkit-background-clip: text;\n            background-clip: text;\n    color: transparent;\n    letter-spacing: 2px;\n    transition: all .2s;\n    margin-bottom: 80px;\n}\n\n.heading-secondary[_ngcontent-%COMP%]:hover {\n    text-shadow: 5px 10px 20px rgba(0, 0, 0, 0, .5);\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 700;\n    text-transform: uppercase;\n}\n\np[_ngcontent-%COMP%]:not(:last-child) {\n    font-size: 1rem;\n    margin-bottom: 2rem;\n}\n\n.composition[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.composition__photo[_ngcontent-%COMP%] {\n    width: 35%;\n    box-shadow: 0 1rem 3rem rgb(0, 0, 0, .4);\n    position: absolute;\n    z-index: 10;\n    transition: all 1s;\n}\n\n.composition__photo--p1[_ngcontent-%COMP%] {\n    left: 0;\n    top: -2rem;\n}\n\n.composition__photo--p2[_ngcontent-%COMP%] {\n    right: 2rem;\n    top: 2rem;\n}\n\n.composition__photo--p3[_ngcontent-%COMP%] {\n    left: 20%;\n    top: 15rem;\n}\n\n.composition__photo--p4[_ngcontent-%COMP%] {\n    left: 56%;\n    top: 25rem;\n}\n\n.composition__photo--p5[_ngcontent-%COMP%] {\n    left: 30%;\n    top: -10rem;\n}\n\n.composition__photo--p6[_ngcontent-%COMP%] {\n    left: 0%;\n    top: 24rem;\n}\n\n.composition__photo[_ngcontent-%COMP%]:hover {\n    transform: scale(1.5);\n    box-shadow: 0 1.7rem 3rem rgb(0, 0, 0, .4);\n    z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaG9wL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLDZEQUE2RDtJQUM3RCw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLFdBQVc7QUFDZiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hvcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tYWJvdXQge1xuICAgIHBhZGRpbmc6IDVyZW0gMDtcbn1cblxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2E4YThhOCwgIzdiNzY4NSk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmhlYWRpbmctc2Vjb25kYXJ5OmhvdmVyIHtcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAsIC41KTtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb21wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYigwLCAwLCAwLCAuNCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLmNvbXBvc2l0aW9uX19waG90by0tcDEge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAtMnJlbTtcbn1cblxuLmNvbXBvc2l0aW9uX19waG90by0tcDIge1xuICAgIHJpZ2h0OiAycmVtO1xuICAgIHRvcDogMnJlbTtcbn1cblxuLmNvbXBvc2l0aW9uX19waG90by0tcDMge1xuICAgIGxlZnQ6IDIwJTtcbiAgICB0b3A6IDE1cmVtO1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvLS1wNCB7XG4gICAgbGVmdDogNTYlO1xuICAgIHRvcDogMjVyZW07XG59XG5cbi5jb21wb3NpdGlvbl9fcGhvdG8tLXA1IHtcbiAgICBsZWZ0OiAzMCU7XG4gICAgdG9wOiAtMTByZW07XG59XG5cbi5jb21wb3NpdGlvbl9fcGhvdG8tLXA2IHtcbiAgICBsZWZ0OiAwJTtcbiAgICB0b3A6IDI0cmVtO1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgYm94LXNoYWRvdzogMCAxLjdyZW0gM3JlbSByZ2IoMCwgMCwgMCwgLjQpO1xuICAgIHotaW5kZXg6IDIwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: "./about.component.html",
                styleUrls: ["./about.component.css"
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./ClientApp/app/components/shop/cart/cart.component.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/components/shop/cart/cart.component.ts ***!
  \**************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/services/data.service */ "./ClientApp/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CartComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r2.productCategory, " - ", item_r2.productTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, item_r2.unitPrice, "EUR", "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 9, item_r2.unitPrice * item_r2.quantity, "EUR", "symbol"), " ");
} }
function CartComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
    }
    onCheckout() {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.router.navigate(["checkout"]);
        }
    }
    ngOnInit() {
    }
    get getData() {
        return this.data;
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 21, vars: 8, consts: [[1, "table", "table-condensed", "table-hover"], [4, "ngFor", "ngForOf"], ["routerLink", "login", "class", "btn", 3, "click", 4, "ngIf"], ["routerLink", "login", 1, "btn", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CartComponent_tr_19_Template, 11, 13, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CartComponent_a_20_Template, 2, 0, "a", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Items: ", ctx.getData.order.items.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subtotal: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 4, ctx.getData.order.subtotal, "EUR", true), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getData.order.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getData.order.items.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n    text-transform: uppercase;\n    text-decoration: none;\n    background-color: e1e4ec;\n    color: #3b3b3d;\n    padding: 10px 30px;\n    border-radius: 100px;\n    display: inline-block;\n    -webkit-animation: moveInUp 2s ease-out .75s;\n            animation: moveInUp 2s ease-out .75s;\n    -webkit-animation-fill-mode: backwards;\n            animation-fill-mode: backwards;\n    transition: all .2s;\n    position: relative;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);\n}\n\n.btn[_ngcontent-%COMP%]:active {\n    transform: translateY(-1px);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n}\n\n.btn[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: inline-block;\n    height: 100%;\n    width: 100%;\n    border-radius: 100px;\n    background-color: #e1e4ec;\n    color: #3b3b3d;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    transition: all .4s;\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n    transform: scaleX(1.4) scaleY(1.6);\n    opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaG9wL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsVUFBVTtBQUNkIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaG9wL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjpsaW5rLFxuLmJ0bjp2aXNpdGVkIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBlMWU0ZWM7XG4gICAgY29sb3I6ICMzYjNiM2Q7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbmltYXRpb246IG1vdmVJblVwIDJzIGVhc2Utb3V0IC43NXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAuMik7XG59XG5cbi5idG46YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbn1cblxuLmJ0bjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlNGVjO1xuICAgIGNvbG9yOiAjM2IzYjNkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xufVxuXG4uYnRuOmhvdmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS40KSBzY2FsZVkoMS42KTtcbiAgICBvcGFjaXR5OiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: "./cart.component.html",
                styleUrls: ["./cart.component.css"
                ]
            }]
    }], function () { return [{ type: ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./ClientApp/app/components/shop/checkout/checkout.component.ts":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/components/shop/checkout/checkout.component.ts ***!
  \**********************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/services/data.service */ "./ClientApp/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CheckoutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function CheckoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figure", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figcaption", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Unit price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Total price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_6_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const o_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteItem(o_r2.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Delete from order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/img/", o_r2.productArtId, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r2.productTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", o_r2.productCategory, " (", o_r2.productSize, ") ", o_r2.productArtist, ": ", o_r2.productTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r2.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](19, 10, o_r2.unitPrice, "EUR", "symbol"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](24, 14, o_r2.unitPrice * o_r2.quantity, "EUR", "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getDescription(o_r2.productId), " ");
} }
class CheckoutComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.items = new Array();
        this.errorMessage = "";
    }
    deleteItem(id) {
        this.data.deleteFromOrder(id);
    }
    onCheckout() {
        this.data.checkout().subscribe(success => {
            if (success) {
                this.router.navigate([""]);
            }
        }, err => this.errorMessage = "Failed to save order");
    }
    getDescription(id) {
        const description = this.data.products.find(p => p.id == id).artDescription;
        return description;
    }
    ngOnInit() {
        this.items = this.data.order.items;
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 33, vars: 12, consts: [[1, "row"], [1, "col-md-9", "offset-md-1"], ["class", "alert alert-warning", 4, "ngIf"], [1, "text-center"], [1, "heading-secondary"], [4, "ngFor", "ngForOf"], [1, "col-md-2", "text-left", "purchase"], [1, "table", "table-condensed"], [1, "text-left"], [1, "text-right"], ["routerLink", "/checkout", 3, "click"], ["routerLink", "/"], [1, "alert", "alert-warning"], [1, "section-confirm"], [1, "order"], [1, "order__shape"], ["alt", "o.productTitle", 3, "src"], [1, "order__caption"], [1, "order__content"], [1, "btn-container"], ["routerLink", "/checkout", 1, "btn-delete", 3, "click"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confirm Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheckoutComponent_div_6_Template, 32, 18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u20AC 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_Template_a_click_28_listener() { return ctx.onCheckout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Complete Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 4, ctx.data.order.subtotal, "EUR", "symbol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 8, ctx.data.order.subtotal, "EUR", "symbol"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".checkout-thumb[_ngcontent-%COMP%] {\n    max-width: 100px;\n}\n\n.section-confirm[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n}\n\n.heading-secondary[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    display: inline-block;\n    background-image: linear-gradient(to right, #a8a8a8, #7b7685);\n    -webkit-background-clip: text;\n            background-clip: text;\n    color: transparent;\n    letter-spacing: 2px;\n    transition: all .2s;\n    margin-bottom: 80px;\n}\n\n.order[_ngcontent-%COMP%] {\n    width: 75%;\n    margin: 0 auto;\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, .1);\n    background: rgba(white, .6);\n    border-radius: 3px;\n    padding: 1rem;\n    padding-left: 3rem;\n    transform: skewX(-12deg);\n}\n\n.order__shape[_ngcontent-%COMP%] {\n    width: 15rem;\n    height: 15rem;\n    float: left;\n    shape-outside: circle(50% at 50% 50%);\n    -webkit-clip-path: circle(50% at 50% 50%);\n            clip-path: circle(50% at 50% 50%);\n    transform: translateX(-2rem) skewX(12deg);\n    position: relative;\n}\n\n.order__content[_ngcontent-%COMP%] {\n    transform: skewX(12deg);\n}\n\n.order__caption[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, 20%);\n    color: whitesmoke;\n    text-transform: uppercase;\n    font-size: 1rem;\n    text-align: center;\n    opacity: 0;\n    transition: all 1s;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n\n.order[_ngcontent-%COMP%]:hover   .order__caption[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 700;\n    text-transform: uppercase;\n}\n\nimg[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    transform: scale(1.4);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: all 1s;\n}\n\n.order[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: scale(1);\n    -webkit-filter: blur(3px) brightness(80%);\n            filter: blur(3px) brightness(80%);\n}\n\na[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    color: #3b3b3d;\n    display: inline-block;\n    text-decoration: none;\n    border-bottom: 1px solid #3b3b3d;\n    padding: 3px;\n    transition: all .2s;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n\na[_ngcontent-%COMP%]:hover {\n    background-color: #3b3b3d;\n    color: #e1e4ec;\n    box-shadow: 0 .1rem 2rem rgba(0, 0, 0, .5);\n    transform: translateY(-2px);\n}\n\na[_ngcontent-%COMP%]:active {\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .5);\n    transform: translateY(0);\n}\n\n.btn-container[_ngcontent-%COMP%] {\n    transform: skewX(12deg);\n}\n\n.table[_ngcontent-%COMP%] {\n    margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaG9wL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLDZEQUE2RDtJQUM3RCw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyx5Q0FBeUM7SUFDekMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLDBDQUEwQztJQUMxQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hvcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrb3V0LXRodW1iIHtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4uc2VjdGlvbi1jb25maXJtIHtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5oZWFkaW5nLXNlY29uZGFyeSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhOGE4YTgsICM3Yjc2ODUpO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5vcmRlciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHdoaXRlLCAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIHRyYW5zZm9ybTogc2tld1goLTEyZGVnKTtcbn1cblxuLm9yZGVyX19zaGFwZSB7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgc2hhcGUtb3V0c2lkZTogY2lyY2xlKDUwJSBhdCA1MCUgNTAlKTtcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgNTAlIDUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKSBza2V3WCgxMmRlZyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3JkZXJfX2NvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogc2tld1goMTJkZWcpO1xufVxuXG4ub3JkZXJfX2NhcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjAlKTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ub3JkZXI6aG92ZXIgLm9yZGVyX19jYXB0aW9uIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbi5vcmRlcjpob3ZlciBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgZmlsdGVyOiBibHVyKDNweCkgYnJpZ2h0bmVzcyg4MCUpO1xufVxuXG5hIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMzYjNiM2Q7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNiM2IzZDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2Q7XG4gICAgY29sb3I6ICNlMWU0ZWM7XG4gICAgYm94LXNoYWRvdzogMCAuMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuYTphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDEyZGVnKTtcbn1cblxuLnRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: "./checkout.component.html",
                styleUrls: ["./checkout.component.css"
                ]
            }]
    }], function () { return [{ type: ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./ClientApp/app/components/shop/navbar/navbar.component.ts":
/*!******************************************************************!*\
  !*** ./ClientApp/app/components/shop/navbar/navbar.component.ts ***!
  \******************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/services/data.service */ "./ClientApp/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NavbarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
    get isLogedIn() {
        return this.data.loginRequired;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 24, vars: 2, consts: [[1, "navbar", "navbar-light", "bg-light", "navbar-expand-md"], [1, "navbar-brand"], [1, "fa", "fa-paint-brush"], ["data-toggle", "collapse", "data-target", "#menu", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "menu", 1, "navbar-collapse", "collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["asp-controller", "App", "asp-action", "Contact", 1, "nav-link"], ["routerLink", "about", 1, "nav-link"], [1, "nav-item", 3, "hidden"], ["href", "/account/logout", 1, "nav-link"], ["routerLink", "login", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Welcome to Dutch Treat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isLogedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLogedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: "./navbar.component.html",
                styles: []
            }]
    }], function () { return [{ type: ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./ClientApp/app/components/shop/product-list/product-list.component.ts":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/components/shop/product-list/product-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/services/data.service */ "./ClientApp/app/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return { "background-image": a0 }; };
function ProductListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_1_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addProduct(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, "linear-gradient( to right bottom,   #636161, #3b3b3b), url(/img/" + product_r1.artId + ".jpg)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1.category, " ", product_r1.size, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](20, 6, product_r1.price, "EUR", "symbol"));
} }
class ProductListComponent {
    constructor(data) {
        this.data = data;
        this.products = [];
        this.products = data.products;
    }
    addProduct(product) {
        this.data.addToOrder(product);
    }
    ngOnInit() {
        this.data.loadProducts().subscribe(success => {
            if (success) {
                this.products = this.data.products;
            }
        }, error => {
            console.log(error);
        });
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["product-list"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "product-info col-md-4", 4, "ngFor", "ngForOf"], [1, "product-info", "col-md-4"], [1, "custom-card"], [1, "custom-card__side", "custom-card__side--front"], [1, "custom-card__picture", 3, "ngStyle"], [1, "custom-card__heading"], [1, "custom-card__heading-span"], [1, "custom-card__details"], [1, "custom-card__side", "custom-card__side--back"], [1, "custom-card__cta"], [1, "custom-card__price-box"], [1, "custom-card__price-only"], [1, "custom-card__price-value"], ["routerLink", "", 1, "btn", 3, "click"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductListComponent_div_1_Template, 23, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".custom-card[_ngcontent-%COMP%] {\n    perspective: 150rem;\n    position: relative;\n    height: 25rem;\n    margin-bottom: 7rem;\n}\n\n.custom-card__side[_ngcontent-%COMP%] {\n    height: 30rem;\n    transition: all 1.5s ease;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    border-radius: 3px;\n    overflow: hidden;\n    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);\n}\n\n.custom-card__side--front[_ngcontent-%COMP%] {\n    background-color: whitesmoke;\n}\n\n.custom-card__side--back[_ngcontent-%COMP%] {\n    background-image: linear-gradient( to right bottom, #a8a8a8, #7b7685);\n    transform: rotateY(180deg);\n}\n\n.custom-card[_ngcontent-%COMP%]:hover   .custom-card__side--front[_ngcontent-%COMP%] {\n    transform: rotateY(-180deg);\n}\n\n.custom-card[_ngcontent-%COMP%]:hover   .custom-card__side--back[_ngcontent-%COMP%] {\n    transform: rotateY(0);\n}\n\n.custom-card__picture[_ngcontent-%COMP%] {\n    height: 14.5rem;\n    background-size: 100% 100%;\n    background-blend-mode: screen;\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n}\n\n.custom-card__heading[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    text-align: right;\n    color: white;\n    position: absolute;\n    top: 10.5rem;\n    right: 0.099rem;\n    width: 75%;\n}\n\n.custom-card__heading-span[_ngcontent-%COMP%] {\n    padding: 0.3rem 0.45rem;\n    background-image: linear-gradient( to right bottom, rgb(168, 168, 168, .65), rgb(123, 118, 133, .65))\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n    width: 80%;\n}\n\nli[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 1rem;\n    padding: 0.25rem;\n    border-bottom: 1px solid;\n}\n\n.custom-card__cta[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 90%;\n    text-align: center;\n}\n\n.custom-card__price-box[_ngcontent-%COMP%] {\n    color: whitesmoke;\n    margin: auto;\n    text-align: center;\n}\n\n.custom-card__price-only[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    text-transform: uppercase;\n}\n\n.custom-card__price-value[_ngcontent-%COMP%] {\n    font-size: 5rem;\n    font-weight: 100;\n}\n\n.btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n    text-transform: uppercase;\n    text-decoration: none;\n    background-color: #3b3b3d;\n    color: #e1e4ec;\n    padding: 15px 40px;\n    border-radius: 100px;\n    display: inline-block;\n    -webkit-animation: moveInUp 2s ease-out .75s;\n            animation: moveInUp 2s ease-out .75s;\n    -webkit-animation-fill-mode: backwards;\n            animation-fill-mode: backwards;\n    transition: all .2s;\n    position: relative;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);\n}\n\n.btn[_ngcontent-%COMP%]:active {\n    transform: translateY(-1px);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n}\n\n.btn[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: inline-block;\n    height: 100%;\n    width: 100%;\n    border-radius: 100px;\n    background-color: #3b3b3d;\n    color: #e1e4ec;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    transition: all .4s;\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n    transform: scaleX(1.4) scaleY(1.6);\n    opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaG9wL3Byb2R1Y3QtbGlzdC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFFQUFxRTtJQUNyRSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qix5REFBaUQ7WUFBakQsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxVQUFVO0FBQ2QiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Nob3AvcHJvZHVjdC1saXN0L3Byb2R1Y3RMaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWNhcmQge1xuICAgIHBlcnNwZWN0aXZlOiAxNTByZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbn1cblxuLmN1c3RvbS1jYXJkX19zaWRlIHtcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDEuNXJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgLjE1KTtcbn1cblxuLmN1c3RvbS1jYXJkX19zaWRlLS1mcm9udCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmN1c3RvbS1jYXJkX19zaWRlLS1iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0IGJvdHRvbSwgI2E4YThhOCwgIzdiNzY4NSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5jdXN0b20tY2FyZDpob3ZlciAuY3VzdG9tLWNhcmRfX3NpZGUtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG59XG5cbi5jdXN0b20tY2FyZDpob3ZlciAuY3VzdG9tLWNhcmRfX3NpZGUtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcbn1cblxuLmN1c3RvbS1jYXJkX19waWN0dXJlIHtcbiAgICBoZWlnaHQ6IDE0LjVyZW07XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDg1JSwgMCAxMDAlKTtcbn1cblxuLmN1c3RvbS1jYXJkX19oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwLjVyZW07XG4gICAgcmlnaHQ6IDAuMDk5cmVtO1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbi5jdXN0b20tY2FyZF9faGVhZGluZy1zcGFuIHtcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC40NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0IGJvdHRvbSwgcmdiKDE2OCwgMTY4LCAxNjgsIC42NSksIHJnYigxMjMsIDExOCwgMTMzLCAuNjUpKVxufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogODAlO1xufVxuXG5saSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLmN1c3RvbS1jYXJkX19jdGEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jdXN0b20tY2FyZF9fcHJpY2UtYm94IHtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3VzdG9tLWNhcmRfX3ByaWNlLW9ubHkge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY3VzdG9tLWNhcmRfX3ByaWNlLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmJ0bjpsaW5rLFxuLmJ0bjp2aXNpdGVkIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNkO1xuICAgIGNvbG9yOiAjZTFlNGVjO1xuICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYW5pbWF0aW9uOiBtb3ZlSW5VcCAycyBlYXNlLW91dCAuNzVzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0bjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAuMik7XG59XG5cbi5idG46OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzZDtcbiAgICBjb2xvcjogI2UxZTRlYztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLmJ0bjpob3Zlcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuNCkgc2NhbGVZKDEuNik7XG4gICAgb3BhY2l0eTogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-list',
                templateUrl: "./productList.component.html",
                styleUrls: [
                    "./productList.component.css"
                ]
            }]
    }], function () { return [{ type: ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./ClientApp/app/components/shop/shop.component.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/components/shop/shop.component.ts ***!
  \*********************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ "./ClientApp/app/components/shop/product-list/product-list.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.component */ "./ClientApp/app/components/shop/cart/cart.component.ts");




class ShopComponent {
    constructor() {
        this.title = 'Product List';
    }
    ngOnInit() {
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], decls: 7, vars: 1, consts: [[1, "row"], [1, "col-md-6", "offset-md-2"], [1, "col-md-3"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "product-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop',
                templateUrl: "./shop.component.html",
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./ClientApp/app/models/order.ts":
/*!***************************************!*\
  !*** ./ClientApp/app/models/order.ts ***!
  \***************************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

class Order {
    constructor() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    get subtotal() {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["sum"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.items, item => item.unitPrice * item.quantity));
    }
    ;
}
class OrderItem {
}


/***/ }),

/***/ "./ClientApp/app/services/data.service.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/services/data.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/order */ "./ClientApp/app/models/order.ts");






class DataService {
    constructor(http) {
        this.http = http;
        this.token = "";
        this.products = [];
        this.order = new _models_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
    }
    loadProducts() {
        return this.http.get("/api/product")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            this.products = data;
            return true;
        }));
    }
    addToOrder(product) {
        let item = this.order.items.find(i => i.productId == product.id);
        if (item) {
            item.quantity++;
        }
        else {
            item = new _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderItem"]();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    }
    deleteFromOrder(id) {
        let item = this.order.items.find(i => i.productId == id);
        if (item) {
            if (item.quantity > 1) {
                item.quantity--;
            }
            else {
                const index = this.order.items.indexOf(item);
                this.order.items.splice(index, 1);
            }
        }
    }
    get loginRequired() {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    login(creds) {
        return this.http.post("/account/createtoken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            let tokenInfo = response;
            this.token = tokenInfo.token;
            this.tokenExpiration = tokenInfo.expiration;
            return true;
        }));
    }
    checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/order", this.order, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.order = new _models_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
            return true;
        }));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vitaly/Dokumente/Projects/DutchTreat/DutchTreat/ClientApp/main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map