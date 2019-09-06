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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/fullcalendar.js":
/*!****************************************!*\
  !*** ./src/js/plugins/fullcalendar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var t = new Date();
  var date = (t.getDate(), t.getMonth(), t.getFullYear(), new Date($.now()));
  var events = [{
    title: "Hey!",
    start: new Date($.now() + 158e6),
    className: "bg-warning"
  }, {
    title: "See John Deo",
    start: date,
    end: date,
    className: "bg-success"
  }, {
    title: "Meet John Deo",
    start: new Date($.now() + 168e6),
    className: "bg-info"
  }, {
    title: "Buy a Theme",
    start: new Date($.now() + 338e6),
    className: "bg-primary"
  }];

  var onDrop = function onDrop(droppable, date, calendar) {
    var eventObject = droppable.data('eventObject');
    var className = droppable.data('class');
    var options = $.extend({}, eventObject);
    options.start = date;

    if (className) {
      options.className = [className];
    }

    calendar.fullCalendar('renderEvent', options, true);

    if ($('#drop-remove').is(':checked')) {
      droppable.remove();
    }
  };

  var onEventClick = function onEventClick(event, jsEvent, view, calendar) {
    var modal = $(MODAL);
    var form = $("<form>\n      <label>Change event name</label>\n      <div class=\"input-group m-b-15\">\n        <input class=\"form-control\" type=\"text\" value=\"".concat(event.title, "\" />\n        <span class=\"input-group-append\">\n          <button type=\"submit\" class=\"btn btn-success\">\n            <i class=\"material-icons mr-2\">check</i> Save\n          </button>\n        </span>\n      </div>\n    </form>"));
    modal.modal('show');
    modal.find('.delete-event').show().end().find('.save-event').hide().end().find('.modal-body').empty().prepend(form).end().find('.delete-event').unbind('click').click(function () {
      calendar.fullCalendar('removeEvents', function (e) {
        return e._id == event._id;
      });
      modal.modal('hide');
    });
    modal.find('form').on('submit', function (e) {
      e.preventDefault();
      event.title = form.find('input[type=text]').val();
      calendar.fullCalendar('updateEvent', event);
      modal.modal('hide');
    });
  };

  var onSelect = function onSelect(start, end, jsEvent, calendar) {
    var modal = $(MODAL);
    modal.modal({
      backdrop: "static"
    });
    var form = $("<form>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Event Name</label>\n            <input class=\"form-control\" placeholder=\"Insert Event Name\" type=\"text\" name=\"title\" />\n          </div>\n        </div>\n        <div class=\"col-12\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Category</label>\n            <select class=\"form-control custom-select\" name=\"category\">\n              <option value=\"bg-danger\">Danger</option>\n              <option value=\"bg-success\">Success</option>\n              <option value=\"bg-primary\">Primary</option>\n              <option value=\"bg-info\">Info</option>\n              <option value=\"bg-dark\">Dark</option>\n              <option value=\"bg-warning\">Warning</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </form>");
    modal.find('.delete-event').hide().end().find('.save-event').show().end().find('.modal-body').empty().prepend(form).end().find('.save-event').unbind('click').click(function () {
      form.submit();
    });
    modal.find('form').on('submit', function (e) {
      e.preventDefault();
      var title = form.find('input[name="title"]').val();
      var className = (form.find('input[name="beginning"]').val(), form.find('input[name="ending"]').val(), form.find('select[name="category"] option:checked').val());

      if (null !== title && 0 != title.length) {
        calendar.fullCalendar('renderEvent', {
          title: title,
          start: start,
          end: end,
          allDay: false,
          className: className
        }, true);
        return modal.modal('hide');
      }

      alert('You have to give a title to your event');
    });
    calendar.fullCalendar('unselect');
  };

  $('[data-toggle="fullcalendar"]').each(function () {
    var element = $(this);
    var options = {
      themeSystem: 'bootstrap4',
      closeButton: void 0 !== element.data('toastr-close-button') ? element.data('toastr-close-button') : false,
      slotDuration: '00:15:00',
      minTime: '08:00:00',
      maxTime: '19:00:00',
      defaultView: 'month',
      handleWindowResize: true,
      height: $(window).height() - 200,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: events,
      editable: true,
      droppable: true,
      eventLimit: true,
      selectable: true,
      drop: function drop(date) {
        onDrop($(this), date, element);
      },
      select: function select(start, end, jsEvent) {
        onSelect(start, end, jsEvent, element);
      },
      eventClick: function eventClick(event, jsEvent, view) {
        onEventClick(event, jsEvent, view, element);
      }
    };
    element.fullCalendar(options);
  });
  var MODAL = '#event-modal';
  var EVENT = '#external-events div.external-event';
  var EXT_EVENTS_CONTAINER = '#external-events';
  var categoryForm = $('#add-category form');

  var enableDrag = function enableDrag() {
    $(EVENT).each(function () {
      if ($(this).data('eventObject')) {
        return;
      }

      $(this).data('eventObject', {
        title: $.trim($(this).find('.external-event__title').text())
      });
      $(this).draggable({
        zIndex: 999,
        revert: true,
        revertDuration: 0
      });
    });
  };

  enableDrag();
  $('.save-category').on('click', function () {
    var name = categoryForm.find('input[name="category-name"]').val();
    var color = categoryForm.find('select[name="category-color"]').val();

    if (null !== name && 0 != name.length) {
      $(EXT_EVENTS_CONTAINER).append("\n        <div class=\"external-event bg-".concat(color, "\" data-class=\"bg-").concat(color, "\">\n          <i class=\"mr-2 material-icons\">drag_handle</i>\n          <span class=\"external-event__title\">").concat(name, "</span>\n        </div>\n      "));
      enableDrag();
    }
  });
})();

/***/ }),

