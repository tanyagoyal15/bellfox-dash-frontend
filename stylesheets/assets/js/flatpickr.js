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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/flatpickr.js":
/*!*************************************!*\
  !*** ./src/js/plugins/flatpickr.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  $('[data-toggle="flatpickr"]').each(function () {
    var element = $(this);
    var options = {
      mode: void 0 !== element.data('flatpickr-mode') ? element.data('flatpickr-mode') : 'single',
      altInput: void 0 !== element.data('flatpickr-alt-input') ? element.data('flatpickr-alt-input') : true,
      altFormat: void 0 !== element.data('flatpickr-alt-format') ? element.data('flatpickr-alt-format') : 'F j, Y',
      dateFormat: void 0 !== element.data('flatpickr-date-format') ? element.data('flatpickr-date-format') : 'Y-m-d',
      wrap: void 0 !== element.data('flatpickr-wrap') ? element.data('flatpickr-wrap') : false,
      inline: void 0 !== element.data('flatpickr-inline') ? element.data('flatpickr-inline') : false,
      "static": void 0 !== element.data('flatpickr-static') ? element.data('flatpickr-static') : false,
      enableTime: void 0 !== element.data('flatpickr-enable-time') ? element.data('flatpickr-enable-time') : false,
      noCalendar: void 0 !== element.data('flatpickr-no-calendar') ? element.data('flatpickr-no-calendar') : false,
      appendTo: void 0 !== element.data('flatpickr-append-to') ? document.querySelector(element.data('flatpickr-append-to')) : undefined,
      onChange: function onChange(selectedDates, dateStr) {
        if (options.wrap) {
          element.find('[data-toggle]').text(dateStr);
        }
      }
    };
    element.flatpickr(options);
  });
})();

/***/ }),

