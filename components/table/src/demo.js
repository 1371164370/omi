/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/demo.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_@omiu_checkbox@0.0.11@@omiu/checkbox/src/index.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_@omiu_checkbox@0.0.11@@omiu/checkbox/src/index.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "./node_modules/_omi@6.19.23@omi/dist/omi.esm.js");
/**
 * @omiu/checkbox v0.0.11 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `:host {
  display: inline-block; }

* {
  box-sizing: border-box; }

.o-checkbox {
  position: relative;
  font-size: 14px;
  line-height: 14px;
  height: 14px;
  white-space: nowrap; }
  .o-checkbox:hover {
    cursor: pointer; }

.o-checkbox__native-control:enabled:checked ~ .o-checkbox__background,
.o-checkbox__native-control:enabled:indeterminate ~ .o-checkbox__background {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160);
  opacity: 1; }

.o-checkbox__indeterminate .o-checkbox__checkmark {
  opacity: 0; }

.o-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 1;
  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  color: #ffffff; }

.o-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.78334;
  stroke-dasharray: 29.78334; }

.o-checkbox__native-control:checked ~ .o-checkbox__background .o-checkbox__checkmark-path,
.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__checkmark-path {
  stroke-dashoffset: 0; }

.o-checkbox__background {
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 45%;
  height: 45%;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1); }

.o-checkbox__background,
.o-checkbox__label {
  display: inline-block;
  height: 14px;
  vertical-align: middle; }

.o-checkbox__background {
  width: 14px; }

.o-checkbox__label {
  margin-left: 10px; }

.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1; }

.o-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border: 1px solid white;
  top: 50%;
  position: relative;
  margin-top: -1px;
  opacity: 0;
  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1); }

.o-checkbox__native-control {
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit; }

.o-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.54);
  color: white; }

.o-checkbox__native-control:disabled:checked ~ .o-checkbox__background,
.o-checkbox__native-control:disabled:indeterminate ~ .o-checkbox__background {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160);
  opacity: 0.5; }

.o-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.34);
  color: white; }

.o-checkbox__disabled .o-checkbox__label {
  color: #888; }

.o-checkbox__disabled:hover {
  cursor: not-allowed; }
`


var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeHandler = function (e) {
            if (_this.props.disabled) {
                return;
            }
            _this.fire('change', e.currentTarget.checked);
            if (_this.props.indeterminate) {
                _this.props.checked = true;
                _this.props.indeterminate = false;
                if (_this.prevProps) {
                    _this.prevProps.checked = true;
                    _this.prevProps.indeterminate = false;
                }
                _this.update(true);
            }
        };
        return _this;
    }
    Table.prototype.render = function (props) {
        return (Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", __assign({}, Object(omi__WEBPACK_IMPORTED_MODULE_0__["extractClass"])(props, 'o-checkbox', {
            'o-checkbox__disabled': props.disabled,
            'o-checkbox__indeterminate': props.indeterminate
        })),
            Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("input", __assign({ type: "checkbox", disabled: props.disabled, onChange: this.changeHandler }, extract(props, ['checked', 'value', 'indeterminate']), { class: "o-checkbox__native-control", id: "checkbox" })),
            Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "o-checkbox__background" },
                Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "o-checkbox__checkmark", viewBox: "0 0 24 24" },
                    Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { class: "o-checkbox__checkmark-path", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })),
                Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "o-checkbox__mixedmark" })),
            props.label && Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "o-checkbox__label", for: "checkbox" }, props.label)));
    };
    Table.css = css;
    Table.propTypes = {
        label: String,
        disabled: Boolean,
        indeterminate: Boolean,
        checked: Boolean,
        value: String
    };
    Table = __decorate([
        Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])('o-checkbox')
    ], Table);
    return Table;
}(omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]));
function extract(props, prop) {
    var _a;
    if (typeof prop === 'string') {
        if (props.hasOwnProperty(prop)) {
            return _a = {}, _a[prop] = props[prop], _a;
        }
    }
    else {
        var res_1 = {};
        prop.forEach(function (key) {
            if (props.hasOwnProperty(key)) {
                res_1[key] = props[key];
            }
        });
        return res_1;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Table);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/_@omiu_input@0.0.11@@omiu/input/src/index.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_@omiu_input@0.0.11@@omiu/input/src/index.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var omi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omi */ "./node_modules/_omi@6.19.26@omi/dist/omi.esm.js");
/**
 * @omiu/input v0.0.11 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


var css = `:host {
  display: inline-block; }

:host([block]) {
  display: block; }

.o-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px; }

.o-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #FFF;
  background-image: none;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }

.o-textarea__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea__inner::placeholder {
  color: #C0C4CC; }

.o-textarea__inner:hover {
  border-color: #C0C4CC; }

.o-textarea__inner:focus {
  outline: 0;
  border-color: #07c160;
  border-color: var(--o-primary, #07c160); }

.o-textarea .o-input__count {
  color: #909399;
  background: #FFF;
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  right: 10px; }

.o-textarea.is-disabled .o-textarea__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  color: #C0C4CC;
  cursor: not-allowed; }

.o-textarea.is-disabled .o-textarea__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-textarea.is-disabled .o-textarea__inner::placeholder {
  color: #C0C4CC; }

.o-textarea.is-exceed .o-textarea__inner {
  border-color: #F56C6C; }

.o-textarea.is-exceed .o-input__count {
  color: #F56C6C; }

.o-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%; }

.o-input::-webkit-scrollbar {
  z-index: 11;
  width: 6px; }

.o-input::-webkit-scrollbar:horizontal {
  height: 6px; }

.o-input::-webkit-scrollbar-thumb {
  border-radius: 5px;
  width: 6px;
  background: #b4bccc; }

.o-input::-webkit-scrollbar-corner {
  background: #fff; }

.o-input::-webkit-scrollbar-track {
  background: #fff; }

.o-input::-webkit-scrollbar-track-piece {
  background: #fff;
  width: 6px; }

.o-input .o-input__clear {
  color: #C0C4CC;
  font-size: 14px;
  cursor: pointer;
  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }

.o-input .o-input__clear:hover {
  color: #909399; }

.o-input .o-input__count {
  height: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #909399;
  font-size: 12px; }

.o-input .o-input__count .o-input__count-inner {
  background: #FFF;
  line-height: initial;
  display: inline-block;
  padding: 0 5px; }

.o-input__inner {
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%; }

.o-input__prefix,
.o-input__suffix {
  position: absolute;
  top: 0;
  -webkit-transition: all .3s;
  text-align: center;
  height: 100%;
  color: #C0C4CC; }

.o-input__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-input__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-input__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-input__inner::placeholder {
  color: #C0C4CC; }

.o-input__inner:hover {
  border-color: #C0C4CC; }

.o-input.is-active .o-input__inner,
.o-input__inner:focus {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  outline: 0; }

.o-input__suffix {
  right: 5px;
  transition: all .3s;
  pointer-events: none; }

.o-input__suffix-inner {
  pointer-events: all; }

.o-input__prefix {
  left: 5px;
  transition: all .3s; }

.o-input__icon {
  position: absolute;
  width: 35px;
  height: 100%;
  right: 0;
  top: 0;
  padding-top: 0.215em;
  text-align: center;
  color: #bfcbd9;
  transition: all .3s; }

.o-input--small .o-input__icon,
.o-input--medium .o-input__icon {
  padding-top: 0.135em; }

.o-input--mini .o-input__icon {
  padding-top: 0.125em; }

.o-input__icon.is-prefix {
  left: 0; }

.o-input.o-input-prefix input {
  padding-left: 30px; }

.o-input.o-input-suffix input {
  padding-right: 30px; }

.o-input__icon:after {
  content: '';
  height: 100%;
  width: 0;
  display: inline-block;
  vertical-align: middle; }

.o-input__validateIcon {
  pointer-events: none; }

.o-input.is-disabled .o-input__inner {
  background-color: #F5F7FA;
  border-color: #E4E7ED;
  color: #C0C4CC;
  cursor: not-allowed; }

.o-input.is-disabled .o-input__inner::-webkit-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner:-ms-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner::-ms-input-placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__inner::placeholder {
  color: #C0C4CC; }

.o-input.is-disabled .o-input__icon {
  cursor: not-allowed; }

.o-input.is-exceed .o-input__inner {
  border-color: #F56C6C; }

.o-input.is-exceed .o-input__suffix .o-input__count {
  color: #F56C6C; }

.o-input--suffix .o-input__inner {
  padding-right: 30px; }

.o-input--prefix .o-input__inner {
  padding-left: 30px; }

.o-input--medium {
  font-size: 14px; }

.o-input--medium .o-input__inner {
  height: 36px;
  line-height: 36px; }

.o-input--medium .o-input__icon {
  line-height: 36px; }

.o-input--small {
  font-size: 13px; }

.o-input--small .o-input__inner {
  height: 32px;
  line-height: 32px; }

.o-input--small .o-input__icon {
  line-height: 32px; }

.o-input--mini {
  font-size: 12px; }

.o-input--mini .o-input__inner {
  height: 28px;
  line-height: 28px; }

.o-input--mini .o-input__icon {
  line-height: 28px; }

.o-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0; }

.o-input-group > .o-input__inner {
  vertical-align: middle;
  display: table-cell; }

.o-input-group__append,
.o-input-group__prepend {
  background-color: #F5F7FA;
  color: #909399;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap; }

.o-input-group--prepend .o-input__inner,
.o-input-group__append {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0; }

.o-input-group--append .o-input__inner,
.o-input-group__prepend {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0; }

.o-input-group__append:focus,
.o-input-group__prepend:focus {
  outline: 0; }

.o-input-group__append .o-button,
.o-input-group__append .o-select,
.o-input-group__prepend .o-button,
.o-input-group__prepend .o-select {
  display: inline-block;
  margin: -10px -20px; }

.o-input-group__append button.o-button,
.o-input-group__append div.o-select .o-input__inner,
.o-input-group__append div.o-select:hover .o-input__inner,
.o-input-group__prepend button.o-button,
.o-input-group__prepend div.o-select .o-input__inner,
.o-input-group__prepend div.o-select:hover .o-input__inner {
  border-color: transparent;
  background-color: transparent;
  color: inherit;
  border-top: 0;
  border-bottom: 0; }

.o-input-group__append .o-button,
.o-input-group__append .o-input,
.o-input-group__prepend .o-button,
.o-input-group__prepend .o-input {
  font-size: inherit; }

.o-input-group__prepend {
  border-right: 0; }

.o-input-group__append {
  border-left: 0; }

.o-input-group--append .o-select .o-input.is-focus .o-input__inner,
.o-input-group--prepend .o-select .o-input.is-focus .o-input__inner {
  border-color: transparent; }

.o-input__inner::-ms-clear {
  display: none;
  width: 0;
  height: 0; }

.o-icon-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -0.5em;
  cursor: pointer;
  color: #bfcbd9;
  display: none;
  border-radius: 50%;
  width: 1em;
  height: 1em; }

.o-icon-clear:hover {
  background: #b1b4b9;
  color: white; }

.o-input:hover .o-icon-clear {
  display: block;
  cursor: pointer; }

.o-input .o-input__count {
  position: absolute;
  top: 0px;
  right: 4px; }

.o-input.is-block {
  display: block;
  width: 100%; }
`


var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onGetValue = function () {
            return _this.__$value;
        };
        _this._onSetValue = function (value) {
            _this.__$value = value;
            _this.props.value = value;
            _this.setAttribute('value', value);
        };
        _this.valueLength = 0;
        _this.handleBlur = function () {
            _this.fire('blur', _this.props.value);
        };
        _this.handleFocus = function () {
            _this.fire('focus', _this.props.value);
        };
        _this.handleChange = function (evt) {
            _this.__$value = evt.target.value;
            _this.props.value = evt.target.value;
            _this.fire('change', _this.props.value);
        };
        _this.handleInput = function (evt) {
            evt.stopPropagation();
            _this.__$value = evt.target.value;
            _this.props.value = evt.target.value;
            _this.fire('input', _this.props.value);
            if (_this.props.maxLength) {
                _this.valueLength = evt.target.value.length;
                _this.update();
            }
        };
        _this.clearInput = function () {
            _this.updateProps({
                value: ''
            });
            _this.__$value = '';
        };
        return _this;
    }
    Input.prototype.install = function () {
        this.__$value = this.props.value;
        Object.defineProperty(this, 'value', {
            get: this._onGetValue,
            set: this._onSetValue
        });
    };
    Input.prototype.focus = function () {
        this.shadowRoot.querySelector('input').focus();
    };
    Input.prototype.blur = function () {
        this.shadowRoot.querySelector('input').blur();
    };
    Input.prototype.render = function (props) {
        var _a;
        var type = props.type, size = props.size, suffixIcon = props.suffixIcon, prefixIcon = props.prefixIcon, autoComplete = props.autoComplete; props.validating; var onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave; props.trim; var otherProps = __rest(props, ["type", "size", "suffixIcon", "prefixIcon", "autoComplete", "validating", "onMouseEnter", "onMouseLeave", "trim"]);
        this._tempTagName = 'o-icon-' + (suffixIcon || prefixIcon);
        this._tempInputTagName = type === 'textarea' ? 'textarea' : 'input';
        return (Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("div", __assign({}, Object(omi__WEBPACK_IMPORTED_MODULE_0__["extractClass"])(props, 'o-input', (_a = {},
            _a["o-input--" + size] = props.size,
            _a['is-disabled'] = this.props.disabled,
            _a['o-input-suffix'] = suffixIcon,
            _a['o-input-prefix'] = prefixIcon,
            _a['is-block'] = props.block,
            _a)), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
            (prefixIcon || suffixIcon) && Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])(this._tempTagName, __assign({ css: "svg{\n            width: 1em;\n          }" }, Object(omi__WEBPACK_IMPORTED_MODULE_0__["extractClass"])(props, 'o-input__icon', {
                'is-prefix': prefixIcon,
                'is-suffix': suffixIcon
            }))),
            Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])(this._tempInputTagName, __assign({}, otherProps, { 
                // ref="input"
                type: type, class: "o-" + this._tempInputTagName + "__inner", autocomplete: autoComplete, maxLength: props.maxLength, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleInput })),
            props.clearable && Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { onClick: this.clearInput, class: "o-icon-clear", fill: "currentColor", width: "1em", height: "1em", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })),
            props.maxLength && Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "o-input__count" },
                Object(omi__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "o-input__count-inner" },
                    this.valueLength,
                    "/",
                    props.maxLength))));
    };
    Input.css = css;
    Input.defaultProps = {
        value: '',
        type: 'text',
        autosize: false,
        rows: 2,
        trim: false,
        autoComplete: 'off',
        block: false
    };
    Input.propTypes = {
        disabled: Boolean,
        type: String,
        placeholder: String,
        clearable: Boolean,
        suffixIcon: String,
        size: String,
        prefixIcon: String,
        maxLength: Number,
        autoComplete: String,
        block: Boolean,
        value: String
    };
    Input = __decorate([
        Object(omi__WEBPACK_IMPORTED_MODULE_0__["tag"])('o-input')
    ], Input);
    return Input;
}(omi__WEBPACK_IMPORTED_MODULE_0__["WeElement"]));

/* harmony default export */ __webpack_exports__["default"] = (Input);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.o-table {\n  overflow: auto; }\n\n.o-table-table {\n  background: white;\n  margin: auto;\n  padding: 5px;\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n  color: #606266;\n  font-weight: 400; }\n\n.o-table-checkbox th:first-child,\n.o-table-checkbox td:first-child {\n  padding: 2px 10px 2px; }\n\nth {\n  border-bottom: 1px solid #E0E0E0;\n  text-align: left;\n  vertical-align: middle;\n  padding: 10px 10px 10px;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 0.75rem;\n  line-height: 1.3125rem;\n  font-weight: 500;\n  background: #fafafa;\n  white-space: nowrap; }\n\nth,\ntd {\n  white-space: nowrap; }\n\nth.sticky-top {\n  position: sticky;\n  top: -1px;\n  z-index: 1000; }\n\ntable thead th.sticky-left {\n  position: sticky;\n  left: -1px;\n  z-index: 1001; }\n\ntable tbody td.sticky-left {\n  position: sticky;\n  left: -1px;\n  z-index: 999; }\n\n.o-table-border td,\n.o-table-border th {\n  border-right: 1px solid #ebeef5; }\n\n.o-table-border td:first-child,\n.o-table-border th:first-child {\n  border-left: 1px solid #ebeef5; }\n\n.o-table-border th {\n  border-top: 1px solid #ebeef5; }\n\ntr {\n  border-bottom: 1px solid #E0E0E0; }\n\ntr:hover td {\n  background: #f5f5f5; }\n\ntd {\n  text-align: left;\n  vertical-align: middle;\n  font-size: 0.875rem;\n  padding: 10px 10px 10px;\n  background: white; }\n\ntd.compact,\nth.compact {\n  padding: 4px 10px 4px; }\n\na {\n  text-decoration: none; }\n\n.o-table-align-left {\n  text-align: left; }\n\n.o-table-align-center {\n  text-align: center; }\n\no-checkbox {\n  height: 20px;\n  vertical-align: middle; }\n\n.o-table-align-right {\n  text-align: right; }\n\na,\na:link,\na:visited,\na:active {\n  text-decoration: none;\n  color: inherit; }\n\na:hover {\n  color: #07c160;\n  color: var(--o-primary, #07c160); }\n\no-checkbox {\n  margin-right: 5px; }\n\n.o-table-stripe tr:nth-of-type(odd) {\n  background: white; }\n\n.o-table-stripe tr:nth-of-type(even) {\n  background: #fafafa; }\n\n.slide-fade-enter-active {\n  transition: all .3s ease; }\n\n.slide-fade-leave-active {\n  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1); }\n\n.slide-fade-enter,\n.slide-fade-leave-to {\n  transform: translateX(-40px);\n  opacity: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/_omi@6.19.23@omi/dist/omi.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/_omi@6.19.23@omi/dist/omi.esm.js ***!
  \*******************************************************/
/*! exports provided: default, tag, WeElement, Component, render, h, createElement, options, define, cloneElement, getHost, rpx, defineElement, classNames, extractClass, createRef, o, elements, $, extend, get, set, bind, unbind, JSONProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeElement", function() { return WeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "define", function() { return define; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHost", function() { return getHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rpx", function() { return rpx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineElement", function() { return defineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractClass", function() { return extractClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbind", function() { return unbind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONProxy", function() { return JSONPatcherProxy; });
/**
 * Omi v6.19.23  http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

function getGlobal() {
  if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
    return self || window || global || function () {
      return this;
    }();
  }
  return global;
}

/** Global options
 *  @public
 *  @namespace options {Object}
 */
var options = {
  store: null,
  root: getGlobal(),
  mapping: {},
  isMultiStore: false,
  //when set true, using props of hypescript, don't use getAttribute
  //if you render all the node tree by omi self, set it
  ignoreAttrs: false
};

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function () {
  if (
  // No Reflect, no classes, no need for shim because native custom elements
  // require ES2015 classes or Reflect.
  window.Reflect === undefined || window.customElements === undefined ||
  // The webcomponentsjs custom elements polyfill doesn't require
  // ES2015-compatible construction (`super()` or `Reflect.construct`).
  window.customElements.hasOwnProperty('polyfillWrapFlushCallback')) {
    return;
  }
  var BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = function HTMLElement() {
    return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();

function cssToDom(css) {
  var node = document.createElement('style');
  node.textContent = css;
  return node;
}

function camelCase(str) {
  return str.replace(/-(\w)/g, function ($, $1) {
    return $1.toUpperCase();
  });
}

function Fragment(props) {
  return props.children;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/** Invoke or update a ref, depending on whether it is a function or object ref.
 *  @param {object|function} [ref=null]
 *  @param {any} [value]
 */
function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 * @type {(callback: function) => void}
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function getUse(data, paths, out, name) {
  var obj = [];
  paths.forEach(function (path, index) {
    var isPath = typeof path === 'string';
    if (isPath) {
      obj[index] = getTargetByPath(data, path);
    } else {
      var key = Object.keys(path)[0];
      var value = path[key];
      if (typeof value === 'string') {
        obj[index] = getTargetByPath(data, value);
      } else {
        var tempPath = value[0];
        if (typeof tempPath === 'string') {
          var tempVal = getTargetByPath(data, tempPath);
          obj[index] = value[1] ? value[1](tempVal) : tempVal;
        } else {
          var args = [];
          tempPath.forEach(function (path) {
            args.push(getTargetByPath(data, path));
          });
          obj[index] = value[1].apply(null, args);
        }
      }
      obj[key] = obj[index];
    }
  });
  if (out) out[name] = obj;
  return obj;
}

function pathToArr(path) {
  if (typeof path !== 'string' || !path) return [];
  // return path.split(/\.|\[|\]/).filter(name => !!name)
  return path.replace(/]/g, '').replace(/\[/g, '.').split('.');
}

function getTargetByPath(origin, path) {
  var arr = pathToArr(path);
  var current = origin;
  for (var i = 0, len = arr.length; i < len; i++) {
    current = current[arr[i]];
  }
  return current;
}

var hyphenateRE = /\B([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
}

function getValByPath(path, current) {
  var arr = pathToArr(path);
  arr.forEach(function (prop) {
    current = current[prop];
  });
  return current;
}

function getPath(obj, out, name) {
  var result = {};
  obj.forEach(function (item) {
    if (typeof item === 'string') {
      result[item] = true;
    } else {
      var tempPath = item[Object.keys(item)[0]];
      if (typeof tempPath === 'string') {
        result[tempPath] = true;
      } else {
        if (typeof tempPath[0] === 'string') {
          result[tempPath[0]] = true;
        } else {
          tempPath[0].forEach(function (path) {
            return result[path] = true;
          });
        }
      }
    }
  });
  if (out) out[name] = result;
  return result;
}

function removeItem(item, arr) {
  if (!arr) return;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      break;
    }
  }
}

var stack = [];

function h(nodeName, attributes) {
  var children = [],
      lastSimple,
      child,
      simple,
      i;
  for (i = arguments.length; i-- > 2;) {
    stack.push(arguments[i]);
  }
  if (attributes && attributes.children != null) {
    if (!stack.length) stack.push(attributes.children);
    delete attributes.children;
  }
  while (stack.length) {
    if ((child = stack.pop()) && child.pop !== undefined) {
      for (i = child.length; i--;) {
        stack.push(child[i]);
      }
    } else {
      if (typeof child === 'boolean') child = null;

      if (simple = typeof nodeName !== 'function') {
        if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
      }

      if (simple && lastSimple) {
        children[children.length - 1] += child;
      } else if (children.length === 0) {
        children = [child];
      } else {
        children.push(child);
      }

      lastSimple = simple;
    }
  }

  if (nodeName === Fragment) {
    return children;
  }

  var p = {
    nodeName: nodeName,
    children: children,
    attributes: attributes == null ? undefined : attributes,
    key: attributes == null ? undefined : attributes.key

    // if a "vnode hook" is defined, pass every created VNode to it
  };if (options.vnode !== undefined) options.vnode(p);

  return p;
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node      DOM Node to compare
 * @param {VNode} vnode      Virtual DOM node to compare
 * @param {boolean} [hydrating=false]  If true, ignores component constructors when comparing.
 * @private
 */
function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }
  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  } else if (typeof vnode.nodeName === 'function') {
    return options.mapping[node.nodeName.toLowerCase()] === vnode.nodeName;
  }
  return hydrating || node._componentConstructor === vnode.nodeName;
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 *
 * @param {Element} node  A DOM Element to inspect the name of.
 * @param {String} nodeName  Unnormalized name to compare against.
 */
function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

var extension = {};

function extend$1(name, handler) {
  extension['o-' + name] = handler;
}

function set(origin, path, value) {
  var arr = pathToArr(path);
  var current = origin;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (i === len - 1) {
      current[arr[i]] = value;
    } else {
      current = current[arr[i]];
    }
  }
}

function get(origin, path) {
  var arr = pathToArr(path);
  var current = origin;
  for (var i = 0, len = arr.length; i < len; i++) {
    current = current[arr[i]];
  }

  return current;
}

function eventProxy(e) {
  return this._listeners[e.type](e);
}

function bind(el, type, handler) {
  el._listeners = el._listeners || {};
  el._listeners[type] = handler;
  el.addEventListener(type, eventProxy);
}

function unbind(el, type) {
  el.removeEventListener(type, eventProxy);
}

/**
 * Create an element with the given nodeName.
 * @param {string} nodeName The DOM node to create
 * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
 *  namespace.
 * @returns {Element} The created DOM node
 */
function createNode(nodeName, isSvg) {
  /** @type {Element} */
  var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
  node.normalizedNodeName = nodeName;
  return node;
}

/**
 * Remove a child node from its parent if attached.
 * @param {Node} node The node to remove
 */
function removeNode(node) {
  var parentNode = node.parentNode;
  if (parentNode) parentNode.removeChild(node);
}

/**
 * Set a named attribute on the given Node, with special behavior for some names
 * and event handlers. If `value` is `null`, the attribute/handler will be
 * removed.
 * @param {Element} node An element to mutate
 * @param {string} name The name/key to set, such as an event or attribute name
 * @param {*} old The last value that was set for this name/node pair
 * @param {*} value An attribute value, such as a function to be used as an
 *  event handler
 * @param {boolean} isSvg Are we currently diffing inside an svg?
 * @private
 */
function setAccessor(node, name, old, value, isSvg, component) {
  if (name === 'className') name = 'class';

  if (name[0] == 'o' && name[1] == '-') {
    if (extension[name]) {
      extension[name](node, value, component);
    }
  } else if (name === 'key') {
    // ignore
  } else if (name === 'ref') {
    applyRef(old, null);
    applyRef(value, node);
  } else if (name === 'class' && !isSvg) {
    node.className = value || '';
  } else if (name === 'style') {
    if (!value || typeof value === 'string' || typeof old === 'string') {
      node.style.cssText = value || '';
    }
    if (value && typeof value === 'object') {
      if (typeof old !== 'string') {
        for (var i in old) {
          if (!(i in value)) node.style[i] = '';
        }
      }
      for (var i in value) {
        node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
      }
    }
  } else if (name === 'dangerouslySetInnerHTML') {
    if (value) node.innerHTML = value.__html || '';
  } else if (name[0] == '_' && name[1] == 'o' && name[2] == 'n' && node.constructor.is === 'WeElement') {
    bindEvent(node, name.replace('_', ''), value, old);
  } else if (name[0] == 'o' && name[1] == 'n') {
    bindEvent(node, name, value, old);
  } else if (node.nodeName === 'INPUT' && name === 'value') {
    node[name] = value == null ? '' : value;
  } else if (name !== 'list' && name !== 'type' && name !== 'css' && !isSvg && name in node && value !== '') {
    //value !== '' fix for selected, disabled, checked with pure element
    // Attempt to set a DOM property to the given value.
    // IE & FF throw for certain property-value combinations.
    try {
      node[name] = value == null ? '' : value;
    } catch (e) {}
    if ((value == null || value === false) && name != 'spellcheck') node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
  } else {
    var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
    // spellcheck is treated differently than all other boolean values and
    // should not be removed when the value is `false`. See:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
    if (value == null || value === false) {
      if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
    } else if (typeof value !== 'function') {
      if (ns) {
        node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);
      } else {
        node.pureSetAttribute ? node.pureSetAttribute(name, value) : node.setAttribute(name, value);
      }
    }
  }
}

