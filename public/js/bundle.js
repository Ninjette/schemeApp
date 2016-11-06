/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _map = __webpack_require__(5);

	var _data = __webpack_require__(6);

	angular.module("schemeApp", ['ngRoute']).service('dataService', _data.dataService).controller('MapCtrl', _map.MapCtrl).config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/templates/map',
			controller: 'MapCtrl'
		}).when('/auth', {
			templateUrl: '/templates/auth'
		});
	});

	angular.bootstrap(document, ["schemeApp"]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?minimize!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?minimize!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "*,:after,:before{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}fieldset{margin:0;min-width:0}fieldset,legend{padding:0;border:0}legend{display:block;width:100%;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=checkbox]:focus,input[type=file]:focus,input[type=radio]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{padding-top:7px}.form-control,output{display:block;font-size:14px;line-height:1.42857;color:#555}.form-control{width:100%;height:34px;padding:6px 12px;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{line-height:34px}.input-group-sm input[type=date],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],.input-group-sm input[type=time],input[type=date].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm,input[type=time].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],.input-group-lg input[type=time],input[type=date].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg,input[type=time].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox-inline input[type=checkbox],.checkbox input[type=checkbox],.radio-inline input[type=radio],.radio input[type=radio]{position:absolute;margin-left:-20px;margin-top:4px\\9}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:400;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}.checkbox-inline.disabled,.checkbox.disabled label,.radio-inline.disabled,.radio.disabled label,fieldset[disabled] .checkbox-inline,fieldset[disabled] .checkbox label,fieldset[disabled] .radio-inline,fieldset[disabled] .radio label,fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0;min-height:34px}.form-control-static.input-lg,.form-control-static.input-sm{padding-left:0;padding-right:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.33333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.33333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success.checkbox-inline label,.has-success.checkbox label,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.radio-inline label,.has-success.radio label{color:#3c763d}.has-success .form-control{border-color:#3c763d;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning.checkbox-inline label,.has-warning.checkbox label,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.radio-inline label,.has-warning.radio label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error.checkbox-inline label,.has-error.checkbox label,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.radio-inline label,.has-error.radio label{color:#a94442}.has-error .form-control{border-color:#a94442;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}.form-horizontal .form-group:after,.form-horizontal .form-group:before{content:\" \";display:table}.form-horizontal .form-group:after{clear:both}@media (min-width:768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:14.33333px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}body{font-family:Raleway,sans-serif}.wrapper{min-width:1140px}.auth-wrap input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #4e4d5c inset;-webkit-text-fill-color:#fff!important}button:focus{outline:none}.button{display:block;position:relative;z-index:1;border:2px solid #fff;color:#fff;width:140px;text-align:center;line-height:40px;border-radius:5px;background-color:transparent;overflow:hidden;-webkit-transition:color .25s ease-out;transition:color .25s ease-out;font-weight:500}.button:before{content:'';position:absolute;width:100%;height:100%;left:-100%;top:0;z-index:-1;-webkit-transition:.2s;transition:.2s;background-color:#fff}.button:hover:before{left:0}.button:hover{text-decoration:none;color:#393749}.button:focus{text-decoration:none;color:#fff;outline:none}.button--margin{margin:25px 0}.button--inversion{border-color:#393749;color:#393749}.button--inversion:before{background-color:#393749}.button--inversion:hover{color:#fff}.button--inversion:focus{color:#fff;background-color:#393749}.btn-close{cursor:pointer;position:absolute;top:10px;right:10px;z-index:1;width:20px;height:20px;line-height:20px;border-radius:50%;font-size:8px;text-align:center;border:1px solid #b9b9b9;background-color:#fff;color:#aeaeae;-webkit-transition:color .25s ease-out,border-color .25s ease-out;transition:color .25s ease-out,border-color .25s ease-out}.btn-close:hover{color:#000;border-color:grey;-webkit-transition:color 0s,border-color 0s;transition:color 0s,border-color 0s}.btn-close:active{background-color:#d9d9d9}.button-wrap{line-height:1.5;display:inline-block;margin:0 8px}.button-special{margin-right:2px;background-color:#bbb;height:34px;line-height:34px;font-weight:400;padding:0 15px;border:5px solid #000;border-width:0 4px 5px 0;border-radius:5px;border-color:transparent #ddd #999 transparent;background-clip:padding-box}.button-special:hover{border-width:0 2px 3px 0;margin-right:4px;position:relative;left:2px;top:3px}.header{background-color:#393749}.header__inner-wrap{padding:25px 0}.header__content{min-width:1140px;width:auto}.header-block,.header__content{background-color:#393749;padding:0 15px}.header-block{height:95px}.logo{float:left;width:186px;padding-top:19px}.logo__media{max-width:100%;max-height:100%}.add-user{float:right;margin-right:17px;border-radius:5px;background-color:#fff;line-height:42px;width:159px;color:#3b3a4a;border:none}.add-user:focus{outline:none}.add-user__icon{display:inline-block;font-weight:700;font-size:12px;margin-right:12px;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .25s ease-out;transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out}.add-user:hover .add-user__icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.add-seat{float:right;margin-right:10px;background-color:transparent;font-size:14px;line-height:43px;color:#fff;border:none}.add-seat__icon{display:inline-block;-webkit-transform:rotate(0deg);transform:rotate(0deg);margin-right:13px;font-size:12px;-webkit-transition:-webkit-transform .25s ease-out;transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out}.add-seat:hover .add-seat__text{text-decoration:underline}.add-seat:hover .add-seat__icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.auth{float:right}.auth__btn--logout{padding-left:23px}.auth__icon{position:absolute;left:24px;top:50%;font-size:15px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.auth-form{max-width:390px;margin:auto}.auth-form__input{background:none;letter-spacing:1.6px;width:100%;padding:14px 14px 14px 47px;display:block;border:1px solid #9b9b9b;border-radius:5px;-webkit-transition:border-color .25s ease-out;transition:border-color .25s ease-out}.auth-form__input::-webkit-input-placeholder{color:#d8d8d8}.auth-form__input:-moz-placeholder,.auth-form__input::-moz-placeholder{color:#d8d8d8}.auth-form__input:-ms-input-placeholder{color:#d8d8d8}.auth-form__input:focus{outline:none;border-color:#e9e9e9;-webkit-transition:0s;transition:0s}.auth-form__input:focus::-webkit-input-placeholder{color:#f3f3f3}.auth-form__input:focus:-moz-placeholder,.auth-form__input:focus::-moz-placeholder{color:#f3f3f3}.auth-form__input:focus:-ms-input-placeholder{color:#f3f3f3}.auth-form__error{color:#ff6000;font-style:italic}.auth-form__submit{width:100%;background-color:transparent;border:1px solid #f80;position:relative;overflow:hidden;z-index:3;line-height:42px;font-weight:600;font-size:18px}.auth-form__submit:before{content:'';position:absolute;width:100%;height:100%;left:-100%;top:0;z-index:-1;-webkit-transition:.4s;transition:.4s;background-color:#f80}.auth-form__submit:hover:before{left:0}.auth-form__fieldset{position:relative;margin-bottom:24px}.auth-form__icon{position:absolute;top:50%;left:13px;font-size:18px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.search{width:655px;margin:auto}.search__input-wrap{position:relative;display:inline-block;margin-right:10px;width:251px;margin-right:15px}.search__icon{color:#fff;position:absolute;top:50%;left:18px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.search__submit{margin-right:10px}.search__input{width:100%;border-radius:26px;height:44px;background-color:#282736;border-radius:30px;color:#fff;padding:20px 15px 20px 47px;border:none;box-shadow:inset 0 4px 5px 3px #242231}.search__input:focus{outline:none;box-shadow:0 0 1px 1px #4a485a,inset 0 4px 5px 3px #242231}.search__triangle{top:-13px;left:42px;position:absolute;border:7px solid transparent;border-bottom:7px solid #282736}.search__default-value{position:absolute;color:silver;line-height:23px;margin:0}.search__variants{background-color:#282736;border-radius:6px;padding:8px 18px;position:absolute;z-index:1;top:calc(100% + 12px);width:100%;min-height:38px}.search__variant{position:relative;background-color:#282736;z-index:1;color:silver;padding:12px 5px;margin:0;font-size:12px;-webkit-transition:color .25s ease-out;transition:color .25s ease-out}.search__variant:before{content:\"\";height:14px;background-color:transparent;width:1px;position:absolute;top:50%;left:0;margin-top:-7.5px;-webkit-transition:background-color .25s ease-out;transition:background-color .25s ease-out}.search__variant:hover{color:#fff;cursor:pointer;-webkit-transition:color 0s;transition:color 0s}.search__variant:hover:before{background-color:#fff;-webkit-transition:background-color 0s;transition:background-color 0s}.search__variant:not(:last-child){border-bottom:1px solid #383647}.search__checkbox-wrap{display:inline-block}.search__checkbox-wrap input[type=checkbox]{display:none}.search__checkbox-wrap input[type=checkbox]+label{color:#fff;margin-bottom:0;font-weight:500}.search__checkbox-wrap input[type=checkbox]+label:before{content:\"\";display:inline-block;margin-right:10px;width:20px;height:20px;vertical-align:middle;cursor:pointer;background-color:#484659;border-radius:6px;border:1px solid #888;text-align:center}.search__checkbox-wrap input[type=checkbox]:checked+label:before{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:18px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:\"\\E907\";color:#c4c4c4;font-size:12px;vertical-align:middle}.user-form__label{color:#444;font-weight:500;display:inline-block;width:26%}.user-form__fieldset{margin-bottom:12px}.user-form__input{border:1px solid #9c9c9c;border-radius:4px;height:32px;padding:2px 7px;width:210px;-webkit-transition:box-shadow .25s ease-out;transition:box-shadow .25s ease-out}.user-form__input:focus{outline:none;box-shadow:0 0 3px 0 #393749}.user-form__submit{margin-right:20px;height:30px;width:100px;line-height:24px;float:right;margin:20px 54px 0 0}.floor-plan{position:relative;overflow:hidden}.floor-plan__media{position:absolute;top:0;left:0;right:0;bottom:0}.floor-plan-wrapper{width:1000px}.seats-instruction{background-color:#393749;margin:0;position:absolute;min-width:1140px;top:0;right:0;left:0;color:#fff;height:95px;padding:0 15px;line-height:95px;z-index:20;font-weight:500;font-size:18px;text-align:center}.seat{position:absolute;width:30px;height:30px;border-radius:50%;z-index:1}.seat:before{content:'';position:absolute;left:50%;top:50%;margin-left:-8px;margin-top:-2px;border:8px solid transparent;border-top:8px solid #fff}.seat:hover{cursor:pointer;background-color:#a6a6a6}.seat-info{color:#444}.seat-info__delete{font-size:8px;display:inline-block;vertical-align:middle;text-align:center;margin-left:5px;line-height:1.8}.seat-info__delete:hover{cursor:pointer;color:#000}.seat-info__fieldset{position:relative;padding:10px 0;margin-bottom:10px}.seat-info__key{color:#444;font-weight:500;display:inline-block;width:26%}.seat-info__value{text-decoration:underline;vertical-align:middle;display:inline-block;color:#8c8c8c;padding-left:3px}.seat-info__value:hover{cursor:pointer;color:#444}.seat-info__input{border:1px solid #9c9c9c;border-radius:4px;height:32px;padding:10px 7px;width:170px;-webkit-transition:box-shadow .25s ease-out;transition:box-shadow .25s ease-out}.seat-info__input:focus{outline:none;box-shadow:0 0 3px 0 #393749}.seat-info__sign{position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.seat-info__input-wrap{position:relative;display:inline-block}.seat-info__icon{width:50px;height:50px;float:left;color:#393749;margin-right:15px;opacity:.75;margin-top:3px;padding:6px}.seat-info__details{float:left;width:calc(100% - 65px);margin-bottom:15px}.seat-info__btn{float:right;width:110px;height:30px;line-height:24px}.window{font-size:18px;font-weight:500;padding:30px 60px;text-align:center;position:absolute;z-index:2;left:0;right:0;bottom:0;top:0;border-radius:4px;background-color:#fff}.window__content{position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;width:100%}.window__text{margin:0 auto 20px;max-width:190px}.window__success{text-align:center;font-size:20px;color:#4ebb50}.window__btn{width:97px;height:30px;font-size:14px;line-height:24px;margin:auto 12px;display:inline-block}.person-info,.seat-info,.user-form{position:absolute;box-shadow:-2px 0 17px 6px rgba(0,0,0,.05);z-index:20;border-radius:4px;top:120px;right:15px;padding:20px;background-color:#fff;width:400px;min-height:220px;border:1px solid #e1e1e1}.person-info{width:420px}.person-info__media-wrap{display:inline-block;vertical-align:top;width:85px;height:85px;margin-right:10px}.person-info__media{max-width:100%}.person-info__details{display:inline-block;width:calc(100% - 100px)}.person-info__delete{display:inline-block;font-size:7px;margin-left:9px;cursor:pointer;border:1px solid #b9b9b9;padding:5px;border-radius:24px;-webkit-transition:border-color .25s ease-out;transition:border-color .25s ease-out}.person-info__delete:hover{border-color:grey;-webkit-transition:border-color 0s;transition:border-color 0s}.person-info__elem{margin-bottom:12px}.person-info__key{display:inline-block;color:#444;font-weight:500;width:45%}.person-info__value{color:#8c8c8c}.person-info__btn{width:70px;height:30px;line-height:25px;display:inline-block;margin-left:11px}.persons{z-index:2;top:calc(100% + 3px);left:26%;right:0;background-color:#f1f1f1;border-radius:6px;padding:8px 18px;position:absolute;min-height:38px}.persons__triangle{top:-13px;left:42px;position:absolute;border:7px solid transparent;border-bottom:7px solid #f1f1f1}.persons__default-value{margin:0;line-height:23px;position:absolute;color:#414040}.person{cursor:pointer;position:relative;z-index:1;color:#414040;background-color:#f1f1f1;padding:12px 5px;margin:0;font-size:12px;-webkit-transition:color .25s ease-out;transition:color .25s ease-out}.person:before{content:\"\";height:14px;background-color:transparent;width:1px;position:absolute;top:50%;left:0;margin-top:-7.5px;-webkit-transition:background-color .25s ease-out;transition:background-color .25s ease-out}.person:hover{color:#3b3a4a;cursor:pointer;-webkit-transition:color 0s;transition:color 0s}.person:hover:before{background-color:#3b3a4a;-webkit-transition:background-color 0s;transition:background-color 0s}.selection-mode-wrap{height:40px}.selection-mode{min-width:1140px;position:absolute;top:0;right:0;left:0;background-color:#393749;color:#fff;height:95px;padding:0 15px;z-index:20;font-weight:500;text-align:center;margin:0}.selection-mode__title{text-transform:uppercase;font-size:24px;margin:10px 0 2px}.assign-modal{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;background-color:#fff;padding:20px}.assign-modal__close{cursor:pointer;position:absolute;top:10px;right:10px;border:1px solid #000;width:20px;height:20px;text-align:center}.auth-wrap{padding:100px 0;background-color:#4e4d5c;color:#fff;min-height:100vh}.auth-wrap__title{font-size:42px;letter-spacing:2.1px;margin-bottom:26px;text-transform:uppercase;text-align:center}.assign-modal__text{max-width:260px}.assign-modal__btn,.modal-confirm__btn{line-height:24px;height:30px;width:auto;min-width:100px;margin:auto 12px;display:inline-block}.toster{position:fixed;z-index:20;background-color:#fff;right:0;bottom:0;color:#afafaf;font-size:16px;padding:25px 25px 22px;box-shadow:-2px 0 17px 6px rgba(0,0,0,.25)}.toster__icon{color:#00b7a1;font-size:24px;margin-right:18px;display:inline-block;vertical-align:middle}.toster__message{margin:0;display:inline-block}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MapCtrl = MapCtrl;
	function MapCtrl($scope, dataService, $http) {

		var _this = this;
		this.canvas = new fabric.Canvas('canvas-block', { selection: false, hoverCursor: 'pointer' });
		this.paramFree = null;
		this.defaultColor = "#282736";
		this.activeColor = "#F5842D";
		this.passiveColor = "#B4B4B4";
		this.svgSrc = "img/dot-icon.svg";

		$scope.safeApply = function (fn) {
			var phase = this.$root.$$phase;
			if (phase == '$apply' || phase == '$digest') {
				if (fn && typeof fn === 'function') {
					fn();
				}
			} else {
				this.$apply(fn);
			}
		};

		$scope.changeFilter = function () {
			if ($scope.freeOnly === true) {
				$scope.filterFree = _this.paramFree;
			} else {
				$scope.filterFree = '';
			}
		};

		$scope.movingDetect = function (event) {
			if (event.target.top < 0) {
				_this.canvas.getActiveObject().set({
					'top': 10
				});
			} else if (event.target.top > 490) {
				_this.canvas.getActiveObject().set({
					'top': 490
				});
			}
			if (event.target.left < 0) {
				_this.canvas.getActiveObject().set({
					'left': 10
				});
			} else if (event.target.left > 970) {
				_this.canvas.getActiveObject().set({
					'left': 970
				});
			}
		};

		$scope.blurTitle = function (title) {
			$scope.editingTitle = false;
			$scope.seats[$scope.currentEl].title = title;
			updateSeat($scope.seats[$scope.currentEl]);
		};

		function updateSeat(data) {
			$http.post('/update-seat', data);
		}

		function updatePerson(data) {
			$http.post('/update-person', data);
		}

		$scope.changeCoordinates = function (event) {
			var data = $scope.seats[$scope.currentEl];
			data.left = event.target.left;
			data.top = event.target.top;

			updateSeat(data);
		};

		$scope.selectedObject = function (e) {
			$scope.currentEl = _this.canvas.getObjects().indexOf(e.target);
			if ($scope.selectionMode) {
				_this.selectionModeHandler();
			} else {
				$scope.showSeatInfo = true;
				$scope.seatTitle = $scope.seats[$scope.currentEl].title;
				$scope.seatOccupant = $scope.seats[$scope.currentEl].occupant;
				_this.highlightActive(e);
				$scope.safeApply();
			}
		};

		this.selectionModeHandler = function () {
			if ($scope.currentUser.seatId === _this.paramFree) {
				$scope.userWithoutSeat = true;
			} else {
				$scope.userWithoutSeat = false;
			}

			if ($scope.seats[$scope.currentEl].occupant == _this.paramFree) {
				if ($scope.currentUser.seatId !== _this.paramFree) {
					$scope.seats[$scope.currentUser.seatId].occupant = _this.paramFree; //db
					updateSeat($scope.seats[$scope.currentUser.seatId]);
				}

				$scope.seats[$scope.currentEl].occupant = $scope.currentUser.name; //db
				updateSeat($scope.seats[$scope.currentEl]);
				$scope.selectionMode = false;

				$scope.persons[$scope.persons.indexOf($scope.currentUser)].seatId = $scope.currentEl; //db
				updatePerson($scope.persons[$scope.persons.indexOf($scope.currentUser)]);

				_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
				$scope.displayToster($scope.currentUser.name + ' assigned successfully');
				$scope.safeApply();
			} else {
				$scope.currentPlace = $scope.seats[$scope.currentEl];
				$scope.assignModal = true;
				$scope.safeApply();
			};
		};

		$scope.replacePerson = function () {
			$scope.persons.forEach(function (person) {
				if (person.name === $scope.currentPlace.occupant) {
					person.seatId = _this.paramFree;
					$scope.replacedPerson = person;
					updatePerson(person);
				}
			});

			if (!$scope.userWithoutSeat) {
				$scope.seats[$scope.currentUser.seatId].occupant = _this.paramFree;
				updateSeat($scope.seats[$scope.currentUser.seatId]);
			}

			$scope.persons[$scope.persons.indexOf($scope.currentUser)].seatId = $scope.currentPlace.id;
			updatePerson($scope.persons[$scope.persons.indexOf($scope.currentUser)]);

			$scope.seats[$scope.currentEl].occupant = $scope.currentUser.name;
			updateSeat($scope.seats[$scope.currentEl]);

			$scope.assignNewModal = true;
			$scope.selectionMode = false;
			$scope.assignModal = false;

			_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
			$scope.displayToster($scope.replacedPerson.name + ' replaced successfully');
		};

		$scope.swapPersons = function () {

			$scope.seats[$scope.currentUser.seatId].occupant = $scope.currentPlace.occupant;
			updateSeat($scope.seats[$scope.currentUser.seatId]);

			var oldPlace = $scope.currentUser.seatId;

			$scope.persons.forEach(function (person) {
				if (person.name === $scope.currentPlace.occupant) {
					person.seatId = $scope.seats[$scope.currentUser.seatId].id;
					updatePerson(person);
				}
			});

			$scope.persons[$scope.persons.indexOf($scope.currentUser)].seatId = $scope.currentPlace.id;
			updatePerson($scope.persons[$scope.persons.indexOf($scope.currentUser)]);

			$scope.seats[$scope.currentEl].occupant = $scope.currentUser.name; //db
			updateSeat($scope.seats[$scope.currentEl]);

			$scope.selectionMode = false;
			$scope.assignModal = false;
			_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
			$scope.displayToster('persons swapped successfully');
		};

		$scope.displayToster = function (message) {
			$scope.tosterMessage = message;
			$scope.showToster = true;
			setTimeout(function () {
				$scope.showToster = false;
				$scope.safeApply();
			}, 4000);
		};

		$scope.assignNewSeat = function () {
			$scope.currentUser = $scope.replacedPerson;
			$scope.discardActiveElement();
			$scope.selectionMode = true;
			$scope.assignNewModal = false;
		};

		$scope.closeSeatInfo = function () {
			$scope.showSeatInfo = false;
			$scope.editingOccupant = false;
		};

		$scope.discardActiveElement = function () {
			if (_this.canvas.getActiveObject()) {
				_this.canvas.getActiveObject().set({
					fill: _this.defaultColor
				});
				_this.canvas.discardActiveObject();
			};
		};

		this.highlightActive = function () {
			this.assignColors();
			_this.canvas._objects[$scope.currentEl].set({
				fill: _this.activeColor
			});
			_this.canvas.renderAll();
		};

		$scope.createSeat = function () {
			// on click btn "new seat"
			var floorPlan = angular.element(document.querySelector('.floor-plan'));
			floorPlan.on('click', _this.addSeat);
			$scope.newSeatMode = true;
		};

		$scope.focussedPerson = function (person) {
			$scope.personInfo = true;
			$scope.showUsers = false;
			$scope.currentUser = person;

			var hasSeat = person.seatId;
			if (hasSeat !== _this.paramFree) {
				_this.canvas.setActiveObject(_this.canvas.item(person.seatId));
			} else {
				$scope.discardActiveElement();
			}
		};

		$scope.searchUsersChanged = function (inputText) {
			if (inputText && inputText.length > 1) {
				$scope.showUsers = true;
			} else {
				$scope.showUsers = false;
			}
		};

		$scope.searchChanged = function (inputText) {
			if (inputText.length > 1) {
				$scope.showHints = true;
			} else {
				$scope.showHints = false;
			}
		};

		$scope.makeSeatFree = function () {
			$scope.seatOccupant = _this.paramFree;
			var placeOccupant = $scope.seats[$scope.currentEl].occupant;
			$scope.seats[$scope.currentEl].occupant = _this.paramFree;
			updateSeat($scope.seats[$scope.currentEl]);

			$scope.makePersonFree(placeOccupant);
		};

		$scope.removeFromPlace = function () {
			$scope.seats[$scope.currentUser.seatId].occupant = _this.paramFree; //db
			updateSeat($scope.seats[$scope.currentUser.seatId]);
			$scope.makePersonFree($scope.currentUser.name);
			$scope.discardActiveElement();
		};

		$scope.makePersonFree = function (currentOccupant) {
			$scope.persons.forEach(function (person) {
				if (person.name === currentOccupant) {
					person.seatId = _this.paramFree;
					updatePerson(person);
				}
			});
		};

		$scope.rememberOldOccupant = function () {
			$scope.oldOccupant = $scope.seatOccupant;
		};

		$scope.assignNewOccupant = function (newOccupant) {
			$scope.seatOccupant = newOccupant.name;
			$scope.editingOccupant = false;

			if ($scope.oldOccupant !== newOccupant.name) {
				$scope.makePersonFree($scope.oldOccupant);

				$scope.persons.forEach(function (person) {
					if (person.name === newOccupant.name) {
						if (person.seatId !== _this.paramFree) {
							person.occupant = _this.paramFree;
						}
						person.seatId = $scope.currentEl;
						updatePerson(person);
					}
				});

				$scope.seats[$scope.currentEl].occupant = newOccupant.name;

				updateSeat($scope.seats[$scope.currentEl]);
			}
		};

		$scope.deleteSeat = function () {
			var placeOccupant = $scope.seats[$scope.currentEl].occupant;
			$http.post('/remove-seat', { id: $scope.seats[$scope.currentEl].id });
			if (placeOccupant !== _this.paramFree) {
				$scope.makePersonFree(placeOccupant);
			}
			$scope.seats.splice($scope.currentEl, 1);
			$scope.showSeatInfo = false;
			_this.canvas.getActiveObject().remove();
		};

		$scope.displaySeats = function () {
			var itemsProcessed = 0;
			$scope.seats.forEach(function (seat, index, array) {
				fabric.loadSVGFromURL(_this.svgSrc, function (objects, options) {
					var seatId = seat.id;
					var elem = fabric.util.groupSVGElements(objects, options);
					elem.set({
						id: seatId,
						left: seat.left,
						top: seat.top,
						fill: _this.defaultColor,
						scaleY: 0.08,
						scaleX: 0.08,
						hasBorders: false,
						hasControls: false,
						hasRotatingPoint: false,
						lockMovementX: window.user ? false : true,
						lockMovementY: window.user ? false : true
					});
					setTimeout(function () {
						_this.canvas.add(elem);
						itemsProcessed++;
						if (itemsProcessed === array.length) {
							_this.assignColors();
						}
					}, index * 100);
				});
			});
		};

		angular.element(document.documentElement).on('keydown', function (event) {
			if (event.keyCode == 27) {
				if ($scope.newSeatMode === true) {
					$scope.newSeatMode = false;
					$scope.safeApply();
				} else if ($scope.selectionMode === true) {
					$scope.selectionMode = false;
					$scope.safeApply();
				}
			}
		});

		this.assignColors = function () {
			$scope.seats.forEach(function (seat, index) {
				if (seat.occupant === _this.paramFree) {
					_this.canvas._objects[index].set({
						fill: _this.defaultColor
					});
				} else {
					_this.canvas._objects[index].set({
						fill: _this.passiveColor
					});
				}
				_this.canvas.renderAll();
			});
		};

		this.addSeat = function (event) {
			if ($scope.newSeatMode) {
				var data;

				(function () {
					data = {
						"left": event.offsetX - 15,
						"top": event.offsetY - 15,
						"id": $scope.seats.length,
						"title": "No title",
						"occupant": _this.paramFree
					};


					$scope.seats.push(data);
					$http.post('/new-seat', data);
					$scope.newSeatMode = false;
					$scope.showSeatInfo = true;
					$scope.currentEl = $scope.seats.length - 1;
					$scope.safeApply();

					var newSeatId = $scope.seats.length - 1;

					fabric.loadSVGFromURL(_this.svgSrc, function (objects, options) {
						var elem = fabric.util.groupSVGElements(objects, options);
						elem.set({
							id: newSeatId,
							left: event.offsetX - 12,
							top: event.offsetY - 12,
							scaleY: 0.08,
							scaleX: 0.08,
							hasBorders: false,
							hasControls: false,
							hasRotatingPoint: false
						});
						_this.canvas.add(elem);
						_this.canvas.calcOffset();
						_this.canvas.renderAll();

						_this.canvas.setActiveObject(_this.canvas.item($scope.currentEl));
					});
				})();
			}
		};
		$scope.openUserForm = function () {
			$scope.showUserForm = true;
			$scope.showSeatInfo = false;
			$scope.personInfo = false;
		};

		$scope.addUser = function (user) {
			var newUser = {
				"id": $scope.persons.length + 1,
				"seatId": _this.paramFree,
				"email": user.email,
				"name": user.name
			};
			$http.post('/new-person', newUser);

			$scope.persons.push(newUser);
			$scope.showUserForm = false;
			$scope.personInfo = true;
			$scope.user.name = null;
			$scope.user.email = null;
			$scope.currentUser = newUser;
		};

		this.initFunc = function () {
			dataService.getPersons(function (response) {
				$scope.persons = response.data;
			});

			dataService.getSeats(function (response) {
				$scope.seats = response.data;
				$scope.displaySeats();
			});

			_this.canvas.on({
				'object:selected': $scope.selectedObject,
				'object:modified': $scope.changeCoordinates,
				'object:moving': $scope.movingDetect,
				'mouse:down': function mouseDown(e) {
					if (e.target) {
						e.target.opacity = 0.5;
						_this.canvas.renderAll();
					}
				},
				'mouse:up': function mouseUp(e) {
					if (e.target) {
						e.target.opacity = 1;
						_this.canvas.renderAll();
					}
				}
			});
		};
		this.initFunc();
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.dataService = dataService;
	function dataService($http) {

		this.getPersons = function (callback, arg) {
			$http.get("/json/persons").then(callback);
		};

		this.getSeats = function (callback, arg) {
			$http.get("/json/seats").then(callback);
		};
	}

/***/ }
/******/ ]);