/***/ 14:
/*!*******************************************!*\
  !*** multi ./src/js/plugins/flatpickr.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\plugins\flatpickr.js */"./src/js/plugins/flatpickr.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsdWdpbnMvZmxhdHBpY2tyLmpzIl0sIm5hbWVzIjpbIiQiLCJlYWNoIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJtb2RlIiwiZGF0YSIsImFsdElucHV0IiwiYWx0Rm9ybWF0IiwiZGF0ZUZvcm1hdCIsIndyYXAiLCJpbmxpbmUiLCJlbmFibGVUaW1lIiwibm9DYWxlbmRhciIsImFwcGVuZFRvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJzZWxlY3RlZERhdGVzIiwiZGF0ZVN0ciIsImZpbmQiLCJ0ZXh0IiwiZmxhdHBpY2tyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsQ0FBQyxZQUFVO0FBQ1Q7O0FBRUFBLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCQyxJQUEvQixDQUFvQyxZQUFXO0FBQzdDLFFBQUlDLE9BQU8sR0FBR0YsQ0FBQyxDQUFDLElBQUQsQ0FBZjtBQUNBLFFBQUlHLE9BQU8sR0FBRztBQUNaQyxVQUFJLEVBQUUsS0FBSyxDQUFMLEtBQVdGLE9BQU8sQ0FBQ0csSUFBUixDQUFhLGdCQUFiLENBQVgsR0FDRkgsT0FBTyxDQUFDRyxJQUFSLENBQWEsZ0JBQWIsQ0FERSxHQUVGLFFBSFE7QUFJWkMsY0FBUSxFQUFFLEtBQUssQ0FBTCxLQUFXSixPQUFPLENBQUNHLElBQVIsQ0FBYSxxQkFBYixDQUFYLEdBQ05ILE9BQU8sQ0FBQ0csSUFBUixDQUFhLHFCQUFiLENBRE0sR0FFTixJQU5RO0FBT1pFLGVBQVMsRUFBRSxLQUFLLENBQUwsS0FBV0wsT0FBTyxDQUFDRyxJQUFSLENBQWEsc0JBQWIsQ0FBWCxHQUNQSCxPQUFPLENBQUNHLElBQVIsQ0FBYSxzQkFBYixDQURPLEdBRVAsUUFUUTtBQVVaRyxnQkFBVSxFQUFFLEtBQUssQ0FBTCxLQUFXTixPQUFPLENBQUNHLElBQVIsQ0FBYSx1QkFBYixDQUFYLEdBQ1JILE9BQU8sQ0FBQ0csSUFBUixDQUFhLHVCQUFiLENBRFEsR0FFUixPQVpRO0FBYVpJLFVBQUksRUFBRSxLQUFLLENBQUwsS0FBV1AsT0FBTyxDQUFDRyxJQUFSLENBQWEsZ0JBQWIsQ0FBWCxHQUNGSCxPQUFPLENBQUNHLElBQVIsQ0FBYSxnQkFBYixDQURFLEdBRUYsS0FmUTtBQWdCWkssWUFBTSxFQUFFLEtBQUssQ0FBTCxLQUFXUixPQUFPLENBQUNHLElBQVIsQ0FBYSxrQkFBYixDQUFYLEdBQ0pILE9BQU8sQ0FBQ0csSUFBUixDQUFhLGtCQUFiLENBREksR0FFSixLQWxCUTtBQW1CWixnQkFBUSxLQUFLLENBQUwsS0FBV0gsT0FBTyxDQUFDRyxJQUFSLENBQWEsa0JBQWIsQ0FBWCxHQUNKSCxPQUFPLENBQUNHLElBQVIsQ0FBYSxrQkFBYixDQURJLEdBRUosS0FyQlE7QUFzQlpNLGdCQUFVLEVBQUUsS0FBSyxDQUFMLEtBQVdULE9BQU8sQ0FBQ0csSUFBUixDQUFhLHVCQUFiLENBQVgsR0FDUkgsT0FBTyxDQUFDRyxJQUFSLENBQWEsdUJBQWIsQ0FEUSxHQUVSLEtBeEJRO0FBeUJaTyxnQkFBVSxFQUFFLEtBQUssQ0FBTCxLQUFXVixPQUFPLENBQUNHLElBQVIsQ0FBYSx1QkFBYixDQUFYLEdBQ1JILE9BQU8sQ0FBQ0csSUFBUixDQUFhLHVCQUFiLENBRFEsR0FFUixLQTNCUTtBQTRCWlEsY0FBUSxFQUFFLEtBQUssQ0FBTCxLQUFXWCxPQUFPLENBQUNHLElBQVIsQ0FBYSxxQkFBYixDQUFYLEdBQ05TLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QmIsT0FBTyxDQUFDRyxJQUFSLENBQWEscUJBQWIsQ0FBdkIsQ0FETSxHQUVOVyxTQTlCUTtBQStCWkMsY0EvQlksb0JBK0JIQyxhQS9CRyxFQStCWUMsT0EvQlosRUErQnFCO0FBQy9CLFlBQUloQixPQUFPLENBQUNNLElBQVosRUFBa0I7QUFDaEJQLGlCQUFPLENBQUNrQixJQUFSLENBQWEsZUFBYixFQUE4QkMsSUFBOUIsQ0FBbUNGLE9BQW5DO0FBQ0Q7QUFDRjtBQW5DVyxLQUFkO0FBc0NBakIsV0FBTyxDQUFDb0IsU0FBUixDQUFrQm5CLE9BQWxCO0FBQ0QsR0F6Q0Q7QUEyQ0QsQ0E5Q0QsSSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvZmxhdHBpY2tyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gICQoJ1tkYXRhLXRvZ2dsZT1cImZsYXRwaWNrclwiXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBtb2RlOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZmxhdHBpY2tyLW1vZGUnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci1tb2RlJykgXG4gICAgICAgIDogJ3NpbmdsZScsXG4gICAgICBhbHRJbnB1dDogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci1hbHQtaW5wdXQnKVxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZmxhdHBpY2tyLWFsdC1pbnB1dCcpXG4gICAgICAgIDogdHJ1ZSxcbiAgICAgIGFsdEZvcm1hdDogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci1hbHQtZm9ybWF0JylcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci1hbHQtZm9ybWF0JylcbiAgICAgICAgOiAnRiBqLCBZJyxcbiAgICAgIGRhdGVGb3JtYXQ6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdmbGF0cGlja3ItZGF0ZS1mb3JtYXQnKVxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZmxhdHBpY2tyLWRhdGUtZm9ybWF0JylcbiAgICAgICAgOiAnWS1tLWQnLFxuICAgICAgd3JhcDogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci13cmFwJylcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci13cmFwJylcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIGlubGluZTogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci1pbmxpbmUnKVxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZmxhdHBpY2tyLWlubGluZScpXG4gICAgICAgIDogZmFsc2UsXG4gICAgICBzdGF0aWM6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdmbGF0cGlja3Itc3RhdGljJylcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci1zdGF0aWMnKVxuICAgICAgICA6IGZhbHNlLFxuICAgICAgZW5hYmxlVGltZTogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci1lbmFibGUtdGltZScpXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdmbGF0cGlja3ItZW5hYmxlLXRpbWUnKVxuICAgICAgICA6IGZhbHNlLFxuICAgICAgbm9DYWxlbmRhcjogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2ZsYXRwaWNrci1uby1jYWxlbmRhcicpXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdmbGF0cGlja3Itbm8tY2FsZW5kYXInKVxuICAgICAgICA6IGZhbHNlLFxuICAgICAgYXBwZW5kVG86IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdmbGF0cGlja3ItYXBwZW5kLXRvJylcbiAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQuZGF0YSgnZmxhdHBpY2tyLWFwcGVuZC10bycpKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2hhbmdlKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMud3JhcCkge1xuICAgICAgICAgIGVsZW1lbnQuZmluZCgnW2RhdGEtdG9nZ2xlXScpLnRleHQoZGF0ZVN0cilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnQuZmxhdHBpY2tyKG9wdGlvbnMpXG4gIH0pXG5cbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9