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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/dropzone.js":
/*!************************************!*\
  !*** ./src/js/plugins/dropzone.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  Dropzone.autoDiscover = false;

  function mockFile(file, dzInstance, error) {
    var name_pieces = file.split(/[\s\/]+/);
    var name = name_pieces[name_pieces.length - 1]; // Create the mock file:

    var mockFile = {
      name: name,
      size: 12345,
      accepted: true,
      dataURL: file // Call the default addedfile event handler

    };
    dzInstance.emit('addedfile', mockFile); // And optionally show the thumbnail of the file:
    // dzInstance.emit('thumbnail', mockFile, file);
    // Or if the file on your server is not yet in the right
    // size, you can let Dropzone download and resize it

    dzInstance.createThumbnailFromUrl(mockFile, dzInstance.options.thumbnailWidth, dzInstance.options.thumbnailHeight, dzInstance.options.thumbnailMethod, true, function (thumbnail) {
      dzInstance.emit('thumbnail', mockFile, thumbnail);
    }); // fake error / success

    mockFile.status = Dropzone[error ? 'ERROR' : 'SUCCESS'];
    dzInstance.emit(error ? 'error' : 'success', mockFile, error ? 'The error message' : 'success', null); // Make sure that there is no progress bar, etc...

    dzInstance.emit('complete', mockFile); // If you use the maxFiles option, make sure you adjust it to the
    // correct amount:
    // var existingFileCount = 1; // The number of files already uploaded
    // dzInstance.options.maxFiles = dzInstance.options.maxFiles - existingFileCount;
  }

  $('[data-toggle="dropzone"]').each(function () {
    var element = $(this);
    var template = element.find('.dz-preview');
    var isMultiple = void 0 !== element.data('dropzone-multiple');
    var currentFile = void 0;
    var options = {
      url: element.data("dropzone-url"),
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: template.get(0),
      previewTemplate: template.html(),
      maxFiles: isMultiple ? null : 1,
      acceptedFiles: 'image/*',
      clickable: void 0 !== element.data('dropzone-clickable') ? element.data('dropzone-clickable') : true,
      init: function init() {
        this.on('addedfile', function (file) {
          if (!isMultiple && currentFile) {
            this.removeFile(currentFile);
          }

          currentFile = file;
        });
        this.on('maxfilesexceeded', function (file) {
          this.removeAllFiles();
          this.addFile(file);
        });
        var filesOnServer = element.data('dropzone-files');
        var dzInstance = this;
        filesOnServer.forEach(function (file, index) {
          mockFile(file, dzInstance, index >= (filesOnServer.length - 1) / 2);
        });
      }
    };
    template.html('');
    element.dropzone(options);
  });
})();

/***/ }),

