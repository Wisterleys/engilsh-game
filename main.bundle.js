webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\r\n<top-root></top-root>\r\n<div *ngIf=\"jogoRolando; else fimDeJogo\">\r\n    <app-painel (emitter)=\"emitter($event)\"></app-painel>\r\n</div>\r\n<ng-template #fimDeJogo>\r\n    <div *ngIf=\"quem==='derrota';else vencedor\">\r\n        <div class=\"alert alert-danger\" role=\"alert\">\r\n            <h4 class=\"alert-heading\">Que pena!</h4>\r\n            <p>Você perdeu! </p>\r\n            <hr>\r\n            <p class=\"mb-0\">Se desejar recomeçar click aqui <button class=\"btn btn-success\" (click)=\"reinicar()\">Recomeçar</button></p>\r\n        </div>\r\n        \r\n    </div>\r\n</ng-template>\r\n<ng-template #vencedor>\r\n    <div class=\"alert alert-success\" role=\"alert\">\r\n        <h4 class=\"alert-heading\">Parabéns!</h4>\r\n        <p>Você venceu! </p>\r\n        <hr>\r\n        <p class=\"mb-0\">Se desejar recomeçar click aqui <button class=\"btn btn-success\" (click)=\"reinicar()\">Recomeçar</button></p>\r\n    </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.jogoRolando = true;
    }
    AppComponent.prototype.emitter = function (ev) {
        this.jogoRolando = false;
        this.quem = ev;
    };
    AppComponent.prototype.reinicar = function () {
        this.quem = undefined;
        this.jogoRolando = true;
        location.reload();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__top_top_component__ = __webpack_require__("./src/app/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__ = __webpack_require__("./src/app/painel/painel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__ = __webpack_require__("./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__ = __webpack_require__("./src/app/progresso/progresso.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__top_top_component__["a" /* TopComponent */],
            __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__["a" /* PainelComponent */],
            __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__["a" /* TentativasComponent */],
            __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__["a" /* ProgressoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/painel/frases.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRASES; });
var FRASES = [
    { fraseIngles: 'I like to learn', frasePortugues: 'Eu gosto de aprender' },
    { fraseIngles: 'I watch TV', frasePortugues: 'Eu assisto TV' },
    { fraseIngles: 'How are you?', frasePortugues: 'Como você está?' },
    { fraseIngles: 'I eat bread', frasePortugues: 'Eu como pão' },
    { fraseIngles: 'What´s your address?', frasePortugues: 'Qual é seu endereço?' },
    { fraseIngles: 'What´s your name?', frasePortugues: 'Qual é seu nome?' },
    { fraseIngles: 'I live with my parents and my brother', frasePortugues: 'Eu moro com meus pais e meu irmão' }
];
//# sourceMappingURL=frases.mock.js.map

/***/ }),

/***/ "./src/app/painel/painel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: end;\r\n        justify-content: flex-end;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/painel/painel.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <div class=\"jumbotron bg-light p-5 m-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <app-progresso [progresso]=\"progresso\"></app-progresso>\r\n        </div>\r\n        <div class=\"col-sm-6 flex\">\r\n            <app-tentativas [tentativas]=\"tentativas\" ></app-tentativas>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h6>Traduza a frase:</h6>\r\n        <p>{{fraseEng}}</p>\r\n        <div class=\"form-group\">\r\n            <textarea class=\"form-control\"  rows=\"3\" (input)='words($event)'></textarea>\r\n            \r\n        </div>\r\n    </div>\r\n    <div class=\"row mt-2\">\r\n       <div class=\"col flex\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)='impFrase()'>Verificar</button>\r\n       </div>\r\n    </div>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frases_mock__ = __webpack_require__("./src/app/painel/frases.mock.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PainelComponent = (function () {
    function PainelComponent() {
        this.frases = __WEBPACK_IMPORTED_MODULE_1__frases_mock__["a" /* FRASES */];
        this.fraseEng = ''; //
        this.resposta = '';
        this.tentativas = 3;
        this.progresso = 0;
        this.emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.sorteio();
    }
    PainelComponent.prototype.verefica = function (frase) {
        return frase.toLocaleLowerCase() == this.resposta.toLocaleLowerCase() ? true : false;
    };
    PainelComponent.prototype.win = function () {
        var _this = this;
        this.frases = [];
        this.frases = __WEBPACK_IMPORTED_MODULE_1__frases_mock__["a" /* FRASES */];
        setTimeout(function () {
            _this.emitter.emit("vitoria");
        }, 1000);
    };
    PainelComponent.prototype.lose = function () {
        this.emitter.emit("derrota");
    };
    PainelComponent.prototype.impFrase = function () {
        if (this.frases.length > 0) {
            this.fraseEng = this.frases[this.v].fraseIngles;
            if (this.verefica(this.frases[this.v].frasePortugues)) {
                this.frases.splice(this.v, 1);
                this.progresso += 25;
            }
            else
                this.tentativas--;
            this.sorteio();
        }
        else {
            this.fraseEng = "Acabou as frases";
        }
    };
    PainelComponent.prototype.words = function (word) {
        this.resposta = word.target.value;
    };
    PainelComponent.prototype.sorteio = function () {
        if (this.progresso >= 100)
            this.win();
        else if (this.tentativas < 0)
            this.lose();
        else {
            this.v = this.getRadom(0, this.frases.length);
            this.fraseEng = this.frases[this.v].fraseIngles;
        }
    };
    PainelComponent.prototype.getRadom = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    PainelComponent.prototype.ngOnInit = function () {
    };
    PainelComponent.prototype.ngOnDestroy = function () {
        //console.log(FRASES)//Não consigo reuperar essa constante para estado inicial sem realizar reload da página
    };
    return PainelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], PainelComponent.prototype, "emitter", void 0);
PainelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-painel',
        template: __webpack_require__("./src/app/painel/painel.component.html"),
        styles: [__webpack_require__("./src/app/painel/painel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PainelComponent);

var _a;
//# sourceMappingURL=painel.component.js.map

/***/ }),

/***/ "./src/app/progresso/progresso.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress{\r\n    background-color: #EEf8da;\r\n    border: 1px solid #99ce28;\r\n}\r\n.progress-bar{\r\n    background-color: #99ce28;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/progresso/progresso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n  <div class=\"progress-bar w-{{progresso}}\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressoComponent = (function () {
    function ProgressoComponent() {
    }
    ProgressoComponent.prototype.ngOnChanges = function () {
        this.progresso;
    };
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    return ProgressoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], ProgressoComponent.prototype, "progresso", void 0);
ProgressoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-progresso',
        template: __webpack_require__("./src/app/progresso/progresso.component.html"),
        styles: [__webpack_require__("./src/app/progresso/progresso.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProgressoComponent);

//# sourceMappingURL=progresso.component.js.map

/***/ }),

