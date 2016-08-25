var home =
webpackJsonp_name_([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _welcome = __webpack_require__(1);

	var _welcome2 = _interopRequireDefault(_welcome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	document.body.onload = function () {
	    (0, _welcome2["default"])("home");

	    document.getElementById("btn1").onclick = function () {

	        __webpack_require__.e/* nsure */(3, function (require) {
	            //в [] можно не указывать модули, поскольку webpack по внуьтреннему коду блока понимает что тут будет required
	            var myasync = __webpack_require__(2);
	            //myasync.default();
	            myasync();
	        });
	
	        //или AMD синтаксис
	        /*require(["./myasync"], function(myasync) {
	            myasync.default();
	        });*/
	    };
	
	    document.getElementById("btn2").onclick = function () {

	        __webpack_require__.e/* nsure */(3, function (require) {
	            var myasync2 = __webpack_require__(3);
	            //myasync.default();
	            myasync2();
	        });
	    };
	}; //let welcome = require('./welcome');


	exports.welcome = _welcome2["default"];
		

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWlsZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vbGV0IHdlbGNvbWUgPSByZXF1aXJlKCcuL3dlbGNvbWUnKTtcclxuaW1wb3J0IHdlbGNvbWUgZnJvbSAnLi93ZWxjb21lJztcclxuXHJcblxyXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdlbGNvbWUoXCJob21lXCIpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuMVwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHsgLy/QsiBbXSDQvNC+0LbQvdC+INC90LUg0YPQutCw0LfRi9Cy0LDRgtGMINC80L7QtNGD0LvQuCwg0L/QvtGB0LrQvtC70YzQutGDIHdlYnBhY2sg0L/QviDQstC90YPRjNGC0YDQtdC90L3QtdC80YMg0LrQvtC00YMg0LHQu9C+0LrQsCDQv9C+0L3QuNC80LDQtdGCINGH0YLQviDRgtGD0YIg0LHRg9C00LXRgiByZXF1aXJlZFxyXG4gICAgICAgICAgICBsZXQgbXlhc3luYyA9IHJlcXVpcmUoJy4vbXlhc3luYycpO1xyXG4gICAgICAgICAgICAvL215YXN5bmMuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBteWFzeW5jKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJhc3luY19ncm91cFwiIC8v0JTQu9GPINGC0L7Qs9C+INGH0YLQvtCx0Ysg0L7QsdCwIGFzeW5jINC80L7QtNGD0LvRjyDQv9C+0L/QsNC70Lgg0LIg0L7QtNC40L0g0YTQsNC50LtcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvL9C40LvQuCBBTUQg0YHQuNC90YLQsNC60YHQuNGBXHJcbiAgICAgICAgLypyZXF1aXJlKFtcIi4vbXlhc3luY1wiXSwgZnVuY3Rpb24obXlhc3luYykge1xyXG4gICAgICAgICAgICBteWFzeW5jLmRlZmF1bHQoKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuMlwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcclxuICAgICAgICAgICAgbGV0IG15YXN5bmMyID0gcmVxdWlyZSgnLi9teWFzeW5jMicpO1xyXG4gICAgICAgICAgICAvL215YXN5bmMuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBteWFzeW5jMigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiYXN5bmNfZ3JvdXBcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydHMud2VsY29tZSA9IHdlbGNvbWU7XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZnJvbnRlbmQvaG9tZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFKQTtBQUNBOzs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==