/**
 * Proxy an event to hooked event handlers
 * @param {Event} e The event object from the browser
 * @private
 */
function eventProxy$1(e) {
  return this._listeners[e.type](options.event && options.event(e) || e);
}

function bindEvent(node, name, value, old) {
  var useCapture = name !== (name = name.replace(/Capture$/, ''));
  var nameLower = name.toLowerCase();
  name = (nameLower in node ? nameLower : name).slice(2);
  if (value) {
    if (!old) {
      node.addEventListener(name, eventProxy$1, useCapture);
    }
  } else {
    node.removeEventListener(name, eventProxy$1, useCapture);
  }
(node._listeners || (node._listeners = {}))[name] = value;
}

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *  @param {Element} [dom=null]    A DOM node to mutate into the shape of the `vnode`
 *  @param {VNode} vnode      A VNode (with descendants forming a tree) representing the desired DOM structure
 *  @returns {Element} dom      The created/mutated element
 *  @private
 */
function diff(dom, vnode, parent, component, updateSelf) {
  //first render return undefined
  if (!dom && !vnode) return;
  // diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
  var ret;
  if (!diffLevel++) {
    // when first starting the diff, check if we're diffing an SVG or within an SVG
    isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

    // hydration is indicated by the existing element to be diffed not having a prop cache
    hydrating = dom != null && !('prevProps' in dom);
  }
  if (vnode && vnode.nodeName === Fragment) {
    vnode = vnode.children;
  }
  if (isArray(vnode)) {
    if (parent) {
      //don't use css and props.css when using h.f
      innerDiffNode(parent, vnode, hydrating, component, updateSelf);
    } else {
      ret = [];
      vnode.forEach(function (item, index) {
        var ele = idiff(index === 0 ? dom : null, item, component, updateSelf);
        ret.push(ele);
      });
    }
  } else {
    if (isArray(dom)) {
      dom.forEach(function (one, index) {
        if (index === 0) {
          ret = idiff(one, vnode, component, updateSelf);
        } else {
          recollectNodeTree(one, false);
        }
      });
    } else {
      ret = idiff(dom, vnode, component, updateSelf);
    }
    // append the element if its a new parent
    if (parent && ret.parentNode !== parent) parent.appendChild(ret);
  }

  // diffLevel being reduced to 0 means we're exiting the diff
  if (! --diffLevel) {
    hydrating = false;
    // invoke queued componentDidMount lifecycle methods
  }

  return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, component, updateSelf) {
  if (dom && vnode && dom.props) {
    dom.props.children = vnode.children;
  }
  var out = dom,
      prevSvgMode = isSvgMode;

  // empty values (null, undefined, booleans) render as empty Text nodes
  if (vnode == null || typeof vnode === 'boolean') vnode = '';

  // Fast case: Strings & Numbers create/update Text nodes.
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    // update if it's already a Text node:
    if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || component)) {
      /* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
      if (dom.nodeValue != vnode) {
        dom.nodeValue = vnode;
      }
    } else {
      // it wasn't a Text node: replace it with one and recycle the old Element
      out = document.createTextNode(vnode);
      if (dom) {
        if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
        recollectNodeTree(dom, true);
      }
    }

    out['prevProps'] = true;

    return out;
  }

  // If the VNode represents a Component, perform a component diff:
  var vnodeName = vnode.nodeName;
  if (typeof vnodeName === 'function') {
    for (var key in options.mapping) {
      if (options.mapping[key] === vnodeName) {
        vnodeName = key;
        vnode.nodeName = key;
        break;
      }
    }
  }
  // Tracks entering and exiting SVG namespace when descending through the tree.
  isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

  // If there's no existing element or it's the wrong type, create a new one:
  vnodeName = String(vnodeName);
  if (!dom || !isNamedNode(dom, vnodeName)) {
    out = createNode(vnodeName, isSvgMode);

    if (dom) {
      // move children into the replacement node
      while (dom.firstChild) {
        out.appendChild(dom.firstChild);
      } // if the previous Element was mounted into the DOM, replace it inline
      if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

      // recycle the old element (skips non-Element node types)
      recollectNodeTree(dom, true);
    }
  }

  var fc = out.firstChild,
      props = out['prevProps'],
      vchildren = vnode.children;

  if (props == null) {
    props = out['prevProps'] = {};
    for (var a = out.attributes, i = a.length; i--;) {
      props[a[i].name] = a[i].value;
    }
  }

  // Optimization: fast-path for elements containing a single TextNode:
  if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
    if (fc.nodeValue != vchildren[0]) {
      fc.nodeValue = vchildren[0];
    }
  }
  // otherwise, if there are existing or new children, diff them:
  else if (vchildren && vchildren.length || fc != null) {
      if (!(out.constructor.is == 'WeElement' && out.constructor.noSlot)) {
        innerDiffNode(out, vchildren, hydrating || props.dangerouslySetInnerHTML != null, component, updateSelf);
      }
    }

  // Apply attributes/props from VNode to the DOM Element:
  diffAttributes(out, vnode.attributes, props, component, updateSelf);
  if (out.props) {
    out.props.children = vnode.children;
  }
  // restore previous SVG mode: (in case we're exiting an SVG namespace)
  isSvgMode = prevSvgMode;

  return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *  @param {Element} dom      Element whose children should be compared & mutated
 *  @param {Array} vchildren    Array of VNodes to compare to `dom.childNodes`
 *  @param {Boolean} isHydrating  If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, isHydrating, component, updateSelf) {
  var originalChildren = dom.childNodes,
      children = [],
      keyed = {},
      keyedLen = 0,
      min = 0,
      len = originalChildren.length,
      childrenLen = 0,
      vlen = vchildren ? vchildren.length : 0,
      j,
      c,
      f,
      vchild,
      child;

  // Build up a map of keyed children and an Array of unkeyed children:
  if (len !== 0) {
    for (var i = 0; i < len; i++) {
      var _child = originalChildren[i],
          props = _child['prevProps'],
          key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
      if (key != null) {
        keyedLen++;
        keyed[key] = _child;
      } else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
        children[childrenLen++] = _child;
      }
    }
  }

  if (vlen !== 0) {
    for (var i = 0; i < vlen; i++) {
      vchild = vchildren[i];
      child = null;

      // attempt to find a node based on key matching
      var key = vchild.key;
      if (key != null) {
        if (keyedLen && keyed[key] !== undefined) {
          child = keyed[key];
          keyed[key] = undefined;
          keyedLen--;
        }
      }
      // attempt to pluck a node of the same type from the existing children
      else if (!child && min < childrenLen) {
          for (j = min; j < childrenLen; j++) {
            if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
              child = c;
              children[j] = undefined;
              if (j === childrenLen - 1) childrenLen--;
              if (j === min) min++;
              break;
            }
          }
        }

      // morph the matched/found/created DOM child to match vchild (deep)
      child = idiff(child, vchild, component, updateSelf);

      f = originalChildren[i];
      if (child && child !== dom && child !== f) {
        if (f == null) {
          dom.appendChild(child);
        } else if (child === f.nextSibling) {
          removeNode(f);
        } else {
          dom.insertBefore(child, f);
        }
      }
    }
  }

  // remove unused keyed children:
  if (keyedLen) {
    for (var i in keyed) {
      if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
    }
  }

  // remove orphaned unkeyed children:
  while (min <= childrenLen) {
    if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
  }
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *  @param {Node} node            DOM node to start unmount/removal from
 *  @param {Boolean} [unmountOnly=false]  If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
  // If the node's VNode had a ref function, invoke it with null here.
  // (this is part of the React spec, and smart for unsetting references)
  if (node['prevProps'] != null && node['prevProps'].ref) {
    if (typeof node['prevProps'].ref === 'function') {
      node['prevProps'].ref(null);
    } else if (node['prevProps'].ref.current) {
      node['prevProps'].ref.current = null;
    }
  }

  if (unmountOnly === false || node['prevProps'] == null) {
    removeNode(node);
  }

  removeChildren(node);
}

/** Recollect/unmount all children.
 *  - we use .lastChild here because it causes less reflow than .firstChild
 *  - it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
  node = node.lastChild;
  while (node) {
    var next = node.previousSibling;
    recollectNodeTree(node, true);
    node = next;
  }
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *  @param {Element} dom    Element with attributes to diff `attrs` against
 *  @param {Object} attrs    The desired end-state key-value attribute pairs
 *  @param {Object} old      Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old, component, updateSelf) {
  var name;
  //let update = false
  var isWeElement = dom.update;
  var oldClone;
  if (dom.receiveProps) {
    oldClone = Object.assign({}, old);
  }
  // remove attributes no longer present on the vnode by setting them to undefined
  for (name in old) {
    if (!(attrs && attrs[name] != null) && old[name] != null) {
      setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode, component);
      if (isWeElement) {
        delete dom.props[name];
        //update = true
      }
    }
  }

  // add new & update changed attributes
  for (name in attrs) {
    if (isWeElement && typeof attrs[name] === 'object' && name !== 'ref') {
      if (name === 'style') {
        setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, component);
      }
      var ccName = camelCase(name);
      dom.props[ccName] = old[ccName] = attrs[name];
      //update = true
    } else if (name !== 'children' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
      setAccessor(dom, name, old[name], attrs[name], isSvgMode, component);
      //fix lazy load props missing
      if (dom.nodeName.indexOf('-') !== -1) {
        dom.props = dom.props || {};
        var _ccName = camelCase(name);
        dom.props[_ccName] = old[_ccName] = attrs[name];
        //update = true
      } else {
        old[name] = attrs[name];
      }
    }
  }

  if (isWeElement && !updateSelf && dom.parentNode) {
    //__hasChildren is not accuracy when it was empty at first, so add dom.children.length > 0 condition
    //if (update || dom.__hasChildren || dom.children.length > 0 || (dom.store && !dom.store.data)) {
    if (dom.receiveProps(dom.props, oldClone) !== false) {
      dom.update();
    }
    //}
  }
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var id = 0;

var WeElement = function (_HTMLElement) {
  _inherits(WeElement, _HTMLElement);

  function WeElement() {
    _classCallCheck(this, WeElement);

    // fix lazy load props missing
    var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));

    _this.props = Object.assign({}, _this.constructor.defaultProps, _this.props);
    _this.elementId = id++;
    _this.computed = {};
    _this.isInstalled = false;
    return _this;
  }

  WeElement.prototype.connectedCallback = function connectedCallback() {
    var p = this.parentNode;
    while (p && !this.store) {
      this.store = p.store;
      p = p.parentNode || p.host;
    }

    this.attrsToProps();

    if (this.props.use) {
      this.use = this.props.use;
    }

    if (this.props.useSelf) {
      this.use = this.props.useSelf;
    }

    if (this.use) {
      var use = typeof this.use === 'function' ? this.use() : this.use;

      if (options.isMultiStore) {
        var _updatePath = {};
        var using = {};
        for (var storeName in use) {
          _updatePath[storeName] = {};
          using[storeName] = {};
          getPath(use[storeName], _updatePath, storeName);
          getUse(this.store[storeName].data, use[storeName], using, storeName);
          this.store[storeName].instances.push(this);
        }
        this.using = using;
        this._updatePath = _updatePath;
      } else {
        this._updatePath = getPath(use);
        this.using = getUse(this.store.data, use);
        this.store.instances.push(this);
      }
    }
    if (this.useSelf) {
      var _use = typeof this.useSelf === 'function' ? this.useSelf() : this.useSelf;
      if (options.isMultiStore) {
        var _updatePath2 = {};
        var _using = {};
        for (var _storeName in _use) {
          getPath(_use[_storeName], _updatePath2, _storeName);
          getUse(this.store[_storeName].data, _use[_storeName], _using, _storeName);
          this.store[_storeName].updateSelfInstances.push(this);
        }
        this.usingSelf = _using;
        this._updateSelfPath = _updatePath2;
      } else {
        this._updateSelfPath = getPath(_use);
        this.usingSelf = getUse(this.store.data, _use);
        this.store.updateSelfInstances.push(this);
      }
    }

    if (this.compute) {
      for (var key in this.compute) {
        this.computed[key] = this.compute[key].call(options.isMultiStore ? this.store : this.store.data);
      }
    }

    this.beforeInstall();
    this.install();
    this.afterInstall();

    var shadowRoot;
    if (this.constructor.isLightDom) {
      shadowRoot = this;
    } else {
      if (!this.shadowRoot) {
        shadowRoot = this.attachShadow({
          mode: 'open'
        });
      } else {
        shadowRoot = this.shadowRoot;
        var fc;
        while (fc = shadowRoot.firstChild) {
          shadowRoot.removeChild(fc);
        }
      }
    }

    var css = this.constructor.css;
    if (css) {
      if (typeof css === 'string') {
        var styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(css);
        shadowRoot.adoptedStyleSheets = [styleSheet];
      } else if (Object.prototype.toString.call(css) === '[object Array]') {
        var styleSheets = [];
        css.forEach(function (styleSheet) {
          if (typeof styleSheet === 'string') {
            var adoptedStyleSheet = new CSSStyleSheet();
            adoptedStyleSheet.replaceSync(styleSheet);
            styleSheets.push(adoptedStyleSheet);
          } else {
            styleSheets.push(styleSheet);
          }
          shadowRoot.adoptedStyleSheets = styleSheets;
        });
      } else {
        shadowRoot.adoptedStyleSheets = [css];
      }
    }

    this.beforeRender();
    options.afterInstall && options.afterInstall(this);

    var rendered = this.render(this.props, this.store);

    this.rootNode = diff(null, rendered, null, this);
    this.rendered();

    if (this.css) {
      shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css));
    }

    if (this.props.css) {
      this._customStyleElement = cssToDom(this.props.css);
      this._customStyleContent = this.props.css;
      shadowRoot.appendChild(this._customStyleElement);
    }

    if (isArray(this.rootNode)) {
      this.rootNode.forEach(function (item) {
        shadowRoot.appendChild(item);
      });
    } else {
      this.rootNode && shadowRoot.appendChild(this.rootNode);
    }
    this.installed();
    this.isInstalled = true;
  };

  WeElement.prototype.disconnectedCallback = function disconnectedCallback() {
    this.uninstall();
    this.isInstalled = false;
    if (this.store) {
      if (options.isMultiStore) {
        for (var key in this.store) {
          var current = this.store[key];
          removeItem(this, current.instances);
          removeItem(this, current.updateSelfInstances);
        }
      } else {
        removeItem(this, this.store.instances);
        removeItem(this, this.store.updateSelfInstances);
      }
    }
  };

  WeElement.prototype.update = function update(ignoreAttrs, updateSelf) {
    this._willUpdate = true;
    this.beforeUpdate();
    this.beforeRender();
    //fix null !== undefined
    if (this._customStyleContent != this.props.css) {
      this._customStyleContent = this.props.css;
      this._customStyleElement.textContent = this._customStyleContent;
    }
    this.attrsToProps(ignoreAttrs);

    var rendered = this.render(this.props, this.store);
    this.rendered();

    this.rootNode = diff(this.rootNode, rendered, this.constructor.isLightDom ? this : this.shadowRoot, this, updateSelf);
    this._willUpdate = false;
    this.updated();
  };

  WeElement.prototype.forceUpdate = function forceUpdate() {
    this.update(true);
  };

  WeElement.prototype.updateProps = function updateProps(obj) {
    var _this2 = this;

    Object.keys(obj).forEach(function (key) {
      _this2.props[key] = obj[key];
      if (_this2.prevProps) {
        _this2.prevProps[key] = obj[key];
      }
    });
    this.forceUpdate();
  };

  WeElement.prototype.updateSelf = function updateSelf(ignoreAttrs) {
    this.update(ignoreAttrs, true);
  };

  WeElement.prototype.removeAttribute = function removeAttribute(key) {
    _HTMLElement.prototype.removeAttribute.call(this, key);
    //Avoid executing removeAttribute methods before connectedCallback
    this.isInstalled && this.update();
  };

  WeElement.prototype.setAttribute = function setAttribute(key, val) {
    if (val && typeof val === 'object') {
      _HTMLElement.prototype.setAttribute.call(this, key, JSON.stringify(val));
    } else {
      _HTMLElement.prototype.setAttribute.call(this, key, val);
    }
    //Avoid executing setAttribute methods before connectedCallback
    this.isInstalled && this.update();
  };

  WeElement.prototype.pureRemoveAttribute = function pureRemoveAttribute(key) {
    _HTMLElement.prototype.removeAttribute.call(this, key);
  };

  WeElement.prototype.pureSetAttribute = function pureSetAttribute(key, val) {
    _HTMLElement.prototype.setAttribute.call(this, key, val);
  };

  WeElement.prototype.attrsToProps = function attrsToProps(ignoreAttrs) {
    if (options.ignoreAttrs || ignoreAttrs || this.store && this.store.ignoreAttrs) return;
    var ele = this;
    ele.props['css'] = ele.getAttribute('css');
    var attrs = this.constructor.propTypes;
    if (!attrs) return;
    Object.keys(attrs).forEach(function (key) {
      var type = attrs[key];
      var val = ele.getAttribute(hyphenate(key));
      if (val !== null) {
        switch (type) {
          case String:
            ele.props[key] = val;
            break;
          case Number:
            ele.props[key] = Number(val);
            break;
          case Boolean:
            if (val === 'false' || val === '0') {
              ele.props[key] = false;
            } else {
              ele.props[key] = true;
            }
            break;
          case Array:
          case Object:
            if (val[0] === ':') {
              ele.props[key] = getValByPath(val.substr(1), Omi.$);
            } else {
              ele.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
            }
            break;
        }
      } else {
        if (ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) {
          ele.props[key] = ele.constructor.defaultProps[key];
        } else {
          ele.props[key] = null;
        }
      }
    });
  };

  WeElement.prototype.fire = function fire(name, data) {
    this.dispatchEvent(new CustomEvent(name, {
      detail: data
    }));
  };

  WeElement.prototype.beforeInstall = function beforeInstall() {};

  WeElement.prototype.install = function install() {};

  WeElement.prototype.afterInstall = function afterInstall() {};

  WeElement.prototype.installed = function installed() {};

  WeElement.prototype.uninstall = function uninstall() {};

  WeElement.prototype.beforeUpdate = function beforeUpdate() {};

  WeElement.prototype.updated = function updated() {};

  WeElement.prototype.beforeRender = function beforeRender() {};

  WeElement.prototype.rendered = function rendered() {};

  WeElement.prototype.receiveProps = function receiveProps() {};

  return WeElement;
}(HTMLElement);

WeElement.is = 'WeElement';

/*!
 * https://github.com/Palindrom/JSONPatcherProxy
 * (c) 2017 Starcounter
 * MIT license
 */

/** Class representing a JS Object observer  */
var JSONPatcherProxy = function () {
  /**
   * Deep clones your object and returns a new object.
   */
  function deepClone(obj) {
    switch (typeof obj) {
      case 'object':
        return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
      case 'undefined':
        return null; //this is how JSON.stringify behaves for array items
      default:
        return obj; //no need to clone primitives
    }
  }
  JSONPatcherProxy.deepClone = deepClone;

  function escapePathComponent(str) {
    if (str.indexOf('/') == -1 && str.indexOf('~') == -1) return str;
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
  }
  JSONPatcherProxy.escapePathComponent = escapePathComponent;

  /**
   * Walk up the parenthood tree to get the path
   * @param {JSONPatcherProxy} instance
   * @param {Object} obj the object you need to find its path
   */
  function findObjectPath(instance, obj) {
    var pathComponents = [];
    var parentAndPath = instance.parenthoodMap.get(obj);
    while (parentAndPath && parentAndPath.path) {
      // because we're walking up-tree, we need to use the array as a stack
      pathComponents.unshift(parentAndPath.path);
      parentAndPath = instance.parenthoodMap.get(parentAndPath.parent);
    }
    if (pathComponents.length) {
      var path = pathComponents.join('/');
      return '/' + path;
    }
    return '';
  }
  /**
   * A callback to be used as th proxy set trap callback.
   * It updates parenthood map if needed, proxifies nested newly-added objects, calls default callbacks with the changes occurred.
   * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
   * @param {Object} target the affected object
   * @param {String} key the effect property's name
   * @param {Any} newValue the value being set
   */
  function setTrap(instance, target, key, newValue) {
    var parentPath = findObjectPath(instance, target);

    var destinationPropKey = parentPath + '/' + escapePathComponent(key);

    if (instance.proxifiedObjectsMap.has(newValue)) {
      var newValueOriginalObject = instance.proxifiedObjectsMap.get(newValue);

      instance.parenthoodMap.set(newValueOriginalObject.originalObject, {
        parent: target,
        path: key
      });
    }
    /*
        mark already proxified values as inherited.
        rationale: proxy.arr.shift()
        will emit
        {op: replace, path: '/arr/1', value: arr_2}
        {op: remove, path: '/arr/2'}
         by default, the second operation would revoke the proxy, and this renders arr revoked.
        That's why we need to remember the proxies that are inherited.
      */
    var revokableInstance = instance.proxifiedObjectsMap.get(newValue);
    /*
    Why do we need to check instance.isProxifyingTreeNow?
     We need to make sure we mark revokables as inherited ONLY when we're observing,
    because throughout the first proxification, a sub-object is proxified and then assigned to
    its parent object. This assignment of a pre-proxified object can fool us into thinking
    that it's a proxified object moved around, while in fact it's the first assignment ever.
     Checking isProxifyingTreeNow ensures this is not happening in the first proxification,
    but in fact is is a proxified object moved around the tree
    */
    if (revokableInstance && !instance.isProxifyingTreeNow) {
      revokableInstance.inherited = true;
    }

    // if the new value is an object, make sure to watch it
    if (newValue && typeof newValue == 'object' && !instance.proxifiedObjectsMap.has(newValue)) {
      instance.parenthoodMap.set(newValue, {
        parent: target,
        path: key
      });
      newValue = instance._proxifyObjectTreeRecursively(target, newValue, key);
    }
    // let's start with this operation, and may or may not update it later
    var operation = {
      op: 'remove',
      path: destinationPropKey
    };
    if (typeof newValue == 'undefined') {
      // applying De Morgan's laws would be a tad faster, but less readable
      if (!Array.isArray(target) && !target.hasOwnProperty(key)) {
        // `undefined` is being set to an already undefined value, keep silent
        return Reflect.set(target, key, newValue);
      }
      // when array element is set to `undefined`, should generate replace to `null`
      if (Array.isArray(target)) {
operation.op = 'replace', operation.value = null;
      }
      var oldValue = instance.proxifiedObjectsMap.get(target[key]);
      // was the deleted a proxified object?
      if (oldValue) {
        instance.parenthoodMap.delete(target[key]);
        instance.disableTrapsForProxy(oldValue);
        instance.proxifiedObjectsMap.delete(oldValue);
      }
    } else {
      if (Array.isArray(target) && !Number.isInteger(+key.toString())) {
        /* array props (as opposed to indices) don't emit any patches, to avoid needless `length` patches */
        if (key != 'length') {
          console.warn('JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch');
        }
        return Reflect.set(target, key, newValue);
      }
      operation.op = 'add';
      if (target.hasOwnProperty(key)) {
        if (typeof target[key] !== 'undefined' || Array.isArray(target)) {
          operation.op = 'replace'; // setting `undefined` array elements is a `replace` op
        }
      }
      operation.value = newValue;
    }
    operation.oldValue = target[key];
    var reflectionResult = Reflect.set(target, key, newValue);
    instance.defaultCallback(operation);
    return reflectionResult;
  }
  /**
   * A callback to be used as th proxy delete trap callback.
   * It updates parenthood map if needed, calls default callbacks with the changes occurred.
   * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
   * @param {Object} target the effected object
   * @param {String} key the effected property's name
   */
  function deleteTrap(instance, target, key) {
    if (typeof target[key] !== 'undefined') {
      var parentPath = findObjectPath(instance, target);
      var destinationPropKey = parentPath + '/' + escapePathComponent(key);

      var revokableProxyInstance = instance.proxifiedObjectsMap.get(target[key]);

      if (revokableProxyInstance) {
        if (revokableProxyInstance.inherited) {
          /*
            this is an inherited proxy (an already proxified object that was moved around),
            we shouldn't revoke it, because even though it was removed from path1, it is still used in path2.
            And we know that because we mark moved proxies with `inherited` flag when we move them
             it is a good idea to remove this flag if we come across it here, in deleteProperty trap.
            We DO want to revoke the proxy if it was removed again.
          */
          revokableProxyInstance.inherited = false;
        } else {
          instance.parenthoodMap.delete(revokableProxyInstance.originalObject);
          instance.disableTrapsForProxy(revokableProxyInstance);
          instance.proxifiedObjectsMap.delete(target[key]);
        }
      }
      var reflectionResult = Reflect.deleteProperty(target, key);

      instance.defaultCallback({
        op: 'remove',
        path: destinationPropKey
      });

      return reflectionResult;
    }
  }
  /* pre-define resume and pause functions to enhance constructors performance */
  function resume() {
    var _this = this;

    this.defaultCallback = function (operation) {
      _this.isRecording && _this.patches.push(operation);
      _this.userCallback && _this.userCallback(operation);
    };
    this.isObserving = true;
  }
  function pause() {
    this.defaultCallback = function () {};
    this.isObserving = false;
  }
  /**
   * Creates an instance of JSONPatcherProxy around your object of interest `root`.
   * @param {Object|Array} root - the object you want to wrap
   * @param {Boolean} [showDetachedWarning = true] - whether to log a warning when a detached sub-object is modified @see {@link https://github.com/Palindrom/JSONPatcherProxy#detached-objects}
   * @returns {JSONPatcherProxy}
   * @constructor
   */
  function JSONPatcherProxy(root, showDetachedWarning) {
    this.isProxifyingTreeNow = false;
    this.isObserving = false;
    this.proxifiedObjectsMap = new Map();
    this.parenthoodMap = new Map();
    // default to true
    if (typeof showDetachedWarning !== 'boolean') {
      showDetachedWarning = true;
    }

    this.showDetachedWarning = showDetachedWarning;
    this.originalObject = root;
    this.cachedProxy = null;
    this.isRecording = false;
    this.userCallback;
    /**
     * @memberof JSONPatcherProxy
     * Restores callback back to the original one provided to `observe`.
     */
    this.resume = resume.bind(this);
    /**
     * @memberof JSONPatcherProxy
     * Replaces your callback with a noop function.
     */
    this.pause = pause.bind(this);
  }

  JSONPatcherProxy.prototype.generateProxyAtPath = function (parent, obj, path) {
    var _this2 = this;

    if (!obj) {
      return obj;
    }
    var traps = {
      set: function set(target, key, value, receiver) {
        return setTrap(_this2, target, key, value, receiver);
      },
      deleteProperty: function deleteProperty(target, key) {
        return deleteTrap(_this2, target, key);
      }
    };
    var revocableInstance = Proxy.revocable(obj, traps);
    // cache traps object to disable them later.
    revocableInstance.trapsInstance = traps;
    revocableInstance.originalObject = obj;

    /* keeping track of object's parent and path */

    this.parenthoodMap.set(obj, { parent: parent, path: path });

    /* keeping track of all the proxies to be able to revoke them later */
    this.proxifiedObjectsMap.set(revocableInstance.proxy, revocableInstance);
    return revocableInstance.proxy;
  };
  // grab tree's leaves one by one, encapsulate them into a proxy and return
  JSONPatcherProxy.prototype._proxifyObjectTreeRecursively = function (parent, root, path) {
    for (var key in root) {
      if (root.hasOwnProperty(key)) {
        if (root[key] instanceof Object) {
          root[key] = this._proxifyObjectTreeRecursively(root, root[key], escapePathComponent(key));
        }
      }
    }
    return this.generateProxyAtPath(parent, root, path);
  };
  // this function is for aesthetic purposes
  JSONPatcherProxy.prototype.proxifyObjectTree = function (root) {
    /*
    while proxyifying object tree,
    the proxyifying operation itself is being
    recorded, which in an unwanted behavior,
    that's why we disable recording through this
    initial process;
    */
    this.pause();
    this.isProxifyingTreeNow = true;
    var proxifiedObject = this._proxifyObjectTreeRecursively(undefined, root, '');
    /* OK you can record now */
    this.isProxifyingTreeNow = false;
    this.resume();
    return proxifiedObject;
  };
  /**
   * Turns a proxified object into a forward-proxy object; doesn't emit any patches anymore, like a normal object
   * @param {Proxy} proxy - The target proxy object
   */
  JSONPatcherProxy.prototype.disableTrapsForProxy = function (revokableProxyInstance) {
    if (this.showDetachedWarning) {
      var message = "You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects";

      revokableProxyInstance.trapsInstance.set = function (targetObject, propKey, newValue) {
        console.warn(message);
        return Reflect.set(targetObject, propKey, newValue);
      };
      revokableProxyInstance.trapsInstance.set = function (targetObject, propKey, newValue) {
        console.warn(message);
        return Reflect.set(targetObject, propKey, newValue);
      };
      revokableProxyInstance.trapsInstance.deleteProperty = function (targetObject, propKey) {
        return Reflect.deleteProperty(targetObject, propKey);
      };
    } else {
      delete revokableProxyInstance.trapsInstance.set;
      delete revokableProxyInstance.trapsInstance.get;
      delete revokableProxyInstance.trapsInstance.deleteProperty;
    }
  };
  /**
   * Proxifies the object that was passed in the constructor and returns a proxified mirror of it. Even though both parameters are options. You need to pass at least one of them.
   * @param {Boolean} [record] - whether to record object changes to a later-retrievable patches array.
   * @param {Function} [callback] - this will be synchronously called with every object change with a single `patch` as the only parameter.
   */
  JSONPatcherProxy.prototype.observe = function (record, callback) {
    if (!record && !callback) {
      throw new Error('You need to either record changes or pass a callback');
    }
    this.isRecording = record;
    this.userCallback = callback;
    /*
    I moved it here to remove it from `unobserve`,
    this will also make the constructor faster, why initiate
    the array before they decide to actually observe with recording?
    They might need to use only a callback.
    */
    if (record) this.patches = [];
    this.cachedProxy = this.proxifyObjectTree(this.originalObject);
    return this.cachedProxy;
  };
  /**
   * If the observed is set to record, it will synchronously return all the patches and empties patches array.
   */
  JSONPatcherProxy.prototype.generate = function () {
    if (!this.isRecording) {
      throw new Error('You should set record to true to get patches later');
    }
    return this.patches.splice(0, this.patches.length);
  };
  /**
   * Revokes all proxies rendering the observed object useless and good for garbage collection @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable}
   */
  JSONPatcherProxy.prototype.revoke = function () {
    this.proxifiedObjectsMap.forEach(function (el) {
      el.revoke();
    });
  };
  /**
   * Disables all proxies' traps, turning the observed object into a forward-proxy object, like a normal object that you can modify silently.
   */
  JSONPatcherProxy.prototype.disableTraps = function () {
    this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy, this);
  };
  return JSONPatcherProxy;
}();

