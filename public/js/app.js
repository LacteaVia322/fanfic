/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

// require('./bootstrap');
// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */
//  require('./bootstrap');
//  import VueRouter from 'vue-router';
//  window.Vue = require('vue');
//  Vue.use(VueRouter);
//  window.Vue = require('vue');
//  window.simplebar = require('simplebar-vue');
//  /**
//   * The following block of code may be used to automatically register your
//   * Vue components. It will recursively scan this directory for the Vue
//   * components and automatically register them with their "basename".
//   *
//   * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//   */
//  // const files = require.context('./', true, /\.vue$/i)
//  // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
//  Vue.component('search', require('./components/book-ui/Search.vue').default);
//  Vue.component('nav-bar', require('./components/book-ui/NavBar.vue').default);
//  Vue.component('book-info', require('./components/book-ui/bookshelf/BookInfo.vue').default);
//  import Book from './components/book-ui/BookApp.vue';
//  import Reader from './components/reader-ui/Reader.vue';
//  import Bookshelf from './components/book-ui/bookshelf/Bookshelf.vue';
//  import Discover from './components/book-ui/discover/Discover.vue';
//  import Community from './components/book-ui/community/Community.vue';
//  import Profile from './components/book-ui/profile/Profile.vue';
//  import Admin from './components/admin-ui/Main.vue';
//  import Editor from './components/admin-ui/Editor.vue';
//  const router = new VueRouter({
//      mode: 'history',
//      routes: [
//          {
//              path: '/bookshelf',
//              name: 'home',
//              component: Book,
//              children: [
//                  {
//                      path: 'books',
//                      name: 'bookshelf',
//                      component: Bookshelf,
//                      meta: { 
//                          title: 'Библиотека'
//                      }
//                  },
//                  {
//                      path: 'discover',
//                      name: 'discover',
//                      component: Discover,
//                      meta: { 
//                          title: 'Обзор'
//                      }
//                  },
//                  {
//                      path: 'bookmarks',
//                      name: 'bookmarks',
//                      component: Community,
//                      meta: { 
//                          title: 'Закладки'
//                      }
//                  },
//                  {
//                      path: 'profile',
//                      name: 'profile',
//                      component: Profile,
//                      meta: { 
//                          title: 'Профиль'
//                      }
//                  },
//              ]
//          },
//          {
//              path: '/reader/:id',
//              name: 'reader',
//              component: Reader,
//          },
//          {
//              path: '/admin',
//              name: 'admin',
//              component: Admin,
//              children: [
//                  {
//                      path: 'editor/:id',
//                      name: 'bookeditor',
//                      props: true,
//                      component: Editor,
//                      meta: { 
//                          title: 'Редактор'
//                      }
//                  },
//              ]
//          },
//          // { 
//          //     path: '*', 
//          //     component: Error404Component 
//          // }
//      ],
//  });
//  /**
//   * Next, we will create a fresh Vue application instance and attach it to
//   * the page. Then, you may begin adding components to this application
//   * or customize the JavaScript scaffolding to fit your unique needs.
//   */
//  const app = new Vue({
//      el: '#app',
//      router,
//      data: {
//          loading: true,
//          title: "..."
//      },
//      computed: {
//      },
//      mounted: function () {
//          this.title = this.$route.meta.title;
//          this.$on('click-on-book', function (book) {
//              if (this.bookInfoState)
//                  return;
//              this.openedBook = book;
//              this.bookInfoState = true;
//          });
//          if (this.$route.path == "/")
//              this.$router.push({ name: 'bookshelf'});
//          window.addEventListener("DOMContentLoaded", () => {
//              this.loading = false;
//              document.body.classList.remove('blockScroll');
//          });
//          this.$router.beforeEach((to, from, next) => {
//              this.title = to.meta.title;
//              next();
//          })
//      }
//  });

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/login.css":
/*!*********************************!*\
  !*** ./resources/css/login.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/reader.css":
/*!**********************************!*\
  !*** ./resources/css/reader.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/ficbook.css":
/*!***********************************!*\
  !*** ./resources/css/ficbook.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/creater.css":
/*!***********************************!*\
  !*** ./resources/css/creater.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/creater": 0,
/******/ 			"css/ficbook": 0,
/******/ 			"css/reader": 0,
/******/ 			"css/login": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/creater","css/ficbook","css/reader","css/login","css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/creater","css/ficbook","css/reader","css/login","css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_require__.O(undefined, ["css/creater","css/ficbook","css/reader","css/login","css/app"], () => (__webpack_require__("./resources/css/login.css")))
/******/ 	__webpack_require__.O(undefined, ["css/creater","css/ficbook","css/reader","css/login","css/app"], () => (__webpack_require__("./resources/css/reader.css")))
/******/ 	__webpack_require__.O(undefined, ["css/creater","css/ficbook","css/reader","css/login","css/app"], () => (__webpack_require__("./resources/css/ficbook.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/creater","css/ficbook","css/reader","css/login","css/app"], () => (__webpack_require__("./resources/css/creater.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;