/***/ "./src/app/shared/Coracoes.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coracoes; });
var Coracoes = (function () {
    function Coracoes(is_co, coracaoCheio, coracaoVazio) {
        if (coracaoCheio === void 0) { coracaoCheio = "/assets/coracao_cheio.png"; }
        if (coracaoVazio === void 0) { coracaoVazio = "/assets/coracao_vazio.png"; }
        this.is_co = is_co;
        this.coracaoCheio = coracaoCheio;
        this.coracaoVazio = coracaoVazio;
    }
    Coracoes.prototype.is = function () { return this.is_co ? this.coracaoCheio : this.coracaoVazio; };
    return Coracoes;
}());

//# sourceMappingURL=Coracoes.model.js.map

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.html":
/***/ (function(module, exports) {

module.exports = "\n<img *ngFor=\"let coracao of varios\" [src]=\"coracao.is()\" alt=\"\">\n"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_Coracoes_model__ = __webpack_require__("./src/app/shared/Coracoes.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TentativasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TentativasComponent = (function () {
    function TentativasComponent() {
        this.varios = [];
        this.init = false;
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        if (this.tentativas !== this.varios.length && this.init && this.tentativas > -1) {
            this.varios[(this.varios.length - 1) - this.tentativas]['is_co'] = false;
        }
    };
    TentativasComponent.prototype.ngOnInit = function () {
        for (var l = 0; l < this.tentativas; l++) {
            this.varios.push(new __WEBPACK_IMPORTED_MODULE_1_app_shared_Coracoes_model__["a" /* Coracoes */](true));
        }
        this.init = true;
    };
    return TentativasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], TentativasComponent.prototype, "tentativas", void 0);
TentativasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-tentativas',
        template: __webpack_require__("./src/app/tentativas/tentativas.component.html"),
        styles: [__webpack_require__("./src/app/tentativas/tentativas.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TentativasComponent);

//# sourceMappingURL=tentativas.component.js.map

/***/ }),

/***/ "./src/app/top/top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{background-color: #1cb0F6;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/top/top.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\r\n  <span class=\"navbar-brand mb-0 h1 text-light\">{{title}}</span>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/top/top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopComponent = (function () {
    function TopComponent() {
        this.title = 'Aprendendo inglês';
    }
    return TopComponent;
}());
TopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'top-root',
        template: __webpack_require__("./src/app/top/top.component.html"),
        styles: [__webpack_require__("./src/app/top/top.component.css")]
    })
], TopComponent);

//# sourceMappingURL=top.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map