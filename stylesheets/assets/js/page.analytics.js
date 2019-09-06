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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page.analytics.js":
/*!**********************************!*\
  !*** ./src/js/page.analytics.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  window['moment-range'].extendMoment(moment);
  Charts.init();

  var Views = function Views(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      elements: {
        line: {
          fill: 'start',
          backgroundColor: settings.charts.colors.area,
          tension: 0,
          borderWidth: 1
        },
        point: {
          pointStyle: 'circle',
          radius: 5,
          hoverRadius: 5,
          backgroundColor: settings.colors.white,
          borderColor: settings.colors.primary[700],
          borderWidth: 2
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day'
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + " views</span>";
          }
        }
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(7, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = range.by('days')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _moment = _step.value;
        data.push({
          y: Math.floor(Math.random() * 300) + 10,
          x: _moment.toDate()
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var data = {
      datasets: [{
        label: "All Views",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  }; ///////////////////
  // Create Charts //
  ///////////////////


  Views('#viewsChart');
})();

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./src/js/page.analytics.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\page.analytics.js */"./src/js/page.analytics.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UuYW5hbHl0aWNzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImV4dGVuZE1vbWVudCIsIm1vbWVudCIsIkNoYXJ0cyIsImluaXQiLCJWaWV3cyIsImlkIiwidHlwZSIsIm9wdGlvbnMiLCJDaGFydCIsImhlbHBlcnMiLCJtZXJnZSIsImVsZW1lbnRzIiwibGluZSIsImZpbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZXR0aW5ncyIsImNoYXJ0cyIsImNvbG9ycyIsImFyZWEiLCJ0ZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJwb2ludCIsInBvaW50U3R5bGUiLCJyYWRpdXMiLCJob3ZlclJhZGl1cyIsIndoaXRlIiwiYm9yZGVyQ29sb3IiLCJwcmltYXJ5Iiwic2NhbGVzIiwieEF4ZXMiLCJncmlkTGluZXMiLCJkaXNwbGF5IiwidGltZSIsInVuaXQiLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwiYSIsImUiLCJ0IiwiZGF0YXNldHMiLCJkYXRhc2V0SW5kZXgiLCJvIiwieUxhYmVsIiwiciIsImxlbmd0aCIsImRhdGEiLCJzdGFydCIsInN1YnRyYWN0IiwiZm9ybWF0IiwiZW5kIiwicmFuZ2UiLCJieSIsInB1c2giLCJ5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieCIsInRvRGF0ZSIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztR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QUFBO0FBa0RwRCwyQkFBbUJDLEtBQUssQ0FBQ0MsRUFBTixDQUFTLE1BQVQsQ0FBbkIsOEhBQXFDO0FBQUEsWUFBNUJuRCxPQUE0QjtBQUNuQzZDLFlBQUksQ0FBQ08sSUFBTCxDQUFVO0FBQ1JDLFdBQUMsRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixJQUFrQyxFQUQ3QjtBQUVSQyxXQUFDLEVBQUV6RCxPQUFNLENBQUMwRCxNQUFQO0FBRkssU0FBVjtBQUlEO0FBdkRtRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXlEcEQsUUFBSWIsSUFBSSxHQUFHO0FBQ1ROLGNBQVEsRUFBRSxDQUFDO0FBQ1RKLGFBQUssRUFBRSxXQURFO0FBRVRVLFlBQUksRUFBSkE7QUFGUyxPQUFEO0FBREQsS0FBWDtBQU9BNUMsVUFBTSxDQUFDMEQsTUFBUCxDQUFjdkQsRUFBZCxFQUFrQkMsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDdUMsSUFBakM7QUFDRCxHQWpFRCxDQVBTLENBMEVUO0FBQ0E7QUFDQTs7O0FBQ0ExQyxPQUFLLENBQUMsYUFBRCxDQUFMO0FBRUQsQ0EvRUQsSSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvcGFnZS5hbmFseXRpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICB3aW5kb3dbJ21vbWVudC1yYW5nZSddLmV4dGVuZE1vbWVudChtb21lbnQpO1xuXG4gIENoYXJ0cy5pbml0KClcblxuICB2YXIgVmlld3MgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIGZpbGw6ICdzdGFydCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jaGFydHMuY29sb3JzLmFyZWEsXG4gICAgICAgICAgdGVuc2lvbjogMCxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMVxuICAgICAgICB9LFxuICAgICAgICBwb2ludDoge1xuICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgIHJhZGl1czogNSxcbiAgICAgICAgICBob3ZlclJhZGl1czogNSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy53aGl0ZSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNzAwXSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgbyArIFwiIHZpZXdzPC9zcGFuPlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0gW11cblxuICAgIC8vIENyZWF0ZSBhIGRhdGUgcmFuZ2UgZm9yIHRoZSBsYXN0IDcgZGF5c1xuICAgIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDcsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gNyBkYXlzIGFnb1xuICAgIHZhciBlbmQgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyB0b2RheVxuICAgIHZhciByYW5nZSA9IG1vbWVudC5yYW5nZShzdGFydCwgZW5kKVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBncmFwaCBkYXRhXG4gICAgLy8gSXRlcmF0ZSB0aGUgZGF0ZSByYW5nZSBhbmQgYXNzaWduIGEgcmFuZG9tIHZhbHVlIGZvciBlYWNoIGRheVxuICAgIGZvciAobGV0IG1vbWVudCBvZiByYW5nZS5ieSgnZGF5cycpKSB7XG4gICAgICBkYXRhLnB1c2goe1xuICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMDApICsgMTAsXG4gICAgICAgIHg6IG1vbWVudC50b0RhdGUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJBbGwgVmlld3NcIixcbiAgICAgICAgZGF0YVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBDcmVhdGUgQ2hhcnRzIC8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgVmlld3MoJyN2aWV3c0NoYXJ0JylcblxufSkoKSJdLCJzb3VyY2VSb290IjoiIn0=