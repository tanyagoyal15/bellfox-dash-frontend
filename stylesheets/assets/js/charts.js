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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/charts.js":
/*!**********************************!*\
  !*** ./src/js/plugins/charts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var extend = function extend(object, value) {
  for (var key in value) {
    "object" != _typeof(value[key]) ? object[key] = value[key] : extend(object[key], value[key]);
  }
};

var add = function add(element) {
  var data = element.data("add");
  var chart = $(element.data("target")).data("chart");

  if (element.is(":checked")) {
    var addRecursive = function addRecursive(chart, data) {
      for (var o in data) {
        Array.isArray(data[o]) ? data[o].forEach(function (a) {
          chart[o].push(a);
        }) : addRecursive(chart[o], data[o]);
      }
    };

    addRecursive(chart, data);
  } else {
    var removeRecursive = function removeRecursive(chart, data) {
      for (var o in data) {
        Array.isArray(data[o]) ? data[o].forEach(function (a) {
          chart[o].pop();
        }) : removeRecursive(chart[o], data[o]);
      }
    };

    removeRecursive(chart, data);
  }

  chart.update();
};

var update = function update(element) {
  var data = element.data("update");
  var chart = $(element.data("target")).data("chart");
  extend(chart, data);

  if (void 0 !== element.data("prefix") || void 0 !== element.data("suffix")) {
    var prefix = element.data("prefix") ? element.data("prefix") : "";
    var suffix = element.data("suffix") ? element.data("suffix") : "";

    if (chart.options.scales !== undefined) {
      chart.options.scales.yAxes[0].ticks.callback = function (a) {
        if (!(a % 10)) return prefix + a + suffix;
      };
    }

    chart.options.tooltips.callbacks.label = function (a, e) {
      var t = e.datasets[a.datasetIndex].label || "",
          o = a.yLabel || e.datasets[0].data[a.index],
          r = "";
      return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + prefix + o + suffix + "</span>";
    };
  }

  chart.update();
};

var globalSettings = {
  responsive: true,
  maintainAspectRatio: false,
  defaultColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[700] : settings.colors.gray[600],
  defaultFontColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[700] : settings.colors.gray[600],
  defaultFontFamily: settings.fonts.base,
  defaultFontSize: 13,
  layout: {
    padding: 0
  },
  legend: {
    display: false,
    position: "bottom",
    labels: {
      usePointStyle: true,
      padding: 16
    }
  },
  elements: {
    point: {
      radius: 0,
      backgroundColor: settings.colors.primary[700]
    },
    line: {
      tension: .4,
      borderWidth: 3,
      borderColor: settings.colors.primary[700],
      backgroundColor: settings.colors.transparent,
      borderCapStyle: "rounded"
    },
    rectangle: {
      backgroundColor: settings.colors.primary[700]
    },
    arc: {
      backgroundColor: settings.colors.primary[700],
      borderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white,
      borderWidth: 4
    }
  },
  tooltips: {
    enabled: !1,
    mode: "index",
    intersect: !1,
    custom: function custom(r) {
      var a = $("#chart-tooltip");

      if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
        if (r.body) {
          var e = r.title || [],
              l = r.body.map(function (a) {
            return a.lines;
          }),
              n = "";
          n += '<div class="arrow"></div>', e.forEach(function (a) {
            n += '<h3 class="popover-header text-center">' + a + "</h3>";
          }), l.forEach(function (a, e) {
            var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                o = 1 < l.length ? "justify-content-left" : "justify-content-center";
            n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>";
          }), a.html(n);
        }

        var t = $(this._chart.canvas),
            o = (t.outerWidth(), t.outerHeight(), t.offset().top),
            s = t.offset().left,
            i = a.outerWidth(),
            c = a.outerHeight(),
            d = o + r.caretY - c - 16,
            u = s + r.caretX - i / 2;
        a.css({
          top: d + "px",
          left: u + "px",
          display: "block"
        });
      } else a.css("display", "none");
    },
    callbacks: {
      label: function label(a, e) {
        var t = e.datasets[a.datasetIndex].label || "",
            o = a.yLabel,
            r = "";
        return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "</span>";
      }
    }
  }
};
var doughnutSettings = {
  cutoutPercentage: 83,
  tooltips: {
    callbacks: {
      title: function title(a, e) {
        return e.labels[a[0].index];
      },
      label: function label(a, e) {
        var t = "";
        return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "</span>";
      }
    }
  },
  legendCallback: function legendCallback(a) {
    var o = a.data,
        r = "";
    return o.labels.forEach(function (a, e) {
      var t = o.datasets[0].backgroundColor[e];
      r += '<span class="chart-legend-item">', r += '<i class="chart-legend-indicator" style="background-color: ' + t + '"></i>', r += a, r += "</span>";
    }), r;
  }
};

var create = function create(id) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var element = $(id);
  var chart = new Chart(element, {
    type: type,
    options: options,
    data: data
  });
  element.data("chart", chart);

  if (element.data("chart-legend")) {
    document.querySelector(element.data("chart-legend")).innerHTML = chart.generateLegend();
  }
};

var init = function init() {
  extend(Chart, {
    defaults: {
      global: globalSettings,
      doughnut: doughnutSettings
    }
  });
  Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[100],
      drawBorder: !1,
      drawTicks: !1,
      lineWidth: 0,
      zeroLineWidth: 0,
      zeroLineColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[100],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: !0,
      padding: 10,
      callback: function callback(a) {
        if (!(a % 10)) return a;
      }
    }
  });
  Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: !1,
      drawOnChartArea: !1,
      drawTicks: !1
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });
  $('[data-toggle="chart"]').on({
    change: function change() {
      var el = $(this);

      if (el.is("[data-add]")) {
        add(el);
      }
    },
    click: function click() {
      var el = $(this);

      if (el.is("[data-update]")) {
        update(el);
      }
    }
  });
};

var Charts = {
  settings: settings,
  init: init,
  add: add,
  update: update,
  create: create
};

if (window !== undefined) {
  window.Charts = Charts;
}

/***/ }),

