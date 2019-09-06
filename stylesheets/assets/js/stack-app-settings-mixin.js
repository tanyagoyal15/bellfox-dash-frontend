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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/settings/stack-app-settings-mixin.js":
/*!*****************************************************!*\
  !*** ./src/js/settings/stack-app-settings-mixin.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    layoutActive: {
      type: String,
      required: true
    },
    layoutLocation: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      options: [{
        id: 'layout',
        title: 'Layout',
        children: [{
          id: 'layout',
          title: 'Layout',
          component: 'b-form-select',
          cookies: false,
          value: 'default',
          options: [{
            text: 'Layout Default',
            value: 'default',
            selected: true
          }, {
            text: 'Layout Fixed',
            value: 'fixed'
          }, {
            text: 'Layout Fluid',
            value: 'fluid'
          }, {
            text: 'Layout Mini',
            value: 'mini'
          }]
        }, {
          id: 'rtl',
          title: 'Text Direction',
          component: 'custom-checkbox-toggle',
          options: [{
            value: true
          }, {
            value: false,
            selected: true
          }]
        }]
      }, {
        id: 'mainDrawer',
        title: 'Main Drawer',
        children: [{
          id: 'align',
          title: 'Align',
          component: 'b-form-radio-group',
          options: [{
            text: 'Start',
            value: 'start',
            selected: true
          }, {
            text: 'End',
            value: 'end'
          }]
        }, {
          id: 'sidebar',
          title: 'Sidebar Skin',
          component: 'b-form-radio-group',
          options: [{
            text: 'Light',
            value: 'light',
            selected: true
          }, {
            text: 'Dark',
            value: 'dark'
          }]
        }]
      }, {
        id: 'mainNavbar',
        title: 'Main Navbar',
        children: [{
          id: 'navbar',
          title: 'Main Navbar',
          component: 'b-form-radio-group',
          options: [{
            text: 'Dark',
            value: 'dark',
            selected: true
          }, {
            text: 'Light',
            value: 'light'
          }, {
            text: 'Primary',
            value: 'primary'
          }]
        }]
      }],
      config: {
        'layout.layout': function layoutLayout(layout) {
          if (layout !== this.layoutActive) {
            location = this.layoutLocation[layout];
          }
        },
        'layout.rtl': function layoutRtl(rtl) {
          var _this = this;

          if (this.oldSettings['layout.rtl'] !== undefined && rtl !== this.oldSettings['layout.rtl']) {
            return location.reload();
          }

          document.querySelector('html').setAttribute('dir', rtl ? 'rtl' : 'ltr');
          document.querySelectorAll('.mdk-drawer').forEach(function (node) {
            return _this["try"](node, function () {
              this.mdkDrawer._resetPosition();
            });
          });
          document.querySelectorAll('.mdk-drawer-layout').forEach(function (node) {
            return _this["try"](node, function () {
              this.mdkDrawerLayout._resetLayout();
            });
          });
        },
        'mainDrawer.align': function mainDrawerAlign(align) {
          this["try"](document.querySelector('#default-drawer'), function () {
            this.mdkDrawer.align = align;
          });
        },
        'mainDrawer.sidebar': {
          'light': {
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light'],
              removeClass: ['sidebar-dark', 'bg-dark']
            },
            '#default-drawer .js-text-body': {
              addClass: ['text-body']
            }
          },
          'dark': {
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark', 'bg-dark'],
              removeClass: ['sidebar-light']
            },
            '#default-drawer .js-text-body': {
              removeClass: ['text-body']
            }
          }
        },
        'mainNavbar.navbar': {
          'light': {
            '.navbar-main .navbar-brand img': {
              src: 'assets/images/stack-logo-blue.svg'
            },
            '.navbar-main': {
              addClass: ['navbar-light', 'bg-white', 'border-bottom'],
              removeClass: ['navbar-dark', 'bg-primary-dark', 'bg-dark']
            }
          },
          'dark': {
            '.navbar-main .navbar-brand img': {
              src: 'assets/images/stack-logo-white.svg'
            },
            '.navbar-main': {
              addClass: ['navbar-dark', 'bg-dark'],
              removeClass: ['navbar-light', 'bg-primary-dark', 'bg-white', 'border-bottom']
            }
          },
          'primary': {
            '.navbar-main .navbar-brand img': {
              src: 'assets/images/stack-logo-white.svg'
            },
            '.navbar-main': {
              addClass: ['navbar-dark', 'bg-primary-dark'],
              removeClass: ['navbar-light', 'bg-white', 'bg-dark', 'border-bottom']
            }
          }
        }
      }
    };
  },
  computed: {
    computedOptions: function computedOptions() {
      var _this2 = this;

      var options = JSON.parse(JSON.stringify(this.options));
      options.map(function (option) {
        option.children.filter(function (group) {
          return group.cookies === false;
        }).map(function (group) {
          if (_this2.layoutActive) {
            group.options.map(function (go) {
              return go.selected = go.value === _this2.layoutActive;
            });
          } else {
            group.options.map(function (go) {
              return go.selected = go.value === group.value;
            });
          }
        });
      });
      return options;
    },
    computedSettings: function computedSettings() {
      return Object.assign({}, this.settings);
    }
  },
  created: function created() {
    this.listenOnRoot('fm:settings:state', this.onUpdate);
  },
  methods: {
    "try": function _try(node, callback) {
      try {
        callback.call(node);
      } catch (e) {
        node.addEventListener('domfactory-component-upgraded', callback);
      }
    }
  }
});

/***/ }),

