module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var md = '# 我是一级标题\n' + '## 我是二级标题\n' + '### 我是三级标题\n' + '[**Showdown**](http://www.showdownjs.com) is *great*\n' + '\nbecause:\n' + ' - it\'s easy to use\n' + ' - it\'s extensible\n' + ' - works in the server and in the browser';

var html = '\n            <div style="margin: 10px 0 10px;">\n              <b>* \u5B57\u4F53\u6807\u7B7E</b>\n            </div>\n            <h1>h1</h1>\n            <h2>h2</h2>\n            <h3>h3</h3>\n            <h4>h4</h4>\n          \n            <div style="margin: 10px 0 10px;">\n              <b>* video\u6807\u7B7E</b>\n            </div>\n            <video src="https://ugccsy.qq.com/uwMROfz2r57EIaQXGdGnC2dePkZaz9nvINvy8qtBz-4opyj0/szg_4117_50001_0b6boeaboaaagaaod27ggzpfc4odc5yqaf2a.f622.mp4?sdtfrom=v1010&guid=a4757c60e5f02cd98e0146e0a81b5fd7&vkey=388C92E9252109A79FB55DB9FCEF07EC74FFC2E3C4E4DF098CA5A543EA40FB00E72C25D78D7738A11D32B338A122043D626FF914C279C81173CCF39EFBED328302BFB6B5AE0DEFAB28833AA5BD003047AB041E6CE05F045DCF9FD6E7693D4D039296CC22518B2A372F99552B19957D9F0B57C19EF99901039218D25A2D591843"></video>\n          \n            <div style="margin: 10px 0 10px;">\n              <b>* audio\u6807\u7B7E</b>\n            </div>\n            <audio title="\u6211\u662F\u6807\u9898" desc="\u6211\u662F\u5C0F\u6807\u9898" src="https://media.lycheer.net/lecture/25840237/5026279_1509614610000.mp3?0.1"></audio>\n          \n            <div style="margin: 10px 0 10px;">\n            <b>\u4E00. \u8F6C\u4E49\u5B57\u7B26</b>\n            </div>&lt;div style=&quot;color:red&quot;&gt;\u6211\u662F\u8F6C\u4E49\u5B57\u7B26&lt;/div&gt; \n          \n            <div style="margin: 10px 0 10px;">\n            <b>\u4E8C. a\u6807\u7B7E\u8DF3\u8F6C</b>\n            </div> \n            <a href="https://www.baidu.com" target="_blank">a\u6807\u7B7E\u8DF3\u8F6C</a>&nbsp; \n          \n            <div style="margin: 10px 0 10px;">\n            <b>\u4E09. \u5185\u8054\u6807\u7B7E</b>\n            </div> \n            <span style="background-color: rgb(139, 170, 74);">\u6211\u662F\u5185\u8054\u6807\u7B7E</span>\n            <br />\n            <p></p>\n            <p></p>\n          \n            <div style="margin: 10px 0 10px;">\n            <b>\u56DB. ul\u65E0\u5E8F\u5217\u8868</b>\n            </div>\n            <ul>\n            <li style="text-align: center;"><span style="background-color: rgb(139, 170, 74);">1</span></li>\n            </ul>\n          \n            <div style="margin: 10px 0 10px;">\n            <b>\u4E94. ol\u6709\u5E8F\u5217\u8868</b>\n            </div>\n            <ol>\n            <li style="text-align: center;"><span style="background-color: rgb(139, 170, 74);">test</span></li>\n            <li><span style="background-color: rgb(139, 170, 74);">test2</span></li>\n            </ol>\n          \n            <div style="margin: 10px 0 10px;">\n            <b>\u516D. \u8868\u683C\u6E32\u67D3</b>\n            </div>\n            <table>\n              <tr>\n                <th>\u6807\u98981</th>\n                <th>\u6807\u98982</th>\n                <th>\u6807\u98983</th>\n                <th>\u6807\u98984</th>\n                <th>\u6807\u98985</th>\n              </tr>\n              <tr>\n                <td>cell1</td>\n                <td>cell2</td>\n                <td>cell3</td>\n                <td>cell4</td>\n                <td>cell5</td>\n              </tr>\n              <tr>\n                <td>cell1</td>\n                <td>cell2</td>\n                <td>cell3</td>\n                <td>cell4</td>\n                <td>cell5</td>\n              </tr>\n            </table>\n          \n            <div style="margin: 10px 0 10px;">\n            <b>\u4E03. \u56FE\u7247\u6E32\u67D3</b>\n            </div>\n            <p><img src="https://dev-sit-1251698455.cos.ap-guangzhou.myqcloud.com/ds/22/363/20200401/3c9e7798e3204756b9e0f3263882b81f.jpeg" /><img src="https://mmbiz.qpic.cn/mmbiz_png/1gmcynicwloGkVMTr6wTHdDXlFUSaSxOSRELianAFGJYVzvXJKoM2xbbFMqKe6ONy5zoHHejNbibTJn5gdEOc1aIA/0?wx_fmt=png" /></p>\n          ';

var jsCode = 'init = jQuery.fn.init = function( selector, context, root ) {\n  var match, elem;\n\n  // v1.4\u4E4B\u540E\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E0D\u5305\u542B\u4EFB\u4F55DOM\u8282\u70B9\u7684\u7A7AjQuery\u5BF9\u8C61\n  if ( !selector ) {\n    return this\n  }\n\n  // \u5904\u7406\u5B57\u7B26\u4E32\n  if ( typeof selector === \'string\' ) {\n    // \u5904\u7406 HTML \u5B57\u7B26\u4E32\n    if ( selector[ 0 ] === \'<\' && selector[ selector.length - 1 ] === \'>\' && selector.length >= 3) {\n        // ....\n\n    // \u5176\u5B83\u5B57\u7B26\u4E32\uFF0C\u5F53\u505A\u9009\u62E9\u5668\u5904\u7406    \n    } else {\n      match = rquickExpr.exec( selector )\n    }\n\n  // \u5904\u7406 DOM \u8282\u70B9 => $(DOMElement)  \n  } else if ( selector.nodeType ) {\n    // .....\n\n  // \u5904\u7406\u51FD\u6570 => $(function)\n  } else if ( typeof selector === \'function\' ) {\n    // ....\n  }\n\n  // \u5904\u7406\u5176\u5B83\u60C5\u51B5\n  return jQuery.makeArray( selector, this )\n}';

Component({
  data: {
    codeText: jsCode,
    htmlText: html,
    mdText: md
  },

  methods: {
    handleTagATap: function handleTagATap() {}
  }
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map