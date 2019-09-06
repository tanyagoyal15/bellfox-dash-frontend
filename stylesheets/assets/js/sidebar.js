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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 28:
/*!*********************************!*\
  !*** multi ./src/js/sidebar.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\sidebar.js */"./src/js/sidebar.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NpZGViYXIuanMiXSwibmFtZXMiOlsic2lkZWJhclRvZ2dsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZm9yRWFjaCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2VsZWN0b3IiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZHJhd2VyIiwicXVlcnlTZWxlY3RvciIsIm1ka0RyYXdlciIsImRyYXdlcnMiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJvcGVuZWQiLCJidXR0b24iLCJpZCIsIiQiLCJvbiIsInN0b3BQcm9wYWdhdGlvbiIsInBhcmVudCIsInBhcmVudHMiLCJnZXQiLCJmaW5kIiwiY29sbGFwc2UiLCJjbG9zZXN0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImVsIiwiU2ltcGxlQmFyIiwicmVjYWxjdWxhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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QUFELENBQXdCQyxFQUF4QixDQUEyQixvQkFBM0IsRUFBaUQsVUFBVWQsQ0FBVixFQUFhO0FBQzVEQSxLQUFDLENBQUNlLGVBQUY7QUFDQUYsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxPQUFSLENBQWdCLElBQWhCLEVBQXNCRSxXQUF0QixDQUFrQyxNQUFsQztBQUNELEdBSEQ7QUFLQVYsR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLEVBQXhCLENBQTJCLHdFQUEzQixFQUFxRyxVQUFVZCxDQUFWLEVBQWE7QUFDaEgsUUFBTXdCLEVBQUUsR0FBRyxJQUFJQyxTQUFKLENBQWNaLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsT0FBUixDQUFnQixVQUFoQixFQUE0QkgsR0FBNUIsQ0FBZ0MsQ0FBaEMsQ0FBZCxDQUFYO0FBQ0FNLE1BQUUsQ0FBQ0UsV0FBSDtBQUNELEdBSEQ7QUFLRCxDQWxERCxJIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIENvbm5lY3QgYnV0dG9uKHMpIHRvIGRyYXdlcihzKVxuICB2YXIgc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXJcIl0nKVxuICBzaWRlYmFyVG9nZ2xlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2lkZWJhclRvZ2dsZSlcblxuICBzaWRlYmFyVG9nZ2xlLmZvckVhY2goZnVuY3Rpb24gKHRvZ2dsZSkge1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpIHx8IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnI2RlZmF1bHQtZHJhd2VyJ1xuICAgICAgdmFyIGRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICBpZiAoZHJhd2VyKSB7XG4gICAgICAgIGRyYXdlci5tZGtEcmF3ZXIudG9nZ2xlKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGxldCBkcmF3ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kay1kcmF3ZXInKVxuICBkcmF3ZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhd2VycylcbiAgZHJhd2Vycy5mb3JFYWNoKChkcmF3ZXIpID0+IHtcbiAgICBkcmF3ZXIuYWRkRXZlbnRMaXN0ZW5lcignbWRrLWRyYXdlci1jaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLnRhcmdldC5tZGtEcmF3ZXIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0W2UudGFyZ2V0Lm1ka0RyYXdlci5vcGVuZWQgPyAnYWRkJyA6ICdyZW1vdmUnXSgnaGFzLWRyYXdlci1vcGVuZWQnKVxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhcmdldD1cIiMnICsgZS50YXJnZXQuaWQgKyAnXCJdJylcbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdFtlLnRhcmdldC5tZGtEcmF3ZXIub3BlbmVkID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvLyBTSURFQkFSIENPTExBUFNFIE1FTlVTXG4gICQoJy5zaWRlYmFyIC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50cygnLnNpZGViYXItc3VibWVudScpLmdldCgwKSB8fCAkKHRoaXMpLnBhcmVudHMoJy5zaWRlYmFyLW1lbnUnKS5nZXQoMClcbiAgICAkKHBhcmVudCkuZmluZCgnLm9wZW4nKS5maW5kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xuICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnb3BlbicpO1xuICB9KTtcblxuICAkKCcuc2lkZWJhciAuY29sbGFwc2UnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gIH0pO1xuXG4gICQoJy5zaWRlYmFyIC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlIHNob3duLmJzLmNvbGxhcHNlIGhpZGUuYnMuY29sbGFwc2UgaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBTaW1wbGVCYXIoJCh0aGlzKS5jbG9zZXN0KCcuc2lkZWJhcicpLmdldCgwKSk7XG4gICAgZWwucmVjYWxjdWxhdGUoKTtcbiAgfSk7XG5cbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9