/***/ 26:
/*!***********************************************************!*\
  !*** multi ./src/js/settings/stack-app-settings-mixin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\settings\stack-app-settings-mixin.js */"./src/js/settings/stack-app-settings-mixin.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NldHRpbmdzL3N0YWNrLWFwcC1zZXR0aW5ncy1taXhpbi5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImxheW91dEFjdGl2ZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxheW91dExvY2F0aW9uIiwiT2JqZWN0IiwiZGF0YSIsIm9wdGlvbnMiLCJpZCIsInRpdGxlIiwiY2hpbGRyZW4iLCJjb21wb25lbnQiLCJjb29raWVzIiwidmFsdWUiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJjb25maWciLCJsYXlvdXQiLCJsb2NhdGlvbiIsInJ0bCIsIm9sZFNldHRpbmdzIiwidW5kZWZpbmVkIiwicmVsb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJub2RlIiwibWRrRHJhd2VyIiwiX3Jlc2V0UG9zaXRpb24iLCJtZGtEcmF3ZXJMYXlvdXQiLCJfcmVzZXRMYXlvdXQiLCJhbGlnbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzcmMiLCJjb21wdXRlZCIsImNvbXB1dGVkT3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm1hcCIsIm9wdGlvbiIsImZpbHRlciIsImdyb3VwIiwiZ28iLCJjb21wdXRlZFNldHRpbmdzIiwiYXNzaWduIiwic2V0dGluZ3MiLCJjcmVhdGVkIiwibGlzdGVuT25Sb290Iiwib25VcGRhdGUiLCJtZXRob2RzIiwiY2FsbGJhY2siLCJjYWxsIiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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ZCxDQUFrQixVQUFBSSxFQUFFO0FBQUEscUJBQUlBLEVBQUUsQ0FBQy9CLFFBQUgsR0FBYytCLEVBQUUsQ0FBQ2pDLEtBQUgsS0FBYWdDLEtBQUssQ0FBQ2hDLEtBQXJDO0FBQUEsYUFBcEI7QUFDRDtBQUNGLFNBUkg7QUFTRCxPQVZEO0FBWUEsYUFBT04sT0FBUDtBQUNELEtBaEJPO0FBaUJSd0Msb0JBakJRLDhCQWlCVztBQUNqQixhQUFPMUMsTUFBTSxDQUFDMkMsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS0MsUUFBdkIsQ0FBUDtBQUNEO0FBbkJPLEdBNU1HO0FBaU9iQyxTQWpPYSxxQkFpT0g7QUFDUixTQUFLQyxZQUFMLENBQWtCLG1CQUFsQixFQUF1QyxLQUFLQyxRQUE1QztBQUNELEdBbk9ZO0FBb09iQyxTQUFPLEVBQUU7QUFBQSx5QkFDSHpCLElBREcsRUFDRzBCLFFBREgsRUFDYTtBQUNsQixVQUFJO0FBQ0ZBLGdCQUFRLENBQUNDLElBQVQsQ0FBYzNCLElBQWQ7QUFDRCxPQUZELENBRUUsT0FBTTRCLENBQU4sRUFBUztBQUNUNUIsWUFBSSxDQUFDNkIsZ0JBQUwsQ0FBc0IsK0JBQXRCLEVBQXVESCxRQUF2RDtBQUNEO0FBQ0Y7QUFQTTtBQXBPSSxDQUFmLEUiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL3N0YWNrLWFwcC1zZXR0aW5ncy1taXhpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjYpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGxheW91dEFjdGl2ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGxheW91dExvY2F0aW9uOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdsYXlvdXQnLFxuICAgICAgICAgIHRpdGxlOiAnTGF5b3V0JyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ2xheW91dCcsXG4gICAgICAgICAgICAgIHRpdGxlOiAnTGF5b3V0JyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiAnYi1mb3JtLXNlbGVjdCcsXG4gICAgICAgICAgICAgIGNvb2tpZXM6IGZhbHNlLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0xheW91dCBEZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0xheW91dCBGaXhlZCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpeGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0xheW91dCBGbHVpZCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZsdWlkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0xheW91dCBNaW5pJyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbWluaSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAncnRsJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdUZXh0IERpcmVjdGlvbicsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogJ2N1c3RvbS1jaGVja2JveC10b2dnbGUnLFxuICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdtYWluRHJhd2VyJyxcbiAgICAgICAgICB0aXRsZTogJ01haW4gRHJhd2VyJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ2FsaWduJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdBbGlnbicsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogJ2ItZm9ybS1yYWRpby1ncm91cCcsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU3RhcnQnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0VuZCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2VuZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnc2lkZWJhcicsXG4gICAgICAgICAgICAgIHRpdGxlOiAnU2lkZWJhciBTa2luJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiAnYi1mb3JtLXJhZGlvLWdyb3VwJyxcbiAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdMaWdodCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnRGFyaycsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2RhcmsnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdtYWluTmF2YmFyJyxcbiAgICAgICAgICB0aXRsZTogJ01haW4gTmF2YmFyJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ25hdmJhcicsXG4gICAgICAgICAgICAgIHRpdGxlOiAnTWFpbiBOYXZiYXInLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6ICdiLWZvcm0tcmFkaW8tZ3JvdXAnLFxuICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0RhcmsnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICdkYXJrJyxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnTGlnaHQnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICdsaWdodCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdQcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAncHJpbWFyeSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgJ2xheW91dC5sYXlvdXQnOiBmdW5jdGlvbihsYXlvdXQpIHtcbiAgICAgICAgICBpZiAobGF5b3V0ICE9PSB0aGlzLmxheW91dEFjdGl2ZSkge1xuICAgICAgICAgICAgbG9jYXRpb24gPSB0aGlzLmxheW91dExvY2F0aW9uW2xheW91dF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdsYXlvdXQucnRsJzogZnVuY3Rpb24ocnRsKSB7XG4gICAgICAgICAgaWYgKHRoaXMub2xkU2V0dGluZ3NbJ2xheW91dC5ydGwnXSAhPT0gdW5kZWZpbmVkICYmIHJ0bCAhPT0gdGhpcy5vbGRTZXR0aW5nc1snbGF5b3V0LnJ0bCddKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICB9XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnNldEF0dHJpYnV0ZSgnZGlyJywgcnRsID8gJ3J0bCcgOiAnbHRyJylcblxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGstZHJhd2VyJylcbiAgICAgICAgICAgIC5mb3JFYWNoKG5vZGUgPT4gdGhpcy50cnkobm9kZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMubWRrRHJhd2VyLl9yZXNldFBvc2l0aW9uKClcbiAgICAgICAgICAgIH0pKVxuXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kay1kcmF3ZXItbGF5b3V0JylcbiAgICAgICAgICAgIC5mb3JFYWNoKG5vZGUgPT4gdGhpcy50cnkobm9kZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRoaXMubWRrRHJhd2VyTGF5b3V0Ll9yZXNldExheW91dCgpXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgJ21haW5EcmF3ZXIuYWxpZ24nOiBmdW5jdGlvbihhbGlnbikge1xuICAgICAgICAgIHRoaXMudHJ5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWZhdWx0LWRyYXdlcicpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubWRrRHJhd2VyLmFsaWduID0gYWxpZ25cbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICAnbWFpbkRyYXdlci5zaWRlYmFyJzoge1xuICAgICAgICAgICdsaWdodCc6IHtcbiAgICAgICAgICAgICcjZGVmYXVsdC1kcmF3ZXIgLnNpZGViYXInOiB7XG4gICAgICAgICAgICAgIGFkZENsYXNzOiBbJ3NpZGViYXItbGlnaHQnXSxcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IFsnc2lkZWJhci1kYXJrJywgJ2JnLWRhcmsnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcjZGVmYXVsdC1kcmF3ZXIgLmpzLXRleHQtYm9keSc6IHtcbiAgICAgICAgICAgICAgYWRkQ2xhc3M6IFsndGV4dC1ib2R5J11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdkYXJrJzoge1xuICAgICAgICAgICAgJyNkZWZhdWx0LWRyYXdlciAuc2lkZWJhcic6IHtcbiAgICAgICAgICAgICAgYWRkQ2xhc3M6IFsnc2lkZWJhci1kYXJrJywgJ2JnLWRhcmsnXSxcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IFsnc2lkZWJhci1saWdodCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyNkZWZhdWx0LWRyYXdlciAuanMtdGV4dC1ib2R5Jzoge1xuICAgICAgICAgICAgICByZW1vdmVDbGFzczogWyd0ZXh0LWJvZHknXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ21haW5OYXZiYXIubmF2YmFyJzoge1xuICAgICAgICAgICdsaWdodCc6IHtcbiAgICAgICAgICAgICcubmF2YmFyLW1haW4gLm5hdmJhci1icmFuZCBpbWcnOiB7XG4gICAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvc3RhY2stbG9nby1ibHVlLnN2ZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJy5uYXZiYXItbWFpbic6IHtcbiAgICAgICAgICAgICAgYWRkQ2xhc3M6IFsnbmF2YmFyLWxpZ2h0JywgJ2JnLXdoaXRlJywgJ2JvcmRlci1ib3R0b20nXSxcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IFsnbmF2YmFyLWRhcmsnLCAnYmctcHJpbWFyeS1kYXJrJywgJ2JnLWRhcmsnXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2RhcmsnOiB7XG4gICAgICAgICAgICAnLm5hdmJhci1tYWluIC5uYXZiYXItYnJhbmQgaW1nJzoge1xuICAgICAgICAgICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL3N0YWNrLWxvZ28td2hpdGUuc3ZnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnLm5hdmJhci1tYWluJzoge1xuICAgICAgICAgICAgICBhZGRDbGFzczogWyduYXZiYXItZGFyaycsICdiZy1kYXJrJ10sXG4gICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBbJ25hdmJhci1saWdodCcsICdiZy1wcmltYXJ5LWRhcmsnLCAnYmctd2hpdGUnLCAnYm9yZGVyLWJvdHRvbSddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncHJpbWFyeSc6IHtcbiAgICAgICAgICAgICcubmF2YmFyLW1haW4gLm5hdmJhci1icmFuZCBpbWcnOiB7XG4gICAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvc3RhY2stbG9nby13aGl0ZS5zdmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcubmF2YmFyLW1haW4nOiB7XG4gICAgICAgICAgICAgIGFkZENsYXNzOiBbJ25hdmJhci1kYXJrJywgJ2JnLXByaW1hcnktZGFyayddLFxuICAgICAgICAgICAgICByZW1vdmVDbGFzczogWyduYXZiYXItbGlnaHQnLCAnYmctd2hpdGUnLCAnYmctZGFyaycsICdib3JkZXItYm90dG9tJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRPcHRpb25zKCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcbiAgICAgIG9wdGlvbnMubWFwKG9wdGlvbiA9PiB7XG4gICAgICAgIG9wdGlvbi5jaGlsZHJlblxuICAgICAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAuY29va2llcyA9PT0gZmFsc2UpXG4gICAgICAgICAgLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgZ3JvdXAub3B0aW9ucy5tYXAoZ28gPT4gZ28uc2VsZWN0ZWQgPSBnby52YWx1ZSA9PT0gdGhpcy5sYXlvdXRBY3RpdmUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBncm91cC5vcHRpb25zLm1hcChnbyA9PiBnby5zZWxlY3RlZCA9IGdvLnZhbHVlID09PSBncm91cC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICB9LFxuICAgIGNvbXB1dGVkU2V0dGluZ3MoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncylcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5saXN0ZW5PblJvb3QoJ2ZtOnNldHRpbmdzOnN0YXRlJywgdGhpcy5vblVwZGF0ZSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRyeShub2RlLCBjYWxsYmFjaykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChub2RlKVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZG9tZmFjdG9yeS1jb21wb25lbnQtdXBncmFkZWQnLCBjYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=