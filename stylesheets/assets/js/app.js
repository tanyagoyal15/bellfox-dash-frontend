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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloader */ "./src/js/preloader.js");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_preloader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/js/sidebar.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar__WEBPACK_IMPORTED_MODULE_1__);



(function () {
  'use strict'; // Self Initialize DOM Factory Components

  domFactory.handler.autoInit(); // ENABLE TOOLTIPS

  $('[data-toggle="tooltip"]').tooltip();
})();

/***/ }),

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict'; // PRELOADER

  window.addEventListener('load', function () {
    $('.preloader').fadeOut();
    domFactory.handler.upgradeAll();
  });
})();

/***/ }),

/***/ "./src/js/sidebar.js":
/*!***************************!*\
  !*** ./src/js/sidebar.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict'; // Connect button(s) to drawer(s)

  var sidebarToggle = document.querySelectorAll('[data-toggle="sidebar"]');
  sidebarToggle = Array.prototype.slice.call(sidebarToggle);
  sidebarToggle.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      var selector = e.currentTarget.getAttribute('data-target') || e.currentTarget.getAttribute('href') || '#default-drawer';
      var drawer = document.querySelector(selector);

      if (drawer) {
        drawer.mdkDrawer.toggle();
      }
    });
  });
  var drawers = document.querySelectorAll('.mdk-drawer');
  drawers = Array.prototype.slice.call(drawers);
  drawers.forEach(function (drawer) {
    drawer.addEventListener('mdk-drawer-change', function (e) {
      if (!e.target.mdkDrawer) {
        return;
      }

      document.querySelector('body').classList[e.target.mdkDrawer.opened ? 'add' : 'remove']('has-drawer-opened');
      var button = document.querySelector('[data-target="#' + e.target.id + '"]');

      if (button) {
        button.classList[e.target.mdkDrawer.opened ? 'add' : 'remove']('active');
      }
    });
  }); // SIDEBAR COLLAPSE MENUS

  $('.sidebar .collapse').on('show.bs.collapse', function (e) {
    e.stopPropagation();
    var parent = $(this).parents('.sidebar-submenu').get(0) || $(this).parents('.sidebar-menu').get(0);
    $(parent).find('.open').find('.collapse').collapse('hide');
    $(this).closest('li').addClass('open');
  });
  $('.sidebar .collapse').on('hidden.bs.collapse', function (e) {
    e.stopPropagation();
    $(this).closest('li').removeClass('open');
  });
  $('.sidebar .collapse').on('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', function (e) {
    var el = new SimpleBar($(this).closest('.sidebar').get(0));
    el.recalculate();
  });
})();

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcHJlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbImRvbUZhY3RvcnkiLCJoYW5kbGVyIiwiYXV0b0luaXQiLCIkIiwidG9vbHRpcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmYWRlT3V0IiwidXBncmFkZUFsbCIsInNpZGViYXJUb2dnbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImZvckVhY2giLCJ0b2dnbGUiLCJlIiwic2VsZWN0b3IiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZHJhd2VyIiwicXVlcnlTZWxlY3RvciIsIm1ka0RyYXdlciIsImRyYXdlcnMiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJvcGVuZWQiLCJidXR0b24iLCJpZCIsIm9uIiwic3RvcFByb3BhZ2F0aW9uIiwicGFyZW50IiwicGFyZW50cyIsImdldCIsImZpbmQiLCJjb2xsYXBzZSIsImNsb3Nlc3QiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZWwiLCJTaW1wbGVCYXIiLCJyZWNhbGN1bGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FB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RDtBQUtELENBbERELEkiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJpbXBvcnQgJy4vcHJlbG9hZGVyJ1xuaW1wb3J0ICcuL3NpZGViYXInXG5cbihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG4gIFxuICAvLyBTZWxmIEluaXRpYWxpemUgRE9NIEZhY3RvcnkgQ29tcG9uZW50c1xuICBkb21GYWN0b3J5LmhhbmRsZXIuYXV0b0luaXQoKVxuXG4gIC8vIEVOQUJMRSBUT09MVElQU1xuICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXG5cbn0pKCkiLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFBSRUxPQURFUlxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5wcmVsb2FkZXInKS5mYWRlT3V0KClcbiAgICBkb21GYWN0b3J5LmhhbmRsZXIudXBncmFkZUFsbCgpXG4gIH0pXG5cbn0pKCkiLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIENvbm5lY3QgYnV0dG9uKHMpIHRvIGRyYXdlcihzKVxuICB2YXIgc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXJcIl0nKVxuICBzaWRlYmFyVG9nZ2xlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2lkZWJhclRvZ2dsZSlcblxuICBzaWRlYmFyVG9nZ2xlLmZvckVhY2goZnVuY3Rpb24gKHRvZ2dsZSkge1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpIHx8IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnI2RlZmF1bHQtZHJhd2VyJ1xuICAgICAgdmFyIGRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICBpZiAoZHJhd2VyKSB7XG4gICAgICAgIGRyYXdlci5tZGtEcmF3ZXIudG9nZ2xlKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGxldCBkcmF3ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kay1kcmF3ZXInKVxuICBkcmF3ZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhd2VycylcbiAgZHJhd2Vycy5mb3JFYWNoKChkcmF3ZXIpID0+IHtcbiAgICBkcmF3ZXIuYWRkRXZlbnRMaXN0ZW5lcignbWRrLWRyYXdlci1jaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLnRhcmdldC5tZGtEcmF3ZXIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0W2UudGFyZ2V0Lm1ka0RyYXdlci5vcGVuZWQgPyAnYWRkJyA6ICdyZW1vdmUnXSgnaGFzLWRyYXdlci1vcGVuZWQnKVxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhcmdldD1cIiMnICsgZS50YXJnZXQuaWQgKyAnXCJdJylcbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdFtlLnRhcmdldC5tZGtEcmF3ZXIub3BlbmVkID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvLyBTSURFQkFSIENPTExBUFNFIE1FTlVTXG4gICQoJy5zaWRlYmFyIC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50cygnLnNpZGViYXItc3VibWVudScpLmdldCgwKSB8fCAkKHRoaXMpLnBhcmVudHMoJy5zaWRlYmFyLW1lbnUnKS5nZXQoMClcbiAgICAkKHBhcmVudCkuZmluZCgnLm9wZW4nKS5maW5kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xuICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnb3BlbicpO1xuICB9KTtcblxuICAkKCcuc2lkZWJhciAuY29sbGFwc2UnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gIH0pO1xuXG4gICQoJy5zaWRlYmFyIC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlIHNob3duLmJzLmNvbGxhcHNlIGhpZGUuYnMuY29sbGFwc2UgaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBTaW1wbGVCYXIoJCh0aGlzKS5jbG9zZXN0KCcuc2lkZWJhcicpLmdldCgwKSk7XG4gICAgZWwucmVjYWxjdWxhdGUoKTtcbiAgfSk7XG5cbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9