/***/ 15:
/*!**********************************************!*\
  !*** multi ./src/js/plugins/fullcalendar.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanya\Desktop\BELLFOX\StackAdmin-1.2.0\src\js\plugins\fullcalendar.js */"./src/js/plugins/fullcalendar.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsdWdpbnMvZnVsbGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbInQiLCJEYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiJCIsIm5vdyIsImV2ZW50cyIsInRpdGxlIiwic3RhcnQiLCJjbGFzc05hbWUiLCJlbmQiLCJvbkRyb3AiLCJkcm9wcGFibGUiLCJjYWxlbmRhciIsImV2ZW50T2JqZWN0IiwiZGF0YSIsIm9wdGlvbnMiLCJleHRlbmQiLCJmdWxsQ2FsZW5kYXIiLCJpcyIsInJlbW92ZSIsIm9uRXZlbnRDbGljayIsImV2ZW50IiwianNFdmVudCIsInZpZXciLCJtb2RhbCIsIk1PREFMIiwiZm9ybSIsImZpbmQiLCJzaG93IiwiaGlkZSIsImVtcHR5IiwicHJlcGVuZCIsInVuYmluZCIsImNsaWNrIiwiZSIsIl9pZCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJ2YWwiLCJvblNlbGVjdCIsImJhY2tkcm9wIiwic3VibWl0IiwibGVuZ3RoIiwiYWxsRGF5IiwiYWxlcnQiLCJlYWNoIiwiZWxlbWVudCIsInRoZW1lU3lzdGVtIiwiY2xvc2VCdXR0b24iLCJzbG90RHVyYXRpb24iLCJtaW5UaW1lIiwibWF4VGltZSIsImRlZmF1bHRWaWV3IiwiaGFuZGxlV2luZG93UmVzaXplIiwiaGVpZ2h0Iiwid2luZG93IiwiaGVhZGVyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiZWRpdGFibGUiLCJldmVudExpbWl0Iiwic2VsZWN0YWJsZSIsImRyb3AiLCJzZWxlY3QiLCJldmVudENsaWNrIiwiRVZFTlQiLCJFWFRfRVZFTlRTX0NPTlRBSU5FUiIsImNhdGVnb3J5Rm9ybSIsImVuYWJsZURyYWciLCJ0cmltIiwidGV4dCIsImRyYWdnYWJsZSIsInpJbmRleCIsInJldmVydCIsInJldmVydER1cmF0aW9uIiwibmFtZSIsImNvbG9yIiwi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LEVBQVA7QUFEbUIsT0FBNUI7QUFHQXBFLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFFLFNBQVIsQ0FBa0I7QUFDaEJDLGNBQU0sRUFBRSxHQURRO0FBRWhCQyxjQUFNLEVBQUUsSUFGUTtBQUdoQkMsc0JBQWMsRUFBRTtBQUhBLE9BQWxCO0FBS0QsS0FaRDtBQWFELEdBZEQ7O0FBZ0JBTixZQUFVO0FBRVZsRSxHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmlDLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVc7QUFDekMsUUFBTXdDLElBQUksR0FBR1IsWUFBWSxDQUFDekMsSUFBYixDQUFrQiw2QkFBbEIsRUFBaURXLEdBQWpELEVBQWI7QUFDQSxRQUFNdUMsS0FBSyxHQUFHVCxZQUFZLENBQUN6QyxJQUFiLENBQWtCLCtCQUFsQixFQUFtRFcsR0FBbkQsRUFBZDs7QUFFQSxRQUFJLFNBQVNzQyxJQUFULElBQWlCLEtBQUtBLElBQUksQ0FBQ2xDLE1BQS9CLEVBQXVDO0FBQ3JDdkMsT0FBQyxDQUFDZ0Usb0JBQUQsQ0FBRCxDQUF3QlcsTUFBeEIsb0RBQ21DRCxLQURuQyxnQ0FDOERBLEtBRDlELDhIQUcyQ0QsSUFIM0M7QUFNQVAsZ0JBQVU7QUFDWDtBQUNGLEdBYkQ7QUFlRCxDQXRORCxJIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9mdWxsY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHQgPSBuZXcgRGF0ZVxuICBjb25zdCBkYXRlID0gKHQuZ2V0RGF0ZSgpLCB0LmdldE1vbnRoKCksIHQuZ2V0RnVsbFllYXIoKSwgbmV3IERhdGUoJC5ub3coKSkpXG5cbiAgY29uc3QgZXZlbnRzID0gW3tcbiAgICB0aXRsZTogXCJIZXkhXCIsXG4gICAgc3RhcnQ6IG5ldyBEYXRlKCQubm93KCkgKyAxNThlNiksXG4gICAgY2xhc3NOYW1lOiBcImJnLXdhcm5pbmdcIlxuICB9LCB7XG4gICAgdGl0bGU6IFwiU2VlIEpvaG4gRGVvXCIsXG4gICAgc3RhcnQ6IGRhdGUsXG4gICAgZW5kOiBkYXRlLFxuICAgIGNsYXNzTmFtZTogXCJiZy1zdWNjZXNzXCJcbiAgfSwge1xuICAgIHRpdGxlOiBcIk1lZXQgSm9obiBEZW9cIixcbiAgICBzdGFydDogbmV3IERhdGUoJC5ub3coKSArIDE2OGU2KSxcbiAgICBjbGFzc05hbWU6IFwiYmctaW5mb1wiXG4gIH0sIHtcbiAgICB0aXRsZTogXCJCdXkgYSBUaGVtZVwiLFxuICAgIHN0YXJ0OiBuZXcgRGF0ZSgkLm5vdygpICsgMzM4ZTYpLFxuICAgIGNsYXNzTmFtZTogXCJiZy1wcmltYXJ5XCJcbiAgfV1cblxuICBjb25zdCBvbkRyb3AgPSAoZHJvcHBhYmxlLCBkYXRlLCBjYWxlbmRhcikgPT4ge1xuICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0gZHJvcHBhYmxlLmRhdGEoJ2V2ZW50T2JqZWN0JylcbiAgICBjb25zdCBjbGFzc05hbWUgPSBkcm9wcGFibGUuZGF0YSgnY2xhc3MnKVxuICAgIGNvbnN0IG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZXZlbnRPYmplY3QpXG4gICAgb3B0aW9ucy5zdGFydCA9IGRhdGUgXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgb3B0aW9ucy5jbGFzc05hbWUgPSBbY2xhc3NOYW1lXVxuICAgIH1cblxuICAgIGNhbGVuZGFyLmZ1bGxDYWxlbmRhcigncmVuZGVyRXZlbnQnLCBvcHRpb25zLCB0cnVlKVxuICAgIGlmICgkKCcjZHJvcC1yZW1vdmUnKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgZHJvcHBhYmxlLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25FdmVudENsaWNrID0gKGV2ZW50LCBqc0V2ZW50LCB2aWV3LCBjYWxlbmRhcikgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gJChNT0RBTClcbiAgICBjb25zdCBmb3JtID0gJChgPGZvcm0+XG4gICAgICA8bGFiZWw+Q2hhbmdlIGV2ZW50IG5hbWU8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG0tYi0xNVwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHsgZXZlbnQudGl0bGUgfVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbXItMlwiPmNoZWNrPC9pPiBTYXZlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5gKVxuXG4gICAgbW9kYWwubW9kYWwoJ3Nob3cnKVxuICAgIG1vZGFsXG4gICAgICAuZmluZCgnLmRlbGV0ZS1ldmVudCcpLnNob3coKS5lbmQoKVxuICAgICAgLmZpbmQoJy5zYXZlLWV2ZW50JykuaGlkZSgpLmVuZCgpXG4gICAgICAuZmluZCgnLm1vZGFsLWJvZHknKS5lbXB0eSgpLnByZXBlbmQoZm9ybSkuZW5kKClcbiAgICAgIC5maW5kKCcuZGVsZXRlLWV2ZW50JykudW5iaW5kKCdjbGljaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxlbmRhci5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5faWQgPT0gZXZlbnQuX2lkXG4gICAgICAgIH0pXG4gICAgICAgIG1vZGFsLm1vZGFsKCdoaWRlJylcbiAgICB9KVxuXG4gICAgbW9kYWwuZmluZCgnZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnRpdGxlID0gZm9ybS5maW5kKCdpbnB1dFt0eXBlPXRleHRdJykudmFsKClcbiAgICAgIGNhbGVuZGFyLmZ1bGxDYWxlbmRhcigndXBkYXRlRXZlbnQnLCBldmVudClcbiAgICAgIG1vZGFsLm1vZGFsKCdoaWRlJylcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25TZWxlY3QgPSAoc3RhcnQsIGVuZCwganNFdmVudCwgY2FsZW5kYXIpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9ICQoTU9EQUwpXG4gICAgbW9kYWwubW9kYWwoe1xuICAgICAgYmFja2Ryb3A6IFwic3RhdGljXCJcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGZvcm0gPSAkKGA8Zm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+RXZlbnQgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkluc2VydCBFdmVudCBOYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+Q2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBjdXN0b20tc2VsZWN0XCIgbmFtZT1cImNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiZy1kYW5nZXJcIj5EYW5nZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJnLXN1Y2Nlc3NcIj5TdWNjZXNzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiZy1wcmltYXJ5XCI+UHJpbWFyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmctaW5mb1wiPkluZm88L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJnLWRhcmtcIj5EYXJrPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiZy13YXJuaW5nXCI+V2FybmluZzwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPmApO1xuXG4gICAgbW9kYWxcbiAgICAgIC5maW5kKCcuZGVsZXRlLWV2ZW50JykuaGlkZSgpLmVuZCgpXG4gICAgICAuZmluZCgnLnNhdmUtZXZlbnQnKS5zaG93KCkuZW5kKClcbiAgICAgIC5maW5kKCcubW9kYWwtYm9keScpLmVtcHR5KCkucHJlcGVuZChmb3JtKS5lbmQoKVxuICAgICAgLmZpbmQoJy5zYXZlLWV2ZW50JykudW5iaW5kKCdjbGljaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3JtLnN1Ym1pdCgpXG4gICAgICB9KVxuXG4gICAgbW9kYWwuZmluZCgnZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgdmFyIHRpdGxlID0gZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKS52YWwoKVxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gKFxuICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJiZWdpbm5pbmdcIl0nKS52YWwoKSwgXG4gICAgICAgIGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImVuZGluZ1wiXScpLnZhbCgpLCBcbiAgICAgICAgZm9ybS5maW5kKCdzZWxlY3RbbmFtZT1cImNhdGVnb3J5XCJdIG9wdGlvbjpjaGVja2VkJykudmFsKClcbiAgICAgIClcblxuICAgICAgaWYgKG51bGwgIT09IHRpdGxlICYmIDAgIT0gdGl0bGUubGVuZ3RoKSB7XG4gICAgICAgIGNhbGVuZGFyLmZ1bGxDYWxlbmRhcigncmVuZGVyRXZlbnQnLCB7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgZW5kLFxuICAgICAgICAgIGFsbERheTogZmFsc2UsXG4gICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgIH0sIHRydWUpXG4gICAgICAgIHJldHVybiBtb2RhbC5tb2RhbCgnaGlkZScpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGFsZXJ0KCdZb3UgaGF2ZSB0byBnaXZlIGEgdGl0bGUgdG8geW91ciBldmVudCcpXG4gICAgfSlcblxuICAgIGNhbGVuZGFyLmZ1bGxDYWxlbmRhcigndW5zZWxlY3QnKVxuICB9XG5cbiAgJCgnW2RhdGEtdG9nZ2xlPVwiZnVsbGNhbGVuZGFyXCJdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gJCh0aGlzKVxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB0aGVtZVN5c3RlbTogJ2Jvb3RzdHJhcDQnLFxuICAgICAgY2xvc2VCdXR0b246IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCd0b2FzdHItY2xvc2UtYnV0dG9uJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCd0b2FzdHItY2xvc2UtYnV0dG9uJykgXG4gICAgICAgIDogZmFsc2UsXG4gICAgICBzbG90RHVyYXRpb246ICcwMDoxNTowMCcsXG4gICAgICBtaW5UaW1lOiAnMDg6MDA6MDAnLFxuICAgICAgbWF4VGltZTogJzE5OjAwOjAwJyxcbiAgICAgIGRlZmF1bHRWaWV3OiAnbW9udGgnLFxuICAgICAgaGFuZGxlV2luZG93UmVzaXplOiB0cnVlLFxuICAgICAgaGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCkgLSAyMDAsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXG4gICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcbiAgICAgICAgcmlnaHQ6ICdtb250aCxhZ2VuZGFXZWVrLGFnZW5kYURheSdcbiAgICAgIH0sXG4gICAgICBldmVudHMsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGRyb3BwYWJsZTogdHJ1ZSxcbiAgICAgIGV2ZW50TGltaXQ6IHRydWUsXG4gICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgZHJvcDogZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgICBvbkRyb3AoJCh0aGlzKSwgZGF0ZSwgZWxlbWVudClcbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIGpzRXZlbnQpIHtcbiAgICAgICAgb25TZWxlY3Qoc3RhcnQsIGVuZCwganNFdmVudCwgZWxlbWVudClcbiAgICAgIH0sXG4gICAgICBldmVudENsaWNrOiBmdW5jdGlvbihldmVudCwganNFdmVudCwgdmlldykge1xuICAgICAgICBvbkV2ZW50Q2xpY2soZXZlbnQsIGpzRXZlbnQsIHZpZXcsIGVsZW1lbnQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudC5mdWxsQ2FsZW5kYXIob3B0aW9ucylcbiAgfSlcblxuICBjb25zdCBNT0RBTCA9ICcjZXZlbnQtbW9kYWwnXG4gIGNvbnN0IEVWRU5UID0gJyNleHRlcm5hbC1ldmVudHMgZGl2LmV4dGVybmFsLWV2ZW50J1xuICBjb25zdCBFWFRfRVZFTlRTX0NPTlRBSU5FUiA9ICcjZXh0ZXJuYWwtZXZlbnRzJ1xuICBjb25zdCBjYXRlZ29yeUZvcm0gPSAkKCcjYWRkLWNhdGVnb3J5IGZvcm0nKVxuXG4gIGNvbnN0IGVuYWJsZURyYWcgPSAoKSA9PiB7XG4gICAgJChFVkVOVCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ2V2ZW50T2JqZWN0JykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAkKHRoaXMpLmRhdGEoJ2V2ZW50T2JqZWN0Jywge1xuICAgICAgICB0aXRsZTogJC50cmltKCQodGhpcykuZmluZCgnLmV4dGVybmFsLWV2ZW50X190aXRsZScpLnRleHQoKSlcbiAgICAgIH0pXG4gICAgICAkKHRoaXMpLmRyYWdnYWJsZSh7XG4gICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICByZXZlcnQ6IHRydWUsXG4gICAgICAgIHJldmVydER1cmF0aW9uOiAwXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBlbmFibGVEcmFnKClcblxuICAkKCcuc2F2ZS1jYXRlZ29yeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG5hbWUgPSBjYXRlZ29yeUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNhdGVnb3J5LW5hbWVcIl0nKS52YWwoKVxuICAgIGNvbnN0IGNvbG9yID0gY2F0ZWdvcnlGb3JtLmZpbmQoJ3NlbGVjdFtuYW1lPVwiY2F0ZWdvcnktY29sb3JcIl0nKS52YWwoKVxuXG4gICAgaWYgKG51bGwgIT09IG5hbWUgJiYgMCAhPSBuYW1lLmxlbmd0aCkge1xuICAgICAgJChFWFRfRVZFTlRTX0NPTlRBSU5FUikuYXBwZW5kKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV4dGVybmFsLWV2ZW50IGJnLSR7IGNvbG9yIH1cIiBkYXRhLWNsYXNzPVwiYmctJHsgY29sb3IgfVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwibXItMiBtYXRlcmlhbC1pY29uc1wiPmRyYWdfaGFuZGxlPC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXh0ZXJuYWwtZXZlbnRfX3RpdGxlXCI+JHsgbmFtZSB9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGApXG4gICAgICBlbmFibGVEcmFnKClcbiAgICB9XG4gIH0pXG5cbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9