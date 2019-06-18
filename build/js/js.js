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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var mobileBtn = $('.mobile-menu');\n  var menu = $('.navigation__ul');\n  mobileBtn.on('click', function () {\n    menu.toggleClass('isOpened');\n    mobileBtn.toggleClass('closer');\n  });\n  menu.on('click', function () {\n    menu.removeClass('isOpened');\n    mobileBtn.removeClass('closer');\n  });\n  /* modal */\n\n  modalBtn = $('.catalog-paper__btn_a');\n  modalBtn.on('click', function (e) {\n    e.preventDefault();\n    var target = $(e.target);\n    var link = target.attr('href');\n    content = $(link);\n    var container = content.parents('.modal-container');\n    container.removeClass('d-n');\n    content.addClass('active');\n  });\n  /* кнопка closer на модальном окне */\n\n  var closer = $('.closer-modal');\n  closer.on('click', function (e) {\n    e.preventDefault();\n    var target = $(e.target);\n    var container = target.parents('.modal-container');\n    container.addClass('d-n');\n    var active = $('.modal-container .active');\n    active.removeClass('active');\n  });\n  /* EasyScroll */\n\n  var linkEasy = $('.navigation__a');\n  linkEasy.on('click', function (e) {\n    e.preventDefault();\n    var target = $(e.target);\n    var link = target.attr('href');\n    elemToScroll = $(link);\n    $('html,body').animate({\n      scrollTop: elemToScroll.offset().top - 400\n    }, 500);\n  });\n  /* кнопка возврата на верх страницы. сделал ее появление*/\n\n  $(window).on('scroll', function (e) {\n    var target = $(e.target);\n    var scrollTop = target.scrollTop();\n    var menuUp = $('.menuUp');\n\n    if (scrollTop > 400) {\n      menuUp.addClass('activeMenu');\n    } else {\n      menuUp.removeClass('activeMenu');\n    }\n  });\n  /* EasyScroll для кнопки возврата на верх страницы*/\n\n  var menuUp = $('.menuUp');\n  menuUp.on('click', function (e) {\n    e.preventDefault();\n    var target = $(e.target);\n    var link = target.attr('href');\n    var menu = $(link);\n    $('html, body').animate({\n      scrollTop: menu.offset().top - 50\n    }, 500);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuXHJcblx0dmFyIG1vYmlsZUJ0biA9ICQoJy5tb2JpbGUtbWVudScpO1xyXG5cdHZhciBtZW51ID0gJCgnLm5hdmlnYXRpb25fX3VsJyk7XHJcblxyXG5cdG1vYmlsZUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0bWVudS50b2dnbGVDbGFzcygnaXNPcGVuZWQnKTtcclxuXHRcdG1vYmlsZUJ0bi50b2dnbGVDbGFzcygnY2xvc2VyJyk7XHJcblx0fSk7XHJcblxyXG5cdG1lbnUub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdG1lbnUucmVtb3ZlQ2xhc3MoJ2lzT3BlbmVkJyk7XHJcblx0XHRtb2JpbGVCdG4ucmVtb3ZlQ2xhc3MoJ2Nsb3NlcicpXHJcblxyXG5cdH0pO1xyXG5cclxuXHQvKiBtb2RhbCAqL1xyXG5cclxuXHJcblx0bW9kYWxCdG4gPSAkKCcuY2F0YWxvZy1wYXBlcl9fYnRuX2EnKVxyXG5cdFxyXG5cdG1vZGFsQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cdFx0dmFyIGxpbmsgPSB0YXJnZXQuYXR0cignaHJlZicpO1xyXG5cclxuXHRcdGNvbnRlbnQgPSAkKGxpbmspO1xyXG5cclxuXHRcdHZhciBjb250YWluZXIgPSBjb250ZW50LnBhcmVudHMoJy5tb2RhbC1jb250YWluZXInKTtcclxuXHRcdGNvbnRhaW5lci5yZW1vdmVDbGFzcygnZC1uJyk7XHJcblx0XHRjb250ZW50LmFkZENsYXNzKCdhY3RpdmUnKVxyXG5cdH0pO1xyXG5cclxuXHQvKiDQutC90L7Qv9C60LAgY2xvc2VyINC90LAg0LzQvtC00LDQu9GM0L3QvtC8INC+0LrQvdC1ICovXHJcblxyXG5cdHZhciBjbG9zZXIgPSAkKCcuY2xvc2VyLW1vZGFsJyk7XHJcblxyXG5cdGNsb3Nlci5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHRcdHZhciBjb250YWluZXIgPSB0YXJnZXQucGFyZW50cygnLm1vZGFsLWNvbnRhaW5lcicpO1xyXG5cdFx0Y29udGFpbmVyLmFkZENsYXNzKCdkLW4nKTtcclxuXHRcdHZhciBhY3RpdmUgPSAkKCcubW9kYWwtY29udGFpbmVyIC5hY3RpdmUnKTtcclxuXHRcdGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuXHR9KTtcclxuXHJcblxyXG5cdFxyXG5cclxuXHQvKiBFYXN5U2Nyb2xsICovXHJcblxyXG5cdHZhciBsaW5rRWFzeSA9ICQoJy5uYXZpZ2F0aW9uX19hJyk7XHJcblxyXG5cdGxpbmtFYXN5Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cdFx0dmFyIGxpbmsgPSB0YXJnZXQuYXR0cignaHJlZicpO1xyXG5cclxuXHRcdGVsZW1Ub1Njcm9sbCA9ICQobGluaylcclxuXHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6IGVsZW1Ub1Njcm9sbC5vZmZzZXQoKS50b3AgLTQwMFxyXG5cdFx0fSwgNTAwKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdC8qINC60L3QvtC/0LrQsCDQstC+0LfQstGA0LDRgtCwINC90LAg0LLQtdGA0YUg0YHRgtGA0LDQvdC40YbRiy4g0YHQtNC10LvQsNC7INC10LUg0L/QvtGP0LLQu9C10L3QuNC1Ki9cclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cdFx0dmFyIHNjcm9sbFRvcCA9IHRhcmdldC5zY3JvbGxUb3AoKTtcclxuXHRcdHZhciBtZW51VXAgPSAkKCcubWVudVVwJyk7XHJcblx0XHRpZihzY3JvbGxUb3AgPiA0MDApe1xyXG5cdFx0XHRtZW51VXAuYWRkQ2xhc3MoJ2FjdGl2ZU1lbnUnKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRtZW51VXAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZU1lbnUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0LyogRWFzeVNjcm9sbCDQtNC70Y8g0LrQvdC+0L/QutC4INCy0L7Qt9Cy0YDQsNGC0LAg0L3QsCDQstC10YDRhSDRgdGC0YDQsNC90LjRhtGLKi9cclxuXHJcblx0dmFyIG1lbnVVcCA9ICQoJy5tZW51VXAnKTtcclxuXHRtZW51VXAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcblx0XHR2YXIgbGluayA9IHRhcmdldC5hdHRyKCdocmVmJyk7XHJcblxyXG5cdFx0dmFyIG1lbnUgPSAkKGxpbmspO1xyXG5cdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6IG1lbnUub2Zmc2V0KCkudG9wIC01MFxyXG5cdFx0fSwgNTAwKTtcclxuXHR9KTtcclxuXHJcblxyXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });