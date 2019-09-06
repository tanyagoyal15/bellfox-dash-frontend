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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/toggle-check-all.js":
/*!************************************!*\
  !*** ./src/js/toggle-check-all.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var toggleCheckAllComponent = function toggleCheckAllComponent() {
  return {
    properties: {
      target: {
        reflectToAttribute: true
      }
    },
    listeners: ['_onClick(click)'],

    /**
     * Fire a DOM Event on the HTMLElement
     * @param  {String} eventName The event name
     */
    dispatchEvent: function dispatchEvent(eventName, element) {
      var event;
      var bubbles = false;

      if ('CustomEvent' in window && _typeof(window.CustomEvent) === 'object') {
        try {
          event = new CustomEvent(eventName, {
            bubbles: bubbles,
            cancelable: false
          });
        } catch (e) {
          event = new this.CustomEvent_(eventName, {
            bubbles: bubbles,
            cancelable: false
          });
        }
      } else {
        event = document.createEvent('Event');
        event.initEvent(eventName, bubbles, true);
      }

      element.dispatchEvent(event);
    },
    CustomEvent_: function CustomEvent_(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    },

    get $target() {
      return document.querySelector(this.target);
    },

    get $targets() {
      return this.$target.querySelectorAll('[type="checkbox"]');
    },

    _onClick: function _onClick(e) {
      var _this = this;

      if (this.element.type && this.element.type === 'checkbox') {
        this._checked = this.element.checked;
      } else {
        this._checked = !this._checked;
        e.preventDefault();
      }

      this.$targets.forEach(function (i) {
        i.checked = _this._checked;

        _this.dispatchEvent('change', i);
      });
    }
  };
};

domFactory.handler.register('toggle-check-all', toggleCheckAllComponent);

/***/ }),

/***/ 29:
/*!******************************************!*\
  !*** multi ./src/js/toggle-check-all.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\toggle-check-all.js */"./src/js/toggle-check-all.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZ2dsZS1jaGVjay1hbGwuanMiXSwibmFtZXMiOlsidG9nZ2xlQ2hlY2tBbGxDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwicmVmbGVjdFRvQXR0cmlidXRlIiwibGlzdGVuZXJzIiwiZGlzcGF0Y2hFdmVudCIsImV2ZW50TmFtZSIsImVsZW1lbnQiLCJldmVudCIsImJ1YmJsZXMiLCJ3aW5kb3ciLCJDdXN0b21FdmVudCIsImNhbmNlbGFibGUiLCJlIiwiQ3VzdG9tRXZlbnRfIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsInBhcmFtcyIsImRldGFpbCIsInVuZGVmaW5lZCIsImV2dCIsImluaXRDdXN0b21FdmVudCIsIiR0YXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwiJHRhcmdldHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX29uQ2xpY2siLCJ0eXBlIiwiX2NoZWNrZWQiLCJjaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJmb3JFYWNoIiwiaSIsImRvbUZhY3RvcnkiLCJoYW5kbGVyIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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Q3hCLGFBQUwsQ0FBbUIsUUFBbkIsRUFBNkI0QixDQUE3QjtBQUNELE9BSEQ7QUFJRDtBQW5Fb0MsR0FBUDtBQUFBLENBQWhDOztBQXNFQUMsVUFBVSxDQUFDQyxPQUFYLENBQW1CQyxRQUFuQixDQUE0QixrQkFBNUIsRUFBZ0RwQyx1QkFBaEQsRSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvdG9nZ2xlLWNoZWNrLWFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjkpO1xuIiwiY29uc3QgdG9nZ2xlQ2hlY2tBbGxDb21wb25lbnQgPSAoKSA9PiAoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGFyZ2V0OiB7XG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICB9LFxuICB9LFxuXG4gIGxpc3RlbmVyczogW1xuICAgICdfb25DbGljayhjbGljayknLFxuICBdLFxuXG4gIC8qKlxuICAgKiBGaXJlIGEgRE9NIEV2ZW50IG9uIHRoZSBIVE1MRWxlbWVudFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50TmFtZSBUaGUgZXZlbnQgbmFtZVxuICAgKi9cbiAgZGlzcGF0Y2hFdmVudCAoZXZlbnROYW1lLCBlbGVtZW50KSB7XG4gICAgbGV0IGV2ZW50XG4gICAgbGV0IGJ1YmJsZXMgPSBmYWxzZVxuICAgIGlmICgnQ3VzdG9tRXZlbnQnIGluIHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgICAgICAgYnViYmxlcyxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgICAgICB9KSBcbiAgICAgIH0gXG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBldmVudCA9IG5ldyB0aGlzLkN1c3RvbUV2ZW50XyhldmVudE5hbWUsIHtcbiAgICAgICAgICBidWJibGVzLFxuICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAgICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgYnViYmxlcywgdHJ1ZSlcbiAgICB9XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICB9LFxuXG4gIEN1c3RvbUV2ZW50XyAoZXZlbnQsIHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfVxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbClcbiAgICByZXR1cm4gZXZ0XG4gIH0sXG5cbiAgZ2V0ICR0YXJnZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudGFyZ2V0KVxuICB9LFxuXG4gIGdldCAkdGFyZ2V0cyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgfSxcblxuICBfb25DbGljayAoZSkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQudHlwZSAmJiB0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IHRoaXMuZWxlbWVudC5jaGVja2VkXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9ICF0aGlzLl9jaGVja2VkXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLiR0YXJnZXRzLmZvckVhY2goaSA9PiB7XG4gICAgICBpLmNoZWNrZWQgPSB0aGlzLl9jaGVja2VkXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NoYW5nZScsIGkpXG4gICAgfSlcbiAgfVxufSlcblxuZG9tRmFjdG9yeS5oYW5kbGVyLnJlZ2lzdGVyKCd0b2dnbGUtY2hlY2stYWxsJywgdG9nZ2xlQ2hlY2tBbGxDb21wb25lbnQpIl0sInNvdXJjZVJvb3QiOiIifQ==