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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page.ui-charts.js":
/*!**********************************!*\
  !*** ./src/js/page.ui-charts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  Charts.init();

  var Performance = function Performance(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return "$" + a + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Orders = function Orders(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'roundedBar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      barRoundness: 1.2,
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return "$" + a + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Devices = function Devices(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'doughnut';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      tooltips: {
        callbacks: {
          title: function title(a, e) {
            return e.labels[a[0].index];
          },
          label: function label(a, e) {
            var t = "";
            return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "%</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["Desktop", "Tablet", "Mobile"],
      datasets: [{
        data: [60, 25, 15],
        backgroundColor: [settings.colors.primary[700], settings.colors.success[300], settings.colors.success[100]],
        hoverBorderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white
      }]
    };
    Charts.create(id, type, options, data);
  }; ///////////////////
  // Create Charts //
  ///////////////////


  Performance('#performanceChart');
  Performance('#performanceAreaChart', 'line', {
    elements: {
      line: {
        fill: 'start',
        backgroundColor: settings.charts.colors.area
      }
    }
  });
  Orders('#ordersChart');
  Orders('#ordersChartSwitch');
  Devices('#devicesChart');
  $('[data-toggle="chart"]:checked').each(function (index, el) {
    Charts.add($(el));
  });
})();

/***/ }),

