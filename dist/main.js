/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lozad/dist/lozad.min.js":
/*!**********************************************!*\
  !*** ./node_modules/lozad/dist/lozad.min.js ***!
  \**********************************************/
/***/ (function(module) {

eval("/*! lozad.js - v1.16.0 - 2020-09-06\n* https://github.com/ApoorvSaxena/lozad.js\n* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */\n!function(t,e){ true?module.exports=e():0}(this,function(){\"use strict\";\n/**\n   * Detect IE browser\n   * @const {boolean}\n   * @private\n   */var g=\"undefined\"!=typeof document&&document.documentMode,f={rootMargin:\"0px\",threshold:0,load:function(t){if(\"picture\"===t.nodeName.toLowerCase()){var e=t.querySelector(\"img\"),r=!1;null===e&&(e=document.createElement(\"img\"),r=!0),g&&t.getAttribute(\"data-iesrc\")&&(e.src=t.getAttribute(\"data-iesrc\")),t.getAttribute(\"data-alt\")&&(e.alt=t.getAttribute(\"data-alt\")),r&&t.append(e)}if(\"video\"===t.nodeName.toLowerCase()&&!t.getAttribute(\"data-src\")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute(\"data-src\"))&&(a[i].src=o);t.load()}t.getAttribute(\"data-poster\")&&(t.poster=t.getAttribute(\"data-poster\")),t.getAttribute(\"data-src\")&&(t.src=t.getAttribute(\"data-src\")),t.getAttribute(\"data-srcset\")&&t.setAttribute(\"srcset\",t.getAttribute(\"data-srcset\"));var n=\",\";if(t.getAttribute(\"data-background-delimiter\")&&(n=t.getAttribute(\"data-background-delimiter\")),t.getAttribute(\"data-background-image\"))t.style.backgroundImage=\"url('\"+t.getAttribute(\"data-background-image\").split(n).join(\"'),url('\")+\"')\";else if(t.getAttribute(\"data-background-image-set\")){var d=t.getAttribute(\"data-background-image-set\").split(n),u=d[0].substr(0,d[0].indexOf(\" \"))||d[0];// Substring before ... 1x\nu=-1===u.indexOf(\"url(\")?\"url(\"+u+\")\":u,1===d.length?t.style.backgroundImage=u:t.setAttribute(\"style\",(t.getAttribute(\"style\")||\"\")+\"background-image: \"+u+\"; background-image: -webkit-image-set(\"+d+\"); background-image: image-set(\"+d+\")\")}t.getAttribute(\"data-toggle-class\")&&t.classList.toggle(t.getAttribute(\"data-toggle-class\"))},loaded:function(){}};function A(t){t.setAttribute(\"data-loaded\",!0)}var m=function(t){return\"true\"===t.getAttribute(\"data-loaded\")},v=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:\".lozad\",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},f,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,g=e.loaded,s=void 0;\"undefined\"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),m(t.target)||(r(t.target),A(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d}));for(var c,l=v(o,i),b=0;b<l.length;b++)(c=l[b]).getAttribute(\"data-placeholder-background\")&&(c.style.background=c.getAttribute(\"data-placeholder-background\"));return{observe:function(){for(var t=v(o,i),e=0;e<t.length;e++)m(t[e])||(s?s.observe(t[e]):(u(t[e]),A(t[e]),g(t[e])))},triggerLoad:function(t){m(t)||(u(t),A(t),g(t))},observer:s}}});\n\n\n//# sourceURL=webpack://my-bookshop/./node_modules/lozad/dist/lozad.min.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-bookshop/./src/style/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _js_slaider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slaider */ \"./src/js/slaider.js\");\n/* harmony import */ var _js_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/cards */ \"./src/js/cards.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-bookshop/./src/index.js?");

/***/ }),

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cards: () => (/* binding */ Cards)\n/* harmony export */ });\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories */ \"./src/js/categories.js\");\n/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lozad */ \"./node_modules/lozad/dist/lozad.min.js\");\n/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_1__);\n\r\n //ленивая загрузка с помощью библиотеки JS\r\nconst observer = lozad__WEBPACK_IMPORTED_MODULE_1___default()();\r\n\r\nclass Cards extends _categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.placeholder = \"../img/placeholder.png\";\r\n    this.buttonLoad = document.querySelector(\".container-load__button-load\");\r\n    this.shopBag = document.querySelector(\".header__shopbag-counter\");\r\n    this.quantityBooks = localStorage.length;\r\n  }\r\n\r\n  // стартовая функция\r\n  addCards() {\r\n    this.startRequest();\r\n    this.booksCategoriesLink();\r\n    this.loadMore();\r\n    this.shopBagActive();\r\n  }\r\n\r\n   async startRequest() {\r\n    this.result = await this.request();\r\n    this.createCards(this.result.items);\r\n  }\r\n\r\n  //создаем карточку книги\r\n  createCards(booksArr) {\r\n    if (!booksArr) return;\r\n\r\n    booksArr.forEach((element, index) => {\r\n      let book = element;\r\n      let idBook = book.id;\r\n      let image = book.volumeInfo.imageLinks?.thumbnail;\r\n      let author = book.volumeInfo.authors;\r\n      let title = book.volumeInfo.title;\r\n      let raiting = book.volumeInfo.averageRating;\r\n      let raitingCount = book.volumeInfo.ratingsCount;\r\n      let description = book.volumeInfo.description?.slice(0, 76);\r\n      let price = book.saleInfo.retailPrice;\r\n      let priceN = `${price?.amount ? price.amount : \"\"} ${\r\n        price?.currencyCode ? price.currencyCode : \"\"\r\n      }`;\r\n      let flagButton = false;\r\n\r\n      //проверка есть-ли книга в корзине\r\n      for (let i = 0; i < localStorage.length; i++) {\r\n        if (localStorage.key(i) === idBook) {\r\n          flagButton = true;\r\n        }\r\n      }\r\n\r\n      //отображение звездочек рейтинга\r\n      let raitingStarActive = \"\";\r\n      if (raiting) {\r\n        for (let i = 0; i < raiting; i++) {\r\n          let starActive = `<img class=\"raiting-star_active\" src=\"../img/Star_a.svg\" alt=\"звезда\" />`;\r\n          raitingStarActive += starActive;\r\n        }\r\n      }\r\n      let raitingStarNoActive = \"\";\r\n      for (let i = 0; i < 5; i++) {\r\n        let starNoActive = `<img src=\"../img/Star.svg\" alt=\"звезда\" />`;\r\n        raitingStarNoActive += starNoActive;\r\n      }\r\n\r\n      // создание html карточки книги\r\n      let newCard = `\r\n  <div class=\"cards__card\" id='${idBook}' attr = \"${\r\n        flagButton === true ? \"buy\" : \"not-buy\"\r\n      }\">\r\n      <img  data-src=\"${\r\n        image ? image : this.placeholder\r\n      }\" class=\"lozad cards__card__img\" src=\"${\r\n        image ? image : this.placeholder\r\n      }\" alt=\"обложка\">\r\n      <div class=\"cards__card__info\">\r\n        <div>\r\n          <p class=\"cards__card__info_author\">${author ? author : \"\"}</p>\r\n          <h2 class=\"cards__card__info_title\">${title}</h2>\r\n          <div class=\"cards__card__info_raiting\">\r\n              <div class=\"cards__card__info_raiting-star\">\r\n                  ${raiting ? raitingStarNoActive + raitingStarActive : \"\"}\r\n              </div>\r\n          <p class=\"cards__card__info_raiting-text\">${\r\n            raitingCount ? raitingCount + \" review\" : \"\"\r\n          }</p>\r\n          </div>\r\n          <p class=\"cards__card__info_description\">${\r\n            description === undefined ? \"\" : description + \"...\"\r\n          }</p>\r\n          <p class=\"cards__card__info_price\">${priceN}</p>\r\n        </div>\r\n        <button class=\"cards__card__info_button ${\r\n          flagButton === true ? \"in-the-cart\" : \"\"\r\n        }\">${flagButton === true ? \"in the cart\" : \"buy now\"}</button>\r\n      </div>\r\n  </div>`;\r\n      this.booksCards.innerHTML += newCard;\r\n    });\r\n    observer.observe();\r\n    this.buttonPutShopBag();\r\n  }\r\n\r\n  // обработчик на кнопку купить\r\n  buttonPutShopBag() {\r\n    this.buttons = document.querySelectorAll(\".cards__card__info_button\");\r\n    this.buttons.forEach((element) => {\r\n      element.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        this.putShopBag(element);\r\n      });\r\n    });\r\n  }\r\n\r\n  // логика добавления товаров в корзину\r\n  putShopBag(element) {\r\n    let book = document.getElementById(element.parentElement.parentElement.id);\r\n    if (book.getAttribute(\"attr\") === \"not-buy\") {\r\n      book.setAttribute(\"attr\", \"buy\");\r\n      book\r\n        .querySelector(\".cards__card__info_button\")\r\n        .classList.toggle(\"in-the-cart\");\r\n      book.querySelector(\".cards__card__info_button\").textContent =\r\n        \"in the cart\";\r\n      this.addLocalStorage(book, element.parentElement.parentElement.id);\r\n      this.shopBagActive();\r\n    } else {\r\n      book.setAttribute(\"attr\", \"not-buy\");\r\n      book\r\n        .querySelector(\".cards__card__info_button\")\r\n        .classList.toggle(\"in-the-cart\");\r\n      book.querySelector(\".cards__card__info_button\").textContent = \"buy now\";\r\n      localStorage.removeItem(element.parentElement.parentElement.id);\r\n      this.shopBagActive();\r\n    }\r\n  }\r\n\r\n  //состояние корзины\r\n  shopBagActive() {\r\n    this.quantityBooks = localStorage.length;\r\n    this.shopBag.innerHTML = this.quantityBooks;\r\n    if (this.quantityBooks > 0) {\r\n      this.shopBag.classList.add(\"active\");\r\n    } else {\r\n      this.shopBag.classList.remove(\"active\");\r\n    }\r\n  }\r\n\r\n  //сохраняем в памяти книги добавленные в корзину\r\n  addLocalStorage(book, id) {\r\n    this.booksArr = {\r\n      id: id,\r\n      author: book.children[1].children[0].children[0].textContent,\r\n      title: book.children[1].children[0].children[1].textContent,\r\n      description: book.children[1].children[0].children[3].textContent,\r\n      price: book.children[1].children[0].children[4].textContent,\r\n    };\r\n    this.booksArrJson = JSON.stringify(this.booksArr);\r\n    localStorage.setItem(id, this.booksArrJson);\r\n  }\r\n\r\n  //  обработчик и подзагрузка элементов по клику по кнопке load more\r\n  loadMore() {\r\n    this.buttonLoad.addEventListener(\"click\", async () => {\r\n      this.startIndex += 6;\r\n      this.startRequest();\r\n    });\r\n  }\r\n}\r\nconst cards = new Cards();\r\ndocument.addEventListener(\"DOMContentLoaded\", cards.addCards());\r\n\n\n//# sourceURL=webpack://my-bookshop/./src/js/cards.js?");