function render(vnode, parent, store) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
  if (store) {
    if (store.data) {
      observeStore(store);
    }
    // else {
    //   //Multi-store injection
    //   for (let key in store) {
    //     if (key !== 'ignoreAttrs') {
    //       options.isMultiStore = true
    //       observeStore(store[key], key)
    //     }
    //   }
    // }
    parent.store = store;
  }
  return diff(null, vnode, parent, false);
}

function observeStore(store, key) {
  store.instances = [];
  store.updateSelfInstances = [];
  extendStoreUpdate(store, key);

  store.data = new JSONPatcherProxy(store.data).observe(false, function (patch) {
    var patchs = {};
    if (patch.op === 'remove') {
      // fix arr splice
      var kv = getArrayPatch(patch.path, store);
      patchs[kv.k] = kv.v;

      update(patchs, store);
    } else {
      var key = fixPath(patch.path);
      patchs[key] = patch.value;

      update(patchs, store);
    }
  });
}

function update(patch, store) {
  store.update(patch);
}

function extendStoreUpdate(store, key) {
  store.update = function (patch) {
    if (Object.keys(patch).length > 0) {
      this.instances.forEach(function (instance) {
        compute(instance, key);
        if (key) {
          if (instance._updatePath && instance._updatePath[key] && needUpdate(patch, instance._updatePath[key])) {
            if (instance.use) {
              getUse(store.data, (typeof instance.use === 'function' ? instance.use() : instance.use)[key], instance.using, key);
            }

            instance.update();
          }
        } else {
          if (instance._updatePath && needUpdate(patch, instance._updatePath)) {
            if (instance.use) {
              instance.using = getUse(store.data, typeof instance.use === 'function' ? instance.use() : instance.use);
            }

            instance.update();
          }
        }
      });

      this.updateSelfInstances.forEach(function (instance) {
        compute(instance, key);
        if (key) {
          if (instance._updateSelfPath && instance._updateSelfPath[key] && needUpdate(patch, instance._updateSelfPath[key])) {
            if (instance.useSelf) {
              getUse(store.data, (typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf)[key], instance.usingSelf, key);
            }

            instance.updateSelf();
          }
        } else {
          if (instance._updateSelfPath && needUpdate(patch, instance._updateSelfPath)) {
            instance.usingSelf = getUse(store.data, typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf);
            instance.updateSelf();
          }
        }
      });
      this.onChange && this.onChange(patch);
    }
  };
}

