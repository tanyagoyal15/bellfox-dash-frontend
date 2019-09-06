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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/settings/dropdown-dismissable.js":
/*!*************************************************!*\
  !*** ./src/js/settings/dropdown-dismissable.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import $ from 'jquery'
var DropdownDismissable = function () {
  var NAME = 'dropdownDismissable';
  var DATA_KEY = 'bs.dropdown-dismissable';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var DropdownDismissable =
  /*#__PURE__*/
  function () {
    function DropdownDismissable(element) {
      _classCallCheck(this, DropdownDismissable);

      Object.defineProperty(element, NAME, {
        configurable: true,
        writable: false,
        value: this
      });
      this._element = element;
      this._dismiss = element.querySelector('[data-dismiss="dropdown"]');
      this._toggle = element.querySelector('[data-toggle="dropdown"]');

      this._init();

      this._addEventListeners();
    }

    _createClass(DropdownDismissable, [{
      key: "_init",
      value: function _init() {
        $('.dropdown-menu', this._element).removeClass('show').removeAttr('style');

        if ($(this._element).hasClass('show')) {
          $(this._element).removeClass('show');
          $(this._toggle).dropdown('toggle');
        }

        this._element._closable = false;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        this._dismiss.addEventListener('click', this.dismiss.bind(this));
      }
    }, {
      key: "_removeEventListeners",
      value: function _removeEventListeners() {
        this._dismiss.removeEventListener('click', this.dismiss.bind(this));
      } // Static jQuery Interface

    }, {
      key: "dismiss",
      // Public
      value: function dismiss(event) {
        this._element._closable = true;

        if (!event) {
          $(this._toggle).dropdown('toggle');
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._removeEventListeners();

        $.removeData(this._element, DATA_KEY);
        $(this._element).dropdown('dispose');
        this._element = null;
      }
    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new DropdownDismissable(this);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return DropdownDismissable;
  }();

  $(document).on({
    'show.bs.dropdown': function showBsDropdown() {
      this._closable = false;
    },
    'hide.bs.dropdown': function hideBsDropdown() {
      return this._closable === undefined || this._closable !== false;
    }
  }, '[data-dropdown-dismissable]'); ////////////
  // jQuery //
  ////////////

  $.fn[NAME] = DropdownDismissable._jQueryInterface;
  $.fn[NAME].Constructor = DropdownDismissable;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return DropdownDismissable._jQueryInterface;
  }; ////////////////
  // Initialize //
  ////////////////


  $('[data-dropdown-dismissable]').dropdownDismissable();
  return DropdownDismissable;
}($);

/* harmony default export */ __webpack_exports__["default"] = (DropdownDismissable);

/***/ }),

/***/ 25:
/*!*******************************************************!*\
  !*** multi ./src/js/settings/dropdown-dismissable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\settings\dropdown-dismissable.js */"./src/js/settings/dropdown-dismissable.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NldHRpbmdzL2Ryb3Bkb3duLWRpc21pc3NhYmxlLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duRGlzbWlzc2FibGUiLCJOQU1FIiwiREFUQV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCIkIiwiZm4iLCJlbGVtZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwiX2VsZW1lbnQiLCJfZGlzbWlzcyIsInF1ZXJ5U2VsZWN0b3IiLCJfdG9nZ2xlIiwiX2luaXQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJoYXNDbGFzcyIsImRyb3Bkb3duIiwiX2Nsb3NhYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc21pc3MiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX3JlbW92ZUV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRGF0YSIsImNvbmZpZyIsImVhY2giLCJkYXRhIiwiRXJyb3IiLCJkb2N1bWVudCIsIm9uIiwidW5kZWZpbmVkIiwiX2pRdWVyeUludGVyZmFjZSIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsImRyb3Bkb3duRGlzbWlzc2FibGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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QWFFLGtCQUFiO0FBQ0EsV0FBT0gsbUJBQW1CLENBQUNxQyxnQkFBM0I7QUFDRCxHQUhELENBekZpQyxDQThGakM7QUFDQTtBQUNBOzs7QUFFQWpDLEdBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDb0MsbUJBQWpDO0FBRUEsU0FBT3hDLG1CQUFQO0FBRUQsQ0F0RzJCLENBc0d6QkksQ0F0R3lCLENBQTVCOztBQXdHZUosa0ZBQWYsRSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvZHJvcGRvd24tZGlzbWlzc2FibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI1KTtcbiIsIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuY29uc3QgRHJvcGRvd25EaXNtaXNzYWJsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdkcm9wZG93bkRpc21pc3NhYmxlJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMuZHJvcGRvd24tZGlzbWlzc2FibGUnXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuICBjbGFzcyBEcm9wZG93bkRpc21pc3NhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgTkFNRSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHRoaXNcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgICB0aGlzLl9kaXNtaXNzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kaXNtaXNzPVwiZHJvcGRvd25cIl0nKVxuICAgICAgdGhpcy5fdG9nZ2xlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScpXG4gICAgICB0aGlzLl9pbml0KClcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICQoJy5kcm9wZG93bi1tZW51JywgdGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKVxuICAgICAgICAkKHRoaXMuX3RvZ2dsZSkuZHJvcGRvd24oJ3RvZ2dsZScpXG4gICAgICB9XG4gICAgICB0aGlzLl9lbGVtZW50Ll9jbG9zYWJsZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5fZGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGlzbWlzcy5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIF9yZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuX2Rpc21pc3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRpc21pc3MuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICAvLyBTdGF0aWMgalF1ZXJ5IEludGVyZmFjZVxuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd25EaXNtaXNzYWJsZSh0aGlzKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUHVibGljXG5cbiAgICBkaXNtaXNzKGV2ZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50Ll9jbG9zYWJsZSA9IHRydWVcbiAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLl90b2dnbGUpLmRyb3Bkb3duKCd0b2dnbGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpXG5cbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkuZHJvcGRvd24oJ2Rpc3Bvc2UnKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB9XG4gIH1cblxuICAkKGRvY3VtZW50KS5vbih7XG4gICAgJ3Nob3cuYnMuZHJvcGRvd24nOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2Nsb3NhYmxlID0gZmFsc2VcbiAgICB9LFxuICAgICdoaWRlLmJzLmRyb3Bkb3duJzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2xvc2FibGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9jbG9zYWJsZSAhPT0gZmFsc2VcbiAgICB9XG4gIH0sICdbZGF0YS1kcm9wZG93bi1kaXNtaXNzYWJsZV0nKVxuXG4gIC8vLy8vLy8vLy8vL1xuICAvLyBqUXVlcnkgLy9cbiAgLy8vLy8vLy8vLy8vXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IERyb3Bkb3duRGlzbWlzc2FibGUuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25EaXNtaXNzYWJsZVxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gRHJvcGRvd25EaXNtaXNzYWJsZS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEluaXRpYWxpemUgLy9cbiAgLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgJCgnW2RhdGEtZHJvcGRvd24tZGlzbWlzc2FibGVdJykuZHJvcGRvd25EaXNtaXNzYWJsZSgpXG5cbiAgcmV0dXJuIERyb3Bkb3duRGlzbWlzc2FibGVcblxufSkoJClcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25EaXNtaXNzYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=