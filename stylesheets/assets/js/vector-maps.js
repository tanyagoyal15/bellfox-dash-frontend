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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/vector-maps.js":
/*!***************************************!*\
  !*** ./src/js/plugins/vector-maps.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  JQVMap.prototype.resizeContainer = function () {
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
    this.positionPins();
  };

  JQVMap.prototype.setFocus = function (codes) {
    var _this = this;

    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof codes === 'string') {
      codes = [codes];
    }

    var map = this;
    var coords, newCoords;
    codes.forEach(function (cc) {
      var el = $('#' + _this.getCountryId(cc));
      var path = el[0];
      var bbox = path.getBBox();

      if (typeof coords == 'undefined') {
        coords = bbox;
      } else {
        newCoords = {
          x: Math.min(coords.x, bbox.x),
          y: Math.min(coords.y, bbox.y),
          width: Math.max(coords.x + coords.width, bbox.x + bbox.width) - Math.min(coords.x, bbox.x),
          height: Math.max(coords.y + coords.height, bbox.y + bbox.height) - Math.min(coords.y, bbox.y)
        };
        coords = newCoords;
      }
    });
    var scale = Math.min(this.width / coords.width, this.height / coords.height);

    if (scale > this.zoomMaxStep * this.baseScale) {
      scale = this.zoomMaxStep * this.baseScale;
    } else if (scale < this.baseScale) {
      scale = this.baseScale;
    }

    var zoomStep = scale / this.scale;
    this.zoomCurStep = this.zoomCurStep * Math.round(zoomStep);
    var cX = coords.x * scale;
    var cY = coords.y * scale;
    var middleX = coords.width / 2;
    var middleY = coords.height / 2;
    var anchorX = (cX - middleX) / scale * -1;
    var anchorY = (cY - middleY) / scale * -1;
    var transX = anchorX + this.defaultWidth * (this.width / (this.defaultWidth * scale)) / 2;
    var transY = anchorY + this.defaultHeight * (this.height / (this.defaultHeight * scale)) / 2;
    var count = Math.abs(Math.round((scale - this.scale) * 60 / Math.max(scale, this.scale))) || 30;

    if (animate) {
      var frame = function frame() {
        i += 1;
        map.scale = scaleStart + scaleDiff * i;
        map.transX = (transXStart + transXDiff * i) / map.scale;
        map.transY = (transYStart + transYDiff * i) / map.scale;
        map.applyTransform();
        map.positionPins();

        if (i < count) {
          requestAnimationFrame(frame);
        }
      };

      var i = 0,
          scaleStart,
          scaleDiff,
          transXStart,
          transXDiff,
          transYStart,
          transYDiff;
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      requestAnimationFrame(frame);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.setScale(scale);
      this.positionPins();
    }
  };

  function escapeXml(string) {
    return string.replace(/[<>]/g, function (c) {
      switch (c) {
        case '<':
          return "<";

        case '>':
          return ">";
      }
    });
  }

  function resizeContainer() {
    $('[data-toggle="vector-map"]').each(function () {
      var element = $(this);
      var map = element.data().mapObject;
      map.resizeContainer();
      var focus = element.data('vector-map-focus');

      if (focus) {
        map.setFocus(focus);
      }
    });
  }

  $('[data-toggle="vector-map"]').each(function () {
    var element = $(this);
    var values = element.data('vector-map-values') ? maps[element.data('vector-map-values')] || {} : {};
    var pins = {};

    try {
      pins = element.data('vector-map-pins');

      for (var key in pins) {
        if (pins.hasOwnProperty(key)) {
          pins[key] = escapeXml(pins[key]);
        }
      }
    } catch (e) {}

    var options = {
      map: element.data('vector-map-map'),
      zoomOnScroll: void 0 !== element.data('vector-map-zoom-on-scroll') ? element.data('vector-map-zoom-on-scroll') : false,
      enableZoom: void 0 !== element.data('vector-map-enable-zoom') ? element.data('vector-map-enable-zoom') : false,
      showTooltip: void 0 !== element.data('vector-map-show-tooltip') ? element.data('vector-map-show-tooltip') : true,
      focusOnSelect: void 0 !== element.data('vector-map-focus-on-select') ? element.data('vector-map-focus-on-select') : false,
      backgroundColor: void 0 !== element.data('vector-map-background-color') ? element.data('vector-map-background-color') : 'transparent',
      values: values,
      color: settings.colors.gray[50],
      selectedColor: settings.colors.primary[300],
      hoverColor: settings.colors.primary[100],
      scaleColors: [settings.colors.primary[50], settings.colors.primary[500]],
      borderWidth: 1,
      borderColor: '#ffffff',
      borderOpacity: 1,
      normalizeFunction: 'polynomial',
      colors: {},
      pins: pins,
      pinMode: 'content',
      onLabelShow: function onLabelShow(e, label, code) {
        label.html(label.html() + ' - ' + values[code]);
      },
      onRegionSelect: function onRegionSelect(event, code, region) {
        if (options.focusOnSelect) {
          map.setFocus(code);
        }
      }
    };
    var colors = element.data('vector-map-values-colors');

    if (colors) {
      for (var key in values) {
        if (values.hasOwnProperty(key) && colors[values[key]] !== undefined) {
          var color = colors[values[key]];
          options.colors[key] = settings.colors.get(color) || color;
        }
      }
    }

    element.vectorMap(options);
    var map = $(this).data().mapObject;

    if (Object.keys(options.colors)) {
      map.setColors(options.colors);
    }

    var scale = element.data('vector-map-scale');
    var focus = element.data('vector-map-focus');

    if (scale) {
      map.setScale(scale);
      map.positionPins();
    } else if (focus) {
      map.setFocus(focus);
    }
  });
  $('[data-toggle=vector-map-focus]').on('click', function (e) {
    e.preventDefault();
    var element = $(this);
    var target = $(element.data('target'));

    if (!target) {
      return;
    }

    var map = target.data().mapObject;
    var focus = element.data('focus');
    var animate = element.data('animate');

    if (focus) {
      map.setFocus(focus, animate);
    }
  });
  var drawer = document.querySelector('.mdk-drawer');

  if (drawer) {
    drawer.addEventListener('mdk-drawer-change', function () {
      return requestAnimationFrame(resizeContainer);
    });
  }
})();

/***/ }),

/***/ 21:
/*!*********************************************!*\
  !*** multi ./src/js/plugins/vector-maps.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\plugins\vector-maps.js */"./src/js/plugins/vector-maps.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsdWdpbnMvdmVjdG9yLW1hcHMuanMiXSwibmFtZXMiOlsiSlFWTWFwIiwicHJvdG90eXBlIiwicmVzaXplQ29udGFpbmVyIiwid2lkdGgiLCJjb250YWluZXIiLCJoZWlnaHQiLCJyZXNpemUiLCJjYW52YXMiLCJzZXRTaXplIiwiYXBwbHlUcmFuc2Zvcm0iLCJwb3NpdGlvblBpbnMiLCJzZXRGb2N1cyIsImNvZGVzIiwiYW5pbWF0ZSIsIm1hcCIsImNvb3JkcyIsIm5ld0Nvb3JkcyIsImZvckVhY2giLCJjYyIsImVsIiwiJCIsImdldENvdW50cnlJZCIsInBhdGgiLCJiYm94IiwiZ2V0QkJveCIsIngiLCJNYXRoIiwibWluIiwieSIsIm1heCIsInNjYWxlIiwiem9vbU1heFN0ZXAiLCJiYXNlU2NhbGUiLCJ6b29tU3RlcCIsInpvb21DdXJTdGVwIiwicm91bmQiLCJjWCIsImNZIiwibWlkZGxlWCIsIm1pZGRsZVkiLCJhbmNob3JYIiwiYW5jaG9yWSIsInRyYW5zWCIsImRlZmF1bHRXaWR0aCIsInRyYW5zWSIsImRlZmF1bHRIZWlnaHQiLCJjb3VudCIsImFicyIsImZyYW1lIiwiaSIsInNjYWxlU3RhcnQiLCJzY2FsZURpZmYiLCJ0cmFuc1hTdGFydCIsInRyYW5zWERpZmYiLCJ0cmFuc1lTdGFydCIsInRyYW5zWURpZmYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRTY2FsZSIsImVzY2FwZVhtbCIsInN0cmluZyIsInJlcGxhY2UiLCJjIiwiZWFjaCIsImVsZW1lbnQiLCJkYXRhIiwibWFwT2JqZWN0IiwiZm9jdXMiLCJ2YWx1ZXMiLCJtYXBzIiwicGlucyIsImtleSIsImhhc093blByb3BlcnR5IiwiZSIsIm9wdGlvbnMiLCJ6b29tT25TY3JvbGwiLCJlbmFibGVab29tIiwic2hvd1Rvb2x0aXAiLCJmb2N1c09uU2VsZWN0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJzZXR0aW5ncyIsImNvbG9ycyIsImdyYXkiLCJzZWxlY3RlZENvbG9yIiwicHJpbWFyeSIsImhvdmVyQ29sb3IiLCJzY2FsZUNvbG9ycyIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJPcGFjaXR5Iiwibm9ybWFsaXplRnVuY3Rpb24iLCJwaW5Nb2RlIiwib25MYWJlbFNob3ciLCJsYWJlbCIsImNvZGUiLCJodG1sIiwib25SZWdpb25TZWxlY3QiLCJldmVudCIsInJlZ2lvbiIsInVuZGVmaW5lZCIsImdldCIsInZlY3Rvck1hcCIsIk9iamVjdCIsImtleXMiLCJzZXRDb2xvcnMiLCJvbiIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZHJhd2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsWUFBVTtB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QUMsSUFBRCxDQUFqQjtBQUNBLFFBQU11RixNQUFNLEdBQUd2RixDQUFDLENBQUMyQyxPQUFPLENBQUNDLElBQVIsQ0FBYSxRQUFiLENBQUQsQ0FBaEI7O0FBQ0EsUUFBSSxDQUFDMkMsTUFBTCxFQUFhO0FBQ1g7QUFDRDs7QUFFRCxRQUFNN0YsR0FBRyxHQUFHNkYsTUFBTSxDQUFDM0MsSUFBUCxHQUFjQyxTQUExQjtBQUNBLFFBQU1DLEtBQUssR0FBR0gsT0FBTyxDQUFDQyxJQUFSLENBQWEsT0FBYixDQUFkO0FBQ0EsUUFBTW5ELE9BQU8sR0FBR2tELE9BQU8sQ0FBQ0MsSUFBUixDQUFhLFNBQWIsQ0FBaEI7O0FBRUEsUUFBSUUsS0FBSixFQUFXO0FBQ1RwRCxTQUFHLENBQUNILFFBQUosQ0FBYXVELEtBQWIsRUFBb0JyRCxPQUFwQjtBQUNEO0FBQ0YsR0FoQkQ7QUFrQkEsTUFBTStGLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWY7O0FBQ0EsTUFBSUYsTUFBSixFQUFZO0FBQ1ZBLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQTZDO0FBQUEsYUFBTXZELHFCQUFxQixDQUFDdEQsZUFBRCxDQUEzQjtBQUFBLEtBQTdDO0FBQ0Q7QUFFRixDQXpPRCxJIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy92ZWN0b3ItbWFwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjEpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICBKUVZNYXAucHJvdG90eXBlLnJlc2l6ZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5jb250YWluZXIud2lkdGgoKVxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jb250YWluZXIuaGVpZ2h0KClcbiAgICB0aGlzLnJlc2l6ZSgpXG4gICAgdGhpcy5jYW52YXMuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKClcbiAgICB0aGlzLnBvc2l0aW9uUGlucygpXG4gIH1cblxuICBKUVZNYXAucHJvdG90eXBlLnNldEZvY3VzID0gZnVuY3Rpb24gKGNvZGVzLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGlmICh0eXBlb2YgY29kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb2RlcyA9IFtjb2Rlc11cbiAgICB9XG5cbiAgICB2YXIgbWFwID0gdGhpc1xuICAgIHZhciBjb29yZHMsIG5ld0Nvb3JkcztcblxuICAgIGNvZGVzLmZvckVhY2goY2MgPT4ge1xuICAgICAgdmFyIGVsID0gJCgnIycgKyB0aGlzLmdldENvdW50cnlJZChjYykpXG4gICAgICB2YXIgcGF0aCA9IGVsWzBdXG4gICAgICB2YXIgYmJveCA9IHBhdGguZ2V0QkJveCgpXG5cbiAgICAgIGlmICh0eXBlb2YgY29vcmRzID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvb3JkcyA9IGJib3hcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdDb29yZHMgPSB7XG4gICAgICAgICAgeDogTWF0aC5taW4oY29vcmRzLngsIGJib3gueCksXG4gICAgICAgICAgeTogTWF0aC5taW4oY29vcmRzLnksIGJib3gueSksXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWF4KGNvb3Jkcy54ICsgY29vcmRzLndpZHRoLCBiYm94LnggKyBiYm94LndpZHRoKSAtIE1hdGgubWluKGNvb3Jkcy54LCBiYm94LngpLFxuICAgICAgICAgIGhlaWdodDogTWF0aC5tYXgoY29vcmRzLnkgKyBjb29yZHMuaGVpZ2h0LCBiYm94LnkgKyBiYm94LmhlaWdodCkgLSBNYXRoLm1pbihjb29yZHMueSwgYmJveC55KVxuICAgICAgICB9XG4gICAgICAgIGNvb3JkcyA9IG5ld0Nvb3Jkc1xuICAgICAgfVxuICAgIH0pXG5cbiAgICB2YXIgc2NhbGUgPSBNYXRoLm1pbih0aGlzLndpZHRoIC8gY29vcmRzLndpZHRoLCB0aGlzLmhlaWdodCAvIGNvb3Jkcy5oZWlnaHQpXG5cbiAgICBpZiAoc2NhbGUgPiB0aGlzLnpvb21NYXhTdGVwICogdGhpcy5iYXNlU2NhbGUpIHtcbiAgICAgIHNjYWxlID0gdGhpcy56b29tTWF4U3RlcCAqIHRoaXMuYmFzZVNjYWxlXG4gICAgfVxuICAgIGVsc2UgaWYgKHNjYWxlIDwgdGhpcy5iYXNlU2NhbGUpIHtcbiAgICAgIHNjYWxlID0gdGhpcy5iYXNlU2NhbGVcbiAgICB9XG5cbiAgICB2YXIgem9vbVN0ZXAgPSBzY2FsZSAvIHRoaXMuc2NhbGVcbiAgICB0aGlzLnpvb21DdXJTdGVwID0gdGhpcy56b29tQ3VyU3RlcCAqIE1hdGgucm91bmQoem9vbVN0ZXApXG5cbiAgICB2YXIgY1ggPSBjb29yZHMueCAqIHNjYWxlXG4gICAgdmFyIGNZID0gY29vcmRzLnkgKiBzY2FsZVxuXG4gICAgdmFyIG1pZGRsZVggPSBjb29yZHMud2lkdGggLyAyXG4gICAgdmFyIG1pZGRsZVkgPSBjb29yZHMuaGVpZ2h0IC8gMlxuXG4gICAgdmFyIGFuY2hvclggPSAoY1ggLSBtaWRkbGVYKSAvIHNjYWxlICogLTFcbiAgICB2YXIgYW5jaG9yWSA9IChjWSAtIG1pZGRsZVkpIC8gc2NhbGUgKiAtMVxuICAgIFxuICAgIHZhciB0cmFuc1ggPSBhbmNob3JYICsgdGhpcy5kZWZhdWx0V2lkdGggKiAodGhpcy53aWR0aCAvICh0aGlzLmRlZmF1bHRXaWR0aCAqIHNjYWxlKSkgLyAyXG4gICAgdmFyIHRyYW5zWSA9IGFuY2hvclkgKyB0aGlzLmRlZmF1bHRIZWlnaHQgKiAodGhpcy5oZWlnaHQgLyAodGhpcy5kZWZhdWx0SGVpZ2h0ICogc2NhbGUpKSAvIDJcblxuICAgIHZhciBjb3VudCA9IE1hdGguYWJzKE1hdGgucm91bmQoKHNjYWxlIC0gdGhpcy5zY2FsZSkgKiA2MCAvIE1hdGgubWF4KHNjYWxlLCB0aGlzLnNjYWxlKSkpIHx8IDMwXG4gICAgXG4gICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICBzY2FsZVN0YXJ0LFxuICAgICAgICAgIHNjYWxlRGlmZixcbiAgICAgICAgICB0cmFuc1hTdGFydCxcbiAgICAgICAgICB0cmFuc1hEaWZmLFxuICAgICAgICAgIHRyYW5zWVN0YXJ0LFxuICAgICAgICAgIHRyYW5zWURpZmZcblxuICAgICAgc2NhbGVTdGFydCA9IHRoaXMuc2NhbGU7XG4gICAgICBzY2FsZURpZmYgPSAoc2NhbGUgLSBzY2FsZVN0YXJ0KSAvIGNvdW50O1xuICAgICAgdHJhbnNYU3RhcnQgPSB0aGlzLnRyYW5zWCAqIHRoaXMuc2NhbGU7XG4gICAgICB0cmFuc1lTdGFydCA9IHRoaXMudHJhbnNZICogdGhpcy5zY2FsZTtcbiAgICAgIHRyYW5zWERpZmYgPSAodHJhbnNYICogc2NhbGUgLSB0cmFuc1hTdGFydCkgLyBjb3VudDtcbiAgICAgIHRyYW5zWURpZmYgPSAodHJhbnNZICogc2NhbGUgLSB0cmFuc1lTdGFydCkgLyBjb3VudDtcblxuICAgICAgZnVuY3Rpb24gZnJhbWUoKSB7XG4gICAgICAgIGkgKz0gMVxuICAgICAgICBtYXAuc2NhbGUgPSBzY2FsZVN0YXJ0ICsgc2NhbGVEaWZmICogaVxuICAgICAgICBtYXAudHJhbnNYID0gKHRyYW5zWFN0YXJ0ICsgdHJhbnNYRGlmZiAqIGkpIC8gbWFwLnNjYWxlXG4gICAgICAgIG1hcC50cmFuc1kgPSAodHJhbnNZU3RhcnQgKyB0cmFuc1lEaWZmICogaSkgLyBtYXAuc2NhbGVcbiAgICAgICAgbWFwLmFwcGx5VHJhbnNmb3JtKClcbiAgICAgICAgbWFwLnBvc2l0aW9uUGlucygpXG4gICAgICAgIFxuICAgICAgICBpZiAoaSA8IGNvdW50KSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKSBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy50cmFuc1ggPSB0cmFuc1hcbiAgICAgIHRoaXMudHJhbnNZID0gdHJhbnNZXG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKVxuICAgICAgdGhpcy5wb3NpdGlvblBpbnMoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZVhtbChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1s8Pl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICBjYXNlICc8JzogcmV0dXJuICdcXHUwMDNjJztcbiAgICAgICAgY2FzZSAnPic6IHJldHVybiAnXFx1MDAzZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemVDb250YWluZXIoKSB7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidmVjdG9yLW1hcFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgY29uc3QgbWFwID0gZWxlbWVudC5kYXRhKCkubWFwT2JqZWN0XG4gICAgICBtYXAucmVzaXplQ29udGFpbmVyKClcbiAgICAgIFxuICAgICAgY29uc3QgZm9jdXMgPSBlbGVtZW50LmRhdGEoJ3ZlY3Rvci1tYXAtZm9jdXMnKVxuICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgIG1hcC5zZXRGb2N1cyhmb2N1cylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgJCgnW2RhdGEtdG9nZ2xlPVwidmVjdG9yLW1hcFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgdmFyIHZhbHVlcyA9IGVsZW1lbnQuZGF0YSgndmVjdG9yLW1hcC12YWx1ZXMnKSA/IG1hcHNbZWxlbWVudC5kYXRhKCd2ZWN0b3ItbWFwLXZhbHVlcycpXSB8fCB7fSA6IHt9XG4gICAgbGV0IHBpbnMgPSB7fVxuXG4gICAgdHJ5IHtcbiAgICAgIHBpbnMgPSBlbGVtZW50LmRhdGEoJ3ZlY3Rvci1tYXAtcGlucycpXG4gICAgICBmb3IgKHZhciBrZXkgaW4gcGlucykge1xuICAgICAgICBpZiAocGlucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcGluc1trZXldID0gZXNjYXBlWG1sKHBpbnNba2V5XSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlKSB7fVxuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBtYXA6IGVsZW1lbnQuZGF0YSgndmVjdG9yLW1hcC1tYXAnKSxcbiAgICAgIHpvb21PblNjcm9sbDogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ3ZlY3Rvci1tYXAtem9vbS1vbi1zY3JvbGwnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ3ZlY3Rvci1tYXAtem9vbS1vbi1zY3JvbGwnKSBcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIGVuYWJsZVpvb206IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCd2ZWN0b3ItbWFwLWVuYWJsZS16b29tJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCd2ZWN0b3ItbWFwLWVuYWJsZS16b29tJykgXG4gICAgICAgIDogZmFsc2UsXG4gICAgICBzaG93VG9vbHRpcDogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ3ZlY3Rvci1tYXAtc2hvdy10b29sdGlwJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCd2ZWN0b3ItbWFwLXNob3ctdG9vbHRpcCcpIFxuICAgICAgICA6IHRydWUsXG4gICAgICBmb2N1c09uU2VsZWN0OiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgndmVjdG9yLW1hcC1mb2N1cy1vbi1zZWxlY3QnKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ3ZlY3Rvci1tYXAtZm9jdXMtb24tc2VsZWN0JykgXG4gICAgICAgIDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCd2ZWN0b3ItbWFwLWJhY2tncm91bmQtY29sb3InKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ3ZlY3Rvci1tYXAtYmFja2dyb3VuZC1jb2xvcicpIFxuICAgICAgICA6ICd0cmFuc3BhcmVudCcsXG4gICAgICB2YWx1ZXMsXG4gICAgICBjb2xvcjogc2V0dGluZ3MuY29sb3JzLmdyYXlbNTBdLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbMzAwXSxcbiAgICAgIGhvdmVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzEwMF0sXG4gICAgICBzY2FsZUNvbG9yczogWyBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs1MF0sIHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0gXSxcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlck9wYWNpdHk6IDEsXG4gICAgICBub3JtYWxpemVGdW5jdGlvbjogJ3BvbHlub21pYWwnLFxuICAgICAgY29sb3JzOiB7fSxcbiAgICAgIHBpbnMsXG4gICAgICBwaW5Nb2RlOiAnY29udGVudCcsXG4gICAgICBvbkxhYmVsU2hvdzogZnVuY3Rpb24gKGUsIGxhYmVsLCBjb2RlKSB7XG4gICAgICAgIGxhYmVsLmh0bWwobGFiZWwuaHRtbCgpICsgJyAtICcgKyB2YWx1ZXNbIGNvZGUgXSlcbiAgICAgIH0sXG4gICAgICBvblJlZ2lvblNlbGVjdDogZnVuY3Rpb24oZXZlbnQsIGNvZGUsIHJlZ2lvbikge1xuICAgICAgICBpZiAob3B0aW9ucy5mb2N1c09uU2VsZWN0KSB7XG4gICAgICAgICAgbWFwLnNldEZvY3VzKGNvZGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY29sb3JzID0gZWxlbWVudC5kYXRhKCd2ZWN0b3ItbWFwLXZhbHVlcy1jb2xvcnMnKVxuICAgIGlmIChjb2xvcnMpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGNvbG9yc1t2YWx1ZXNba2V5XV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW3ZhbHVlc1trZXldXVxuICAgICAgICAgIG9wdGlvbnMuY29sb3JzW2tleV0gPSBzZXR0aW5ncy5jb2xvcnMuZ2V0KGNvbG9yKSB8fCBjb2xvclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudC52ZWN0b3JNYXAob3B0aW9ucylcblxuICAgIGNvbnN0IG1hcCA9ICQodGhpcykuZGF0YSgpLm1hcE9iamVjdFxuXG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMuY29sb3JzKSkge1xuICAgICAgbWFwLnNldENvbG9ycyhvcHRpb25zLmNvbG9ycylcbiAgICB9XG5cbiAgICBjb25zdCBzY2FsZSA9IGVsZW1lbnQuZGF0YSgndmVjdG9yLW1hcC1zY2FsZScpXG4gICAgY29uc3QgZm9jdXMgPSBlbGVtZW50LmRhdGEoJ3ZlY3Rvci1tYXAtZm9jdXMnKVxuXG4gICAgaWYgKHNjYWxlKSB7XG4gICAgICBtYXAuc2V0U2NhbGUoc2NhbGUpXG4gICAgICBtYXAucG9zaXRpb25QaW5zKClcbiAgICB9XG4gICAgZWxzZSBpZiAoZm9jdXMpIHtcbiAgICAgIG1hcC5zZXRGb2N1cyhmb2N1cylcbiAgICB9XG4gIH0pXG5cbiAgJCgnW2RhdGEtdG9nZ2xlPXZlY3Rvci1tYXAtZm9jdXNdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgZWxlbWVudCA9ICQodGhpcylcbiAgICBjb25zdCB0YXJnZXQgPSAkKGVsZW1lbnQuZGF0YSgndGFyZ2V0JykpXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG1hcCA9IHRhcmdldC5kYXRhKCkubWFwT2JqZWN0XG4gICAgY29uc3QgZm9jdXMgPSBlbGVtZW50LmRhdGEoJ2ZvY3VzJylcbiAgICBjb25zdCBhbmltYXRlID0gZWxlbWVudC5kYXRhKCdhbmltYXRlJylcblxuICAgIGlmIChmb2N1cykge1xuICAgICAgbWFwLnNldEZvY3VzKGZvY3VzLCBhbmltYXRlKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBkcmF3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRrLWRyYXdlcicpXG4gIGlmIChkcmF3ZXIpIHtcbiAgICBkcmF3ZXIuYWRkRXZlbnRMaXN0ZW5lcignbWRrLWRyYXdlci1jaGFuZ2UnLCAoKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzaXplQ29udGFpbmVyKSlcbiAgfVxuXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==