/***/ 13:
/*!******************************************!*\
  !*** multi ./src/js/plugins/dropzone.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\plugins\dropzone.js */"./src/js/plugins/dropzone.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsdWdpbnMvZHJvcHpvbmUuanMiXSwibmFtZXMiOlsiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJtb2NrRmlsZSIsImZpbGUiLCJkekluc3RhbmNlIiwiZXJyb3IiLCJuYW1lX3BpZWNlcyIsInNwbGl0IiwibmFtZSIsImxlbmd0aCIsInNpemUiLCJhY2NlcHRlZCIsImRhdGFVUkwiLCJlbWl0IiwiY3JlYXRlVGh1bWJuYWlsRnJvbVVybCIsIm9wdGlvbnMiLCJ0aHVtYm5haWxXaWR0aCIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbE1ldGhvZCIsInRodW1ibmFpbCIsInN0YXR1cyIsIiQiLCJlYWNoIiwiZWxlbWVudCIsInRlbXBsYXRlIiwiZmluZCIsImlzTXVsdGlwbGUiLCJkYXRhIiwiY3VycmVudEZpbGUiLCJ1cmwiLCJwcmV2aWV3c0NvbnRhaW5lciIsImdldCIsInByZXZpZXdUZW1wbGF0ZSIsImh0bWwiLCJtYXhGaWxlcyIsImFjY2VwdGVkRmlsZXMiLCJjbGlja2FibGUiLCJpbml0Iiwib24iLCJyZW1vdmVGaWxlIiwicmVtb3ZlQWxsRmlsZXMiLCJhZGRGaWxlIiwiZmlsZXNPblNlcnZlciIsImZvckVhY2giLCJpbmRleCIsImRyb3B6b25lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsQ0FBQyxZQUFVO0FBQ1Q7O0FBRUFBLFVBQVEsQ0FBQ0MsWUFBVCxHQUF3QixLQUF4Qjs7QUFFQSxXQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsVUFBeEIsRUFBb0NDLEtBQXBDLEVBQTJDO0FBQ3pDLFFBQUlDLFdBQVcsR0FBR0gsSUFBSSxDQUFDSSxLQUFMLENBQVcsU0FBWCxDQUFsQjtBQUNBLFFBQUlDLElBQUksR0FBR0YsV0FBVyxDQUFDQSxXQUFXLENBQUNHLE1BQVosR0FBbUIsQ0FBcEIsQ0FBdEIsQ0FGeUMsQ0FJekM7O0FBQ0EsUUFBSVAsUUFBUSxHQUFHO0FBQ2JNLFVBQUksRUFBRUEsSUFETztBQUViRSxVQUFJLEVBQUUsS0FGTztBQUdiQyxjQUFRLEVBQUUsSUFIRztBQUliQyxhQUFPLEVBQUVULElBSkksQ0FPZjs7QUFQZSxLQUFmO0FBUUFDLGNBQVUsQ0FBQ1MsSUFBWCxDQUFnQixXQUFoQixFQUE2QlgsUUFBN0IsRUFieUMsQ0FlekM7QUFDQTtBQUVBO0FBQ0E7O0FBQ0FFLGNBQVUsQ0FBQ1Usc0JBQVgsQ0FDRVosUUFERixFQUVFRSxVQUFVLENBQUNXLE9BQVgsQ0FBbUJDLGNBRnJCLEVBR0VaLFVBQVUsQ0FBQ1csT0FBWCxDQUFtQkUsZUFIckIsRUFJRWIsVUFBVSxDQUFDVyxPQUFYLENBQW1CRyxlQUpyQixFQUtFLElBTEYsRUFNRSxVQUFTQyxTQUFULEVBQW9CO0FBQ2xCZixnQkFBVSxDQUFDUyxJQUFYLENBQWdCLFdBQWhCLEVBQTZCWCxRQUE3QixFQUF1Q2lCLFNBQXZDO0FBQ0QsS0FSSCxFQXBCeUMsQ0ErQnpDOztBQUNBakIsWUFBUSxDQUFDa0IsTUFBVCxHQUFrQnBCLFFBQVEsQ0FBRUssS0FBSyxHQUFHLE9BQUgsR0FBYSxTQUFwQixDQUExQjtBQUNBRCxjQUFVLENBQUNTLElBQVgsQ0FBaUJSLEtBQUssR0FBRyxPQUFILEdBQWEsU0FBbkMsRUFBK0NILFFBQS9DLEVBQTBERyxLQUFLLEdBQUcsbUJBQUgsR0FBeUIsU0FBeEYsRUFBb0csSUFBcEcsRUFqQ3lDLENBbUN6Qzs7QUFDQUQsY0FBVSxDQUFDUyxJQUFYLENBQWdCLFVBQWhCLEVBQTRCWCxRQUE1QixFQXBDeUMsQ0FzQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRURtQixHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkMsSUFBOUIsQ0FBbUMsWUFBVztBQUM1QyxRQUFJQyxPQUFPLEdBQUdGLENBQUMsQ0FBQyxJQUFELENBQWY7QUFDQSxRQUFJRyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsSUFBUixDQUFhLGFBQWIsQ0FBZjtBQUVBLFFBQUlDLFVBQVUsR0FBRyxLQUFLLENBQUwsS0FBV0gsT0FBTyxDQUFDSSxJQUFSLENBQWEsbUJBQWIsQ0FBNUI7QUFDQSxRQUFJQyxXQUFXLEdBQUcsS0FBSyxDQUF2QjtBQUNBLFFBQUliLE9BQU8sR0FBSTtBQUNiYyxTQUFHLEVBQUVOLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLGNBQWIsQ0FEUTtBQUViWCxvQkFBYyxFQUFFLElBRkg7QUFHYkMscUJBQWUsRUFBRSxJQUhKO0FBSWJhLHVCQUFpQixFQUFFTixRQUFRLENBQUNPLEdBQVQsQ0FBYSxDQUFiLENBSk47QUFLYkMscUJBQWUsRUFBRVIsUUFBUSxDQUFDUyxJQUFULEVBTEo7QUFNYkMsY0FBUSxFQUFFUixVQUFVLEdBQUcsSUFBSCxHQUFVLENBTmpCO0FBT2JTLG1CQUFhLEVBQUUsU0FQRjtBQVFiQyxlQUFTLEVBQUUsS0FBSyxDQUFMLEtBQVdiLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLG9CQUFiLENBQVgsR0FDUEosT0FBTyxDQUFDSSxJQUFSLENBQWEsb0JBQWIsQ0FETyxHQUM4QixJQVQ1QjtBQVViVSxVQUFJLEVBQUUsZ0JBQVc7QUFDZixhQUFLQyxFQUFMLENBQVEsV0FBUixFQUFxQixVQUFTbkMsSUFBVCxFQUFlO0FBQ2xDLGNBQUksQ0FBQ3VCLFVBQUQsSUFBZUUsV0FBbkIsRUFBZ0M7QUFDOUIsaUJBQUtXLFVBQUwsQ0FBZ0JYLFdBQWhCO0FBQ0Q7O0FBQ0RBLHFCQUFXLEdBQUd6QixJQUFkO0FBQ0QsU0FMRDtBQU9BLGFBQUttQyxFQUFMLENBQVEsa0JBQVIsRUFBNEIsVUFBU25DLElBQVQsRUFBZTtBQUN6QyxlQUFLcUMsY0FBTDtBQUNBLGVBQUtDLE9BQUwsQ0FBYXRDLElBQWI7QUFDRCxTQUhEO0FBS0EsWUFBSXVDLGFBQWEsR0FBR25CLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLGdCQUFiLENBQXBCO0FBQ0EsWUFBSXZCLFVBQVUsR0FBRyxJQUFqQjtBQUNBc0MscUJBQWEsQ0FBQ0MsT0FBZCxDQUFzQixVQUFTeEMsSUFBVCxFQUFleUMsS0FBZixFQUFzQjtBQUMxQzFDLGtCQUFRLENBQUNDLElBQUQsRUFBT0MsVUFBUCxFQUFtQndDLEtBQUssSUFBSSxDQUFDRixhQUFhLENBQUNqQyxNQUFkLEdBQXVCLENBQXhCLElBQTZCLENBQXpELENBQVI7QUFDRCxTQUZEO0FBR0Q7QUE1QlksS0FBZjtBQStCQWUsWUFBUSxDQUFDUyxJQUFULENBQWMsRUFBZDtBQUNBVixXQUFPLENBQUNzQixRQUFSLENBQWlCOUIsT0FBakI7QUFDRCxHQXZDRDtBQXlDRCxDQTFGRCxJIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9kcm9wem9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG4gIGZ1bmN0aW9uIG1vY2tGaWxlKGZpbGUsIGR6SW5zdGFuY2UsIGVycm9yKSB7XG4gICAgdmFyIG5hbWVfcGllY2VzID0gZmlsZS5zcGxpdCgvW1xcc1xcL10rLylcbiAgICB2YXIgbmFtZSA9IG5hbWVfcGllY2VzW25hbWVfcGllY2VzLmxlbmd0aC0xXVxuICAgIFxuICAgIC8vIENyZWF0ZSB0aGUgbW9jayBmaWxlOlxuICAgIHZhciBtb2NrRmlsZSA9IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzaXplOiAxMjM0NSxcbiAgICAgIGFjY2VwdGVkOiB0cnVlLFxuICAgICAgZGF0YVVSTDogZmlsZVxuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIGRlZmF1bHQgYWRkZWRmaWxlIGV2ZW50IGhhbmRsZXJcbiAgICBkekluc3RhbmNlLmVtaXQoJ2FkZGVkZmlsZScsIG1vY2tGaWxlKTtcblxuICAgIC8vIEFuZCBvcHRpb25hbGx5IHNob3cgdGhlIHRodW1ibmFpbCBvZiB0aGUgZmlsZTpcbiAgICAvLyBkekluc3RhbmNlLmVtaXQoJ3RodW1ibmFpbCcsIG1vY2tGaWxlLCBmaWxlKTtcblxuICAgIC8vIE9yIGlmIHRoZSBmaWxlIG9uIHlvdXIgc2VydmVyIGlzIG5vdCB5ZXQgaW4gdGhlIHJpZ2h0XG4gICAgLy8gc2l6ZSwgeW91IGNhbiBsZXQgRHJvcHpvbmUgZG93bmxvYWQgYW5kIHJlc2l6ZSBpdFxuICAgIGR6SW5zdGFuY2UuY3JlYXRlVGh1bWJuYWlsRnJvbVVybChcbiAgICAgIG1vY2tGaWxlLFxuICAgICAgZHpJbnN0YW5jZS5vcHRpb25zLnRodW1ibmFpbFdpZHRoLCBcbiAgICAgIGR6SW5zdGFuY2Uub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsXG4gICAgICBkekluc3RhbmNlLm9wdGlvbnMudGh1bWJuYWlsTWV0aG9kLCBcbiAgICAgIHRydWUsIFxuICAgICAgZnVuY3Rpb24odGh1bWJuYWlsKSB7XG4gICAgICAgIGR6SW5zdGFuY2UuZW1pdCgndGh1bWJuYWlsJywgbW9ja0ZpbGUsIHRodW1ibmFpbCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIGZha2UgZXJyb3IgLyBzdWNjZXNzXG4gICAgbW9ja0ZpbGUuc3RhdHVzID0gRHJvcHpvbmVbKGVycm9yID8gJ0VSUk9SJyA6ICdTVUNDRVNTJyldO1xuICAgIGR6SW5zdGFuY2UuZW1pdCgoZXJyb3IgPyAnZXJyb3InIDogJ3N1Y2Nlc3MnKSwgbW9ja0ZpbGUsIChlcnJvciA/ICdUaGUgZXJyb3IgbWVzc2FnZScgOiAnc3VjY2VzcycpLCBudWxsKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZXJlIGlzIG5vIHByb2dyZXNzIGJhciwgZXRjLi4uXG4gICAgZHpJbnN0YW5jZS5lbWl0KCdjb21wbGV0ZScsIG1vY2tGaWxlKTtcblxuICAgIC8vIElmIHlvdSB1c2UgdGhlIG1heEZpbGVzIG9wdGlvbiwgbWFrZSBzdXJlIHlvdSBhZGp1c3QgaXQgdG8gdGhlXG4gICAgLy8gY29ycmVjdCBhbW91bnQ6XG4gICAgLy8gdmFyIGV4aXN0aW5nRmlsZUNvdW50ID0gMTsgLy8gVGhlIG51bWJlciBvZiBmaWxlcyBhbHJlYWR5IHVwbG9hZGVkXG4gICAgLy8gZHpJbnN0YW5jZS5vcHRpb25zLm1heEZpbGVzID0gZHpJbnN0YW5jZS5vcHRpb25zLm1heEZpbGVzIC0gZXhpc3RpbmdGaWxlQ291bnQ7XG4gIH1cblxuICAkKCdbZGF0YS10b2dnbGU9XCJkcm9wem9uZVwiXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgdmFyIHRlbXBsYXRlID0gZWxlbWVudC5maW5kKCcuZHotcHJldmlldycpXG5cbiAgICB2YXIgaXNNdWx0aXBsZSA9IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkcm9wem9uZS1tdWx0aXBsZScpXG4gICAgdmFyIGN1cnJlbnRGaWxlID0gdm9pZCAwXG4gICAgdmFyIG9wdGlvbnMgID0ge1xuICAgICAgdXJsOiBlbGVtZW50LmRhdGEoXCJkcm9wem9uZS11cmxcIiksXG4gICAgICB0aHVtYm5haWxXaWR0aDogbnVsbCxcbiAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbCxcbiAgICAgIHByZXZpZXdzQ29udGFpbmVyOiB0ZW1wbGF0ZS5nZXQoMCksXG4gICAgICBwcmV2aWV3VGVtcGxhdGU6IHRlbXBsYXRlLmh0bWwoKSxcbiAgICAgIG1heEZpbGVzOiBpc011bHRpcGxlID8gbnVsbCA6IDEsXG4gICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvKicsXG4gICAgICBjbGlja2FibGU6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdkcm9wem9uZS1jbGlja2FibGUnKVxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgnZHJvcHpvbmUtY2xpY2thYmxlJykgOiB0cnVlLFxuICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub24oJ2FkZGVkZmlsZScsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICBpZiAoIWlzTXVsdGlwbGUgJiYgY3VycmVudEZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRmlsZShjdXJyZW50RmlsZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudEZpbGUgPSBmaWxlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5vbignbWF4ZmlsZXNleGNlZWRlZCcsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbEZpbGVzKClcbiAgICAgICAgICB0aGlzLmFkZEZpbGUoZmlsZSlcbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgZmlsZXNPblNlcnZlciA9IGVsZW1lbnQuZGF0YSgnZHJvcHpvbmUtZmlsZXMnKVxuICAgICAgICB2YXIgZHpJbnN0YW5jZSA9IHRoaXNcbiAgICAgICAgZmlsZXNPblNlcnZlci5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgbW9ja0ZpbGUoZmlsZSwgZHpJbnN0YW5jZSwgaW5kZXggPj0gKGZpbGVzT25TZXJ2ZXIubGVuZ3RoIC0gMSkgLyAyKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRlbXBsYXRlLmh0bWwoJycpXG4gICAgZWxlbWVudC5kcm9wem9uZShvcHRpb25zKVxuICB9KVxuXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==