/***/ 10:
/*!****************************************!*\
  !*** multi ./src/js/plugins/charts.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\plugins\charts.js */"./src/js/plugins/charts.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsdWdpbnMvY2hhcnRzLmpzIl0sIm5hbWVzIjpbImV4dGVuZCIsIm9iamVjdCIsInZhbHVlIiwia2V5IiwiYWRkIiwiZWxlbWVudCIsImRhdGEiLCJjaGFydCIsIiQiLCJpcyIsImFkZFJlY3Vyc2l2ZSIsIm8iLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiYSIsInB1c2giLCJyZW1vdmVSZWN1cnNpdmUiLCJwb3AiLCJ1cGRhdGUiLCJwcmVmaXgiLCJzdWZmaXgiLCJvcHRpb25zIiwic2NhbGVzIiwidW5kZWZpbmVkIiwieUF4ZXMiLCJ0aWNrcyIsImNhbGxiYWNrIiwidG9vbHRpcHMiLCJjYWxsYmFja3MiLCJsYWJlbCIsImUiLCJ0IiwiZGF0YXNldHMiLCJkYXRhc2V0SW5kZXgiLCJ5TGFiZWwiLCJpbmRleCIsInIiLCJsZW5ndGgiLCJnbG9iYWxTZXR0aW5ncyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiZGVmYXVsdENvbG9yIiwic2V0dGluZ3MiLCJjaGFydHMiLCJjb2xvclNjaGVtZSIsImNvbG9ycyIsImdyYXkiLCJkZWZhdWx0Rm9udENvbG9yIiwiZGVmYXVsdEZvbnRGYW1pbHkiLCJmb250cyIsImJhc2UiLCJkZWZhdWx0Rm9udFNpemUiLCJsYXlvdXQiLCJwYWRkaW5nIiwibGVnZW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibGFiZWxzIiwidXNlUG9pbnRTdHlsZSIsImVsZW1lbnRzIiwicG9pbnQiLCJyYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwibGluZSIsInRlbnNpb24iLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwidHJhbnNwYXJlbnQiLCJib3JkZXJDYXBTdHlsZSIsInJlY3RhbmdsZSIsImFyYyIsIndoaXRlIiwiZW5hYmxlZCIsIm1vZGUiLCJpbnRlcnNlY3QiLCJjdXN0b20iLCJhcHBlbmQiLCJvcGFjaXR5IiwiYm9keSIsInRpdGxlIiwibCIsIm1hcCIsImxpbmVzIiwibiIsImxhYmVsQ29sb3JzIiwiaHRtbCIsIl9jaGFydCIsImNhbnZhcyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsIm9mZnNldCIsInRvcCIsInMiLCJsZWZ0IiwiaSIsImMiLCJkIiwiY2FyZXRZIiwidSIsImNhcmV0WCIsImNzcyIsImRvdWdobnV0U2V0dGluZ3MiLCJjdXRvdXRQZXJjZW50YWdlIiwibGVnZW5kQ2FsbGJhY2siLCJjcmVhdGUiLCJpZCIsInR5cGUiLCJDaGFydCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImdlbmVyYXRlTGVnZW5kIiwiaW5pdCIsImRlZmF1bHRzIiwiZ2xvYmFsIiwiZG91Z2hudXQiLCJzY2FsZVNlcnZpY2UiLCJ1cGRhdGVTY2FsZURlZmF1bHRzIiwiZ3JpZExpbmVzIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJjb2xvciIsImRyYXdCb3JkZXIiLCJkcmF3VGlja3MiLCJsaW5lV2lkdGgiLCJ6ZXJvTGluZVdpZHRoIiwiemVyb0xpbmVDb2xvciIsInplcm9MaW5lQm9yZGVyRGFzaCIsInplcm9MaW5lQm9yZGVyRGFzaE9mZnNldCIsImJlZ2luQXRaZXJvIiwiZHJhd09uQ2hhcnRBcmVhIiwibWF4QmFyVGhpY2tuZXNzIiwib24iLCJjaGFuZ2UiLCJlbCIsImNsaWNrIiwiQ2hhcnRzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtR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RSxrQkFBVztBQUNqQixVQUFJQyxFQUFFLEdBQUdoSSxDQUFDLENBQUMsSUFBRCxDQUFWOztBQUNBLFVBQUlnSSxFQUFFLENBQUMvSCxFQUFILENBQU0sWUFBTixDQUFKLEVBQXlCO0FBQ3ZCTCxXQUFHLENBQUNvSSxFQUFELENBQUg7QUFDRDtBQUNGLEtBTjJCO0FBTzVCQyxTQUFLLEVBQUUsaUJBQVc7QUFDaEIsVUFBSUQsRUFBRSxHQUFHaEksQ0FBQyxDQUFDLElBQUQsQ0FBVjs7QUFDQSxVQUFJZ0ksRUFBRSxDQUFDL0gsRUFBSCxDQUFNLGVBQU4sQ0FBSixFQUE0QjtBQUMxQlUsY0FBTSxDQUFDcUgsRUFBRCxDQUFOO0FBQ0Q7QUFDRjtBQVoyQixHQUE5QjtBQWNELENBeEREOztBQTBEQSxJQUFNRSxNQUFNLEdBQUc7QUFDYi9GLFVBQVEsRUFBUkEsUUFEYTtBQUVidUUsTUFBSSxFQUFKQSxJQUZhO0FBR2I5RyxLQUFHLEVBQUhBLEdBSGE7QUFJYmUsUUFBTSxFQUFOQSxNQUphO0FBS2J1RixRQUFNLEVBQU5BO0FBTGEsQ0FBZjs7QUFRQSxJQUFJaUMsTUFBTSxLQUFLbkgsU0FBZixFQUEwQjtBQUN4Qm1ILFFBQU0sQ0FBQ0QsTUFBUCxHQUFnQkEsTUFBaEI7QUFDRCxDIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9jaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsImNvbnN0IGV4dGVuZCA9IChvYmplY3QsIHZhbHVlKSA9PiB7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgXCJvYmplY3RcIiAhPSB0eXBlb2YgdmFsdWVba2V5XSA/IG9iamVjdFtrZXldID0gdmFsdWVba2V5XSA6IGV4dGVuZChvYmplY3Rba2V5XSwgdmFsdWVba2V5XSlcbn1cblxuY29uc3QgYWRkID0gKGVsZW1lbnQpID0+IHtcbiAgdmFyIGRhdGEgPSBlbGVtZW50LmRhdGEoXCJhZGRcIilcbiAgdmFyIGNoYXJ0ID0gJChlbGVtZW50LmRhdGEoXCJ0YXJnZXRcIikpLmRhdGEoXCJjaGFydFwiKVxuXG4gIGlmIChlbGVtZW50LmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICBmdW5jdGlvbiBhZGRSZWN1cnNpdmUoY2hhcnQsIGRhdGEpIHtcbiAgICAgIGZvciAodmFyIG8gaW4gZGF0YSkgQXJyYXkuaXNBcnJheShkYXRhW29dKSA/IGRhdGFbb10uZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgICAgIGNoYXJ0W29dLnB1c2goYSlcbiAgICAgIH0pIDogYWRkUmVjdXJzaXZlKGNoYXJ0W29dLCBkYXRhW29dKVxuICAgIH1cbiAgICBhZGRSZWN1cnNpdmUoY2hhcnQsIGRhdGEpXG4gIH0gXG4gIGVsc2Uge1xuICAgIGZ1bmN0aW9uIHJlbW92ZVJlY3Vyc2l2ZShjaGFydCwgZGF0YSkge1xuICAgICAgZm9yICh2YXIgbyBpbiBkYXRhKSBBcnJheS5pc0FycmF5KGRhdGFbb10pID8gZGF0YVtvXS5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgY2hhcnRbb10ucG9wKClcbiAgICAgIH0pIDogcmVtb3ZlUmVjdXJzaXZlKGNoYXJ0W29dLCBkYXRhW29dKVxuICAgIH1cbiAgICByZW1vdmVSZWN1cnNpdmUoY2hhcnQsIGRhdGEpXG4gIH1cblxuICBjaGFydC51cGRhdGUoKVxufVxuXG5jb25zdCB1cGRhdGUgPSAoZWxlbWVudCkgPT4ge1xuICB2YXIgZGF0YSA9IGVsZW1lbnQuZGF0YShcInVwZGF0ZVwiKVxuICB2YXIgY2hhcnQgPSAkKGVsZW1lbnQuZGF0YShcInRhcmdldFwiKSkuZGF0YShcImNoYXJ0XCIpXG4gIFxuICBleHRlbmQoY2hhcnQsIGRhdGEpXG5cbiAgaWYgKHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKFwicHJlZml4XCIpIHx8IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKFwic3VmZml4XCIpKSB7XG4gICAgbGV0IHByZWZpeCA9IGVsZW1lbnQuZGF0YShcInByZWZpeFwiKSA/IGVsZW1lbnQuZGF0YShcInByZWZpeFwiKSA6IFwiXCJcbiAgICBsZXQgc3VmZml4ID0gZWxlbWVudC5kYXRhKFwic3VmZml4XCIpID8gZWxlbWVudC5kYXRhKFwic3VmZml4XCIpIDogXCJcIlxuXG4gICAgaWYgKGNoYXJ0Lm9wdGlvbnMuc2NhbGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLmNhbGxiYWNrID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBpZiAoIShhICUgMTApKSByZXR1cm4gcHJlZml4ICsgYSArIHN1ZmZpeFxuICAgICAgfVxuICAgIH1cblxuICAgIGNoYXJ0Lm9wdGlvbnMudG9vbHRpcHMuY2FsbGJhY2tzLmxhYmVsID0gZnVuY3Rpb24oYSwgZSkge1xuICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgIG8gPSBhLnlMYWJlbCB8fCBlLmRhdGFzZXRzWzBdLmRhdGFbYS5pbmRleF0sXG4gICAgICAgICAgciA9IFwiXCI7XG4gICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIHByZWZpeCArIG8gKyBzdWZmaXggKyBcIjwvc3Bhbj5cIlxuICAgIH1cbiAgfVxuXG4gIGNoYXJ0LnVwZGF0ZSgpXG59XG5cbmNvbnN0IGdsb2JhbFNldHRpbmdzID0ge1xuICByZXNwb25zaXZlOiB0cnVlLFxuICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgZGVmYXVsdENvbG9yOiBcImRhcmtcIiA9PSBzZXR0aW5ncy5jaGFydHMuY29sb3JTY2hlbWUgPyBzZXR0aW5ncy5jb2xvcnMuZ3JheVs3MDBdIDogc2V0dGluZ3MuY29sb3JzLmdyYXlbNjAwXSxcbiAgZGVmYXVsdEZvbnRDb2xvcjogXCJkYXJrXCIgPT0gc2V0dGluZ3MuY2hhcnRzLmNvbG9yU2NoZW1lID8gc2V0dGluZ3MuY29sb3JzLmdyYXlbNzAwXSA6IHNldHRpbmdzLmNvbG9ycy5ncmF5WzYwMF0sXG4gIGRlZmF1bHRGb250RmFtaWx5OiBzZXR0aW5ncy5mb250cy5iYXNlLFxuICBkZWZhdWx0Rm9udFNpemU6IDEzLFxuICBsYXlvdXQ6IHtcbiAgICBwYWRkaW5nOiAwXG4gIH0sXG4gIGxlZ2VuZDoge1xuICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuICAgIGxhYmVsczoge1xuICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcbiAgICAgIHBhZGRpbmc6IDE2XG4gICAgfVxuICB9LFxuICBlbGVtZW50czoge1xuICAgIHBvaW50OiB7XG4gICAgICByYWRpdXM6IDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzcwMF1cbiAgICB9LFxuICAgIGxpbmU6IHtcbiAgICAgIHRlbnNpb246IC40LFxuICAgICAgYm9yZGVyV2lkdGg6IDMsXG4gICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNzAwXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnRyYW5zcGFyZW50LFxuICAgICAgYm9yZGVyQ2FwU3R5bGU6IFwicm91bmRlZFwiXG4gICAgfSxcbiAgICByZWN0YW5nbGU6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNzAwXVxuICAgIH0sXG4gICAgYXJjOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzcwMF0sXG4gICAgICBib3JkZXJDb2xvcjogXCJkYXJrXCIgPT0gc2V0dGluZ3MuY2hhcnRzLmNvbG9yU2NoZW1lID8gc2V0dGluZ3MuY29sb3JzLmdyYXlbODAwXSA6IHNldHRpbmdzLmNvbG9ycy53aGl0ZSxcbiAgICAgIGJvcmRlcldpZHRoOiA0XG4gICAgfVxuICB9LFxuICB0b29sdGlwczoge1xuICAgIGVuYWJsZWQ6ICExLFxuICAgIG1vZGU6IFwiaW5kZXhcIixcbiAgICBpbnRlcnNlY3Q6ICExLFxuICAgIGN1c3RvbTogZnVuY3Rpb24ocikge1xuICAgICAgdmFyIGEgPSAkKFwiI2NoYXJ0LXRvb2x0aXBcIik7XG4gICAgICBpZiAoYS5sZW5ndGggfHwgKGEgPSAkKCc8ZGl2IGlkPVwiY2hhcnQtdG9vbHRpcFwiIGNsYXNzPVwicG9wb3ZlciBicy1wb3BvdmVyLXRvcFwiIHJvbGU9XCJ0b29sdGlwXCI+PC9kaXY+JyksICQoXCJib2R5XCIpLmFwcGVuZChhKSksIDAgIT09IHIub3BhY2l0eSkge1xuICAgICAgICBpZiAoci5ib2R5KSB7XG4gICAgICAgICAgdmFyIGUgPSByLnRpdGxlIHx8IFtdLFxuICAgICAgICAgICAgICBsID0gci5ib2R5Lm1hcChmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEubGluZXNcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG4gPSBcIlwiO1xuICAgICAgICAgIG4gKz0gJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicsIGUuZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIG4gKz0gJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyIHRleHQtY2VudGVyXCI+JyArIGEgKyBcIjwvaDM+XCJcbiAgICAgICAgICB9KSwgbC5mb3JFYWNoKGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktaW5kaWNhdG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnICsgci5sYWJlbENvbG9yc1tlXS5iYWNrZ3JvdW5kQ29sb3IgKyAnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICBvID0gMSA8IGwubGVuZ3RoID8gXCJqdXN0aWZ5LWNvbnRlbnQtbGVmdFwiIDogXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI7XG4gICAgICAgICAgICAgIG4gKz0gJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciAnICsgbyArICdcIj4nICsgdCArIGEgKyBcIjwvZGl2PlwiXG4gICAgICAgICAgfSksIGEuaHRtbChuKVxuICAgICAgICB9XG4gICAgICAgIHZhciB0ID0gJCh0aGlzLl9jaGFydC5jYW52YXMpLFxuICAgICAgICAgICAgbyA9ICh0Lm91dGVyV2lkdGgoKSwgdC5vdXRlckhlaWdodCgpLCB0Lm9mZnNldCgpLnRvcCksXG4gICAgICAgICAgICBzID0gdC5vZmZzZXQoKS5sZWZ0LFxuICAgICAgICAgICAgaSA9IGEub3V0ZXJXaWR0aCgpLFxuICAgICAgICAgICAgYyA9IGEub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICAgIGQgPSBvICsgci5jYXJldFkgLSBjIC0gMTYsXG4gICAgICAgICAgICB1ID0gcyArIHIuY2FyZXRYIC0gaSAvIDI7XG4gICAgICAgICAgXG4gICAgICAgIGEuY3NzKHtcbiAgICAgICAgICB0b3A6IGQgKyBcInB4XCIsXG4gICAgICAgICAgbGVmdDogdSArIFwicHhcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICAgICAgfSlcblxuICAgICAgfSBlbHNlIGEuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbiAgICB9LFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgbyA9IGEueUxhYmVsLFxuICAgICAgICAgICAgciA9IFwiXCI7XG4gICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgbyArIFwiPC9zcGFuPlwiXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRvdWdobnV0U2V0dGluZ3MgPSB7XG4gIGN1dG91dFBlcmNlbnRhZ2U6IDgzLFxuICB0b29sdGlwczoge1xuICAgIGNhbGxiYWNrczoge1xuICAgICAgdGl0bGU6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgcmV0dXJuIGUubGFiZWxzW2FbMF0uaW5kZXhdXG4gICAgICB9LFxuICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgdmFyIHQgPSBcIlwiO1xuICAgICAgICByZXR1cm4gdCArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgZS5kYXRhc2V0c1swXS5kYXRhW2EuaW5kZXhdICsgXCI8L3NwYW4+XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGxlZ2VuZENhbGxiYWNrOiBmdW5jdGlvbihhKSB7XG4gICAgdmFyIG8gPSBhLmRhdGEsXG4gICAgICAgIHIgPSBcIlwiO1xuICAgIHJldHVybiBvLmxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgIHZhciB0ID0gby5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3JbZV07XG4gICAgICByICs9ICc8c3BhbiBjbGFzcz1cImNoYXJ0LWxlZ2VuZC1pdGVtXCI+JywgciArPSAnPGkgY2xhc3M9XCJjaGFydC1sZWdlbmQtaW5kaWNhdG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnICsgdCArICdcIj48L2k+JywgciArPSBhLCByICs9IFwiPC9zcGFuPlwiXG4gICAgfSksIHJcbiAgfVxufVxuXG5jb25zdCBjcmVhdGUgPSAoaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSwgZGF0YSA9IHt9KSA9PiB7XG4gIHZhciBlbGVtZW50ID0gJChpZClcbiAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KGVsZW1lbnQsIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgZGF0YTogZGF0YVxuICB9KVxuICBlbGVtZW50LmRhdGEoXCJjaGFydFwiLCBjaGFydClcbiAgaWYgKGVsZW1lbnQuZGF0YShcImNoYXJ0LWxlZ2VuZFwiKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudC5kYXRhKFwiY2hhcnQtbGVnZW5kXCIpKVxuICAgICAgLmlubmVySFRNTCA9IGNoYXJ0LmdlbmVyYXRlTGVnZW5kKClcbiAgfVxufVxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBleHRlbmQoQ2hhcnQsIHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgZ2xvYmFsOiBnbG9iYWxTZXR0aW5ncyxcbiAgICAgIGRvdWdobnV0OiBkb3VnaG51dFNldHRpbmdzXG4gICAgfVxuICB9KVxuXG4gIENoYXJ0LnNjYWxlU2VydmljZS51cGRhdGVTY2FsZURlZmF1bHRzKFwibGluZWFyXCIsIHtcbiAgICBncmlkTGluZXM6IHtcbiAgICAgIGJvcmRlckRhc2g6IFsyXSxcbiAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgIGNvbG9yOiBcImRhcmtcIiA9PSBzZXR0aW5ncy5jaGFydHMuY29sb3JTY2hlbWUgPyBzZXR0aW5ncy5jb2xvcnMuZ3JheVs5MDBdIDogc2V0dGluZ3MuY29sb3JzLmdyYXlbMTAwXSxcbiAgICAgIGRyYXdCb3JkZXI6ICExLFxuICAgICAgZHJhd1RpY2tzOiAhMSxcbiAgICAgIGxpbmVXaWR0aDogMCxcbiAgICAgIHplcm9MaW5lV2lkdGg6IDAsXG4gICAgICB6ZXJvTGluZUNvbG9yOiBcImRhcmtcIiA9PSBzZXR0aW5ncy5jaGFydHMuY29sb3JTY2hlbWUgPyBzZXR0aW5ncy5jb2xvcnMuZ3JheVs5MDBdIDogc2V0dGluZ3MuY29sb3JzLmdyYXlbMTAwXSxcbiAgICAgIHplcm9MaW5lQm9yZGVyRGFzaDogWzJdLFxuICAgICAgemVyb0xpbmVCb3JkZXJEYXNoT2Zmc2V0OiBbMl1cbiAgICB9LFxuICAgIHRpY2tzOiB7XG4gICAgICBiZWdpbkF0WmVybzogITAsXG4gICAgICBwYWRkaW5nOiAxMCxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihhKSB7XG4gICAgICAgIGlmICghKGEgJSAxMCkpIHJldHVybiBhXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIENoYXJ0LnNjYWxlU2VydmljZS51cGRhdGVTY2FsZURlZmF1bHRzKFwiY2F0ZWdvcnlcIiwge1xuICAgIGdyaWRMaW5lczoge1xuICAgICAgZHJhd0JvcmRlcjogITEsXG4gICAgICBkcmF3T25DaGFydEFyZWE6ICExLFxuICAgICAgZHJhd1RpY2tzOiAhMVxuICAgIH0sXG4gICAgdGlja3M6IHtcbiAgICAgIHBhZGRpbmc6IDIwXG4gICAgfSxcbiAgICBtYXhCYXJUaGlja25lc3M6IDEwXG4gIH0pXG5cbiAgJCgnW2RhdGEtdG9nZ2xlPVwiY2hhcnRcIl0nKS5vbih7XG4gICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbCA9ICQodGhpcylcbiAgICAgIGlmIChlbC5pcyhcIltkYXRhLWFkZF1cIikpIHtcbiAgICAgICAgYWRkKGVsKVxuICAgICAgfVxuICAgIH0sXG4gICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsID0gJCh0aGlzKVxuICAgICAgaWYgKGVsLmlzKFwiW2RhdGEtdXBkYXRlXVwiKSkge1xuICAgICAgICB1cGRhdGUoZWwpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBDaGFydHMgPSB7XG4gIHNldHRpbmdzLFxuICBpbml0LFxuICBhZGQsXG4gIHVwZGF0ZSxcbiAgY3JlYXRlXG59XG5cbmlmICh3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICB3aW5kb3cuQ2hhcnRzID0gQ2hhcnRzXG59Il0sInNvdXJjZVJvb3QiOiIifQ==