function compute(instance, isMultiStore) {
  if (instance.compute) {
    for (var ck in instance.compute) {
      instance.computed[ck] = instance.compute[ck].call(isMultiStore ? instance.store : instance.store.data);
    }
  }
}

function needUpdate(diffResult, updatePath) {
  for (var keyA in diffResult) {
    if (updatePath[keyA]) {
      return true;
    }
    for (var keyB in updatePath) {
      if (includePath(keyA, keyB)) {
        return true;
      }
    }
  }
  return false;
}

function includePath(pathA, pathB) {
  if (pathA.indexOf(pathB) === 0) {
    var next = pathA.substr(pathB.length, 1);
    if (next === '[' || next === '.') {
      return true;
    }
  }
  return false;
}

function fixPath(path) {
  var mpPath = '';
  var arr = path.replace('/', '').split('/');
  arr.forEach(function (item, index) {
    if (index) {
      if (isNaN(Number(item))) {
        mpPath += '.' + item;
      } else {
        mpPath += '[' + item + ']';
      }
    } else {
      mpPath += item;
    }
  });
  return mpPath;
}

function getArrayPatch(path, store) {
  var arr = path.replace('/', '').split('/');
  var current = store.data[arr[0]];
  for (var i = 1, len = arr.length; i < len - 1; i++) {
    current = current[arr[i]];
  }
  return {
    k: fixArrPath(path),
    v: current
  };
}

function fixArrPath(path) {
  var mpPath = '';
  var arr = path.replace('/', '').split('/');
  var len = arr.length;
  arr.forEach(function (item, index) {
    if (index < len - 1) {
      if (index) {
        if (isNaN(Number(item))) {
          mpPath += '.' + item;
        } else {
          mpPath += '[' + item + ']';
        }
      } else {
        mpPath += item;
      }
    }
  });
  return mpPath;
}

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var storeHelpers = ['use', 'useSelf'];

function define(name, ctor, config) {
  if (customElements.get(name)) {
    return;
  }
  if (options.mapping[name]) {
    return;
  }
  if (ctor.is === 'WeElement') {
    customElements.define(name, ctor);
    options.mapping[name] = ctor;
  } else {
    if (typeof config === 'string') {
      config = { css: config };
    } else {
      config = config || {};
    }

    var Ele = function (_WeElement) {
      _inherits$1(Ele, _WeElement);

      function Ele() {
        var _temp, _this, _ret;

        _classCallCheck$1(this, Ele);

        for (var _len = arguments.length, args = Array(_len), key = 0; key < _len; key++) {
          args[key] = arguments[key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.compute = config.compute, _temp), _possibleConstructorReturn$1(_this, _ret);
      }

      Ele.prototype.render = function render() {
        return ctor.call(this, this);
      };

      return Ele;
    }(WeElement);

    Ele.css = config.css;
    Ele.propTypes = config.propTypes;
    Ele.defaultProps = config.defaultProps;
    Ele.isLightDom = config.isLightDom;

    var _loop = function _loop(key) {
      if (typeof config[key] === 'function') {
        Ele.prototype[key] = function () {
          return config[key].apply(this, arguments);
        };
      }
    };

    for (var key in config) {
      _loop(key);
    }

    storeHelpers.forEach(function (func) {
      if (config[func] && config[func] !== 'function') {
        Ele.prototype[func] = function () {
          return config[func];
        };
      }
    });

    customElements.define(name, Ele);
    options.mapping[name] = Ele;
  }
}

function tag(name) {
  return function (target) {
    define(name, target);
  };
}

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode    The virtual DOM element to clone
 * @param {Object} props  Attributes/props to add when cloning
 * @param {VNode} rest    Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

function getHost(ele) {
  var p = ele.parentNode;
  while (p) {
    if (p.host) {
      return p.host;
    } else if (p.shadowRoot && p.shadowRoot.host) {
      return p.shadowRoot.host;
    } else {
      p = p.parentNode;
    }
  }
}

function rpx(css) {
  return css.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function (a, b) {
    return window.innerWidth * Number(b) / 750 + 'px';
  });
}

/**
 * classNames based on https://github.com/JedWatson/classnames
 * by Jed Watson
 * Licensed under the MIT License
 * https://github.com/JedWatson/classnames/blob/master/LICENSE
 * modified by dntzhang
 */

var hasOwn = {}.hasOwnProperty;

function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

function extractClass() {
  var _Array$prototype$slic = Array.prototype.slice.call(arguments, 0),
      props = _Array$prototype$slic[0],
      args = _Array$prototype$slic.slice(1);

  if (props.class) {
    args.unshift(props.class);
    delete props.class;
  } else if (props.className) {
    args.unshift(props.className);
    delete props.className;
  }
  if (args.length > 0) {
    return { class: classNames.apply(null, args) };
  }
}

function o(obj) {
  return JSON.stringify(obj);
}