/***/ }),

/***/ "./src/js/categories.js":
/*!******************************!*\
  !*** ./src/js/categories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Categories)\n/* harmony export */ });\nclass Categories {\r\n  constructor() {\r\n    this.keyApi = \"AIzaSyDu65WMGX1lOOiUtj5mcPkbPBgaCgf3F1A\";\r\n    this.categoriesArr = [\r\n      {\r\n        name: \"Architecture\",\r\n        url: \"Architecture\",\r\n      },\r\n      {\r\n        name: \"Art & Fashion\",\r\n        url: \"Art\",\r\n      },\r\n      {\r\n        name: \"Biography\",\r\n        url: \"Biography & Autobiography\",\r\n      },\r\n      {\r\n        name: \"Business\",\r\n        url: \"Business\",\r\n      },\r\n      {\r\n        name: \"Crafts & Hobbies\",\r\n        url: \"Crafts & Hobbies\",\r\n      },\r\n      {\r\n        name: \"Drama\",\r\n        url: \"Drama\",\r\n      },\r\n      {\r\n        name: \"Fiction\",\r\n        url: \"Fiction\",\r\n      },\r\n      {\r\n        name: \"Food & Drink\",\r\n        url: \"Cooking\",\r\n      },\r\n      {\r\n        name: \"Health & Wellbeing\",\r\n        url: \"Health & Fitness\",\r\n      },\r\n      {\r\n        name: \"History & Politics\",\r\n        url: \"History\",\r\n      },\r\n      {\r\n        name: \"Humor\",\r\n        url: \"Humor\",\r\n      },\r\n      {\r\n        name: \"Poetry\",\r\n        url: \"Poetry\",\r\n      },\r\n      {\r\n        name: \"Psychology\",\r\n        url: \"Psychology\",\r\n      },\r\n      {\r\n        name: \"Science\",\r\n        url: \"Science\",\r\n      },\r\n      {\r\n        name: \"Technology\",\r\n        url: \"Technology\",\r\n      },\r\n      {\r\n        name: \"Travel & Maps\",\r\n        url: \"Travel\",\r\n      },\r\n    ];\r\n    this.category = 0;\r\n    this.startIndex = 0;\r\n    this.maxResults = 6;\r\n    this.categories = document.querySelector(\".books__categories\");\r\n    this.link;\r\n    this.booksCards = document.querySelector(\".books__cards\");\r\n  }\r\n\r\n  //создаем запрос на сервер\r\n  async request() {\r\n    try {\r\n      const response = await fetch(\r\n        `https://www.googleapis.com/books/v1/volumes?q=\"subject:${\r\n          this.categoriesArr[this.category].url\r\n        }\"&key=${this.keyApi}&printType=books&startIndex=${\r\n          this.startIndex\r\n        }&maxResults=${this.maxResults}&langRestrict=ru`\r\n      );\r\n      const data = await response.json();\r\n      console.log(data);\r\n      return (this.result = data);\r\n    } catch {\r\n      console.log(\"error\");\r\n    }\r\n  }\r\n\r\n  //создаем блок с категориями\r\n  booksCategoriesLink() {\r\n    this.categoriesArr.forEach((element, index) => {\r\n      this.link = `<div\r\n       class=\"categories__list\">\r\n      <div class=\"categories__dot n${index} ${\r\n        index == 0 ? \"active\" : \"\"\r\n      }\" data-index=${index}></div>\r\n      <h2 class=\"categories__link n${index} ${\r\n        index == 0 ? \"active\" : \"\"\r\n      }\" data-index=${index}>${element.name}\r\n      </h2>\r\n      </div>`;\r\n      this.categories.innerHTML += this.link; //перебираем массив категорий и добавляем в html\r\n    });\r\n    this.links = document.querySelectorAll(\".categories__link\"); //находим все элементы с данным селектором и навешиваем обработчик события по клику\r\n    this.links.forEach((link) => {\r\n      link.addEventListener(\"click\", (e) => {\r\n        e.preventDefault(); //отменяем действия браузера по умолчанию\r\n        this.linkActive(link.dataset.index);\r\n        if (+this.category !== +link.dataset.index) {\r\n          this.category = link.dataset.index;\r\n          this.startIndex = 0;\r\n          this.booksCards.innerHTML = \"\";\r\n          this.startRequest();\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  //удаляем и добавляем active\r\n  linkActive(index) {\r\n    this.categories.querySelectorAll(\".active\").forEach((element) => {\r\n      element.classList.remove(\"active\");\r\n    });\r\n    this.categories.querySelectorAll(`.n${index}`).forEach((element) => {\r\n      element.classList.add(\"active\");\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://my-bookshop/./src/js/categories.js?");

/***/ }),

