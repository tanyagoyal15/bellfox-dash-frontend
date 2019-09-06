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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/daterangepicker.js":
/*!*******************************************!*\
  !*** ./src/js/plugins/daterangepicker.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  $('[data-toggle="daterangepicker"]').each(function () {
    var element = $(this);
    var format = void 0 !== element.data('daterangepicker-locale-format') ? element.data('daterangepicker-locale-format') : 'YYYY/MM/DD';
    var ranges = {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    };
    var options = {
      showDropdowns: void 0 !== element.data('daterangepicker-show-dropdowns') ? element.data('daterangepicker-show-dropdowns') : false,
      drops: void 0 !== element.data('daterangepicker-drops') ? element.data('daterangepicker-drops') : 'down',
      opens: void 0 !== element.data('daterangepicker-opens') ? element.data('daterangepicker-opens') : 'right',
      startDate: void 0 !== element.data('daterangepicker-start-date') ? element.data('daterangepicker-start-date') : moment(),
      endDate: void 0 !== element.data('daterangepicker-end-date') ? element.data('daterangepicker-end-date') : moment().add(1, 'month'),
      singleDatePicker: void 0 !== element.data('daterangepicker-single-date-picker') ? element.data('daterangepicker-single-date-picker') : false,
      autoApply: void 0 !== element.data('daterangepicker-auto-apply') ? element.data('daterangepicker-auto-apply') : true,
      timePicker: void 0 !== element.data('daterangepicker-time-picker') ? element.data('daterangepicker-time-picker') : false,
      timePicker24Hour: void 0 !== element.data('daterangepicker-time-picker-24-hour') ? element.data('daterangepicker-time-picker-24-hour') : false,
      ranges: void 0 !== element.data('daterangepicker-ranges') ? ranges : false,
      locale: {
        format: format,
        separator: void 0 !== element.data('daterangepicker-locale-separator') ? element.data('daterangepicker-locale-separator') : ' to '
      }
    };
    element.daterangepicker(options);
  });
})();

/***/ }),