(function () {

    if ('adoptedStyleSheets' in document) { return; }

    var hasShadyCss = 'ShadyCSS' in window && !ShadyCSS.nativeShadow;
    var bootstrapper = document.implementation.createHTMLDocument('boot');
    var closedShadowRootRegistry = new WeakMap();
    var _DOMException = typeof DOMException === 'object' ? Error : DOMException;

    var defineProperty = Object.defineProperty;
    var forEach = Array.prototype.forEach;
    var importPattern = /@import.+?;?$/gm;
    function rejectImports(contents) {
        var _contents = contents.replace(importPattern, '');
        if (_contents !== contents) {
            console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
        }
        return _contents.trim();
    }
    function clearRules(sheet) {
        for (var i = 0; i < sheet.cssRules.length; i++) {
            sheet.deleteRule(0);
        }
    }
    function insertAllRules(from, to) {
        forEach.call(from.cssRules, function (rule, i) {
            to.insertRule(rule.cssText, i);
        });
    }
    function isElementConnected(element) {
        return 'isConnected' in element
            ? element.isConnected
            : document.contains(element);
    }
    function unique(arr) {
        return arr.filter(function (value, index) { return arr.indexOf(value) === index; });
    }
    function diff(arr1, arr2) {
        return arr1.filter(function (value) { return arr2.indexOf(value) === -1; });
    }
    function removeNode(node) {
        node.parentNode.removeChild(node);
    }
    function getShadowRoot(element) {
        return element.shadowRoot || closedShadowRootRegistry.get(element);
    }

    var cssStyleSheetMethods = [
        'addImport',
        'addPageRule',
        'addRule',
        'deleteRule',
        'insertRule',
        'removeImport',
        'removeRule',
    ];
    var NonConstructedStyleSheet = CSSStyleSheet;
    var nonConstructedProto = NonConstructedStyleSheet.prototype;
    nonConstructedProto.replace = function () {
        return Promise.reject(new _DOMException("Can't call replace on non-constructed CSSStyleSheets."));
    };
    nonConstructedProto.replaceSync = function () {
        throw new _DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
    };
    function isCSSStyleSheetInstance(instance) {
        return typeof instance === 'object'
            ? proto$2.isPrototypeOf(instance) ||
                nonConstructedProto.isPrototypeOf(instance)
            : false;
    }
    function isNonConstructedStyleSheetInstance(instance) {
        return typeof instance === 'object'
            ? nonConstructedProto.isPrototypeOf(instance)
            : false;
    }
    var $basicStyleSheet = new WeakMap();
    var $locations = new WeakMap();
    var $adoptersByLocation = new WeakMap();
    function addAdopterLocation(sheet, location) {
        var adopter = document.createElement('style');
        $adoptersByLocation.get(sheet).set(location, adopter);
        $locations.get(sheet).push(location);
        return adopter;
    }
    function getAdopterByLocation(sheet, location) {
        return $adoptersByLocation.get(sheet).get(location);
    }
    function removeAdopterLocation(sheet, location) {
        $adoptersByLocation.get(sheet).delete(location);
        $locations.set(sheet, $locations.get(sheet).filter(function (_location) { return _location !== location; }));
    }
    function restyleAdopter(sheet, adopter) {
        requestAnimationFrame(function () {
            clearRules(adopter.sheet);
            insertAllRules($basicStyleSheet.get(sheet), adopter.sheet);
        });
    }
    function checkInvocationCorrectness(self) {
        if (!$basicStyleSheet.has(self)) {
            throw new TypeError('Illegal invocation');
        }
    }
    function ConstructedStyleSheet() {
        var self = this;
        var style = document.createElement('style');
        bootstrapper.body.appendChild(style);
        $basicStyleSheet.set(self, style.sheet);
        $locations.set(self, []);
        $adoptersByLocation.set(self, new WeakMap());
    }
    var proto$2 = ConstructedStyleSheet.prototype;
    proto$2.replace = function replace(contents) {
        try {
            this.replaceSync(contents);
            return Promise.resolve(this);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    proto$2.replaceSync = function replaceSync(contents) {
        checkInvocationCorrectness(this);
        if (typeof contents === 'string') {
            var self_1 = this;
            var style = $basicStyleSheet.get(self_1).ownerNode;
            style.textContent = rejectImports(contents);
            $basicStyleSheet.set(self_1, style.sheet);
            $locations.get(self_1).forEach(function (location) {
                if (location.isConnected()) {
                    restyleAdopter(self_1, getAdopterByLocation(self_1, location));
                }
            });
        }
    };
    defineProperty(proto$2, 'cssRules', {
        configurable: true,
        enumerable: true,
        get: function cssRules() {
            checkInvocationCorrectness(this);
            return $basicStyleSheet.get(this).cssRules;
        },
    });
    cssStyleSheetMethods.forEach(function (method) {
        proto$2[method] = function () {
            var self = this;
            checkInvocationCorrectness(self);
            var args = arguments;
            var basic = $basicStyleSheet.get(self);
            var locations = $locations.get(self);
            var result = basic[method].apply(basic, args);
            locations.forEach(function (location) {
                if (location.isConnected()) {
                    var sheet = getAdopterByLocation(self, location).sheet;
                    sheet[method].apply(sheet, args);
                }
            });
            return result;
        };
    });
    defineProperty(ConstructedStyleSheet, Symbol.hasInstance, {
        configurable: true,
        value: isCSSStyleSheetInstance,
    });

    var defaultObserverOptions = {
        childList: true,
        subtree: true,
    };
    var locations = new WeakMap();
    function getAssociatedLocation(element) {
        var location = locations.get(element);
        if (!location) {
            location = new Location(element);
            locations.set(element, location);
        }
        return location;
    }
    function attachAdoptedStyleSheetProperty(constructor) {
        defineProperty(constructor.prototype, 'adoptedStyleSheets', {
            configurable: true,
            enumerable: true,
            get: function () {
                return getAssociatedLocation(this).sheets;
            },
            set: function (sheets) {
                getAssociatedLocation(this).update(sheets);
            },
        });
    }
    function traverseWebComponents(node, callback) {
        var iter = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT, function (foundNode) {
            return getShadowRoot(foundNode)
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_REJECT;
        },
        null, false);
        for (var next = void 0; (next = iter.nextNode());) {
            callback(getShadowRoot(next));
        }
    }
    var $element = new WeakMap();
    var $uniqueSheets = new WeakMap();
    var $observer = new WeakMap();
    function isExistingAdopter(self, element) {
        return (element instanceof HTMLStyleElement &&
            $uniqueSheets.get(self).some(function (sheet) { return getAdopterByLocation(sheet, self); }));
    }
    function getAdopterContainer(self) {
        var element = $element.get(self);
        return element instanceof Document ? element.body : element;
    }
    function adopt(self) {
        var styleList = document.createDocumentFragment();
        var sheets = $uniqueSheets.get(self);
        var observer = $observer.get(self);
        var container = getAdopterContainer(self);
        observer.disconnect();
        sheets.forEach(function (sheet) {
            styleList.appendChild(getAdopterByLocation(sheet, self) || addAdopterLocation(sheet, self));
        });
        container.insertBefore(styleList, null);
        observer.observe(container, defaultObserverOptions);
        sheets.forEach(function (sheet) {
            restyleAdopter(sheet, getAdopterByLocation(sheet, self));
        });
    }
    function Location(element) {
        var self = this;
        self.sheets = [];
        $element.set(self, element);
        $uniqueSheets.set(self, []);
        $observer.set(self, new MutationObserver(function (mutations, observer) {
            if (!document) {
                observer.disconnect();
                return;
            }
            mutations.forEach(function (mutation) {
                if (!hasShadyCss) {
                    forEach.call(mutation.addedNodes, function (node) {
                        if (!(node instanceof Element)) {
                            return;
                        }
                        traverseWebComponents(node, function (root) {
                            getAssociatedLocation(root).connect();
                        });
                    });
                }
                forEach.call(mutation.removedNodes, function (node) {
                    if (!(node instanceof Element)) {
                        return;
                    }
                    if (isExistingAdopter(self, node)) {
                        adopt(self);
                    }
                    if (!hasShadyCss) {
                        traverseWebComponents(node, function (root) {
                            getAssociatedLocation(root).disconnect();
                        });
                    }
                });
            });
        }));
    }
    var proto$1 = Location.prototype;
    proto$1.isConnected = function isConnected() {
        var element = $element.get(this);
        return element instanceof Document
            ? element.readyState !== 'loading'
            : isElementConnected(element.host);
    };
    proto$1.connect = function connect() {
        var container = getAdopterContainer(this);
        $observer.get(this).observe(container, defaultObserverOptions);
        if ($uniqueSheets.get(this).length > 0) {
            adopt(this);
        }
        traverseWebComponents(container, function (root) {
            getAssociatedLocation(root).connect();
        });
    };
    proto$1.disconnect = function disconnect() {
        $observer.get(this).disconnect();
    };
    proto$1.update = function update(sheets) {
        var self = this;
        var locationType = $element.get(self) === document ? 'Document' : 'ShadowRoot';
        if (!Array.isArray(sheets)) {
            throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
        }
        if (!sheets.every(isCSSStyleSheetInstance)) {
            throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
        }
        if (sheets.some(isNonConstructedStyleSheetInstance)) {
            throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Can't adopt non-constructed stylesheets");
        }
        self.sheets = sheets;
        var oldUniqueSheets = $uniqueSheets.get(self);
        var uniqueSheets = unique(sheets);
        var removedSheets = diff(oldUniqueSheets, uniqueSheets);
        removedSheets.forEach(function (sheet) {
            removeNode(getAdopterByLocation(sheet, self));
            removeAdopterLocation(sheet, self);
        });
        $uniqueSheets.set(self, uniqueSheets);
        if (self.isConnected() && uniqueSheets.length > 0) {
            adopt(self);
        }
    };

    window.CSSStyleSheet = ConstructedStyleSheet;
    attachAdoptedStyleSheetProperty(Document);
    if ('ShadowRoot' in window) {
        attachAdoptedStyleSheetProperty(ShadowRoot);
        var proto = Element.prototype;
        var attach_1 = proto.attachShadow;
        proto.attachShadow = function attachShadow(init) {
            var root = attach_1.call(this, init);
            if (init.mode === 'closed') {
                closedShadowRootRegistry.set(this, root);
            }
            return root;
        };
    }
    var documentLocation = getAssociatedLocation(document);
    if (documentLocation.isConnected()) {
        documentLocation.connect();
    }
    else {
        document.addEventListener('DOMContentLoaded', documentLocation.connect.bind(documentLocation));
    }

}());

h.f = Fragment;

function createRef() {
  return {};
}

var $ = {};
var Component = WeElement;
var defineElement = define;
var elements = options.mapping;

var omi = {
  tag: tag,
  WeElement: WeElement,
  Component: Component,
  render: render,
  h: h,
  createElement: h,
  options: options,
  define: define,
  cloneElement: cloneElement,
  getHost: getHost,
  rpx: rpx,
  defineElement: defineElement,
  classNames: classNames,
  extractClass: extractClass,
  createRef: createRef,
  o: o,
  elements: elements,
  $: $,
  extend: extend$1,
  get: get,
  set: set,
  bind: bind,
  unbind: unbind,
  JSONProxy: JSONPatcherProxy
};

options.root.Omi = omi;
options.root.omi = omi;
options.root.Omi.version = '6.19.23';

/* harmony default export */ __webpack_exports__["default"] = (omi);

//# sourceMappingURL=omi.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_omi@6.19.26@omi/dist/omi.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/_omi@6.19.26@omi/dist/omi.esm.js ***!
  \*******************************************************/
/*! exports provided: default, tag, WeElement, Component, render, h, createElement, options, define, cloneElement, getHost, rpx, defineElement, classNames, extractClass, createRef, o, elements, $, extend, get, set, bind, unbind, JSONProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeElement", function() { return WeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "define", function() { return define; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHost", function() { return getHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rpx", function() { return rpx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineElement", function() { return defineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractClass", function() { return extractClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbind", function() { return unbind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONProxy", function() { return JSONPatcherProxy; });
/**
 * Omi v6.19.26  http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

function getGlobal() {
  if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
    return self || window || global || function () {
      return this;
    }();
  }
  return global;
}

/** Global options
 *  @public
 *  @namespace options {Object}
 */
var options = {
  store: null,
  root: getGlobal(),
  mapping: {},
  isMultiStore: false,
  //when set true, using props of hypescript, don't use getAttribute
  //if you render all the node tree by omi self, set it
  ignoreAttrs: false
};

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function () {
  if (
  // No Reflect, no classes, no need for shim because native custom elements
  // require ES2015 classes or Reflect.
  window.Reflect === undefined || window.customElements === undefined ||
  // The webcomponentsjs custom elements polyfill doesn't require
  // ES2015-compatible construction (`super()` or `Reflect.construct`).
  window.customElements.hasOwnProperty('polyfillWrapFlushCallback')) {
    return;
  }
  var BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = function HTMLElement() {
    return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();

function cssToDom(css) {
  var node = document.createElement('style');
  node.textContent = css;
  return node;
}

function camelCase(str) {
  return str.replace(/-(\w)/g, function ($, $1) {
    return $1.toUpperCase();
  });
}

function Fragment(props) {
  return props.children;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/** Invoke or update a ref, depending on whether it is a function or object ref.
 *  @param {object|function} [ref=null]
 *  @param {any} [value]
 */
function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 * @type {(callback: function) => void}
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function getUse(data, paths, out, name) {
  var obj = [];
  paths.forEach(function (path, index) {
    var isPath = typeof path === 'string';
    if (isPath) {
      obj[index] = getTargetByPath(data, path);
    } else {
      var key = Object.keys(path)[0];
      var value = path[key];
      if (typeof value === 'string') {
        obj[index] = getTargetByPath(data, value);
      } else {
        var tempPath = value[0];
        if (typeof tempPath === 'string') {
          var tempVal = getTargetByPath(data, tempPath);
          obj[index] = value[1] ? value[1](tempVal) : tempVal;
        } else {
          var args = [];
          tempPath.forEach(function (path) {
            args.push(getTargetByPath(data, path));
          });
          obj[index] = value[1].apply(null, args);
        }
      }
      obj[key] = obj[index];
    }
  });
  if (out) out[name] = obj;
  return obj;
}

function pathToArr(path) {
  if (typeof path !== 'string' || !path) return [];
  // return path.split(/\.|\[|\]/).filter(name => !!name)
  return path.replace(/]/g, '').replace(/\[/g, '.').split('.');
}

function getTargetByPath(origin, path) {
  var arr = pathToArr(path);
  var current = origin;
  for (var i = 0, len = arr.length; i < len; i++) {
    current = current[arr[i]];
  }
  return current;
}

var hyphenateRE = /\B([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
}

function getValByPath(path, current) {
  var arr = pathToArr(path);
  arr.forEach(function (prop) {
    current = current[prop];
  });
  return current;
}

function getPath(obj, out, name) {
  var result = {};
  obj.forEach(function (item) {
    if (typeof item === 'string') {
      result[item] = true;
    } else {
      var tempPath = item[Object.keys(item)[0]];
      if (typeof tempPath === 'string') {
        result[tempPath] = true;
      } else {
        if (typeof tempPath[0] === 'string') {
          result[tempPath[0]] = true;
        } else {
          tempPath[0].forEach(function (path) {
            return result[path] = true;
          });
        }
      }
    }
  });
  if (out) out[name] = result;
  return result;
}

function removeItem(item, arr) {
  if (!arr) return;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      break;
    }
  }
}

var stack = [];

function h(nodeName, attributes) {
  var children = [],
      lastSimple,
      child,
      simple,
      i;
  for (i = arguments.length; i-- > 2;) {
    stack.push(arguments[i]);
  }
  if (attributes && attributes.children != null) {
    if (!stack.length) stack.push(attributes.children);
    delete attributes.children;
  }
  while (stack.length) {
    if ((child = stack.pop()) && child.pop !== undefined) {
      for (i = child.length; i--;) {
        stack.push(child[i]);
      }
    } else {
      if (typeof child === 'boolean') child = null;

      if (simple = typeof nodeName !== 'function') {
        if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
      }

      if (simple && lastSimple) {
        children[children.length - 1] += child;
      } else if (children.length === 0) {
        children = [child];
      } else {
        children.push(child);
      }

      lastSimple = simple;
    }
  }

  if (nodeName === Fragment) {
    return children;
  }

  var p = {
    nodeName: nodeName,
    children: children,
    attributes: attributes == null ? undefined : attributes,
    key: attributes == null ? undefined : attributes.key

    // if a "vnode hook" is defined, pass every created VNode to it
  };if (options.vnode !== undefined) options.vnode(p);

  return p;
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node      DOM Node to compare
 * @param {VNode} vnode      Virtual DOM node to compare
 * @param {boolean} [hydrating=false]  If true, ignores component constructors when comparing.
 * @private
 */
function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }
  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  } else if (typeof vnode.nodeName === 'function') {
    return options.mapping[node.nodeName.toLowerCase()] === vnode.nodeName;
  }
  return hydrating || node._componentConstructor === vnode.nodeName;
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 *
 * @param {Element} node  A DOM Element to inspect the name of.
 * @param {String} nodeName  Unnormalized name to compare against.
 */
function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

var extension = {};

function extend$1(name, handler) {
  extension['o-' + name] = handler;
}

function set(origin, path, value) {
  var arr = pathToArr(path);
  var current = origin;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (i === len - 1) {
      current[arr[i]] = value;
    } else {
      current = current[arr[i]];
    }
  }
}

function get(origin, path) {
  var arr = pathToArr(path);
  var current = origin;
  for (var i = 0, len = arr.length; i < len; i++) {
    current = current[arr[i]];
  }

  return current;
}

function eventProxy(e) {
  return this._listeners[e.type](e);
}

function bind(el, type, handler) {
  el._listeners = el._listeners || {};
  el._listeners[type] = handler;
  el.addEventListener(type, eventProxy);
}

function unbind(el, type) {
  el.removeEventListener(type, eventProxy);
}

/**
 * Create an element with the given nodeName.
 * @param {string} nodeName The DOM node to create
 * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
 *  namespace.
 * @returns {Element} The created DOM node
 */
function createNode(nodeName, isSvg) {
  /** @type {Element} */
  var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
  node.normalizedNodeName = nodeName;
  return node;
}

/**
 * Remove a child node from its parent if attached.
 * @param {Node} node The node to remove
 */
function removeNode(node) {
  var parentNode = node.parentNode;
  if (parentNode) parentNode.removeChild(node);
}

/**
 * Set a named attribute on the given Node, with special behavior for some names
 * and event handlers. If `value` is `null`, the attribute/handler will be
 * removed.
 * @param {Element} node An element to mutate
 * @param {string} name The name/key to set, such as an event or attribute name
 * @param {*} old The last value that was set for this name/node pair
 * @param {*} value An attribute value, such as a function to be used as an
 *  event handler
 * @param {boolean} isSvg Are we currently diffing inside an svg?
 * @private
 */
function setAccessor(node, name, old, value, isSvg, component) {
  if (name === 'className') name = 'class';

  if (name[0] == 'o' && name[1] == '-') {
    if (extension[name]) {
      extension[name](node, value, component);
    }
  } else if (name === 'key') {
    // ignore
  } else if (name === 'ref') {
    applyRef(old, null);
    applyRef(value, node);
  } else if (name === 'class' && !isSvg) {
    node.className = value || '';
  } else if (name === 'style') {
    if (!value || typeof value === 'string' || typeof old === 'string') {
      node.style.cssText = value || '';
    }
    if (value && typeof value === 'object') {
      if (typeof old !== 'string') {
        for (var i in old) {
          if (!(i in value)) node.style[i] = '';
        }
      }
      for (var i in value) {
        node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
      }
    }
  } else if (name === 'dangerouslySetInnerHTML') {
    if (value) node.innerHTML = value.__html || '';
  } else if (name[0] == '_' && name[1] == 'o' && name[2] == 'n' && node.constructor.is === 'WeElement') {
    bindEvent(node, name.replace('_', ''), value, old);
  } else if (name[0] == 'o' && name[1] == 'n') {
    bindEvent(node, name, value, old);
  } else if (node.nodeName === 'INPUT' && name === 'value') {
    node[name] = value == null ? '' : value;
  } else if (name !== 'list' && name !== 'type' && name !== 'css' && !isSvg && name in node && value !== '') {
    //value !== '' fix for selected, disabled, checked with pure element
    // Attempt to set a DOM property to the given value.
    // IE & FF throw for certain property-value combinations.
    try {
      node[name] = value == null ? '' : value;
    } catch (e) {}
    if ((value == null || value === false) && name != 'spellcheck') node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
  } else {
    var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
    // spellcheck is treated differently than all other boolean values and
    // should not be removed when the value is `false`. See:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
    if (value == null || value === false) {
      if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.pureRemoveAttribute ? node.pureRemoveAttribute(name) : node.removeAttribute(name);
    } else if (typeof value !== 'function') {
      if (ns) {
        node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);
      } else {
        node.pureSetAttribute ? node.pureSetAttribute(name, value) : node.setAttribute(name, value);
      }
    }
  }
}

/**
 * Proxy an event to hooked event handlers
 * @param {Event} e The event object from the browser
 * @private
 */
function eventProxy$1(e) {
  return this._listeners[e.type](options.event && options.event(e) || e);
}

function bindEvent(node, name, value, old) {
  var useCapture = name !== (name = name.replace(/Capture$/, ''));
  var nameLower = name.toLowerCase();
  name = (nameLower in node ? nameLower : name).slice(2);
  if (value) {
    if (!old) {
      node.addEventListener(name, eventProxy$1, useCapture);
    }
  } else {
    node.removeEventListener(name, eventProxy$1, useCapture);
  }
(node._listeners || (node._listeners = {}))[name] = value;
}

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *  @param {Element} [dom=null]    A DOM node to mutate into the shape of the `vnode`
 *  @param {VNode} vnode      A VNode (with descendants forming a tree) representing the desired DOM structure
 *  @returns {Element} dom      The created/mutated element
 *  @private
 */
