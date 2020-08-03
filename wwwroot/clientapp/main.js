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
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contact/contact.component */ "./ClientApp/app/components/contact/contact.component.ts");

















const routes = [
    { path: "", component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"] },
    { path: "checkout", component: _components_shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: "about", component: _components_shop_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] },
    { path: "contact", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"] }
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
        _components_shop_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    _components_shop_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]
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

/***/ "./ClientApp/app/components/contact/contact.component.ts":
/*!***************************************************************!*\
  !*** ./ClientApp/app/components/contact/contact.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ClientApp_app_models_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/models/contact */ "./ClientApp/app/models/contact.ts");
/* harmony import */ var ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/services/data.service */ "./ClientApp/app/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function ContactComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function ContactComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subject is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.successMessage);
} }
class ContactComponent {
    // public messageRequest={
    //     username:"",
    //     email:"",
    //     subject:"",
    //     message:""  
    // };
    constructor(data) {
        this.data = data;
        this.errorMessage = "";
        this.successMessage = "";
        this.contactMessage = new ClientApp_app_models_contact__WEBPACK_IMPORTED_MODULE_1__["Contact"]();
    }
    ngOnInit() {
    }
    sendMessageAndGetResponse() {
        this.data.sendMessage(this.contactMessage).subscribe(success => {
            if (success) {
                this.successMessage = "Your message was delivered!!!";
            }
            else {
                this.successMessage = "Message delivery failed.";
            }
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 39, vars: 12, consts: [[1, "row"], [1, "col-md-4", "offset-md-4"], ["class", "alert alert-warning", 4, "ngIf"], [1, "contact"], [1, "contact__form"], [1, "text-center"], [1, "heading-secondary"], [3, "submit"], ["theForm", "ngForm"], [1, "form__group"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "name", "username", "placeholder", "Your Name", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], [1, "form__label"], ["type", "email", "name", "email", "placeholder", "Email", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "text", "name", "subject", "placeholder", "Subject", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["subject", "ngModel"], ["rows", "4", "name", "message", "placeholder", "Message", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["message", "ngModel"], ["asp-for", "Message", 1, "form__label"], [4, "ngIf"], [1, "form-group", 3, "hidden"], ["type", "submit", "value", "Send", 1, "btn", 3, "disabled"], ["routerLink", "/", 1, "btn"], [1, "alert", "alert-warning"], [1, "text-danger"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactComponent_Template_form_submit_8_listener() { return ctx.sendMessageAndGetResponse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactComponent_div_11_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_12_listener($event) { return ctx.contactMessage.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactComponent_div_17_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_18_listener($event) { return ctx.contactMessage.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ContactComponent_div_23_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_24_listener($event) { return ctx.contactMessage.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ContactComponent_div_29_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_30_listener($event) { return ctx.contactMessage.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ContactComponent_div_34_Template, 3, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid && _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactMessage.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid && _r5.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactMessage.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && _r7.invalid && _r7.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactMessage.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.touched && _r9.invalid && _r9.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactMessage.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".contact[_ngcontent-%COMP%] {\n    background-image: linear-gradient(105deg, rgba(255, 255, 255, 0.9), rgba(59, 59, 61, 0.9)), url(\"/img/SK-C-251.jpg\");\n    background-size: cover;\n    border-radius: 3px;\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .2);\n}\n\n.contact__form[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    padding: 2rem;\n}\n\n.form__group[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 1rem;\n}\n\n.form__label[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 700;\n    margin-left: 1rem;\n    margin-top: .5rem;\n    display: block;\n    transition: all .3s;\n}\n\n.form__input[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    padding: .5rem 1rem;\n    border-radius: 2px;\n    background-color: rgba(255, 255, 255, 0.502);\n    border: none;\n    border-bottom: 3px solid transparent;\n    width: 100%;\n    display: block;\n    transition: all .3s;\n}\n\n.form__input[_ngcontent-%COMP%]:-moz-placeholder-shown + .form__label[_ngcontent-%COMP%] {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-3rem);\n}\n\n.form__input[_ngcontent-%COMP%]:-ms-input-placeholder + .form__label[_ngcontent-%COMP%] {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-3rem);\n}\n\n.form__input[_ngcontent-%COMP%]:placeholder-shown + .form__label[_ngcontent-%COMP%] {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-3rem);\n}\n\n.form__input[_ngcontent-%COMP%]:focus {\n    outline: none;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .1);\n    border-bottom: 3px solid #3b3b3d;\n}\n\n.form__input[_ngcontent-%COMP%]:focus:invalid {\n    border-bottom: 3px solid #ff7730;\n}\n\n.heading-secondary[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    display: inline-block;\n    background-image: linear-gradient(to right, #a8a8a8, #7b7685);\n    -webkit-background-clip: text;\n            background-clip: text;\n    color: transparent;\n    letter-spacing: 2px;\n    transition: all .2s;\n    margin-bottom: 40px;\n}\n\nh4[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    display: inline-block;\n    background-image: linear-gradient(to right, #2f2f31, whitesmoke);\n    -webkit-background-clip: text;\n            background-clip: text;\n    color: transparent;\n    letter-spacing: 2px;\n    transition: all .2s;\n    margin-bottom: 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    background-color: transparent;\n    border: 0;\n    color: #3b3b3d;\n    display: inline-block;\n    text-decoration: none;\n    padding: 3px;\n    margin-right: 1rem;\n    transition: all .2s;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n    outline: 0;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    background-color: #3b3b3d;\n    color: #e1e4ec;\n    box-shadow: 0 .1rem 2rem rgba(0, 0, 0, .5);\n    transform: translateY(-2px);\n}\n\n.btn[_ngcontent-%COMP%]:active {\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .5);\n    transform: translateY(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvSEFBb0g7SUFDcEgsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBSkE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFKQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsNkRBQTZEO0lBQzdELDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdFQUFnRTtJQUNoRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGNBQWM7SUFDZCxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLDBDQUEwQztJQUMxQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsd0JBQXdCO0FBQzVCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEwNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCByZ2JhKDU5LCA1OSwgNjEsIDAuOSkpLCB1cmwoXCIvaW1nL1NLLUMtMjUxLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIC4yKTtcbn1cblxuLmNvbnRhY3RfX2Zvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZm9ybV9fZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm1fX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xufVxuXG4uZm9ybV9faW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuLmZvcm1fX2lucHV0OnBsYWNlaG9sZGVyLXNob3duKy5mb3JtX19sYWJlbCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcmVtKTtcbn1cblxuLmZvcm1fX2lucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjM2IzYjNkO1xufVxuXG4uZm9ybV9faW5wdXQ6Zm9jdXM6aW52YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjc3MzA7XG59XG5cbi5oZWFkaW5nLXNlY29uZGFyeSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhOGE4YTgsICM3Yjc2ODUpO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmg0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJmMmYzMSwgd2hpdGVzbW9rZSk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmJ0biB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiAjM2IzYjNkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzZDtcbiAgICBjb2xvcjogI2UxZTRlYztcbiAgICBib3gtc2hhZG93OiAwIC4xcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: "./contact.component.html",
                styleUrls: ["./contact.component.css"
                ]
            }]
    }], function () { return [{ type: ClientApp_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


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






function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
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
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 6, consts: [[1, "text-center"], [1, "heading-secondary"], [1, "row"], [1, "col-md-8", "offset-md-2"], ["class", "alert alert-warning", 4, "ngIf"], [1, "login"], [1, "login__form"], ["novalidate", "", 3, "submit"], ["theForm", "ngForm"], [1, "form__group"], ["class", "text-danger", 4, "ngIf"], ["placeholder", "Username", "type", "text", "name", "username", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["for", "username", 1, "form__label"], [1, "form-group"], ["placeholder", "Password", "type", "password", "name", "password", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "password", 1, "form__label"], ["type", "submit", "value", "Login", 1, "btn", 3, "disabled"], ["routerLink", "/", 1, "btn"], [1, "alert", "alert-warning"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.creds.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.creds.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid && _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.creds.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid && _r5.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.creds.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".login[_ngcontent-%COMP%] {\n    background-image: linear-gradient(105deg, rgba(255, 255, 255, 0.89) 0%, rgba(255, 255, 255, 0.89) 50%, transparent 50%), url(\"/img/SK-C-5.jpg\");\n    background-size: 100%;\n    border-radius: 3px;\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .2);\n    height: 30rem;\n}\n\n.login__form[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 4rem;\n}\n\n.form__group[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 2rem;\n}\n\n.form__label[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 700;\n    margin-left: 1rem;\n    margin-top: .5rem;\n    display: block;\n    transition: all .3s;\n}\n\n.form__input[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    padding: .5rem 1rem;\n    border-radius: 2px;\n    background-color: rgba(255, 255, 255, 0.502);\n    border: none;\n    border-bottom: 3px solid transparent;\n    width: 100%;\n    display: block;\n    transition: all .3s;\n}\n\n.form__input[_ngcontent-%COMP%]:-moz-placeholder-shown + .form__label[_ngcontent-%COMP%] {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-3rem);\n}\n\n.form__input[_ngcontent-%COMP%]:-ms-input-placeholder + .form__label[_ngcontent-%COMP%] {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-3rem);\n}\n\n.form__input[_ngcontent-%COMP%]:placeholder-shown + .form__label[_ngcontent-%COMP%] {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-3rem);\n}\n\n.form__input[_ngcontent-%COMP%]:focus {\n    outline: none;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .1);\n    border-bottom: 3px solid #3b3b3d;\n}\n\n.form__input[_ngcontent-%COMP%]:focus:invalid {\n    border-bottom: 3px solid #ff7730;\n}\n\n.heading-secondary[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    display: inline-block;\n    background-image: linear-gradient(to right, #a8a8a8, #7b7685);\n    -webkit-background-clip: text;\n            background-clip: text;\n    color: transparent;\n    letter-spacing: 2px;\n    transition: all .2s;\n    margin-bottom: 80px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    background-color: transparent;\n    border: 0;\n    color: #3b3b3d;\n    display: inline-block;\n    text-decoration: none;\n    padding: 3px;\n    margin-right: 1rem;\n    transition: all .2s;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    background-color: #3b3b3d;\n    color: #e1e4ec;\n    box-shadow: 0 .1rem 2rem rgba(0, 0, 0, .5);\n    transform: translateY(-2px);\n}\n\n.btn[_ngcontent-%COMP%]:active {\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .5);\n    transform: translateY(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtJQUErSTtJQUMvSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBSkE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFKQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsNkRBQTZEO0lBQzdELDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMENBQTBDO0lBQzFDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyx3QkFBd0I7QUFDNUIiLCJmaWxlIjoiY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTA1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgdXJsKFwiL2ltZy9TSy1DLTUuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbn1cblxuLmxvZ2luX19mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDRyZW07XG59XG5cbi5mb3JtX19ncm91cDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZm9ybV9fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG5cbi5mb3JtX19pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwMik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xufVxuXG4uZm9ybV9faW5wdXQ6cGxhY2Vob2xkZXItc2hvd24rLmZvcm1fX2xhYmVsIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNyZW0pO1xufVxuXG4uZm9ybV9faW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMzYjNiM2Q7XG59XG5cbi5mb3JtX19pbnB1dDpmb2N1czppbnZhbGlkIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmNzczMDtcbn1cblxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2E4YThhOCwgIzdiNzY4NSk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmJ0biB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiAjM2IzYjNkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzZDtcbiAgICBjb2xvcjogI2UxZTRlYztcbiAgICBib3gtc2hhZG93OiAwIC4xcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn0iXX0= */"] });
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
    } }, styles: [".section-about[_ngcontent-%COMP%] {\n    padding: 5rem 0;\n}\n\n.heading-secondary[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    display: inline-block;\n    background-image: linear-gradient(to right, #a8a8a8, #7b7685);\n    -webkit-background-clip: text;\n            background-clip: text;\n    color: transparent;\n    letter-spacing: 2px;\n    transition: all .2s;\n    margin-bottom: 80px;\n}\n\n.heading-secondary[_ngcontent-%COMP%]:hover {\n    text-shadow: 5px 10px 20px rgba(0, 0, 0, 0, .5);\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 700;\n    text-transform: uppercase;\n}\n\np[_ngcontent-%COMP%]:not(:last-child) {\n    font-size: 1rem;\n    margin-bottom: 2rem;\n}\n\n.composition[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.composition__photo[_ngcontent-%COMP%] {\n    width: 35%;\n    box-shadow: 0 1rem 3rem rgb(0, 0, 0, .4);\n    position: absolute;\n    z-index: 10;\n    transition: all 1s;\n}\n\n.composition__photo--p1[_ngcontent-%COMP%] {\n    left: 0;\n    top: -2rem;\n}\n\n.composition__photo--p2[_ngcontent-%COMP%] {\n    right: 2rem;\n    top: 2rem;\n}\n\n.composition__photo--p3[_ngcontent-%COMP%] {\n    left: 20%;\n    top: 15rem;\n}\n\n.composition__photo--p4[_ngcontent-%COMP%] {\n    left: 56%;\n    top: 25rem;\n}\n\n.composition__photo--p5[_ngcontent-%COMP%] {\n    left: 30%;\n    top: -10rem;\n}\n\n.composition__photo--p6[_ngcontent-%COMP%] {\n    left: 0%;\n    top: 24rem;\n}\n\n.composition__photo[_ngcontent-%COMP%]:hover {\n    transform: scale(1.5);\n    box-shadow: 0 1.7rem 3rem rgb(0, 0, 0, .4);\n    z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hvcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw2REFBNkQ7SUFDN0QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztJQUNQLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBDQUEwQztJQUMxQyxXQUFXO0FBQ2YiLCJmaWxlIjoiY29tcG9uZW50cy9zaG9wL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1hYm91dCB7XG4gICAgcGFkZGluZzogNXJlbSAwO1xufVxuXG4uaGVhZGluZy1zZWNvbmRhcnkge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYThhOGE4LCAjN2I3Njg1KTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4uaGVhZGluZy1zZWNvbmRhcnk6aG92ZXIge1xuICAgIHRleHQtc2hhZG93OiA1cHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMCwgLjUpO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxucDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNvbXBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb21wb3NpdGlvbl9fcGhvdG8ge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiKDAsIDAsIDAsIC40KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvLS1wMSB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IC0ycmVtO1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvLS1wMiB7XG4gICAgcmlnaHQ6IDJyZW07XG4gICAgdG9wOiAycmVtO1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvLS1wMyB7XG4gICAgbGVmdDogMjAlO1xuICAgIHRvcDogMTVyZW07XG59XG5cbi5jb21wb3NpdGlvbl9fcGhvdG8tLXA0IHtcbiAgICBsZWZ0OiA1NiU7XG4gICAgdG9wOiAyNXJlbTtcbn1cblxuLmNvbXBvc2l0aW9uX19waG90by0tcDUge1xuICAgIGxlZnQ6IDMwJTtcbiAgICB0b3A6IC0xMHJlbTtcbn1cblxuLmNvbXBvc2l0aW9uX19waG90by0tcDYge1xuICAgIGxlZnQ6IDAlO1xuICAgIHRvcDogMjRyZW07XG59XG5cbi5jb21wb3NpdGlvbl9fcGhvdG86aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICBib3gtc2hhZG93OiAwIDEuN3JlbSAzcmVtIHJnYigwLCAwLCAwLCAuNCk7XG4gICAgei1pbmRleDogMjA7XG59Il19 */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n    text-transform: uppercase;\n    text-decoration: none;\n    background-color: e1e4ec;\n    color: #3b3b3d;\n    padding: 10px 30px;\n    border-radius: 100px;\n    display: inline-block;\n    -webkit-animation: moveInUp 2s ease-out .75s;\n            animation: moveInUp 2s ease-out .75s;\n    -webkit-animation-fill-mode: backwards;\n            animation-fill-mode: backwards;\n    transition: all .2s;\n    position: relative;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);\n}\n\n.btn[_ngcontent-%COMP%]:active {\n    transform: translateY(-1px);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n}\n\n.btn[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: inline-block;\n    height: 100%;\n    width: 100%;\n    border-radius: 100px;\n    background-color: #e1e4ec;\n    color: #3b3b3d;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    transition: all .4s;\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n    transform: scaleX(1.4) scaleY(1.6);\n    opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hvcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFVBQVU7QUFDZCIsImZpbGUiOiJjb21wb25lbnRzL3Nob3AvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuOmxpbmssXG4uYnRuOnZpc2l0ZWQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGUxZTRlYztcbiAgICBjb2xvcjogIzNiM2IzZDtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFuaW1hdGlvbjogbW92ZUluVXAgMnMgZWFzZS1vdXQgLjc1cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbn1cblxuLmJ0bjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xufVxuXG4uYnRuOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWU0ZWM7XG4gICAgY29sb3I6ICMzYjNiM2Q7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XG59XG5cbi5idG46aG92ZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpIHNjYWxlWSgxLjYpO1xuICAgIG9wYWNpdHk6IDA7XG59Il19 */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".checkout-thumb[_ngcontent-%COMP%] {\n    max-width: 100px;\n}\n\n.section-confirm[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n}\n\n.heading-secondary[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    display: inline-block;\n    background-image: linear-gradient(to right, #a8a8a8, #7b7685);\n    -webkit-background-clip: text;\n            background-clip: text;\n    color: transparent;\n    letter-spacing: 2px;\n    transition: all .2s;\n    margin-bottom: 80px;\n}\n\n.order[_ngcontent-%COMP%] {\n    width: 75%;\n    margin: 0 auto;\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, .1);\n    background: rgba(255, 255, 255, .4);\n    border-radius: 3px;\n    padding: 1rem;\n    padding-left: 3rem;\n    transform: skewX(-12deg);\n}\n\n.order__shape[_ngcontent-%COMP%] {\n    width: 15rem;\n    height: 15rem;\n    float: left;\n    shape-outside: circle(50% at 50% 50%);\n    -webkit-clip-path: circle(50% at 50% 50%);\n            clip-path: circle(50% at 50% 50%);\n    transform: translateX(-2rem) skewX(12deg);\n    position: relative;\n}\n\n.order__content[_ngcontent-%COMP%] {\n    transform: skewX(12deg);\n}\n\n.order__caption[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, 20%);\n    color: whitesmoke;\n    text-transform: uppercase;\n    font-size: 1rem;\n    text-align: center;\n    opacity: 0;\n    transition: all 1s;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n\n.order[_ngcontent-%COMP%]:hover   .order__caption[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 700;\n    text-transform: uppercase;\n}\n\nimg[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    transform: scale(1.4);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: all 1s;\n}\n\n.order[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: scale(1);\n    -webkit-filter: blur(3px) brightness(80%);\n            filter: blur(3px) brightness(80%);\n}\n\na[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    color: #3b3b3d;\n    display: inline-block;\n    text-decoration: none;\n    border-bottom: 1px solid #3b3b3d;\n    padding: 3px;\n    transition: all .2s;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n\na[_ngcontent-%COMP%]:hover {\n    background-color: #3b3b3d;\n    color: #e1e4ec;\n    box-shadow: 0 .1rem 2rem rgba(0, 0, 0, .5);\n    transform: translateY(-2px);\n}\n\na[_ngcontent-%COMP%]:active {\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .5);\n    transform: translateY(0);\n}\n\n.btn-container[_ngcontent-%COMP%] {\n    transform: skewX(12deg);\n}\n\n.table[_ngcontent-%COMP%] {\n    margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hvcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw2REFBNkQ7SUFDN0QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLHlDQUF5QztJQUN6QyxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMseUNBQXlDO0lBQ3pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9zaG9wL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtdGh1bWIge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5zZWN0aW9uLWNvbmZpcm0ge1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2E4YThhOCwgIzdiNzY4NSk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLm9yZGVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0xMmRlZyk7XG59XG5cbi5vcmRlcl9fc2hhcGUge1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHNoYXBlLW91dHNpZGU6IGNpcmNsZSg1MCUgYXQgNTAlIDUwJSk7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDUwJSA1MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSkgc2tld1goMTJkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm9yZGVyX19jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDEyZGVnKTtcbn1cblxuLm9yZGVyX19jYXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm9yZGVyOmhvdmVyIC5vcmRlcl9fY2FwdGlvbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4ub3JkZXI6aG92ZXIgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGZpbHRlcjogYmx1cigzcHgpIGJyaWdodG5lc3MoODAlKTtcbn1cblxuYSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjM2IzYjNkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYjNiM2Q7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5hOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNkO1xuICAgIGNvbG9yOiAjZTFlNGVjO1xuICAgIGJveC1zaGFkb3c6IDAgLjFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbmE6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgxMmRlZyk7XG59XG5cbi50YWJsZSB7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xufSJdfQ== */"] });
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
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 24, vars: 2, consts: [[1, "navbar", "navbar-light", "bg-light", "navbar-expand-md"], [1, "navbar-brand"], [1, "fa", "fa-paint-brush"], ["data-toggle", "collapse", "data-target", "#menu", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "menu", 1, "navbar-collapse", "collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "contact", 1, "nav-link"], ["routerLink", "about", 1, "nav-link"], [1, "nav-item", 3, "hidden"], ["href", "/account/logout", 1, "nav-link"], ["routerLink", "login", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".custom-card[_ngcontent-%COMP%] {\n    perspective: 150rem;\n    position: relative;\n    height: 25rem;\n    margin-bottom: 7rem;\n}\n\n.custom-card__side[_ngcontent-%COMP%] {\n    height: 30rem;\n    transition: all 1.5s ease;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    border-radius: 3px;\n    overflow: hidden;\n    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);\n}\n\n.custom-card__side--front[_ngcontent-%COMP%] {\n    background-color: whitesmoke;\n}\n\n.custom-card__side--back[_ngcontent-%COMP%] {\n    background-image: linear-gradient( to right bottom, #a8a8a8, #7b7685);\n    transform: rotateY(180deg);\n}\n\n.custom-card[_ngcontent-%COMP%]:hover   .custom-card__side--front[_ngcontent-%COMP%] {\n    transform: rotateY(-180deg);\n}\n\n.custom-card[_ngcontent-%COMP%]:hover   .custom-card__side--back[_ngcontent-%COMP%] {\n    transform: rotateY(0);\n}\n\n.custom-card__picture[_ngcontent-%COMP%] {\n    height: 14.5rem;\n    background-size: 100% 100%;\n    background-blend-mode: screen;\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n}\n\n.custom-card__heading[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    text-align: right;\n    color: white;\n    position: absolute;\n    top: 10.5rem;\n    right: 0.099rem;\n    width: 75%;\n}\n\n.custom-card__heading-span[_ngcontent-%COMP%] {\n    padding: 0.3rem 0.45rem;\n    background-image: linear-gradient( to right bottom, rgb(168, 168, 168, .65), rgb(123, 118, 133, .65))\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n    width: 80%;\n}\n\nli[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 1rem;\n    padding: 0.25rem;\n    border-bottom: 1px solid;\n}\n\n.custom-card__cta[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 90%;\n    text-align: center;\n}\n\n.custom-card__price-box[_ngcontent-%COMP%] {\n    color: whitesmoke;\n    margin: auto;\n    text-align: center;\n}\n\n.custom-card__price-only[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    text-transform: uppercase;\n}\n\n.custom-card__price-value[_ngcontent-%COMP%] {\n    font-size: 5rem;\n    font-weight: 100;\n}\n\n.btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n    text-transform: uppercase;\n    text-decoration: none;\n    background-color: #3b3b3d;\n    color: #e1e4ec;\n    padding: 15px 40px;\n    border-radius: 100px;\n    display: inline-block;\n    -webkit-animation: moveInUp 2s ease-out .75s;\n            animation: moveInUp 2s ease-out .75s;\n    -webkit-animation-fill-mode: backwards;\n            animation-fill-mode: backwards;\n    transition: all .2s;\n    position: relative;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);\n}\n\n.btn[_ngcontent-%COMP%]:active {\n    transform: translateY(-1px);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n}\n\n.btn[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: inline-block;\n    height: 100%;\n    width: 100%;\n    border-radius: 100px;\n    background-color: #3b3b3d;\n    color: #e1e4ec;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    transition: all .4s;\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n    transform: scaleX(1.4) scaleY(1.6);\n    opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hvcC9wcm9kdWN0LWxpc3QvcHJvZHVjdExpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxxRUFBcUU7SUFDckUsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IseURBQWlEO1lBQWpELGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsVUFBVTtBQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvc2hvcC9wcm9kdWN0LWxpc3QvcHJvZHVjdExpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2FyZCB7XG4gICAgcGVyc3BlY3RpdmU6IDE1MHJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA3cmVtO1xufVxuXG4uY3VzdG9tLWNhcmRfX3NpZGUge1xuICAgIGhlaWdodDogMzByZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDEuNXMgZWFzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMS41cmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAuMTUpO1xufVxuXG4uY3VzdG9tLWNhcmRfX3NpZGUtLWZyb250IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uY3VzdG9tLWNhcmRfX3NpZGUtLWJhY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQgYm90dG9tLCAjYThhOGE4LCAjN2I3Njg1KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmN1c3RvbS1jYXJkOmhvdmVyIC5jdXN0b20tY2FyZF9fc2lkZS0tZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbn1cblxuLmN1c3RvbS1jYXJkOmhvdmVyIC5jdXN0b20tY2FyZF9fc2lkZS0tYmFjayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xufVxuXG4uY3VzdG9tLWNhcmRfX3BpY3R1cmUge1xuICAgIGhlaWdodDogMTQuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgODUlLCAwIDEwMCUpO1xufVxuXG4uY3VzdG9tLWNhcmRfX2hlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAuNXJlbTtcbiAgICByaWdodDogMC4wOTlyZW07XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuLmN1c3RvbS1jYXJkX19oZWFkaW5nLXNwYW4ge1xuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjQ1cmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQgYm90dG9tLCByZ2IoMTY4LCAxNjgsIDE2OCwgLjY1KSwgcmdiKDEyMywgMTE4LCAxMzMsIC42NSkpXG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbmxpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuXG4uY3VzdG9tLWNhcmRfX2N0YSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmN1c3RvbS1jYXJkX19wcmljZS1ib3gge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jdXN0b20tY2FyZF9fcHJpY2Utb25seSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jdXN0b20tY2FyZF9fcHJpY2UtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uYnRuOmxpbmssXG4uYnRuOnZpc2l0ZWQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2Q7XG4gICAgY29sb3I6ICNlMWU0ZWM7XG4gICAgcGFkZGluZzogMTVweCA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbmltYXRpb246IG1vdmVJblVwIDJzIGVhc2Utb3V0IC43NXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAuMik7XG59XG5cbi5idG46YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbn1cblxuLmJ0bjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNkO1xuICAgIGNvbG9yOiAjZTFlNGVjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xufVxuXG4uYnRuOmhvdmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS40KSBzY2FsZVkoMS42KTtcbiAgICBvcGFjaXR5OiAwO1xufSJdfQ== */"] });
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

/***/ "./ClientApp/app/models/contact.ts":
/*!*****************************************!*\
  !*** ./ClientApp/app/models/contact.ts ***!
  \*****************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
}


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
    sendMessage(message) {
        return this.http.post("/contact", message)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            return true;
        }, error => {
            console.log("Message deliver failed");
            console.log(error);
            return false;
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