/***/ "./src/js/slaider.js":
/*!***************************!*\
  !*** ./src/js/slaider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slider: () => (/* binding */ Slider)\n/* harmony export */ });\n// массив с исходными картинками для слайдера\r\nlet images = [\r\n  {\r\n    url: \"img/banner1.png\",\r\n  },\r\n  {\r\n    url: \"img/banner2.png\",\r\n  },\r\n  {\r\n    url: \"img/banner3.png\",\r\n  },\r\n];\r\nclass Slider {\r\n  constructor(images) {\r\n    this.images = images;\r\n    this.autoplayInterval = 5000;\r\n    this.curIndex = 0;\r\n  }\r\n\r\n  initSlider() {\r\n    if (!this.images || !this.images.length) return; \r\n\r\n    let sliderImages = document.querySelector(\".slider__images\"); //находим место куда будем отрисовывать картинки слайдера\r\n    let sliderDots = document.querySelector(\".slider__dots\"); //находим место куда будем отрисовывать точки слайдера\r\n\r\n    this.initImages(sliderImages);\r\n    this.initDots(sliderDots);\r\n    this.initAutoplay();\r\n  }\r\n\r\n// перебираем массив картинок, добавляем класс с индексом, если индекс 0 добавляем activ и вставляем в документ\r\n  initImages(sliderImages) {\r\n    this.images.forEach((image, index) => {\r\n      let elementImg = `<img class=\"slider__img n${index} \r\n      ${index === 0 ? \"active\" : \"\"}\r\n      \"style=\"background-image:url(${\r\n        images[index].url\r\n      });\" data-index=\"${index}\">`;\r\n      sliderImages.innerHTML += elementImg;\r\n    });\r\n  }\r\n\r\n// также для точек\r\n  initDots(sliderDots) {\r\n    this.images.forEach((image, index) => {\r\n      let dots = `<div class=\"slider__dot-item n${index} ${\r\n        index === 0 ? \"active\" : \"\"\r\n      }\" data-index='${index}'></div>`;\r\n      sliderDots.innerHTML += dots;\r\n    });\r\n\r\n    //навешиваем прослушиватель события по клику \r\n    sliderDots.querySelectorAll(\".slider__dot-item\").forEach((dot) => {\r\n      dot.addEventListener(\"click\", () => {\r\n        this.moveSlider(dot.dataset.index); \r\n      });\r\n    });\r\n  }\r\n\r\n//автоперелистывание по кругу\r\ninitAutoplay() {\r\n  setInterval(() => {\r\n    this.nextIndex =\r\n      this.curIndex === images.length - 1 ? 0 : this.curIndex + 1;\r\n    this.moveSlider(this.nextIndex);\r\n  }, this.autoplayInterval);\r\n}\r\n\r\n// перелистование слайда, добавление и удаление active\r\n  moveSlider(index) {\r\n    let sliderImages = document.querySelector(\".slider__images\");\r\n    let sliderDots = document.querySelector(\".slider__dots\");\r\n    sliderImages.querySelector(\".active\").classList.remove(\"active\");\r\n    sliderImages.querySelector(\".n\" + index).classList.add(\"active\");\r\n    sliderDots.querySelector(\".active\").classList.remove(\"active\");\r\n    sliderDots.querySelector(\".n\" + index).classList.add(\"active\");\r\n    this.curIndex = parseInt(index);\r\n  }\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const slider = new Slider(images);\r\n  slider.initSlider();\r\n});\r\n\n\n//# sourceURL=webpack://my-bookshop/./src/js/slaider.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;