function diff(dom, vnode, parent, component, updateSelf) {
  //first render return undefined
  if (!dom && !vnode) return;
  // diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
  var ret;
  if (!diffLevel++) {
    // when first starting the diff, check if we're diffing an SVG or within an SVG
    isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

    // hydration is indicated by the existing element to be diffed not having a prop cache
    hydrating = dom != null && !('prevProps' in dom);
  }
  if (vnode && vnode.nodeName === Fragment) {
    vnode = vnode.children;
  }
  if (isArray(vnode)) {
    if (parent) {
      //don't use css and props.css when using h.f
      innerDiffNode(parent, vnode, hydrating, component, updateSelf);
    } else {
      ret = [];
      vnode.forEach(function (item, index) {
        var ele = idiff(index === 0 ? dom : null, item, component, updateSelf);
        ret.push(ele);
      });
    }
  } else {
    if (isArray(dom)) {
      dom.forEach(function (one, index) {
        if (index === 0) {
          ret = idiff(one, vnode, component, updateSelf);
        } else {
          recollectNodeTree(one, false);
        }
      });
    } else {
      ret = idiff(dom, vnode, component, updateSelf);
    }
    // append the element if its a new parent
    if (parent && ret.parentNode !== parent) parent.appendChild(ret);
  }

  // diffLevel being reduced to 0 means we're exiting the diff
  if (! --diffLevel) {
    hydrating = false;
    // invoke queued componentDidMount lifecycle methods
  }

  return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, component, updateSelf) {
  if (dom && vnode && dom.props) {
    dom.props.children = vnode.children;
  }
  var out = dom,
      prevSvgMode = isSvgMode;

  // empty values (null, undefined, booleans) render as empty Text nodes
  if (vnode == null || typeof vnode === 'boolean') vnode = '';

  // Fast case: Strings & Numbers create/update Text nodes.
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    // update if it's already a Text node:
    if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || component)) {
      /* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
      if (dom.nodeValue != vnode) {
        dom.nodeValue = vnode;
      }
    } else {
      // it wasn't a Text node: replace it with one and recycle the old Element
      out = document.createTextNode(vnode);
      if (dom) {
        if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
        recollectNodeTree(dom, true);
      }
    }

    out['prevProps'] = true;

    return out;
  }

  // If the VNode represents a Component, perform a component diff:
  var vnodeName = vnode.nodeName;
  if (typeof vnodeName === 'function') {
    for (var key in options.mapping) {
      if (options.mapping[key] === vnodeName) {
        vnodeName = key;
        vnode.nodeName = key;
        break;
      }
    }
  }
  // Tracks entering and exiting SVG namespace when descending through the tree.
  isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

  // If there's no existing element or it's the wrong type, create a new one:
  vnodeName = String(vnodeName);
  if (!dom || !isNamedNode(dom, vnodeName)) {
    out = createNode(vnodeName, isSvgMode);

    if (dom) {
      // move children into the replacement node
      while (dom.firstChild) {
        out.appendChild(dom.firstChild);
      } // if the previous Element was mounted into the DOM, replace it inline
      if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

      // recycle the old element (skips non-Element node types)
      recollectNodeTree(dom, true);
    }
  }

  var fc = out.firstChild,
      props = out['prevProps'],
      vchildren = vnode.children;

  if (props == null) {
    props = out['prevProps'] = {};
    for (var a = out.attributes, i = a.length; i--;) {
      props[a[i].name] = a[i].value;
    }
  }

  // Optimization: fast-path for elements containing a single TextNode:
  if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
    if (fc.nodeValue != vchildren[0]) {
      fc.nodeValue = vchildren[0];
    }
  }
  // otherwise, if there are existing or new children, diff them:
  else if (vchildren && vchildren.length || fc != null) {
      if (!(out.constructor.is == 'WeElement' && out.constructor.noSlot)) {
        innerDiffNode(out, vchildren, hydrating || props.dangerouslySetInnerHTML != null, component, updateSelf);
      }
    }

  // Apply attributes/props from VNode to the DOM Element:
  diffAttributes(out, vnode.attributes, props, component, updateSelf);
  if (out.props) {
    out.props.children = vnode.children;
  }
  // restore previous SVG mode: (in case we're exiting an SVG namespace)
  isSvgMode = prevSvgMode;

  return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *  @param {Element} dom      Element whose children should be compared & mutated
 *  @param {Array} vchildren    Array of VNodes to compare to `dom.childNodes`
 *  @param {Boolean} isHydrating  If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, isHydrating, component, updateSelf) {
  var originalChildren = dom.childNodes,
      children = [],
      keyed = {},
      keyedLen = 0,
      min = 0,
      len = originalChildren.length,
      childrenLen = 0,
      vlen = vchildren ? vchildren.length : 0,
      j,
      c,
      f,
      vchild,
      child;

  // Build up a map of keyed children and an Array of unkeyed children:
  if (len !== 0) {
    for (var i = 0; i < len; i++) {
      var _child = originalChildren[i],
          props = _child['prevProps'],
          key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
      if (key != null) {
        keyedLen++;
        keyed[key] = _child;
      } else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
        children[childrenLen++] = _child;
      }
    }
  }

  if (vlen !== 0) {
    for (var i = 0; i < vlen; i++) {
      vchild = vchildren[i];
      child = null;

      if (vchild) {
        // attempt to find a node based on key matching
        var key = vchild.key;
        if (key != null) {
          if (keyedLen && keyed[key] !== undefined) {
            child = keyed[key];
            keyed[key] = undefined;
            keyedLen--;
          }
        }
        // attempt to pluck a node of the same type from the existing children
        else if (!child && min < childrenLen) {
            for (j = min; j < childrenLen; j++) {
              if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = undefined;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
              }
            }
          }
      }

      // morph the matched/found/created DOM child to match vchild (deep)
      child = idiff(child, vchild, component, updateSelf);

      f = originalChildren[i];
      if (child && child !== dom && child !== f) {
        if (f == null) {
          dom.appendChild(child);
        } else if (child === f.nextSibling) {
          removeNode(f);
        } else {
          dom.insertBefore(child, f);
        }
      }
    }
  }

  // remove unused keyed children:
  if (keyedLen) {
    for (var i in keyed) {
      if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
    }
  }

  // remove orphaned unkeyed children:
  while (min <= childrenLen) {
    if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
  }
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *  @param {Node} node            DOM node to start unmount/removal from
 *  @param {Boolean} [unmountOnly=false]  If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
  // If the node's VNode had a ref function, invoke it with null here.
  // (this is part of the React spec, and smart for unsetting references)
  if (node['prevProps'] != null && node['prevProps'].ref) {
    if (typeof node['prevProps'].ref === 'function') {
      node['prevProps'].ref(null);
    } else if (node['prevProps'].ref.current) {
      node['prevProps'].ref.current = null;
    }
  }

  if (unmountOnly === false || node['prevProps'] == null) {
    removeNode(node);
  }

  removeChildren(node);
}

/** Recollect/unmount all children.
 *  - we use .lastChild here because it causes less reflow than .firstChild
 *  - it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
  node = node.lastChild;
  while (node) {
    var next = node.previousSibling;
    recollectNodeTree(node, true);
    node = next;
  }
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *  @param {Element} dom    Element with attributes to diff `attrs` against
 *  @param {Object} attrs    The desired end-state key-value attribute pairs
 *  @param {Object} old      Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old, component, updateSelf) {
  var name;
  //let update = false
  var isWeElement = dom.update;
  var oldClone;
  if (dom.receiveProps) {
    oldClone = Object.assign({}, old);
  }
  // remove attributes no longer present on the vnode by setting them to undefined
  for (name in old) {
    if (!(attrs && attrs[name] != null) && old[name] != null) {
      setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode, component);
      if (isWeElement) {
        delete dom.props[name];
        //update = true
      }
    }
  }

  // add new & update changed attributes
  for (name in attrs) {
    if (isWeElement && typeof attrs[name] === 'object' && name !== 'ref') {
      if (name === 'style') {
        setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, component);
      }
      var ccName = camelCase(name);
      dom.props[ccName] = old[ccName] = attrs[name];
      //update = true
    } else if (name !== 'children' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
      setAccessor(dom, name, old[name], attrs[name], isSvgMode, component);
      //fix lazy load props missing
      if (dom.nodeName.indexOf('-') !== -1) {
        dom.props = dom.props || {};
        var _ccName = camelCase(name);
        dom.props[_ccName] = old[_ccName] = attrs[name];
        //update = true
      } else {
        old[name] = attrs[name];
      }
    }
  }

  if (isWeElement && !updateSelf && dom.parentNode) {
    //__hasChildren is not accuracy when it was empty at first, so add dom.children.length > 0 condition
    //if (update || dom.__hasChildren || dom.children.length > 0 || (dom.store && !dom.store.data)) {
    if (dom.receiveProps(dom.props, oldClone) !== false) {
      dom.update();
    }
    //}
  }
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var id = 0;

var WeElement = function (_HTMLElement) {
  _inherits(WeElement, _HTMLElement);

  function WeElement() {
    _classCallCheck(this, WeElement);

    // fix lazy load props missing
    var _this = _possibleConstructorReturn(this, _HTMLElement.call(this));

    _this.props = Object.assign({}, _this.constructor.defaultProps, _this.props);
    _this.elementId = id++;
    _this.computed = {};
    _this.isInstalled = false;
    return _this;
  }

  WeElement.prototype.connectedCallback = function connectedCallback() {
    var p = this.parentNode;
    while (p && !this.store) {
      this.store = p.store;
      p = p.parentNode || p.host;
    }

    this.attrsToProps();

    if (this.props.use) {
      this.use = this.props.use;
    }

    if (this.props.useSelf) {
      this.use = this.props.useSelf;
    }

    if (this.use) {
      var use = typeof this.use === 'function' ? this.use() : this.use;

      if (options.isMultiStore) {
        var _updatePath = {};
        var using = {};
        for (var storeName in use) {
          _updatePath[storeName] = {};
          using[storeName] = {};
          getPath(use[storeName], _updatePath, storeName);
          getUse(this.store[storeName].data, use[storeName], using, storeName);
          this.store[storeName].instances.push(this);
        }
        this.using = using;
        this._updatePath = _updatePath;
      } else {
        this._updatePath = getPath(use);
        this.using = getUse(this.store.data, use);
        this.store.instances.push(this);
      }
    }
    if (this.useSelf) {
      var _use = typeof this.useSelf === 'function' ? this.useSelf() : this.useSelf;
      if (options.isMultiStore) {
        var _updatePath2 = {};
        var _using = {};
        for (var _storeName in _use) {
          getPath(_use[_storeName], _updatePath2, _storeName);
          getUse(this.store[_storeName].data, _use[_storeName], _using, _storeName);
          this.store[_storeName].updateSelfInstances.push(this);
        }
        this.usingSelf = _using;
        this._updateSelfPath = _updatePath2;
      } else {
        this._updateSelfPath = getPath(_use);
        this.usingSelf = getUse(this.store.data, _use);
        this.store.updateSelfInstances.push(this);
      }
    }

    if (this.compute) {
      for (var key in this.compute) {
        this.computed[key] = this.compute[key].call(options.isMultiStore ? this.store : this.store.data);
      }
    }

    this.beforeInstall();
    this.install();
    this.afterInstall();

    var shadowRoot;
    if (this.constructor.isLightDom) {
      shadowRoot = this;
    } else {
      if (!this.shadowRoot) {
        shadowRoot = this.attachShadow({
          mode: 'open'
        });
      } else {
        shadowRoot = this.shadowRoot;
        var fc;
        while (fc = shadowRoot.firstChild) {
          shadowRoot.removeChild(fc);
        }
      }
    }

    var css = this.constructor.css;
    if (css) {
      if (typeof css === 'string') {
        var styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(css);
        shadowRoot.adoptedStyleSheets = [styleSheet];
      } else if (Object.prototype.toString.call(css) === '[object Array]') {
        var styleSheets = [];
        css.forEach(function (styleSheet) {
          if (typeof styleSheet === 'string') {
            var adoptedStyleSheet = new CSSStyleSheet();
            adoptedStyleSheet.replaceSync(styleSheet);
            styleSheets.push(adoptedStyleSheet);
          } else {
            styleSheets.push(styleSheet);
          }
          shadowRoot.adoptedStyleSheets = styleSheets;
        });
      } else {
        shadowRoot.adoptedStyleSheets = [css];
      }
    }

    this.beforeRender();
    options.afterInstall && options.afterInstall(this);

    var rendered = this.render(this.props, this.store);

    this.rootNode = diff(null, rendered, null, this);
    this.rendered();

    if (this.css) {
      shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css));
    }

    if (this.props.css) {
      this._customStyleElement = cssToDom(this.props.css);
      this._customStyleContent = this.props.css;
      shadowRoot.appendChild(this._customStyleElement);
    }

    if (isArray(this.rootNode)) {
      this.rootNode.forEach(function (item) {
        shadowRoot.appendChild(item);
      });
    } else {
      this.rootNode && shadowRoot.appendChild(this.rootNode);
    }
    this.installed();
    this.isInstalled = true;
  };

  WeElement.prototype.disconnectedCallback = function disconnectedCallback() {
    this.uninstall();
    this.isInstalled = false;
    if (this.store) {
      if (options.isMultiStore) {
        for (var key in this.store) {
          var current = this.store[key];
          removeItem(this, current.instances);
          removeItem(this, current.updateSelfInstances);
        }
      } else {
        removeItem(this, this.store.instances);
        removeItem(this, this.store.updateSelfInstances);
      }
    }
  };

  WeElement.prototype.update = function update(ignoreAttrs, updateSelf) {
    this._willUpdate = true;
    this.beforeUpdate();
    this.beforeRender();
    //fix null !== undefined
    if (this._customStyleContent != this.props.css) {
      this._customStyleContent = this.props.css;
      this._customStyleElement.textContent = this._customStyleContent;
    }
    this.attrsToProps(ignoreAttrs);

    var rendered = this.render(this.props, this.store);
    this.rendered();

    this.rootNode = diff(this.rootNode, rendered, this.constructor.isLightDom ? this : this.shadowRoot, this, updateSelf);
    this._willUpdate = false;
    this.updated();
  };

  WeElement.prototype.forceUpdate = function forceUpdate() {
    this.update(true);
  };

  WeElement.prototype.updateProps = function updateProps(obj) {
    var _this2 = this;

    Object.keys(obj).forEach(function (key) {
      _this2.props[key] = obj[key];
      if (_this2.prevProps) {
        _this2.prevProps[key] = obj[key];
      }
    });
    this.forceUpdate();
  };

  WeElement.prototype.updateSelf = function updateSelf(ignoreAttrs) {
    this.update(ignoreAttrs, true);
  };

  WeElement.prototype.removeAttribute = function removeAttribute(key) {
    _HTMLElement.prototype.removeAttribute.call(this, key);
    //Avoid executing removeAttribute methods before connectedCallback
    this.isInstalled && this.update();
  };

  WeElement.prototype.setAttribute = function setAttribute(key, val) {
    if (val && typeof val === 'object') {
      _HTMLElement.prototype.setAttribute.call(this, key, JSON.stringify(val));
    } else {
      _HTMLElement.prototype.setAttribute.call(this, key, val);
    }
    //Avoid executing setAttribute methods before connectedCallback
    this.isInstalled && this.update();
  };

  WeElement.prototype.pureRemoveAttribute = function pureRemoveAttribute(key) {
    _HTMLElement.prototype.removeAttribute.call(this, key);
  };

  WeElement.prototype.pureSetAttribute = function pureSetAttribute(key, val) {
    _HTMLElement.prototype.setAttribute.call(this, key, val);
  };

  WeElement.prototype.attrsToProps = function attrsToProps(ignoreAttrs) {
    if (options.ignoreAttrs || ignoreAttrs || this.store && this.store.ignoreAttrs) return;
    var ele = this;
    ele.props['css'] = ele.getAttribute('css');
    var attrs = this.constructor.propTypes;
    if (!attrs) return;
    Object.keys(attrs).forEach(function (key) {
      var type = attrs[key];
      var val = ele.getAttribute(hyphenate(key));
      if (val !== null) {
        switch (type) {
          case String:
            ele.props[key] = val;
            break;
          case Number:
            ele.props[key] = Number(val);
            break;
          case Boolean:
            if (val === 'false' || val === '0') {
              ele.props[key] = false;
            } else {
              ele.props[key] = true;
            }
            break;
          case Array:
          case Object:
            if (val[0] === ':') {
              ele.props[key] = getValByPath(val.substr(1), Omi.$);
            } else {
              ele.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
            }
            break;
        }
      } else {
        if (ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) {
          ele.props[key] = ele.constructor.defaultProps[key];
        } else {
          ele.props[key] = null;
        }
      }
    });
  };

  WeElement.prototype.fire = function fire(name, data) {
    this.dispatchEvent(new CustomEvent(name, {
      detail: data
    }));
  };

  WeElement.prototype.beforeInstall = function beforeInstall() {};

  WeElement.prototype.install = function install() {};

  WeElement.prototype.afterInstall = function afterInstall() {};

  WeElement.prototype.installed = function installed() {};

  WeElement.prototype.uninstall = function uninstall() {};

  WeElement.prototype.beforeUpdate = function beforeUpdate() {};

  WeElement.prototype.updated = function updated() {};

  WeElement.prototype.beforeRender = function beforeRender() {};

  WeElement.prototype.rendered = function rendered() {};

  WeElement.prototype.receiveProps = function receiveProps() {};

  return WeElement;
}(HTMLElement);

WeElement.is = 'WeElement';

/*!
 * https://github.com/Palindrom/JSONPatcherProxy
 * (c) 2017 Starcounter
 * MIT license
 */

/** Class representing a JS Object observer  */
var JSONPatcherProxy = function () {
  /**
   * Deep clones your object and returns a new object.
   */
  function deepClone(obj) {
    switch (typeof obj) {
      case 'object':
        return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
      case 'undefined':
        return null; //this is how JSON.stringify behaves for array items
      default:
        return obj; //no need to clone primitives
    }
  }
  JSONPatcherProxy.deepClone = deepClone;

  function escapePathComponent(str) {
    if (str.indexOf('/') == -1 && str.indexOf('~') == -1) return str;
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
  }
  JSONPatcherProxy.escapePathComponent = escapePathComponent;

  /**
   * Walk up the parenthood tree to get the path
   * @param {JSONPatcherProxy} instance
   * @param {Object} obj the object you need to find its path
   */
  function findObjectPath(instance, obj) {
    var pathComponents = [];
    var parentAndPath = instance.parenthoodMap.get(obj);
    while (parentAndPath && parentAndPath.path) {
      // because we're walking up-tree, we need to use the array as a stack
      pathComponents.unshift(parentAndPath.path);
      parentAndPath = instance.parenthoodMap.get(parentAndPath.parent);
    }
    if (pathComponents.length) {
      var path = pathComponents.join('/');
      return '/' + path;
    }
    return '';
  }
  /**
   * A callback to be used as th proxy set trap callback.
   * It updates parenthood map if needed, proxifies nested newly-added objects, calls default callbacks with the changes occurred.
   * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
   * @param {Object} target the affected object
   * @param {String} key the effect property's name
   * @param {Any} newValue the value being set
   */
  function setTrap(instance, target, key, newValue) {
    var parentPath = findObjectPath(instance, target);

    var destinationPropKey = parentPath + '/' + escapePathComponent(key);

    if (instance.proxifiedObjectsMap.has(newValue)) {
      var newValueOriginalObject = instance.proxifiedObjectsMap.get(newValue);

      instance.parenthoodMap.set(newValueOriginalObject.originalObject, {
        parent: target,
        path: key
      });
    }
    /*
        mark already proxified values as inherited.
        rationale: proxy.arr.shift()
        will emit
        {op: replace, path: '/arr/1', value: arr_2}
        {op: remove, path: '/arr/2'}
         by default, the second operation would revoke the proxy, and this renders arr revoked.
        That's why we need to remember the proxies that are inherited.
      */
    var revokableInstance = instance.proxifiedObjectsMap.get(newValue);
    /*
    Why do we need to check instance.isProxifyingTreeNow?
     We need to make sure we mark revokables as inherited ONLY when we're observing,
    because throughout the first proxification, a sub-object is proxified and then assigned to
    its parent object. This assignment of a pre-proxified object can fool us into thinking
    that it's a proxified object moved around, while in fact it's the first assignment ever.
     Checking isProxifyingTreeNow ensures this is not happening in the first proxification,
    but in fact is is a proxified object moved around the tree
    */
    if (revokableInstance && !instance.isProxifyingTreeNow) {
      revokableInstance.inherited = true;
    }

    // if the new value is an object, make sure to watch it
    if (newValue && typeof newValue == 'object' && !instance.proxifiedObjectsMap.has(newValue)) {
      instance.parenthoodMap.set(newValue, {
        parent: target,
        path: key
      });
      newValue = instance._proxifyObjectTreeRecursively(target, newValue, key);
    }
    // let's start with this operation, and may or may not update it later
    var operation = {
      op: 'remove',
      path: destinationPropKey
    };
    if (typeof newValue == 'undefined') {
      // applying De Morgan's laws would be a tad faster, but less readable
      if (!Array.isArray(target) && !target.hasOwnProperty(key)) {
        // `undefined` is being set to an already undefined value, keep silent
        return Reflect.set(target, key, newValue);
      }
      // when array element is set to `undefined`, should generate replace to `null`
      if (Array.isArray(target)) {
operation.op = 'replace', operation.value = null;
      }
      var oldValue = instance.proxifiedObjectsMap.get(target[key]);
      // was the deleted a proxified object?
      if (oldValue) {
        instance.parenthoodMap.delete(target[key]);
        instance.disableTrapsForProxy(oldValue);
        instance.proxifiedObjectsMap.delete(oldValue);
      }
    } else {
      if (Array.isArray(target) && !Number.isInteger(+key.toString())) {
        /* array props (as opposed to indices) don't emit any patches, to avoid needless `length` patches */
        if (key != 'length') {
          console.warn('JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch');
        }
        return Reflect.set(target, key, newValue);
      }
      operation.op = 'add';
      if (target.hasOwnProperty(key)) {
        if (typeof target[key] !== 'undefined' || Array.isArray(target)) {
          operation.op = 'replace'; // setting `undefined` array elements is a `replace` op
        }
      }
      operation.value = newValue;
    }
    operation.oldValue = target[key];
    var reflectionResult = Reflect.set(target, key, newValue);
    instance.defaultCallback(operation);
    return reflectionResult;
  }
  /**
   * A callback to be used as th proxy delete trap callback.
   * It updates parenthood map if needed, calls default callbacks with the changes occurred.
   * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
   * @param {Object} target the effected object
   * @param {String} key the effected property's name
   */
  function deleteTrap(instance, target, key) {
    if (typeof target[key] !== 'undefined') {
      var parentPath = findObjectPath(instance, target);
      var destinationPropKey = parentPath + '/' + escapePathComponent(key);

      var revokableProxyInstance = instance.proxifiedObjectsMap.get(target[key]);

      if (revokableProxyInstance) {
        if (revokableProxyInstance.inherited) {
          /*
            this is an inherited proxy (an already proxified object that was moved around),
            we shouldn't revoke it, because even though it was removed from path1, it is still used in path2.
            And we know that because we mark moved proxies with `inherited` flag when we move them
             it is a good idea to remove this flag if we come across it here, in deleteProperty trap.
            We DO want to revoke the proxy if it was removed again.
          */
          revokableProxyInstance.inherited = false;
        } else {
          instance.parenthoodMap.delete(revokableProxyInstance.originalObject);
          instance.disableTrapsForProxy(revokableProxyInstance);
          instance.proxifiedObjectsMap.delete(target[key]);
        }
      }
      var reflectionResult = Reflect.deleteProperty(target, key);

      instance.defaultCallback({
        op: 'remove',
        path: destinationPropKey
      });

      return reflectionResult;
    }
  }
  /* pre-define resume and pause functions to enhance constructors performance */
  function resume() {
    var _this = this;

    this.defaultCallback = function (operation) {
      _this.isRecording && _this.patches.push(operation);
      _this.userCallback && _this.userCallback(operation);
    };
    this.isObserving = true;
  }
  function pause() {
    this.defaultCallback = function () {};
    this.isObserving = false;
  }
  /**
   * Creates an instance of JSONPatcherProxy around your object of interest `root`.
   * @param {Object|Array} root - the object you want to wrap
   * @param {Boolean} [showDetachedWarning = true] - whether to log a warning when a detached sub-object is modified @see {@link https://github.com/Palindrom/JSONPatcherProxy#detached-objects}
   * @returns {JSONPatcherProxy}
   * @constructor
   */
  function JSONPatcherProxy(root, showDetachedWarning) {
    this.isProxifyingTreeNow = false;
    this.isObserving = false;
    this.proxifiedObjectsMap = new Map();
    this.parenthoodMap = new Map();
    // default to true
    if (typeof showDetachedWarning !== 'boolean') {
      showDetachedWarning = true;
    }

    this.showDetachedWarning = showDetachedWarning;
    this.originalObject = root;
    this.cachedProxy = null;
    this.isRecording = false;
    this.userCallback;
    /**
     * @memberof JSONPatcherProxy
     * Restores callback back to the original one provided to `observe`.
     */
    this.resume = resume.bind(this);
    /**
     * @memberof JSONPatcherProxy
     * Replaces your callback with a noop function.
     */
    this.pause = pause.bind(this);
  }

  JSONPatcherProxy.prototype.generateProxyAtPath = function (parent, obj, path) {
    var _this2 = this;

    if (!obj) {
      return obj;
    }
    var traps = {
      set: function set(target, key, value, receiver) {
        return setTrap(_this2, target, key, value, receiver);
      },
      deleteProperty: function deleteProperty(target, key) {
        return deleteTrap(_this2, target, key);
      }
    };
    var revocableInstance = Proxy.revocable(obj, traps);
    // cache traps object to disable them later.
    revocableInstance.trapsInstance = traps;
    revocableInstance.originalObject = obj;

    /* keeping track of object's parent and path */

    this.parenthoodMap.set(obj, { parent: parent, path: path });

    /* keeping track of all the proxies to be able to revoke them later */
    this.proxifiedObjectsMap.set(revocableInstance.proxy, revocableInstance);
    return revocableInstance.proxy;
  };
  // grab tree's leaves one by one, encapsulate them into a proxy and return
  JSONPatcherProxy.prototype._proxifyObjectTreeRecursively = function (parent, root, path) {
    for (var key in root) {
      if (root.hasOwnProperty(key)) {
        if (root[key] instanceof Object) {
          root[key] = this._proxifyObjectTreeRecursively(root, root[key], escapePathComponent(key));
        }
      }
    }
    return this.generateProxyAtPath(parent, root, path);
  };
  // this function is for aesthetic purposes
  JSONPatcherProxy.prototype.proxifyObjectTree = function (root) {
    /*
    while proxyifying object tree,
    the proxyifying operation itself is being
    recorded, which in an unwanted behavior,
    that's why we disable recording through this
    initial process;
    */
    this.pause();
    this.isProxifyingTreeNow = true;
    var proxifiedObject = this._proxifyObjectTreeRecursively(undefined, root, '');
    /* OK you can record now */
    this.isProxifyingTreeNow = false;
    this.resume();
    return proxifiedObject;
  };
  /**
   * Turns a proxified object into a forward-proxy object; doesn't emit any patches anymore, like a normal object
   * @param {Proxy} proxy - The target proxy object
   */
  JSONPatcherProxy.prototype.disableTrapsForProxy = function (revokableProxyInstance) {
    if (this.showDetachedWarning) {
      var message = "You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects";

      revokableProxyInstance.trapsInstance.set = function (targetObject, propKey, newValue) {
        console.warn(message);
        return Reflect.set(targetObject, propKey, newValue);
      };
      revokableProxyInstance.trapsInstance.set = function (targetObject, propKey, newValue) {
        console.warn(message);
        return Reflect.set(targetObject, propKey, newValue);
      };
      revokableProxyInstance.trapsInstance.deleteProperty = function (targetObject, propKey) {
        return Reflect.deleteProperty(targetObject, propKey);
      };
    } else {
      delete revokableProxyInstance.trapsInstance.set;
      delete revokableProxyInstance.trapsInstance.get;
      delete revokableProxyInstance.trapsInstance.deleteProperty;
    }
  };
  /**
   * Proxifies the object that was passed in the constructor and returns a proxified mirror of it. Even though both parameters are options. You need to pass at least one of them.
   * @param {Boolean} [record] - whether to record object changes to a later-retrievable patches array.
   * @param {Function} [callback] - this will be synchronously called with every object change with a single `patch` as the only parameter.
   */
  JSONPatcherProxy.prototype.observe = function (record, callback) {
    if (!record && !callback) {
      throw new Error('You need to either record changes or pass a callback');
    }
    this.isRecording = record;
    this.userCallback = callback;
    /*
    I moved it here to remove it from `unobserve`,
    this will also make the constructor faster, why initiate
    the array before they decide to actually observe with recording?
    They might need to use only a callback.
    */
    if (record) this.patches = [];
    this.cachedProxy = this.proxifyObjectTree(this.originalObject);
    return this.cachedProxy;
  };
  /**
   * If the observed is set to record, it will synchronously return all the patches and empties patches array.
   */
  JSONPatcherProxy.prototype.generate = function () {
    if (!this.isRecording) {
      throw new Error('You should set record to true to get patches later');
    }
    return this.patches.splice(0, this.patches.length);
  };
  /**
   * Revokes all proxies rendering the observed object useless and good for garbage collection @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable}
   */
  JSONPatcherProxy.prototype.revoke = function () {
    this.proxifiedObjectsMap.forEach(function (el) {
      el.revoke();
    });
  };
  /**
   * Disables all proxies' traps, turning the observed object into a forward-proxy object, like a normal object that you can modify silently.
   */
  JSONPatcherProxy.prototype.disableTraps = function () {
    this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy, this);
  };
  return JSONPatcherProxy;
}();

