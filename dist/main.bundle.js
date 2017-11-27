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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_trash_trash_component__ = __webpack_require__("../../../../../src/app/components/trash/trash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_note_service__ = __webpack_require__("../../../../../src/app/services/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseCongfig = {
    apiKey: "AIzaSyBbkw2JfHrerFtqdRsYp6HaI7bR-26sVvo",
    authDomain: "reminder-app-40b59.firebaseapp.com",
    databaseURL: "https://reminder-app-40b59.firebaseio.com",
    projectId: "reminder-app-40b59",
    storageBucket: "reminder-app-40b59.appspot.com",
    messagingSenderId: "921337961427"
};
var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'edit-note/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'trash', component: __WEBPACK_IMPORTED_MODULE_9__components_trash_trash_component__["a" /* TrashComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
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
                __WEBPACK_IMPORTED_MODULE_9__components_trash_trash_component__["a" /* TrashComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_side_bar_side_bar_component__["a" /* SideBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseCongfig),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_18_ngx_chips__["TagInputModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__services_note_service__["a" /* NoteService */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */],
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
exports.push([module.i, "h4{\n\ttext-align: center;\n\tcolor: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

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
exports.push([module.i, ".side li{\n\t/*position: absolute;\n    left: 0px;\n    bottom: 0px;\n    right: 0;\n    top: 75px;\n    overflow: auto;\n    height: auto;\n    padding-top: 0px;*/\n    margin-bottom: 5px;\n}\n.divider{\n border: 0px solid #f0f0f0;  \n margin-top: 3px;\n margin-bottom: 3px; \n}\n.getNotes{\n    margin-left: 12px;    \n}\n.trashRouter{\n    \n    margin-right: 6px;\n}\n.del{\n    position: relative;\n    left: 110%;\n    margin-top: 15px;\n}\n\n.title{\n    margin-left: 12px;\n    margin-top: 5px;\n}\n.dropdown{\n    position: absolute;\n    top: 6%;\n}\n.sidebar{\n\tposition: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 363px;\n    border-right: 1px solid #f0f0f0;\n\n}\ntextarea{\n    /*width: 100%;*/\n    left: 348px;\n    position: relative;\n    width:100%;\n    border: 1px solid #f0f0f0;\n}\n.tag-input{\n    position: absolute;\n    top: -17px;\n    left: 348px;\n    padding-left: 65px;\n    border: 1px solid #f0f0f0;\n}\n.remove{\n    color:red;\n    /*margin-right: 10px;*/\n    padding-top: 2px;   \n    padding-right: 7px;\n    position: relative;\n    right: 0;\n    top: 0;\n    display: none;\n    color: red;\n}\nli{\n    list-style: none;\n   \n}\nh4{\n    color: red;\n    margin-top: 100px;\n    text-align: center;\n}\nh3{\n    margin-top: 0px;\n}\n.tag{\n  position: absolute;\n    right: 0px;\n    left: 0px;\n    bottom: 1px;\n    top: -10px;\n    height: 15px;\n    padding-left: 65px;\n    border-bottom: 0px solid #f0f0f0;\n}\n.note{\n    position: absolute;\n    right: 0px;\n    left: 0px;\n    bottom: 0px;\n    top: 15px;\n    padding-top: 4px;\n    padding-bottom: 0px;\n    line-height: 1.4em;\n\n}\nul .tagUl{\n    list-style-type: none;\n    padding: 3px 0 3px 15px;\n    margin: 3px 0px 0px;\n    overflow: auto;\n    color: #448ac9;\n    line-height: 16px;\n}\nli .tagLi{\n    margin-left: 0;\n    position: relative;\n    top: -2px;\n}\nul.tagUl li{\n    float: left;\n    margin: 1px 4px 1px 0;\n}\n.add{\n   float: right;\n   margin-top: 15px;\n   \n}\n.noteList{\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    right: 0;\n    top: 75px;\n    overflow: auto;\n    height: auto;\n    padding-top: 0px;\n}\n.noteList li{\n    position: relative;\n    padding: 12px 10px 12px 8px\n}\n.p{\n    font-size: 16px;\n    color: #333;\n    /*padding: 0 0 0 18px;*/\n    width: 270px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.p:hover .trash {\n    display: block;\n    color: red;\n}\n.trash{\n    padding-top: 16px;   \n    padding-right: 17px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    display: none;\n    color: red;\n}\n.title:hover .remove{\n    display: block;\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\" col-xs-2 col-md-3  sidebar\">\n\t\t\t<small>\n\t\t\t\t<a (click) = \"openAddForm()\"><span class=\"glyphicon glyphicon-plus add\"></span></a>\n\t\t\t</small>\n\t\t\t<!-- <div class=\"del\" >\n\t\t\t\t<p >\n\t\t\t\t<a class=\"glyphicon glyphicon-trash\" *ngIf='showAddInput || getData' (click)=\"onRemoveNote(note,i)\" ></a>\n\t\t\t</p>\n\t\t\t</div> -->\n\t\t\t<div >\n\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t<span class=\"dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n\t\t\t\t\t\tTags\n\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<ul class=\"dropdown-menu side\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<!-- <a href=\"\" routerLink='/trash' class=\"glyphicon glyphicon-trash\">Trash</a> -->\n\t\t\t\t\t\t\t<span class=\"getNotes\"><span type='button' routerLink='/trash' class =\"trashRouter\">Trash</span></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span class=\"getNotes\"><span (click)=\"getNotes()\" >All Notes</span></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li *ngFor=\"let note of n ; let i of index\"  class=\"title\" (click)=\"getTagData(note)\" >{{note.display}}\n\t\t\t\t\t\t\t<span ><a type='button'  class =\"glyphicon glyphicon-trash pull-right remove\" (click)=\"onAddNoteToTrash(note)\"></a></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"noteList\">\n\t\t\t\t\t<div *ngIf=\"!tag\">\n\n\t\t\t\t\t\t<li *ngFor = \"let data of notesValue; let i of index\"  class=\"preview\">\n\t\t\t\t\t\t\t<p  name=\"Note\" [(ngModel)]=\"data.Note\" ngDefaultControl (click)=\"getNoteData(data,i)\" class=\"p\" id=\"noteData\">\n\t\t\t\t\t\t\t\t{{data.Note}}\n\t\t\t\t\t\t\t<span ><a type='button'  class =\"glyphicon glyphicon-trash pull-right trash\" (click)=\"onRemoveNote(data,i)\"></a></span>\n\t\t\t\t\t\t\t<!-- <a class=\"glyphicon glyphicon-trash trash\"  (click)=\"onRemoveNote(note,i)\" ></a>\t -->\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<li>{{note}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"tag\">\n\t\t\t\t\t\t<li *ngFor=\"let data of tagdata ; let i of index\">\n\t\t\t\t\t\t\t<p name=\"Note\" [(ngModel)]=\"data.Note\" ngDefaultControl (click)=\"getNoteData(data,i)\" class=\"p\" >\n\t\t\t\t\t\t\t\t\t{{data.Note}}\n\t\t\t\t\t\t\t<span ><a type='button'  class =\"glyphicon glyphicon-trash pull-right trash\" (click)=\"onRemoveNote(data,i)\"></a></span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<li>{{note}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t<!-- <div class=\"delete\">\n\t\t\t<a class=\"glyphicon glyphicon-trash\" *ngIf='showAddInput'></a>\n\t\t</div> -->\n\t\t<div class=\"container-fluid \">\n\t\t\t<div class=\" col-md-9\">\n\t\t\t\n\t\t\t\t<form #f='ngForm' (keyup)='saveNote(f)'  *ngIf='showAddInput || getData '>\n\t\t\t\t\t<!-- <div class=\"del\">\n\t\t\t\t\t\t<a class=\"glyphicon glyphicon-trash\" *ngIf='showAddInput || getData' (click)=\"onRemoveNote(note,i)\"></a>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<div class=\"tag-input\">\n\t\t\t\t\t\t<tag-input *ngIf=\"!getData\" name=\"title\" [separatorKeyCodes]=\"[32]\" [maxItems]='3' [(ngModel)]='title'\n\t\t\t\t\t\t\t\t(onRemove)=\"onItemRemoved($event)\"\n\t\t\t\t\t\t\t\t(onAdd)=\"onItemAdded($event)\"\n\t\t\t\t\t\t\t\t[editable]='true' (onTagEdited)=\"onTagEdited($event)\">\n\t\t\t\t\t\t</tag-input>\n\t\t\t\t\t\t<tag-input *ngIf=\"getData\" name=\"title\" [separatorKeyCodes]=\"[32]\" [maxItems]='3' [(ngModel)]='noteValue.Title'\n\t\t\t\t\t\t\t\t(onRemove)=\"onItemRemoved($event)\"\n\t\t\t\t\t\t\t\t(onAdd)=\"onItemAdded($event)\"\n\t\t\t\t\t\t\t\t[editable]='true' (onTagEdited)=\"onTagEdited($event)\">{{noteValue.Title}}\n\t\t\t\t\t\t</tag-input>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"note\" >\n\n\t\t\t\t\t\t<textarea *ngIf=\"!getData\" rows=\"100%\" cols=\"100%\" name=\"note\" placeholder=\"note..\" [(ngModel)]=\"note\"></textarea >\n\t\t\t\t\t\t<textarea *ngIf=\"getData\" rows=\"100%\" cols=\"100%\" name=\"Note\"  [(ngModel)]=\"noteValue.Note\" >{{noteValue.Note}}</textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<form  (keyup)='updateNote(noteValue)'  *ngIf='getData'>\n\t\t\t\t\t\t<div class=\"tag-input\">\n\t\t\t\t\t\t\t<tag-input *ngIf=\"getData\" name=\"title\" [separatorKeyCodes]=\"[32]\" [maxItems]='3' [(ngModel)]='noteValue.Title'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onRemove)=\"onItemRemoved($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onAdd)=\"onItemAdded($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[editable]='true' (onTagEdited)=\"onTagEdited($event)\">{{noteValue.Title}}\n\t\t\t\t\t\t\t</tag-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"note\" >\n\t\t\t\t\t\t\t<textarea *ngIf=\"getData\" rows=\"100%\" cols=\"100%\" name=\"Note\"  [(ngModel)]=\"noteValue.Note\" >{{noteValue.Note}}</textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

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
        this.n = [];
        this.noteData = [];
        this.notesValue = [];
        this.dataValue = [];
        this.tagdata = [];
        this.tag = false;
        this.getData = false;
        this.showAddInput = false;
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    HomeComponent.prototype.getNotes = function () {
        var _this = this;
        this.tag = false;
        this.noteService.getNotes(this.authUser.uid).valueChanges().subscribe(function (data) {
            // console.log(data)
            _this.n = [];
            _this.dataValue = [];
            _this.notesValue = [];
            Object.keys(data).forEach(function (val) {
                var $key = val;
                var note = data[val].Note;
                var title = data[val].Title;
                var Id = data[val].id;
                _this.notesValue.push({ key: $key, Note: note, Title: title, id: Id });
            });
            // console.log(this.notesValue)
            if (typeof data === typeof null) {
                Object.keys(data).forEach(function (key) {
                    var $key = key;
                    var note = data[key].Note;
                    var title = data[key].Title;
                    var Id = data[key].id;
                    if (typeof data[key].Title !== typeof undefined) {
                        var $key_1 = key;
                        var note_1 = data[key].Note;
                        var title_1 = data[key].Title;
                        var Id_1 = data[key].id;
                        _this.noteData.push({ key: $key_1, Note: note_1, Title: title_1, id: Id_1 });
                        // console.log(this.noteData)
                        data[key].Title.forEach(function (t) {
                            _this.n.push(t);
                        });
                        _this.n = __WEBPACK_IMPORTED_MODULE_5_lodash__["uniqBy"](_this.n, 'display');
                        // console.log(this.n)
                    }
                    _this.dataValue.push({ key: $key, Note: note, Title: title, id: Id });
                });
                // console.log(this.dataValue)
            }
        });
    };
    HomeComponent.prototype.saveNote = function (f) {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.onAddNote(f);
        }, 5000);
    };
    HomeComponent.prototype.onAddNote = function (f) {
        var notes = {};
        notes.Title = f.value.title;
        notes.Note = f.value.note;
        if (typeof notes.Title === typeof undefined) {
            delete notes.Title;
        }
        debugger;
        if (notes.Note && notes.Note !== "") {
            this.noteService.addNote(this.authUser.uid, notes);
        }
    };
    HomeComponent.prototype.onItemAdded = function ($event) {
        console.log($event);
    };
    HomeComponent.prototype.onItemRemoved = function ($event) {
        console.log($event);
    };
    HomeComponent.prototype.onAddNoteToTrash = function (note) {
        if (confirm('Are you sure ?')) {
            this.noteService.onAddToTrash(this.authUser.uid, note);
        }
    };
    HomeComponent.prototype.getTagData = function (tag) {
        var _this = this;
        debugger;
        this.tagdata = [];
        this.noteData.map(function (obj) {
            console.log(obj);
            obj.Title.map(function (val) {
                // console.log(val)
                if (tag.display === val.display) {
                    debugger;
                    _this.tag = true;
                    // console.log(tag.display,val.display)
                    _this.tagdata.push(__assign({}, obj));
                    console.log(_this.tagdata);
                }
            });
        });
    };
    HomeComponent.prototype.onRemoveNote = function (note, i) {
        // this.noteService.onDeleteNote(this.authUser.uid,note)
        console.log(note);
        if (confirm('Are you sure?')) {
            this.noteService.onDelete(this.authUser.uid, note);
        }
    };
    HomeComponent.prototype.getNoteData = function (nt, i) {
        var _this = this;
        // console.log(nt)
        // console.log(this.dataValue)
        this.dataValue.map(function (a) {
            // console.log(a)
            if (nt.id === a.id) {
                _this.getData = true;
                _this.noteValue = nt;
                // console.log(this.noteValue)
            }
        });
        // if(nt.id === this.dataValue.id){}
        // this.noteService.onUpdateNote(this.authUser.uid,this.noteValue)
    };
    HomeComponent.prototype.updateNote = function (n) {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.update(n);
        }, 5000);
    };
    HomeComponent.prototype.update = function (n) {
        debugger;
        console.log(n);
        var key = n.key;
        delete n.key;
        if (typeof n.Title === typeof undefined) {
            delete n.Title;
        }
        if (n.Note !== "") {
            this.noteService.onUpdateNote(this.authUser.uid, n, key);
        }
    };
    HomeComponent.prototype.openAddForm = function () {
        this.getData = false;
        this.showAddInput = true;
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
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authService.signInWithFacebook()
            .then(function (res) {
            console.log(res);
            _this.router.navigate(['/home']);
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
            _this.router.navigate(['/home']);
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
exports.push([module.i, ".trash{\n\tpadding: 3px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<nav class=\"navbar navbar-default \">\n\t\t<div class=\"container-fluid\">\n\t\t\t<ul class=\"nav navbar-nav pull-right\">\n\t\t\t\t<li *ngIf = 'isLoggedIn ' class=\"dropdown\"><a href=\"\" class=\"dropdown-toggle\" data-toggle='dropdown'>{{isLoggedInUser}}<span class=\"caret\"></span></a>\n\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t<li *ngIf = 'isLoggedIn'><a href=\"#\" (click) = \"onLogout()\"><span class=\"glyphicon glyphicon glyphicon-off\"></span> Logout</a>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</div>"

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
        this.router.navigate(['/']);
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

/***/ "../../../../../src/app/components/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4{\n\ttext-align: center;\n\tcolor: red;\n}\n.title{\n\tlist-style: none;\n\ttext-align: center;\n\tmargin-bottom: 10px;\n}\n\nh3{\n\ttext-align: center;\n}\n.side{\n\t/*background-color: #f1f1f1;\n\t position: absolute;\n    height: 100%;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side\">\n<div class=\"row\">\n\t<div class=\"noteList\">\n\t\t<span><h3>List of Notes</h3></span>\n\t\t<div *ngIf ='n.length >0;else noNote'>\n\n\t\t\t<ul class=\"side\">\n\t\t\t\t<li *ngFor=\"let note of n; let i of index \"  class=\"title\" ><b>{{note.Title}}</b>\n\t\t\t\t\t<span><a class=\"glyphicon glyphicon-remove remove pull-right\" (click)=\"onDeleteNote(note)\"></a></span>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n<ng-template #noNote>\n\t<h4>No notes to display</h4>\n</ng-template>\n<!-- [routerLink] =\"['/edit-note/'+note.key]\" -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_note_service__ = __webpack_require__("../../../../../src/app/services/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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




var SideBarComponent = (function () {
    function SideBarComponent(authService, noteService, router) {
        var _this = this;
        this.authService = authService;
        this.noteService = noteService;
        this.router = router;
        this.notes = {};
        this.n = [];
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
        });
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getNotes(this.authUser.uid).valueChanges().subscribe(function (data) {
            console.log(data);
            _this.refresh();
            Object.keys(data).forEach(function (key) {
                var $key = key;
                var note = data[key].Note;
                var title = data[key].Title;
                _this.n.push({ key: $key, Note: note, Title: title });
                console.log(_this.n);
            });
        });
    };
    SideBarComponent.prototype.onDeleteNote = function (note) {
        if (confirm('are you sure?')) {
            // this.noteService.onRemove(this.authUser.uid,note);
        }
    };
    SideBarComponent.prototype.refresh = function () {
        this.noteService.getNotes(this.authUser.uid);
        this.n = [];
    };
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_note_service__["a" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/trash/trash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side{\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    right: 0;\n    top: 75px;\n    overflow: auto;\n    height: auto;\n    padding-top: 0px;\n}\n.sidebar{\n\tposition: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 363px;\n    border-right: 1px solid #f0f0f0;\n\n}\ntextarea{\n    /*width: 100%;*/\n    height:100%;\n}\n.remove{\n    color:red;\n    margin-right: 10px;\n   \n}\nh5{\n    color: red;\n    margin-top: 100px;\n    text-align: center;\n\n}\nli{\n    list-style: none;\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/trash/trash.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\" col-md-3  sidebar\">\n\t\t\t<div *ngIf ='trashedNotes.length >0;else noNote'>\n\t\t\t\t<ul class=\"side\">\n\t\t\t\t\t<li *ngFor=\"let tnote of trashedNotes; let i of index \"  class=\"title\" ><b>{{tnote.Note}}</b>\n\t\t\t\t\t\t<span><a class=\"glyphicon glyphicon-trash remove pull-right\" (click)=\"onRemoveNoteFromTrash(tnote)\"></a></span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<ng-template #noNote>\n\t<h5>No notes to show</h5>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/trash/trash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrashComponent; });
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




var TrashComponent = (function () {
    function TrashComponent(authService, noteService, router) {
        var _this = this;
        this.authService = authService;
        this.noteService = noteService;
        this.router = router;
        this.n = [];
        this.trashedNotes = [];
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
        });
    }
    TrashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getTrashedNotes(this.authUser.uid).valueChanges().subscribe(function (data) {
            console.log(data);
            _this.trashData();
            if (typeof data !== typeof null) {
                Object.keys(data).forEach(function (key) {
                    var $key = key;
                    var note = data[key].Note;
                    _this.trashedNotes.push({ key: $key, Note: note });
                });
                console.log(_this.trashedNotes);
            }
        });
    };
    TrashComponent.prototype.onRemoveNoteFromTrash = function (note) {
        debugger;
        if (confirm('Note will be deleted permanently, Sure to continue?')) {
            this.noteService.deleteFromTrash(this.authUser.uid, note);
        }
    };
    TrashComponent.prototype.trashData = function () {
        this.noteService.getTrashedNotes(this.authUser.uid);
        this.trashedNotes = [];
    };
    TrashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trash',
            template: __webpack_require__("../../../../../src/app/components/trash/trash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/trash/trash.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_note_service__["a" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], TrashComponent);
    return TrashComponent;
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
    function AuthGuard(angularFireAuth, router) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.angularFireAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['']);
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
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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
        // this.notes=this.angularFire.object('/notes')
    }
    NoteService.prototype.addNote = function (id, n) {
        debugger;
        var note = this.angularFire.list("/user/" + id + "/notes/");
        note.push(__assign({}, n, { id: new Date().valueOf() }));
    };
    NoteService.prototype.getNotes = function (id) {
        return this.angularFire.object("/user/" + id + "/notes/");
    };
    NoteService.prototype.onAddToTrash = function (id, i) {
        // const trash= this.angularFire.object(`/user/${id}/trash/${i.key}`)
        //  trash.set({...i})
        //  console.log(i)
        return this.angularFire.object("user/" + id + "/notes/" + i.key).remove();
    };
    NoteService.prototype.deleteFromTrash = function (id, n) {
        return this.angularFire.object("user/" + id + "/trash/" + n.key).remove();
    };
    NoteService.prototype.getTrashedNotes = function (id) {
        return this.angularFire.object("user/" + id + "/trash/");
    };
    NoteService.prototype.onUpdateNote = function (id, n, k) {
        debugger;
        console.log(n.key);
        return this.angularFire.object("user/" + id + "/notes/" + k).update(n);
    };
    NoteService.prototype.onDelete = function (id, i) {
        console.log(id);
        console.log(i);
        return this.angularFire.object("user/" + id + "/notes/" + i.key).remove();
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