/***/ 11:
/*!*************************************************!*\
  !*** multi ./src/js/plugins/daterangepicker.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\plugins\daterangepicker.js */"./src/js/plugins/daterangepicker.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsdWdpbnMvZGF0ZXJhbmdlcGlja2VyLmpzIl0sIm5hbWVzIjpbIiQiLCJlYWNoIiwiZWxlbWVudCIsImZvcm1hdCIsImRhdGEiLCJyYW5nZXMiLCJtb21lbnQiLCJzdWJ0cmFjdCIsInN0YXJ0T2YiLCJlbmRPZiIsIm9wdGlvbnMiLCJzaG93RHJvcGRvd25zIiwiZHJvcHMiLCJvcGVucyIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJhZGQiLCJzaW5nbGVEYXRlUGlja2VyIiwiYXV0b0FwcGx5IiwidGltZVBpY2tlciIsInRpbWVQaWNrZXIyNEhvdXIiLCJsb2NhbGUiLCJzZXBhcmF0b3IiLCJkYXRlcmFuZ2VwaWNrZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxDQUFDLFlBQVU7QUFDVDs7QUFFQUEs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RVIsS0F4QlU7QUF5QmRnQixzQkFBZ0IsRUFBRSxLQUFLLENBQUwsS0FBV2xCLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLHFDQUFiLENBQVgsR0FDZEYsT0FBTyxDQUFDRSxJQUFSLENBQWEscUNBQWIsQ0FEYyxHQUVkLEtBM0JVO0FBNEJkQyxZQUFNLEVBQUUsS0FBSyxDQUFMLEtBQVdILE9BQU8sQ0FBQ0UsSUFBUixDQUFhLHdCQUFiLENBQVgsR0FDSkMsTUFESSxHQUVKLEtBOUJVO0FBK0JkZ0IsWUFBTSxFQUFFO0FBQ05sQixjQUFNLEVBQU5BLE1BRE07QUFFTm1CLGlCQUFTLEVBQUUsS0FBSyxDQUFMLEtBQVdwQixPQUFPLENBQUNFLElBQVIsQ0FBYSxrQ0FBYixDQUFYLEdBQ1BGLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLGtDQUFiLENBRE8sR0FFUDtBQUpFO0FBL0JNLEtBQWhCO0FBdUNBRixXQUFPLENBQUNxQixlQUFSLENBQXdCYixPQUF4QjtBQUNELEdBdkREO0FBeURELENBNURELEkiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL2RhdGVyYW5nZXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICAkKCdbZGF0YS10b2dnbGU9XCJkYXRlcmFuZ2VwaWNrZXJcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgY29uc3QgZm9ybWF0ID0gdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1sb2NhbGUtZm9ybWF0JykgXG4gICAgICA/IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLWxvY2FsZS1mb3JtYXQnKSBcbiAgICAgIDogJ1lZWVkvTU0vREQnXG5cbiAgICBjb25zdCByYW5nZXMgPSB7XG4gICAgICAnVG9kYXknOiBbbW9tZW50KCksIG1vbWVudCgpXSxcbiAgICAgICdZZXN0ZXJkYXknOiBbbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKSwgbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKV0sXG4gICAgICAnTGFzdCA3IERheXMnOiBbbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheXMnKSwgbW9tZW50KCldLFxuICAgICAgJ0xhc3QgMzAgRGF5cyc6IFttb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKSwgbW9tZW50KCldLFxuICAgICAgJ1RoaXMgTW9udGgnOiBbbW9tZW50KCkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KCkuZW5kT2YoJ21vbnRoJyldLFxuICAgICAgJ0xhc3QgTW9udGgnOiBbbW9tZW50KCkuc3VidHJhY3QoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KCkuc3VidHJhY3QoMSwgJ21vbnRoJykuZW5kT2YoJ21vbnRoJyldXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHNob3dEcm9wZG93bnM6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItc2hvdy1kcm9wZG93bnMnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1zaG93LWRyb3Bkb3ducycpIFxuICAgICAgICA6IGZhbHNlLFxuICAgICAgZHJvcHM6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItZHJvcHMnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1kcm9wcycpIFxuICAgICAgICA6ICdkb3duJyxcbiAgICAgIG9wZW5zOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLW9wZW5zJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItb3BlbnMnKSBcbiAgICAgICAgOiAncmlnaHQnLFxuICAgICAgc3RhcnREYXRlOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLXN0YXJ0LWRhdGUnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1zdGFydC1kYXRlJylcbiAgICAgICAgOiBtb21lbnQoKSxcbiAgICAgIGVuZERhdGU6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItZW5kLWRhdGUnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1lbmQtZGF0ZScpXG4gICAgICAgIDogbW9tZW50KCkuYWRkKDEsICdtb250aCcpLFxuICAgICAgc2luZ2xlRGF0ZVBpY2tlcjogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1zaW5nbGUtZGF0ZS1waWNrZXInKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1zaW5nbGUtZGF0ZS1waWNrZXInKSBcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIGF1dG9BcHBseTogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1hdXRvLWFwcGx5JykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItYXV0by1hcHBseScpIFxuICAgICAgICA6IHRydWUsXG4gICAgICB0aW1lUGlja2VyOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLXRpbWUtcGlja2VyJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItdGltZS1waWNrZXInKSBcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIHRpbWVQaWNrZXIyNEhvdXI6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItdGltZS1waWNrZXItMjQtaG91cicpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyLXRpbWUtcGlja2VyLTI0LWhvdXInKSBcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIHJhbmdlczogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ2RhdGVyYW5nZXBpY2tlci1yYW5nZXMnKSBcbiAgICAgICAgPyByYW5nZXMgXG4gICAgICAgIDogZmFsc2UsXG4gICAgICBsb2NhbGU6IHtcbiAgICAgICAgZm9ybWF0LFxuICAgICAgICBzZXBhcmF0b3I6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItbG9jYWxlLXNlcGFyYXRvcicpIFxuICAgICAgICAgID8gZWxlbWVudC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXItbG9jYWxlLXNlcGFyYXRvcicpIFxuICAgICAgICAgIDogJyB0byAnLFxuICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnQuZGF0ZXJhbmdlcGlja2VyKG9wdGlvbnMpXG4gIH0pXG5cbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9