function render(vnode, parent, store) {
  parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
  if (store) {
    if (store.data) {
      observeStore(store);
    }
    // else {
    //   //Multi-store injection
    //   for (let key in store) {
    //     if (key !== 'ignoreAttrs') {
    //       options.isMultiStore = true
    //       observeStore(store[key], key)
    //     }
    //   }
    // }
    parent.store = store;
  }
  return diff(null, vnode, parent, false);
}

function observeStore(store, key) {
  store.instances = [];
  store.updateSelfInstances = [];
  extendStoreUpdate(store, key);

  store.data = new JSONPatcherProxy(store.data).observe(false, function (patch) {
    var patchs = {};
    if (patch.op === 'remove') {
      // fix arr splice
      var kv = getArrayPatch(patch.path, store);
      patchs[kv.k] = kv.v;

      update(patchs, store);
    } else {
      var key = fixPath(patch.path);
      patchs[key] = patch.value;

      update(patchs, store);
    }
  });
}

function update(patch, store) {
  store.update(patch);
}

function extendStoreUpdate(store, key) {
  store.update = function (patch) {
    if (Object.keys(patch).length > 0) {
      this.instances.forEach(function (instance) {
        compute(instance, key);
        if (key) {
          if (instance._updatePath && instance._updatePath[key] && needUpdate(patch, instance._updatePath[key])) {
            if (instance.use) {
              getUse(store.data, (typeof instance.use === 'function' ? instance.use() : instance.use)[key], instance.using, key);
            }

            instance.update();
          }
        } else {
          if (instance._updatePath && needUpdate(patch, instance._updatePath)) {
            if (instance.use) {
              instance.using = getUse(store.data, typeof instance.use === 'function' ? instance.use() : instance.use);
            }

            instance.update();
          }
        }
      });

      this.updateSelfInstances.forEach(function (instance) {
        compute(instance, key);
        if (key) {
          if (instance._updateSelfPath && instance._updateSelfPath[key] && needUpdate(patch, instance._updateSelfPath[key])) {
            if (instance.useSelf) {
              getUse(store.data, (typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf)[key], instance.usingSelf, key);
            }

            instance.updateSelf();
          }
        } else {
          if (instance._updateSelfPath && needUpdate(patch, instance._updateSelfPath)) {
            instance.usingSelf = getUse(store.data, typeof instance.useSelf === 'function' ? instance.useSelf() : instance.useSelf);
            instance.updateSelf();
          }
        }
      });
      this.onChange && this.onChange(patch);
    }
  };
}

function compute(instance, isMultiStore) {
  if (instance.compute) {
    for (var ck in instance.compute) {
      instance.computed[ck] = instance.compute[ck].call(isMultiStore ? instance.store : instance.store.data);
    }
  }
}

function needUpdate(diffResult, updatePath) {
  for (var keyA in diffResult) {
    if (updatePath[keyA]) {
      return true;
    }
    for (var keyB in updatePath) {
      if (includePath(keyA, keyB)) {
        return true;
      }
    }
  }
  return false;
}

function includePath(pathA, pathB) {
  if (pathA.indexOf(pathB) === 0) {
    var next = pathA.substr(pathB.length, 1);
    if (next === '[' || next === '.') {
      return true;
    }
  }
  return false;
}

function fixPath(path) {
  var mpPath = '';
  var arr = path.replace('/', '').split('/');
  arr.forEach(function (item, index) {
    if (index) {
      if (isNaN(Number(item))) {
        mpPath += '.' + item;
      } else {
        mpPath += '[' + item + ']';
      }
    } else {
      mpPath += item;
    }
  });
  return mpPath;
}

function getArrayPatch(path, store) {
  var arr = path.replace('/', '').split('/');
  var current = store.data[arr[0]];
  for (var i = 1, len = arr.length; i < len - 1; i++) {
    current = current[arr[i]];
  }
  return {
    k: fixArrPath(path),
    v: current
  };
}

function fixArrPath(path) {
  var mpPath = '';
  var arr = path.replace('/', '').split('/');
  var len = arr.length;
  arr.forEach(function (item, index) {
    if (index < len - 1) {
      if (index) {
        if (isNaN(Number(item))) {
          mpPath += '.' + item;
        } else {
          mpPath += '[' + item + ']';
        }
      } else {
        mpPath += item;
      }
    }
  });
  return mpPath;
}

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var storeHelpers = ['use', 'useSelf'];

function define(name, ctor, config) {
  if (customElements.get(name)) {
    return;
  }
  if (options.mapping[name]) {
    return;
  }
  if (ctor.is === 'WeElement') {
    customElements.define(name, ctor);
    options.mapping[name] = ctor;
  } else {
    if (typeof config === 'string') {
      config = { css: config };
    } else {
      config = config || {};
    }

    var Ele = function (_WeElement) {
      _inherits$1(Ele, _WeElement);

      function Ele() {
        var _temp, _this, _ret;

        _classCallCheck$1(this, Ele);

        for (var _len = arguments.length, args = Array(_len), key = 0; key < _len; key++) {
          args[key] = arguments[key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _WeElement.call.apply(_WeElement, [this].concat(args))), _this), _this.compute = config.compute, _temp), _possibleConstructorReturn$1(_this, _ret);
      }

      Ele.prototype.render = function render() {
        return ctor.call(this, this);
      };

      return Ele;
    }(WeElement);

    Ele.css = config.css;
    Ele.propTypes = config.propTypes;
    Ele.defaultProps = config.defaultProps;
    Ele.isLightDom = config.isLightDom;

    var _loop = function _loop(key) {
      if (typeof config[key] === 'function') {
        Ele.prototype[key] = function () {
          return config[key].apply(this, arguments);
        };
      }
    };

    for (var key in config) {
      _loop(key);
    }

    storeHelpers.forEach(function (func) {
      if (config[func] && config[func] !== 'function') {
        Ele.prototype[func] = function () {
          return config[func];
        };
      }
    });

    customElements.define(name, Ele);
    options.mapping[name] = Ele;
  }
}

function tag(name) {
  return function (target) {
    define(name, target);
  };
}

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode    The virtual DOM element to clone
 * @param {Object} props  Attributes/props to add when cloning
 * @param {VNode} rest    Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

function getHost(ele) {
  var p = ele.parentNode;
  while (p) {
    if (p.host) {
      return p.host;
    } else if (p.shadowRoot && p.shadowRoot.host) {
      return p.shadowRoot.host;
    } else {
      p = p.parentNode;
    }
  }
}

function rpx(css) {
  return css.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function (a, b) {
    return window.innerWidth * Number(b) / 750 + 'px';
  });
}

/**
 * classNames based on https://github.com/JedWatson/classnames
 * by Jed Watson
 * Licensed under the MIT License
 * https://github.com/JedWatson/classnames/blob/master/LICENSE
 * modified by dntzhang
 */

var hasOwn = {}.hasOwnProperty;

function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

function extractClass() {
  var _Array$prototype$slic = Array.prototype.slice.call(arguments, 0),
      props = _Array$prototype$slic[0],
      args = _Array$prototype$slic.slice(1);

  if (props.class) {
    args.unshift(props.class);
    delete props.class;
  } else if (props.className) {
    args.unshift(props.className);
    delete props.className;
  }
  if (args.length > 0) {
    return { class: classNames.apply(null, args) };
  }
}

function o(obj) {
  return JSON.stringify(obj);
}

