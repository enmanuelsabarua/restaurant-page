/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
function footer() {
    // <footer>
    //     <p>Copyright &copy; 2023 Enmanuel Sanchez Abarua</p>
    // </footer>

    const footer = document.createElement('footer');

    const p = document.createElement('p');
    p.innerHTML = 'Copyright &copy; 2023 Enmanuel Sanchez Abarua';

    footer.appendChild(p);

    return footer;
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
    const content = document.querySelector('#content');
    const body = document.querySelector('body');

    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'The Smokehouse';
    h1.classList.add('title');

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');

    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Contact';

    homeLink.dataset.id = 1;
    menuLink.dataset.id = 2;
    contactLink.dataset.id = 3;

    nav.appendChild(homeLink);
    nav.appendChild(menuLink);
    nav.appendChild(contactLink);

    header.appendChild(h1);
    header.appendChild(nav);

    body.insertBefore(header, content);

    return { homeLink, menuLink, contactLink}
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
    // <div class="home">
    //         <h2>About</h2>
    //         <p>Welcome to The Smokehouse, where we specialize in delivering the ultimate BBQ experience to your plate. Our restaurant is dedicated to serving up the best smoked meats and traditional Southern-style dishes that will leave your taste buds wanting more. From brisket and ribs to pulled pork and chicken, our menu is carefully crafted to satisfy all your cravings for authentic BBQ flavor. We take pride in using only the freshest and highest quality ingredients to create our signature dishes. With a warm and inviting atmosphere, The Smokehouse is the perfect place to enjoy a meal with family and friends. Come and join us for a truly memorable dining experience that will have you coming back for more!</p>
    // </div>

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const h2 = document.createElement('h2');
    h2.textContent = 'About';

    const p = document.createElement('p');
    p.textContent = 'Welcome to The Smokehouse, where we specialize in delivering the ultimate BBQ experience to your plate. Our restaurant is dedicated to serving up the best smoked meats and traditional Southern-style dishes that will leave your taste buds wanting more. From brisket and ribs to pulled pork and chicken, our menu is carefully crafted to satisfy all your cravings for authentic BBQ flavor. We take pride in using only the freshest and highest quality ingredients to create our signature dishes. With a warm and inviting atmosphere, The Smokehouse is the perfect place to enjoy a meal with family and friends. Come and join us for a truly memorable dining experience that will have you coming back for more!';

    homeDiv.appendChild(h2);
    homeDiv.appendChild(p);

    return homeDiv;
} 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");




