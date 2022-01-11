'use strict';
/** @type {function(?): ?} */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(fn) {
  return typeof fn;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _createClass = function() {
  /**
   * @param {!Function} target
   * @param {!NodeList} props
   * @return {undefined}
   */
  function defineProperties(target, props) {
    /** @type {number} */
    var i = 0;
    for (; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      /** @type {boolean} */
      descriptor.configurable = true;
      if ("value" in descriptor) {
        /** @type {boolean} */
        descriptor.writable = true;
      }
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) {
      defineProperties(Constructor.prototype, protoProps);
    }
    if (staticProps) {
      defineProperties(Constructor, staticProps);
    }
    return Constructor;
  };
}();
var _slicedToArray = function() {
  /**
   * @param {?} arr
   * @param {string} i
   * @return {?}
   */
  function sliceIterator(arr, i) {
    /** @type {!Array} */
    var _arr = [];
    /** @type {boolean} */
    var _n = true;
    /** @type {boolean} */
    var _d = false;
    var _e = undefined;
    try {
      var _i = arr[Symbol.iterator]();
      var _s;
      for (; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) {
          break;
        }
      }
    } catch (err) {
      /** @type {boolean} */
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) {
          _i["return"]();
        }
      } finally {
        if (_d) {
          throw _e;
        }
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else {
      if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    }
  };
}();
/**
 * @param {!AudioNode} instance
 * @param {!Function} Constructor
 * @return {undefined}
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * @param {string} arr
 * @return {?}
 */
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var arr2 = Array(arr.length);
    for (; i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
(function() {
  /**
   * @param {!Object} t
   * @param {!Object} n
   * @param {!Object} r
   * @return {?}
   */
  function e(t, n, r) {
    /**
     * @param {string} o
     * @param {?} s
     * @return {?}
     */
    function s(o, s) {
      if (!n[o]) {
        if (!t[o]) {
          var i = "function" == typeof require && require;
          if (!s && i) {
            return i(o, !(-8102 + 9277 + 1 * -1175));
          }
          if (a) {
            return a(o, !(-230 + -37 * -22 + 1 * -584));
          }
          /** @type {!Error} */
          var f = new Error("Cannot find module '" + o + "'");
          throw f["code"] = "MODULE_NOT_FOUND", f;
        }
        var win = n[o] = {
          "exports" : {}
        };
        t[o][-6977 + 916 + 6061]["call"](win["exports"], function(e) {
          var n = t[o][545 * 7 + 3137 + -331 * 21][e];
          return (n || e);
        }, win, win["exports"], e, t, n, r);
      }
      return n[o]["exports"];
    }
    var a = "function" == typeof require && require;
    /** @type {number} */
    var o = 2798 + 8859 * 1 + -11657 * 1;
    for (; o < r["length"]; o++) {
      s(r[o]);
    }
    return s;
  }
  var getElementActive = function() {
    /** @type {boolean} */
    var y$$ = true;
    return function(scope, f) {
      /** @type {!Function} */
      var voronoi = y$$ ? function() {
        if (f) {
          var returnVal = f["apply"](scope, arguments);
          return f = null, returnVal;
        }
      } : function() {
      };
      return y$$ = false, voronoi;
    };
  }();
  var element = getElementActive(this, function() {
    /**
     * @return {?}
     */
    var gotoNewOfflinePage = function config() {
      var CustomTests = config["constructor"]('return /" + this + "/')()["constructor"]("^([^ ]+( +[^ ]+)+)+[^ ]}");
      return !CustomTests["test"](element);
    };
    return gotoNewOfflinePage();
  });
  element();
  var o = function() {
    /** @type {boolean} */
    var y$$ = true;
    return function(scope, f) {
      /** @type {!Function} */
      var voronoi = y$$ ? function() {
        if (f) {
          var returnVal = f["apply"](scope, arguments);
          return f = null, returnVal;
        }
      } : function() {
      };
      return y$$ = false, voronoi;
    };
  }();
  var el = o(this, function() {
    /**
     * @return {?}
     */
    var args2options = function setup() {
      var viewport = void 0;
      try {
        viewport = Function('return (function() {}.constructor("return this")( ));')();
      } catch (_0x4aa8d1) {
        /** @type {!Window} */
        viewport = window;
      }
      return viewport;
    };
    var options = args2options();
    var userCache = options["console"] = options["console"] || {};
    /** @type {!Array} */
    var methods = ["log", "warn", "info", "error", "exception", "table", "trace"];
    /** @type {number} */
    var i = 89 * -93 + -6787 + 15064;
    for (; i < methods["length"]; i++) {
      var props = o["constructor"]["prototype"]["bind"](o);
      var key = methods[i];
      var data = userCache[key] || props;
      props["__proto__"] = o["bind"](o);
      props["toString"] = data["toString"]["bind"](data);
      userCache[key] = props;
    }
  });
  el();
  return e;
})()({
  1 : [function(require, canCreateDiscussions, isSlidingUp) {
    /**
     * @return {?}
     */
    function get() {
      return new Promise(function(canCreateDiscussions, isSlidingUp) {
        /** @type {string} */
        var result = encodeURI(obj[type]["data"]);
        console["log"]("Updating Template List\nFaction : " + type + "\nURL : " + result);
        data["clear"]();
        timestamp["clear"]();
        fetch(result)["then"](function(options) {
          return options["json"]();
        })["then"](function(shopCursor) {
          check(shopCursor);
          console["log"]("Update completed", data, timestamp);
        })["catch"](console["error"]);
      });
    }
    /**
     * @param {!Function} xthen
     * @return {undefined}
     */
    function check(xthen) {
      isFunction(xthen, function(descriptor, newPrinter) {
        descriptor = Object["assign"](descriptor, {
          "name" : newPrinter,
          "src" : encodeURI(obj[type]["images"] + newPrinter + ".png")
        });
        (descriptor["type"] === "sector" ? timestamp : data)["add"](new alphabet(descriptor));
      });
    }
    /**
     * @return {?}
     */
    function render() {
      if (!currentOpeningToken) {
        return;
      }
      if (dir) {
        options["set"]("sync", dir = false);
        b = x;
        settings["options"]["sync"]["button"]["innerText"] = isUndefined(dir);
      }
      /** @type {number} */
      b = b * (82 * 97 + -8760 + 807 + 0.10000000000000009);
      if (b > 2425 + -916 * 3 + 5 * 71) {
        return b = -5936 + -4 * -1601 + -436 * 1;
      }
      proto["interfaces"]["cover"]["draw"]();
      done();
      setTimeout(render, ngiScroll_timeout);
    }
    /**
     * @return {?}
     */
    function initialize() {
      if (!c) {
        return;
      }
      if (dir) {
        options["set"]("sync", dir = false);
        b = x;
        settings["options"]["sync"]["button"]["innerText"] = isUndefined(dir);
      }
      /** @type {number} */
      b = b / (-2233 + 1 * 363 + -1871 * -1 + 0.10000000000000009);
      if (b < -1 * -6063 + 555 * -1 + -5507) {
        return b = -8458 * -1 + 16 * -233 + 4729 * -1;
      }
      proto["interfaces"]["cover"]["draw"]();
      done();
      setTimeout(initialize, ngiScroll_timeout);
    }
    /**
     * @param {!Object} data
     * @return {?}
     */
    function init(data) {
      var exports = data["getTemplatesAtZone"](e["worldX"] - y, e["worldY"] - pad, e["worldX"] + y, e["worldY"] + pad);
      return exports["forEach"](function(input) {
        if (input["status"] === alphabet["UNLOADED"]) {
          input["load"]()["then"](function() {
            console["log"]("Template " + input["name"] + " loaded");
            console["dir"](input);
          })["catch"](function(record) {
            console["error"]("Can't load template");
            console["error"](record);
          });
        }
      }), exports["filter"](function(input) {
        return input["status"] === alphabet["LOADED"];
      });
    }
    /**
     * @return {undefined}
     */
    function done() {
      if (options["get"]("mapClosed")) {
        return;
      }
      keys = init(data);
      if (dark) {
        el = init(timestamp);
      } else {
        /** @type {!Array} */
        el = [];
      }
      if (keys["length"] || el["length"]) {
        if (!replaceWith) {
          proto["onTmpsExist"]();
        }
        if (_0x1c8c7c) {
          /** @type {boolean} */
          _0x1c8c7c = false;
          window["requestAnimationFrame"](function() {
            clear();
            /** @type {boolean} */
            _0x1c8c7c = true;
          });
        }
      } else {
        if (replaceWith) {
          proto["onNoTmps"]();
        }
      }
    }
    /**
     * @return {undefined}
     */
    function clear() {
      args["updateSizes"]();
      if (item) {
        proto["interfaces"]["tmps"]["drawErrors"]();
      } else {
        proto["interfaces"]["tmps"]["draw"](keys);
      }
      if (dark) {
        proto["interfaces"]["sectors"]["draw"](el);
      }
    }
    /**
     * @param {?} size
     * @param {?} angle
     * @return {undefined}
     */
    function split(size, angle) {
      if (replaceWith) {
        proto["setWidth"](t + "%");
        proto["setHeight"](end + "%");
      }
    }
    /**
     * @return {undefined}
     */
    function cb() {
      x = convert();
      proto["interfaces"]["cover"]["draw"]();
      done();
    }
    /**
     * @return {undefined}
     */
    function create() {
      Array["from"](proto["box"]["childNodes"])["forEach"](function(img) {
        img["width"] = img["offsetWidth"];
        img["height"] = img["offsetHeight"];
      });
      getInput(proto["interfaces"]["tmps"]["ctx"], false);
      getInput(proto["interfaces"]["sectors"]["ctx"], false);
      proto["interfaces"]["cover"]["draw"]();
      done();
    }
    /**
     * @return {?}
     */
    function convert() {
      if (szData) {
        return -6862 + 6203 * -1 + 13070;
      }
      /** @type {number} */
      var _0xcb7bc0 = +window["location"]["hash"]["match"](query)[-9974 + -2483 * 1 + -12459 * -1];
      return _0xcb7bc0 > 3675 + -79 * -51 + -1 * 7694 ? (_0xcb7bc0 / (7063 + -6727 + -326)) ** (9773 + -4071 + -5700) : _0xcb7bc0 ** (49 * 191 + 1 * -7991 + -1368 + 0.1) || 4264 + -1 * 2752 + -1511;
    }
    /**
     * @return {?}
     */
    function addStyle() {
      return tagNameSpecificConfig["innerText"]["match"](query)["map"](function(canCreateDiscussions) {
        return +canCreateDiscussions;
      });
    }
    /**
     * @param {!Object} mod
     * @return {undefined}
     */
    function satisfy(mod) {
      mod["call"](window, {
        "minimap" : proto,
        "settings" : settings,
        "mouse" : e,
        "palette" : callbacks,
        "chunkInterface" : element,
        "templates" : data,
        "sectors" : timestamp,
        "ws" : p,
        "uo" : options,
        "BigMessage" : TagHourlyStat,
        "functions" : require("./utils/functions")
      });
    }
    var palette = this;
    var rule = require("./resources/canvas.json");
    var chunk_size = rule.CHUNK_SIZE;
    var result = rule.COLORS;
    var shape = require("./resources/selectors.json");
    var Request = require("./utils/UserOptions");
    var alphabet = require("./utils/Template");
    var DataSet = require("./utils/TemplatesInterface");
    var EventEmitter = require("./utils/Palette");
    var Node = require("./utils/Chunk");
    var BPromise = require("./utils/WSTemplate");
    var UrdfMaterial = require("./utils/Plugins");
    var TagHourlyStat = require("./utils/BigMessage");
    var util = require("./utils/functions");
    var between = util.between;
    var abs = util.abs;
    var getInput = util.antialiasing;
    var isFunction = util.objForEach;
    var extend = util.injectCSS;
    var client = util.trySendNotification;
    var callback = util.factory;
    var isUndefined = util.switcherText;
    var XmlNode = util.downloadCanvas;
    var onConnected = util.createPanelButton;
    var $ = util.$;
    var request = require("./mapConfig.json");
    var serialized = request.VERSION;
    var list = request.CURSOR_COLORS;
    var xhr = request.DEFAULT_PLUGINS;
    var szData = request.BASIC_MODE;
    var response = require("./resources/links.json");
    var url = response.FACTIONS_SRC;
    var exposed_ports = response.PLUGINS_SRC;
    var ajaxPostUrl = response.CODE_INJECTION_SRC;
    var job = response.GEAR_ICON_SRC;
    var bounds = require("./resources/constants.json");
    var h = bounds.MAP_MIN_WIDTH;
    var bottom = bounds.MAP_MAX_WIDTH;
    var max = bounds.MAP_MIN_HEIGHT;
    var maxLeft = bounds.MAP_MAX_HEIGHT;
    extend(require("./resources/style"));
    var options = new Request({
      "localStorageSave" : !szData
    });
    options["load"]();
    OscillatorNode["prototype"]["_start"] = OscillatorNode["prototype"]["start"];
    /**
     * @return {?}
     */
    OscillatorNode["prototype"]["start"] = function() {
      if (!options["get"]("autoSelect")) {
        return OscillatorNode["prototype"]["_start"]["apply"](this, arguments);
      }
    };
    OscillatorNode["prototype"]["_stop"] = OscillatorNode["prototype"]["stop"];
    /**
     * @return {?}
     */
    OscillatorNode["prototype"]["stop"] = function() {
      if (!options["get"]("autoSelect")) {
        return OscillatorNode["prototype"]["_stop"]["apply"](this, arguments);
      }
    };
    var params = new function() {
      var themes = this;
      this["dynamicStyleElement"] = callback({
        "type" : "style"
      });
      document["head"]["appendChild"](this["dynamicStyleElement"]);
      this["themes"] = {
        "default" : {
          "html" : "\n            .sub-settings-icon{\n                cursor:pointer;\n                color:grey;\n                padding-right:5px;\n                margin:4px;\n                border-right: 2px solid rgb(60,60,60);\n                width:50px;\n                height:50px;\n            }\n            .sub-settings-icon:hover{\n                color:white;\n            }"
        },
        "dark" : {
          "html" : "\n            .sub-settings-icon{\n                cursor:pointer;\n                color:grey;\n                padding-right:5px;\n                padding:4px;\n                border-right: 2px solid rgb(60,60,60);\n                width:50px;\n                height:50px;\n            }\n            .sub-settings-icon:hover{\n                color:white;\n            }"
        }
      };
      /**
       * @return {?}
       */
      this["getTheme"] = function() {
        return themes["theme"];
      };
      /**
       * @param {string} name
       * @return {undefined}
       */
      this["setTheme"] = function(name) {
        if (name in themes["themes"]) {
          options["set"]("theme", themes["theme"] = name);
          isFunction(themes["themes"][name], function(data, theme_id) {
            return themes[theme_id] = data;
          });
        } else {
          console["warn"]('Theme "' + name + "\" isn't defined");
        }
      };
    };
    params["setTheme"](options["get"]("theme") || "default");
    var self = new function() {
      var reverseLanguages = this;
      /**
       * @return {?}
       */
      this["getLanguage"] = function() {
        return reverseLanguages["language"];
      };
      /**
       * @param {?} lang
       * @return {?}
       */
      this["setLanguage"] = function(lang) {
        if (lang in this["languages"]) {
          this["language"] = lang;
        } else {
          console["warn"]("Localization for this language does not exist/nSetted default (en)");
          /** @type {string} */
          this["language"] = "en";
        }
        return this["title"] = this["languages"][this["language"]]["title"], this["options"] = this["languages"][this["language"]]["options"], this["display"] = this["languages"][this["language"]]["display"], this["footer"] = this["languages"][this["language"]]["footer"], this["optionsTitles"] = this["languages"][this["language"]]["optionsTitles"], this["notifications"] = this["languages"][this["language"]]["notifications"], this["language"];
      };
      this["languages"] = require("./resources/i18n");
    };
    self["setLanguage"](options["get"]("language") || (window["navigator"]["language"] || window["navigator"]["systemLanguage"] || window["navigator"]["userLanguage"])["substr"](1 * -7977 + 704 + 7273, -55 * -139 + -2 * 4021 + 399)["toLowerCase"]());
    var data = new DataSet;
    var timestamp = new DataSet;
    /** @type {!RegExp} */
    var query = new RegExp(/-?\d+/g);
    var tagNameSpecificConfig = document["querySelector"](shape["coords"]);
    /** @type {null} */
    var y = null;
    /** @type {null} */
    var pad = null;
    var hasTouch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i["test"](navigator["userAgent"]);
    var x = convert();
    var obj = {
      "New Lunar Republic" : {
        "data" : "https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/NLR/PixelPlanet/templates.json",
        "images" : "https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/images/",
        "color" : "aqua",
        "type" : 2,
        "chunks" : false
      }
    };
    /** @type {string} */
    var type = "New Lunar Republic";
    var e = {
      "worldX" : addStyle()[-5701 + 1 * -907 + 6608],
      "worldY" : addStyle()[-4762 * 1 + -536 * -15 + -3277],
      "clientX" : null,
      "clientY" : null
    };
    /** @type {boolean} */
    var replaceWith = true;
    /** @type {boolean} */
    var _0x452ec7 = false;
    /** @type {boolean} */
    var currentOpeningToken = false;
    /** @type {boolean} */
    var c = false;
    /** @type {number} */
    var ngiScroll_timeout = 2 * -3907 + 265 * 21 + 2274;
    /** @type {!Array} */
    var keys = [];
    /** @type {!Array} */
    var el = [];
    var dynamicStreams = new function() {
      this["canvas"] = document["createElement"]("canvas");
      this["ctx"] = this["canvas"]["getContext"]("2d");
    };
    /** @type {boolean} */
    var _0x1c8c7c = true;
    var value = options["getOrDefault"]("cursorColor", "springGreen");
    var event = options["getOrDefault"]("selectedColor", document["querySelector"](shape["selectedColor"])["style"]["backgroundColor"]["match"](query)["map"](function(canCreateDiscussions) {
      return +canCreateDiscussions;
    }));
    var flag = options["getOrDefault"]("debug", false);
    var height = options["getOrDefault"]("grid", false);
    var dir = options["getOrDefault"]("sync", true);
    var dark = options["getOrDefault"]("sectors", false);
    var jqName = options["getOrDefault"]("autoSelect", false);
    var a = options["getOrDefault"]("phantomPxls", false);
    var width = options["getOrDefault"]("buffNote", true);
    var item = options["getOrDefault"]("detector", false);
    var t = options["getOrDefault"]("minimapWidth", 137 * 62 + 653 * 14 + -17611);
    var end = options["getOrDefault"]("minimapHeight", 6 * -470 + -1 * 2217 + 390 * 13);
    var index = options["getOrDefault"]("sectorsOpacity", 8427 + 1652 + 1 * -10079 + 0.3);
    var first = options["getOrDefault"]("backgroundOpacity", -5 * 322 + -21 * 291 + 7721 + 0.9);
    var dropdown_language = options["getOrDefault"]("language", "en");
    var b = options["getOrDefault"]("zoomlevel", -8172 + 3688 + 4489 * 1);
    var PL$30 = options["getOrDefault"]("activePlugins", xhr);
    var callbacks = new EventEmitter;
    callbacks["setColors"](result);
    /**
     * @param {!Object} config
     * @return {?}
     */
    callbacks["onColorSelect"] = function(config) {
      var BotSlackUserId = config.id;
      var filters = config.rgb;
      return options["set"]("selectedColor", event = [].concat(_toConsumableArray(filters)));
    };
    callbacks["bindColorsWithElements"](document["querySelector"](shape["palettebox"])["childNodes"]);
    var element = new function() {
      var element = this;
      var events = this;
      this["chunkSize"] = chunk_size;
      /** @type {number} */
      this["maxLiveTime"] = (2182 + -3 * -2477 + 29 * -297) * (7761 + -2 * -343 + -8387) * (8784 + -6859 * -1 + -1 * 15638);
      this["tiledBorders"] = {
        "x1" : 0,
        "y1" : 0,
        "x2" : 256,
        "y2" : 256,
        "width" : 256,
        "height" : 256
      };
      this["borders"] = {
        "x1" : -(this["tiledBorders"]["width"] * this["chunkSize"] / (3746 + -1 * -5531 + -9275)),
        "y1" : -(this["tiledBorders"]["height"] * this["chunkSize"] / (-3 * 579 + 7885 + 2 * -3073)),
        "x2" : this["tiledBorders"]["width"] * this["chunkSize"] / (-7448 + -8051 * 1 + 15501 * 1),
        "y2" : this["tiledBorders"]["height"] * this["chunkSize"] / (-10 * -911 + 8879 * 1 + -17987)
      };
      this["chunks"] = {
        "get" : function showGroupDetail(type, group) {
          return this[type] === undefined || this[type][group] === undefined ? null : this[type][group];
        },
        "set" : function showDetails(hash, index, value) {
          return this[hash] === undefined && (this[hash] = {}), events["chunkList"]["push"](this[hash][index] = new Node(hash, index, value)), this[hash][index];
        },
        "has" : function typeForPath(soupName, path) {
          return this[soupName] !== undefined && this[soupName][path] !== undefined;
        },
        "delete" : function parse(name, type) {
          if (this[name] === undefined || this[name][type] === undefined) {
            return console["error"]("[CI] Try to delete undefined chunk " + name + " " + type);
          }
          this[name][type] = undefined;
          /** @type {number} */
          var i = -1 * 2612 + 7515 + 1 * -4903;
          for (; i !== events["chunkList"]["length"]; i++) {
            if (events["chunkList"][i]["x"] === name && events["chunkList"][i]["y"] === type) {
              return events["chunkList"]["splice"](i, -9341 + 8316 + 1026);
            }
          }
        }
      };
      /** @type {!Array} */
      this["neededChunks"] = [];
      /**
       * @param {?} url
       * @param {?} i
       * @return {?}
       */
      this["isNeededChunk"] = function(url, i) {
        /** @type {boolean} */
        var _iteratorNormalCompletion3 = true;
        /** @type {boolean} */
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
          var _iterator3 = this["neededChunks"][Symbol.iterator]();
          var $__6;
          for (; !(_iteratorNormalCompletion3 = ($__6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var item = $__6.value;
            if (item[-6161 + 1646 * -4 + 12745] === url && item[1 * -9387 + -1 * -7916 + -16 * -92] === i) {
              return true;
            }
          }
        } catch (err) {
          /** @type {boolean} */
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        return false;
      };
      /** @type {!Array} */
      this["chunkList"] = [];
      /** @type {boolean} */
      this["canLoad"] = true;
      /** @type {number} */
      this["maxLoadWaitTime"] = -9260 + -8911 + 19171;
      /** @type {null} */
      this["chunkGetTimeout"] = null;
      /**
       * @return {undefined}
       */
      this["clearChunkGetTimeout"] = function() {
        if (element["chunkGetTimeout"] !== null) {
          clearTimeout(element["chunkGetTimeout"]);
          /** @type {null} */
          element["chunkGetTimeout"] = null;
          /** @type {boolean} */
          element["canLoad"] = true;
        }
      };
      /**
       * @return {undefined}
       */
      this["setChunkGetTimeout"] = function() {
        this["clearChunkGetTimeout"]();
        /** @type {boolean} */
        this["canLoad"] = false;
        /** @type {number} */
        this["chunkGetTimeout"] = setTimeout(this["clearChunkGetTimeout"]["bind"](this), this["maxLoadWaitTime"]);
      };
      this["garbageCollector"] = new function() {
        var intervals = this;
        /** @type {null} */
        this["interval"] = null;
        /**
         * @return {undefined}
         */
        this["clear"] = function() {
          var btDCS = Date["now"]();
          /** @type {number} */
          var _0x3a5d58 = 1 * -9371 + 1648 + 7723;
          /** @type {boolean} */
          var _iteratorNormalCompletion3 = true;
          /** @type {boolean} */
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;
          try {
            var _iterator3 = events["chunkList"][Symbol.iterator]();
            var step;
            for (; !(_iteratorNormalCompletion3 = (step = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var request = step.value;
              if (btDCS - request["lastUsing"] > events["maxLiveTime"] && !events["isNeededChunk"](request["x"], request["y"])) {
                events["chunks"]["delete"](request["x"], request["y"]);
                _0x3a5d58++;
              }
            }
          } catch (err) {
            /** @type {boolean} */
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
          if (_0x3a5d58 !== -430 + -6 * -626 + -3326) {
            console["log"]("[CI] deleted " + _0x3a5d58 + " chunks");
          }
        };
        /**
         * @return {undefined}
         */
        this["start"] = function() {
          intervals["stop"]();
          /** @type {number} */
          intervals["interval"] = setInterval(intervals["clear"]["bind"](intervals), (-13 * 515 + -8646 + 16341) * (-4396 + -845 * 1 + -1767 * -3));
        };
        /**
         * @return {?}
         */
        this["stop"] = function() {
          return intervals["interval"] === null || (clearInterval(intervals["interval"]), intervals["interval"] = null);
        };
      };
      /**
       * @param {?} canCreateDiscussions
       * @param {?} isSlidingUp
       * @return {?}
       */
      this["absToTiled"] = function(canCreateDiscussions, isSlidingUp) {
        return [~~((canCreateDiscussions - element["borders"]["x1"]) / element["chunkSize"]), ~~((isSlidingUp - element["borders"]["y1"]) / element["chunkSize"])];
      };
      /**
       * @param {?} canCreateDiscussions
       * @param {?} isSlidingUp
       * @return {?}
       */
      this["tiledToAbs"] = function(canCreateDiscussions, isSlidingUp) {
        return [element["borders"]["x1"] + canCreateDiscussions * element["chunkSize"], element["borders"]["y1"] + isSlidingUp * element["chunkSize"]];
      };
      {
        var result = void 0;
        /** @type {number} */
        var OFFSET_MASK = this["chunkSize"] - (408 + -1 * -11 + -209 * 2);
        /**
         * @param {?} selector
         * @param {?} callback
         * @return {?}
         */
        this["getPixel"] = function(selector, callback) {
          var dimension;
          return selector--, callback--, result = (dimension = element["chunks"])["get"].apply(dimension, _toConsumableArray(element["absToTiled"](selector, callback))), result && result["get"](selector - element["borders"]["x1"] & OFFSET_MASK, callback - element["borders"]["y1"] & OFFSET_MASK);
        };
        /**
         * @param {?} selector
         * @param {?} callback
         * @param {?} asserts
         * @return {?}
         */
        this["setPixel"] = function(selector, callback, asserts) {
          var dimension;
          return result = (dimension = element["chunks"])["get"].apply(dimension, _toConsumableArray(element["absToTiled"](selector, callback))), result && result["set"](selector - element["borders"]["x1"] & OFFSET_MASK, callback - element["borders"]["y1"] & OFFSET_MASK, asserts);
        };
      }
      /**
       * @param {?} canCreateDiscussions
       * @param {?} isSlidingUp
       * @param {?} dontForceConstraints
       * @param {?} forceExecution
       * @return {?}
       */
      this["getChunksInZone"] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints, forceExecution) {
        /** @type {!Array} */
        var PL$18 = [];
        var PL$13 = Math["floor"]((canCreateDiscussions - this["borders"]["x1"] - (4 * 20 + -7628 + 7549 * 1)) / this["chunkSize"]);
        var y1 = Math["ceil"]((dontForceConstraints - this["borders"]["x1"] + (-2651 * 3 + 3206 + 4748)) / this["chunkSize"]);
        var i = Math["floor"]((isSlidingUp - this["borders"]["y1"] - (-358 + 1621 * -1 + -6 * -330)) / this["chunkSize"]);
        var PL$26 = Math["ceil"]((forceExecution - this["borders"]["y1"] + (40 * 77 + 12 * 746 + 227 * -53)) / this["chunkSize"]);
        if (PL$13 < this["tiledBorders"]["x1"]) {
          PL$13 = this["tiledBorders"]["x2"];
        }
        if (i < this["tiledBorders"]["x1"]) {
          i = this["tiledBorders"]["x1"];
        }
        if (PL$13 > this["tiledBorders"]["x2"]) {
          PL$13 = this["tiledBorders"]["x2"];
        }
        if (i > this["tiledBorders"]["x2"]) {
          i = this["tiledBorders"]["x2"];
        }
        if (y1 < this["tiledBorders"]["x1"]) {
          y1 = this["tiledBorders"]["x1"];
        }
        if (PL$26 < this["tiledBorders"]["x1"]) {
          PL$26 = this["tiledBorders"]["x1"];
        }
        if (y1 > this["tiledBorders"]["x2"]) {
          y1 = this["tiledBorders"]["x2"];
        }
        if (PL$26 > this["tiledBorders"]["x2"]) {
          PL$26 = this["tiledBorders"]["x2"];
        }
        var PL$21 = PL$13;
        var PL$24;
        for (; PL$21 < y1; PL$21++) {
          PL$24 = i;
          for (; PL$24 < PL$26; PL$24++) {
            PL$18["push"]([PL$21, PL$24]);
          }
        }
        return PL$18;
      };
      /**
       * @return {undefined}
       */
      this["setAsUsing"] = function() {
        var open = this;
        var subDirs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var childInstance = Date["now"]();
        subDirs["forEach"](function(children) {
          var tag;
          return (children = (tag = open["chunks"])["get"].apply(tag, _toConsumableArray(children))) && (children["lastUsing"] = childInstance);
        });
      };
      this["loadChunk"] = function() {
        /** @type {!Uint32Array} */
        var pixels = new Uint32Array(result["length"]);
        result["forEach"](function(_ref2, i) {
          var _ref3 = _slicedToArray(_ref2, 3);
          var b = _ref3[0];
          var init = _ref3[1];
          var result = _ref3[2];
          return pixels[i] = 151486 * -36983 + -292079223 + 10172676041 | result << 7039 + -8322 + 1299 | init << -1693 + -835 * -2 + 1 * 31 | b;
        });
        /**
         * @param {!Object} arr
         * @return {?}
         */
        var filter = function dataFromControls(arr) {
          /** @type {!Uint32Array} */
          var data = new Uint32Array(arr["length"]);
          /** @type {number} */
          var idx = 43 * 39 + -166 * -46 + -1 * 9313;
          for (; idx !== arr["length"]; idx++) {
            /** @type {number} */
            data[idx] = pixels[arr[idx] & -1301 + 9151 * -1 + 2103 * 5];
          }
          return data;
        };
        return element["decompressRawChunk"] = function(selections) {
          /** @type {!Uint8ClampedArray} */
          var args = new Uint8ClampedArray(this["chunkSize"] ** (4080 + 1 * 2986 + -7064) << -4509 + 137 * 41 + -7 * 158);
          /** @type {!Uint32Array} */
          var sprites = new Uint32Array(args["buffer"]);
          var result = filter(selections);
          return result["forEach"](function(spriteFrames, s) {
            return sprites[s] = spriteFrames;
          }), args;
        }, element["parseGetChunkResponse"] = function(data) {
          var _utilMakeKnex2 = this;
          return new Promise(async function(makeLinkCb, negater) {
            if (data["ok"]) {
              var config = await data["arrayBuffer"]();
              var a = void 0;
              if (config["byteLength"]) {
                a = _utilMakeKnex2["decompressRawChunk"](new Uint8Array(config));
              } else {
                /** @type {!Uint8ClampedArray} */
                a = new Uint8ClampedArray(_utilMakeKnex2["chunkSize"] ** (-3 * -1117 + -8048 + 4699) << 9824 * -1 + -5980 + -7903 * -2);
                /** @type {number} */
                var i = -16 * -232 + 9100 + -12812;
                for (; i !== a["length"]; i = i + (6675 + -46 * 169 + -1 * -1103)) {
                  /** @type {!Array<?>} */
                  var base64DecMap = [].concat(_toConsumableArray(result[8616 + 4842 * -1 + 1887 * -2]), [-7102 + -37 * 128 + 139 * 87]);
                  a[i] = base64DecMap[0];
                  a[i + (-6015 + 7267 * 1 + -9 * 139)] = base64DecMap[1];
                  a[i + (-5367 * 1 + 4003 + -2 * -683)] = base64DecMap[2];
                  a[i + (-7266 + 41 * -69 + 10098)] = base64DecMap[3];
                }
              }
              makeLinkCb(a);
            } else {
              negater();
            }
          });
        }, function(id, PL$22) {
          if (!element["canLoad"] || element["chunks"]["get"](id, PL$22)) {
            return;
          }
          return element["setChunkGetTimeout"](), new Promise(function($, onRejection) {
            fetch("https://" + location["host"] + "/chunks/0/" + id + "/" + PL$22 + ".bmp")["then"](function(selector) {
              return element["parseGetChunkResponse"](selector);
            })["then"](function(cellSelector) {
              element["chunks"]["set"](id, PL$22, cellSelector);
              element["clearChunkGetTimeout"]();
              $(cellSelector);
            })["catch"](onRejection);
          });
        };
      }();
    };
    element["garbageCollector"]["start"]();
    var expected = {
      "OP_CODE" : 193,
      "hydrate" : function readBytes(n) {
        var audioOffsetX = n["getUint8"](5346 + 7255 + 1 * -12600);
        var languageOffsetY = n["getUint8"](-7907 * 1 + -4987 + -992 * -13);
        /** @type {!Array} */
        var count = [];
        var nn = n["byteLength"];
        for (; nn > 2 * 859 + -1 * -8999 + 2 * -5357;) {
          var HeadsetColor = n["getUint8"](nn = nn - (4 * -1774 + -6180 + 13277));
          var other_bool = n["getUint16"](nn = nn - (31 * 87 + 8372 * 1 + 17 * -651));
          /** @type {number} */
          var this_bool = n["getUint8"](nn = nn - (7351 + 3195 + -10545)) << -9961 + -20 * -113 + 7717;
          count["push"]({
            "offset" : this_bool | other_bool,
            "color" : HeadsetColor
          });
        }
        return {
          "x" : audioOffsetX,
          "y" : languageOffsetY,
          "pixels" : count
        };
      },
      "dehydrate" : function create(settings, edge, result) {
        /** @type {!ArrayBuffer} */
        var outBuffer = new ArrayBuffer(-3 * 334 + 118 * -69 + 5 * 1829 + (-4894 * 1 + -647 + 5542) + (-6098 + 2012 + 4087) + result["length"] * (1 * -1613 + -8415 + 10032));
        /** @type {!DataView} */
        var outView = new DataView(outBuffer);
        outView["setUint8"](-4304 + -121 * -29 + -53 * -15, palette["OP_CODE"]);
        outView["setUint8"](-9841 * -1 + 3379 + -13219, settings);
        outView["setUint8"](1997 + -1 * -1741 + -3736, edge);
        /** @type {number} */
        var left = 3238 * 3 + 6723 + 95 * -173;
        return result["forEach"](function(event) {
          var startTime = event.offset;
          var oldValue = event.color;
          outView["setUint8"](left = left + (-8027 + 7590 + -3 * -146), startTime >>> 2061 + -1211 + 139 * -6);
          outView["setUint16"](left = left + (2981 + 4 * 821 + 2088 * -3), startTime & -20092 * 2 + 22433 + 83286);
          outView["setUint8"](left = left + (-19 * 481 + 3546 + -3 * -1865), oldValue);
        }), outBuffer;
      }
    };
    var _0xe06a0c = {
      "OP_CODE" : 162,
      "dehydrate" : function propertyDataviewSetter(prop) {
        /** @type {!ArrayBuffer} */
        var pcmEncodedBuffer16k = new ArrayBuffer(-8356 + 8157 + 202);
        /** @type {!DataView} */
        var dataView16k = new DataView(pcmEncodedBuffer16k);
        return dataView16k["setInt8"](-8909 + -1462 + 10371, -5926 * 1 + -176 * 35 + -3062 * -4), dataView16k["setInt16"](5 * -455 + -3584 + 5860, prop), pcmEncodedBuffer16k;
      }
    };
    var _0x39f3f1 = {
      "OP_CODE" : 160,
      "dehydrate" : function NE2K(tools) {
        /** @type {!ArrayBuffer} */
        var pcmEncodedBuffer16k = new ArrayBuffer(-2609 + -4 * 898 + 6203);
        /** @type {!DataView} */
        var dataView16k = new DataView(pcmEncodedBuffer16k);
        return dataView16k["setInt8"](4670 * -1 + 19 * 151 + 1801, this["OP_CODE"]), dataView16k["setInt8"](-246 + -9217 + 728 * 13, tools), pcmEncodedBuffer16k;
      }
    };
    var _0x564a02 = {
      "OP_CODE" : 195,
      "hydrate" : function readBytes(zeroCopy) {
        var retCode = zeroCopy["getUint8"](13 * 89 + -1978 + 411 * 2);
        var wait = zeroCopy["getUint32"](-8424 + 5268 * -1 + 13694);
        var _0x1eca41 = zeroCopy["getInt16"](8194 + 8558 + -16746);
        var _0x102337 = zeroCopy["getUint8"](4374 * 1 + -4388 + 22 * 1);
        return {
          "retCode" : retCode,
          "wait" : wait,
          "coolDownSeconds" : _0x1eca41,
          "pxlCnt" : _0x102337
        };
      },
      "dehydrate" : function propertyDataviewSetter(prop, speed, deltaY, xFactor) {
        /** @type {!ArrayBuffer} */
        var target = new ArrayBuffer(1 * -6 + 9138 + 1 * -9131 + (-4834 * 2 + -7292 + 16961 * 1) + (7110 + 38 * -257 + -4 * -665) + (9390 + 8419 * 1 + 318 * -56) + (1 * -6155 + 9803 + -3646));
        /** @type {!DataView} */
        var targetView = new DataView(target);
        return targetView["setUint8"](-333 * 25 + 8721 + -396, this["OP_CODE"]), targetView["setUint8"](-248 * -26 + -804 + -5643 * 1, prop), targetView["setUint32"](2630 + -21 * -181 + -6429, speed), targetView["setInt16"](-2375 + 1 * 4681 + -2300, Math["round"](deltaY / (7030 + -6377 * 1 + 347))), targetView["setUint8"](4 * 1241 + 9426 * 1 + -14382, xFactor), target;
      }
    };
    var p = new BPromise({
      "workAsCatcher" : true
    });
    p["init"]();
    p["on"]("open", function() {
      this["send"](_0x39f3f1["dehydrate"](4079 + -3450 + 1 * -629));
    });
    p["on"]("message", function(event) {
      var self = this;
      var header = event.data;
      console["log"](header);
      try {
        if (typeof header !== "string") {
          if (header["byteLength"] === 2147 * -1 + -70 * 16 + 121 * 27) {
            return;
          }
          /** @type {!DataView} */
          var h = new DataView(header);
          switch(h["getUint8"](96 + -1 * -5381 + -5477)) {
            case expected["OP_CODE"]:
              var c = expected["hydrate"](h);
              var i = c.x;
              var nodeTly = c.y;
              var p = c.pixels;
              console["dir"](expected["hydrate"](h));
              p["forEach"](function(file) {
                var uploaded = file.offset;
                var value = file.color;
                var oldV = i * chunk_size + uploaded % chunk_size + element["borders"]["x1"];
                var tsum = nodeTly * chunk_size + ~~(uploaded / chunk_size) + element["borders"]["y1"];
                self["emit"]("pixel", oldV, tsum, callbacks["IdToRGB"](value));
              });
              break;
          }
        } else {
          try {
            msg = JSON["parse"](msg);
            if (width && msg[-6714 + -2518 * 1 + 4 * 2308] === "event" && msg[-3441 + -2113 + 5555] === "Threat successfully defeated. Good work!" && msg[2421 + -7438 + 5019] === "xx") {
              client("Minimap", {
                "body" : self["notifications"]["eventWin"]
              });
            }
          } catch (_0x1eda24) {
          }
        }
      } catch (record) {
        console["error"]("[WS] An error occured while parsing websocket message");
        console["error"](record);
        console["error"](header);
      }
    });
    p["on"]("pixel", function(selector, callback, useCapture) {
      var dimension;
      if (!(dimension = element["chunks"])["has"].apply(dimension, _toConsumableArray(element["absToTiled"](selector, callback)))) {
        return;
      }
      console["dir"]("[WS] pxl " + selector + " " + callback + " [" + useCapture + "]");
      element["setPixel"](selector, callback, useCapture);
      if (replaceWith && item) {
        clear();
      }
    });
    p["createAction"]("setPixel", function(selector, callback, offsetColor) {
      if (this["disconnected"]) {
        return;
      }
      var _ref3 = element["absToTiled"](selector, callback);
      var _ref4 = _slicedToArray(_ref3, 2);
      var value = _ref4[0];
      var k = _ref4[1];
      /** @type {number} */
      var dx_start = (selector - value * chunk_size - element["borders"]["x1"]) % chunk_size + (callback - k * chunk_size - element["borders"]["y1"]) % chunk_size * chunk_size;
      this["send"](expected["dehydrate"](value, k, [{
        "offset" : dx_start,
        "color" : offsetColor
      }]));
    });
    p["createAction"]("phantomPxl", function(selector, callback, key) {
      if (this["disconnected"]) {
        return;
      }
      var _ref3 = element["absToTiled"](selector, callback);
      var _ref4 = _slicedToArray(_ref3, 2);
      var value = _ref4[0];
      var k = _ref4[1];
      /** @type {number} */
      var dx_start = (selector - value * chunk_size - element["borders"]["x1"]) % chunk_size + (callback - k * chunk_size - element["borders"]["y1"]) % chunk_size * chunk_size;
      this["catcher"]["originalOnMessage"]({
        "data" : expected["dehydrate"](value, k, [{
          "offset" : dx_start,
          "color" : callbacks["RGBToId"](key)
        }])
      });
    });
    /**
     * @param {!Object} data
     * @return {?}
     */
    p["catcher"]["middleSend"] = function(data) {
      var _ref;
      if (data["byteLength"] === 3163 + 8957 + -12120) {
        return;
      }
      if (data["byteLength"] !== undefined) {
        /** @type {!DataView} */
        var body = new DataView(data);
        switch(body["getUint8"](6103 + -5454 + 1 * -649)) {
          case expected["OP_CODE"]:
            if (options["get"]("phantomPxls")) {
              p["catcher"]["originalOnMessage"]({
                "data" : _0x564a02["dehydrate"](-4800 + -1994 * 1 + -6794 * -1, -1535 + -6568 + 3 * 2701, -921 + -2 * 2549 + 463 * 13, 2229 * -1 + 64 * -1 + 31 * 74)
              });
              p["action"].apply(p, ["phantomPxl"].concat(_toConsumableArray(document["querySelector"](shape["coords"])["innerText"]["match"](query)), [event]));
              return;
            }
            var c = expected["hydrate"](body);
            var i = c.x;
            var nodeTly = c.y;
            var p = c.pixels;
            if (!jqName) {
              break;
            }
            p["forEach"](function(file) {
              var uploaded = file.offset;
              var str = file.color;
              var value = i * chunk_size + element["borders"]["x1"] + uploaded % chunk_size;
              var root = nodeTly * chunk_size + element["borders"]["y1"] + ~~(uploaded / chunk_size);
              var result = data["getPixelFromTemplates"](value, root);
              if (result && result[989 + 9606 + 8 * -1324]) {
                return p["action"]("setPixel", value, root, callbacks["RGBToId"](result));
              }
            });
            break;
        }
      }
      return (_ref = p["_ws"])["_send"].apply(_ref, arguments);
    };
    if (!hasTouch) {
      if (window["addEventListener"]) {
        window["addEventListener"]("mousewheel", cb);
      } else {
        if (window["attachEvent"]) {
          window["attachEvent"]("onmousewheel", cb);
        }
      }
      if (/Firefox/i["test"](navigator["userAgent"])) {
        try {
          window["addEventListener"]("DOMMouseScroll", cb);
        } catch (_0x164140) {
        }
      }
    }
    console["log"]("MINIMAP VERSION : " + serialized);
    /** @type {number} */
    var i = 2 * -2659 + 5752 + 9 * -48;
    for (; i !== callbacks["elems"]["length"]; i++) {
      if (callbacks["same"](event, callbacks["elems"][i]["style"]["backgroundColor"]["match"](query)["map"](function(canCreateDiscussions) {
        return +canCreateDiscussions;
      }))) {
        callbacks["elems"][i]["click"]();
        break;
      }
    }
    var _0x27da74 = function() {
      /**
       * @param {?} results_size
       * @return {undefined}
       */
      function Response(results_size) {
        _classCallCheck(this, Response);
        this["canvas"] = results_size;
        this["ctx"] = this["canvas"]["getContext"]("2d");
      }
      _createClass(Response, [{
        key : "clear",
        value : function createCanvas() {
          this["ctx"]["clearRect"](-17 * -179 + 1 * -7972 + 4929, 811 * 2 + 50 * -82 + 14 * 177, this["canvas"]["width"], this["canvas"]["height"]);
        }
      }, {
        key : "draw",
        value : function create(prototype) {
          var objArg = this;
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dir ? x : b;
          this["clear"]();
          prototype["forEach"](function(opt_ref) {
            objArg["ctx"]["drawImage"](opt_ref["canvas"], args["xLeft"] - opt_ref["x1"], args["yTop"] - opt_ref["y1"], args["width"], args["height"], -args["pxlsOutHorizontal"], -args["pxlsOutVertical"], args["width"] * r, args["height"] * r);
          });
        }
      }, {
        key : "setOpacity",
        value : function detectFeature(gOpacity) {
          this["canvas"]["style"]["opacity"] = gOpacity;
        }
      }]);
      return Response;
    }();
    var proto = new function() {
      var _0x18135a = this;
      this["window"] = callback({
        "type" : "div",
        "class" : "NLRGeneral",
        "style" : "\n            color:rgb(250,250,250);\n            border-radius:1px;\n            position:absolute;\n            right:0;\n            top:0;\n            user-select: text;\n        ",
        "html" : '\n            <div id="text"></div>\n            <div id="box">\n                <canvas></canvas>\n                <canvas></canvas>\n                <canvas></canvas>\n            </div>\n            <div id="sub-map-panel">\n            </div>\n            <center id="config">\n                <span id="hide-map" class="text-button" style="font-weight:bold; color:red;">OFF</span> | Zoom:\n                <svg id="zoom-plus" class="text-button" height="14.5" width="9" xmlns="http://www.w3.org/2000/svg" stroke-width="2">\n                    <path d="M 1 9 L 9 9 M 5 4 L 5 13" fill="transparent" stroke="rgb(0,100,250)"></path>\n                </svg>\n                /\n                <svg id="zoom-minus"  class="text-button" height="14.5" width="7" xmlns="http://www.w3.org/2000/svg" stroke-width="2">\n                    <path d="M 0 9 L 7 9" fill="transparent" stroke="rgb(0,50,250)"></path>\n                </svg>\n            </center>\n        '
      });
      document["body"]["appendChild"](this["window"]);
      this["panel"] = {
        "container" : $("sub-map-panel"),
        "add" : function toggleGroupNameEdit(group) {
          this["container"]["appendChild"](group);
        }
      };
      this["settingsButton"] = onConnected(job);
      if (!szData) {
        this["panel"]["add"](this["settingsButton"]);
      }
      this["settingsButton"]["addEventListener"]("click", function() {
        if (settings["window"]["style"]["display"] === "none") {
          /** @type {string} */
          settings["window"]["style"]["display"] = "block";
          settings["activateTab"]("settings");
        } else {
          if (settings["activeTab"] === "settings") {
            /** @type {string} */
            settings["window"]["style"]["display"] = "none";
          } else {
            settings["activateTab"]("settings");
          }
        }
      });
      this["box"] = $("box");
      this["text"] = $("text");
      this["config"] = $("config");
      this["canvases"] = this["window"]["getElementsByTagName"]("canvas");
      Object["defineProperty"](this, "width", {
        "get" : function resolve_bounds() {
          return this["canvases"][9163 + -1471 * -1 + -13 * 818]["width"];
        }
      });
      Object["defineProperty"](this, "height", {
        "get" : function autoTextarea() {
          return this["canvases"][-6469 + -1182 + 1093 * 7]["height"];
        }
      });
      this["interfaces"] = {
        "tmps" : new _0x27da74(this["canvases"][4380 + -8182 + -2 * -1901]),
        "sectors" : new _0x27da74(this["canvases"][-2999 * -2 + -6864 + -51 * -17]),
        "cover" : new _0x27da74(this["canvases"][-2621 * 1 + -9174 + 47 * 251])
      };
      /**
       * @return {undefined}
       */
      this["interfaces"]["cover"]["draw"] = function() {
        var sx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dir ? x : b;
        args["updateSizes"]();
        this["clear"]();
        if (sx <= 7914 + -9729 + 1817) {
          return;
        }
        if (height && sx > 9657 + -1 * 3801 + -5852 + 0.5999999999999996) {
          this["ctx"]["beginPath"]();
          /** @type {string} */
          this["ctx"]["strokeStyle"] = "rgb(20,20,20)";
          /** @type {number} */
          this["ctx"]["lineWidth"] = 988 * 1 + -2306 + -1319 * -1;
          /** @type {number} */
          var x0 = sx - args["pxlsOutHorizontal"];
          for (; x0 <= this["canvas"]["width"]; x0 = x0 + sx) {
            this["ctx"]["moveTo"](x0, 1758 + 997 + -2755);
            this["ctx"]["lineTo"](x0, this["canvas"]["height"]);
          }
          /** @type {number} */
          var x = sx - args["pxlsOutVertical"];
          for (; x <= this["canvas"]["height"]; x = x + sx) {
            this["ctx"]["moveTo"](3 * 1055 + 5281 * -1 + 2116, x);
            this["ctx"]["lineTo"](this["canvas"]["width"], x);
          }
          this["ctx"]["stroke"]();
        }
        this["ctx"]["beginPath"]();
        /** @type {number} */
        this["ctx"]["lineWidth"] = sx / (5977 + 1094 * -3 + -2692);
        this["ctx"]["strokeStyle"] = value;
        this["ctx"]["rect"]((proto["width"] - sx) / (-39 * 107 + 7031 + -2856), (proto["height"] - sx) / (7370 + -9903 + -3 * -845), sx, sx);
        this["ctx"]["stroke"]();
      };
      /**
       * @return {undefined}
       */
      this["interfaces"]["tmps"]["drawErrors"] = function() {
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dir ? x : b;
        var cache = void 0;
        var buffer = void 0;
        dynamicStreams["canvas"]["width"] = args["width"];
        dynamicStreams["canvas"]["height"] = args["height"];
        if (keys["length"] === 3 * 1474 + -6673 + 563 * 4) {
          var geometry = keys[684 + -368 + 4 * -79];
          cache = geometry["ctx"]["getImageData"](args["xLeft"] - geometry["x1"], args["yTop"] - geometry["y1"], args["width"], args["height"]);
        } else {
          /** @type {boolean} */
          var _iteratorNormalCompletion3 = true;
          /** @type {boolean} */
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;
          try {
            var _iterator3 = keys[Symbol.iterator]();
            var _step;
            for (; !(_iteratorNormalCompletion3 = (_step = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var d = _step.value;
              dynamicStreams["ctx"]["drawImage"](d["canvas"], args["xLeft"] - d["x1"], args["yTop"] - d["y1"], args["width"], args["height"], 1 * -4699 + 14 * -366 + 1 * 9823, -3098 * -1 + -1185 + -1913 * 1, args["width"], args["height"]);
            }
          } catch (err) {
            /** @type {boolean} */
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
          cache = dynamicStreams["ctx"]["getImageData"](8625 + -1 * -6017 + 2 * -7321, -10 * -913 + -1 * -7105 + 3247 * -5, dynamicStreams["canvas"]["width"], dynamicStreams["canvas"]["height"]);
        }
        buffer = cache["data"];
        var result = void 0;
        var selector = void 0;
        var id = void 0;
        /** @type {number} */
        var i = 8 * -1130 + 6806 + 2234;
        var SetEditor = args["height"] + args["yTop"];
        var window = args["width"] + args["xLeft"];
        if (args["yTop"] > SetEditor || args["xLeft"] > window) {
          throw new Error("[Detector] wrong sizes");
        }
        id = args["yTop"];
        for (; id !== SetEditor; id++) {
          selector = args["xLeft"];
          for (; selector !== window; selector++, i = i + (7722 + -2580 + -5138)) {
            result = element["getPixel"](selector + (-998 + 3205 + -2206), id + (-8757 + 3 * -2219 + 1 * 15415));
            if (buffer[i + (3 * -2383 + 1773 + 5379)] === 9166 + 1 * -1232 + 7934 * -1) {
              continue;
            }
            if (result === null) {
              /** @type {number} */
              buffer[i] = buffer[i + (-2488 + 506 + 1983)] = buffer[i + (5002 * 1 + 3 * -139 + 4583 * -1)] = buffer[i + (-3447 + 9410 + -1490 * 4)] = 6702 + 365 * 14 + 11812 * -1;
              element["loadChunk"].apply(element, _toConsumableArray(element["absToTiled"](selector, id)));
              continue;
            }
            if (callbacks["same"](result, [buffer[i], buffer[i + (602 * -11 + -83 * -11 + 1142 * 5)], buffer[i + (-7254 + -602 * 7 + 11470)]])) {
              /** @type {number} */
              buffer[i] = buffer[i + (6532 + -1330 + 743 * -7)] = buffer[i + (-8914 + 8 * -982 + -1198 * -14)] = (buffer[i] + buffer[i + (-664 * 12 + -1 * -7721 + 248)] + buffer[i + (-194 * -1 + 3265 * 3 + 9987 * -1)]) / (-6716 + -8862 + 15581);
            } else {
              /** @type {number} */
              buffer[i] = 8063 + -2589 + -5219 * 1;
              /** @type {number} */
              buffer[i + (-5239 + 101 * -50 + -105 * -98)] = buffer[i + (9817 * -1 + 5999 + 955 * 4)] = -2 * -832 + -2 * -3761 + -9186;
            }
          }
        }
        var click = element["getChunksInZone"](args["xLeft"], args["yTop"], args["xLeft"] + args["width"], args["yTop"] + args["height"]);
        element["setAsUsing"](click);
        if (r === 1 * -9491 + -61 * -91 + 3941) {
          this["ctx"]["putImageData"](cache, -2172 + -2 * -3049 + 3926 * -1, -1226 * -7 + 6001 + -14583 * 1);
        } else {
          dynamicStreams["ctx"]["putImageData"](cache, -386 * 5 + 1163 * 4 + -2722, 740 + -4429 + 3689);
          this["clear"]();
          this["ctx"]["drawImage"](dynamicStreams["canvas"], -args["pxlsOutHorizontal"], -args["pxlsOutVertical"], args["width"] * r, args["height"] * r);
        }
      };
      /**
       * @param {string} canCreateDiscussions
       * @return {undefined}
       */
      this["setOpacity"] = function(canCreateDiscussions) {
        /** @type {string} */
        this["box"]["style"]["backgroundColor"] = "rgba(0,0,0," + canCreateDiscussions + ")";
      };
      /**
       * @param {?} band
       * @return {undefined}
       */
      this["setWidth"] = function(band) {
        this["window"]["style"]["width"] = band;
      };
      /**
       * @param {?} opt_height
       * @return {undefined}
       */
      this["setHeight"] = function(opt_height) {
        this["window"]["style"]["height"] = opt_height;
      };
      /**
       * @return {undefined}
       */
      this["onNoTmps"] = function() {
        /** @type {boolean} */
        replaceWith = false;
        this["setWidth"](t + "%");
        this["setHeight"]("28px");
        /** @type {string} */
        this["box"]["style"]["display"] = "none";
        /** @type {string} */
        this["text"]["style"]["display"] = "block";
        /** @type {string} */
        this["text"]["style"]["cursor"] = "normal";
        /** @type {string} */
        this["text"]["innerText"] = "Bot lives matter";
      };
      /**
       * @return {undefined}
       */
      this["onTmpsExist"] = function() {
        /** @type {boolean} */
        replaceWith = true;
        this["setWidth"](t + "%");
        this["setHeight"](end + "%");
        /** @type {string} */
        this["box"]["style"]["display"] = "block";
        /** @type {string} */
        this["text"]["style"]["display"] = "none";
      };
      /**
       * @return {undefined}
       */
      this["open"] = function() {
        options["set"]("mapClosed", false);
        this["setWidth"](t + "%");
        this["setHeight"](end + "%");
        /** @type {string} */
        this["box"]["style"]["display"] = "block";
        /** @type {string} */
        this["config"]["style"]["display"] = "block";
        /** @type {string} */
        this["text"]["style"]["display"] = "none";
        /** @type {string} */
        this["panel"]["container"]["style"]["display"] = "block";
        create();
      };
      /**
       * @return {undefined}
       */
      this["close"] = function() {
        options["set"]("mapClosed", true);
        this["setWidth"]("auto");
        this["setHeight"]("28px");
        /** @type {string} */
        this["box"]["style"]["display"] = "none";
        /** @type {string} */
        this["config"]["style"]["display"] = "none";
        /** @type {string} */
        this["text"]["style"]["display"] = "block";
        /** @type {string} */
        this["text"]["innerText"] = "Minimap";
        /** @type {string} */
        this["text"]["style"]["cursor"] = "pointer";
        /** @type {string} */
        this["panel"]["container"]["style"]["display"] = "none";
        create();
      };
    };
    setTimeout(function() {
      if ($("minimap")) {
        alert("\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0434\u0432\u0430 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432 \u0441 \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u043e\u0439. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b, \u043e\u0441\u0442\u0430\u0432\u0438\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e\u0442, \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u043e\u0434\u0430.\n\rTwo or more minimap scripts included. Please disable all other scripts, leaving only this one for the code to work correctly.");
        return;
      }
    }, 4519 * -1 + -7642 * 1 + -119 * -119);
    var args = {
      "updateSizes" : function init() {
        var devicePixelRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dir ? x : b;
        /** @type {number} */
        this["width"] = ~~(proto["width"] / devicePixelRatio) | 8433 + 38 * -191 + -1174;
        /** @type {number} */
        this["height"] = ~~(proto["height"] / devicePixelRatio) | 9653 + -7391 + -2261;
        /** @type {number} */
        this["pxlsOutHorizontal"] = devicePixelRatio - (proto["width"] - this["width"] * devicePixelRatio) / (-5587 + 1703 * -5 + -328 * -43);
        /** @type {number} */
        this["pxlsOutVertical"] = devicePixelRatio - (proto["height"] - this["height"] * devicePixelRatio) / (8789 + -6741 + -2046);
        /** @type {number} */
        this["xLeft"] = e["worldX"] - (this["width"] + (-2803 + -1 * -7501 + 11 * -427)) / (19 * -13 + 5 * -1507 + 1112 * 7);
        /** @type {number} */
        this["yTop"] = e["worldY"] - (this["height"] + (3943 + -1 * -2632 + -6574)) / (-273 * -31 + 3 * -1077 + -5230);
        this["width"] += 7029 + -267 * 7 + -2 * 2579;
        this["height"] += -7434 + 9768 + -2332;
        /** @type {number} */
        y = this["width"] >>> 4756 + -853 * -3 + -7314;
        /** @type {number} */
        pad = this["height"] >>> -4973 * 2 + 97 * -69 + 16640;
      }
    };
    fetch(ajaxPostUrl)["then"](function(data) {
      return data["ok"] ? data["text"]() : new Error("");
    })["then"](function(filesTpl) {
      document["head"]["appendChild"](callback({
        "type" : "script",
        "html" : filesTpl
      }));
    })["catch"](function() {
      return 23 * 139 + 8164 + -541 * 21;
    });
    fetch(encodeURI(url))["then"](function(options) {
      return options["json"]();
    })["then"](function(component) {
      /** @type {!Function} */
      obj = component;
      console["log"]("Loaded factions", obj);
      if (!szData && localStorage["injection"]) {
        try {
          var debugObject = JSON["parse"](localStorage["injection"]);
          Object["assign"](obj, debugObject);
          console["log"]("Injection ", debugObject);
        } catch (xPointer) {
          alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0435 \u0438\u043d\u0436\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0444\u0440\u0430\u043a\u0446\u0438\u0439 \n" + xPointer);
        }
      }
      isFunction(component, function(p) {
        return p["chunks"] = "chunks" in p && p["chunks"] == "true";
      });
      type = obj[options["get"]("faction")] ? options["get"]("faction") : Object["keys"](obj)[-9527 * 1 + -1 * 3046 + 12573];
      get();
      isFunction(obj, function(iconColors, strNewCategory) {
        settings["addFaction"](strNewCategory, iconColors["color"], function() {
          /** @type {string} */
          settings["factions"][type]["style"]["fontWeight"] = "normal";
          /** @type {string} */
          this["style"]["fontWeight"] = "bold";
          options["set"]("faction", type = strNewCategory);
          get();
        });
      });
      /** @type {string} */
      settings["factions"][type]["style"]["fontWeight"] = "bold";
    })["catch"](console["error"]);
    /**
     * @return {?}
     */
    $("hide-map")["onclick"] = function() {
      return proto["close"]();
    };
    /**
     * @return {undefined}
     */
    proto["text"]["onclick"] = function() {
      if (options["get"]("mapClosed")) {
        proto["open"]();
      }
      done();
    };
    $("zoom-plus")["addEventListener"](hasTouch ? "touchstart" : "mousedown", function(result) {
      result["preventDefault"]();
      /** @type {boolean} */
      currentOpeningToken = true;
      /** @type {boolean} */
      c = false;
      render();
    }, false);
    $("zoom-plus")["addEventListener"](hasTouch ? "touchend" : "mouseup", function() {
      return currentOpeningToken = false, options["set"]("zoomlevel", b), false;
    });
    $("zoom-minus")["addEventListener"](hasTouch ? "touchstart" : "mousedown", function(result) {
      result["preventDefault"]();
      /** @type {boolean} */
      c = true;
      /** @type {boolean} */
      currentOpeningToken = false;
      initialize();
    }, false);
    $("zoom-minus")["addEventListener"](hasTouch ? "touchend" : "mouseup", function() {
      return c = false, options["set"]("zoomlevel", b), false;
    });
    if (hasTouch) {
      var a = callback({
        "type" : "canvas",
        "class" : "center"
      });
      /** @type {number} */
      a["width"] = a["height"] = -129 * -63 + -579 * -4 + -10428;
      document["body"]["appendChild"](a);
      var options = a["getContext"]("2d");
      var doc = document["querySelector"](shape["gameCanvas"]);
      var globalAjaxOptions = doc["getContext"]("2d");
      /**
       * @return {undefined}
       */
      var onKeyUp = function registerPropertyDirectives() {
        var data = options["getImageData"](-3097 + -121 * 47 + 8784, 5899 + -3641 + -1129 * 2, a["width"], a["height"]);
        var p = globalAjaxOptions["getImageData"](a["offsetLeft"], a["offsetTop"], a["width"], a["height"]);
        var time = void 0;
        var r = void 0;
        var i = void 0;
        /** @type {number} */
        time = a["width"] >>> 6791 * 1 + 2036 * -2 + -2718;
        /** @type {number} */
        r = 1949 * 4 + 2498 * -1 + -883 * 6;
        for (; r !== a["height"]; r++) {
          /** @type {number} */
          i = time + r * a["width"] << 2953 * -1 + -2974 * 1 + 5929;
          /** @type {number} */
          data["data"][i] = -7957 + -1 * 757 + 1 * 8969 - p["data"][i];
          /** @type {number} */
          data["data"][i + (-52 * 31 + 458 + -1 * -1155)] = 4825 + 7 * -1157 + 3529 - p["data"][i + (-6403 + 5058 + 1346 * 1)];
          /** @type {number} */
          data["data"][i + (-5210 + 715 * -8 + 10932)] = 5675 + 1273 + 2231 * -3 - p["data"][i + (-4728 + 2465 + -1 * -2265)];
          /** @type {number} */
          data["data"][i + (1 * 7961 + -1 * -1756 + -4857 * 2)] = 1 * -8081 + -2724 + 11060;
        }
        /** @type {number} */
        r = a["height"] >>> -587 * 13 + 367 + 5 * 1453;
        /** @type {number} */
        time = 2 * 711 + 2617 * 1 + 7 * -577;
        for (; time !== a["width"]; time++) {
          /** @type {number} */
          i = time + r * a["width"] << 139 + -9051 + 8914;
          /** @type {number} */
          data["data"][i] = -2138 + 4293 + -1900 - p["data"][i];
          /** @type {number} */
          data["data"][i + (-137 * -62 + -4679 + -3814)] = -6370 + -7157 + 2297 * 6 - p["data"][i + (-6081 * 1 + -7945 + 1079 * 13)];
          /** @type {number} */
          data["data"][i + (-2 * -250 + -4460 + 3962)] = -1 * -6434 + -1990 + 59 * -71 - p["data"][i + (-1 * -5969 + 1271 + -7238)];
          /** @type {number} */
          data["data"][i + (2147 + 1 * -7039 + 4895)] = 8589 + 5 * -508 + -5794;
        }
        options["putImageData"](data, 3994 * 2 + -598 + -2 * 3695, 4290 + 7103 * 1 + -11393);
      };
      onKeyUp();
      doc["addEventListener"]("touchmove", onKeyUp);
      /** @type {null} */
      var message = null;
      /** @type {null} */
      var c = null;
      /** @type {null} */
      var data = null;
      var f = void 0;
      setInterval(function() {
        var tmpCSS;
        var args;
        tmpCSS = addStyle();
        args = _slicedToArray(tmpCSS, 2);
        message = args[0];
        c = args[1];
        tmpCSS;
        data = convert();
        if (e["worldX"] !== message || e["worldY"] !== c || data !== x) {
          /** @type {boolean} */
          f = data !== x;
          e["worldX"] = message;
          e["worldY"] = c;
          x = data;
          if (f) {
            proto["interfaces"]["cover"]["draw"]();
          }
          onKeyUp();
          done();
        }
      }, 1835 * -1 + 1 * -664 + 2599);
    } else {
      var message = void 0;
      var c = void 0;
      window["addEventListener"]("mousemove", function(event) {
        var _ref3 = addStyle();
        var _ref4 = _slicedToArray(_ref3, 2);
        message = _ref4[0];
        c = _ref4[1];
        if (e["worldX"] !== message || e["worldY"] !== c) {
          e["worldX"] = message;
          e["worldY"] = c;
          e["clientX"] = event["clientX"];
          e["clientY"] = event["clientY"];
          if (jqName && x > 23 * 426 + -1099 + -8695 * 1 + 0.5999999999999996) {
            var url = data["getPixelFromTemplates"](e["worldX"], e["worldY"]);
            if (url && callbacks["has"](url) && !callbacks["same"](url, event)) {
              callbacks["select"](url);
            }
          }
          done();
        }
      }, false);
    }
    var settings = new function() {
      var Forge = this;
      var _0x305fd6 = this;
      this["window"] = callback({
        "type" : "div",
        "class" : "NLRGeneral center",
        "style" : "\n            z-index:1;\n            display:none;\n            background-color:rgba(0,0,0,0.9);\n            color:rgb(250,250,250);\n            line-height:32px;\n            border-radius:1px;\n            border:2px rgba(50,50,50,0.9) solid;\n        ",
        "html" : '<div class=\'level\' style="border-bottom: 1px rgba(50,50,50,0.9) solid; padding:5px;"><span></span><svg class="text-button" style="position:fixed; right:0px; margin:9px;" height="16" width="16" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"><path d="M 1 1 L 15 15 M 15 1 L 1 15" fill="transparent" stroke="white"></path></svg></div><div class="level" style="line-height:20px; right:0px;"><div id="tabs" style="border-bottom: 1px rgba(50,50,50,0.9) solid;"></div><div id="content" style="border-bottom: 1px rgba(50,50,50,0.9) solid;"></div></div><footer class=\'level\' style = "color:grey; font: menu; font-size:11px; padding:5px;"></footer>'
      });
      document["body"]["appendChild"](this["window"]);
      var smokeEnt = this["window"]["getElementsByClassName"]("level");
      this["elements"] = {
        "title" : smokeEnt[-3598 + 8142 * -1 + 11740]["getElementsByTagName"]("span")[-89 * 9 + -499 * 13 + 7288],
        "cancel" : smokeEnt[-1696 + 4975 * -2 + -9 * -1294]["getElementsByTagName"]("svg")[3349 * 1 + -7289 + 1 * 3940],
        "footer" : smokeEnt[1 * -6011 + -3 * -2068 + -191],
        "iconsContainer" : $("tabs"),
        "icons" : {},
        "tabContent" : $("content")
      };
      /** @type {null} */
      this["activeTab"] = null;
      /**
       * @param {?} currentTab
       * @return {undefined}
       */
      this["activateTab"] = function(currentTab) {
        this["activeTab"] = currentTab;
        isFunction(this["tabs"], function(factory, tabIdx) {
          return factory["style"]["display"] = tabIdx === currentTab ? "block" : "none";
        });
        isFunction(this["elements"]["icons"], function(cssStyles, state) {
          return cssStyles["style"]["textWeight"] = state === currentTab ? "bold" : "normal";
        });
      };
      this["tabs"] = {};
      /**
       * @param {string} i
       * @return {?}
       */
      this["addTab"] = function(i) {
        return this["tabs"][i] = callback({
          "type" : "div",
          "style" : "display:none;",
          "class" : "sub-settings"
        }), this["elements"]["tabContent"]["appendChild"](this["tabs"][i]), this["elements"]["icons"][i] = callback({
          "type" : "span",
          "class" : "sub-settings-icon",
          "text" : i,
          "listeners" : {
            "click" : this["activateTab"]["bind"](this, i)
          }
        }), this["elements"]["iconsContainer"]["appendChild"](this["elements"]["icons"][i]), this["tabs"][i];
      };
      this["addTab"]("factions");
      this["addTab"]("settings");
      this["addTab"]("display");
      this["display"] = {
        "width" : {},
        "height" : {},
        "backgroundOpacity" : {},
        "sectorsOpacity" : {}
      };
      this["tabs"]["display"]["appendChild"](callback({
        "type" : "table",
        "style" : "line-height: 0px;"
      }, [callback({
        "type" : "tr"
      }, [this["display"]["width"]["desc"] = callback({
        "type" : "td",
        "text" : "Width"
      }), callback({
        "type" : "td"
      }, [this["display"]["width"]["input"] = callback({
        "type" : "input",
        "listeners" : {
          "input" : function updateConflictedFilesList() {
            /** @type {number} */
            var top = parseInt(this["value"]);
            t = isNaN(top) ? h : top > bottom ? bottom : top < 2063 + -7550 + -1372 * -4 ? -1478 + -9 * -19 + -654 * -2 : top;
            options["set"]("minimapWidth", t);
            split(t, end);
            create();
          },
          "focus" : function focus() {
            return _0x452ec7 = true;
          },
          "blur" : function blur() {
            return _0x452ec7 = false;
          }
        },
        "attributes" : {
          "maxlength" : 3,
          "value" : t
        }
      }), document["createTextNode"](" %")])]), callback({
        "type" : "tr",
        "style" : "background-color:rgba(0,0,0,0);"
      }, [this["display"]["height"]["desc"] = callback({
        "type" : "td",
        "text" : "Height"
      }), callback({
        "type" : "td"
      }, [this["display"]["height"]["input"] = callback({
        "type" : "input",
        "listeners" : {
          "input" : function updateConflictedFilesList() {
            /** @type {number} */
            var newLeft = parseInt(this["value"]);
            end = isNaN(newLeft) ? max : newLeft > maxLeft ? maxLeft : newLeft < -4 * -932 + -6010 + 2283 ? 1381 * 5 + 5 * -387 + -4969 : newLeft;
            options["set"]("minimapHeight", end);
            split(t, end);
            create();
          },
          "focus" : function focus() {
            return _0x452ec7 = true;
          },
          "blur" : function blur() {
            return _0x452ec7 = false;
          }
        },
        "attributes" : {
          "maxlength" : 3,
          "value" : end
        }
      }), document["createTextNode"](" %")])]), callback({
        "type" : "tr",
        "style" : "background-color:rgba(0,0,0,0);"
      }, [this["display"]["sectorsOpacity"]["desc"] = callback({
        "type" : "td",
        "text" : "Sectors opacity :"
      }), callback({
        "type" : "td"
      }, [this["display"]["sectorsOpacity"]["input"] = callback({
        "type" : "input",
        "listeners" : {
          "input" : function show() {
            /** @type {number} */
            var i = parseInt(this["value"]);
            if (!isNaN(i)) {
              options["set"]("sectorsOpacity", index = i / (-8273 + -5478 * 1 + 13851));
              proto["interfaces"]["sectors"]["setOpacity"](index);
            }
            clear();
          },
          "focus" : function focus() {
            return _0x452ec7 = true;
          },
          "blur" : function blur() {
            return _0x452ec7 = false;
          }
        },
        "attributes" : {
          "maxlength" : 3,
          "value" : index * (-6684 + 4 * 1843 + -588)
        }
      }), document["createTextNode"](" %")])]), callback({
        "type" : "tr",
        "style" : "background-color:rgba(0,0,0,0);"
      }, [this["display"]["backgroundOpacity"]["desc"] = callback({
        "type" : "td",
        "text" : "Sectors opacity :"
      }), callback({
        "type" : "td"
      }, [this["display"]["backgroundOpacity"]["input"] = callback({
        "type" : "input",
        "listeners" : {
          "input" : function _addPropTween() {
            /** @type {number} */
            var normalized_images = parseInt(this["value"]);
            if (!isNaN(normalized_images)) {
              options["set"]("backgroundOpacity", first = normalized_images / (65 * 136 + 4694 * 1 + -13434));
              proto["setOpacity"](first);
            }
          },
          "focus" : function focus() {
            return _0x452ec7 = true;
          },
          "blur" : function blur() {
            return _0x452ec7 = false;
          }
        },
        "attributes" : {
          "maxlength" : 3,
          "value" : first * (3 * -1887 + 9615 + -94 * 41)
        }
      }), document["createTextNode"](" %")])])]));
      this["options"] = {};
      /**
       * @param {?} opt
       * @param {!Function} all
       * @return {?}
       */
      this["addOption"] = function(opt, all) {
        var b = void 0;
        var ret = void 0;
        var res = callback({
          "type" : "div",
          "class" : "settings-option",
          "listeners" : {
            "onclick" : all
          }
        }, [b = callback({
          "type" : "span"
        }), ret = callback({
          "type" : "span"
        })]);
        return res["desc"] = b, res["button"] = ret, this["tabs"]["settings"]["appendChild"](res), this["options"][opt] = res;
      };
      this["addOption"]("cursorColor", function() {
        var item = list["indexOf"](value) + (79 * 46 + 3233 + -6866);
        if (item === list["length"]) {
          /** @type {number} */
          item = -6658 + 1644 * 4 + -41 * -2;
        }
        options["set"]("cursorColor", this["button"]["innerText"] = this["button"]["style"]["color"] = value = list[item]);
        proto["interfaces"]["cover"]["draw"]();
      });
      this["addOption"]("grid", function() {
        this["button"]["innerText"] = isUndefined(options["set"]("grid", height = !height));
        proto["interfaces"]["cover"]["draw"]();
      });
      this["addOption"]("theme", function() {
        return alert("Will be soon (or no)");
      });
      this["addOption"]("sectors", function() {
        this["button"]["innerText"] = isUndefined(options["set"]("sectors", dark = !dark));
        if (!dark) {
          proto["interfaces"]["sectors"]["clear"]();
        }
        clear();
      });
      this["addOption"]("detector", function() {
        options["set"]("detector", item = !item);
        this["button"]["innerText"] = isUndefined(item);
        done();
        proto["interfaces"]["cover"]["draw"]();
      });
      this["addOption"]("autoSelect", function() {
        this["button"]["innerText"] = isUndefined(options["set"]("autoSelect", jqName = !jqName));
      });
      this["addOption"]("phantomPxls", function() {
        this["button"]["innerText"] = isUndefined(options["set"]("phantomPxls", a = !a));
      });
      this["addOption"]("buffNote", function() {
        this["button"]["innerText"] = isUndefined(options["set"]("buffNote", width = !width));
      });
      this["addOption"]("sync", function() {
        options["set"]("sync", dir = !dir);
        this["button"]["innerText"] = isUndefined(dir);
        done();
        proto["interfaces"]["cover"]["draw"]();
      });
      this["addOption"]("language", function() {
        var args = Object["keys"](self["languages"]);
        var name = args["indexOf"](self["getLanguage"]()) + (491 * -1 + -8273 + 1753 * 5);
        if (name === args["length"]) {
          /** @type {number} */
          name = -4212 + -57 * 17 + 5181;
        }
        options["set"]("language", self["setLanguage"](args[name]));
        Forge["changeLanguage"](self["getLanguage"]());
      });
      this["options"]["cursorColor"]["button"]["innerText"] = value;
      this["options"]["cursorColor"]["button"]["style"]["color"] = value;
      this["options"]["grid"]["button"]["innerText"] = isUndefined(height);
      this["options"]["theme"]["button"]["innerText"] = params["getTheme"]();
      this["options"]["sectors"]["button"]["innerText"] = isUndefined(dark);
      this["options"]["detector"]["button"]["innerText"] = isUndefined(item);
      this["options"]["autoSelect"]["button"]["innerText"] = isUndefined(jqName);
      this["options"]["phantomPxls"]["button"]["innerText"] = isUndefined(a);
      this["options"]["buffNote"]["button"]["innerText"] = isUndefined(width);
      this["options"]["sync"]["button"]["innerText"] = isUndefined(dir);
      this["options"]["language"]["button"]["innerText"] = self["getLanguage"]();
      this["elements"]["cancel"]["addEventListener"]("click", function() {
        return settings["window"]["style"]["display"] = "none";
      });
      /**
       * @param {?} modelInstanceOrCreateMap
       * @return {undefined}
       */
      this["changeLanguage"] = function(modelInstanceOrCreateMap) {
        var data = this;
        self["setLanguage"](modelInstanceOrCreateMap);
        this["options"]["language"]["button"]["innerText"] = self["getLanguage"]();
        this["elements"]["title"]["innerHTML"] = self["title"];
        isFunction(self["options"], function(text, key) {
          if (data["options"][key]) {
            data["options"][key]["desc"]["innerText"] = text;
          }
        });
        isFunction(self["display"], function(text, i) {
          if (data["display"][i]) {
            data["display"][i]["desc"]["innerText"] = text;
          }
        });
        this["elements"]["footer"]["innerHTML"] = self["footer"];
        this["updateTitles"]();
      };
      /**
       * @return {undefined}
       */
      this["updateTitles"] = function() {
        var command = this;
        isFunction(self["optionsTitles"], function(url, i) {
          if (command["options"][i]) {
            command["options"][i]["setAttribute"]("title", url);
          }
        });
      };
      /**
       * @return {undefined}
       */
      this["clearFactions"] = function() {
        /** @type {string} */
        Forge["tabs"]["factions"]["innerHTML"] = "";
        Forge["factions"] = {};
      };
      this["factions"] = {};
      /**
       * @param {string} name
       * @param {string} canCreateDiscussions
       * @param {!Function} zoomToFeature
       * @return {undefined}
       */
      this["addFaction"] = function(name, canCreateDiscussions, zoomToFeature) {
        this["factions"][name] = callback({
          "type" : "div",
          "class" : "text-button",
          "style" : "color:" + canCreateDiscussions + "; padding-left:5px;",
          "text" : name,
          "listeners" : {
            "click" : zoomToFeature
          }
        });
        this["tabs"]["factions"]["appendChild"](this["factions"][name]);
      };
      /**
       * @param {?} text
       * @return {undefined}
       */
      this["setTheme"] = function(text) {
        params["setTheme"](text);
        this["options"]["theme"]["button"]["innerText"] = text;
        params["dynamicStyleElement"]["innerHTML"] = params["html"];
      };
    };
    var debugObject = new UrdfMaterial;
    settings["addTab"]("plugins");
    /** @type {string} */
    settings["tabs"]["plugins"]["style"]["overflowY"] = "scroll";
    /** @type {string} */
    settings["tabs"]["plugins"]["style"]["display"] = "none";
    /** @type {string} */
    settings["elements"]["icons"]["plugins"]["style"]["display"] = "none";
    debugObject["loadData"](exposed_ports)["then"](function() {
      console["log"]("Plugins loaded", debugObject);
      /** @type {!Array} */
      var indents = [];
      isFunction(debugObject["plugins"], function(input) {
        /**
         * @param {!Object} PL$15
         * @return {?}
         */
        function load(PL$15) {
          return function() {
            if (this["checked"]) {
              if (!PL$30["includes"](PL$15["name"])) {
                PL$30["push"](PL$15["name"]);
              }
            } else {
              if (PL$30["includes"](PL$15["name"])) {
                PL$30["splice"](PL$30["indexOf"](PL$15["name"]), -3310 * 1 + -5941 * 1 + 9252);
              }
            }
            options["save"]();
          };
        }
        indents["push"](callback({
          "type" : "div",
          "class" : "plugin"
        }, [callback({
          "type" : "div",
          "style" : "font-size: 15px; font-size: 17px;",
          "text" : input["name"]
        }), callback({
          "type" : "div",
          "style" : "margin-left: 2.5%; color: grey;"
        }, [callback({
          "type" : "div",
          "text" : input["desc"]
        }), callback({
          "type" : "div"
        }, [document["createTextNode"]("Included: "), callback({
          "type" : "input",
          "attributes" : {
            "type" : "checkbox",
            "checked" : PL$30["includes"](input["name"])
          },
          "listeners" : {
            "onclick" : load(input)
          }
        })])])]));
        indents["push"](callback({
          "type" : "hr"
        }));
      });
      if (indents["length"]) {
        indents["pop"]();
      }
      indents["forEach"](function(factory) {
        return settings["tabs"]["plugins"]["appendChild"](factory);
      });
      isFunction(debugObject["plugins"], function(audio) {
        console["log"]("Load plugin\nname: " + audio["name"] + "\nsrc: " + audio["src"]);
        audio["load"]();
      });
    })["catch"](console["error"]);
    settings["changeLanguage"](self["getLanguage"]());
    settings["activateTab"]("settings");
    settings["setTheme"](params["theme"]);
    window["addEventListener"]("resize", create);
    if (!hasTouch && !szData) {
      window["addEventListener"]("keydown", function(event) {
        var keyCode = event.keyCode;
        switch(keyCode) {
          case -5922 + 1 * 1623 + -309 * -14:
            /** @type {string} */
            settings["window"]["style"]["display"] = "none";
            break;
          case -4722 + -2689 * -3 + -3297:
            if (_0x452ec7) {
              return;
            }
            if (options["set"]("debug", flag = !flag)) {
              console["log"]("Debug is enabled");
            } else {
              console["log"]("Debug is off");
            }
            break;
          case -8137 + -2 * -3659 + -868 * -1:
            if (_0x452ec7) {
              return;
            }
            if (settings["window"]["style"]["display"] === "none") {
              /** @type {string} */
              settings["window"]["style"]["display"] = "block";
              settings["activateTab"]("factions");
            } else {
              if (settings["activeTab"] === "factions") {
                /** @type {string} */
                settings["window"]["style"]["display"] = "none";
              } else {
                settings["activateTab"]("factions");
              }
            }
            break;
          case 1385 + 389 * 13 + -3196 * 2:
            if (_0x452ec7) {
              return;
            }
            if (settings["window"]["style"]["display"] === "none") {
              /** @type {string} */
              settings["window"]["style"]["display"] = "block";
              settings["activateTab"]("settings");
            } else {
              if (settings["activeTab"] === "settings") {
                /** @type {string} */
                settings["window"]["style"]["display"] = "none";
              } else {
                settings["activateTab"]("settings");
              }
            }
            break;
          case -6233 + 9388 + -2 * 1552:
            if (_0x452ec7) {
              return;
            }
            if (settings["window"]["style"]["display"] === "none") {
              /** @type {string} */
              settings["window"]["style"]["display"] = "block";
              settings["activateTab"]("display");
            } else {
              if (settings["activeTab"] === "display") {
                /** @type {string} */
                settings["window"]["style"]["display"] = "none";
              } else {
                settings["activateTab"]("display");
              }
            }
            break;
          case -8257 + 2 * 4429 + -549:
            if (_0x452ec7) {
              return;
            }
            settings["options"]["detector"]["desc"]["click"]();
            break;
        }
      });
    }
    proto["interfaces"]["sectors"]["setOpacity"](index);
    proto["setOpacity"](first);
    if (options["get"]("mapClosed")) {
      proto["close"]();
    } else {
      proto["open"]();
    }
    if (window["mapModules"] && window["mapModules"]["length"]) {
      /** @type {number} */
      var i = 9724 + 536 + -10260;
      for (; i !== window["mapModules"]["length"]; i++) {
        satisfy(window["mapModules"][i]);
        window["mapModules"]["splice"](i, -3420 + 8659 + -291 * 18);
        i--;
      }
    }
    /** @type {function(!Object): undefined} */
    window["initModule"] = satisfy;
  }, {
    "./mapConfig.json" : 2,
    "./resources/canvas.json" : 3,
    "./resources/constants.json" : 4,
    "./resources/i18n" : 5,
    "./resources/links.json" : 6,
    "./resources/selectors.json" : 7,
    "./resources/style" : 8,
    "./utils/BigMessage" : 9,
    "./utils/Chunk" : 10,
    "./utils/Palette" : 11,
    "./utils/Plugins" : 12,
    "./utils/Template" : 13,
    "./utils/TemplatesInterface" : 14,
    "./utils/UserOptions" : 15,
    "./utils/WSTemplate" : 17,
    "./utils/functions" : 18
  }],
  2 : [function(canCreateDiscussions, window, isSlidingUp) {
    window["exports"] = {
      "VERSION" : "2.7.2.4",
      "CURSOR_COLORS" : ["Black", "Gray", "White", "Fuchsia", "Red", "Yellow", "Lime", "SpringGreen", "Aqua", "Blue"],
      "DEFAULT_PLUGINS" : ["Buff Notifications"],
      "debug" : true,
      "BASIC_MODE" : false
    };
  }, {}],
  3 : [function(canCreateDiscussions, module, isSlidingUp) {
    module["exports"] = {
      "CHUNK_SIZE" : 256,
      "COLORS" : [[-1271 * 7 + 39 * -88 + 3 * 4177, -384 * 24 + -7830 + 17273, 4272 + 1411 + -236 * 23], [-5187 + -1992 + -3717 * -2, 1801 + 2879 * -1 + 1333, -1 * 8623 + 7932 + -1 * -946], [9923 + 1003 * 4 + -13680, 7 * 1046 + 1734 * -3 + -1865, 1978 + 86 * 42 + -97 * 55], [8486 + 2 * 3278 + -14814, -6362 + -3 * 289 + -7457 * -1, -534 + 97 * -37 + 4351], [-4 * -2081 + 8063 * -1 + -65, 419 * -3 + -9175 + 10628, -9980 + 200 * -2 + -2 * -5288], [5721 + 5581 * 1 + 3722 * -3, 6459 * -1 + 7 * -56 + 137 * 
      51, -13 * -481 + 9619 + -15736], [-5296 + 29 * -109 + 1707 * 5, 4367 + -1 * 1063 + -3226 * 1, -2602 + -8003 * -1 + 5323 * -1], [2 * 687 + 5980 + -1 * 7354, -4156 * -2 + -1 * -2089 + -10401 * 1, 3 * -459 + -1639 * 4 + 7933], [-1649 + 9026 + 7 * -1019, 8591 + 484 * -14 + -818 * 2, -663 + -1 * 1983 + 2820], [4829 + 3187 * 1 + -7761, 970 + -2568 + 1765, -17 * -94 + 3918 + -5307], [-1686 * 3 + 367 * -11 + 9350, 169 * -46 + 8514 + -656, 434 * -1 + 98 * -99 + -6 * -1719], [-1 * -6673 + 7840 + -14258, 
      -9839 + -283 * 11 + 13053, 4365 + 1244 + -162 * 34], [-3257 + -9384 + -330 * -39, 1138 * 5 + -5908 + -218 * -1, -9957 + -3 * 2798 + 18351], [293 * 21 + -2 * 994 + -4011, 242 + 4344 + 2 * -2293, -2371 + -1019 + -6 * -565], [-1 * 2059 + -5 * 1999 + 12308, -1 * -8276 + 2689 * 2 + -13490, -1 * -2004 + -1 * -1457 + 3365 * -1], [-3459 + 351 + -3337 * -1, -3120 + -938 + 4207, -2631 + -1008 + 3639], [454 + 1537 * 1 + -1831 * 1, 21 * 15 + 1238 * -7 + -3 * -2819, -2161 + -8997 + 11224 * 1], [-9157 + 
      -1284 + -1 * -10537, -1187 * -1 + -668 * -8 + -6467, 1 * -7573 + -149 * 43 + -14020 * -1], [-7292 + -25 * -271 + 762, -5714 + 5888 * -1 + 5 * 2365, 7827 + 9091 + 2 * -8371], [-1229 + -7371 + -1771 * -5, -9930 + 1 * 219 + 9959, 163 * 59 + 93 * -58 + -4086], [6379 + 1 * -5927 + -223, 905 + -1575 + 887, -9143 * 1 + 1 * -8356 + 17499], [-1489 + -9769 + -5703 * -2, -7924 + 1213 * 7 + -343, 7900 + -2081 * -4 + -16156], [-8216 + -8223 + -41 * -401, -6759 + -5649 + -2 * -6299, 8643 + -66 * 86 + -1483 * 
      2], [6067 + 1 * -6107 + 144, 3614 + 9421 + -12904, 3980 * -1 + -1693 + 5729], [-1 * 8361 + 5992 + -103 * -23, -7020 + -2077 * -4 + -1187, 14 * -24 + -7349 * -1 + -6994], [-1607 + 6261 * -1 + 4035 * 2, 1284 + -1 * -7670 + -8727, 1049 * -1 + -7230 + 251 * 34], [5822 + -2144 * 4 + 2754, 1 * 6167 + -583 + -597 * 9, 8499 * -1 + -1 * -2887 + 5833], [-197 * 17 + 4180 + -831, 1 * 3918 + -3615 + -172, 1208 + -5930 + 4921], [1483 * 4 + 5323 + -11255, 1 * -881 + 1 * -4339 + 2 * 2610, 31 * 308 + 3 * 1469 + 
      1 * -13721], [8362 + -5039 + -1649 * 2, 1 * -58 + 9 * 16 + -61, -5761 + 1629 * 1 + 1 * 4247], [-28 * -122 + 293 * 29 + -11706, -9069 + -28 * -89 + 2229 * 3, -5 * -141 + 69 * 83 + -33 * 188], [-1 * 3491 + 8009 + 4 * -1097, 6587 * -1 + -3 * -1463 + -314 * -7, 7712 * 1 + 2144 + -9728]]
    };
  }, {}],
  4 : [function(canCreateDiscussions, module, isSlidingUp) {
    module["exports"] = {
      "MAP_MIN_WIDTH" : 25,
      "MAP_MAX_WIDTH" : 50,
      "MAP_MIN_HEIGHT" : 33,
      "MAP_MAX_HEIGHT" : 50
    };
  }, {}],
  5 : [function(saveNotifs, data, canCreateDiscussions) {
    var PhaserNano = saveNotifs("../mapConfig.json");
    var v = PhaserNano.VERSION;
    data["exports"] = {
      "ru" : {
        "title" : "MLP : Pixel \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u0430",
        "options" : {
          "cursorColor" : "\u0426\u0432\u0435\u0442 \u043a\u0443\u0440\u0441\u043e\u0440\u0430: ",
          "grid" : "\u0421\u0435\u0442\u043a\u0430: ",
          "theme" : "\u0422\u0435\u043c\u0430: ",
          "detector" : "\u0414\u0435\u0442\u0435\u043a\u0442\u043e\u0440 \u043e\u0448\u0438\u0431\u043e\u043a: ",
          "autoSelect" : "\u0410\u0432\u0442\u043e\u0432\u044b\u0431\u043e\u0440 \u0446\u0432\u0435\u0442\u0430: ",
          "phantomPxls" : "\u0424\u0430\u043d\u0442\u043e\u043c\u043d\u044b\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0438: ",
          "buffNote" : "\u041e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0431\u0430\u0444\u0435: ",
          "language" : "\u042f\u0437\u044b\u043a: ",
          "sync" : "\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0443\u043c\u0430: ",
          "sectors" : "\u0421\u0435\u043a\u0442\u043e\u0440\u0430: "
        },
        "display" : {
          "width" : "\u0428\u0438\u0440\u0438\u043d\u0430: ",
          "height" : "\u0412\u044b\u0441\u043e\u0442\u0430: ",
          "sectorsOpacity" : "\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u0435\u043a\u0442\u043e\u0440\u043e\u0432: ",
          "backgroundOpacity" : "\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0444\u043e\u043d\u0430: "
        },
        "optionsTitles" : {
          "cursorColor" : "\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0446\u0432\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u044f \u0432 \u043a\u0430\u0440\u0442\u0435",
          "grid" : "\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442/\u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0435\u0442\u043a\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u043c\u0438 \u043f\u0440\u0438 \u0441\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u044b",
          "theme" : "(\u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442)",
          "detector" : "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0440\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u044b \u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u043a",
          "autoSelect" : "\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442/\u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u044b\u0431\u043e\u0440 \u0446\u0432\u0435\u0442\u0430 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439, \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c \u0432 \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u0435",
          "phantomPxls" : "\u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
          "buffNote" : "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u043e\u0432\u0435\u0449\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0431\u0430\u0444\u0435 \u043d\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u043d\u044b\u0439 \u043a\u0443\u043b\u0434\u0430\u0443\u043d",
          "language" : "Change the language of the minimap",
          "sync" : "\u0417\u0443\u043c \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u044b \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0437\u0443\u043c\u043e\u043c \u0438\u0433\u0440\u044b",
          "sectors" : "\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442/\u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0435\u043a\u0442\u043e\u0440\u043e\u0432, \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"
        },
        "notifications" : {
          "eventWin" : "\u041a\u0443\u043b\u0434\u0430\u0443\u043d \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d \u0432\u0434\u0432\u043e\u0435"
        },
        "footer" : '\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u0443\u0447\u0435\u043d\u044b\u043c\u0438 <a style = "color:aqua;" href="https://vk.com/endlessnight24">NLR</a> \u0434\u043b\u044f <a style="color:#1992E3;" href="https://vk.com/mlp_pixel">MLPP</a> | V. ' + v
      },
      "en" : {
        "title" : "MLP : Pixel minimap",
        "options" : {
          "cursorColor" : "Cursor color: ",
          "grid" : "Grid: ",
          "theme" : "Theme: ",
          "detector" : "Error detector: ",
          "autoSelect" : "Auto color selection: ",
          "phantomPxls" : "Phantom pixels: ",
          "buffNote" : "Buff notifications: ",
          "language" : "Language: ",
          "sync" : "Zoom sync: ",
          "sectors" : "Sectors: "
        },
        "display" : {
          "width" : "Width: ",
          "height" : "Height: ",
          "sectorsOpacity" : "Sectors opacity: ",
          "backgroundOpacity" : "Background opacity: "
        },
        "optionsTitles" : {
          "cursorColor" : "\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0446\u0432\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u044f \u0432 \u043a\u0430\u0440\u0442\u0435",
          "grid" : "\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442/\u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0435\u0442\u043a\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u043c\u0438 \u043f\u0440\u0438 \u0441\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u044b",
          "theme" : "(\u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442)",
          "detector" : "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0440\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u044b \u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u043a",
          "autoSelect" : "\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442/\u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u044b\u0431\u043e\u0440 \u0446\u0432\u0435\u0442\u0430 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439, \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c \u0432 \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u0435",
          "phantomPxls" : "\u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
          "buffNote" : "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u043e\u0432\u0435\u0449\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0431\u0430\u0444\u0435 \u043d\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u043d\u044b\u0439 \u043a\u0443\u043b\u0434\u0430\u0443\u043d",
          "language" : "Change the language of the minimap",
          "sync" : "\u0417\u0443\u043c \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u044b \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0437\u0443\u043c\u043e\u043c \u0438\u0433\u0440\u044b",
          "sectors" : "\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442/\u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0435\u043a\u0442\u043e\u0440\u043e\u0432, \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"
        },
        "notifications" : {
          "eventWin" : "Cooldown reduced by half"
        },
        "footer" : 'Created by <a style = "color:aqua;" href="https://vk.com/endlessnight24">NLR</a> scientists for <a style="color:#1992E3;" href="https://vk.com/mlp_pixel">MLPP</a> | V. ' + v
      },
      "tr" : {
        "title" : "MLP : Pixel mini Haritas\u0131",
        "options" : {
          "cursorColor" : "\u0130mle\u00e7 rengi: ",
          "grid" : "Izgara: ",
          "theme" : "Tema: ",
          "detector" : "Hata dedekt\u00f6r\u00fc: ",
          "autoSelect" : "Otomatik renk se\u00e7me: ",
          "phantomPxls" : "Phantom pixels: ",
          "buffNote" : "Buff notifications: ",
          "language" : "Dil: ",
          "sync" : "Zoom sync: ",
          "sectors" : "Sectors: "
        },
        "display" : {
          "width" : "Width: ",
          "height" : "Height: ",
          "sectorsOpacity" : "Sectors opacity: ",
          "backgroundOpacity" : "Background opacity: "
        },
        "optionsTitles" : {
          "cursorColor" : "\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0446\u0432\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u044f \u0432 \u043a\u0430\u0440\u0442\u0435",
          "grid" : "\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442/\u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0435\u0442\u043a\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u043c\u0438 \u043f\u0440\u0438 \u0441\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u044b",
          "theme" : "(\u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442)",
          "detector" : "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0440\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u044b \u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u043a",
          "autoSelect" : "\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442/\u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u044b\u0431\u043e\u0440 \u0446\u0432\u0435\u0442\u0430 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439, \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c \u0432 \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u0435",
          "phantomPxls" : "\u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
          "buffNote" : "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u043e\u0432\u0435\u0449\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0431\u0430\u0444\u0435 \u043d\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u043d\u044b\u0439 \u043a\u0443\u043b\u0434\u0430\u0443\u043d",
          "language" : "Change the language of the minimap",
          "sync" : "\u0417\u0443\u043c \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u044b \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0437\u0443\u043c\u043e\u043c \u0438\u0433\u0440\u044b",
          "sectors" : "\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442/\u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0435\u043a\u0442\u043e\u0440\u043e\u0432, \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"
        },
        "notifications" : {
          "eventWin" : "Cooldown reduced by half"
        },
        "footer" : 'Arkada\u015flar i\u00e7in <a style = "color:aqua;" href="https://vk.com/endlessnight24">NLR</a> Bilim Adamlar\u0131 taraf\u0131ndan olu\u015fturuldu | V. ' + v
      }
    };
  }, {
    "../mapConfig.json" : 2
  }],
  6 : [function(canCreateDiscussions, module, isSlidingUp) {
    module["exports"] = {
      "FACTIONS_SRC" : "https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/MLPP/PixelPlanet/factions.json",
      "PLUGINS_SRC" : "https://raw.githubusercontent.com/EndlessNightNLR/minimap-plugins/master/data.json",
      "CODE_INJECTION_SRC" : "https://endlessnightnlr.github.io/test.js",
      "GEAR_ICON_SRC" : "https://endlessnightnlr.github.io/MLPP/gear.png"
    };
  }, {}],
  7 : [function(canCreateDiscussions, module, isSlidingUp) {
    module["exports"] = {
      "selectedColor" : ".selected",
      "coords" : ".coorbox",
      "palettebox" : "#palettebox",
      "gameCanvas" : ".viewport"
    };
  }, {}],
  8 : [function(canCreateDiscussions, module, isSlidingUp) {
    /** @type {string} */
    module["exports"] = "\n    .text-button{\n        cursor:pointer;\n    }\n    .minimap{\n        font-weight:bold;\n        line-height:22px;\n    }\n    .NLRGeneral{\n        font-family:arial;\n        line-height:normal;\n    }\n    .NLRGeneral input{\n        border-color: rgb(50,50,50);\n        background-color: rgba(0,0,0,0);\n        color: white;\n        width: 30px;\n    }\n    .minimap-display{\n        position:absolute;\n        top :0;\n        left:0;\n        width :100%;\n        height:100%;\n    }\n    .settings-option{\n        cursor:pointer;\n        padding-left: 5px;\n    }\n    .settings-option:hover{\n        background: linear-gradient(to right, rgba(0,240,240,0.75) 25%, rgba(0,0,0,0) 100%);\n        padding-left:10px;\n    }\n    .sub-settings{\n        width:100%;\n        height:100%;\n        display:inline-block;\n    }\n    .NLRGeneral td{\n        line-height:16px;\n        padding: 2px;\n        border:0px red solid;\n    }\n    .NLRGeneral table{\n        line-height:16px;\n        margin-left:5px;\n        padding: 2px;\n    }\n    .NLRGeneral .plugin{\n        padding-left: 2.5%;\n    }\n    .center{\n        position:absolute;\n        top :50%;\n        left:50%;\n        transform:translate(-50%,-50%);\n    }\n    .minimap-panel-button{\n        width: 25px;\n        height: 25px;\n        padding: 10px;\n        background: rgba(0,0,0,0.9);\n        border:2px rgba(50,50,50,0.9) solid;\n        border-radius:15px;\n        -moz-border-radius:15px;\n        cursor: pointer;\n    }\n    .big-message{\n        z-index: 9999;\n        min-width: 45%;\n        max-width: 65%;\n        min-height: 50%;\n        max-height: 80%;\n        border: 2px solid rgba(50, 50, 50, 0.9);\n        background-color: rgba(0,0,0,0.9);\n    }\n    #box{\n        position:absolute;\n        width:100%;\n        height:100%;\n        background-color:rgba(0,0,0,0);\n        border-left: 1px rgba(50,50,50,0.9) solid;\n    }\n    #box canvas{\n        position:absolute;\n        width:100%;\n        height:100%;\n    }\n    #config{\n        margin:0;\n        padding: 2px;\n        position: absolute;\n        bottom: 0;\n        margin-bottom:1px;\n        transform: translate(0,100%);\n        width: 100%;\n        font-size: 15px;\n        background-color: rgba(0,0,0,0.9);\n        border: 1px rgba(50,50,50,0.9) solid;\n        border-right: none;\n    }\n    #text{\n        position:relative;\n        top:0;\n        right:0;\n        width:auto;\n        padding:5px;\n        text-align:center;\n        background-color:rgba(0,0,0,0.9);\n        border-left:1px rgba(50,50,50,0.9) solid;\n        border-bottom:1px rgba(50,50,50,0.9) solid;\n    }\n    #settings-button{\n        cursor:pointer;\n    }\n    #sub-map-panel{\n        position:absolute;\n        top:0;\n        left:0;\n        transform: translate(-100%);\n        margin-top:5px;\n        margin-left:-5px;\n    }\n";
  }, {}],
  9 : [function(baseTemp, module, canCreateDiscussions) {
    var base = baseTemp("./functions");
    var _extends = base.factory;
    module["exports"] = function() {
      /**
       * @return {undefined}
       */
      function init() {
        var options = this;
        _classCallCheck(this, init);
        this["body"] = _extends({
          "type" : "div",
          "class" : "NLRGeneral center big-message",
          "style" : "\n\t\t\t\tdisplay: none;\n\t            color:rgb(250,250,250);\n\t            background-color: rgba(0,0,0,0.9);\n\t            border-radius:1px;\n\t\t\t"
        }, [_extends({
          "type" : "div",
          "style" : "border-bottom: 1px rgba(50,50,50,0.9) solid; line-height:32px; padding: 5px;",
          "html" : '\n\t\t\t\t\t<svg class="text-button" style="position:fixed; right:0px; margin:9px;" height="16" width="16" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5">\n\t                    <path d="M 1 1 L 15 15 M 15 1 L 1 15" fill="transparent" stroke="white"></path>\n\t                </svg>\n                '
        }, [document["createTextNode"]("Message")]), this["container"] = _extends({
          "type" : "div",
          "style" : "\n\t\t\t\t    white-space: pre-wrap;\n\t\t\t\t    word-wrap: break-word;\n\t\t\t\t\tpadding: 5px;\n\t\t\t\t\toverflow-y: scroll;\n\t\t\t\t\tline-height: 16px;\n\t\t\t\t\tuser-select: text;\n\t\t\t\t"
        })]);
        document["body"]["appendChild"](this["body"]);
        /**
         * @return {?}
         */
        this["body"]["getElementsByTagName"]("svg")[8 * 1238 + 2 * -4664 + -576]["onclick"] = function() {
          return options["hide"]();
        };
        this["blocker"] = _extends({
          "type" : "div",
          "class" : "NLRGeneral",
          "style" : "\n\t\t\t\tdisplay: none;\n\t\t\t\tz-index: 9998;\n\t\t        position: fixed;\n\t\t        background-color: rgba(0,0,0,0.9);\n\t\t        top: 0px;\n\t\t        left: 0px;\n\t\t        width: 100%;\n\t\t        height: 100%;\n\t\t\t",
          "listeners" : {
            "onclick" : function checkBackTop() {
              return options["hide"]();
            }
          }
        });
        document["body"]["appendChild"](this["blocker"]);
        /** @type {boolean} */
        this["showed"] = false;
      }
      _createClass(init, [{
        key : "_updateContainerSize",
        value : function createCanvas() {
          this["container"]["style"]["height"] = this["body"]["clientHeight"] + "px";
        }
      }, {
        key : "write",
        value : function setProperties(text) {
          this["container"]["innerHTML"] = text;
          this["_updateContainerSize"]();
        }
      }, {
        key : "show",
        value : function showMenu() {
          /** @type {string} */
          this["body"]["style"]["display"] = "block";
          /** @type {string} */
          this["blocker"]["style"]["display"] = "block";
          this["_updateContainerSize"]();
          /** @type {boolean} */
          this["showed"] = true;
        }
      }, {
        key : "hide",
        value : function hide() {
          /** @type {string} */
          this["body"]["style"]["display"] = "none";
          /** @type {string} */
          this["blocker"]["style"]["display"] = "none";
          /** @type {boolean} */
          this["showed"] = false;
        }
      }]);
      return init;
    }();
  }, {
    "./functions" : 18
  }],
  10 : [function(factory, module, canCreateDiscussions) {
    var sample = factory("../resources/canvas.json");
    var delta = sample.CHUNK_SIZE;
    module["exports"] = function() {
      /**
       * @param {?} y
       * @param {?} ocolor
       * @param {?} in_data
       * @return {undefined}
       */
      function Premonish(y, ocolor, in_data) {
        _classCallCheck(this, Premonish);
        this["x"] = y;
        this["y"] = ocolor;
        this["data"] = in_data;
        this["lastUsing"] = Date["now"]();
        /** @type {null} */
        this["_c"] = null;
      }
      _createClass(Premonish, [{
        key : "get",
        value : function _run(x, i) {
          return this["_c"] = x + i * delta << 1312 + -879 * -4 + 4826 * -1, [this["data"][this["_c"]], this["data"][this["_c"] + (1291 * 7 + 2137 * -2 + -4762 * 1)], this["data"][this["_c"] + (-2 * -4427 + -5426 + -2 * 1713)]];
        }
      }, {
        key : "set",
        value : function update(start, count, values) {
          var _ref10;
          return this["_c"] = start + count * delta << -9937 + -9868 * 1 + 19807, _ref10 = [].concat(_toConsumableArray(values)), this["data"][this["_c"]] = _ref10[0], this["data"][this["_c"] + (1 * 9043 + -133 * 15 + 3 * -2349)] = _ref10[1], this["data"][this["_c"] + (95 * -82 + 1 * -4848 + -4 * -3160)] = _ref10[2], _ref10;
        }
      }]);
      return Premonish;
    }();
  }, {
    "../resources/canvas.json" : 3
  }],
  11 : [function(Mathematics, module, canCreateDiscussions) {
    var math = Mathematics("./functions");
    var abs = math.abs;
    module["exports"] = function() {
      /**
       * @return {undefined}
       */
      function BarChart() {
        _classCallCheck(this, BarChart);
        /** @type {null} */
        this["elems"] = null;
        /** @type {null} */
        this["colors"] = null;
      }
      _createClass(BarChart, [{
        key : "setColors",
        value : function render(count) {
          this["colors"] = count["map"](function(parts_1) {
            return [].concat(_toConsumableArray(parts_1));
          });
        }
      }, {
        key : "same",
        value : function subtract(subtractor, subtractee) {
          var ANIMATED_SCROLLER_PRECISION = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 936 + 224 * -41 + 1 * 8263;
          return abs(subtractor[18 * -478 + 2 * -2351 + -2 * -6653] - subtractee[1 * -9224 + -6399 + 15623]) < ANIMATED_SCROLLER_PRECISION && abs(subtractor[5022 + 461 * -7 + -1794] - subtractee[-6349 + 37 * -141 + 11567]) < ANIMATED_SCROLLER_PRECISION && abs(subtractor[-1754 + 1988 + 58 * -4] - subtractee[-292 * -20 + 9861 * -1 + 27 * 149]) < ANIMATED_SCROLLER_PRECISION;
        }
      }, {
        key : "has",
        value : function $get(mmCoreSplitViewBlock) {
          return this["RGBToId"](mmCoreSplitViewBlock) !== null;
        }
      }, {
        key : "convert",
        value : function get(view) {
          var j = void 0;
          /** @type {number} */
          var minMinPeak = Infinity;
          var winMinPeak = void 0;
          var rect = void 0;
          /** @type {number} */
          var i = -8715 + 2 * 2797 + 3123;
          for (; i !== this["colors"]["length"]; i++) {
            rect = this["colors"][i];
            if (this["same"](rect, view)) {
              return rect;
            }
            winMinPeak = abs(rect[91 * 34 + 1 * -9775 + 6681] - view[2 * -820 + 1403 * -1 + 3043]) + abs(rect[1033 * 1 + -1 * -1786 + 1 * -2818] - view[3478 + 7424 + -10901]) + abs(rect[6707 + 7388 + -14093] - view[-37 * 36 + -9769 + 11103 * 1]);
            if (winMinPeak < minMinPeak) {
              minMinPeak = winMinPeak;
              /** @type {number} */
              j = i;
            }
          }
          return [].concat(_toConsumableArray(this["colors"][j]));
        }
      }, {
        key : "IdToRGB",
        value : function setColor(i) {
          return this["colors"][i];
        }
      }, {
        key : "RGBToId",
        value : function get(subsetArr) {
          /** @type {number} */
          var pid = this["colors"]["length"] - (3855 + 8973 + 101 * -127);
          for (; pid !== -(5021 + -35 * 73 + -17 * 145); pid--) {
            if (this["same"](this["colors"][pid], subsetArr)) {
              return pid;
            }
          }
          return null;
        }
      }, {
        key : "select",
        value : function set(val) {
          this["elems"][(typeof val === "undefined" ? "undefined" : _typeof(val)) === "object" ? this["RGBToId"](val) : val]["click"]();
        }
      }, {
        key : "onColorSelect",
        value : function onColorSelect() {
        }
      }, {
        key : "bindColorsWithElements",
        value : function build(data) {
          var player = this;
          data = Array["from"](data);
          this["elems"] = {};
          this["colors"]["forEach"](function(value, key) {
            var candy = data["find"](function(element) {
              return player["same"](value, element["style"]["backgroundColor"]["match"](/-?\d+/g)["map"](function(canCreateDiscussions) {
                return +canCreateDiscussions;
              }));
            });
            if (candy === void(-126 * 48 + -1777 * 1 + -7825 * -1)) {
              return console["error"]("Can't find element for color [" + value + "]");
            }
            player["elems"][key] = candy;
            player["elems"][key]["addEventListener"]("click", function() {
              return player["onColorSelect"]({
                "id" : key,
                "rgb" : value
              });
            });
          });
        }
      }]);
      return BarChart;
    }();
  }, {
    "./functions" : 18
  }],
  12 : [function(context, module, canCreateDiscussions) {
    var res = context("./functions");
    var $ = res.objForEach;
    var template = res.factory;
    var SmartObject = function() {
      /**
       * @param {!Object} message
       * @return {undefined}
       */
      function RexxarWidget(message) {
        var fromUserName = message.name;
        var description = message.desc;
        var id = message.src;
        _classCallCheck(this, RexxarWidget);
        this["name"] = fromUserName;
        this["desc"] = description;
        this["src"] = id;
        /** @type {boolean} */
        this["loadingStarted"] = false;
      }
      _createClass(RexxarWidget, [{
        key : "load",
        value : function update() {
          var _attrs = this;
          /** @type {boolean} */
          this["loadingStarted"] = true;
          fetch(this["src"])["then"](function(data) {
            if (!data["ok"]) {
              return console["warn"]("Module error: response isn't ok\nmodule name: " + _attrs["name"] + "\nsrc: " + _attrs["src"]);
            }
            return data["text"]();
          })["then"](function(filesTpl) {
            document["body"]["appendChild"](template({
              "type" : "script",
              "html" : filesTpl
            }));
          })["catch"](console["error"]);
        }
      }]);
      return RexxarWidget;
    }();
    module["exports"] = function() {
      /**
       * @return {undefined}
       */
      function PluginManager() {
        _classCallCheck(this, PluginManager);
        /** @type {null} */
        this["plugins"] = null;
      }
      _createClass(PluginManager, [{
        key : "get",
        value : function addPlugin(name) {
          return this["plugins"][name];
        }
      }, {
        key : "loadData",
        value : function friendlyFetch(url) {
          var settings = this;
          return new Promise(function(saveNotifs, onRejection) {
            fetch(url)["then"](function(options) {
              return options["json"]();
            })["then"](function(m) {
              settings["plugins"] = {};
              $(m, function(descriptor, name) {
                return settings["plugins"][name] = new SmartObject(Object["assign"](descriptor, {
                  "name" : name
                }));
              });
              saveNotifs();
            })["catch"](onRejection);
          });
        }
      }]);
      return PluginManager;
    }();
  }, {
    "./functions" : 18
  }],
  13 : [function(promiseSupplier, window, canCreateDiscussions) {
    var s = promiseSupplier("./functions");
    var f = s.loadImage;
    var exports = function() {
      /**
       * @param {!Object} c
       * @return {undefined}
       */
      function init(c) {
        var x = c.x;
        var nodeTly = c.y;
        var width = c.width;
        var h = c.height;
        var colname = c.name;
        var id = c.src;
        _classCallCheck(this, init);
        this["x1"] = x;
        this["y1"] = nodeTly;
        this["width"] = width;
        this["height"] = h;
        this["overrideEnds"]();
        this["name"] = colname;
        this["src"] = id;
        this["status"] = init["UNLOADED"];
        /** @type {null} */
        this["img"] = null;
        /** @type {null} */
        this["canvas"] = null;
      }
      _createClass(init, [{
        key : "intersects",
        value : function createSunArm(max2, val3, val4, max4) {
          return this["x1"] < val4 && this["x2"] > max2 && this["y1"] < max4 && this["y2"] > val3;
        }
      }, {
        key : "overrideEnds",
        value : function fillDiagonalStripePattern() {
          this["x2"] = this["x1"] + this["width"];
          this["y2"] = this["y1"] + this["height"];
        }
      }, {
        key : "load",
        value : function load() {
          var result = this;
          return this["status"] = init["LOADING"], new Promise(function(allDoneCb, localLoad) {
            if (result["src"] === null) {
              return console["error"]("Template src isn't defined"), localLoad();
            }
            f(result["src"])["then"](function(url) {
              result["img"] = url;
              result["canvas"] = document["createElement"]("canvas");
              result["width"] = result["canvas"]["width"] = result["img"]["width"];
              result["height"] = result["canvas"]["height"] = result["img"]["height"];
              result["overrideEnds"]();
              result["ctx"] = result["canvas"]["getContext"]("2d");
              result["ctx"]["drawImage"](result["img"], -9444 * 1 + -8532 + 17976, -470 + -1706 * 3 + -11 * -508);
              result["imageData"] = result["ctx"]["getImageData"](8176 + -5137 + -3039 * 1, 2654 * 1 + 1455 + -4109, result["width"], result["height"]);
              result["data"] = result["imageData"]["data"];
              result["status"] = init["LOADED"];
              allDoneCb(result);
            })["catch"](function(p2__3388_SHARP_) {
              return localLoad(p2__3388_SHARP_);
            });
          });
        }
      }]);
      return init;
    }();
    /** @type {number} */
    exports["UNLOADED"] = 3 * 3089 + -1 * 3437 + 1 * -5830;
    /** @type {number} */
    exports["LOADING"] = -7321 * 1 + -9329 + 16651;
    /** @type {number} */
    exports["LOADED"] = -7279 + -1125 * 3 + 10656;
    window["exports"] = exports;
  }, {
    "./functions" : 18
  }],
  14 : [function(require, module, canCreateDiscussions) {
    var rule = require("./functions");
    var allKeysEqual = rule.between;
    var filter = rule.objForEach;
    var obj = require("./Template");
    var attrs = void 0;
    var data = void 0;
    var odx = void 0;
    var i = void 0;
    module["exports"] = function() {
      /**
       * @return {undefined}
       */
      function SearchWorkerLoader() {
        _classCallCheck(this, SearchWorkerLoader);
        this["clear"]();
      }
      _createClass(SearchWorkerLoader, [{
        key : "clear",
        value : function get_shared_spice_data() {
          this["list"] = {};
        }
      }, {
        key : "load",
        value : function deleteStudy(studyId) {
          return this["list"][studyId]["load"]();
        }
      }, {
        key : "add",
        value : function add(val) {
          return this["list"][val["name"]] = val;
        }
      }, {
        key : "get",
        value : function get(key) {
          return key in this["list"] ? this["list"][key] : undefined;
        }
      }, {
        key : "getTemplatesAtZone",
        value : function init(row, context, module, data) {
          /** @type {!Array} */
          var obj = [];
          return filter(this["list"], function(value, canCreateDiscussions) {
            if (value["intersects"](row, context, module, data)) {
              obj["push"](value);
            }
          }), obj;
        }
      }, {
        key : "getPixelFromTemplates",
        value : function factory(b, a) {
          for (i in this["list"]) {
            attrs = this["list"][i];
            if (attrs["status"] !== obj["LOADED"]) {
              continue;
            }
            if (allKeysEqual(attrs["x1"], b, attrs["x2"]) && allKeysEqual(attrs["y1"], a, attrs["y2"])) {
              data = attrs["data"];
              /** @type {number} */
              odx = b - attrs["x1"] + attrs["width"] * (a - attrs["y1"]) << 8 * -1106 + 7615 + 1235 * 1;
              if (data[odx + (-722 + -2143 + 2868)] === 2 * 3273 + 7552 + -14098 * 1) {
                continue;
              }
              return [data[odx], data[odx + (-1923 + -9983 + 1323 * 9)], data[odx + (2153 + -116 + -407 * 5)], data[odx + (5538 + -7971 + -116 * -21)]];
            }
          }
          return null;
        }
      }]);
      return SearchWorkerLoader;
    }();
  }, {
    "./Template" : 13,
    "./functions" : 18
  }],
  15 : [function(canCreateDiscussions, module, isSlidingUp) {
    module["exports"] = function() {
      /**
       * @param {?} emitter
       * @return {undefined}
       */
      function FalcorPubSubDataSource(emitter) {
        var emit = emitter.localStorageSave;
        _classCallCheck(this, FalcorPubSubDataSource);
        this["saveInLS"] = emit || true;
      }
      _createClass(FalcorPubSubDataSource, [{
        key : "load",
        value : function testcase() {
          if (this["saveInLS"]) {
            this["data"] = localStorage["minimap"] ? JSON["parse"](localStorage["minimap"]) : {};
          } else {
            this["data"] = {};
          }
        }
      }, {
        key : "save",
        value : function testcase() {
          if (!this["saveInLS"]) {
            return;
          }
          localStorage["minimap"] = JSON["stringify"](this["data"]);
        }
      }, {
        key : "get",
        value : function get(name) {
          return this["data"][name];
        }
      }, {
        key : "set",
        value : function jsonFixer(key, value) {
          var _0x2b6b4f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          this["data"][key] = value;
          if (_0x2b6b4f) {
            this["save"]();
          }
          return value;
        }
      }, {
        key : "getOrDefault",
        value : function __applyDefaults(value, defaultValue) {
          return this["get"](value) === undefined ? defaultValue : this["get"](value);
        }
      }]);
      return FalcorPubSubDataSource;
    }();
  }, {}],
  16 : [function(canCreateDiscussions, module, isSlidingUp) {
    module["exports"] = function() {
      /**
       * @return {undefined}
       */
      function DndCollector() {
        var debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        _classCallCheck(this, DndCollector);
        var $scope = this;
        this["target"] = debug;
        /** @type {null} */
        this["ws"] = null;
        /**
         * @return {undefined}
         */
        this["middleSend"] = function() {
          var _whitespaceCharClass;
          (_whitespaceCharClass = this["ws"])["_send"].apply(_whitespaceCharClass, arguments);
        };
        /**
         * @return {?}
         */
        this["trapFunction"] = function() {
          if (this["inited"]) {
            return $scope["middleSend"]["apply"](this, arguments);
          } else {
            if ($scope["target"] === null || this["url"] === $scope["target"]) {
              console["log"]("ws catched");
              /** @type {boolean} */
              this["inited"] = true;
              $scope["ws"] = this;
              $scope["originalOnMessage"] = this["onmessage"];
              /**
               * @return {undefined}
               */
              this["onmessage"] = function() {
                $scope["originalOnMessage"]["apply"](this, arguments);
              };
              $scope["oncatch"](this);
            }
            return this["_send"]["apply"](this, arguments);
          }
        };
        WebSocket["prototype"]["_send"] = WebSocket["prototype"]["send"];
        WebSocket["prototype"]["send"] = this["trapFunction"];
      }
      _createClass(DndCollector, [{
        key : "send",
        value : function create(nmeaArg) {
          if (this["ws"]) {
            return this["ws"]["_send"](nmeaArg);
          } else {
            return console["warn"]("[CATCHER] try send when not catched");
          }
        }
      }, {
        key : "oncatch",
        value : function oncatch() {
        }
      }]);
      return DndCollector;
    }();
  }, {}],
  17 : [function(require, module, canCreateDiscussions) {
    var mod_events = require("events");
    var Duplicity = require("./WSCatcher");
    module["exports"] = function() {
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      function Response(options) {
        _classCallCheck(this, Response);
        this["_url"] = options["url"] || null;
        this["_binaryType"] = options["binaryType"] || "arraybuffer";
        this["_workAsCatcher"] = options["workAsCatcher"] || false;
        this["_events"] = new mod_events;
        /** @type {null} */
        this["_ws"] = null;
        this["_actions"] = {};
      }
      _createClass(Response, [{
        key : "init",
        value : function init() {
          var target = this;
          var self = this;
          if (this["_workAsCatcher"]) {
            this["catcher"] = new Duplicity;
            /**
             * @param {?} srcPropVal
             * @return {undefined}
             */
            this["catcher"]["oncatch"] = function(srcPropVal) {
              target["_ws"] = srcPropVal;
              /**
               * @return {undefined}
               */
              target["_ws"]["onmessage"] = function() {
                self["emit"].apply(self, ["message"].concat(Array.prototype.slice.call(arguments)));
                self["catcher"]["originalOnMessage"]["apply"](this, arguments);
              };
              target["emit"]("open");
            };
          } else {
            if (this["_workAsCatcher"]) {
              this["connect"]();
            }
            setInterval(function() {
              if (target["_ws"]["disconnected"]) {
                target["connect"]();
              }
            }, -5563 + 583 * 10 + 4733);
          }
        }
      }, {
        key : "log",
        value : function log(result) {
          console["log"]("[WS] " + result);
        }
      }, {
        key : "isConnected",
        value : function readyState() {
          return this["_ws"] && (this["_ws"]["readyState"] === WebSocket["OPEN"] || this["_ws"]["readyState"] === WebSocket["CONNECTING"]);
        }
      }, {
        key : "isDisconnected",
        value : function setIsConnected() {
          return !this["isConnected"]();
        }
      }, {
        key : "connect",
        value : function init() {
          /** @type {!WebSocket} */
          this["_ws"] = new WebSocket(this["_url"]);
          this["_ws"]["binaryType"] = this["_binaryType"];
          this["bindBasicHandlers"]();
        }
      }, {
        key : "send",
        value : function PL$168(message) {
          console["log"](message);
          if (this["_workAsCatcher"]) {
            this["_ws"]["_send"](message);
          } else {
            this["_ws"]["send"](message);
          }
        }
      }, {
        key : "bindBasicHandlers",
        value : function RWS() {
          var PL$8 = this;
          /**
           * @return {undefined}
           */
          this["_ws"]["onopen"] = function() {
            PL$8["log"]("open");
            PL$8["_events"]["emit"]("open");
          };
          /**
           * @param {?} actionId
           * @return {?}
           */
          this["_ws"]["onmessage"] = function(actionId) {
            return PL$8["_events"]["emit"]("message", actionId);
          };
          /**
           * @return {undefined}
           */
          this["_ws"]["onclose"] = function() {
            PL$8["log"]("closed");
            PL$8["_events"]["emit"]("close");
          };
          /**
           * @param {?} actionId
           * @return {undefined}
           */
          this["_ws"]["onerror"] = function(actionId) {
            PL$8["log"]("closed");
            PL$8["_events"]["emit"]("close", actionId);
          };
        }
      }, {
        key : "createAction",
        value : function rename(javascriptName, jsonName) {
          this["_actions"][javascriptName] = jsonName;
        }
      }, {
        key : "action",
        value : function validate(type) {
          /** @type {number} */
          var _len5 = arguments.length;
          /** @type {!Array} */
          var listenables = Array(_len5 > 1 ? _len5 - 1 : 0);
          /** @type {number} */
          var _key5 = 1;
          for (; _key5 < _len5; _key5++) {
            listenables[_key5 - 1] = arguments[_key5];
          }
          return this["_actions"][type]["apply"](this, listenables);
        }
      }, {
        key : "on",
        value : function dispatchEvent(event, elem) {
          this["_events"]["on"](event, elem["bind"](this));
        }
      }, {
        key : "emit",
        value : function emit(worker) {
          var _whitespaceCharClass;
          /** @type {number} */
          var _len2 = arguments.length;
          /** @type {!Array} */
          var args = Array(_len2 > 1 ? _len2 - 1 : 0);
          /** @type {number} */
          var _key2 = 1;
          for (; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          (_whitespaceCharClass = this["_events"])["emit"].apply(_whitespaceCharClass, [worker].concat(args));
        }
      }]);
      return Response;
    }();
  }, {
    "./WSCatcher" : 16,
    "events" : 19
  }],
  18 : [function(canCreateDiscussions, module, isSlidingUp) {
    /**
     * @param {string} a
     * @param {string} n
     * @param {string} b
     * @return {?}
     */
    function between(a, n, b) {
      return n > a && n < b;
    }
    /**
     * @param {!Object} context
     * @param {boolean} value
     * @return {undefined}
     */
    function Context(context, value) {
      context["mozImageSmoothingEnabled"] = context["webkitImageSmoothingEnabled"] = context["msImageSmoothingEnabled"] = context["imageSmoothingEnabled"] = value;
    }
    /**
     * @param {!Function} obj
     * @param {!Function} callback
     * @return {undefined}
     */
    function expect(obj, callback) {
      Object["keys"](obj)["forEach"](function(i) {
        return callback(obj[i], i);
      });
    }
    /**
     * @param {!Map} webColor
     * @return {undefined}
     */
    function html2markdown(webColor) {
      document["head"]["appendChild"](callback({
        "type" : "style",
        "html" : webColor["replace"](/  |\n/g, "")
      }));
    }
    /**
     * @param {string} options
     * @param {(!Function|RegExp|string)} data
     * @return {undefined}
     */
    function notify(options, data) {
      if (!("Notification" in window)) {
        return;
      }
      /**
       * @return {?}
       */
      var doNotify = function notify() {
        return new Notification(options, data);
      };
      if (Notification["permission"] === "granted") {
        doNotify();
      } else {
        if (Notification["permission"] !== "denied") {
          Notification["requestPermission"](function(result) {
            if (result === "granted") {
              doNotify();
            }
          });
        }
      }
    }
    /**
     * @param {!Object} params
     * @return {?}
     */
    function callback(params) {
      var indexes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var el = params["type"] === "text" ? document["createTextNode"](params["text"] || "") : document["createElement"](params["type"]);
      return params["id"] && (el["id"] = params["id"]), params["class"] && el["setAttribute"]("class", params["class"]), params["style"] && (el["style"] = params["style"]), params["html"] ? el["innerHTML"] = params["html"] : params["text"] && (el["innerText"] = params["text"]), params["listeners"] && expect(params["listeners"], function(callback, results) {
        el["addEventListener"](results["startsWith"]("on") ? results["substring"](2448 + -7399 + -13 * -381) : results, callback);
      }), params["attributes"] && expect(params["attributes"], function(v, download) {
        return el["setAttribute"](download, v);
      }), indexes["length"] && expect(indexes, el["appendChild"]["bind"](el)), el;
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function toggle(value) {
      return value ? "On" : "Off";
    }
    /**
     * @param {!Object} canvas
     * @return {undefined}
     */
    function render(canvas) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void(-197 * 11 + -1009 + -397 * -8);
      var data = document["createElement"]("a");
      data["href"] = canvas["toDataURL"]("image/png");
      data["download"] = name;
      data["click"]();
    }
    /**
     * @param {string} id
     * @return {?}
     */
    function $(id) {
      return document["getElementById"](id);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    function loadImage(path) {
      return new Promise(function(notify_success, val) {
        /** @type {!Image} */
        var img = new Image;
        /** @type {string} */
        img["crossOrigin"] = "";
        /**
         * @return {?}
         */
        img["onload"] = function() {
          return notify_success(img);
        };
        img["onerror"] = val;
        img["src"] = path;
      });
    }
    /**
     * @param {string} err
     * @return {?}
     */
    function _getCollectionActionCallback(err) {
      return callback({
        "type" : "div"
      }, [callback({
        "type" : "div",
        "class" : "minimap-panel-button",
        "html" : '<img style="width:inherit; height:inherit;" src="' + err + '"></img>'
      })]);
    }
    /**
     * @return {?}
     */
    function buildCreateForm() {
      /** @type {boolean} */
      var slug = false;
      try {
        /** @type {boolean} */
        slug = window != window["top"] || document != top["document"] || self["location"] != top["location"];
      } catch (_0xe93c97) {
        /** @type {boolean} */
        slug = true;
      }
      return slug;
    }
    /**
     * @param {?} urlObj
     * @return {?}
     */
    function fetchData(urlObj) {
      return window["importObject"] = {
        "imports" : {
          "imported_func" : function success(a) {
            return console["log"](a);
          }
        }
      }, fetch(urlObj)["then"](function(canCreateDiscussions) {
        return canCreateDiscussions["arrayBuffer"]();
      })["then"](function(mmCoreSplitViewBlock) {
        return WebAssembly["instantiate"](mmCoreSplitViewBlock, window["importObject"]);
      });
    }
    /** @type {function(?): number} */
    var abs = Math.abs;
    module["exports"] = {
      "between" : between,
      "abs" : abs,
      "antialiasing" : Context,
      "objForEach" : expect,
      "injectCSS" : html2markdown,
      "trySendNotification" : notify,
      "factory" : callback,
      "switcherText" : toggle,
      "downloadCanvas" : render,
      "$" : $,
      "loadImage" : loadImage,
      "createPanelButton" : _getCollectionActionCallback,
      "isFrame" : buildCreateForm,
      "loadWASM" : fetchData
    };
  }, {}],
  19 : [function(canCreateDiscussions, window, isSlidingUp) {
    /**
     * @return {undefined}
     */
    function exports() {
      if (!this["_events"] || !Object["prototype"]["hasOwnProperty"]["call"](this, "_events")) {
        this["_events"] = merge(null);
        /** @type {number} */
        this["_eventsCount"] = -647 * -1 + -1 * -773 + -1420;
      }
      this["_maxListeners"] = this["_maxListeners"] || undefined;
    }
    /**
     * @param {!Object} ele
     * @return {?}
     */
    function fn(ele) {
      if (ele["_maxListeners"] === undefined) {
        return exports["defaultMaxListeners"];
      }
      return ele["_maxListeners"];
    }
    /**
     * @param {!Object} options
     * @param {boolean} value
     * @param {?} data
     * @return {undefined}
     */
    function enter(options, value, data) {
      if (value) {
        options["call"](data);
      } else {
        var length = options["length"];
        var result = callback(options, length);
        /** @type {number} */
        var index = -9 * -309 + 433 * -22 + -5 * -1349;
        for (; index < length; ++index) {
          result[index]["call"](data);
        }
      }
    }
    /**
     * @param {!Object} params
     * @param {boolean} done
     * @param {?} text
     * @param {?} status
     * @return {undefined}
     */
    function log(params, done, text, status) {
      if (done) {
        params["call"](text, status);
      } else {
        var length = params["length"];
        var result = callback(params, length);
        /** @type {number} */
        var index = 9289 + -6538 * 1 + -2751;
        for (; index < length; ++index) {
          result[index]["call"](text, status);
        }
      }
    }
    /**
     * @param {!Object} obj
     * @param {boolean} properties
     * @param {?} args
     * @param {?} source
     * @param {?} key
     * @return {undefined}
     */
    function connect(obj, properties, args, source, key) {
      if (properties) {
        obj["call"](args, source, key);
      } else {
        var key = obj["length"];
        var val = callback(obj, key);
        /** @type {number} */
        var index = -7613 + -5017 + 12630;
        for (; index < key; ++index) {
          val[index]["call"](args, source, key);
        }
      }
    }
    /**
     * @param {!Object} result
     * @param {boolean} data
     * @param {?} args
     * @param {?} source
     * @param {?} e
     * @param {?} dd
     * @return {undefined}
     */
    function handler(result, data, args, source, e, dd) {
      if (data) {
        result["call"](args, source, e, dd);
      } else {
        var length = result["length"];
        var value = callback(result, length);
        /** @type {number} */
        var index = -391 * -18 + -8467 + 1429 * 1;
        for (; index < length; ++index) {
          value[index]["call"](args, source, e, dd);
        }
      }
    }
    /**
     * @param {!Object} data
     * @param {boolean} sid
     * @param {?} val
     * @param {!Object} options
     * @return {undefined}
     */
    function update(data, sid, val, options) {
      if (sid) {
        data["apply"](val, options);
      } else {
        var length = data["length"];
        var result = callback(data, length);
        /** @type {number} */
        var type = -6019 * -1 + 10 * -201 + 1 * -4009;
        for (; type < length; ++type) {
          result[type]["apply"](val, options);
        }
      }
    }
    /**
     * @param {!Object} self
     * @param {(RegExp|string)} key
     * @param {!Object} obj
     * @param {string} value
     * @return {?}
     */
    function init(self, key, obj, value) {
      var ret;
      var v;
      var arr;
      if (typeof obj !== "function") {
        throw new TypeError('"listener" argument must be a function');
      }
      v = self["_events"];
      if (!v) {
        v = self["_events"] = merge(null);
        /** @type {number} */
        self["_eventsCount"] = 6361 * 1 + 7098 + 313 * -43;
      } else {
        if (v["newListener"]) {
          self["emit"]("newListener", key, obj["listener"] ? obj["listener"] : obj);
          v = self["_events"];
        }
        arr = v[key];
      }
      if (!arr) {
        /** @type {!Function} */
        arr = v[key] = obj;
        ++self["_eventsCount"];
      } else {
        if (typeof arr === "function") {
          /** @type {!Array} */
          arr = v[key] = value ? [obj, arr] : [arr, obj];
        } else {
          if (value) {
            arr["unshift"](obj);
          } else {
            arr["push"](obj);
          }
        }
        if (!arr["warned"]) {
          ret = fn(self);
          if (ret && ret > 4 * 571 + 2741 + 1 * -5025 && arr["length"] > ret) {
            /** @type {boolean} */
            arr["warned"] = true;
            /** @type {!Error} */
            var args = new Error("Possible EventEmitter memory leak detected. " + arr["length"] + ' "' + String(key) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
            /** @type {string} */
            args["name"] = "MaxListenersExceededWarning";
            /** @type {!Object} */
            args["emitter"] = self;
            /** @type {(RegExp|string)} */
            args["type"] = key;
            args["count"] = arr["length"];
            if ((typeof console === "undefined" ? "undefined" : _typeof(console)) === "object" && console["warn"]) {
              console["warn"]("%s: %s", args["name"], args["message"]);
            }
          }
        }
      }
      return self;
    }
    /**
     * @return {?}
     */
    function validate() {
      if (!this["fired"]) {
        this["target"]["removeListener"](this["type"], this["wrapFn"]);
        /** @type {boolean} */
        this["fired"] = true;
        switch(arguments["length"]) {
          case -1592 + -9882 + 11474:
            return this["listener"]["call"](this["target"]);
          case -2089 * 4 + 6233 + 9 * 236:
            return this["listener"]["call"](this["target"], arguments[-3659 + -1549 + -2 * -2604]);
          case -2035 + -5472 + 7509:
            return this["listener"]["call"](this["target"], arguments[2 * 644 + -1 * 2291 + 1 * 1003], arguments[23 * -268 + -3067 + -577 * -16]);
          case -5284 * -1 + 3871 + -9152:
            return this["listener"]["call"](this["target"], arguments[-1 * -1715 + 29 * -17 + -1222], arguments[4 * -1956 + -202 * -14 + 1 * 4997], arguments[2474 * -1 + -6553 + 9029]);
          default:
            /** @type {!Array} */
            var args = new Array(arguments["length"]);
            /** @type {number} */
            var i = 3609 + 9707 + -13316;
            for (; i < args["length"]; ++i) {
              args[i] = arguments[i];
            }
            this["listener"]["apply"](this["target"], args);
        }
      }
    }
    /**
     * @param {string} info
     * @param {string} type
     * @param {!Function} func
     * @return {?}
     */
    function resolve(info, type, func) {
      var state = {
        "fired" : false,
        "wrapFn" : undefined,
        "target" : info,
        "type" : type,
        "listener" : func
      };
      var data = viewValueFn["call"](validate, state);
      return data["listener"] = func, state["wrapFn"] = data, data;
    }
    /**
     * @param {!Object} spec
     * @param {?} type
     * @param {string} all
     * @return {?}
     */
    function off(spec, type, all) {
      var state = spec["_events"];
      if (!state) {
        return [];
      }
      var result = state[type];
      if (!result) {
        return [];
      }
      if (typeof result === "function") {
        return all ? [result["listener"] || result] : [result];
      }
      return all ? extend(result) : callback(result, result["length"]);
    }
    /**
     * @param {?} p
     * @return {?}
     */
    function func(p) {
      var planets = this["_events"];
      if (planets) {
        var b = planets[p];
        if (typeof b === "function") {
          return -1201 + -1 * -3454 + -2252;
        } else {
          if (b) {
            return b["length"];
          }
        }
      }
      return 6503 + 6438 + 1 * -12941;
    }
    /**
     * @param {!Object} obj
     * @param {number} listener
     * @return {undefined}
     */
    function add(obj, listener) {
      /** @type {number} */
      var i = listener;
      var j = i + (2 * 2846 + 11 * -354 + 3 * -599);
      var index = obj["length"];
      for (; j < index; i = i + (-6519 + -3521 + -1 * -10041), j = j + (1681 * 2 + -395 * 25 + 6514)) {
        obj[i] = obj[j];
      }
      obj["pop"]();
    }
    /**
     * @param {!Object} obj
     * @param {number} n
     * @return {?}
     */
    function callback(obj, n) {
      /** @type {!Array} */
      var b = new Array(n);
      /** @type {number} */
      var i = -6901 + 7 * 219 + -88 * -61;
      for (; i < n; ++i) {
        b[i] = obj[i];
      }
      return b;
    }
    /**
     * @param {!Object} right
     * @return {?}
     */
    function extend(right) {
      /** @type {!Array} */
      var options = new Array(right["length"]);
      /** @type {number} */
      var i = 6079 + -1 * 4411 + -1668;
      for (; i < options["length"]; ++i) {
        options[i] = right[i]["listener"] || right[i];
      }
      return options;
    }
    /**
     * @param {!Object} PL$8
     * @return {?}
     */
    function isScaffoldingUnchanged(PL$8) {
      /**
       * @return {undefined}
       */
      var PL$3 = function hasMD5() {
      };
      return PL$3["prototype"] = PL$8, new PL$3;
    }
    /**
     * @param {!Object} PL$16
     * @return {?}
     */
    function testcase(PL$16) {
      /** @type {!Array} */
      var PL$120 = [];
      var PL$24;
      for (PL$24 in PL$16) {
        if (Object["prototype"]["hasOwnProperty"]["call"](PL$16, PL$24)) {
          PL$120["push"](PL$24);
        }
      }
      return PL$24;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function valueFn(value) {
      var deferred = this;
      return function() {
        return deferred["apply"](value, arguments);
      };
    }
    var merge = Object["create"] || isScaffoldingUnchanged;
    var index = Object["keys"] || testcase;
    var viewValueFn = Function["prototype"]["bind"] || valueFn;
    /** @type {function(): undefined} */
    window["exports"] = exports;
    /** @type {function(): undefined} */
    exports["EventEmitter"] = exports;
    exports["prototype"]["_events"] = undefined;
    exports["prototype"]["_maxListeners"] = undefined;
    /** @type {number} */
    var value = -2 * 498 + -3 * -747 + -1235;
    var _0x559fc0;
    try {
      var foo = {};
      if (Object["defineProperty"]) {
        Object["defineProperty"](foo, "x", {
          "value" : 0
        });
      }
      /** @type {boolean} */
      _0x559fc0 = foo["x"] === 4253 * 1 + 271 * 34 + -67 * 201;
    } catch (_0x32257d) {
      /** @type {boolean} */
      _0x559fc0 = false;
    }
    if (_0x559fc0) {
      Object["defineProperty"](exports, "defaultMaxListeners", {
        "enumerable" : true,
        "get" : function jsonFixer() {
          return value;
        },
        "set" : function set(n) {
          if (typeof n !== "number" || n < -779 + -22 * 448 + 5 * 2127 || n !== n) {
            throw new TypeError('"defaultMaxListeners" must be a positive number');
          }
          /** @type {number} */
          value = n;
        }
      });
    } else {
      exports["defaultMaxListeners"] = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    exports["prototype"]["setMaxListeners"] = function every_key_is_valid(value) {
      if (typeof value !== "number" || value < 1 * -4262 + -8299 + 12561 || isNaN(value)) {
        throw new TypeError('"n" argument must be a positive number');
      }
      return this["_maxListeners"] = value, this;
    };
    /**
     * @return {?}
     */
    exports["prototype"]["getMaxListeners"] = function newAuthConnection() {
      return fn(this);
    };
    /**
     * @param {string} type
     * @return {?}
     */
    exports["prototype"]["emit"] = function emit(type) {
      var str;
      var data;
      var value;
      var rv;
      var i;
      var attrs;
      /** @type {boolean} */
      var doError = type === "error";
      attrs = this["_events"];
      if (attrs) {
        /** @type {boolean} */
        doError = doError && attrs["error"] == null;
      } else {
        if (!doError) {
          return false;
        }
      }
      if (doError) {
        if (arguments["length"] > 4 * 1084 + -7684 * -1 + 12019 * -1) {
          str = arguments[4585 + -909 + 35 * -105];
        }
        if (str instanceof Error) {
          throw str;
        } else {
          /** @type {!Error} */
          var obj = new Error('Unhandled "error" event. (' + str + ")");
          obj["context"] = str;
          throw obj;
        }
        return false;
      }
      data = attrs[type];
      if (!data) {
        return false;
      }
      /** @type {boolean} */
      var opts = typeof data === "function";
      value = arguments["length"];
      switch(value) {
        case -421 * 5 + -3330 + 453 * 12:
          enter(data, opts, this);
          break;
        case 623 * 5 + 2229 + -2 * 2671:
          log(data, opts, this, arguments[27 + -452 * -8 + 1214 * -3]);
          break;
        case -6262 + 1 * 493 + -3 * -1924:
          connect(data, opts, this, arguments[159 * 61 + -6822 + -2876 * 1], arguments[7464 + -4258 * 1 + 801 * -4]);
          break;
        case -532 + -9522 + 214 * 47:
          handler(data, opts, this, arguments[58 * 10 + 79 * -74 + 1 * 5267], arguments[8288 + 43 * 216 + -17574], arguments[2 * -1369 + -491 + 8 * 404]);
          break;
        default:
          /** @type {!Array} */
          rv = new Array(value - (8915 + 162 * -1 + 2 * -4376));
          /** @type {number} */
          i = -4320 + 2471 + 1850 * 1;
          for (; i < value; i++) {
            rv[i - (-6923 * 1 + -1 * 7075 + 13999)] = arguments[i];
          }
          update(data, opts, this, rv);
      }
      return true;
    };
    /**
     * @param {(RegExp|string)} notify
     * @param {!Object} callback
     * @return {?}
     */
    exports["prototype"]["addListener"] = function initDB(notify, callback) {
      return init(this, notify, callback, false);
    };
    exports["prototype"]["on"] = exports["prototype"]["addListener"];
    /**
     * @param {(RegExp|string)} notify
     * @param {!Object} callback
     * @return {?}
     */
    exports["prototype"]["prependListener"] = function initDB(notify, callback) {
      return init(this, notify, callback, true);
    };
    /**
     * @param {string} file
     * @param {!Function} cb
     * @return {?}
     */
    exports["prototype"]["once"] = function toDest(file, cb) {
      if (typeof cb !== "function") {
        throw new TypeError('"listener" argument must be a function');
      }
      return this["on"](file, resolve(this, file, cb)), this;
    };
    /**
     * @param {string} file
     * @param {!Function} cb
     * @return {?}
     */
    exports["prototype"]["prependOnceListener"] = function toDest(file, cb) {
      if (typeof cb !== "function") {
        throw new TypeError('"listener" argument must be a function');
      }
      return this["prependListener"](file, resolve(this, file, cb)), this;
    };
    /**
     * @param {(RegExp|string)} i
     * @param {string} listener
     * @return {?}
     */
    exports["prototype"]["removeListener"] = function init(i, listener) {
      var listeners;
      var data;
      var event;
      var type;
      var listArray;
      if (typeof listener !== "function") {
        throw new TypeError('"listener" argument must be a function');
      }
      data = this["_events"];
      if (!data) {
        return this;
      }
      listeners = data[i];
      if (!listeners) {
        return this;
      }
      if (listeners === listener || listeners["listener"] === listener) {
        if (--this["_eventsCount"] === -337 * -29 + -5555 + -703 * 6) {
          this["_events"] = merge(null);
        } else {
          delete data[i];
          if (data["removeListener"]) {
            this["emit"]("removeListener", i, listeners["listener"] || listener);
          }
        }
      } else {
        if (typeof listeners !== "function") {
          /** @type {number} */
          event = -(9959 + -2878 * 3 + -1324);
          /** @type {number} */
          type = listeners["length"] - (-1927 * -5 + -1 * -2753 + -12387);
          for (; type >= -4228 + 6985 + -2757; type--) {
            if (listeners[type] === listener || listeners[type]["listener"] === listener) {
              listArray = listeners[type]["listener"];
              /** @type {number} */
              event = type;
              break;
            }
          }
          if (event < -7186 * -1 + -46 * -91 + -11372) {
            return this;
          }
          if (event === 165 * -57 + -3 + 7 * 1344) {
            listeners["shift"]();
          } else {
            add(listeners, event);
          }
          if (listeners["length"] === -28 * 250 + -8817 * 1 + 1438 * 11) {
            data[i] = listeners[9353 + 1 * -943 + -8410];
          }
          if (data["removeListener"]) {
            this["emit"]("removeListener", i, listArray || listener);
          }
        }
      }
      return this;
    };
    /**
     * @param {(RegExp|string)} name
     * @return {?}
     */
    exports["prototype"]["removeAllListeners"] = function on(name) {
      var p2;
      var p;
      var i;
      p = this["_events"];
      if (!p) {
        return this;
      }
      if (!p["removeListener"]) {
        if (arguments["length"] === -2509 + 7055 + -4546) {
          this["_events"] = merge(null);
          /** @type {number} */
          this["_eventsCount"] = 7807 + 1 * -191 + -7616;
        } else {
          if (p[name]) {
            if (--this["_eventsCount"] === -9551 + 19 * -9 + 9722) {
              this["_events"] = merge(null);
            } else {
              delete p[name];
            }
          }
        }
        return this;
      }
      if (arguments["length"] === 5196 + -1 * 8947 + 341 * 11) {
        var result = index(p);
        var e;
        /** @type {number} */
        i = -241 * -11 + -5468 + -2817 * -1;
        for (; i < result["length"]; ++i) {
          e = result[i];
          if (e === "removeListener") {
            continue;
          }
          this["removeAllListeners"](e);
        }
        return this["removeAllListeners"]("removeListener"), this["_events"] = merge(null), this["_eventsCount"] = 9 * 630 + -32 * 66 + 3558 * -1, this;
      }
      p2 = p[name];
      if (typeof p2 === "function") {
        this["removeListener"](name, p2);
      } else {
        if (p2) {
          /** @type {number} */
          i = p2["length"] - (-1465 * 3 + -262 * 8 + -6492 * -1);
          for (; i >= 41 * 101 + -22 * 134 + -1 * 1193; i--) {
            this["removeListener"](name, p2[i]);
          }
        }
      }
      return this;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    exports["prototype"]["listeners"] = function cancelListener(data) {
      return off(this, data, true);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    exports["prototype"]["rawListeners"] = function cancelListener(data) {
      return off(this, data, false);
    };
    /**
     * @param {!Object} x
     * @param {?} source
     * @return {?}
     */
    exports["listenerCount"] = function(x, source) {
      return typeof x["listenerCount"] === "function" ? x["listenerCount"](source) : func["call"](x, source);
    };
    /** @type {function(?): ?} */
    exports["prototype"]["listenerCount"] = func;
    /**
     * @return {?}
     */
    exports["prototype"]["eventNames"] = function FormFile() {
      return this["_eventsCount"] > 3931 + 8 * -1147 + 5245 ? Reflect["ownKeys"](this["_events"]) : [];
    };
  }, {}]
}, {}, [461 * -11 + -17 * -327 + -487]);
var _0xa2261c = function() {
  /** @type {boolean} */
  var y$$ = true;
  return function(scope, f) {
    /** @type {!Function} */
    var voronoi = y$$ ? function() {
      if (f) {
        var returnVal = f["apply"](scope, arguments);
        return f = null, returnVal;
      }
    } : function() {
    };
    return y$$ = false, voronoi;
  };
}();
var _0x289fb5 = _0xa2261c(undefined, function() {
  /**
   * @return {?}
   */
  var gotoNewOfflinePage = function config() {
    var B713 = config["constructor"]('return /" + this + "/')()["constructor"]("^([^ ]+( +[^ ]+)+)+[^ ]}");
    return !B713["test"](_0x289fb5);
  };
  return gotoNewOfflinePage();
});
_0x289fb5();
var _0x3812e4 = function() {
  /** @type {boolean} */
  var y$$ = true;
  return function(scope, f) {
    /** @type {!Function} */
    var voronoi = y$$ ? function() {
      if (f) {
        var returnVal = f["apply"](scope, arguments);
        return f = null, returnVal;
      }
    } : function() {
    };
    return y$$ = false, voronoi;
  };
}();
var _0x1f6dae = _0x3812e4(undefined, function() {
  var global = void 0;
  try {
    var evaluate = Function('return (function() {}.constructor("return this")( ));');
    global = evaluate();
  } catch (_0x435b57) {
    /** @type {!Window} */
    global = window;
  }
  var db = global["console"] = global["console"] || {};
  /** @type {!Array} */
  var methods = ["log", "warn", "info", "error", "exception", "table", "trace"];
  /** @type {number} */
  var i = 309 * -11 + -2583 + 5982;
  for (; i < methods["length"]; i++) {
    var data = _0x3812e4["constructor"]["prototype"]["bind"](_0x3812e4);
    var name = methods[i];
    var value = db[name] || data;
    data["__proto__"] = _0x3812e4["bind"](_0x3812e4);
    data["toString"] = value["toString"]["bind"](value);
    db[name] = data;
  }
});
_0x1f6dae();
/**
 * @return {?}
 */
function initCode() {
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function init(data) {
    /**
     * @param {number} roots
     * @param {number} rootValueTypes
     * @return {?}
     */
    function f(roots, rootValueTypes) {
      var element = document["createElement"]("span");
      return element["innerText"] = "...", element["style"] = "color: black; font-size: 150%; position: absolute; top: " + ~~rootValueTypes + "px; left:" + ~~roots + "px;", element["ySpeed"] = 5501 + 7571 + -3 * 4357 + Math["random"]() * (4 * 1234 + -8722 * -1 + 5 * -2731), element["xSpeed"] = 7481 + -2214 + -5266.5 + Math["random"]() * (1509 * 2 + -152 + -2864), element["xDirection"] = Math["random"]() > -4279 + 134 * -31 + 8433.5 ? 547 * -16 + 19 * 274 + 3547 : -(287 * 28 + -4 * 71 + -7751), document["body"]["appendChild"](element), 
      element;
    }
    /**
     * @param {!Object} styles
     * @param {number} target
     * @param {number} type
     * @return {undefined}
     */
    function translate(styles, target, type) {
      /** @type {string} */
      styles["style"]["top"] = ~~type + "px";
      /** @type {string} */
      styles["style"]["left"] = ~~target + "px";
    }
    var currentAnime = data.minimap;
    var config = data.settings;
    var mouse = data.mouse;
    var palette = data.palette;
    var old_queue_user_list = data.chunkInterface;
    var available = data.templates;
    var sectors = data.sectors;
    var host = data.ws;
    var param = data.uo;
    var new_queue_user_list = data.BigMessage;
    var functions = data.functions;
    /** @type {number} */
    var threshold = 3 * -211 + 4890 + -4197;
    /** @type {!Array} */
    var output = [];
    config["addOption"]("pointsfall", function() {
      param["set"]("pointsfall", !param["get"]("pointsfall"));
      /** @type {string} */
      this["button"]["innerText"] = param["get"]("pointsfall") ? "on" : "off";
      output["forEach"](function(factory) {
        return factory["style"]["display"] = param["get"]("pointsfall") ? "block" : "none";
      });
    });
    /** @type {string} */
    config["options"]["pointsfall"]["button"]["innerText"] = param["get"]("pointsfall") ? "on" : "off";
    /** @type {string} */
    config["options"]["pointsfall"]["desc"]["innerText"] = "\u0422\u043e\u0447\u043a\u043e\u043f\u0430\u0434: ";
    (function init() {
      if (param["get"]("pointsfall")) {
        for (; output["length"] < threshold;) {
          output["push"](f(Math["random"]() * window["innerWidth"], Math["random"]() * window["innerHeight"]));
        }
        output["forEach"](function(styles, canCreateDiscussions) {
          /** @type {number} */
          var val = parseInt(styles["style"]["left"]);
          /** @type {number} */
          var h = parseInt(styles["style"]["top"]);
          h = h + styles["ySpeed"];
          for (; h > window["innerHeight"] - styles["offsetHeight"];) {
            /** @type {number} */
            h = h - window["innerHeight"];
          }
          /** @type {number} */
          val = val + styles["xSpeed"] * styles["xDirection"];
          for (; val > window["innerWidth"] - styles["offsetWidth"];) {
            /** @type {number} */
            val = val - window["innerWidth"];
          }
          for (; val < -845 + 2404 + -1 * 1559;) {
            /** @type {number} */
            val = val + (window["innerWidth"] - styles["offsetWidth"]);
          }
          if (Math["random"]() < 8 * 216 + 11 * -535 + 4157.05) {
            styles["xDirection"] *= -(9379 * 1 + -4942 + 4 * -1109);
          }
          translate(styles, val, h);
        });
      }
      window["requestAnimationFrame"](init);
    })();
  }
  if (window["initModule"]) {
    return window["initModule"](init);
  }
  if (!window["mapModules"]) {
    /** @type {!Array} */
    window["mapModules"] = [];
  }
  window["mapModules"]["push"](init);
}
var code = document["createElement"]("script");
code["innerHTML"] = "(" + initCode["toString"]() + ")();", document["body"]["appendChild"](code);
toString();