/***/ 7:
/*!****************************************!*\
  !*** multi ./src/js/page.ui-charts.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\page.ui-charts.js */"./src/js/page.ui-charts.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UudWktY2hhcnRzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsImluaXQiLCJQZXJmb3JtYW5jZSIsImlkIiwidHlwZSIsIm9wdGlvbnMiLCJDaGFydCIsImhlbHBlcnMiLCJtZXJnZSIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJjYWxsYmFjayIsImEiLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwiZSIsInQiLCJkYXRhc2V0cyIsImRhdGFzZXRJbmRleCIsIm8iLCJ5TGFiZWwiLCJyIiwibGVuZ3RoIiwiZGF0YSIsImxhYmVscyIsImNyZWF0ZSIsIk9yZGVycyIsImJhclJvdW5kbmVzcyIsIkRldmljZXMiLCJ0aXRsZSIsImluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwic2V0dGluZ3MiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic3VjY2VzcyIsImhvdmVyQm9yZGVyQ29sb3IiLCJjaGFydHMiLCJjb2xvclNjaGVtZSIsImdyYXkiLCJ3aGl0ZSIsImVsZW1lbnRzIiwibGluZSIsImZpbGwiLCJhcmVhIiwiJCIsImVhY2giLCJlbCIsImFkZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFB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QVVKLFFBQVEsQ0FBQ0ssTUFBVCxDQUFnQkMsV0FBMUIsR0FBd0NOLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQk0sSUFBaEIsQ0FBcUIsR0FBckIsQ0FBeEMsR0FBb0VQLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQk87QUFIN0YsT0FBRDtBQUZELEtBQVg7QUFTQTFDLFVBQU0sQ0FBQzJCLE1BQVAsQ0FBY3hCLEVBQWQsRUFBa0JDLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQ29CLElBQWpDO0FBQ0QsR0F6QkQsQ0E1RVMsQ0F1R1Q7QUFDQTtBQUNBOzs7QUFFQXZCLGFBQVcsQ0FBQyxtQkFBRCxDQUFYO0FBRUFBLGFBQVcsQ0FBQyx1QkFBRCxFQUEwQixNQUExQixFQUFrQztBQUMzQ3lDLFlBQVEsRUFBRTtBQUNSQyxVQUFJLEVBQUU7QUFDSkMsWUFBSSxFQUFFLE9BREY7QUFFSlosdUJBQWUsRUFBRUMsUUFBUSxDQUFDSyxNQUFULENBQWdCSixNQUFoQixDQUF1Qlc7QUFGcEM7QUFERTtBQURpQyxHQUFsQyxDQUFYO0FBU0FsQixRQUFNLENBQUMsY0FBRCxDQUFOO0FBRUFBLFFBQU0sQ0FBQyxvQkFBRCxDQUFOO0FBRUFFLFNBQU8sQ0FBQyxlQUFELENBQVA7QUFFQWlCLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxJQUFuQyxDQUF3QyxVQUFVaEIsS0FBVixFQUFpQmlCLEVBQWpCLEVBQXFCO0FBQzNEakQsVUFBTSxDQUFDa0QsR0FBUCxDQUFXSCxDQUFDLENBQUNFLEVBQUQsQ0FBWjtBQUNELEdBRkQ7QUFJRCxDQWhJRCxJIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9wYWdlLnVpLWNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIENoYXJ0cy5pbml0KClcbiAgXG4gIHZhciBQZXJmb3JtYW5jZSA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ2xpbmUnLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIGlmICghKGEgJSAxMCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgYSArIFwia1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUuZGF0YXNldHNbYS5kYXRhc2V0SW5kZXhdLmxhYmVsIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbyA9IGEueUxhYmVsLFxuICAgICAgICAgICAgICAgIHIgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIDEgPCBlLmRhdGFzZXRzLmxlbmd0aCAmJiAociArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicgKyB0ICsgXCI8L3NwYW4+XCIpLCByICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPiQnICsgbyArIFwiazwvc3Bhbj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIlBlcmZvcm1hbmNlXCIsXG4gICAgICAgIGRhdGE6IFswLCAxMCwgNSwgMTUsIDEwLCAyMCwgMTUsIDI1LCAyMCwgMzAsIDI1LCA0MF1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIHZhciBPcmRlcnMgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdyb3VuZGVkQmFyJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgYmFyUm91bmRuZXNzOiAxLjIsXG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIGlmICghKGEgJSAxMCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgYSArIFwia1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUuZGF0YXNldHNbYS5kYXRhc2V0SW5kZXhdLmxhYmVsIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbyA9IGEueUxhYmVsLFxuICAgICAgICAgICAgICAgIHIgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIDEgPCBlLmRhdGFzZXRzLmxlbmd0aCAmJiAociArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicgKyB0ICsgXCI8L3NwYW4+XCIpLCByICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPiQnICsgbyArIFwiazwvc3Bhbj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIlNhbGVzXCIsXG4gICAgICAgIGRhdGE6IFsyNSwgMjAsIDMwLCAyMiwgMTcsIDEwLCAxOCwgMjYsIDI4LCAyNiwgMjAsIDMyXVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgdmFyIERldmljZXMgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdkb3VnaG51dCcsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIHRpdGxlOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5sYWJlbHNbYVswXS5pbmRleF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gdCArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgZS5kYXRhc2V0c1swXS5kYXRhW2EuaW5kZXhdICsgXCIlPC9zcGFuPlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgbGFiZWxzOiBbXCJEZXNrdG9wXCIsIFwiVGFibGV0XCIsIFwiTW9iaWxlXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGRhdGE6IFs2MCwgMjUsIDE1XSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNzAwXSwgc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbMzAwXSwgc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbMTAwXV0sXG4gICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6IFwiZGFya1wiID09IHNldHRpbmdzLmNoYXJ0cy5jb2xvclNjaGVtZSA/IHNldHRpbmdzLmNvbG9ycy5ncmF5WzgwMF0gOiBzZXR0aW5ncy5jb2xvcnMud2hpdGVcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gQ3JlYXRlIENoYXJ0cyAvL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgUGVyZm9ybWFuY2UoJyNwZXJmb3JtYW5jZUNoYXJ0JylcbiAgXG4gIFBlcmZvcm1hbmNlKCcjcGVyZm9ybWFuY2VBcmVhQ2hhcnQnLCAnbGluZScsIHtcbiAgICBlbGVtZW50czoge1xuICAgICAgbGluZToge1xuICAgICAgICBmaWxsOiAnc3RhcnQnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNoYXJ0cy5jb2xvcnMuYXJlYVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBPcmRlcnMoJyNvcmRlcnNDaGFydCcpXG5cbiAgT3JkZXJzKCcjb3JkZXJzQ2hhcnRTd2l0Y2gnKVxuXG4gIERldmljZXMoJyNkZXZpY2VzQ2hhcnQnKVxuXG4gICQoJ1tkYXRhLXRvZ2dsZT1cImNoYXJ0XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICBDaGFydHMuYWRkKCQoZWwpKVxuICB9KVxuXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==