function load() {
    const links = (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const content = document.querySelector('#content');
    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());

    const body = document.querySelector('body');
    body.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());

    return links;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbExvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTs7QUFFQTtBQUNBLG9DQUFvQzs7QUFFcEM7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7OztBQ25DZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNKO0FBQ0k7O0FBRWY7QUFDZixrQkFBa0IsbURBQU07O0FBRXhCO0FBQ0Esd0JBQXdCLGlEQUFJOztBQUU1QjtBQUNBLHFCQUFxQixtREFBTTs7QUFFM0I7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsTG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgLy8gPGZvb3Rlcj5cbiAgICAvLyAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDIzIEVubWFudWVsIFNhbmNoZXogQWJhcnVhPC9wPlxuICAgIC8vIDwvZm9vdGVyPlxuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gJ0NvcHlyaWdodCAmY29weTsgMjAyMyBFbm1hbnVlbCBTYW5jaGV6IEFiYXJ1YSc7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnVGhlIFNtb2tlaG91c2UnO1xuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgaG9tZUxpbmsuZGF0YXNldC5pZCA9IDE7XG4gICAgbWVudUxpbmsuZGF0YXNldC5pZCA9IDI7XG4gICAgY29udGFjdExpbmsuZGF0YXNldC5pZCA9IDM7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHsgaG9tZUxpbmssIG1lbnVMaW5rLCBjb250YWN0TGlua31cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIC8vIDxkaXYgY2xhc3M9XCJob21lXCI+XG4gICAgLy8gICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgIC8vICAgICAgICAgPHA+V2VsY29tZSB0byBUaGUgU21va2Vob3VzZSwgd2hlcmUgd2Ugc3BlY2lhbGl6ZSBpbiBkZWxpdmVyaW5nIHRoZSB1bHRpbWF0ZSBCQlEgZXhwZXJpZW5jZSB0byB5b3VyIHBsYXRlLiBPdXIgcmVzdGF1cmFudCBpcyBkZWRpY2F0ZWQgdG8gc2VydmluZyB1cCB0aGUgYmVzdCBzbW9rZWQgbWVhdHMgYW5kIHRyYWRpdGlvbmFsIFNvdXRoZXJuLXN0eWxlIGRpc2hlcyB0aGF0IHdpbGwgbGVhdmUgeW91ciB0YXN0ZSBidWRzIHdhbnRpbmcgbW9yZS4gRnJvbSBicmlza2V0IGFuZCByaWJzIHRvIHB1bGxlZCBwb3JrIGFuZCBjaGlja2VuLCBvdXIgbWVudSBpcyBjYXJlZnVsbHkgY3JhZnRlZCB0byBzYXRpc2Z5IGFsbCB5b3VyIGNyYXZpbmdzIGZvciBhdXRoZW50aWMgQkJRIGZsYXZvci4gV2UgdGFrZSBwcmlkZSBpbiB1c2luZyBvbmx5IHRoZSBmcmVzaGVzdCBhbmQgaGlnaGVzdCBxdWFsaXR5IGluZ3JlZGllbnRzIHRvIGNyZWF0ZSBvdXIgc2lnbmF0dXJlIGRpc2hlcy4gV2l0aCBhIHdhcm0gYW5kIGludml0aW5nIGF0bW9zcGhlcmUsIFRoZSBTbW9rZWhvdXNlIGlzIHRoZSBwZXJmZWN0IHBsYWNlIHRvIGVuam95IGEgbWVhbCB3aXRoIGZhbWlseSBhbmQgZnJpZW5kcy4gQ29tZSBhbmQgam9pbiB1cyBmb3IgYSB0cnVseSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCB3aWxsIGhhdmUgeW91IGNvbWluZyBiYWNrIGZvciBtb3JlITwvcD5cbiAgICAvLyA8L2Rpdj5cblxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdBYm91dCc7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBUaGUgU21va2Vob3VzZSwgd2hlcmUgd2Ugc3BlY2lhbGl6ZSBpbiBkZWxpdmVyaW5nIHRoZSB1bHRpbWF0ZSBCQlEgZXhwZXJpZW5jZSB0byB5b3VyIHBsYXRlLiBPdXIgcmVzdGF1cmFudCBpcyBkZWRpY2F0ZWQgdG8gc2VydmluZyB1cCB0aGUgYmVzdCBzbW9rZWQgbWVhdHMgYW5kIHRyYWRpdGlvbmFsIFNvdXRoZXJuLXN0eWxlIGRpc2hlcyB0aGF0IHdpbGwgbGVhdmUgeW91ciB0YXN0ZSBidWRzIHdhbnRpbmcgbW9yZS4gRnJvbSBicmlza2V0IGFuZCByaWJzIHRvIHB1bGxlZCBwb3JrIGFuZCBjaGlja2VuLCBvdXIgbWVudSBpcyBjYXJlZnVsbHkgY3JhZnRlZCB0byBzYXRpc2Z5IGFsbCB5b3VyIGNyYXZpbmdzIGZvciBhdXRoZW50aWMgQkJRIGZsYXZvci4gV2UgdGFrZSBwcmlkZSBpbiB1c2luZyBvbmx5IHRoZSBmcmVzaGVzdCBhbmQgaGlnaGVzdCBxdWFsaXR5IGluZ3JlZGllbnRzIHRvIGNyZWF0ZSBvdXIgc2lnbmF0dXJlIGRpc2hlcy4gV2l0aCBhIHdhcm0gYW5kIGludml0aW5nIGF0bW9zcGhlcmUsIFRoZSBTbW9rZWhvdXNlIGlzIHRoZSBwZXJmZWN0IHBsYWNlIHRvIGVuam95IGEgbWVhbCB3aXRoIGZhbWlseSBhbmQgZnJpZW5kcy4gQ29tZSBhbmQgam9pbiB1cyBmb3IgYSB0cnVseSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCB3aWxsIGhhdmUgeW91IGNvbWluZyBiYWNrIGZvciBtb3JlISc7XG5cbiAgICBob21lRGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHApO1xuXG4gICAgcmV0dXJuIGhvbWVEaXY7XG59ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgY29uc3QgbGlua3MgPSBoZWFkZXIoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgICByZXR1cm4gbGlua3M7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9