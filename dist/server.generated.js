module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"This_is_really_a_secret_Balalala\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_PORT || \"mongodb://\" + (process.env.IP || \"localhost\") + \":\" + (process.env.MONGO_PORT || \"27017\") + \"/mernproject\"\n};\nvar _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/config/config.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/config/config.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\nvar signin = function signin(req, res) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    email: req.body.email\n  }, function (err, user) {\n    if (err || !user) {\n      return res.status(401).json({\n        error: \"User not found\"\n      });\n    }\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status(401).send({\n        error: \"Email and password don't match\"\n      });\n    }\n\n    var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token: token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  });\n};\n\nvar signout = function signout(req, res) {\n  res.clearCookie(\"t\");\n  return res.status(200).json({\n    message: \"signed out\"\n  });\n};\n\nvar requireSignIn = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: \"auth\"\n});\n\nvar hasAuthorized = function hasAuthorized(req, res, next) {\n  var authroized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authroized) {\n    return res.status(403).json({\n      error: \"User is not Authorized\"\n    });\n  }\n\n  next();\n};\n\nvar _default = {\n  signin: signin,\n  signout: signout,\n  requireSignIn: requireSignIn,\n  hasAuthorized: hasAuthorized\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/auth.controller.js\");\n  reactHotLoader.register(requireSignIn, \"requireSignIn\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/auth.controller.js\");\n  reactHotLoader.register(hasAuthorized, \"hasAuthorized\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/auth.controller.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\nvar create = function create(req, res, next) {\n  var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  user.save(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.status(200).json({\n      message: \"Sucessfully signed up!\"\n    });\n  });\n};\n\nvar list = function list(req, res) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(function (err, users) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.json(users);\n  }).select(\"name email updated created\");\n};\n\nvar userByID = function userByID(req, res, next, id) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).exec(function (err, user) {\n    if (err || !user) {\n      return res.status(400).json({\n        error: \"User not found\"\n      });\n    }\n\n    req.profile = user;\n    next();\n  });\n};\n\nvar read = function read(req, res) {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nvar update = function update(req, res, next) {\n  var user = req.profile;\n  user = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.extend(user, req.body);\n  user.updated = Date.now();\n  user.save(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  });\n};\n\nvar remove = function remove(req, res, next) {\n  var user = req.profile;\n  user.remove(function (err, deletedUser) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\nvar _default = {\n  create: create,\n  list: list,\n  userByID: userByID,\n  read: read,\n  update: update,\n  remove: remove\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/controllers/user.controller.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devbundle.js":
/*!*****************************!*\
  !*** ./server/devbundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/devbundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/devbundle.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devbundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _devbundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devbundle */ \"./server/devbundle.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\n\n //Only for development\n\n\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_devbundle__WEBPACK_IMPORTED_MODULE_7__[\"default\"].compile(app); //Only for development\n//configure the body-parser\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_5___default()()); //securing apps by setting various HTTP headers\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()()); //cors -Cross origin Resource Sharing\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(\"/dist\", express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, \"dist\")));\napp.use(\"/\", _routes_user_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use(\"/\", _routes_auth_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.get(\"/\", function (req, res) {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\n});\napp.use(function (err, req, res, next) {\n  if (err.name === \"UnauhtorizedError\") {\n    res.status(401).json({\n      error: err.name + \":\" + err.message\n    });\n  }\n});\nvar _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/express.js\");\n  reactHotLoader.register(app, \"app\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/express.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {\n/**\n * Get unique error field name\n */\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n  var output;\n\n  try {\n    var fieldName = err.message.substring(err.message.lastIndexOf(\".$\") + 2, err.message.lastIndexOf(\"_1\"));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + \" already exists\";\n  } catch (ex) {\n    output = \"Unique field already exists\";\n  }\n\n  return output;\n};\n/**\n * Get the error message from error object\n */\n\n\nvar getErrorMessage = function getErrorMessage(err) {\n  var message = \"\";\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = \"Something went wrong\";\n    }\n  } else {\n    for (var errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nvar _default = {\n  getErrorMessage: getErrorMessage\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/helpers/dbErrorHandler.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is Required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email Already Exists\",\n    match: [/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/, \"please fill a valid email address\"],\n    required: \"Email is Required\"\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is Required\"\n  },\n  salt: String,\n  created: {\n    type: Date,\n    default: Date.now()\n  },\n  updated: Date\n});\nUserSchema.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path(\"hashed_password\").validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate(\"password\", \"Password must be at least 6 characters.\");\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate(\"password\", \"Password is required\");\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function authenticate(plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return \"\";\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a //is inbuilt node modules to generate hashed string\n      .createHmac(\"sha1\", this.salt).update(password).digest(\"hex\");\n    } catch (err) {\n      return \"\";\n    }\n  },\n  makeSalt: function makeSalt() {\n    return Math.round(new Date().valueOf() * Math.random()) + \"\";\n  }\n};\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/models/user.model.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route(\"/auth/signin\").post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route(\"/auth/signOut\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\nvar _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/routes/auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/routes/auth.routes.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route(\"/api/users/\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route(\"/api/users/:userId\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignIn, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignIn, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorized, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignIn, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorized, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param(\"userId\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nvar _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/server/routes/user.routes.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n //mongoose setup\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useCreateIndex: true,\n  useNewUrlParser: true\n}).then(function () {\n  console.log(\"Connected to the Database\");\n}).catch(function (err) {\n  console.log(\"There is some error with Database \".concat(err));\n});\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, function (err) {\n  if (err) console.log(err);\n  console.info(\"server started at port %s\", _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default() {\n  return \"<!DOCTYPE html>\\n  <html lang=\\\"en\\\" dir=\\\"ltr\\\">\\n    <head>\\n      <meta charset=\\\"utf-8\\\">\\n      <title>Mern Skeleton</title>\\n      <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\\\">\\n      <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\"></div>\\n      <script type='text/javascript' src='/dist/bundle.js'></script>\\n    </body>\\n  </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/template.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: [\"react-hot-loader/patch\", \"webpack-hot-middleware/client?reload=true\", path.join(CURRENT_WORKING_DIR, \"client/main.js\")],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, \"/dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: \"file-loader\"\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/rootdad/Desktop/Projects/mern_skeleton/webpack.config.client.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/rootdad/Desktop/Projects/mern_skeleton/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });