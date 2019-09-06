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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/chartjs-rounded-bar.js":
/*!***********************************************!*\
  !*** ./src/js/plugins/chartjs-rounded-bar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var drawRoundedTopRectangle = function drawRoundedTopRectangle(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y); // top right corner

  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius); // bottom right   corner

  ctx.lineTo(x + width, y + height); // bottom left corner

  ctx.lineTo(x, y + height); // top left   

  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
  draw: function draw() {
    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, borderSkipped;
    var borderWidth = vm.borderWidth;

    if (!vm.horizontal) {
      // bar
      left = vm.x - vm.width / 2;
      right = vm.x + vm.width / 2;
      top = vm.y;
      bottom = vm.base;
      signX = 1;
      signY = bottom > top ? 1 : -1;
      borderSkipped = vm.borderSkipped || 'bottom';
    } else {
      // horizontal bar
      left = vm.base;
      right = vm.x;
      top = vm.y - vm.height / 2;
      bottom = vm.y + vm.height / 2;
      signX = right > left ? 1 : -1;
      signY = 1;
      borderSkipped = vm.borderSkipped || 'left';
    } // Canvas doesn't allow us to stroke inside the width so we can
    // adjust the sizes to fit if we're setting a stroke on the line


    if (borderWidth) {
      // borderWidth shold be less than bar width and bar height.
      var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
      borderWidth = borderWidth > barSize ? barSize : borderWidth;
      var halfStroke = borderWidth / 2; // Adjust borderWidth when bar top position is near vm.base(zero).

      var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
      var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
      var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
      var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0); // not become a vertical line?

      if (borderLeft !== borderRight) {
        top = borderTop;
        bottom = borderBottom;
      } // not become a horizontal line?


      if (borderTop !== borderBottom) {
        left = borderLeft;
        right = borderRight;
      }
    } // calculate the bar width and roundess


    var barWidth = Math.abs(left - right);
    var roundness = this._chart.config.options.barRoundness || 0.5;
    var radius = barWidth * roundness * 0.5; // keep track of the original top of the bar

    var prevTop = top; // move the top down so there is room to draw the rounded top

    top = prevTop + radius;
    var barRadius = top - prevTop;
    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth; // draw the rounded top rectangle

    drawRoundedTopRectangle(ctx, left, top - barRadius + 1, barWidth, bottom - prevTop, barRadius);
    ctx.fill();

    if (borderWidth) {
      ctx.stroke();
    } // restore the original top value so tooltips and scales still work


    top = prevTop;
  }
});
Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);
Chart.controllers.roundedBar = Chart.controllers.bar.extend({
  dataElementType: Chart.elements.RoundedTopRectangle
});

/***/ }),

/***/ 9:
/*!*****************************************************!*\
  !*** multi ./src/js/plugins/chartjs-rounded-bar.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\plugins\chartjs-rounded-bar.js */"./src/js/plugins/chartjs-rounded-bar.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsdWdpbnMvY2hhcnRqcy1yb3VuZGVkLWJhci5qcyJdLCJuYW1lcyI6WyJkcmF3Um91bmRlZFRvcFJlY3RhbmdsZSIsImN0eCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiY2xvc2VQYXRoIiwiQ2hhcnQiLCJlbGVtZW50cyIsIlJvdW5kZWRUb3BSZWN0YW5nbGUiLCJSZWN0YW5nbGUiLCJleHRlbmQiLCJkcmF3IiwiX2NoYXJ0Iiwidm0iLCJfdmlldyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInNpZ25YIiwic2lnblkiLCJib3JkZXJTa2lwcGVkIiwiYm9yZGVyV2lkdGgiLCJob3Jpem9udGFsIiwiYmFzZSIsImJhclNpemUiLCJNYXRoIiwibWluIiwiYWJzIiwiaGFsZlN0cm9rZSIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsImJhcldpZHRoIiwicm91bmRuZXNzIiwiY29uZmlnIiwib3B0aW9ucyIsImJhclJvdW5kbmVzcyIsInByZXZUb3AiLCJiYXJSYWRpdXMiLCJmaWxsU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHJva2VTdHlsZSIsImJvcmRlckNvbG9yIiwibGluZVdpZHRoIiwiZmlsbCIsInN0cm9rZSIsImRlZmF1bHRzIiwicm91bmRlZEJhciIsImhlbHBlcnMiLCJjbG9uZSIsImJhciIsImNvbnRyb2xsZXJzIiwiZGF0YUVsZW1lbnRUeXBlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztR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LFNBQU4sR0FBa0IsQ0FBL0IsRUFBbUNOLFFBQW5DLEVBQTZDaEIsTUFBTSxHQUFHcUIsT0FBdEQsRUFBK0RDLFNBQS9ELENBQXZCO0FBRUE3QyxPQUFHLENBQUNtRCxJQUFKOztBQUNBLFFBQUl4QixXQUFKLEVBQWlCO0FBQ2YzQixTQUFHLENBQUNvRCxNQUFKO0FBQ0QsS0F6RWMsQ0EyRWY7OztBQUNBOUIsT0FBRyxHQUFHc0IsT0FBTjtBQUNEO0FBOUVrRSxDQUFoQyxDQUFyQztBQWlGQWpDLEtBQUssQ0FBQzBDLFFBQU4sQ0FBZUMsVUFBZixHQUE0QjNDLEtBQUssQ0FBQzRDLE9BQU4sQ0FBY0MsS0FBZCxDQUFvQjdDLEtBQUssQ0FBQzBDLFFBQU4sQ0FBZUksR0FBbkMsQ0FBNUI7QUFFQTlDLEtBQUssQ0FBQytDLFdBQU4sQ0FBa0JKLFVBQWxCLEdBQStCM0MsS0FBSyxDQUFDK0MsV0FBTixDQUFrQkQsR0FBbEIsQ0FBc0IxQyxNQUF0QixDQUE2QjtBQUMxRDRDLGlCQUFlLEVBQUVoRCxLQUFLLENBQUNDLFFBQU4sQ0FBZUM7QUFEMEIsQ0FBN0IsQ0FBL0IsQyIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvY2hhcnRqcy1yb3VuZGVkLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG4iLCJjb25zdCBkcmF3Um91bmRlZFRvcFJlY3RhbmdsZSA9IChjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykgPT4ge1xuICBjdHguYmVnaW5QYXRoKClcbiAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KVxuICAvLyB0b3AgcmlnaHQgY29ybmVyXG4gIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5KVxuICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cylcbiAgLy8gYm90dG9tIHJpZ2h0ICAgY29ybmVyXG4gIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KVxuICAvLyBib3R0b20gbGVmdCBjb3JuZXJcbiAgY3R4LmxpbmVUbyh4LCB5ICsgaGVpZ2h0KTtcbiAgLy8gdG9wIGxlZnQgICBcbiAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKVxuICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KVxuICBjdHguY2xvc2VQYXRoKClcbn1cblxuQ2hhcnQuZWxlbWVudHMuUm91bmRlZFRvcFJlY3RhbmdsZSA9IENoYXJ0LmVsZW1lbnRzLlJlY3RhbmdsZS5leHRlbmQoe1xuICBkcmF3OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3R4ID0gdGhpcy5fY2hhcnQuY3R4O1xuICAgIHZhciB2bSA9IHRoaXMuX3ZpZXc7XG4gICAgdmFyIGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSwgc2lnblgsIHNpZ25ZLCBib3JkZXJTa2lwcGVkO1xuICAgIHZhciBib3JkZXJXaWR0aCA9IHZtLmJvcmRlcldpZHRoO1xuXG4gICAgaWYgKCF2bS5ob3Jpem9udGFsKSB7XG4gICAgICAvLyBiYXJcbiAgICAgIGxlZnQgPSB2bS54IC0gdm0ud2lkdGggLyAyO1xuICAgICAgcmlnaHQgPSB2bS54ICsgdm0ud2lkdGggLyAyO1xuICAgICAgdG9wID0gdm0ueTtcbiAgICAgIGJvdHRvbSA9IHZtLmJhc2U7XG4gICAgICBzaWduWCA9IDE7XG4gICAgICBzaWduWSA9IGJvdHRvbSA+IHRvcD8gMTogLTE7XG4gICAgICBib3JkZXJTa2lwcGVkID0gdm0uYm9yZGVyU2tpcHBlZCB8fCAnYm90dG9tJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaG9yaXpvbnRhbCBiYXJcbiAgICAgIGxlZnQgPSB2bS5iYXNlO1xuICAgICAgcmlnaHQgPSB2bS54O1xuICAgICAgdG9wID0gdm0ueSAtIHZtLmhlaWdodCAvIDI7XG4gICAgICBib3R0b20gPSB2bS55ICsgdm0uaGVpZ2h0IC8gMjtcbiAgICAgIHNpZ25YID0gcmlnaHQgPiBsZWZ0PyAxOiAtMTtcbiAgICAgIHNpZ25ZID0gMTtcbiAgICAgIGJvcmRlclNraXBwZWQgPSB2bS5ib3JkZXJTa2lwcGVkIHx8ICdsZWZ0JztcbiAgICB9XG5cbiAgICAvLyBDYW52YXMgZG9lc24ndCBhbGxvdyB1cyB0byBzdHJva2UgaW5zaWRlIHRoZSB3aWR0aCBzbyB3ZSBjYW5cbiAgICAvLyBhZGp1c3QgdGhlIHNpemVzIHRvIGZpdCBpZiB3ZSdyZSBzZXR0aW5nIGEgc3Ryb2tlIG9uIHRoZSBsaW5lXG4gICAgaWYgKGJvcmRlcldpZHRoKSB7XG4gICAgICAvLyBib3JkZXJXaWR0aCBzaG9sZCBiZSBsZXNzIHRoYW4gYmFyIHdpZHRoIGFuZCBiYXIgaGVpZ2h0LlxuICAgICAgdmFyIGJhclNpemUgPSBNYXRoLm1pbihNYXRoLmFicyhsZWZ0IC0gcmlnaHQpLCBNYXRoLmFicyh0b3AgLSBib3R0b20pKTtcbiAgICAgIGJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGggPiBiYXJTaXplPyBiYXJTaXplOiBib3JkZXJXaWR0aDtcbiAgICAgIHZhciBoYWxmU3Ryb2tlID0gYm9yZGVyV2lkdGggLyAyO1xuICAgICAgLy8gQWRqdXN0IGJvcmRlcldpZHRoIHdoZW4gYmFyIHRvcCBwb3NpdGlvbiBpcyBuZWFyIHZtLmJhc2UoemVybykuXG4gICAgICB2YXIgYm9yZGVyTGVmdCA9IGxlZnQgKyAoYm9yZGVyU2tpcHBlZCAhPT0gJ2xlZnQnPyBoYWxmU3Ryb2tlICogc2lnblg6IDApO1xuICAgICAgdmFyIGJvcmRlclJpZ2h0ID0gcmlnaHQgKyAoYm9yZGVyU2tpcHBlZCAhPT0gJ3JpZ2h0Jz8gLWhhbGZTdHJva2UgKiBzaWduWDogMCk7XG4gICAgICB2YXIgYm9yZGVyVG9wID0gdG9wICsgKGJvcmRlclNraXBwZWQgIT09ICd0b3AnPyBoYWxmU3Ryb2tlICogc2lnblk6IDApO1xuICAgICAgdmFyIGJvcmRlckJvdHRvbSA9IGJvdHRvbSArIChib3JkZXJTa2lwcGVkICE9PSAnYm90dG9tJz8gLWhhbGZTdHJva2UgKiBzaWduWTogMCk7XG4gICAgICAvLyBub3QgYmVjb21lIGEgdmVydGljYWwgbGluZT9cbiAgICAgIGlmIChib3JkZXJMZWZ0ICE9PSBib3JkZXJSaWdodCkge1xuICAgICAgICB0b3AgPSBib3JkZXJUb3A7XG4gICAgICAgIGJvdHRvbSA9IGJvcmRlckJvdHRvbTtcbiAgICAgIH1cbiAgICAgIC8vIG5vdCBiZWNvbWUgYSBob3Jpem9udGFsIGxpbmU/XG4gICAgICBpZiAoYm9yZGVyVG9wICE9PSBib3JkZXJCb3R0b20pIHtcbiAgICAgICAgbGVmdCA9IGJvcmRlckxlZnQ7XG4gICAgICAgIHJpZ2h0ID0gYm9yZGVyUmlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBiYXIgd2lkdGggYW5kIHJvdW5kZXNzXG4gICAgdmFyIGJhcldpZHRoID0gTWF0aC5hYnMobGVmdCAtIHJpZ2h0KTtcbiAgICB2YXIgcm91bmRuZXNzID0gdGhpcy5fY2hhcnQuY29uZmlnLm9wdGlvbnMuYmFyUm91bmRuZXNzIHx8IDAuNTtcbiAgICB2YXIgcmFkaXVzID0gYmFyV2lkdGggKiByb3VuZG5lc3MgKiAwLjU7XG5cbiAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBvcmlnaW5hbCB0b3Agb2YgdGhlIGJhclxuICAgIHZhciBwcmV2VG9wID0gdG9wO1xuXG4gICAgLy8gbW92ZSB0aGUgdG9wIGRvd24gc28gdGhlcmUgaXMgcm9vbSB0byBkcmF3IHRoZSByb3VuZGVkIHRvcFxuICAgIHRvcCA9IHByZXZUb3AgKyByYWRpdXM7XG4gICAgdmFyIGJhclJhZGl1cyA9IHRvcCAtIHByZXZUb3A7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHZtLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB2bS5ib3JkZXJDb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAvLyBkcmF3IHRoZSByb3VuZGVkIHRvcCByZWN0YW5nbGVcbiAgICBkcmF3Um91bmRlZFRvcFJlY3RhbmdsZShjdHgsIGxlZnQsICh0b3AgLSBiYXJSYWRpdXMgKyAxKSwgYmFyV2lkdGgsIGJvdHRvbSAtIHByZXZUb3AsIGJhclJhZGl1cyk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGlmIChib3JkZXJXaWR0aCkge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8vIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHRvcCB2YWx1ZSBzbyB0b29sdGlwcyBhbmQgc2NhbGVzIHN0aWxsIHdvcmtcbiAgICB0b3AgPSBwcmV2VG9wO1xuICB9LFxufSlcblxuQ2hhcnQuZGVmYXVsdHMucm91bmRlZEJhciA9IENoYXJ0LmhlbHBlcnMuY2xvbmUoQ2hhcnQuZGVmYXVsdHMuYmFyKVxuXG5DaGFydC5jb250cm9sbGVycy5yb3VuZGVkQmFyID0gQ2hhcnQuY29udHJvbGxlcnMuYmFyLmV4dGVuZCh7XG4gIGRhdGFFbGVtZW50VHlwZTogQ2hhcnQuZWxlbWVudHMuUm91bmRlZFRvcFJlY3RhbmdsZVxufSkiXSwic291cmNlUm9vdCI6IiJ9