(function () {

    if ('adoptedStyleSheets' in document) { return; }

    var hasShadyCss = 'ShadyCSS' in window && !ShadyCSS.nativeShadow;
    var bootstrapper = document.implementation.createHTMLDocument('boot');
    var closedShadowRootRegistry = new WeakMap();
    var _DOMException = typeof DOMException === 'object' ? Error : DOMException;

    var defineProperty = Object.defineProperty;
    var forEach = Array.prototype.forEach;
    var importPattern = /@import.+?;?$/gm;
    function rejectImports(contents) {
        var _contents = contents.replace(importPattern, '');
        if (_contents !== contents) {
            console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
        }
        return _contents.trim();
    }
    function clearRules(sheet) {
        for (var i = 0; i < sheet.cssRules.length; i++) {
            sheet.deleteRule(0);
        }
    }
    function insertAllRules(from, to) {
        forEach.call(from.cssRules, function (rule, i) {
            to.insertRule(rule.cssText, i);
        });
    }
    function isElementConnected(element) {
        return 'isConnected' in element
            ? element.isConnected
            : document.contains(element);
    }
    function unique(arr) {
        return arr.filter(function (value, index) { return arr.indexOf(value) === index; });
    }
    function diff(arr1, arr2) {
        return arr1.filter(function (value) { return arr2.indexOf(value) === -1; });
    }
    function removeNode(node) {
        node.parentNode.removeChild(node);
    }
    function getShadowRoot(element) {
        return element.shadowRoot || closedShadowRootRegistry.get(element);
    }

    var cssStyleSheetMethods = [
        'addImport',
        'addPageRule',
        'addRule',
        'deleteRule',
        'insertRule',
        'removeImport',
        'removeRule',
    ];
    var NonConstructedStyleSheet = CSSStyleSheet;
    var nonConstructedProto = NonConstructedStyleSheet.prototype;
    nonConstructedProto.replace = function () {
        return Promise.reject(new _DOMException("Can't call replace on non-constructed CSSStyleSheets."));
    };
    nonConstructedProto.replaceSync = function () {
        throw new _DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
    };
    function isCSSStyleSheetInstance(instance) {
        return typeof instance === 'object'
            ? proto$2.isPrototypeOf(instance) ||
                nonConstructedProto.isPrototypeOf(instance)
            : false;
    }
    function isNonConstructedStyleSheetInstance(instance) {
        return typeof instance === 'object'
            ? nonConstructedProto.isPrototypeOf(instance)
            : false;
    }
    var $basicStyleSheet = new WeakMap();
    var $locations = new WeakMap();
    var $adoptersByLocation = new WeakMap();
    function addAdopterLocation(sheet, location) {
        var adopter = document.createElement('style');
        $adoptersByLocation.get(sheet).set(location, adopter);
        $locations.get(sheet).push(location);
        return adopter;
    }
    function getAdopterByLocation(sheet, location) {
        return $adoptersByLocation.get(sheet).get(location);
    }
    function removeAdopterLocation(sheet, location) {
        $adoptersByLocation.get(sheet).delete(location);
        $locations.set(sheet, $locations.get(sheet).filter(function (_location) { return _location !== location; }));
    }
    function restyleAdopter(sheet, adopter) {
        requestAnimationFrame(function () {
            clearRules(adopter.sheet);
            insertAllRules($basicStyleSheet.get(sheet), adopter.sheet);
        });
    }
    function checkInvocationCorrectness(self) {
        if (!$basicStyleSheet.has(self)) {
            throw new TypeError('Illegal invocation');
        }
    }
    function ConstructedStyleSheet() {
        var self = this;
        var style = document.createElement('style');
        bootstrapper.body.appendChild(style);
        $basicStyleSheet.set(self, style.sheet);
        $locations.set(self, []);
        $adoptersByLocation.set(self, new WeakMap());
    }
    var proto$2 = ConstructedStyleSheet.prototype;
    proto$2.replace = function replace(contents) {
        try {
            this.replaceSync(contents);
            return Promise.resolve(this);
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    proto$2.replaceSync = function replaceSync(contents) {
        checkInvocationCorrectness(this);
        if (typeof contents === 'string') {
            var self_1 = this;
            var style = $basicStyleSheet.get(self_1).ownerNode;
            style.textContent = rejectImports(contents);
            $basicStyleSheet.set(self_1, style.sheet);
            $locations.get(self_1).forEach(function (location) {
                if (location.isConnected()) {
                    restyleAdopter(self_1, getAdopterByLocation(self_1, location));
                }
            });
        }
    };
    defineProperty(proto$2, 'cssRules', {
        configurable: true,
        enumerable: true,
        get: function cssRules() {
            checkInvocationCorrectness(this);
            return $basicStyleSheet.get(this).cssRules;
        },
    });
    cssStyleSheetMethods.forEach(function (method) {
        proto$2[method] = function () {
            var self = this;
            checkInvocationCorrectness(self);
            var args = arguments;
            var basic = $basicStyleSheet.get(self);
            var locations = $locations.get(self);
            var result = basic[method].apply(basic, args);
            locations.forEach(function (location) {
                if (location.isConnected()) {
                    var sheet = getAdopterByLocation(self, location).sheet;
                    sheet[method].apply(sheet, args);
                }
            });
            return result;
        };
    });
    defineProperty(ConstructedStyleSheet, Symbol.hasInstance, {
        configurable: true,
        value: isCSSStyleSheetInstance,
    });

    var defaultObserverOptions = {
        childList: true,
        subtree: true,
    };
    var locations = new WeakMap();
    function getAssociatedLocation(element) {
        var location = locations.get(element);
        if (!location) {
            location = new Location(element);
            locations.set(element, location);
        }
        return location;
    }
    function attachAdoptedStyleSheetProperty(constructor) {
        defineProperty(constructor.prototype, 'adoptedStyleSheets', {
            configurable: true,
            enumerable: true,
            get: function () {
                return getAssociatedLocation(this).sheets;
            },
            set: function (sheets) {
                getAssociatedLocation(this).update(sheets);
            },
        });
    }
    function traverseWebComponents(node, callback) {
        var iter = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT, function (foundNode) {
            return getShadowRoot(foundNode)
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_REJECT;
        },
        null, false);
        for (var next = void 0; (next = iter.nextNode());) {
            callback(getShadowRoot(next));
        }
    }
    var $element = new WeakMap();
    var $uniqueSheets = new WeakMap();
    var $observer = new WeakMap();
    function isExistingAdopter(self, element) {
        return (element instanceof HTMLStyleElement &&
            $uniqueSheets.get(self).some(function (sheet) { return getAdopterByLocation(sheet, self); }));
    }
    function getAdopterContainer(self) {
        var element = $element.get(self);
        return element instanceof Document ? element.body : element;
    }
    function adopt(self) {
        var styleList = document.createDocumentFragment();
        var sheets = $uniqueSheets.get(self);
        var observer = $observer.get(self);
        var container = getAdopterContainer(self);
        observer.disconnect();
        sheets.forEach(function (sheet) {
            styleList.appendChild(getAdopterByLocation(sheet, self) || addAdopterLocation(sheet, self));
        });
        container.insertBefore(styleList, null);
        observer.observe(container, defaultObserverOptions);
        sheets.forEach(function (sheet) {
            restyleAdopter(sheet, getAdopterByLocation(sheet, self));
        });
    }
    function Location(element) {
        var self = this;
        self.sheets = [];
        $element.set(self, element);
        $uniqueSheets.set(self, []);
        $observer.set(self, new MutationObserver(function (mutations, observer) {
            if (!document) {
                observer.disconnect();
                return;
            }
            mutations.forEach(function (mutation) {
                if (!hasShadyCss) {
                    forEach.call(mutation.addedNodes, function (node) {
                        if (!(node instanceof Element)) {
                            return;
                        }
                        traverseWebComponents(node, function (root) {
                            getAssociatedLocation(root).connect();
                        });
                    });
                }
                forEach.call(mutation.removedNodes, function (node) {
                    if (!(node instanceof Element)) {
                        return;
                    }
                    if (isExistingAdopter(self, node)) {
                        adopt(self);
                    }
                    if (!hasShadyCss) {
                        traverseWebComponents(node, function (root) {
                            getAssociatedLocation(root).disconnect();
                        });
                    }
                });
            });
        }));
    }
    var proto$1 = Location.prototype;
    proto$1.isConnected = function isConnected() {
        var element = $element.get(this);
        return element instanceof Document
            ? element.readyState !== 'loading'
            : isElementConnected(element.host);
    };
    proto$1.connect = function connect() {
        var container = getAdopterContainer(this);
        $observer.get(this).observe(container, defaultObserverOptions);
        if ($uniqueSheets.get(this).length > 0) {
            adopt(this);
        }
        traverseWebComponents(container, function (root) {
            getAssociatedLocation(root).connect();
        });
    };
    proto$1.disconnect = function disconnect() {
        $observer.get(this).disconnect();
    };
    proto$1.update = function update(sheets) {
        var self = this;
        var locationType = $element.get(self) === document ? 'Document' : 'ShadowRoot';
        if (!Array.isArray(sheets)) {
            throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
        }
        if (!sheets.every(isCSSStyleSheetInstance)) {
            throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
        }
        if (sheets.some(isNonConstructedStyleSheetInstance)) {
            throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Can't adopt non-constructed stylesheets");
        }
        self.sheets = sheets;
        var oldUniqueSheets = $uniqueSheets.get(self);
        var uniqueSheets = unique(sheets);
        var removedSheets = diff(oldUniqueSheets, uniqueSheets);
        removedSheets.forEach(function (sheet) {
            removeNode(getAdopterByLocation(sheet, self));
            removeAdopterLocation(sheet, self);
        });
        $uniqueSheets.set(self, uniqueSheets);
        if (self.isConnected() && uniqueSheets.length > 0) {
            adopt(self);
        }
    };

    window.CSSStyleSheet = ConstructedStyleSheet;
    attachAdoptedStyleSheetProperty(Document);
    if ('ShadowRoot' in window) {
        attachAdoptedStyleSheetProperty(ShadowRoot);
        var proto = Element.prototype;
        var attach_1 = proto.attachShadow;
        proto.attachShadow = function attachShadow(init) {
            var root = attach_1.call(this, init);
            if (init.mode === 'closed') {
                closedShadowRootRegistry.set(this, root);
            }
            return root;
        };
    }
    var documentLocation = getAssociatedLocation(document);
    if (documentLocation.isConnected()) {
        documentLocation.connect();
    }
    else {
        document.addEventListener('DOMContentLoaded', documentLocation.connect.bind(documentLocation));
    }

}());

h.f = Fragment;

function createRef() {
	return {};
}

var $ = {};
var Component = WeElement;
var defineElement = define;
var elements = options.mapping;

var omi = {
	tag: tag,
	WeElement: WeElement,
	Component: Component,
	render: render,
	h: h,
	createElement: h,
	options: options,
	define: define,
	cloneElement: cloneElement,
	getHost: getHost,
	rpx: rpx,
	defineElement: defineElement,
	classNames: classNames,
	extractClass: extractClass,
	createRef: createRef,
	o: o,
	elements: elements,
	$: $,
	extend: extend$1,
	get: get,
	set: set,
	bind: bind,
	unbind: unbind,
	JSONProxy: JSONPatcherProxy
};

options.root.Omi = omi;
options.root.omi = omi;
options.root.Omi.version = '6.19.26';

/* harmony default export */ __webpack_exports__["default"] = (omi);

//# sourceMappingURL=omi.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/demo.tsx":
/*!**********************!*\
  !*** ./src/demo.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "./node_modules/_omi@6.19.26@omi/dist/omi.esm.js");
__webpack_require__(/*! ./index.tsx */ "./src/index.tsx");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataSource = [{
                id: 1,
                name: 'xwang',
                age: 18,
                address: 'Tencent'
            }, {
                id: 2,
                name: 'dntzhang',
                age: 12,
                address: 'Tencent',
                $config: {
                    bgColor: 'rgb(247 176 176 / 32%)'
                }
            },
            {
                id: 3,
                name: 'lucy',
                age: 12,
                address: 'Tencent',
            }, {
                id: 4,
                name: 'john',
                age: 12,
                address: 'Tencent',
                $config: {
                    bgColor: 'rgb(230 162 60 / 34%)'
                }
            }, {
                id: 5,
                name: 'tim',
                age: 12,
                address: 'Tencent'
            }, {
                id: 6,
                name: 'tim',
                age: 12,
                address: 'Tencent'
            }, {
                id: 7,
                name: 'tim',
                age: 12,
                address: 'Tencent'
            }, {
                id: 8,
                name: 'tim',
                age: 12,
                address: 'Tencent'
            }
        ];
        _this.columns = [{
                title: 'ID',
                width: '20px',
                render: function (item) { return (omi_1.h("strong", null, item.id)); },
            }, {
                title: 'Name',
                key: 'name',
                width: '130px',
                editable: true
            }, {
                title: 'Age',
                key: 'age',
                width: '70px',
                editable: true
            }, {
                title: 'Address',
                key: 'address',
                editable: true
            }, {
                title: '操作',
                align: 'right',
                render: function (item) {
                    //onclick 会绑定多次的问题(o-icon-delete一次，o-icon-delete内部的svg一次)
                    return omi_1.h("div", null,
                        omi_1.h("o-icon-edit", { "data-item-id": item.id, onClick: _this.onEditClick, style: "cursor:pointer;font-size:20px;", title: "\u7F16\u8F91" }),
                        omi_1.h("o-icon-delete", { "data-item-id": item.id, onClick: _this.onDeleteClick, style: "cursor:pointer;font-size:20px;", title: "\u5220\u9664" }));
                }
            }];
        _this.onEditClick = function (evt) {
        };
        _this.onDeleteClick = function (evt) {
            if (evt.currentTarget.dataset.itemId) {
                _this.table.deleteRowById(evt.currentTarget.dataset.itemId);
            }
        };
        return _this;
    }
    Table.prototype.render = function (props) {
        var _this = this;
        return omi_1.h("div", null,
            omi_1.h("o-table", { ref: function (e) { return _this.table = e; }, checkbox: true, stripe: false, border: true, compact: false, width: "200px", height: "200px", stickyLeftCount: 2, stickyTop: true, columns: this.columns, dataSource: this.dataSource }),
            omi_1.h("o-table", { ref: function (e) { return _this.table = e; }, checkbox: true, stripe: false, border: true, compact: true, columns: this.columns, dataSource: JSON.parse(JSON.stringify(this.dataSource)) }));
    };
    Table = __decorate([
        omi_1.tag('table-demo')
    ], Table);
    return Table;
}(omi_1.WeElement));
exports.default = Table;
omi_1.render(omi_1.h("table-demo", null), 'body', {
    ignoreAttrs: true
});


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/_css-loader@1.0.1@css-loader!../node_modules/_resolve-url-loader@3.1.4@resolve-url-loader!../node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.4@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "./node_modules/_omi@6.19.26@omi/dist/omi.esm.js");
__webpack_require__(/*! @omiu/checkbox */ "./node_modules/_@omiu_checkbox@0.0.11@@omiu/checkbox/src/index.esm.js");
__webpack_require__(/*! @omiu/input */ "./node_modules/_@omiu_input@0.0.11@@omiu/input/src/index.esm.js");
var transition_ts_1 = __webpack_require__(/*! ./transition.ts */ "./src/transition.ts");
var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deleteRow = function (item) {
            _this.props.dataSource.splice(_this.props.dataSource.indexOf(item), 1);
            _this.update();
        };
        _this._changeHandlerTh = function (e, item) {
            _this.fire('change-all', { item: item, checked: e.detail });
            _this.props.dataSource.forEach(function (item) {
                item.checked = e.detail;
            });
            _this.update();
        };
        _this._changeHandlerTd = function (e, item) {
            _this.fire('change', { item: item, checked: e.detail });
            item.checked = e.detail;
            _this.update();
        };
        _this.onChange = function (evt, item, column) {
            var oldValue = item[column.key];
            item[column.key] = evt.detail;
            _this.update();
            _this.fire('data-changed', {
                value: item[column.key],
                oldValue: oldValue,
                item: item,
                column: column
            });
        };
        _this.onTdClick = function (item, column, evt) {
            evt.stopPropagation();
            _this.props.dataSource.forEach(function (dataItem) {
                dataItem.editingKey = null;
            });
            item.editingKey = column.key;
            _this.update();
            _this.editingInput && _this.editingInput.focus();
        };
        return _this;
    }
    Table.prototype.deleteRowById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var dataSource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataSource = this.props.dataSource;
                        return [4 /*yield*/, transition_ts_1.leave(this['row' + id], 'slide-fade')
                            //支持字符串和数字 id
                        ];
                    case 1:
                        _a.sent();
                        //支持字符串和数字 id
                        this.deleteRow(dataSource.find(function (item) { return item.id + '' === id + ''; }));
                        return [2 /*return*/];
                }
            });
        });
    };
    Table.prototype._getCheckedState = function () {
        var c = 0, uc = 0;
        for (var i = 0, len = this.props.dataSource.length; i < len; i++) {
            if (this.props.dataSource[i].checked) {
                c++;
            }
            else {
                uc++;
            }
            if (c > 0 && uc > 0) {
                return { 'indeterminate': true };
            }
        }
        if (c === 0)
            return { 'unchecked': true };
        return { 'checked': true };
    };
    Table.prototype.installed = function () {
        var _this = this;
        this.setStickyLeft();
        window.addEventListener('click', function () {
            var needUpdate = false;
            _this.props.dataSource.forEach(function (dataItem) {
                if (dataItem.editingKey) {
                    needUpdate = true;
                }
                dataItem.editingKey = null;
            });
            if (needUpdate) {
                _this.update();
            }
        });
    };
    Table.prototype.updated = function () {
        this.setStickyLeft();
    };
    Table.prototype.setStickyLeft = function () {
        var stickyLeftEls = this.rootNode.querySelectorAll('.sticky-left');
        var boxRect = this.rootNode.getBoundingClientRect();
        stickyLeftEls.forEach(function (stickyLeftEl, index) {
            var rect = stickyLeftEl.getBoundingClientRect();
            stickyLeftEl.style.left = (rect.left - boxRect.left - 1) + 'px';
        });
    };
    Table.prototype.render = function (props) {
        var _this = this;
        if (!props.columns)
            return;
        if (!props.dataSource)
            return;
        return (omi_1.h("div", __assign({ style: {
                width: props.width && props.width,
                height: props.height && props.height
            } }, omi_1.extractClass(props, 'o-table', {
            'o-table-checkbox': props.checkbox,
            'o-table-border': props.border,
            'o-table-stripe': props.stripe
        })),
            omi_1.h("table", __assign({}, omi_1.extractClass(props, 'o-table-table')),
                omi_1.h("thead", null,
                    omi_1.h("tr", null, props.columns.map(function (column, index) {
                        var _a;
                        var obj = {};
                        var width = column.width;
                        if (width !== undefined) {
                            obj.style = { width: typeof width === 'number' ? width + 'px' : width };
                        }
                        return omi_1.h("th", __assign({}, obj, { class: omi_1.classNames((_a = {},
                                _a["o-table-align-" + column.align] = column.align,
                                _a['compact'] = props.compact,
                                _a['sticky-top'] = props.stickyTop,
                                _a['sticky-left'] = index < props.stickyLeftCount,
                                _a)) }),
                            index === 0 && props.checkbox && omi_1.h("o-checkbox", __assign({}, _this._getCheckedState(), { onChange: function (_) { return _this._changeHandlerTh(_, column); } })),
                            column.title);
                    }))),
                omi_1.h("tbody", { class: "o-table-tbody" }, props.dataSource.map(function (item) { return (omi_1.h("tr", { key: item.id, ref: function (e) { return _this['row' + item.id] = e; }, style: {
                        background: item.$config && item.$config.bgColor
                    } }, props.columns.map(function (column, subIndex) {
                    var _a;
                    var obj = {};
                    var width = column.width;
                    if (width !== undefined) {
                        obj.style = { width: typeof width === 'number' ? width + 'px' : width };
                    }
                    return omi_1.h("td", __assign({ onclick: function (evt) { return _this.onTdClick(item, column, evt); } }, obj, { class: omi_1.classNames((_a = {},
                            _a["o-table-align-" + column.align] = column.align,
                            _a['compact'] = props.compact,
                            _a['sticky-left'] = subIndex < props.stickyLeftCount,
                            _a)) }),
                        subIndex === 0 && props.checkbox && omi_1.h("o-checkbox", { checked: item.checked, onChange: function (_) { return _this._changeHandlerTd(_, item); } }),
                        (column.editable && item.editingKey === column.key) ? omi_1.h("o-input", { ref: function (_) { return _this.editingInput = _; }, size: "mini", onChange: function (evt) {
                                _this.onChange(evt, item, column);
                            }, value: item[column.key] }) : (column.render ? column.render(item) : item[column.key]));
                }))); })))));
    };
    Table.css = css;
    Table.defaultProps = {
        dataSource: [],
        columns: [],
        checkbox: false,
        border: false,
        stripe: false,
        compact: false,
        stickyTop: false,
        stickyLeftCount: 0
    };
    Table.propTypes = {
        dataSource: Object,
        columns: Object,
        checkbox: Boolean,
        border: Boolean,
        stripe: Boolean,
        compact: Boolean,
        width: String,
        height: String,
        stickyTop: Boolean,
        stickyLeftCount: Number
    };
    Table = __decorate([
        omi_1.tag('o-table')
    ], Table);
    return Table;
}(omi_1.WeElement));
exports.default = Table;


/***/ }),

/***/ "./src/transition.ts":
/*!***************************!*\
  !*** ./src/transition.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leave = exports.enter = void 0;
function enter(el, effect, delay) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    el.classList.remove(effect + '-leave-active');
                    el.classList.remove(effect + '-leave-to');
                    el.classList.add(effect + '-enter');
                    el.classList.add(effect + '-enter-active');
                    var callback = function () {
                        el.classList.remove(effect + '-enter-active');
                        resolve(1);
                    };
                    once(el, 'transitionend', callback);
                    once(el, 'animationend', callback);
                    window.setTimeout(function () {
                        el.classList.remove(effect + '-enter');
                        el.classList.add(effect + '-enter-to');
                    }, delay);
                })];
        });
    });
}
exports.enter = enter;
function leave(el, effect, delay) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    el.classList.remove(effect + '-enter-active');
                    el.classList.remove(effect + '-enter-to');
                    el.classList.add(effect + '-leave');
                    el.classList.add(effect + '-leave-active');
                    var callback = function (e) {
                        el.classList.remove(effect + '-leave-active');
                        // if (autoRemove && el.parentNode) {
                        //   el.parentNode.removeChild(el)
                        // }
                        resolve(1);
                    };
                    once(el, 'transitionend', callback);
                    once(el, 'animationend', callback);
                    window.setTimeout(function () {
                        el.classList.remove(effect + '-leave');
                        el.classList.add(effect + '-leave-to');
                    }, delay);
                })];
        });
    });
}
exports.leave = leave;
function once(el, name, callback) {
    var wrapCall = function () {
        this.removeEventListener(name, wrapCall);
        callback();
    }.bind(el);
    el.addEventListener(name, wrapCall);
}


/***/ })

/******/ });
//# sourceMappingURL=demo.js.map