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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div >\n\t<div class=\"container\">\n\t<flash-messages></flash-messages>\n</div>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseCongfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_edit_edit_component__ = __webpack_require__("../../../../../src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_note_service__ = __webpack_require__("../../../../../src/app/services/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { TrashComponent } from './components/trash/trash.component';







// import { SideBarComponent } from './components/side-bar/side-bar.component';


var firebaseCongfig = {
    apiKey: "AIzaSyBbkw2JfHrerFtqdRsYp6HaI7bR-26sVvo",
    authDomain: "reminder-app-40b59.firebaseapp.com",
    databaseURL: "https://reminder-app-40b59.firebaseio.com",
    projectId: "reminder-app-40b59",
    storageBucket: "reminder-app-40b59.appspot.com",
    messagingSenderId: "921337961427"
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'edit-note/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_edit_edit_component__["a" /* EditComponent */],
                // TrashComponent,
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseCongfig),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_16_ngx_chips__["TagInputModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__services_note_service__["a" /* NoteService */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
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

var EditComponent = (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit/edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side li{\n    margin-bottom: 5px;\n}\n.divider{\n border: 0px solid #f0f0f0;  \n margin-top: 3px;\n margin-bottom: 3px; \n}\n.getNotes{\n    margin-left: 12px;    \n    cursor:pointer;\n}\n.trashRouter{\n    \n    margin-right: 6px;\n}\n.del{\n    position: relative;\n    left: 110%;\n    margin-top: 15px;\n}\n\n.title{\n    margin-left: 12px;\n    margin-top: 5px;\n    cursor:pointer;\n}\n.dropdown{\n    top: 6%;  \n}\n.dropdown-toggle{\n    cursor:pointer;\n}\n.sidebar{\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 363px;\n    border-right: 1px solid #f0f0f0;\n\n}\ntextarea{\n    padding: 10px 100px 10px 20px;\n    left: 0px;\n    position: absolute;\n    width:126%;\n    border: 0px solid #f0f0f0;\n    max-height: 100%;\n    min-height: 799px;\n    height: 100%;\n    box-sizing: border-box;\n    margin-left: -31px;\n    resize: none;\n    border-left: 1px solid #f0f0f0;\n    /*border-top: 1px solid #f0f0f0;*/\n}\n.tag-input{\n    padding-left: 0px;\n    margin-left: -15px;\n    border-bottom: 1px solid #f0f0f0;\n\n}\n.remove{\n    color:red;\n    padding-top: 2px;   \n    padding-right: 7px;\n    position: relative;\n    right: 0;\n    top: 0;\n    display: none;\n    color: red;\n}\n.dropdownMenu{\n    display: block;\n  }\nli{\n    list-style: none;\n   \n}\nh4{\n    color: red;\n    margin-top: 100px;\n    text-align: center;\n}\nh3{\n    margin-top: 0px;\n}\n.tag{\n  position: absolute;\n    right: 0px;\n    left: 0px;\n    bottom: 1px;\n    top: -10px;\n    height: 15px;\n    padding-left: 65px;\n    border-bottom: 1px solid #f0f0f0;\n}\n.note{\n    /*position: absolute;\n    right: 0px;\n    left: 332px;\n    bottom: 0px;\n    top: 15px;\n    padding-top: 4px;\n    padding-bottom: 0px;\n    line-height: 1.4em;*/\n    \n}\nul .tagUl{\n    list-style-type: none;\n    padding: 3px 0 3px 15px;\n    margin: 3px 0px 0px;\n    overflow: auto;\n    color: #448ac9;\n    line-height: 16px;\n}\nli .tagLi{\n    margin-left: 0;\n    position: relative;\n    top: -2px;\n}\nul.tagUl li{\n    float: left;\n    margin: 1px 4px 1px 0;\n}\n.add{\n   float: right;\n   margin-top: -36px;\n   \n}\n.noteList{\n    /*position: absolute;\n    left: 0px;\n    bottom: 0px;\n    right: 0;\n    top: 75px;*/\n    overflow: auto;\n    height: auto;\n    padding-top: 0px;\n    height: 800px;\n    margin-top: 10px;\n}\n.noteList li{\n    position: relative;\n    padding: 12px 10px 12px 8px\n}\n.p{\n    font-size: 16px;\n    color: #333;\n    /*padding: 0 0 0 18px;*/\n    width: 270px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    cursor:pointer;\n}\n.preview:hover .trash {\n    display: block;\n    color: red;\n}\n.trash{\n    /*padding-top: 16px;   \n    padding-right: 12px;*/\n    position: absolute;\n    right: 0;\n    top: 0;\n    display: none;\n    color: red;\n    padding: 16px 0px 2px 0px;\n}\n.title:hover .remove{\n    display: block;\n    color: red;\n}\n.preview:hover .onTrash {\n    display: block;\n    color: red;\n}\n.onTrash{\n    padding-top: 16px;   \n    padding-right: 12px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    display: none;\n    color: red;\n}\n.text{\n    font-size: 16px;\n    color: #333;\n    /*width: 270px;*/\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.trashButton{\n    background-color: white;\n    border: 1px solid red;\n    color: red;\n    padding: 2px 6px;\n    margin-right: 7px;\n}\n.length{\n    margin-right: 28px;\n}\n.undo{\n    margin-top: -29px;\n    padding-right: 27px;\n    color: #006699;\n\n}\n.toggle-btn{\n    display: none;\n}\n@media only screen and (max-width:768px)  {\n    .sidebar{\n        height: auto;\n    }\n    .noteList{\n        height: auto;\n        padding: 0px;   \n    }\n    textarea{\n        padding: 10px 20px 10px 20px;\n        left: 0px;\n        position: absolute;\n        width:126%;\n        border-left: 0px solid #f0f0f0;\n        max-height: 100%;\n        min-height: 799px;\n        height: 100%;\n        box-sizing: border-box;\n        margin-left: -31px;\n        /*border-top: 1px solid #f0f0f0;*/\n\n    }\n    .add{\n        position: fixed;\n        left:10%;\n        top:6%;\n    }\n    .toggle-btn {\n        display: block;\n        cursor: pointer;\n        position: absolute;\n        left: 10px;\n        top: -38px;\n        z-index: 10 !important;\n        padding: 3px;\n        background-color: #ffffff;\n        color: #000;\n        width: 40px;\n        text-align: center;\n    }\n  .dropdownMenu{\n    display: none;\n  }\n  .notePad{\n    width: 351px;\n    max-height: 533px;\n    }\n}\n@media only screen and (max-width: 1024px){\n    .sidebar{\n        height: auto;\n    }\n    .noteList{\n        height: auto;\n        padding: 0px;   \n    }\n    textarea{\n        padding: 10px 20px 10px 20px;\n        left: 0px;\n        position: absolute;\n        width:126%;\n        border-left: 0px solid #f0f0f0;\n        max-height: 100%;\n        min-height: 799px;\n        height: 100%;\n        box-sizing: border-box;\n        margin-left: -31px;\n        /*border-top: 1px solid #f0f0f0;*/\n\n    }\n}\n/*.ng2-tag-input  {\n    border-bottom: 0px solid white;\n}\n*/\n\n\n@media only screen and (max-width: 576px){\n  .add{\n        position: fixed;\n        left:15%;\n        top:8%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid cf\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-2 col-md-2 sidebar\">\n\t\t\t<small>\n\t\t\t\t<a  (click) = \"openAddForm()\" *ngIf=\"!trashdata\"><span class=\"glyphicon glyphicon-plus add\"></span></a>\n\t\t\t</small>\n\t\t\t<div >\n\t\t\t\t<i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\".dropdownMenu\"></i>\n      \t\t\t<div class=\"dropdownMenu\">\n      \t\t\t\t<div class=\"dropdown\" >\n\t\t\t\t\t\t<span class=\"dropdown-toggle \" type=\"button\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\tTags\n\t\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<ul class=\"dropdown-menu side\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"getNotes\"><span type='button'  class =\"trashRouter\" (click)=\"trashData()\">Trash</span>\n\t\t\t\t\t\t\t\t\t<span ><a href=\"\" type=\"button\" class=\"btn  trashButton pull-right\" (click)=\"onEmptyTrash()\">Empty</a></span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"getNotes\"><span (click)=\"getNotes()\" >All Notes </span> <span class=\" length pull-right\">{{userNotes?.length}}</span></span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t<li *ngFor=\"let tag of notesWithTags ; let i = index \"  class=\"title\" (click)=\"getTagData(tag)\" >{{tag.display}}\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<ul class=\"noteList\">\n\t\t\t\t\t\t<div *ngIf=\"!tag && !trashdata\">\n\t\t\t\t\t\t\t<li *ngFor = \"let data of userNotes; let i = index \"  class=\"preview\">\n\t\t\t\t\t\t\t\t<p  name=\"Note\" [(ngModel)]=\"data.Note\" ngDefaultControl (click)=\"getNoteData(data,i)\" class=\"p\" id=\"noteData\">\n\t\t\t\t\t\t\t\t\t{{data.Note | slice:0:25}}{{data.Note?.length < 25 ? '' : '...'}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<a type='button'  class =\"glyphicon glyphicon-trash pull-right trash\" (click)=\"onAddNoteToTrash(data,i)\"></a>\n\t\t\t\t\t\t\t<!-- <li *ngIf=\"!showModel\"  class=\"text\" >{{note | slice:0:25}}{{note?.length < 25 ? '' : '...'}} -->\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"tag \">\n\t\t\t\t\t\t\t<li *ngFor=\"let data of tagData ; let i = index \"  class=\"preview\" >\n\t\t\t\t\t\t\t\t<p name=\"Note\" [(ngModel)]=\"data.Note\" ngDefaultControl (click)=\"getNoteData(data,i)\" class=\"p\" >\n\t\t\t\t\t\t\t\t\t{{data.Note | slice:0:25}}{{data.Note?.length < 25 ? '' : '...'}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<span ><a type='button'  class =\"glyphicon glyphicon-trash pull-right trash\" (click)=\"onAddNoteToTrash(data,i)\" ></a></span>\n\t\t\t\t\t\t\t<!-- <li class=\"text\" >{{note | slice:0:25}}{{note?.length < 25 ? '' : '...'}} -->\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf =\"trashdata\">\n\t\t\t\t\t\t\t<li *ngFor=\"let trash of trashedNotes; let i = index \" class=\"preview\">\n\t\t\t\t\t\t\t\t<p name=\"trash\" [(ngModel)]=\"trash.Notes\" (click)=\"getNoteData(data,i)\" ngDefaultControl class=\"p\" >\n\t\t\t\t\t\t\t\t\t{{trash.Note | slice:0:25}}{{trash.Note?.length < 25 ? '' : '...'}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<span type='button'  class =\"glyphicon glyphicon-trash pull-right trash\" (click)=\"onRemoveFromTrash(trash,i)\"></span>\n\t\t\t\t\t\t\t\t<span><a type='button'  class = \"fa fa-undo pull-right undo\" (click)=\"onUndoNoteFromTrash(trash,i)\"></a></span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container-fluid \">\n\t\t\t<div class=\"col-xs-8 col-md-8 notePad\">\n\t\t\t\t<form #f='ngForm' (keyup)='saveNote(f)'  *ngIf=\"showAddInput || getData\" >\n\t\t\t\t\t<div class=\"tag-input col-xs-12\">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<tag-input *ngIf=\"!getData\" name=\"title\"  [separatorKeyCodes]=\"[32]\" [maxItems]='3' [(ngModel)]='title'\n\t\t\t\t\t\t\t\t\t(onRemove)=\"onItemRemoved($event)\"\n\t\t\t\t\t\t\t\t\t(onAdd)=\"onItemAdded($event)\"\n\t\t\t\t\t\t\t\t\t[editable]='true' (onTagEdited)=\"onTagEdited($event)\">\n\t\t\t\t\t\t\t\t<tag-input-dropdown [autocompleteItems]=\"notesWithTags\"\n\t\t\t\t\t\t\t\t\t[autocompleteItems]=\"true\">\n\t\t\t\t\t\t\t\t</tag-input-dropdown>\n\t\t\t\t\t\t\t</tag-input>\n\t\t\t\t\t\t\t<tag-input *ngIf=\"getData\" name=\"title\"  [separatorKeyCodes]=\"[32]\" [maxItems]='3' [(ngModel)]='editNotes.Title'\n\t\t\t\t\t\t\t\t\t(onRemove)=\"onItemRemoved($event)\"\n\t\t\t\t\t\t\t\t\t(onAdd)=\"onItemAdded($event)\"\n\t\t\t\t\t\t\t\t\t[editable]='true' (onTagEdited)=\"onTagEdited($event)\">\n\t\t\t\t\t\t\t\t\t{{editNotes.title}}\n\t\t\t\t\t\t\t\t<tag-input-dropdown [autocompleteItems]=\"notesWithTags\"\n\t\t\t\t\t\t\t\t\t[autocompleteItems]=\"true\">\n\t\t\t\t\t\t\t\t</tag-input-dropdown>\n\t\t\t\t\t\t\t</tag-input>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"note col-xs-12\" >\n\t\t\t\t\t\t<div class=\"col-xs-12\" >\n\t\t\t\t\t\t\t<textarea *ngIf=\"!getData\" rows=\"100%\" cols=\"100%\" name=\"note\" placeholder=\"note..\" [(ngModel)]=\"note\" ></textarea >\n\t\t\t\t\t\t\t<textarea *ngIf=\"getData\" rows=\"100%\" cols=\"100%\" name=\"note\"  [(ngModel)]=\"editNotes.Note\" >{{editNotes.note}}</textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_note_service__ = __webpack_require__("../../../../../src/app/services/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = (function () {
    function HomeComponent(noteService, authService, router, flashMessagesService) {
        var _this = this;
        this.noteService = noteService;
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.notes = {};
        this.trashedNotes = [];
        this.noteData = [];
        this.notesValue = [];
        this.dataValue = [];
        this.tagData = [];
        this.tag = false;
        this.getData = false;
        this.showAddInput = false;
        this.trashdata = false;
        this.noteUpdate = false;
        this.notesWithTags = [];
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    HomeComponent.prototype.getNotes = function () {
        var _this = this;
        this.notesWithTags = [];
        this.tag = false;
        this.trashdata = false;
        this.noteService.getNotes(this.authUser.uid).subscribe(function (data) {
            _this.userNotes = data;
            console.log(_this.userNotes);
            _this.userNotes.forEach(function (val) {
                if (val.Title !== undefined) {
                    val.Title.map(function (tag) {
                        // this.notesWithTags = _.uniqBy(this.notesWithTags,'display')
                        _this.notesWithTags.push(tag);
                        _this.notesWithTags = __WEBPACK_IMPORTED_MODULE_5_lodash__["uniqBy"](_this.notesWithTags, 'display');
                    });
                    console.log(_this.notesWithTags);
                }
            });
        });
    };
    HomeComponent.prototype.openAddForm = function () {
        this.getData = false;
        this.key = null;
        this.showAddInput = true;
        if (this.myForm) {
            this.myForm.reset();
        }
    };
    HomeComponent.prototype.saveNote = function (f) {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.onAddNote(f);
        }, 500);
    };
    HomeComponent.prototype.onAddNote = function (f) {
        var _this = this;
        this.showModel = false;
        var $this = this;
        this.notes.Title = f.value.title;
        this.notes.Note = f.value.note;
        this.myForm = f;
        console.log(this.key);
        if (this.key === null) {
            if (typeof this.notes.Title === typeof undefined) {
                delete this.notes.Title;
            }
            if (this.notes.Note && this.notes.Note !== "") {
                this.notes.id = new Date().valueOf();
                this.noteService.addNote(this.authUser.uid, this.notes).then(function (ref) {
                    _this.key = ref.key;
                });
            }
        }
        else {
            this.showModel = true;
            if (typeof this.notes.Title === typeof undefined) {
                delete this.notes.Title;
            }
            if (typeof this.notes.Note && this.notes.Note !== "") {
                this.noteService.onUpdateNote(this.authUser.uid, this.notes, this.key);
            }
        }
    };
    HomeComponent.prototype.trashData = function () {
        var _this = this;
        this.tag = false;
        this.showAddInput = false;
        this.trashdata = true;
        this.trashedNotes = [];
        this.noteService.getTrashedNotes(this.authUser.uid).subscribe(function (trashData) {
            _this.trashedNotes = trashData;
            console.log(_this.trashedNotes);
        });
    };
    HomeComponent.prototype.getNoteData = function (data, i) {
        this.getData = true;
        this.key = data.key;
        console.log(data);
        this.editNotes = [];
        console.log(this.userNotes);
        // data=Object.assign([],data)
        this.editNotes = data;
    };
    HomeComponent.prototype.onAddNoteToTrash = function (data, i) {
        if (confirm('Are you sure')) {
            var trash = this.noteService.onAddToTrash(this.authUser.uid, data);
            if (typeof data.Title === typeof undefined) {
                delete data.Title;
                // delete data.id
            }
            trash.set(__assign({}, data));
            this.noteService.removeNoteFromList(this.authUser.uid, data);
        }
        this.getNotes();
    };
    HomeComponent.prototype.getTagData = function (data) {
        var _this = this;
        this.trashdata = false;
        this.tag = true;
        this.tagData = [];
        this.userNotes;
        this.userNotes.map(function (value) {
            if (value.Title !== undefined) {
                value.Title.map(function (val) {
                    if (val.display === data.display) {
                        _this.tagData.push(value);
                    }
                });
            }
        });
    };
    HomeComponent.prototype.onItemAdded = function ($event) {
        console.log($event);
    };
    HomeComponent.prototype.onItemRemoved = function ($event) {
        console.log($event);
    };
    HomeComponent.prototype.onRemoveFromTrash = function (data, i) {
        if (confirm('Are you sure you want to permanently delete this trashed note?')) {
            this.noteService.deleteFromTrash(this.authUser.uid, data);
        }
    };
    HomeComponent.prototype.onUndoNoteFromTrash = function (note, i) {
        console.log(note);
        if (confirm('Sure to restore trashed note?')) {
            this.noteService.onUndoNote(this.authUser.uid, note);
            this.noteService.deleteFromTrash(this.authUser.uid, note);
            this.trashedNotes = [];
        }
    };
    HomeComponent.prototype.onEmptyTrash = function () {
        if (confirm('Are you sure you want to permanently delete your trashed notes?')) {
            this.noteService.onDeleteTrash(this.authUser.uid);
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_note_service__["a" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".google {\n    background-color: #dd4b39 !important;\n    color:white;\n}\n.facebook {\n    background-color: #006699 !important;\n}\n.login{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\theight: 70vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t\t<div class=\"well well-sm \">\n\t\t\t\t\t<p class=\"panel-heading text-center\"><span><h2>Welcome to NoteApp</h2></span></p>\n\t\t\t\t\t<div class=\"panel-heading text-center\">\n\t\t\t\t\t\t<span><h3>SignIn to continue..</h3></span>\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body socialLogin\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary  facebook\" (click)=\"signInWithFacebook()\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tSignIn with Facebook\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"btn google \" (click)=\"signInWithGoogle()\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\tSignIn with Google\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['']);
            }
        });
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authService.signInWithFacebook()
            .then(function (res) {
            console.log(res);
            _this.router.navigate(['']);
        })
            .catch(function (err) {
            console.log(err);
            // this.router.navigate(['/login'])
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function (res) {
            console.log(res);
            _this.router.navigate(['']);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trash{\n\tpadding: 3px 20px;\n}\n.nav{\n\tmargin-bottom: 0px;\n}\n@media only screen and (max-width: 768px){\n\t.dropdown{\n\t\tmargin-right: 15px;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<nav class=\"navbar navbar-default nav\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<ul class=\"nav navbar-nav pull-right\">\n\t\t\t\t<li *ngIf = 'isLoggedIn ' class=\"dropdown\"><a href=\"\" class=\"dropdown-toggle\" data-toggle='dropdown'>{{isLoggedInUser}}<span class=\"caret\"></span></a>\n\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t<li *ngIf = 'isLoggedIn'><a href=\"#\" (click) = \"onLogout()\"><span class=\"glyphicon glyphicon glyphicon-off\"></span> Logout</a>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_note_service__ = __webpack_require__("../../../../../src/app/services/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, noteService, router) {
        this.authService = authService;
        this.noteService = noteService;
        this.router = router;
        this.isLoggedIn = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            // console.log(auth)
            if (auth) {
                _this.isLoggedIn = true;
                _this.isLoggedInUser = auth.displayName;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_note_service__["a" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(angularFireAuth, router, authService) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.authService = authService;
        this.isAuthorised = false;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.angularFireAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(angularFireAuth, router) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
    }
    AuthService.prototype.getAuth = function () {
        return this.angularFireAuth.authState;
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/note.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoteService = (function () {
    function NoteService(angularFire, router) {
        this.angularFire = angularFire;
        this.router = router;
        this.user = this.angularFire.list('/user'),
            this.trash = this.angularFire.list('/trash');
    }
    NoteService.prototype.addNote = function (id, n) {
        var note = this.angularFire.list("/user/" + id + "/notes/");
        return note.push(__assign({}, n));
    };
    NoteService.prototype.getNotes = function (id) {
        return this.angularFire.list("/user/" + id + "/notes/")
            .snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        });
    };
    NoteService.prototype.onAddToTrash = function (id, i) {
        return this.angularFire.object("/user/" + id + "/trash/" + i.key);
    };
    NoteService.prototype.removeNoteFromList = function (id, i) {
        return this.angularFire.object("user/" + id + "/notes/" + i.key).remove();
    };
    NoteService.prototype.deleteFromTrash = function (id, n) {
        return this.angularFire.object("user/" + id + "/trash/" + n.key).remove();
    };
    NoteService.prototype.getTrashedNotes = function (id) {
        return this.angularFire.list("user/" + id + "/trash/").snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        });
    };
    NoteService.prototype.onUpdateNote = function (id, n, k) {
        this.angularFire.object("user/" + id + "/notes/" + k).update(n);
        console.log(n);
        return;
    };
    NoteService.prototype.onDelete = function (id, i) {
        console.log(id);
        console.log(i);
        return this.angularFire.object("user/" + id + "/notes/" + i.key).remove();
    };
    NoteService.prototype.onUndoNote = function (id, note) {
        console.log(id);
        console.log(note.key);
        var nt = this.angularFire.object("user/" + id + "/notes/" + note.key);
        // delete note.key
        return nt.set(note);
    };
    NoteService.prototype.onDeleteTrash = function (id) {
        return this.angularFire.object("/user/" + id + "/trash").remove();
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NoteService);
    return NoteService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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