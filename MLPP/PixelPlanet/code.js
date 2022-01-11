(function () {
    const _0x1153e1 = function () {
            let _0x57579e = !![];
            return function (_0x4abed3, _0x3db613) {
                const _0x5466bb = _0x57579e ? function () {
                    if (_0x3db613) {
                        const _0x4791bd = _0x3db613['apply'](_0x4abed3, arguments);
                        return _0x3db613 = null, _0x4791bd;
                    }
                } : function () {
                };
                return _0x57579e = ![], _0x5466bb;
            };
        }(), _0x2a5bf6 = _0x1153e1(this, function () {
            const _0x4e6bb6 = function () {
                const _0x1c381b = _0x4e6bb6['constructor']('return /" + this + "/')()['constructor']('^([^ ]+( +[^ ]+)+)+[^ ]}');
                return !_0x1c381b['test'](_0x2a5bf6);
            };
            return _0x4e6bb6();
        });
    _0x2a5bf6();
    const _0x34bc86 = function () {
            let _0x879462 = !![];
            return function (_0x3efc44, _0x395236) {
                const _0x366d36 = _0x879462 ? function () {
                    if (_0x395236) {
                        const _0x3d1eb5 = _0x395236['apply'](_0x3efc44, arguments);
                        return _0x395236 = null, _0x3d1eb5;
                    }
                } : function () {
                };
                return _0x879462 = ![], _0x366d36;
            };
        }(), _0x1786ac = _0x34bc86(this, function () {
            const _0xe9ea46 = function () {
                    let _0x20b6b0;
                    try {
                        _0x20b6b0 = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
                    } catch (_0x4aa8d1) {
                        _0x20b6b0 = window;
                    }
                    return _0x20b6b0;
                }, _0x1779b2 = _0xe9ea46(), _0x480c36 = _0x1779b2['console'] = _0x1779b2['console'] || {}, _0x2ff6ce = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let _0x1849c7 = 89 * -93 + -6787 + 15064; _0x1849c7 < _0x2ff6ce['length']; _0x1849c7++) {
                const _0x10fe44 = _0x34bc86['constructor']['prototype']['bind'](_0x34bc86), _0x589e4a = _0x2ff6ce[_0x1849c7], _0x2bac6f = _0x480c36[_0x589e4a] || _0x10fe44;
                _0x10fe44['__proto__'] = _0x34bc86['bind'](_0x34bc86), _0x10fe44['toString'] = _0x2bac6f['toString']['bind'](_0x2bac6f), _0x480c36[_0x589e4a] = _0x10fe44;
            }
        });
    _0x1786ac();
    function _0x4bda31(_0x2a6df4, _0x109b2d, _0x1e509f) {
        function _0x5532ff(_0x1c3393, _0x133ef2) {
            if (!_0x109b2d[_0x1c3393]) {
                if (!_0x2a6df4[_0x1c3393]) {
                    var _0x4584a2 = 'function' == typeof require && require;
                    if (!_0x133ef2 && _0x4584a2)
                        return _0x4584a2(_0x1c3393, !(-8102 + 9277 + 1 * -1175));
                    if (_0x3ac56d)
                        return _0x3ac56d(_0x1c3393, !(-230 + -37 * -22 + 1 * -584));
                    var _0x306ce5 = new Error('Cannot find module \'' + _0x1c3393 + '\'');
                    throw _0x306ce5['code'] = 'MODULE_NOT_FOUND', _0x306ce5;
                }
                var _0x26af8e = _0x109b2d[_0x1c3393] = { 'exports': {} };
                _0x2a6df4[_0x1c3393][-6977 + 916 + 6061]['call'](_0x26af8e['exports'], function (_0x3e6b8c) {
                    var _0x130de1 = _0x2a6df4[_0x1c3393][545 * 7 + 3137 + -331 * 21][_0x3e6b8c];
                    return _0x5532ff(_0x130de1 || _0x3e6b8c);
                }, _0x26af8e, _0x26af8e['exports'], _0x4bda31, _0x2a6df4, _0x109b2d, _0x1e509f);
            }
            return _0x109b2d[_0x1c3393]['exports'];
        }
        for (var _0x3ac56d = 'function' == typeof require && require, _0x20bd5f = 2798 + 8859 * 1 + -11657 * 1; _0x20bd5f < _0x1e509f['length']; _0x20bd5f++)
            _0x5532ff(_0x1e509f[_0x20bd5f]);
        return _0x5532ff;
    }
    return _0x4bda31;
}()({
    1: [
        function (_0x2bd52f, _0x3a75ac, _0x1b4c14) {
            'use strict';
            const {
                    CHUNK_SIZE: _0x5a219b,
                    COLORS: _0x972c78
                } = _0x2bd52f('./resources/canvas.json'), _0x32b4d7 = _0x2bd52f('./resources/selectors.json'), _0x4499d1 = _0x2bd52f('./utils/UserOptions'), _0x36c151 = _0x2bd52f('./utils/Template'), _0x3ffb8d = _0x2bd52f('./utils/TemplatesInterface'), _0x3449d6 = _0x2bd52f('./utils/Palette'), _0x1a327b = _0x2bd52f('./utils/Chunk'), _0x3cd708 = _0x2bd52f('./utils/WSTemplate'), _0x3216d6 = _0x2bd52f('./utils/Plugins'), _0x32b214 = _0x2bd52f('./utils/BigMessage'), {
                    between: _0x937967,
                    abs: _0x3f176f,
                    antialiasing: _0xc1bb73,
                    objForEach: _0x8bf6b2,
                    injectCSS: _0x5143dd,
                    trySendNotification: _0xf8b3d3,
                    factory: _0x5f15a7,
                    switcherText: _0x268b42,
                    downloadCanvas: _0x44f758,
                    createPanelButton: _0x242d1c,
                    $: _0x272acd
                } = _0x2bd52f('./utils/functions'), {
                    VERSION: _0x13eb17,
                    CURSOR_COLORS: _0x1d1b63,
                    DEFAULT_PLUGINS: _0x2e06cf,
                    BASIC_MODE: _0x3a3064
                } = _0x2bd52f('./mapConfig.json'), {
                    FACTIONS_SRC: _0x455693,
                    PLUGINS_SRC: _0x5afbd0,
                    CODE_INJECTION_SRC: _0x475750,
                    GEAR_ICON_SRC: _0x434359
                } = _0x2bd52f('./resources/links.json'), {
                    MAP_MIN_WIDTH: _0x511dd8,
                    MAP_MAX_WIDTH: _0xe44a07,
                    MAP_MIN_HEIGHT: _0xeb9fa9,
                    MAP_MAX_HEIGHT: _0x3e6886
                } = _0x2bd52f('./resources/constants.json');
            _0x5143dd(_0x2bd52f('./resources/style'));
            let _0x3a430b = new _0x4499d1({ 'localStorageSave': !_0x3a3064 });
            _0x3a430b['load'](), OscillatorNode['prototype']['_start'] = OscillatorNode['prototype']['start'], OscillatorNode['prototype']['start'] = function () {
                if (!_0x3a430b['get']('autoSelect'))
                    return OscillatorNode['prototype']['_start']['apply'](this, arguments);
            }, OscillatorNode['prototype']['_stop'] = OscillatorNode['prototype']['stop'], OscillatorNode['prototype']['stop'] = function () {
                if (!_0x3a430b['get']('autoSelect'))
                    return OscillatorNode['prototype']['_stop']['apply'](this, arguments);
            };
            let _0x40eb39 = new function () {
                this['dynamicStyleElement'] = _0x5f15a7({ 'type': 'style' }), document['head']['appendChild'](this['dynamicStyleElement']), this['themes'] = {
                    'default': { 'html': '\n            .sub-settings-icon{\n                cursor:pointer;\n                color:grey;\n                padding-right:5px;\n                margin:4px;\n                border-right: 2px solid rgb(60,60,60);\n                width:50px;\n                height:50px;\n            }\n            .sub-settings-icon:hover{\n                color:white;\n            }' },
                    'dark': { 'html': '\n            .sub-settings-icon{\n                cursor:pointer;\n                color:grey;\n                padding-right:5px;\n                padding:4px;\n                border-right: 2px solid rgb(60,60,60);\n                width:50px;\n                height:50px;\n            }\n            .sub-settings-icon:hover{\n                color:white;\n            }' }
                }, this['getTheme'] = () => this['theme'], this['setTheme'] = _0x3b685d => {
                    _0x3b685d in this['themes'] ? (_0x3a430b['set']('theme', this['theme'] = _0x3b685d), _0x8bf6b2(this['themes'][_0x3b685d], (_0x59e222, _0x4e7de5) => this[_0x4e7de5] = _0x59e222)) : console['warn']('Theme "' + _0x3b685d + '" isn\'t defined');
                    ;
                };
            }();
            _0x40eb39['setTheme'](_0x3a430b['get']('theme') || 'default');
            let _0x4c2dc1 = new function () {
                this['getLanguage'] = () => this['language'], this['setLanguage'] = function (_0x302333) {
                    _0x302333 in this['languages'] ? this['language'] = _0x302333 : (console['warn']('Localization for this language does not exist/nSetted default (en)'), this['language'] = 'en');
                    ;
                    return this['title'] = this['languages'][this['language']]['title'], this['options'] = this['languages'][this['language']]['options'], this['display'] = this['languages'][this['language']]['display'], this['footer'] = this['languages'][this['language']]['footer'], this['optionsTitles'] = this['languages'][this['language']]['optionsTitles'], this['notifications'] = this['languages'][this['language']]['notifications'], this['language'];
                }, this['languages'] = _0x2bd52f('./resources/i18n');
            }();
            _0x4c2dc1['setLanguage'](_0x3a430b['get']('language') || (window['navigator']['language'] || window['navigator']['systemLanguage'] || window['navigator']['userLanguage'])['substr'](1 * -7977 + 704 + 7273, -55 * -139 + -2 * 4021 + 399)['toLowerCase']());
            let _0x525fe6 = new _0x3ffb8d(), _0x3c78a7 = new _0x3ffb8d(), _0x4b1364 = new RegExp(/-?\d+/g), _0x60fd6a = document['querySelector'](_0x32b4d7['coords']), _0x5999da = null, _0x5d41ee = null, _0x54cc3c = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i['test'](navigator['userAgent']), _0xfb04f2 = _0x5f498d(), _0x1a1f77 = {
                    'New Lunar Republic': {
                        'data': 'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/NLR/PixelPlanet/templates.json',
                        'images': 'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/images/',
                        'color': 'aqua',
                        'type': 2,
                        'chunks': ![]
                    }
                }, _0x2f56f2 = 'New Lunar Republic', _0x37866d = {
                    'worldX': _0x330146()[-5701 + 1 * -907 + 6608],
                    'worldY': _0x330146()[-4762 * 1 + -536 * -15 + -3277],
                    'clientX': null,
                    'clientY': null
                }, _0x538246 = !![], _0x452ec7 = ![], _0xd6b06f = ![], _0x408ff3 = ![], _0x305aaf = 2 * -3907 + 265 * 21 + 2274, _0x66cb28 = [], _0x113508 = [], _0x5496be = new function () {
                    this['canvas'] = document['createElement']('canvas'), this['ctx'] = this['canvas']['getContext']('2d');
                }(), _0x1c8c7c = !![], _0x51410c = _0x3a430b['getOrDefault']('cursorColor', 'springGreen'), _0x235a83 = _0x3a430b['getOrDefault']('selectedColor', document['querySelector'](_0x32b4d7['selectedColor'])['style']['backgroundColor']['match'](_0x4b1364)['map'](_0x5328c5 => +_0x5328c5)), _0x469fda = _0x3a430b['getOrDefault']('debug', ![]), _0x3ce0c7 = _0x3a430b['getOrDefault']('grid', ![]), _0x597ad9 = _0x3a430b['getOrDefault']('sync', !![]), _0x4eaeb3 = _0x3a430b['getOrDefault']('sectors', ![]), _0xa26ca1 = _0x3a430b['getOrDefault']('autoSelect', ![]), _0x2aab1e = _0x3a430b['getOrDefault']('phantomPxls', ![]), _0x5319a1 = _0x3a430b['getOrDefault']('buffNote', !![]), _0xc29b2f = _0x3a430b['getOrDefault']('detector', ![]), _0x4625e8 = _0x3a430b['getOrDefault']('minimapWidth', 137 * 62 + 653 * 14 + -17611), _0x41bf49 = _0x3a430b['getOrDefault']('minimapHeight', 6 * -470 + -1 * 2217 + 390 * 13), _0x5402c9 = _0x3a430b['getOrDefault']('sectorsOpacity', 8427 + 1652 + 1 * -10079 + 0.3), _0x1b78a7 = _0x3a430b['getOrDefault']('backgroundOpacity', -5 * 322 + -21 * 291 + 7721 + 0.9), _0x268db1 = _0x3a430b['getOrDefault']('language', 'en'), _0x21f280 = _0x3a430b['getOrDefault']('zoomlevel', -8172 + 3688 + 4489 * 1), _0x4f037f = _0x3a430b['getOrDefault']('activePlugins', _0x2e06cf), _0x48dc21 = new _0x3449d6();
            _0x48dc21['setColors'](_0x972c78), _0x48dc21['onColorSelect'] = ({
                id: _0x4e21a7,
                rgb: _0x4b7292
            }) => _0x3a430b['set']('selectedColor', _0x235a83 = [..._0x4b7292]), _0x48dc21['bindColorsWithElements'](document['querySelector'](_0x32b4d7['palettebox'])['childNodes']);
            let _0x19d66a = new function () {
                let _0x1f4f31 = this;
                this['chunkSize'] = _0x5a219b, this['maxLiveTime'] = (2182 + -3 * -2477 + 29 * -297) * (7761 + -2 * -343 + -8387) * (8784 + -6859 * -1 + -1 * 15638), this['tiledBorders'] = {
                    'x1': 0,
                    'y1': 0,
                    'x2': 256,
                    'y2': 256,
                    'width': 256,
                    'height': 256
                }, this['borders'] = {
                    'x1': -(this['tiledBorders']['width'] * this['chunkSize'] / (3746 + -1 * -5531 + -9275)),
                    'y1': -(this['tiledBorders']['height'] * this['chunkSize'] / (-3 * 579 + 7885 + 2 * -3073)),
                    'x2': this['tiledBorders']['width'] * this['chunkSize'] / (-7448 + -8051 * 1 + 15501 * 1),
                    'y2': this['tiledBorders']['height'] * this['chunkSize'] / (-10 * -911 + 8879 * 1 + -17987)
                }, this['chunks'] = {
                    'get'(_0x3d2ec9, _0x2be601) {
                        return this[_0x3d2ec9] === undefined || this[_0x3d2ec9][_0x2be601] === undefined ? null : this[_0x3d2ec9][_0x2be601];
                    },
                    'set'(_0x14564b, _0x4ccb36, _0x100ebb) {
                        return this[_0x14564b] === undefined && (this[_0x14564b] = {}), _0x1f4f31['chunkList']['push'](this[_0x14564b][_0x4ccb36] = new _0x1a327b(_0x14564b, _0x4ccb36, _0x100ebb)), this[_0x14564b][_0x4ccb36];
                    },
                    'has'(_0x4ac702, _0x42b672) {
                        return this[_0x4ac702] !== undefined && this[_0x4ac702][_0x42b672] !== undefined;
                    },
                    'delete'(_0x4a2265, _0x1d4a81) {
                        if (this[_0x4a2265] === undefined || this[_0x4a2265][_0x1d4a81] === undefined)
                            return console['error']('[CI] Try to delete undefined chunk ' + _0x4a2265 + ' ' + _0x1d4a81);
                        this[_0x4a2265][_0x1d4a81] = undefined;
                        for (let _0x5e2c11 = -1 * 2612 + 7515 + 1 * -4903; _0x5e2c11 !== _0x1f4f31['chunkList']['length']; _0x5e2c11++)
                            if (_0x1f4f31['chunkList'][_0x5e2c11]['x'] === _0x4a2265 && _0x1f4f31['chunkList'][_0x5e2c11]['y'] === _0x1d4a81)
                                return _0x1f4f31['chunkList']['splice'](_0x5e2c11, -9341 + 8316 + 1026);
                    }
                }, this['neededChunks'] = [], this['isNeededChunk'] = function (_0x45ef67, _0x4dfa28) {
                    for (let _0x24d288 of this['neededChunks'])
                        if (_0x24d288[-6161 + 1646 * -4 + 12745] === _0x45ef67 && _0x24d288[1 * -9387 + -1 * -7916 + -16 * -92] === _0x4dfa28)
                            return !![];
                    return ![];
                }, this['chunkList'] = [], this['canLoad'] = !![], this['maxLoadWaitTime'] = -9260 + -8911 + 19171, this['chunkGetTimeout'] = null, this['clearChunkGetTimeout'] = () => {
                    this['chunkGetTimeout'] !== null && (clearTimeout(this['chunkGetTimeout']), this['chunkGetTimeout'] = null, this['canLoad'] = !![]);
                }, this['setChunkGetTimeout'] = function () {
                    this['clearChunkGetTimeout'](), this['canLoad'] = ![], this['chunkGetTimeout'] = setTimeout(this['clearChunkGetTimeout']['bind'](this), this['maxLoadWaitTime']);
                }, this['garbageCollector'] = new function () {
                    this['interval'] = null, this['clear'] = () => {
                        let _0x38c474 = Date['now'](), _0x3a5d58 = 1 * -9371 + 1648 + 7723;
                        for (let _0x205e62 of _0x1f4f31['chunkList'])
                            _0x38c474 - _0x205e62['lastUsing'] > _0x1f4f31['maxLiveTime'] && !_0x1f4f31['isNeededChunk'](_0x205e62['x'], _0x205e62['y']) && (_0x1f4f31['chunks']['delete'](_0x205e62['x'], _0x205e62['y']), _0x3a5d58++);
                        ;
                        _0x3a5d58 !== -430 + -6 * -626 + -3326 && console['log']('[CI] deleted ' + _0x3a5d58 + ' chunks');
                    }, this['start'] = () => {
                        this['stop'](), this['interval'] = setInterval(this['clear']['bind'](this), (-13 * 515 + -8646 + 16341) * (-4396 + -845 * 1 + -1767 * -3));
                    }, this['stop'] = () => this['interval'] === null || (clearInterval(this['interval']), this['interval'] = null);
                }(), this['absToTiled'] = (_0x43e31a, _0x9017b5) => [
                    ~~((_0x43e31a - this['borders']['x1']) / this['chunkSize']),
                    ~~((_0x9017b5 - this['borders']['y1']) / this['chunkSize'])
                ], this['tiledToAbs'] = (_0x3c0d2d, _0x5151d5) => [
                    this['borders']['x1'] + _0x3c0d2d * this['chunkSize'],
                    this['borders']['y1'] + _0x5151d5 * this['chunkSize']
                ];
                {
                    let _0x4c2d03, _0x27c182 = this['chunkSize'] - (408 + -1 * -11 + -209 * 2);
                    this['getPixel'] = (_0x438489, _0xff00c5) => {
                        return _0x438489--, _0xff00c5--, _0x4c2d03 = this['chunks']['get'](...this['absToTiled'](_0x438489, _0xff00c5)), _0x4c2d03 && _0x4c2d03['get'](_0x438489 - this['borders']['x1'] & _0x27c182, _0xff00c5 - this['borders']['y1'] & _0x27c182);
                    }, this['setPixel'] = (_0x247470, _0x1db4c1, _0x23e664) => {
                        return _0x4c2d03 = this['chunks']['get'](...this['absToTiled'](_0x247470, _0x1db4c1)), _0x4c2d03 && _0x4c2d03['set'](_0x247470 - this['borders']['x1'] & _0x27c182, _0x1db4c1 - this['borders']['y1'] & _0x27c182, _0x23e664);
                    };
                }
                ;
                this['getChunksInZone'] = function (_0x203bc9, _0x3e93e7, _0x29dae8, _0x17dbcd) {
                    let _0x346dab = [], _0x4cc0ae = Math['floor']((_0x203bc9 - this['borders']['x1'] - (4 * 20 + -7628 + 7549 * 1)) / this['chunkSize']), _0x6ea8fb = Math['ceil']((_0x29dae8 - this['borders']['x1'] + (-2651 * 3 + 3206 + 4748)) / this['chunkSize']), _0x1d9b72 = Math['floor']((_0x3e93e7 - this['borders']['y1'] - (-358 + 1621 * -1 + -6 * -330)) / this['chunkSize']), _0x5ddb1b = Math['ceil']((_0x17dbcd - this['borders']['y1'] + (40 * 77 + 12 * 746 + 227 * -53)) / this['chunkSize']);
                    _0x4cc0ae < this['tiledBorders']['x1'] && (_0x4cc0ae = this['tiledBorders']['x2']), _0x1d9b72 < this['tiledBorders']['x1'] && (_0x1d9b72 = this['tiledBorders']['x1']), _0x4cc0ae > this['tiledBorders']['x2'] && (_0x4cc0ae = this['tiledBorders']['x2']), _0x1d9b72 > this['tiledBorders']['x2'] && (_0x1d9b72 = this['tiledBorders']['x2']), _0x6ea8fb < this['tiledBorders']['x1'] && (_0x6ea8fb = this['tiledBorders']['x1']), _0x5ddb1b < this['tiledBorders']['x1'] && (_0x5ddb1b = this['tiledBorders']['x1']), _0x6ea8fb > this['tiledBorders']['x2'] && (_0x6ea8fb = this['tiledBorders']['x2']), _0x5ddb1b > this['tiledBorders']['x2'] && (_0x5ddb1b = this['tiledBorders']['x2']);
                    for (let _0x3babd6 = _0x4cc0ae, _0xea72f9; _0x3babd6 < _0x6ea8fb; _0x3babd6++)
                        for (_0xea72f9 = _0x1d9b72; _0xea72f9 < _0x5ddb1b; _0xea72f9++)
                            _0x346dab['push']([
                                _0x3babd6,
                                _0xea72f9
                            ]);
                    return _0x346dab;
                }, this['setAsUsing'] = function (_0x1639a2 = []) {
                    let _0x348bce = Date['now']();
                    _0x1639a2['forEach'](_0x2ba4cf => (_0x2ba4cf = this['chunks']['get'](..._0x2ba4cf)) && (_0x2ba4cf['lastUsing'] = _0x348bce));
                }, this['loadChunk'] = (() => {
                    let _0x4db91a = new Uint32Array(_0x972c78['length']);
                    _0x972c78['forEach'](([_0x52c3ab, _0x5d8837, _0x383dda], _0x48993b) => _0x4db91a[_0x48993b] = 151486 * -36983 + -292079223 + 10172676041 | _0x383dda << 7039 + -8322 + 1299 | _0x5d8837 << -1693 + -835 * -2 + 1 * 31 | _0x52c3ab);
                    const _0x8efef1 = _0x5eb4c2 => {
                        let _0x1664c7 = new Uint32Array(_0x5eb4c2['length']);
                        for (let _0xc5e497 = 43 * 39 + -166 * -46 + -1 * 9313; _0xc5e497 !== _0x5eb4c2['length']; _0xc5e497++)
                            _0x1664c7[_0xc5e497] = _0x4db91a[_0x5eb4c2[_0xc5e497] & -1301 + 9151 * -1 + 2103 * 5];
                        return _0x1664c7;
                    };
                    return this['decompressRawChunk'] = function (_0x398cb1) {
                        let _0x47ac80 = new Uint8ClampedArray(this['chunkSize'] ** 4080 + 1 * 2986 + -7064 << -4509 + 137 * 41 + -7 * 158), _0x4dbbea = new Uint32Array(_0x47ac80['buffer']), _0x23aafc = _0x8efef1(_0x398cb1);
                        return _0x23aafc['forEach']((_0x4de34c, _0x5d049b) => _0x4dbbea[_0x5d049b] = _0x4de34c), _0x47ac80;
                    }, this['parseGetChunkResponse'] = function (_0x51da5d) {
                        return new Promise(async (_0x943138, _0x28698a) => {
                            if (_0x51da5d['ok']) {
                                let _0x1c975a = await _0x51da5d['arrayBuffer'](), _0x342846;
                                if (_0x1c975a['byteLength'])
                                    _0x342846 = this['decompressRawChunk'](new Uint8Array(_0x1c975a));
                                else {
                                    _0x342846 = new Uint8ClampedArray(this['chunkSize'] ** -3 * -1117 + -8048 + 4699 << 9824 * -1 + -5980 + -7903 * -2);
                                    for (let _0x3626b6 = -16 * -232 + 9100 + -12812; _0x3626b6 !== _0x342846['length']; _0x3626b6 += 6675 + -46 * 169 + -1 * -1103)
                                        [_0x342846[_0x3626b6], _0x342846[_0x3626b6 + (-6015 + 7267 * 1 + -9 * 139)], _0x342846[_0x3626b6 + (-5367 * 1 + 4003 + -2 * -683)], _0x342846[_0x3626b6 + (-7266 + 41 * -69 + 10098)]] = [
                                            ..._0x972c78[8616 + 4842 * -1 + 1887 * -2],
                                            -7102 + -37 * 128 + 139 * 87
                                        ];
                                }
                                ;
                                _0x943138(_0x342846);
                            } else
                                _0x28698a();
                        });
                    }, (_0x272649, _0x4ed3fa) => {
                        if (!this['canLoad'] || this['chunks']['get'](_0x272649, _0x4ed3fa))
                            return;
                        return this['setChunkGetTimeout'](), new Promise((_0x359d2e, _0x570d10) => {
                            fetch('https://' + location['host'] + '/chunks/0/' + _0x272649 + '/' + _0x4ed3fa + '.bmp')['then'](_0xa50cc => this['parseGetChunkResponse'](_0xa50cc))['then'](_0x3246f5 => {
                                this['chunks']['set'](_0x272649, _0x4ed3fa, _0x3246f5), this['clearChunkGetTimeout'](), _0x359d2e(_0x3246f5);
                            })['catch'](_0x570d10);
                        });
                    };
                })();
            }();
            _0x19d66a['garbageCollector']['start']();
            const _0x54bb27 = {
                    'OP_CODE': 193,
                    'hydrate': _0x2985e8 => {
                        const _0x588554 = _0x2985e8['getUint8'](5346 + 7255 + 1 * -12600), _0x4ed0a1 = _0x2985e8['getUint8'](-7907 * 1 + -4987 + -992 * -13), _0x2099bb = [];
                        let _0x32bf1c = _0x2985e8['byteLength'];
                        while (_0x32bf1c > 2 * 859 + -1 * -8999 + 2 * -5357) {
                            const _0x3d2f9a = _0x2985e8['getUint8'](_0x32bf1c -= 4 * -1774 + -6180 + 13277), _0x50c407 = _0x2985e8['getUint16'](_0x32bf1c -= 31 * 87 + 8372 * 1 + 17 * -651), _0x23bf1b = _0x2985e8['getUint8'](_0x32bf1c -= 7351 + 3195 + -10545) << -9961 + -20 * -113 + 7717;
                            _0x2099bb['push']({
                                'offset': _0x23bf1b | _0x50c407,
                                'color': _0x3d2f9a
                            });
                        }
                        return {
                            'x': _0x588554,
                            'y': _0x4ed0a1,
                            'pixels': _0x2099bb
                        };
                    },
                    'dehydrate': (_0x58f8ce, _0x121727, _0xa9022e) => {
                        const _0x4eb866 = new ArrayBuffer(-3 * 334 + 118 * -69 + 5 * 1829 + (-4894 * 1 + -647 + 5542) + (-6098 + 2012 + 4087) + _0xa9022e['length'] * (1 * -1613 + -8415 + 10032)), _0x4a79ec = new DataView(_0x4eb866);
                        _0x4a79ec['setUint8'](-4304 + -121 * -29 + -53 * -15, this['OP_CODE']), _0x4a79ec['setUint8'](-9841 * -1 + 3379 + -13219, _0x58f8ce), _0x4a79ec['setUint8'](1997 + -1 * -1741 + -3736, _0x121727);
                        let _0x1fee0a = 3238 * 3 + 6723 + 95 * -173;
                        return _0xa9022e['forEach'](({
                            offset: _0x370829,
                            color: _0x56d326
                        }) => {
                            _0x4a79ec['setUint8'](_0x1fee0a += -8027 + 7590 + -3 * -146, _0x370829 >>> 2061 + -1211 + 139 * -6), _0x4a79ec['setUint16'](_0x1fee0a += 2981 + 4 * 821 + 2088 * -3, _0x370829 & -20092 * 2 + 22433 + 83286), _0x4a79ec['setUint8'](_0x1fee0a += -19 * 481 + 3546 + -3 * -1865, _0x56d326);
                        }), _0x4eb866;
                    }
                }, _0xe06a0c = {
                    'OP_CODE': 162,
                    'dehydrate'(_0x189830) {
                        let _0x52f8fa = new ArrayBuffer(-8356 + 8157 + 202), _0x1dbd5c = new DataView(_0x52f8fa);
                        return _0x1dbd5c['setInt8'](-8909 + -1462 + 10371, -5926 * 1 + -176 * 35 + -3062 * -4), _0x1dbd5c['setInt16'](5 * -455 + -3584 + 5860, _0x189830), _0x52f8fa;
                    }
                }, _0x39f3f1 = {
                    'OP_CODE': 160,
                    'dehydrate'(_0x30074d) {
                        let _0x396091 = new ArrayBuffer(-2609 + -4 * 898 + 6203), _0x232aec = new DataView(_0x396091);
                        return _0x232aec['setInt8'](4670 * -1 + 19 * 151 + 1801, this['OP_CODE']), _0x232aec['setInt8'](-246 + -9217 + 728 * 13, _0x30074d), _0x396091;
                    }
                }, _0x564a02 = {
                    'OP_CODE': 195,
                    'hydrate': _0x5a9549 => {
                        const _0x89b8dc = _0x5a9549['getUint8'](13 * 89 + -1978 + 411 * 2), _0x173a07 = _0x5a9549['getUint32'](-8424 + 5268 * -1 + 13694), _0x1eca41 = _0x5a9549['getInt16'](8194 + 8558 + -16746), _0x102337 = _0x5a9549['getUint8'](4374 * 1 + -4388 + 22 * 1);
                        return {
                            'retCode': _0x89b8dc,
                            'wait': _0x173a07,
                            'coolDownSeconds': _0x1eca41,
                            'pxlCnt': _0x102337
                        };
                    },
                    'dehydrate'(_0x1f4dff, _0x24b05a, _0x3e6bb5, _0x117428) {
                        const _0x34606f = new ArrayBuffer(1 * -6 + 9138 + 1 * -9131 + (-4834 * 2 + -7292 + 16961 * 1) + (7110 + 38 * -257 + -4 * -665) + (9390 + 8419 * 1 + 318 * -56) + (1 * -6155 + 9803 + -3646)), _0x39babb = new DataView(_0x34606f);
                        return _0x39babb['setUint8'](-333 * 25 + 8721 + -396, this['OP_CODE']), _0x39babb['setUint8'](-248 * -26 + -804 + -5643 * 1, _0x1f4dff), _0x39babb['setUint32'](2630 + -21 * -181 + -6429, _0x24b05a), _0x39babb['setInt16'](-2375 + 1 * 4681 + -2300, Math['round'](_0x3e6bb5 / (7030 + -6377 * 1 + 347))), _0x39babb['setUint8'](4 * 1241 + 9426 * 1 + -14382, _0x117428), _0x34606f;
                    }
                };
            let _0x550192 = new _0x3cd708({ 'workAsCatcher': !![] });
            _0x550192['init'](), _0x550192['on']('open', function () {
                this['send'](_0x39f3f1['dehydrate'](4079 + -3450 + 1 * -629));
            }), _0x550192['on']('message', function ({data: _0x47c093}) {
                console['log'](_0x47c093);
                try {
                    if (typeof _0x47c093 !== 'string') {
                        if (_0x47c093['byteLength'] === 2147 * -1 + -70 * 16 + 121 * 27)
                            return;
                        const _0x5bd3f2 = new DataView(_0x47c093);
                        switch (_0x5bd3f2['getUint8'](96 + -1 * -5381 + -5477)) {
                        case _0x54bb27['OP_CODE']:
                            let {
                                x: _0x44d6a2,
                                y: _0x587383,
                                pixels: _0x18c7ac
                            } = _0x54bb27['hydrate'](_0x5bd3f2);
                            console['dir'](_0x54bb27['hydrate'](_0x5bd3f2)), _0x18c7ac['forEach'](({
                                offset: _0x2acedd,
                                color: _0x572dc2
                            }) => {
                                const _0x4ba172 = _0x44d6a2 * _0x5a219b + _0x2acedd % _0x5a219b + _0x19d66a['borders']['x1'], _0x3b0f5e = _0x587383 * _0x5a219b + ~~(_0x2acedd / _0x5a219b) + _0x19d66a['borders']['y1'];
                                this['emit']('pixel', _0x4ba172, _0x3b0f5e, _0x48dc21['IdToRGB'](_0x572dc2));
                            });
                            break;
                        }
                        ;
                    } else {
                        try {
                            msg = JSON['parse'](msg), _0x5319a1 && msg[-6714 + -2518 * 1 + 4 * 2308] === 'event' && msg[-3441 + -2113 + 5555] === 'Threat successfully defeated. Good work!' && msg[2421 + -7438 + 5019] === 'xx' && _0xf8b3d3('Minimap', { 'body': _0x4c2dc1['notifications']['eventWin'] });
                        } catch (_0x1eda24) {
                        }
                        ;
                    }
                    ;
                } catch (_0x2044d5) {
                    console['error']('[WS] An error occured while parsing websocket message'), console['error'](_0x2044d5), console['error'](_0x47c093);
                }
                ;
            }), _0x550192['on']('pixel', (_0xcdb997, _0x401491, _0x12249a) => {
                if (!_0x19d66a['chunks']['has'](..._0x19d66a['absToTiled'](_0xcdb997, _0x401491)))
                    return;
                console['dir']('[WS] pxl ' + _0xcdb997 + ' ' + _0x401491 + ' [' + _0x12249a + ']'), _0x19d66a['setPixel'](_0xcdb997, _0x401491, _0x12249a);
                if (_0x538246 && _0xc29b2f)
                    _0x5bbb7b();
            }), _0x550192['createAction']('setPixel', function (_0x21838e, _0x2edd08, _0x34058e) {
                if (this['disconnected'])
                    return;
                let [_0x212e82, _0x3f364a] = _0x19d66a['absToTiled'](_0x21838e, _0x2edd08), _0x27df21 = (_0x21838e - _0x212e82 * _0x5a219b - _0x19d66a['borders']['x1']) % _0x5a219b + (_0x2edd08 - _0x3f364a * _0x5a219b - _0x19d66a['borders']['y1']) % _0x5a219b * _0x5a219b;
                this['send'](_0x54bb27['dehydrate'](_0x212e82, _0x3f364a, [{
                        'offset': _0x27df21,
                        'color': _0x34058e
                    }]));
            }), _0x550192['createAction']('phantomPxl', function (_0xa63785, _0x168eb8, _0x5903b1) {
                if (this['disconnected'])
                    return;
                let [_0x388074, _0x54197] = _0x19d66a['absToTiled'](_0xa63785, _0x168eb8), _0x219df8 = (_0xa63785 - _0x388074 * _0x5a219b - _0x19d66a['borders']['x1']) % _0x5a219b + (_0x168eb8 - _0x54197 * _0x5a219b - _0x19d66a['borders']['y1']) % _0x5a219b * _0x5a219b;
                this['catcher']['originalOnMessage']({
                    'data': _0x54bb27['dehydrate'](_0x388074, _0x54197, [{
                            'offset': _0x219df8,
                            'color': _0x48dc21['RGBToId'](_0x5903b1)
                        }])
                });
            }), _0x550192['catcher']['middleSend'] = function (_0x535707) {
                if (_0x535707['byteLength'] === 3163 + 8957 + -12120)
                    return;
                if (_0x535707['byteLength'] !== undefined) {
                    let _0x1c4123 = new DataView(_0x535707);
                    switch (_0x1c4123['getUint8'](6103 + -5454 + 1 * -649)) {
                    case _0x54bb27['OP_CODE']:
                        if (_0x3a430b['get']('phantomPxls')) {
                            _0x550192['catcher']['originalOnMessage']({ 'data': _0x564a02['dehydrate'](-4800 + -1994 * 1 + -6794 * -1, -1535 + -6568 + 3 * 2701, -921 + -2 * 2549 + 463 * 13, 2229 * -1 + 64 * -1 + 31 * 74) }), _0x550192['action']('phantomPxl', ...document['querySelector'](_0x32b4d7['coords'])['innerText']['match'](_0x4b1364), _0x235a83);
                            return;
                        }
                        ;
                        let {
                            x: _0x3fe05a,
                            y: _0x4f90f2,
                            pixels: _0x457447
                        } = _0x54bb27['hydrate'](_0x1c4123);
                        if (!_0xa26ca1)
                            break;
                        _0x457447['forEach'](({
                            offset: _0x30d70f,
                            color: _0x595185
                        }) => {
                            const _0x117a60 = _0x3fe05a * _0x5a219b + _0x19d66a['borders']['x1'] + _0x30d70f % _0x5a219b, _0x4102d0 = _0x4f90f2 * _0x5a219b + _0x19d66a['borders']['y1'] + ~~(_0x30d70f / _0x5a219b), _0x340e40 = _0x525fe6['getPixelFromTemplates'](_0x117a60, _0x4102d0);
                            if (_0x340e40 && _0x340e40[989 + 9606 + 8 * -1324])
                                return _0x550192['action']('setPixel', _0x117a60, _0x4102d0, _0x48dc21['RGBToId'](_0x340e40));
                            ;
                        });
                        break;
                    }
                    ;
                }
                ;
                return _0x550192['_ws']['_send'](...arguments);
            };
            if (!_0x54cc3c) {
                if (window['addEventListener'])
                    window['addEventListener']('mousewheel', _0x1ebddc);
                else {
                    if (window['attachEvent'])
                        window['attachEvent']('onmousewheel', _0x1ebddc);
                }
                if (/Firefox/i['test'](navigator['userAgent']))
                    try {
                        window['addEventListener']('DOMMouseScroll', _0x1ebddc);
                    } catch (_0x164140) {
                    }
                ;
            }
            ;
            console['log']('MINIMAP VERSION : ' + _0x13eb17);
            for (let _0x2e66a1 = 2 * -2659 + 5752 + 9 * -48; _0x2e66a1 !== _0x48dc21['elems']['length']; _0x2e66a1++) {
                if (_0x48dc21['same'](_0x235a83, _0x48dc21['elems'][_0x2e66a1]['style']['backgroundColor']['match'](_0x4b1364)['map'](_0x1923ae => +_0x1923ae))) {
                    _0x48dc21['elems'][_0x2e66a1]['click']();
                    break;
                }
                ;
            }
            ;
            class _0x27da74 {
                constructor(_0x462abf) {
                    this['canvas'] = _0x462abf, this['ctx'] = this['canvas']['getContext']('2d');
                }
                ['clear']() {
                    this['ctx']['clearRect'](-17 * -179 + 1 * -7972 + 4929, 811 * 2 + 50 * -82 + 14 * 177, this['canvas']['width'], this['canvas']['height']);
                }
                ['draw'](_0x40193b, _0x2933f7 = _0x597ad9 ? _0xfb04f2 : _0x21f280) {
                    this['clear'](), _0x40193b['forEach'](_0x1f01b3 => {
                        this['ctx']['drawImage'](_0x1f01b3['canvas'], _0x4bda62['xLeft'] - _0x1f01b3['x1'], _0x4bda62['yTop'] - _0x1f01b3['y1'], _0x4bda62['width'], _0x4bda62['height'], -_0x4bda62['pxlsOutHorizontal'], -_0x4bda62['pxlsOutVertical'], _0x4bda62['width'] * _0x2933f7, _0x4bda62['height'] * _0x2933f7);
                    });
                }
                ['setOpacity'](_0x917eb3) {
                    this['canvas']['style']['opacity'] = _0x917eb3;
                }
            }
            ;
            const _0x2154c9 = new function () {
                let _0x18135a = this;
                this['window'] = _0x5f15a7({
                    'type': 'div',
                    'class': 'NLRGeneral',
                    'style': '\n            color:rgb(250,250,250);\n            border-radius:1px;\n            position:absolute;\n            right:0;\n            top:0;\n            user-select: text;\n        ',
                    'html': '\n            <div id="text"></div>\n            <div id="box">\n                <canvas></canvas>\n                <canvas></canvas>\n                <canvas></canvas>\n            </div>\n            <div id="sub-map-panel">\n            </div>\n            <center id="config">\n                <span id="hide-map" class="text-button" style="font-weight:bold; color:red;">OFF</span> | Zoom:\n                <svg id="zoom-plus" class="text-button" height="14.5" width="9" xmlns="http://www.w3.org/2000/svg" stroke-width="2">\n                    <path d="M 1 9 L 9 9 M 5 4 L 5 13" fill="transparent" stroke="rgb(0,100,250)"></path>\n                </svg>\n                /\n                <svg id="zoom-minus"  class="text-button" height="14.5" width="7" xmlns="http://www.w3.org/2000/svg" stroke-width="2">\n                    <path d="M 0 9 L 7 9" fill="transparent" stroke="rgb(0,50,250)"></path>\n                </svg>\n            </center>\n        '
                }), document['body']['appendChild'](this['window']), this['panel'] = {
                    'container': _0x272acd('sub-map-panel'),
                    'add'(_0x561030) {
                        this['container']['appendChild'](_0x561030);
                    }
                }, this['settingsButton'] = _0x242d1c(_0x434359);
                !_0x3a3064 && this['panel']['add'](this['settingsButton']);
                ;
                this['settingsButton']['addEventListener']('click', () => {
                    if (_0x4bad01['window']['style']['display'] === 'none')
                        _0x4bad01['window']['style']['display'] = 'block', _0x4bad01['activateTab']('settings');
                    else {
                        if (_0x4bad01['activeTab'] === 'settings')
                            _0x4bad01['window']['style']['display'] = 'none';
                        else
                            _0x4bad01['activateTab']('settings');
                    }
                    ;
                }), this['box'] = _0x272acd('box'), this['text'] = _0x272acd('text'), this['config'] = _0x272acd('config'), this['canvases'] = this['window']['getElementsByTagName']('canvas'), Object['defineProperty'](this, 'width', {
                    'get'() {
                        return this['canvases'][9163 + -1471 * -1 + -13 * 818]['width'];
                    }
                }), Object['defineProperty'](this, 'height', {
                    'get'() {
                        return this['canvases'][-6469 + -1182 + 1093 * 7]['height'];
                    }
                }), this['interfaces'] = {
                    'tmps': new _0x27da74(this['canvases'][4380 + -8182 + -2 * -1901]),
                    'sectors': new _0x27da74(this['canvases'][-2999 * -2 + -6864 + -51 * -17]),
                    'cover': new _0x27da74(this['canvases'][-2621 * 1 + -9174 + 47 * 251])
                }, this['interfaces']['cover']['draw'] = function (_0x516ed3 = _0x597ad9 ? _0xfb04f2 : _0x21f280) {
                    _0x4bda62['updateSizes'](), this['clear']();
                    if (_0x516ed3 <= 7914 + -9729 + 1817)
                        return;
                    if (_0x3ce0c7 && _0x516ed3 > 9657 + -1 * 3801 + -5852 + 0.5999999999999996) {
                        this['ctx']['beginPath'](), this['ctx']['strokeStyle'] = 'rgb(20,20,20)', this['ctx']['lineWidth'] = 988 * 1 + -2306 + -1319 * -1;
                        for (let _0x83145e = _0x516ed3 - _0x4bda62['pxlsOutHorizontal']; _0x83145e <= this['canvas']['width']; _0x83145e += _0x516ed3) {
                            this['ctx']['moveTo'](_0x83145e, 1758 + 997 + -2755), this['ctx']['lineTo'](_0x83145e, this['canvas']['height']);
                        }
                        ;
                        for (let _0x10a04d = _0x516ed3 - _0x4bda62['pxlsOutVertical']; _0x10a04d <= this['canvas']['height']; _0x10a04d += _0x516ed3) {
                            this['ctx']['moveTo'](3 * 1055 + 5281 * -1 + 2116, _0x10a04d), this['ctx']['lineTo'](this['canvas']['width'], _0x10a04d);
                        }
                        ;
                        this['ctx']['stroke']();
                    }
                    ;
                    this['ctx']['beginPath'](), this['ctx']['lineWidth'] = _0x516ed3 / (5977 + 1094 * -3 + -2692), this['ctx']['strokeStyle'] = _0x51410c, this['ctx']['rect']((_0x2154c9['width'] - _0x516ed3) / (-39 * 107 + 7031 + -2856), (_0x2154c9['height'] - _0x516ed3) / (7370 + -9903 + -3 * -845), _0x516ed3, _0x516ed3), this['ctx']['stroke']();
                }, this['interfaces']['tmps']['drawErrors'] = function (_0x4b4eae = _0x597ad9 ? _0xfb04f2 : _0x21f280) {
                    let _0x374702, _0x5c7281;
                    _0x5496be['canvas']['width'] = _0x4bda62['width'], _0x5496be['canvas']['height'] = _0x4bda62['height'];
                    if (_0x66cb28['length'] === 3 * 1474 + -6673 + 563 * 4) {
                        const _0x356895 = _0x66cb28[684 + -368 + 4 * -79];
                        _0x374702 = _0x356895['ctx']['getImageData'](_0x4bda62['xLeft'] - _0x356895['x1'], _0x4bda62['yTop'] - _0x356895['y1'], _0x4bda62['width'], _0x4bda62['height']);
                    } else {
                        for (let _0x1f4c11 of _0x66cb28)
                            _0x5496be['ctx']['drawImage'](_0x1f4c11['canvas'], _0x4bda62['xLeft'] - _0x1f4c11['x1'], _0x4bda62['yTop'] - _0x1f4c11['y1'], _0x4bda62['width'], _0x4bda62['height'], 1 * -4699 + 14 * -366 + 1 * 9823, -3098 * -1 + -1185 + -1913 * 1, _0x4bda62['width'], _0x4bda62['height']);
                        _0x374702 = _0x5496be['ctx']['getImageData'](8625 + -1 * -6017 + 2 * -7321, -10 * -913 + -1 * -7105 + 3247 * -5, _0x5496be['canvas']['width'], _0x5496be['canvas']['height']);
                    }
                    ;
                    _0x5c7281 = _0x374702['data'];
                    let _0x2ddac5, _0x30191e, _0x147ed5, _0x3eb583 = 8 * -1130 + 6806 + 2234, _0x38ac2d = _0x4bda62['height'] + _0x4bda62['yTop'], _0x2d5f34 = _0x4bda62['width'] + _0x4bda62['xLeft'];
                    if (_0x4bda62['yTop'] > _0x38ac2d || _0x4bda62['xLeft'] > _0x2d5f34)
                        throw new Error('[Detector] wrong sizes');
                    for (_0x147ed5 = _0x4bda62['yTop']; _0x147ed5 !== _0x38ac2d; _0x147ed5++) {
                        for (_0x30191e = _0x4bda62['xLeft']; _0x30191e !== _0x2d5f34; _0x30191e++, _0x3eb583 += 7722 + -2580 + -5138) {
                            _0x2ddac5 = _0x19d66a['getPixel'](_0x30191e + (-998 + 3205 + -2206), _0x147ed5 + (-8757 + 3 * -2219 + 1 * 15415));
                            if (_0x5c7281[_0x3eb583 + (3 * -2383 + 1773 + 5379)] === 9166 + 1 * -1232 + 7934 * -1)
                                continue;
                            if (_0x2ddac5 === null) {
                                _0x5c7281[_0x3eb583] = _0x5c7281[_0x3eb583 + (-2488 + 506 + 1983)] = _0x5c7281[_0x3eb583 + (5002 * 1 + 3 * -139 + 4583 * -1)] = _0x5c7281[_0x3eb583 + (-3447 + 9410 + -1490 * 4)] = 6702 + 365 * 14 + 11812 * -1, _0x19d66a['loadChunk'](..._0x19d66a['absToTiled'](_0x30191e, _0x147ed5));
                                continue;
                            }
                            ;
                            _0x48dc21['same'](_0x2ddac5, [
                                _0x5c7281[_0x3eb583],
                                _0x5c7281[_0x3eb583 + (602 * -11 + -83 * -11 + 1142 * 5)],
                                _0x5c7281[_0x3eb583 + (-7254 + -602 * 7 + 11470)]
                            ]) ? _0x5c7281[_0x3eb583] = _0x5c7281[_0x3eb583 + (6532 + -1330 + 743 * -7)] = _0x5c7281[_0x3eb583 + (-8914 + 8 * -982 + -1198 * -14)] = (_0x5c7281[_0x3eb583] + _0x5c7281[_0x3eb583 + (-664 * 12 + -1 * -7721 + 248)] + _0x5c7281[_0x3eb583 + (-194 * -1 + 3265 * 3 + 9987 * -1)]) / (-6716 + -8862 + 15581) : (_0x5c7281[_0x3eb583] = 8063 + -2589 + -5219 * 1, _0x5c7281[_0x3eb583 + (-5239 + 101 * -50 + -105 * -98)] = _0x5c7281[_0x3eb583 + (9817 * -1 + 5999 + 955 * 4)] = -2 * -832 + -2 * -3761 + -9186);
                            ;
                        }
                        ;
                    }
                    ;
                    let _0x16a053 = _0x19d66a['getChunksInZone'](_0x4bda62['xLeft'], _0x4bda62['yTop'], _0x4bda62['xLeft'] + _0x4bda62['width'], _0x4bda62['yTop'] + _0x4bda62['height']);
                    _0x19d66a['setAsUsing'](_0x16a053);
                    _0x4b4eae === 1 * -9491 + -61 * -91 + 3941 ? this['ctx']['putImageData'](_0x374702, -2172 + -2 * -3049 + 3926 * -1, -1226 * -7 + 6001 + -14583 * 1) : (_0x5496be['ctx']['putImageData'](_0x374702, -386 * 5 + 1163 * 4 + -2722, 740 + -4429 + 3689), this['clear'](), this['ctx']['drawImage'](_0x5496be['canvas'], -_0x4bda62['pxlsOutHorizontal'], -_0x4bda62['pxlsOutVertical'], _0x4bda62['width'] * _0x4b4eae, _0x4bda62['height'] * _0x4b4eae));
                    ;
                }, this['setOpacity'] = function (_0x3b5aba) {
                    this['box']['style']['backgroundColor'] = 'rgba(0,0,0,' + _0x3b5aba + ')';
                }, this['setWidth'] = function (_0x4c8bed) {
                    this['window']['style']['width'] = _0x4c8bed;
                }, this['setHeight'] = function (_0x2c09bd) {
                    this['window']['style']['height'] = _0x2c09bd;
                }, this['onNoTmps'] = function () {
                    _0x538246 = ![], this['setWidth'](_0x4625e8 + '%'), this['setHeight']('28px'), this['box']['style']['display'] = 'none', this['text']['style']['display'] = 'block', this['text']['style']['cursor'] = 'normal', this['text']['innerText'] = 'Bot lives matter';
                }, this['onTmpsExist'] = function () {
                    _0x538246 = !![], this['setWidth'](_0x4625e8 + '%'), this['setHeight'](_0x41bf49 + '%'), this['box']['style']['display'] = 'block', this['text']['style']['display'] = 'none';
                }, this['open'] = function () {
                    _0x3a430b['set']('mapClosed', ![]), this['setWidth'](_0x4625e8 + '%'), this['setHeight'](_0x41bf49 + '%'), this['box']['style']['display'] = 'block', this['config']['style']['display'] = 'block', this['text']['style']['display'] = 'none', this['panel']['container']['style']['display'] = 'block', _0x5d9f07();
                }, this['close'] = function () {
                    _0x3a430b['set']('mapClosed', !![]), this['setWidth']('auto'), this['setHeight']('28px'), this['box']['style']['display'] = 'none', this['config']['style']['display'] = 'none', this['text']['style']['display'] = 'block', this['text']['innerText'] = 'Minimap', this['text']['style']['cursor'] = 'pointer', this['panel']['container']['style']['display'] = 'none', _0x5d9f07();
                };
            }();
            setTimeout(() => {
                if (_0x272acd('minimap')) {
                    alert('Включено два или более скриптов с миникартой. Пожалуйста, отключите все остальные скрипты, оставив только этот, для корректной работы кода.\n\rTwo or more minimap scripts included. Please disable all other scripts, leaving only this one for the code to work correctly.');
                    return;
                }
                ;
            }, 4519 * -1 + -7642 * 1 + -119 * -119);
            let _0x4bda62 = {
                'updateSizes': function (_0xbbc25b = _0x597ad9 ? _0xfb04f2 : _0x21f280) {
                    this['width'] = ~~(_0x2154c9['width'] / _0xbbc25b) | 8433 + 38 * -191 + -1174, this['height'] = ~~(_0x2154c9['height'] / _0xbbc25b) | 9653 + -7391 + -2261, this['pxlsOutHorizontal'] = _0xbbc25b - (_0x2154c9['width'] - this['width'] * _0xbbc25b) / (-5587 + 1703 * -5 + -328 * -43), this['pxlsOutVertical'] = _0xbbc25b - (_0x2154c9['height'] - this['height'] * _0xbbc25b) / (8789 + -6741 + -2046), this['xLeft'] = _0x37866d['worldX'] - (this['width'] + (-2803 + -1 * -7501 + 11 * -427)) / (19 * -13 + 5 * -1507 + 1112 * 7), this['yTop'] = _0x37866d['worldY'] - (this['height'] + (3943 + -1 * -2632 + -6574)) / (-273 * -31 + 3 * -1077 + -5230), this['width'] += 7029 + -267 * 7 + -2 * 2579, this['height'] += -7434 + 9768 + -2332, _0x5999da = this['width'] >>> 4756 + -853 * -3 + -7314, _0x5d41ee = this['height'] >>> -4973 * 2 + 97 * -69 + 16640;
                }
            };
            fetch(_0x475750)['then'](_0x8186bd => _0x8186bd['ok'] ? _0x8186bd['text']() : new Error(''))['then'](_0x3b5ad3 => {
                document['head']['appendChild'](_0x5f15a7({
                    'type': 'script',
                    'html': _0x3b5ad3
                }));
            })['catch'](() => 23 * 139 + 8164 + -541 * 21), fetch(encodeURI(_0x455693))['then'](_0x569623 => _0x569623['json']())['then'](_0x131c33 => {
                _0x1a1f77 = _0x131c33, console['log']('Loaded factions', _0x1a1f77);
                if (!_0x3a3064 && localStorage['injection']) {
                    try {
                        const _0x390bda = JSON['parse'](localStorage['injection']);
                        Object['assign'](_0x1a1f77, _0x390bda), console['log']('Injection ', _0x390bda);
                    } catch (_0x239daa) {
                        alert('Ошибка при парсинге инжектированных фракций \n' + _0x239daa);
                    }
                    ;
                }
                ;
                _0x8bf6b2(_0x131c33, _0x46cb2a => _0x46cb2a['chunks'] = 'chunks' in _0x46cb2a && _0x46cb2a['chunks'] == 'true'), _0x2f56f2 = _0x1a1f77[_0x3a430b['get']('faction')] ? _0x3a430b['get']('faction') : Object['keys'](_0x1a1f77)[-9527 * 1 + -1 * 3046 + 12573], _0x176c98(), _0x8bf6b2(_0x1a1f77, (_0x59872d, _0x3fb848) => {
                    _0x4bad01['addFaction'](_0x3fb848, _0x59872d['color'], function () {
                        _0x4bad01['factions'][_0x2f56f2]['style']['fontWeight'] = 'normal', this['style']['fontWeight'] = 'bold', _0x3a430b['set']('faction', _0x2f56f2 = _0x3fb848), _0x176c98();
                    });
                }), _0x4bad01['factions'][_0x2f56f2]['style']['fontWeight'] = 'bold';
            })['catch'](console['error']), _0x272acd('hide-map')['onclick'] = () => _0x2154c9['close'](), _0x2154c9['text']['onclick'] = () => {
                if (_0x3a430b['get']('mapClosed'))
                    _0x2154c9['open']();
                _0x2f6f20();
            }, _0x272acd('zoom-plus')['addEventListener'](_0x54cc3c ? 'touchstart' : 'mousedown', _0x131d36 => {
                _0x131d36['preventDefault'](), _0xd6b06f = !![], _0x408ff3 = ![], _0x1d4ce1();
            }, ![]), _0x272acd('zoom-plus')['addEventListener'](_0x54cc3c ? 'touchend' : 'mouseup', () => {
                return _0xd6b06f = ![], _0x3a430b['set']('zoomlevel', _0x21f280), ![];
            }), _0x272acd('zoom-minus')['addEventListener'](_0x54cc3c ? 'touchstart' : 'mousedown', _0x4b3322 => {
                _0x4b3322['preventDefault'](), _0x408ff3 = !![], _0xd6b06f = ![], _0xf1bf98();
            }, ![]), _0x272acd('zoom-minus')['addEventListener'](_0x54cc3c ? 'touchend' : 'mouseup', () => {
                return _0x408ff3 = ![], _0x3a430b['set']('zoomlevel', _0x21f280), ![];
            });
            if (_0x54cc3c) {
                let _0x4924d7 = _0x5f15a7({
                    'type': 'canvas',
                    'class': 'center'
                });
                _0x4924d7['width'] = _0x4924d7['height'] = -129 * -63 + -579 * -4 + -10428, document['body']['appendChild'](_0x4924d7);
                let _0x32b1da = _0x4924d7['getContext']('2d'), _0x14187a = document['querySelector'](_0x32b4d7['gameCanvas']), _0x431282 = _0x14187a['getContext']('2d');
                const _0xb4ef78 = () => {
                    let _0x3c0a13 = _0x32b1da['getImageData'](-3097 + -121 * 47 + 8784, 5899 + -3641 + -1129 * 2, _0x4924d7['width'], _0x4924d7['height']), _0x42813f = _0x431282['getImageData'](_0x4924d7['offsetLeft'], _0x4924d7['offsetTop'], _0x4924d7['width'], _0x4924d7['height']), _0x3e143d, _0x26297b, _0x2ff5c6;
                    _0x3e143d = _0x4924d7['width'] >>> 6791 * 1 + 2036 * -2 + -2718;
                    for (_0x26297b = 1949 * 4 + 2498 * -1 + -883 * 6; _0x26297b !== _0x4924d7['height']; _0x26297b++) {
                        _0x2ff5c6 = _0x3e143d + _0x26297b * _0x4924d7['width'] << 2953 * -1 + -2974 * 1 + 5929, _0x3c0a13['data'][_0x2ff5c6] = -7957 + -1 * 757 + 1 * 8969 - _0x42813f['data'][_0x2ff5c6], _0x3c0a13['data'][_0x2ff5c6 + (-52 * 31 + 458 + -1 * -1155)] = 4825 + 7 * -1157 + 3529 - _0x42813f['data'][_0x2ff5c6 + (-6403 + 5058 + 1346 * 1)], _0x3c0a13['data'][_0x2ff5c6 + (-5210 + 715 * -8 + 10932)] = 5675 + 1273 + 2231 * -3 - _0x42813f['data'][_0x2ff5c6 + (-4728 + 2465 + -1 * -2265)], _0x3c0a13['data'][_0x2ff5c6 + (1 * 7961 + -1 * -1756 + -4857 * 2)] = 1 * -8081 + -2724 + 11060;
                    }
                    ;
                    _0x26297b = _0x4924d7['height'] >>> -587 * 13 + 367 + 5 * 1453;
                    for (_0x3e143d = 2 * 711 + 2617 * 1 + 7 * -577; _0x3e143d !== _0x4924d7['width']; _0x3e143d++) {
                        _0x2ff5c6 = _0x3e143d + _0x26297b * _0x4924d7['width'] << 139 + -9051 + 8914, _0x3c0a13['data'][_0x2ff5c6] = -2138 + 4293 + -1900 - _0x42813f['data'][_0x2ff5c6], _0x3c0a13['data'][_0x2ff5c6 + (-137 * -62 + -4679 + -3814)] = -6370 + -7157 + 2297 * 6 - _0x42813f['data'][_0x2ff5c6 + (-6081 * 1 + -7945 + 1079 * 13)], _0x3c0a13['data'][_0x2ff5c6 + (-2 * -250 + -4460 + 3962)] = -1 * -6434 + -1990 + 59 * -71 - _0x42813f['data'][_0x2ff5c6 + (-1 * -5969 + 1271 + -7238)], _0x3c0a13['data'][_0x2ff5c6 + (2147 + 1 * -7039 + 4895)] = 8589 + 5 * -508 + -5794;
                    }
                    ;
                    _0x32b1da['putImageData'](_0x3c0a13, 3994 * 2 + -598 + -2 * 3695, 4290 + 7103 * 1 + -11393);
                };
                _0xb4ef78(), _0x14187a['addEventListener']('touchmove', _0xb4ef78);
                let _0x4a5113 = null, _0x12cc2c = null, _0x2904a1 = null, _0x4818c9;
                setInterval(() => {
                    [_0x4a5113, _0x12cc2c] = _0x330146(), _0x2904a1 = _0x5f498d();
                    if (_0x37866d['worldX'] !== _0x4a5113 || _0x37866d['worldY'] !== _0x12cc2c || _0x2904a1 !== _0xfb04f2) {
                        _0x4818c9 = _0x2904a1 !== _0xfb04f2, _0x37866d['worldX'] = _0x4a5113, _0x37866d['worldY'] = _0x12cc2c, _0xfb04f2 = _0x2904a1;
                        if (_0x4818c9)
                            _0x2154c9['interfaces']['cover']['draw']();
                        _0xb4ef78(), _0x2f6f20();
                    }
                    ;
                }, 1835 * -1 + 1 * -664 + 2599);
            } else {
                let _0x3aa04c, _0x5f1684;
                window['addEventListener']('mousemove', _0x28d1ba => {
                    [_0x3aa04c, _0x5f1684] = _0x330146();
                    if (_0x37866d['worldX'] !== _0x3aa04c || _0x37866d['worldY'] !== _0x5f1684) {
                        _0x37866d['worldX'] = _0x3aa04c, _0x37866d['worldY'] = _0x5f1684, _0x37866d['clientX'] = _0x28d1ba['clientX'], _0x37866d['clientY'] = _0x28d1ba['clientY'];
                        if (_0xa26ca1 && _0xfb04f2 > 23 * 426 + -1099 + -8695 * 1 + 0.5999999999999996) {
                            let _0x31eb23 = _0x525fe6['getPixelFromTemplates'](_0x37866d['worldX'], _0x37866d['worldY']);
                            if (_0x31eb23 && _0x48dc21['has'](_0x31eb23) && !_0x48dc21['same'](_0x31eb23, _0x235a83))
                                _0x48dc21['select'](_0x31eb23);
                        }
                        ;
                        _0x2f6f20();
                    }
                    ;
                }, ![]);
            }
            ;
            let _0x4bad01 = new function () {
                    let _0x305fd6 = this;
                    this['window'] = _0x5f15a7({
                        'type': 'div',
                        'class': 'NLRGeneral center',
                        'style': '\n            z-index:1;\n            display:none;\n            background-color:rgba(0,0,0,0.9);\n            color:rgb(250,250,250);\n            line-height:32px;\n            border-radius:1px;\n            border:2px rgba(50,50,50,0.9) solid;\n        ',
                        'html': '<div class=\'level\' style="border-bottom: 1px rgba(50,50,50,0.9) solid; padding:5px;">' + '<span></span>' + '<svg class="text-button" style="position:fixed; right:0px; margin:9px;" height="16" width="16" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5">' + '<path d="M 1 1 L 15 15 M 15 1 L 1 15" fill="transparent" stroke="white"></path>' + '</svg>' + '</div>' + '<div class="level" style="line-height:20px; right:0px;">' + '<div id="tabs" style="border-bottom: 1px rgba(50,50,50,0.9) solid;">' + '</div>' + '<div id="content" style="border-bottom: 1px rgba(50,50,50,0.9) solid;">' + '</div>' + '</div>' + '<footer class=\'level\' style = "color:grey; font: menu; font-size:11px; padding:5px;"></footer>'
                    }), document['body']['appendChild'](this['window']);
                    let _0x58c44c = this['window']['getElementsByClassName']('level');
                    this['elements'] = {
                        'title': _0x58c44c[-3598 + 8142 * -1 + 11740]['getElementsByTagName']('span')[-89 * 9 + -499 * 13 + 7288],
                        'cancel': _0x58c44c[-1696 + 4975 * -2 + -9 * -1294]['getElementsByTagName']('svg')[3349 * 1 + -7289 + 1 * 3940],
                        'footer': _0x58c44c[1 * -6011 + -3 * -2068 + -191],
                        'iconsContainer': _0x272acd('tabs'),
                        'icons': {},
                        'tabContent': _0x272acd('content')
                    }, this['activeTab'] = null, this['activateTab'] = function (_0x50fb83) {
                        this['activeTab'] = _0x50fb83, _0x8bf6b2(this['tabs'], (_0x407edc, _0x2a4e2c) => _0x407edc['style']['display'] = _0x2a4e2c === _0x50fb83 ? 'block' : 'none'), _0x8bf6b2(this['elements']['icons'], (_0xa71b3f, _0x5d0033) => _0xa71b3f['style']['textWeight'] = _0x5d0033 === _0x50fb83 ? 'bold' : 'normal');
                    }, this['tabs'] = {}, this['addTab'] = function (_0x296f43) {
                        return this['tabs'][_0x296f43] = _0x5f15a7({
                            'type': 'div',
                            'style': 'display:none;',
                            'class': 'sub-settings'
                        }), this['elements']['tabContent']['appendChild'](this['tabs'][_0x296f43]), this['elements']['icons'][_0x296f43] = _0x5f15a7({
                            'type': 'span',
                            'class': 'sub-settings-icon',
                            'text': _0x296f43,
                            'listeners': { 'click': this['activateTab']['bind'](this, _0x296f43) }
                        }), this['elements']['iconsContainer']['appendChild'](this['elements']['icons'][_0x296f43]), this['tabs'][_0x296f43];
                    }, this['addTab']('factions'), this['addTab']('settings'), this['addTab']('display'), this['display'] = {
                        'width': {},
                        'height': {},
                        'backgroundOpacity': {},
                        'sectorsOpacity': {}
                    }, this['tabs']['display']['appendChild'](_0x5f15a7({
                        'type': 'table',
                        'style': 'line-height: 0px;'
                    }, [
                        _0x5f15a7({ 'type': 'tr' }, [
                            this['display']['width']['desc'] = _0x5f15a7({
                                'type': 'td',
                                'text': 'Width'
                            }),
                            _0x5f15a7({ 'type': 'td' }, [
                                this['display']['width']['input'] = _0x5f15a7({
                                    'type': 'input',
                                    'listeners': {
                                        'input': function () {
                                            const _0x124afe = parseInt(this['value']);
                                            _0x4625e8 = isNaN(_0x124afe) ? _0x511dd8 : _0x124afe > _0xe44a07 ? _0xe44a07 : _0x124afe < 2063 + -7550 + -1372 * -4 ? -1478 + -9 * -19 + -654 * -2 : _0x124afe, _0x3a430b['set']('minimapWidth', _0x4625e8), _0x421b8a(_0x4625e8, _0x41bf49), _0x5d9f07();
                                        },
                                        'focus': () => _0x452ec7 = !![],
                                        'blur': () => _0x452ec7 = ![]
                                    },
                                    'attributes': {
                                        'maxlength': 3,
                                        'value': _0x4625e8
                                    }
                                }),
                                document['createTextNode'](' %')
                            ])
                        ]),
                        _0x5f15a7({
                            'type': 'tr',
                            'style': 'background-color:rgba(0,0,0,0);'
                        }, [
                            this['display']['height']['desc'] = _0x5f15a7({
                                'type': 'td',
                                'text': 'Height'
                            }),
                            _0x5f15a7({ 'type': 'td' }, [
                                this['display']['height']['input'] = _0x5f15a7({
                                    'type': 'input',
                                    'listeners': {
                                        'input': function () {
                                            let _0x4a2735 = parseInt(this['value']);
                                            _0x41bf49 = isNaN(_0x4a2735) ? _0xeb9fa9 : _0x4a2735 > _0x3e6886 ? _0x3e6886 : _0x4a2735 < -4 * -932 + -6010 + 2283 ? 1381 * 5 + 5 * -387 + -4969 : _0x4a2735, _0x3a430b['set']('minimapHeight', _0x41bf49), _0x421b8a(_0x4625e8, _0x41bf49), _0x5d9f07();
                                        },
                                        'focus': () => _0x452ec7 = !![],
                                        'blur': () => _0x452ec7 = ![]
                                    },
                                    'attributes': {
                                        'maxlength': 3,
                                        'value': _0x41bf49
                                    }
                                }),
                                document['createTextNode'](' %')
                            ])
                        ]),
                        _0x5f15a7({
                            'type': 'tr',
                            'style': 'background-color:rgba(0,0,0,0);'
                        }, [
                            this['display']['sectorsOpacity']['desc'] = _0x5f15a7({
                                'type': 'td',
                                'text': 'Sectors opacity :'
                            }),
                            _0x5f15a7({ 'type': 'td' }, [
                                this['display']['sectorsOpacity']['input'] = _0x5f15a7({
                                    'type': 'input',
                                    'listeners': {
                                        'input': function () {
                                            let _0x162172 = parseInt(this['value']);
                                            !isNaN(_0x162172) && (_0x3a430b['set']('sectorsOpacity', _0x5402c9 = _0x162172 / (-8273 + -5478 * 1 + 13851)), _0x2154c9['interfaces']['sectors']['setOpacity'](_0x5402c9));
                                            ;
                                            _0x5bbb7b();
                                        },
                                        'focus': () => _0x452ec7 = !![],
                                        'blur': () => _0x452ec7 = ![]
                                    },
                                    'attributes': {
                                        'maxlength': 3,
                                        'value': _0x5402c9 * (-6684 + 4 * 1843 + -588)
                                    }
                                }),
                                document['createTextNode'](' %')
                            ])
                        ]),
                        _0x5f15a7({
                            'type': 'tr',
                            'style': 'background-color:rgba(0,0,0,0);'
                        }, [
                            this['display']['backgroundOpacity']['desc'] = _0x5f15a7({
                                'type': 'td',
                                'text': 'Sectors opacity :'
                            }),
                            _0x5f15a7({ 'type': 'td' }, [
                                this['display']['backgroundOpacity']['input'] = _0x5f15a7({
                                    'type': 'input',
                                    'listeners': {
                                        'input': function () {
                                            let _0x27e3aa = parseInt(this['value']);
                                            !isNaN(_0x27e3aa) && (_0x3a430b['set']('backgroundOpacity', _0x1b78a7 = _0x27e3aa / (65 * 136 + 4694 * 1 + -13434)), _0x2154c9['setOpacity'](_0x1b78a7));
                                            ;
                                        },
                                        'focus': () => _0x452ec7 = !![],
                                        'blur': () => _0x452ec7 = ![]
                                    },
                                    'attributes': {
                                        'maxlength': 3,
                                        'value': _0x1b78a7 * (3 * -1887 + 9615 + -94 * 41)
                                    }
                                }),
                                document['createTextNode'](' %')
                            ])
                        ])
                    ])), this['options'] = {}, this['addOption'] = function (_0x4e2f77, _0x202dc8) {
                        let _0x228711, _0x5dd78c, _0x580045 = _0x5f15a7({
                                'type': 'div',
                                'class': 'settings-option',
                                'listeners': { 'onclick': _0x202dc8 }
                            }, [
                                _0x228711 = _0x5f15a7({ 'type': 'span' }),
                                _0x5dd78c = _0x5f15a7({ 'type': 'span' })
                            ]);
                        return _0x580045['desc'] = _0x228711, _0x580045['button'] = _0x5dd78c, this['tabs']['settings']['appendChild'](_0x580045), this['options'][_0x4e2f77] = _0x580045;
                    }, this['addOption']('cursorColor', function () {
                        let _0x7f6da0 = _0x1d1b63['indexOf'](_0x51410c) + (79 * 46 + 3233 + -6866);
                        if (_0x7f6da0 === _0x1d1b63['length'])
                            _0x7f6da0 = -6658 + 1644 * 4 + -41 * -2;
                        _0x3a430b['set']('cursorColor', this['button']['innerText'] = this['button']['style']['color'] = _0x51410c = _0x1d1b63[_0x7f6da0]), _0x2154c9['interfaces']['cover']['draw']();
                    }), this['addOption']('grid', function () {
                        this['button']['innerText'] = _0x268b42(_0x3a430b['set']('grid', _0x3ce0c7 = !_0x3ce0c7)), _0x2154c9['interfaces']['cover']['draw']();
                    }), this['addOption']('theme', () => alert('Will be soon (or no)')), this['addOption']('sectors', function () {
                        this['button']['innerText'] = _0x268b42(_0x3a430b['set']('sectors', _0x4eaeb3 = !_0x4eaeb3));
                        if (!_0x4eaeb3)
                            _0x2154c9['interfaces']['sectors']['clear']();
                        _0x5bbb7b();
                    }), this['addOption']('detector', function () {
                        _0x3a430b['set']('detector', _0xc29b2f = !_0xc29b2f), this['button']['innerText'] = _0x268b42(_0xc29b2f), _0x2f6f20(), _0x2154c9['interfaces']['cover']['draw']();
                    }), this['addOption']('autoSelect', function () {
                        this['button']['innerText'] = _0x268b42(_0x3a430b['set']('autoSelect', _0xa26ca1 = !_0xa26ca1));
                    }), this['addOption']('phantomPxls', function () {
                        this['button']['innerText'] = _0x268b42(_0x3a430b['set']('phantomPxls', _0x2aab1e = !_0x2aab1e));
                    }), this['addOption']('buffNote', function () {
                        this['button']['innerText'] = _0x268b42(_0x3a430b['set']('buffNote', _0x5319a1 = !_0x5319a1));
                    }), this['addOption']('sync', function () {
                        _0x3a430b['set']('sync', _0x597ad9 = !_0x597ad9), this['button']['innerText'] = _0x268b42(_0x597ad9), _0x2f6f20(), _0x2154c9['interfaces']['cover']['draw']();
                    }), this['addOption']('language', () => {
                        let _0x18cd65 = Object['keys'](_0x4c2dc1['languages']), _0x4d61ed = _0x18cd65['indexOf'](_0x4c2dc1['getLanguage']()) + (491 * -1 + -8273 + 1753 * 5);
                        if (_0x4d61ed === _0x18cd65['length'])
                            _0x4d61ed = -4212 + -57 * 17 + 5181;
                        _0x3a430b['set']('language', _0x4c2dc1['setLanguage'](_0x18cd65[_0x4d61ed])), this['changeLanguage'](_0x4c2dc1['getLanguage']());
                    }), this['options']['cursorColor']['button']['innerText'] = _0x51410c, this['options']['cursorColor']['button']['style']['color'] = _0x51410c, this['options']['grid']['button']['innerText'] = _0x268b42(_0x3ce0c7), this['options']['theme']['button']['innerText'] = _0x40eb39['getTheme'](), this['options']['sectors']['button']['innerText'] = _0x268b42(_0x4eaeb3), this['options']['detector']['button']['innerText'] = _0x268b42(_0xc29b2f), this['options']['autoSelect']['button']['innerText'] = _0x268b42(_0xa26ca1), this['options']['phantomPxls']['button']['innerText'] = _0x268b42(_0x2aab1e), this['options']['buffNote']['button']['innerText'] = _0x268b42(_0x5319a1), this['options']['sync']['button']['innerText'] = _0x268b42(_0x597ad9), this['options']['language']['button']['innerText'] = _0x4c2dc1['getLanguage'](), this['elements']['cancel']['addEventListener']('click', () => _0x4bad01['window']['style']['display'] = 'none'), this['changeLanguage'] = function (_0x3c922c) {
                        _0x4c2dc1['setLanguage'](_0x3c922c), this['options']['language']['button']['innerText'] = _0x4c2dc1['getLanguage'](), this['elements']['title']['innerHTML'] = _0x4c2dc1['title'], _0x8bf6b2(_0x4c2dc1['options'], (_0x43174c, _0x10bc2b) => {
                            this['options'][_0x10bc2b] && (this['options'][_0x10bc2b]['desc']['innerText'] = _0x43174c);
                        }), _0x8bf6b2(_0x4c2dc1['display'], (_0x36d13c, _0x102eec) => {
                            this['display'][_0x102eec] && (this['display'][_0x102eec]['desc']['innerText'] = _0x36d13c);
                        }), this['elements']['footer']['innerHTML'] = _0x4c2dc1['footer'], this['updateTitles']();
                    }, this['updateTitles'] = function () {
                        _0x8bf6b2(_0x4c2dc1['optionsTitles'], (_0x2d02a5, _0x39f622) => {
                            this['options'][_0x39f622] && this['options'][_0x39f622]['setAttribute']('title', _0x2d02a5);
                        });
                    }, this['clearFactions'] = () => {
                        this['tabs']['factions']['innerHTML'] = '', this['factions'] = {};
                    }, this['factions'] = {}, this['addFaction'] = function (_0x4fbac9, _0x5e975d, _0x5410d4) {
                        this['factions'][_0x4fbac9] = _0x5f15a7({
                            'type': 'div',
                            'class': 'text-button',
                            'style': 'color:' + _0x5e975d + '; padding-left:5px;',
                            'text': _0x4fbac9,
                            'listeners': { 'click': _0x5410d4 }
                        }), this['tabs']['factions']['appendChild'](this['factions'][_0x4fbac9]);
                    }, this['setTheme'] = function (_0x3f762a) {
                        _0x40eb39['setTheme'](_0x3f762a), this['options']['theme']['button']['innerText'] = _0x3f762a, _0x40eb39['dynamicStyleElement']['innerHTML'] = _0x40eb39['html'];
                    };
                }(), _0x46a6cc = new _0x3216d6();
            _0x4bad01['addTab']('plugins'), _0x4bad01['tabs']['plugins']['style']['overflowY'] = 'scroll', _0x4bad01['tabs']['plugins']['style']['display'] = 'none', _0x4bad01['elements']['icons']['plugins']['style']['display'] = 'none', _0x46a6cc['loadData'](_0x5afbd0)['then'](() => {
                console['log']('Plugins loaded', _0x46a6cc);
                let _0xd80972 = [];
                _0x8bf6b2(_0x46a6cc['plugins'], _0x925496 => {
                    _0xd80972['push'](_0x5f15a7({
                        'type': 'div',
                        'class': 'plugin'
                    }, [
                        _0x5f15a7({
                            'type': 'div',
                            'style': 'font-size: 15px; font-size: 17px;',
                            'text': _0x925496['name']
                        }),
                        _0x5f15a7({
                            'type': 'div',
                            'style': 'margin-left: 2.5%; color: grey;'
                        }, [
                            _0x5f15a7({
                                'type': 'div',
                                'text': _0x925496['desc']
                            }),
                            _0x5f15a7({ 'type': 'div' }, [
                                document['createTextNode']('Included: '),
                                _0x5f15a7({
                                    'type': 'input',
                                    'attributes': {
                                        'type': 'checkbox',
                                        'checked': _0x4f037f['includes'](_0x925496['name'])
                                    },
                                    'listeners': { 'onclick': _0x112904(_0x925496) }
                                })
                            ])
                        ])
                    ])), _0xd80972['push'](_0x5f15a7({ 'type': 'hr' }));
                    function _0x112904(_0x54680c) {
                        return function () {
                            if (this['checked']) {
                                if (!_0x4f037f['includes'](_0x54680c['name']))
                                    _0x4f037f['push'](_0x54680c['name']);
                            } else {
                                if (_0x4f037f['includes'](_0x54680c['name']))
                                    _0x4f037f['splice'](_0x4f037f['indexOf'](_0x54680c['name']), -3310 * 1 + -5941 * 1 + 9252);
                            }
                            ;
                            _0x3a430b['save']();
                        };
                    }
                    ;
                });
                if (_0xd80972['length'])
                    _0xd80972['pop']();
                _0xd80972['forEach'](_0x59e5fd => _0x4bad01['tabs']['plugins']['appendChild'](_0x59e5fd)), _0x8bf6b2(_0x46a6cc['plugins'], _0x47d43b => {
                    console['log']('Load plugin\nname: ' + _0x47d43b['name'] + '\nsrc: ' + _0x47d43b['src']), _0x47d43b['load']();
                });
            })['catch'](console['error']), _0x4bad01['changeLanguage'](_0x4c2dc1['getLanguage']()), _0x4bad01['activateTab']('settings'), _0x4bad01['setTheme'](_0x40eb39['theme']), window['addEventListener']('resize', _0x5d9f07);
            if (!_0x54cc3c && !_0x3a3064)
                window['addEventListener']('keydown', ({keyCode: _0x23e9fa}) => {
                    switch (_0x23e9fa) {
                    case -5922 + 1 * 1623 + -309 * -14:
                        _0x4bad01['window']['style']['display'] = 'none';
                        break;
                    case -4722 + -2689 * -3 + -3297:
                        if (_0x452ec7)
                            return;
                        _0x3a430b['set']('debug', _0x469fda = !_0x469fda) ? console['log']('Debug is enabled') : console['log']('Debug is off');
                        break;
                    case -8137 + -2 * -3659 + -868 * -1:
                        if (_0x452ec7)
                            return;
                        if (_0x4bad01['window']['style']['display'] === 'none')
                            _0x4bad01['window']['style']['display'] = 'block', _0x4bad01['activateTab']('factions');
                        else {
                            if (_0x4bad01['activeTab'] === 'factions')
                                _0x4bad01['window']['style']['display'] = 'none';
                            else
                                _0x4bad01['activateTab']('factions');
                        }
                        ;
                        break;
                    case 1385 + 389 * 13 + -3196 * 2:
                        if (_0x452ec7)
                            return;
                        if (_0x4bad01['window']['style']['display'] === 'none')
                            _0x4bad01['window']['style']['display'] = 'block', _0x4bad01['activateTab']('settings');
                        else {
                            if (_0x4bad01['activeTab'] === 'settings')
                                _0x4bad01['window']['style']['display'] = 'none';
                            else
                                _0x4bad01['activateTab']('settings');
                        }
                        ;
                        break;
                    case -6233 + 9388 + -2 * 1552:
                        if (_0x452ec7)
                            return;
                        if (_0x4bad01['window']['style']['display'] === 'none')
                            _0x4bad01['window']['style']['display'] = 'block', _0x4bad01['activateTab']('display');
                        else {
                            _0x4bad01['activeTab'] === 'display' ? _0x4bad01['window']['style']['display'] = 'none' : _0x4bad01['activateTab']('display');
                            ;
                        }
                        ;
                        break;
                    case -8257 + 2 * 4429 + -549:
                        if (_0x452ec7)
                            return;
                        _0x4bad01['options']['detector']['desc']['click']();
                        break;
                    }
                    ;
                });
            _0x2154c9['interfaces']['sectors']['setOpacity'](_0x5402c9), _0x2154c9['setOpacity'](_0x1b78a7), _0x3a430b['get']('mapClosed') ? _0x2154c9['close']() : _0x2154c9['open']();
            if (window['mapModules'] && window['mapModules']['length']) {
                for (let _0x412166 = 9724 + 536 + -10260; _0x412166 !== window['mapModules']['length']; _0x412166++) {
                    _0x4e78b7(window['mapModules'][_0x412166]), window['mapModules']['splice'](_0x412166, -3420 + 8659 + -291 * 18), _0x412166--;
                }
                ;
            }
            ;
            window['initModule'] = _0x4e78b7;
            function _0x176c98() {
                return new Promise((_0x14134d, _0x3c298e) => {
                    let _0x36188b = encodeURI(_0x1a1f77[_0x2f56f2]['data']);
                    console['log']('Updating Template List\nFaction : ' + _0x2f56f2 + '\nURL : ' + _0x36188b), _0x525fe6['clear'](), _0x3c78a7['clear'](), fetch(_0x36188b)['then'](_0x48980a => _0x48980a['json']())['then'](_0x1542b0 => {
                        _0x41d9b3(_0x1542b0), console['log']('Update completed', _0x525fe6, _0x3c78a7);
                    })['catch'](console['error']);
                });
            }
            ;
            function _0x41d9b3(_0x7dca7a) {
                _0x8bf6b2(_0x7dca7a, (_0x4e0909, _0x466939) => {
                    _0x4e0909 = Object['assign'](_0x4e0909, {
                        'name': _0x466939,
                        'src': encodeURI(_0x1a1f77[_0x2f56f2]['images'] + _0x466939 + '.png')
                    }), (_0x4e0909['type'] === 'sector' ? _0x3c78a7 : _0x525fe6)['add'](new _0x36c151(_0x4e0909));
                });
            }
            ;
            function _0x1d4ce1() {
                if (!_0xd6b06f)
                    return;
                _0x597ad9 && (_0x3a430b['set']('sync', _0x597ad9 = ![]), _0x21f280 = _0xfb04f2, _0x4bad01['options']['sync']['button']['innerText'] = _0x268b42(_0x597ad9));
                ;
                _0x21f280 *= 82 * 97 + -8760 + 807 + 0.10000000000000009;
                if (_0x21f280 > 2425 + -916 * 3 + 5 * 71)
                    return _0x21f280 = -5936 + -4 * -1601 + -436 * 1;
                _0x2154c9['interfaces']['cover']['draw'](), _0x2f6f20(), setTimeout(_0x1d4ce1, _0x305aaf);
            }
            ;
            function _0xf1bf98() {
                if (!_0x408ff3)
                    return;
                _0x597ad9 && (_0x3a430b['set']('sync', _0x597ad9 = ![]), _0x21f280 = _0xfb04f2, _0x4bad01['options']['sync']['button']['innerText'] = _0x268b42(_0x597ad9));
                ;
                _0x21f280 /= -2233 + 1 * 363 + -1871 * -1 + 0.10000000000000009;
                if (_0x21f280 < -1 * -6063 + 555 * -1 + -5507)
                    return _0x21f280 = -8458 * -1 + 16 * -233 + 4729 * -1;
                _0x2154c9['interfaces']['cover']['draw'](), _0x2f6f20(), setTimeout(_0xf1bf98, _0x305aaf);
            }
            ;
            function _0x362b62(_0x569ab5) {
                let _0xf09ea6 = _0x569ab5['getTemplatesAtZone'](_0x37866d['worldX'] - _0x5999da, _0x37866d['worldY'] - _0x5d41ee, _0x37866d['worldX'] + _0x5999da, _0x37866d['worldY'] + _0x5d41ee);
                return _0xf09ea6['forEach'](_0x25930f => {
                    _0x25930f['status'] === _0x36c151['UNLOADED'] && _0x25930f['load']()['then'](() => {
                        console['log']('Template ' + _0x25930f['name'] + ' loaded'), console['dir'](_0x25930f);
                    })['catch'](_0x4a04d6 => {
                        console['error']('Can\'t load template'), console['error'](_0x4a04d6);
                    });
                }), _0xf09ea6['filter'](_0x5111d5 => _0x5111d5['status'] === _0x36c151['LOADED']);
            }
            ;
            function _0x2f6f20() {
                if (_0x3a430b['get']('mapClosed'))
                    return;
                _0x66cb28 = _0x362b62(_0x525fe6);
                if (_0x4eaeb3)
                    _0x113508 = _0x362b62(_0x3c78a7);
                else
                    _0x113508 = [];
                if (_0x66cb28['length'] || _0x113508['length']) {
                    !_0x538246 && _0x2154c9['onTmpsExist']();
                    ;
                    _0x1c8c7c && (_0x1c8c7c = ![], window['requestAnimationFrame'](() => {
                        _0x5bbb7b(), _0x1c8c7c = !![];
                    }));
                    ;
                } else {
                    _0x538246 && _0x2154c9['onNoTmps']();
                    ;
                }
                ;
            }
            ;
            function _0x5bbb7b() {
                _0x4bda62['updateSizes']();
                _0xc29b2f ? _0x2154c9['interfaces']['tmps']['drawErrors']() : _0x2154c9['interfaces']['tmps']['draw'](_0x66cb28);
                ;
                _0x4eaeb3 && _0x2154c9['interfaces']['sectors']['draw'](_0x113508);
                ;
            }
            ;
            function _0x421b8a(_0x13a52d, _0x1b3af8) {
                _0x538246 && (_0x2154c9['setWidth'](_0x4625e8 + '%'), _0x2154c9['setHeight'](_0x41bf49 + '%'));
                ;
            }
            ;
            function _0x1ebddc() {
                _0xfb04f2 = _0x5f498d(), _0x2154c9['interfaces']['cover']['draw'](), _0x2f6f20();
            }
            ;
            function _0x5d9f07() {
                Array['from'](_0x2154c9['box']['childNodes'])['forEach'](_0x5cee68 => {
                    _0x5cee68['width'] = _0x5cee68['offsetWidth'], _0x5cee68['height'] = _0x5cee68['offsetHeight'];
                }), _0xc1bb73(_0x2154c9['interfaces']['tmps']['ctx'], ![]), _0xc1bb73(_0x2154c9['interfaces']['sectors']['ctx'], ![]), _0x2154c9['interfaces']['cover']['draw'](), _0x2f6f20();
            }
            ;
            function _0x5f498d() {
                if (_0x3a3064)
                    return -6862 + 6203 * -1 + 13070;
                let _0xcb7bc0 = +window['location']['hash']['match'](_0x4b1364)[-9974 + -2483 * 1 + -12459 * -1];
                return _0xcb7bc0 > 3675 + -79 * -51 + -1 * 7694 ? _0xcb7bc0 / (7063 + -6727 + -326) ** 9773 + -4071 + -5700 : _0xcb7bc0 ** 49 * 191 + 1 * -7991 + -1368 + 0.1 || 4264 + -1 * 2752 + -1511;
            }
            ;
            function _0x330146() {
                return _0x60fd6a['innerText']['match'](_0x4b1364)['map'](_0x5dc0c5 => +_0x5dc0c5);
            }
            ;
            function _0x4e78b7(_0x54b466) {
                _0x54b466['call'](window, {
                    'minimap': _0x2154c9,
                    'settings': _0x4bad01,
                    'mouse': _0x37866d,
                    'palette': _0x48dc21,
                    'chunkInterface': _0x19d66a,
                    'templates': _0x525fe6,
                    'sectors': _0x3c78a7,
                    'ws': _0x550192,
                    'uo': _0x3a430b,
                    'BigMessage': _0x32b214,
                    'functions': _0x2bd52f('./utils/functions')
                });
            }
            ;
        },
        {
            './mapConfig.json': 2,
            './resources/canvas.json': 3,
            './resources/constants.json': 4,
            './resources/i18n': 5,
            './resources/links.json': 6,
            './resources/selectors.json': 7,
            './resources/style': 8,
            './utils/BigMessage': 9,
            './utils/Chunk': 10,
            './utils/Palette': 11,
            './utils/Plugins': 12,
            './utils/Template': 13,
            './utils/TemplatesInterface': 14,
            './utils/UserOptions': 15,
            './utils/WSTemplate': 17,
            './utils/functions': 18
        }
    ],
    2: [
        function (_0x2ae660, _0x313975, _0x2c54c2) {
            _0x313975['exports'] = {
                'VERSION': '2.7.2.4',
                'CURSOR_COLORS': [
                    'Black',
                    'Gray',
                    'White',
                    'Fuchsia',
                    'Red',
                    'Yellow',
                    'Lime',
                    'SpringGreen',
                    'Aqua',
                    'Blue'
                ],
                'DEFAULT_PLUGINS': ['Buff Notifications'],
                'debug': !![],
                'BASIC_MODE': ![]
            };
        },
        {}
    ],
    3: [
        function (_0x2d9369, _0xdae7e2, _0x2a09f5) {
            _0xdae7e2['exports'] = {
                'CHUNK_SIZE': 256,
                'COLORS': [
                    [
                        -1271 * 7 + 39 * -88 + 3 * 4177,
                        -384 * 24 + -7830 + 17273,
                        4272 + 1411 + -236 * 23
                    ],
                    [
                        -5187 + -1992 + -3717 * -2,
                        1801 + 2879 * -1 + 1333,
                        -1 * 8623 + 7932 + -1 * -946
                    ],
                    [
                        9923 + 1003 * 4 + -13680,
                        7 * 1046 + 1734 * -3 + -1865,
                        1978 + 86 * 42 + -97 * 55
                    ],
                    [
                        8486 + 2 * 3278 + -14814,
                        -6362 + -3 * 289 + -7457 * -1,
                        -534 + 97 * -37 + 4351
                    ],
                    [
                        -4 * -2081 + 8063 * -1 + -65,
                        419 * -3 + -9175 + 10628,
                        -9980 + 200 * -2 + -2 * -5288
                    ],
                    [
                        5721 + 5581 * 1 + 3722 * -3,
                        6459 * -1 + 7 * -56 + 137 * 51,
                        -13 * -481 + 9619 + -15736
                    ],
                    [
                        -5296 + 29 * -109 + 1707 * 5,
                        4367 + -1 * 1063 + -3226 * 1,
                        -2602 + -8003 * -1 + 5323 * -1
                    ],
                    [
                        2 * 687 + 5980 + -1 * 7354,
                        -4156 * -2 + -1 * -2089 + -10401 * 1,
                        3 * -459 + -1639 * 4 + 7933
                    ],
                    [
                        -1649 + 9026 + 7 * -1019,
                        8591 + 484 * -14 + -818 * 2,
                        -663 + -1 * 1983 + 2820
                    ],
                    [
                        4829 + 3187 * 1 + -7761,
                        970 + -2568 + 1765,
                        -17 * -94 + 3918 + -5307
                    ],
                    [
                        -1686 * 3 + 367 * -11 + 9350,
                        169 * -46 + 8514 + -656,
                        434 * -1 + 98 * -99 + -6 * -1719
                    ],
                    [
                        -1 * -6673 + 7840 + -14258,
                        -9839 + -283 * 11 + 13053,
                        4365 + 1244 + -162 * 34
                    ],
                    [
                        -3257 + -9384 + -330 * -39,
                        1138 * 5 + -5908 + -218 * -1,
                        -9957 + -3 * 2798 + 18351
                    ],
                    [
                        293 * 21 + -2 * 994 + -4011,
                        242 + 4344 + 2 * -2293,
                        -2371 + -1019 + -6 * -565
                    ],
                    [
                        -1 * 2059 + -5 * 1999 + 12308,
                        -1 * -8276 + 2689 * 2 + -13490,
                        -1 * -2004 + -1 * -1457 + 3365 * -1
                    ],
                    [
                        -3459 + 351 + -3337 * -1,
                        -3120 + -938 + 4207,
                        -2631 + -1008 + 3639
                    ],
                    [
                        454 + 1537 * 1 + -1831 * 1,
                        21 * 15 + 1238 * -7 + -3 * -2819,
                        -2161 + -8997 + 11224 * 1
                    ],
                    [
                        -9157 + -1284 + -1 * -10537,
                        -1187 * -1 + -668 * -8 + -6467,
                        1 * -7573 + -149 * 43 + -14020 * -1
                    ],
                    [
                        -7292 + -25 * -271 + 762,
                        -5714 + 5888 * -1 + 5 * 2365,
                        7827 + 9091 + 2 * -8371
                    ],
                    [
                        -1229 + -7371 + -1771 * -5,
                        -9930 + 1 * 219 + 9959,
                        163 * 59 + 93 * -58 + -4086
                    ],
                    [
                        6379 + 1 * -5927 + -223,
                        905 + -1575 + 887,
                        -9143 * 1 + 1 * -8356 + 17499
                    ],
                    [
                        -1489 + -9769 + -5703 * -2,
                        -7924 + 1213 * 7 + -343,
                        7900 + -2081 * -4 + -16156
                    ],
                    [
                        -8216 + -8223 + -41 * -401,
                        -6759 + -5649 + -2 * -6299,
                        8643 + -66 * 86 + -1483 * 2
                    ],
                    [
                        6067 + 1 * -6107 + 144,
                        3614 + 9421 + -12904,
                        3980 * -1 + -1693 + 5729
                    ],
                    [
                        -1 * 8361 + 5992 + -103 * -23,
                        -7020 + -2077 * -4 + -1187,
                        14 * -24 + -7349 * -1 + -6994
                    ],
                    [
                        -1607 + 6261 * -1 + 4035 * 2,
                        1284 + -1 * -7670 + -8727,
                        1049 * -1 + -7230 + 251 * 34
                    ],
                    [
                        5822 + -2144 * 4 + 2754,
                        1 * 6167 + -583 + -597 * 9,
                        8499 * -1 + -1 * -2887 + 5833
                    ],
                    [
                        -197 * 17 + 4180 + -831,
                        1 * 3918 + -3615 + -172,
                        1208 + -5930 + 4921
                    ],
                    [
                        1483 * 4 + 5323 + -11255,
                        1 * -881 + 1 * -4339 + 2 * 2610,
                        31 * 308 + 3 * 1469 + 1 * -13721
                    ],
                    [
                        8362 + -5039 + -1649 * 2,
                        1 * -58 + 9 * 16 + -61,
                        -5761 + 1629 * 1 + 1 * 4247
                    ],
                    [
                        -28 * -122 + 293 * 29 + -11706,
                        -9069 + -28 * -89 + 2229 * 3,
                        -5 * -141 + 69 * 83 + -33 * 188
                    ],
                    [
                        -1 * 3491 + 8009 + 4 * -1097,
                        6587 * -1 + -3 * -1463 + -314 * -7,
                        7712 * 1 + 2144 + -9728
                    ]
                ]
            };
        },
        {}
    ],
    4: [
        function (_0x99501c, _0x362ec6, _0x33ee1d) {
            _0x362ec6['exports'] = {
                'MAP_MIN_WIDTH': 25,
                'MAP_MAX_WIDTH': 50,
                'MAP_MIN_HEIGHT': 33,
                'MAP_MAX_HEIGHT': 50
            };
        },
        {}
    ],
    5: [
        function (_0xf0270e, _0x4d92d5, _0x32a240) {
            const {VERSION: _0x51bf43} = _0xf0270e('../mapConfig.json');
            _0x4d92d5['exports'] = {
                'ru': {
                    'title': 'MLP : Pixel миникарта',
                    'options': {
                        'cursorColor': 'Цвет курсора: ',
                        'grid': 'Сетка: ',
                        'theme': 'Тема: ',
                        'detector': 'Детектор ошибок: ',
                        'autoSelect': 'Автовыбор цвета: ',
                        'phantomPxls': 'Фантомные пиксели: ',
                        'buffNote': 'Оповещения при бафе: ',
                        'language': 'Язык: ',
                        'sync': 'Синхронизация зума: ',
                        'sectors': 'Сектора: '
                    },
                    'display': {
                        'width': 'Ширина: ',
                        'height': 'Высота: ',
                        'sectorsOpacity': 'Видимость секторов: ',
                        'backgroundOpacity': 'Видимость фона: '
                    },
                    'optionsTitles': {
                        'cursorColor': 'Изменяет цвет выделения центрального пикселя в карте',
                        'grid': 'Включает/отключает отображение сетки между пикселями при сильном увеличении миникарты',
                        'theme': '(не работает)',
                        'detector': 'Переключает режим работы миникарты на отображение ошибок',
                        'autoSelect': 'Включает/отключает автоматический выбор цвета при установке пикселей, в соответствии с шаблоном в миникарте',
                        'phantomPxls': 'Пиксели будут ставиться только для пользователя',
                        'buffNote': 'Пользователь будет оповещаться при бафе на уменьшенный кулдаун',
                        'language': 'Change the language of the minimap',
                        'sync': 'Зум миникарты меняется вместе с зумом игры',
                        'sectors': 'Включает/отключает отображение секторов, выставленных для некоторых шаблонов'
                    },
                    'notifications': { 'eventWin': 'Кулдаун уменьшен вдвое' },
                    'footer': 'Создано учеными <a style = "color:aqua;" href="https://vk.com/endlessnight24">NLR</a> для <a style="color:#1992E3;" href="https://vk.com/mlp_pixel">MLPP</a> | V. ' + _0x51bf43
                },
                'en': {
                    'title': 'MLP : Pixel minimap',
                    'options': {
                        'cursorColor': 'Cursor color: ',
                        'grid': 'Grid: ',
                        'theme': 'Theme: ',
                        'detector': 'Error detector: ',
                        'autoSelect': 'Auto color selection: ',
                        'phantomPxls': 'Phantom pixels: ',
                        'buffNote': 'Buff notifications: ',
                        'language': 'Language: ',
                        'sync': 'Zoom sync: ',
                        'sectors': 'Sectors: '
                    },
                    'display': {
                        'width': 'Width: ',
                        'height': 'Height: ',
                        'sectorsOpacity': 'Sectors opacity: ',
                        'backgroundOpacity': 'Background opacity: '
                    },
                    'optionsTitles': {
                        'cursorColor': 'Изменяет цвет выделения центрального пикселя в карте',
                        'grid': 'Включает/отключает отображение сетки между пикселями при сильном увеличении миникарты',
                        'theme': '(не работает)',
                        'detector': 'Переключает режим работы миникарты на отображение ошибок',
                        'autoSelect': 'Включает/отключает автоматический выбор цвета при установке пикселей, в соответствии с шаблоном в миникарте',
                        'phantomPxls': 'Пиксели будут ставиться только для пользователя',
                        'buffNote': 'Пользователь будет оповещаться при бафе на уменьшенный кулдаун',
                        'language': 'Change the language of the minimap',
                        'sync': 'Зум миникарты меняется вместе с зумом игры',
                        'sectors': 'Включает/отключает отображение секторов, выставленных для некоторых шаблонов'
                    },
                    'notifications': { 'eventWin': 'Cooldown reduced by half' },
                    'footer': 'Created by <a style = "color:aqua;" href="https://vk.com/endlessnight24">NLR</a> scientists for <a style="color:#1992E3;" href="https://vk.com/mlp_pixel">MLPP</a> | V. ' + _0x51bf43
                },
                'tr': {
                    'title': 'MLP : Pixel mini Haritas?',
                    'options': {
                        'cursorColor': 'Imlec rengi: ',
                        'grid': 'Izgara: ',
                        'theme': 'Tema: ',
                        'detector': 'Hata dedektoru: ',
                        'autoSelect': 'Otomatik renk secme: ',
                        'phantomPxls': 'Phantom pixels: ',
                        'buffNote': 'Buff notifications: ',
                        'language': 'Dil: ',
                        'sync': 'Zoom sync: ',
                        'sectors': 'Sectors: '
                    },
                    'display': {
                        'width': 'Width: ',
                        'height': 'Height: ',
                        'sectorsOpacity': 'Sectors opacity: ',
                        'backgroundOpacity': 'Background opacity: '
                    },
                    'optionsTitles': {
                        'cursorColor': 'Изменяет цвет выделения центрального пикселя в карте',
                        'grid': 'Включает/отключает отображение сетки между пикселями при сильном увеличении миникарты',
                        'theme': '(не работает)',
                        'detector': 'Переключает режим работы миникарты на отображение ошибок',
                        'autoSelect': 'Включает/отключает автоматический выбор цвета при установке пикселей, в соответствии с шаблоном в миникарте',
                        'phantomPxls': 'Пиксели будут ставиться только для пользователя',
                        'buffNote': 'Пользователь будет оповещаться при бафе на уменьшенный кулдаун',
                        'language': 'Change the language of the minimap',
                        'sync': 'Зум миникарты меняется вместе с зумом игры',
                        'sectors': 'Включает/отключает отображение секторов, выставленных для некоторых шаблонов'
                    },
                    'notifications': { 'eventWin': 'Cooldown reduced by half' },
                    'footer': 'Arkadaslar icin <a style = "color:aqua;" href="https://vk.com/endlessnight24">NLR</a> Bilim Adamlar? taraf?ndan olusturuldu | V. ' + _0x51bf43
                }
            };
        },
        { '../mapConfig.json': 2 }
    ],
    6: [
        function (_0x4de0f6, _0x12c0ed, _0xead74b) {
            _0x12c0ed['exports'] = {
                'FACTIONS_SRC': 'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/MLPP/PixelPlanet/factions.json',
                'PLUGINS_SRC': 'https://raw.githubusercontent.com/EndlessNightNLR/minimap-plugins/master/data.json',
                'CODE_INJECTION_SRC': 'https://endlessnightnlr.github.io/test.js',
                'GEAR_ICON_SRC': 'https://endlessnightnlr.github.io/MLPP/gear.png'
            };
        },
        {}
    ],
    7: [
        function (_0x215a72, _0x31bf5a, _0x36cbfa) {
            _0x31bf5a['exports'] = {
                'selectedColor': '.selected',
                'coords': '.coorbox',
                'palettebox': '#palettebox',
                'gameCanvas': '.viewport'
            };
        },
        {}
    ],
    8: [
        function (_0x3958f8, _0x19ea84, _0xedfa8f) {
            _0x19ea84['exports'] = '\n    .text-button{\n        cursor:pointer;\n    }\n    .minimap{\n        font-weight:bold;\n        line-height:22px;\n    }\n    .NLRGeneral{\n        font-family:arial;\n        line-height:normal;\n    }\n    .NLRGeneral input{\n        border-color: rgb(50,50,50);\n        background-color: rgba(0,0,0,0);\n        color: white;\n        width: 30px;\n    }\n    .minimap-display{\n        position:absolute;\n        top :0;\n        left:0;\n        width :100%;\n        height:100%;\n    }\n    .settings-option{\n        cursor:pointer;\n        padding-left: 5px;\n    }\n    .settings-option:hover{\n        background: linear-gradient(to right, rgba(0,240,240,0.75) 25%, rgba(0,0,0,0) 100%);\n        padding-left:10px;\n    }\n    .sub-settings{\n        width:100%;\n        height:100%;\n        display:inline-block;\n    }\n    .NLRGeneral td{\n        line-height:16px;\n        padding: 2px;\n        border:0px red solid;\n    }\n    .NLRGeneral table{\n        line-height:16px;\n        margin-left:5px;\n        padding: 2px;\n    }\n    .NLRGeneral .plugin{\n        padding-left: 2.5%;\n    }\n    .center{\n        position:absolute;\n        top :50%;\n        left:50%;\n        transform:translate(-50%,-50%);\n    }\n    .minimap-panel-button{\n        width: 25px;\n        height: 25px;\n        padding: 10px;\n        background: rgba(0,0,0,0.9);\n        border:2px rgba(50,50,50,0.9) solid;\n        border-radius:15px;\n        -moz-border-radius:15px;\n        cursor: pointer;\n    }\n    .big-message{\n        z-index: 9999;\n        min-width: 45%;\n        max-width: 65%;\n        min-height: 50%;\n        max-height: 80%;\n        border: 2px solid rgba(50, 50, 50, 0.9);\n        background-color: rgba(0,0,0,0.9);\n    }\n    #box{\n        position:absolute;\n        width:100%;\n        height:100%;\n        background-color:rgba(0,0,0,0);\n        border-left: 1px rgba(50,50,50,0.9) solid;\n    }\n    #box canvas{\n        position:absolute;\n        width:100%;\n        height:100%;\n    }\n    #config{\n        margin:0;\n        padding: 2px;\n        position: absolute;\n        bottom: 0;\n        margin-bottom:1px;\n        transform: translate(0,100%);\n        width: 100%;\n        font-size: 15px;\n        background-color: rgba(0,0,0,0.9);\n        border: 1px rgba(50,50,50,0.9) solid;\n        border-right: none;\n    }\n    #text{\n        position:relative;\n        top:0;\n        right:0;\n        width:auto;\n        padding:5px;\n        text-align:center;\n        background-color:rgba(0,0,0,0.9);\n        border-left:1px rgba(50,50,50,0.9) solid;\n        border-bottom:1px rgba(50,50,50,0.9) solid;\n    }\n    #settings-button{\n        cursor:pointer;\n    }\n    #sub-map-panel{\n        position:absolute;\n        top:0;\n        left:0;\n        transform: translate(-100%);\n        margin-top:5px;\n        margin-left:-5px;\n    }\n';
        },
        {}
    ],
    9: [
        function (_0x533446, _0x143f79, _0x1cf809) {
            const {factory: _0x23ecfe} = _0x533446('./functions');
            _0x143f79['exports'] = class {
                constructor() {
                    this['body'] = _0x23ecfe({
                        'type': 'div',
                        'class': 'NLRGeneral center big-message',
                        'style': '\n\t\t\t\tdisplay: none;\n\t            color:rgb(250,250,250);\n\t            background-color: rgba(0,0,0,0.9);\n\t            border-radius:1px;\n\t\t\t'
                    }, [
                        _0x23ecfe({
                            'type': 'div',
                            'style': 'border-bottom: 1px rgba(50,50,50,0.9) solid; line-height:32px; padding: 5px;',
                            'html': '\n\t\t\t\t\t<svg class="text-button" style="position:fixed; right:0px; margin:9px;" height="16" width="16" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5">\n\t                    <path d="M 1 1 L 15 15 M 15 1 L 1 15" fill="transparent" stroke="white"></path>\n\t                </svg>\n                '
                        }, [document['createTextNode']('Message')]),
                        this['container'] = _0x23ecfe({
                            'type': 'div',
                            'style': '\n\t\t\t\t    white-space: pre-wrap;\n\t\t\t\t    word-wrap: break-word;\n\t\t\t\t\tpadding: 5px;\n\t\t\t\t\toverflow-y: scroll;\n\t\t\t\t\tline-height: 16px;\n\t\t\t\t\tuser-select: text;\n\t\t\t\t'
                        })
                    ]), document['body']['appendChild'](this['body']), this['body']['getElementsByTagName']('svg')[8 * 1238 + 2 * -4664 + -576]['onclick'] = () => this['hide'](), this['blocker'] = _0x23ecfe({
                        'type': 'div',
                        'class': 'NLRGeneral',
                        'style': '\n\t\t\t\tdisplay: none;\n\t\t\t\tz-index: 9998;\n\t\t        position: fixed;\n\t\t        background-color: rgba(0,0,0,0.9);\n\t\t        top: 0px;\n\t\t        left: 0px;\n\t\t        width: 100%;\n\t\t        height: 100%;\n\t\t\t',
                        'listeners': { 'onclick': () => this['hide']() }
                    }), document['body']['appendChild'](this['blocker']), this['showed'] = ![];
                }
                ['_updateContainerSize']() {
                    this['container']['style']['height'] = this['body']['clientHeight'] + 'px';
                }
                ['write'](_0x3e8712) {
                    this['container']['innerHTML'] = _0x3e8712, this['_updateContainerSize']();
                }
                ['show']() {
                    this['body']['style']['display'] = 'block', this['blocker']['style']['display'] = 'block', this['_updateContainerSize'](), this['showed'] = !![];
                }
                ['hide']() {
                    this['body']['style']['display'] = 'none', this['blocker']['style']['display'] = 'none', this['showed'] = ![];
                }
            };
        },
        { './functions': 18 }
    ],
    10: [
        function (_0x18394b, _0x109c09, _0x42affd) {
            const {CHUNK_SIZE: _0x2456b1} = _0x18394b('../resources/canvas.json');
            _0x109c09['exports'] = class {
                constructor(_0x5e94af, _0x155ea4, _0x4a7de4) {
                    this['x'] = _0x5e94af, this['y'] = _0x155ea4, this['data'] = _0x4a7de4, this['lastUsing'] = Date['now'](), this['_c'] = null;
                }
                ['get'](_0x2d8245, _0x228629) {
                    return this['_c'] = _0x2d8245 + _0x228629 * _0x2456b1 << 1312 + -879 * -4 + 4826 * -1, [
                        this['data'][this['_c']],
                        this['data'][this['_c'] + (1291 * 7 + 2137 * -2 + -4762 * 1)],
                        this['data'][this['_c'] + (-2 * -4427 + -5426 + -2 * 1713)]
                    ];
                }
                ['set'](_0x5285e6, _0x203fff, _0x210f99) {
                    return this['_c'] = _0x5285e6 + _0x203fff * _0x2456b1 << -9937 + -9868 * 1 + 19807, [this['data'][this['_c']], this['data'][this['_c'] + (1 * 9043 + -133 * 15 + 3 * -2349)], this['data'][this['_c'] + (95 * -82 + 1 * -4848 + -4 * -3160)]] = [..._0x210f99];
                }
            };
        },
        { '../resources/canvas.json': 3 }
    ],
    11: [
        function (_0x17a783, _0x5359c5, _0x47713e) {
            const {abs: _0x2d1b7a} = _0x17a783('./functions');
            _0x5359c5['exports'] = class {
                constructor() {
                    this['elems'] = null, this['colors'] = null;
                }
                ['setColors'](_0x506dfb) {
                    this['colors'] = _0x506dfb['map'](_0x8ae138 => [..._0x8ae138]);
                }
                ['same'](_0xb9ee3d, _0x20bc33, _0x414ad2 = 936 + 224 * -41 + 1 * 8263) {
                    return _0x2d1b7a(_0xb9ee3d[18 * -478 + 2 * -2351 + -2 * -6653] - _0x20bc33[1 * -9224 + -6399 + 15623]) < _0x414ad2 && _0x2d1b7a(_0xb9ee3d[5022 + 461 * -7 + -1794] - _0x20bc33[-6349 + 37 * -141 + 11567]) < _0x414ad2 && _0x2d1b7a(_0xb9ee3d[-1754 + 1988 + 58 * -4] - _0x20bc33[-292 * -20 + 9861 * -1 + 27 * 149]) < _0x414ad2;
                }
                ['has'](_0x549b55) {
                    return this['RGBToId'](_0x549b55) !== null;
                }
                ['convert'](_0x26ecf8) {
                    let _0x14ac3a, _0x7de66a = Infinity, _0x47564f, _0x29c1e0;
                    for (let _0x2a74ed = -8715 + 2 * 2797 + 3123; _0x2a74ed !== this['colors']['length']; _0x2a74ed++) {
                        _0x29c1e0 = this['colors'][_0x2a74ed];
                        if (this['same'](_0x29c1e0, _0x26ecf8))
                            return _0x29c1e0;
                        ;
                        _0x47564f = _0x2d1b7a(_0x29c1e0[91 * 34 + 1 * -9775 + 6681] - _0x26ecf8[2 * -820 + 1403 * -1 + 3043]) + _0x2d1b7a(_0x29c1e0[1033 * 1 + -1 * -1786 + 1 * -2818] - _0x26ecf8[3478 + 7424 + -10901]) + _0x2d1b7a(_0x29c1e0[6707 + 7388 + -14093] - _0x26ecf8[-37 * 36 + -9769 + 11103 * 1]);
                        _0x47564f < _0x7de66a && (_0x7de66a = _0x47564f, _0x14ac3a = _0x2a74ed);
                        ;
                    }
                    ;
                    return [...this['colors'][_0x14ac3a]];
                }
                ['IdToRGB'](_0x550069) {
                    return this['colors'][_0x550069];
                }
                ['RGBToId'](_0xcb484f) {
                    for (let _0x1e83b6 = this['colors']['length'] - (3855 + 8973 + 101 * -127); _0x1e83b6 !== -(5021 + -35 * 73 + -17 * 145); _0x1e83b6--)
                        if (this['same'](this['colors'][_0x1e83b6], _0xcb484f))
                            return _0x1e83b6;
                    return null;
                }
                ['select'](_0x521c7a) {
                    this['elems'][typeof _0x521c7a === 'object' ? this['RGBToId'](_0x521c7a) : _0x521c7a]['click']();
                }
                ['onColorSelect']() {
                }
                ['bindColorsWithElements'](_0x2f3cbd) {
                    _0x2f3cbd = Array['from'](_0x2f3cbd), this['elems'] = {}, this['colors']['forEach']((_0x154398, _0x5ed6c6) => {
                        let _0x5e83e0 = _0x2f3cbd['find'](_0x1fceda => this['same'](_0x154398, _0x1fceda['style']['backgroundColor']['match'](/-?\d+/g)['map'](_0x3f862d => +_0x3f862d)));
                        if (_0x5e83e0 === void (-126 * 48 + -1777 * 1 + -7825 * -1))
                            return console['error']('Can\'t find element for color [' + _0x154398 + ']');
                        this['elems'][_0x5ed6c6] = _0x5e83e0, this['elems'][_0x5ed6c6]['addEventListener']('click', () => this['onColorSelect']({
                            'id': _0x5ed6c6,
                            'rgb': _0x154398
                        }));
                    });
                }
            };
        },
        { './functions': 18 }
    ],
    12: [
        function (_0x4e4888, _0x228e70, _0x4208b8) {
            const {
                objForEach: _0x25ab15,
                factory: _0x17d54b
            } = _0x4e4888('./functions');
            class _0x57fee6 {
                constructor({
                    name: _0x25643a,
                    desc: _0x1f7d37,
                    src: _0x3a8856
                }) {
                    this['name'] = _0x25643a, this['desc'] = _0x1f7d37, this['src'] = _0x3a8856, this['loadingStarted'] = ![];
                }
                ['load']() {
                    this['loadingStarted'] = !![], fetch(this['src'])['then'](_0x57240d => {
                        if (!_0x57240d['ok'])
                            return console['warn']('Module error: response isn\'t ok\nmodule name: ' + this['name'] + '\nsrc: ' + this['src']);
                        return _0x57240d['text']();
                    })['then'](_0x1f8872 => {
                        document['body']['appendChild'](_0x17d54b({
                            'type': 'script',
                            'html': _0x1f8872
                        }));
                    })['catch'](console['error']);
                }
            }
            ;
            _0x228e70['exports'] = class {
                constructor() {
                    this['plugins'] = null;
                }
                ['get'](_0x775efc) {
                    return this['plugins'][_0x775efc];
                }
                ['loadData'](_0x5ad48c) {
                    return new Promise((_0x151adc, _0x508df2) => {
                        fetch(_0x5ad48c)['then'](_0x256a03 => _0x256a03['json']())['then'](_0x404bc9 => {
                            this['plugins'] = {}, _0x25ab15(_0x404bc9, (_0x2f4614, _0x107f35) => this['plugins'][_0x107f35] = new _0x57fee6(Object['assign'](_0x2f4614, { 'name': _0x107f35 }))), _0x151adc();
                        })['catch'](_0x508df2);
                    });
                }
            };
        },
        { './functions': 18 }
    ],
    13: [
        function (_0x5bb07a, _0x20e740, _0x3a57d4) {
            const {loadImage: _0x1d7a34} = _0x5bb07a('./functions');
            class _0x111ee6 {
                constructor({
                    x: _0x4ef0d5,
                    y: _0x58acb2,
                    width: _0x3a0877,
                    height: _0x4e0f33,
                    name: _0x342e92,
                    src: _0x22a8eb
                }) {
                    this['x1'] = _0x4ef0d5, this['y1'] = _0x58acb2, this['width'] = _0x3a0877, this['height'] = _0x4e0f33, this['overrideEnds'](), this['name'] = _0x342e92, this['src'] = _0x22a8eb, this['status'] = _0x111ee6['UNLOADED'], this['img'] = null, this['canvas'] = null;
                }
                ['intersects'](_0x38c87f, _0x1b3744, _0x1808bf, _0x4ba91a) {
                    return this['x1'] < _0x1808bf && this['x2'] > _0x38c87f && this['y1'] < _0x4ba91a && this['y2'] > _0x1b3744;
                }
                ['overrideEnds']() {
                    this['x2'] = this['x1'] + this['width'], this['y2'] = this['y1'] + this['height'];
                }
                ['load']() {
                    return this['status'] = _0x111ee6['LOADING'], new Promise((_0x1acb92, _0xe38947) => {
                        if (this['src'] === null)
                            return console['error']('Template src isn\'t defined'), _0xe38947();
                        ;
                        _0x1d7a34(this['src'])['then'](_0x4babbe => {
                            this['img'] = _0x4babbe, this['canvas'] = document['createElement']('canvas'), this['width'] = this['canvas']['width'] = this['img']['width'], this['height'] = this['canvas']['height'] = this['img']['height'], this['overrideEnds'](), this['ctx'] = this['canvas']['getContext']('2d'), this['ctx']['drawImage'](this['img'], -9444 * 1 + -8532 + 17976, -470 + -1706 * 3 + -11 * -508), this['imageData'] = this['ctx']['getImageData'](8176 + -5137 + -3039 * 1, 2654 * 1 + 1455 + -4109, this['width'], this['height']), this['data'] = this['imageData']['data'], this['status'] = _0x111ee6['LOADED'], _0x1acb92(this);
                        })['catch'](_0x4f0872 => _0xe38947(_0x4f0872));
                    });
                }
            }
            ;
            _0x111ee6['UNLOADED'] = 3 * 3089 + -1 * 3437 + 1 * -5830, _0x111ee6['LOADING'] = -7321 * 1 + -9329 + 16651, _0x111ee6['LOADED'] = -7279 + -1125 * 3 + 10656, _0x20e740['exports'] = _0x111ee6;
        },
        { './functions': 18 }
    ],
    14: [
        function (_0x1221fd, _0x2a9239, _0x39b6c7) {
            const {
                    between: _0x4f22fc,
                    objForEach: _0x43308f
                } = _0x1221fd('./functions'), _0x499654 = _0x1221fd('./Template');
            let _0x55d4d0, _0x4e532a, _0x16867b, _0x28451c;
            _0x2a9239['exports'] = class {
                constructor() {
                    this['clear']();
                }
                ['clear']() {
                    this['list'] = {};
                }
                ['load'](_0x2917ac) {
                    return this['list'][_0x2917ac]['load']();
                }
                ['add'](_0x5c319f) {
                    return this['list'][_0x5c319f['name']] = _0x5c319f;
                }
                ['get'](_0x2ab6de) {
                    return _0x2ab6de in this['list'] ? this['list'][_0x2ab6de] : undefined;
                }
                ['getTemplatesAtZone'](_0x4dcc2e, _0x243a57, _0x5ce52b, _0x3ac776) {
                    let _0x122c65 = [];
                    return _0x43308f(this['list'], (_0x593abc, _0x4b4074) => {
                        if (_0x593abc['intersects'](_0x4dcc2e, _0x243a57, _0x5ce52b, _0x3ac776))
                            _0x122c65['push'](_0x593abc);
                    }), _0x122c65;
                }
                ['getPixelFromTemplates'](_0x1a6224, _0x1731cf) {
                    for (_0x28451c in this['list']) {
                        _0x55d4d0 = this['list'][_0x28451c];
                        if (_0x55d4d0['status'] !== _0x499654['LOADED'])
                            continue;
                        if (_0x4f22fc(_0x55d4d0['x1'], _0x1a6224, _0x55d4d0['x2']) && _0x4f22fc(_0x55d4d0['y1'], _0x1731cf, _0x55d4d0['y2'])) {
                            _0x4e532a = _0x55d4d0['data'], _0x16867b = _0x1a6224 - _0x55d4d0['x1'] + _0x55d4d0['width'] * (_0x1731cf - _0x55d4d0['y1']) << 8 * -1106 + 7615 + 1235 * 1;
                            if (_0x4e532a[_0x16867b + (-722 + -2143 + 2868)] === 2 * 3273 + 7552 + -14098 * 1)
                                continue;
                            return [
                                _0x4e532a[_0x16867b],
                                _0x4e532a[_0x16867b + (-1923 + -9983 + 1323 * 9)],
                                _0x4e532a[_0x16867b + (2153 + -116 + -407 * 5)],
                                _0x4e532a[_0x16867b + (5538 + -7971 + -116 * -21)]
                            ];
                        }
                        ;
                    }
                    ;
                    return null;
                }
            };
        },
        {
            './Template': 13,
            './functions': 18
        }
    ],
    15: [
        function (_0x25fdf3, _0x1a49be, _0x19b903) {
            _0x1a49be['exports'] = class {
                constructor({localStorageSave: _0x4b54fe}) {
                    this['saveInLS'] = _0x4b54fe || !![];
                }
                ['load']() {
                    this['saveInLS'] ? this['data'] = localStorage['minimap'] ? JSON['parse'](localStorage['minimap']) : {} : this['data'] = {};
                    ;
                }
                ['save']() {
                    if (!this['saveInLS'])
                        return;
                    localStorage['minimap'] = JSON['stringify'](this['data']);
                }
                ['get'](_0xe3ff18) {
                    return this['data'][_0xe3ff18];
                }
                ['set'](_0x490776, _0x54bdc9, _0x2b6b4f = !![]) {
                    this['data'][_0x490776] = _0x54bdc9;
                    if (_0x2b6b4f)
                        this['save']();
                    return _0x54bdc9;
                }
                ['getOrDefault'](_0x3e00bd, _0x226359) {
                    return this['get'](_0x3e00bd) === undefined ? _0x226359 : this['get'](_0x3e00bd);
                }
            };
        },
        {}
    ],
    16: [
        function (_0x251d0a, _0x2ba442, _0x11d503) {
            _0x2ba442['exports'] = class _0x4614a8 {
                constructor(_0x48dcb7 = null) {
                    const _0x196b87 = this;
                    this['target'] = _0x48dcb7, this['ws'] = null, this['middleSend'] = function () {
                        this['ws']['_send'](...arguments);
                    }, this['trapFunction'] = function () {
                        if (this['inited'])
                            return _0x196b87['middleSend']['apply'](this, arguments);
                        else {
                            (_0x196b87['target'] === null || this['url'] === _0x196b87['target']) && (console['log']('ws catched'), this['inited'] = !![], _0x196b87['ws'] = this, _0x196b87['originalOnMessage'] = this['onmessage'], this['onmessage'] = function () {
                                _0x196b87['originalOnMessage']['apply'](this, arguments);
                            }, _0x196b87['oncatch'](this));
                            ;
                            return this['_send']['apply'](this, arguments);
                        }
                        ;
                    }, WebSocket['prototype']['_send'] = WebSocket['prototype']['send'], WebSocket['prototype']['send'] = this['trapFunction'];
                }
                ['send'](_0x2d5122) {
                    if (this['ws'])
                        return this['ws']['_send'](_0x2d5122);
                    else
                        return console['warn']('[CATCHER] try send when not catched');
                }
                ['oncatch']() {
                }
            };
        },
        {}
    ],
    17: [
        function (_0x3f58b4, _0x81c4a8, _0x3c0c71) {
            const _0x18e661 = _0x3f58b4('events'), _0x9904e4 = _0x3f58b4('./WSCatcher');
            _0x81c4a8['exports'] = class {
                constructor(_0xce2f35) {
                    this['_url'] = _0xce2f35['url'] || null, this['_binaryType'] = _0xce2f35['binaryType'] || 'arraybuffer', this['_workAsCatcher'] = _0xce2f35['workAsCatcher'] || ![], this['_events'] = new _0x18e661(), this['_ws'] = null, this['_actions'] = {};
                }
                ['init']() {
                    const _0xa0d5cf = this;
                    if (this['_workAsCatcher'])
                        this['catcher'] = new _0x9904e4(), this['catcher']['oncatch'] = _0x575b4a => {
                            this['_ws'] = _0x575b4a, this['_ws']['onmessage'] = function () {
                                _0xa0d5cf['emit']('message', ...arguments), _0xa0d5cf['catcher']['originalOnMessage']['apply'](this, arguments);
                            }, this['emit']('open');
                        };
                    else {
                        if (this['_workAsCatcher'])
                            this['connect']();
                        setInterval(() => {
                            if (this['_ws']['disconnected'])
                                this['connect']();
                        }, -5563 + 583 * 10 + 4733);
                    }
                    ;
                }
                ['log'](_0xd11246) {
                    console['log']('[WS] ' + _0xd11246);
                }
                ['isConnected']() {
                    return this['_ws'] && (this['_ws']['readyState'] === WebSocket['OPEN'] || this['_ws']['readyState'] === WebSocket['CONNECTING']);
                }
                ['isDisconnected']() {
                    return !this['isConnected']();
                }
                ['connect']() {
                    this['_ws'] = new WebSocket(this['_url']), this['_ws']['binaryType'] = this['_binaryType'], this['bindBasicHandlers']();
                }
                ['send'](_0x2710ac) {
                    console['log'](_0x2710ac);
                    if (this['_workAsCatcher'])
                        this['_ws']['_send'](_0x2710ac);
                    else
                        this['_ws']['send'](_0x2710ac);
                }
                ['bindBasicHandlers']() {
                    this['_ws']['onopen'] = () => {
                        this['log']('open'), this['_events']['emit']('open');
                    }, this['_ws']['onmessage'] = _0x472e7f => this['_events']['emit']('message', _0x472e7f), this['_ws']['onclose'] = () => {
                        this['log']('closed'), this['_events']['emit']('close');
                    }, this['_ws']['onerror'] = _0x3db8bb => {
                        this['log']('closed'), this['_events']['emit']('close', _0x3db8bb);
                    };
                }
                ['createAction'](_0x2f6fca, _0x170df3) {
                    this['_actions'][_0x2f6fca] = _0x170df3;
                }
                ['action'](_0x3c845d, ..._0x167ea9) {
                    return this['_actions'][_0x3c845d]['apply'](this, _0x167ea9);
                }
                ['on'](_0x443481, _0x1a4336) {
                    this['_events']['on'](_0x443481, _0x1a4336['bind'](this));
                }
                ['emit'](_0xf4597d, ..._0x16669a) {
                    this['_events']['emit'](_0xf4597d, ..._0x16669a);
                }
            };
        },
        {
            './WSCatcher': 16,
            'events': 19
        }
    ],
    18: [
        function (_0x261520, _0x30d967, _0xd162ea) {
            function _0x4a5ca5(_0x198cf2, _0x545f8b, _0x4b32af) {
                return _0x545f8b > _0x198cf2 && _0x545f8b < _0x4b32af;
            }
            ;
            let {abs: _0x2bad58} = Math;
            function _0x52c911(_0x4f0ee5, _0x4d26c5) {
                _0x4f0ee5['mozImageSmoothingEnabled'] = _0x4f0ee5['webkitImageSmoothingEnabled'] = _0x4f0ee5['msImageSmoothingEnabled'] = _0x4f0ee5['imageSmoothingEnabled'] = _0x4d26c5;
            }
            ;
            function _0x43587a(_0xecacbd, _0x105452) {
                Object['keys'](_0xecacbd)['forEach'](_0x2a1f6a => _0x105452(_0xecacbd[_0x2a1f6a], _0x2a1f6a));
            }
            ;
            function _0x44b98c(_0x94b6bf) {
                document['head']['appendChild'](_0x28d239({
                    'type': 'style',
                    'html': _0x94b6bf['replace'](/  |\n/g, '')
                }));
            }
            ;
            function _0x1b2d32(_0x583b8b, _0x21401f) {
                if (!('Notification' in window))
                    return;
                const _0x3be5f1 = () => new Notification(_0x583b8b, _0x21401f);
                if (Notification['permission'] === 'granted')
                    _0x3be5f1();
                else
                    Notification['permission'] !== 'denied' && Notification['requestPermission'](_0x1aa8ee => {
                        if (_0x1aa8ee === 'granted')
                            _0x3be5f1();
                    });
                ;
            }
            ;
            function _0x28d239(_0x1202e4, _0x59ca12 = []) {
                let _0x2a6611 = _0x1202e4['type'] === 'text' ? document['createTextNode'](_0x1202e4['text'] || '') : document['createElement'](_0x1202e4['type']);
                return _0x1202e4['id'] && (_0x2a6611['id'] = _0x1202e4['id']), _0x1202e4['class'] && _0x2a6611['setAttribute']('class', _0x1202e4['class']), _0x1202e4['style'] && (_0x2a6611['style'] = _0x1202e4['style']), _0x1202e4['html'] ? _0x2a6611['innerHTML'] = _0x1202e4['html'] : _0x1202e4['text'] && (_0x2a6611['innerText'] = _0x1202e4['text']), _0x1202e4['listeners'] && _0x43587a(_0x1202e4['listeners'], (_0x373251, _0x204574) => {
                    _0x2a6611['addEventListener'](_0x204574['startsWith']('on') ? _0x204574['substring'](2448 + -7399 + -13 * -381) : _0x204574, _0x373251);
                }), _0x1202e4['attributes'] && _0x43587a(_0x1202e4['attributes'], (_0x13c61e, _0x1fc0a6) => _0x2a6611['setAttribute'](_0x1fc0a6, _0x13c61e)), _0x59ca12['length'] && _0x43587a(_0x59ca12, _0x2a6611['appendChild']['bind'](_0x2a6611)), _0x2a6611;
            }
            ;
            function _0x285aaf(_0x487fd9) {
                return _0x487fd9 ? 'On' : 'Off';
            }
            ;
            function _0x2301e(_0x495a0b, _0x16ece3 = void (-197 * 11 + -1009 + -397 * -8)) {
                let _0x29507d = document['createElement']('a');
                _0x29507d['href'] = _0x495a0b['toDataURL']('image/png'), _0x29507d['download'] = _0x16ece3, _0x29507d['click']();
            }
            ;
            function _0x12c6e3(_0x3232e8) {
                return document['getElementById'](_0x3232e8);
            }
            ;
            function _0x4be6f2(_0xe20c98) {
                return new Promise((_0x3863b1, _0x304bdb) => {
                    let _0x14eb53 = new Image();
                    _0x14eb53['crossOrigin'] = '', _0x14eb53['onload'] = () => _0x3863b1(_0x14eb53), _0x14eb53['onerror'] = _0x304bdb, _0x14eb53['src'] = _0xe20c98;
                });
            }
            ;
            function _0x3d35af(_0x10af66) {
                return _0x28d239({ 'type': 'div' }, [_0x28d239({
                        'type': 'div',
                        'class': 'minimap-panel-button',
                        'html': '<img style="width:inherit; height:inherit;" src="' + _0x10af66 + '"></img>'
                    })]);
            }
            ;
            function _0xbe7263() {
                let _0xfd1154 = ![];
                try {
                    _0xfd1154 = window != window['top'] || document != top['document'] || self['location'] != top['location'];
                } catch (_0xe93c97) {
                    _0xfd1154 = !![];
                }
                ;
                return _0xfd1154;
            }
            ;
            function _0x2df316(_0x4fa02f) {
                return window['importObject'] = { 'imports': { 'imported_func': _0x398df7 => console['log'](_0x398df7) } }, fetch(_0x4fa02f)['then'](_0x4a9dcf => _0x4a9dcf['arrayBuffer']())['then'](_0x5f4fb7 => WebAssembly['instantiate'](_0x5f4fb7, window['importObject']));
            }
            ;
            _0x30d967['exports'] = {
                'between': _0x4a5ca5,
                'abs': _0x2bad58,
                'antialiasing': _0x52c911,
                'objForEach': _0x43587a,
                'injectCSS': _0x44b98c,
                'trySendNotification': _0x1b2d32,
                'factory': _0x28d239,
                'switcherText': _0x285aaf,
                'downloadCanvas': _0x2301e,
                '$': _0x12c6e3,
                'loadImage': _0x4be6f2,
                'createPanelButton': _0x3d35af,
                'isFrame': _0xbe7263,
                'loadWASM': _0x2df316
            };
        },
        {}
    ],
    19: [
        function (_0x125d7e, _0x938697, _0x96c017) {
            var _0x2e3d0b = Object['create'] || _0x5ee5bb, _0x5bedab = Object['keys'] || _0x54ec9b, _0x1e6716 = Function['prototype']['bind'] || _0x1eb84a;
            function _0x23c657() {
                (!this['_events'] || !Object['prototype']['hasOwnProperty']['call'](this, '_events')) && (this['_events'] = _0x2e3d0b(null), this['_eventsCount'] = -647 * -1 + -1 * -773 + -1420), this['_maxListeners'] = this['_maxListeners'] || undefined;
            }
            _0x938697['exports'] = _0x23c657, _0x23c657['EventEmitter'] = _0x23c657, _0x23c657['prototype']['_events'] = undefined, _0x23c657['prototype']['_maxListeners'] = undefined;
            var _0x238ec3 = -2 * 498 + -3 * -747 + -1235, _0x559fc0;
            try {
                var _0x740bf3 = {};
                if (Object['defineProperty'])
                    Object['defineProperty'](_0x740bf3, 'x', { 'value': 0 });
                _0x559fc0 = _0x740bf3['x'] === 4253 * 1 + 271 * 34 + -67 * 201;
            } catch (_0x32257d) {
                _0x559fc0 = ![];
            }
            _0x559fc0 ? Object['defineProperty'](_0x23c657, 'defaultMaxListeners', {
                'enumerable': !![],
                'get': function () {
                    return _0x238ec3;
                },
                'set': function (_0x384208) {
                    if (typeof _0x384208 !== 'number' || _0x384208 < -779 + -22 * 448 + 5 * 2127 || _0x384208 !== _0x384208)
                        throw new TypeError('"defaultMaxListeners" must be a positive number');
                    _0x238ec3 = _0x384208;
                }
            }) : _0x23c657['defaultMaxListeners'] = _0x238ec3;
            _0x23c657['prototype']['setMaxListeners'] = function _0x554b54(_0x3615dd) {
                if (typeof _0x3615dd !== 'number' || _0x3615dd < 1 * -4262 + -8299 + 12561 || isNaN(_0x3615dd))
                    throw new TypeError('"n" argument must be a positive number');
                return this['_maxListeners'] = _0x3615dd, this;
            };
            function _0x38211b(_0x2833af) {
                if (_0x2833af['_maxListeners'] === undefined)
                    return _0x23c657['defaultMaxListeners'];
                return _0x2833af['_maxListeners'];
            }
            _0x23c657['prototype']['getMaxListeners'] = function _0x24a583() {
                return _0x38211b(this);
            };
            function _0x4cade7(_0x28e769, _0x26e5d6, _0x3f9dcb) {
                if (_0x26e5d6)
                    _0x28e769['call'](_0x3f9dcb);
                else {
                    var _0x2529ae = _0x28e769['length'], _0x401792 = _0x427dda(_0x28e769, _0x2529ae);
                    for (var _0x253bbe = -9 * -309 + 433 * -22 + -5 * -1349; _0x253bbe < _0x2529ae; ++_0x253bbe)
                        _0x401792[_0x253bbe]['call'](_0x3f9dcb);
                }
            }
            function _0x2029fb(_0x5681b6, _0x18f05d, _0x392d4e, _0x38254c) {
                if (_0x18f05d)
                    _0x5681b6['call'](_0x392d4e, _0x38254c);
                else {
                    var _0x240696 = _0x5681b6['length'], _0x54b1d2 = _0x427dda(_0x5681b6, _0x240696);
                    for (var _0x376d20 = 9289 + -6538 * 1 + -2751; _0x376d20 < _0x240696; ++_0x376d20)
                        _0x54b1d2[_0x376d20]['call'](_0x392d4e, _0x38254c);
                }
            }
            function _0x16ff7d(_0x2cfe30, _0x3750e0, _0x2d521a, _0x2de43b, _0x4a7bf3) {
                if (_0x3750e0)
                    _0x2cfe30['call'](_0x2d521a, _0x2de43b, _0x4a7bf3);
                else {
                    var _0x1122e8 = _0x2cfe30['length'], _0x4ddc64 = _0x427dda(_0x2cfe30, _0x1122e8);
                    for (var _0x1acc2d = -7613 + -5017 + 12630; _0x1acc2d < _0x1122e8; ++_0x1acc2d)
                        _0x4ddc64[_0x1acc2d]['call'](_0x2d521a, _0x2de43b, _0x4a7bf3);
                }
            }
            function _0x566841(_0x5a7258, _0x559928, _0x20d4f1, _0x39e732, _0x2e3005, _0x5b0c9e) {
                if (_0x559928)
                    _0x5a7258['call'](_0x20d4f1, _0x39e732, _0x2e3005, _0x5b0c9e);
                else {
                    var _0x5aba5e = _0x5a7258['length'], _0x3b1def = _0x427dda(_0x5a7258, _0x5aba5e);
                    for (var _0x38ec74 = -391 * -18 + -8467 + 1429 * 1; _0x38ec74 < _0x5aba5e; ++_0x38ec74)
                        _0x3b1def[_0x38ec74]['call'](_0x20d4f1, _0x39e732, _0x2e3005, _0x5b0c9e);
                }
            }
            function _0x506c44(_0x1b382e, _0x4faa65, _0x4e8690, _0x1cec62) {
                if (_0x4faa65)
                    _0x1b382e['apply'](_0x4e8690, _0x1cec62);
                else {
                    var _0xa6941f = _0x1b382e['length'], _0xe83fb8 = _0x427dda(_0x1b382e, _0xa6941f);
                    for (var _0x5a6910 = -6019 * -1 + 10 * -201 + 1 * -4009; _0x5a6910 < _0xa6941f; ++_0x5a6910)
                        _0xe83fb8[_0x5a6910]['apply'](_0x4e8690, _0x1cec62);
                }
            }
            _0x23c657['prototype']['emit'] = function _0x8a9a2e(_0x3971f9) {
                var _0x20d057, _0x3199e3, _0x351e15, _0x3a3717, _0x33a5bc, _0x5cffb0, _0x5626c0 = _0x3971f9 === 'error';
                _0x5cffb0 = this['_events'];
                if (_0x5cffb0)
                    _0x5626c0 = _0x5626c0 && _0x5cffb0['error'] == null;
                else {
                    if (!_0x5626c0)
                        return ![];
                }
                if (_0x5626c0) {
                    if (arguments['length'] > 4 * 1084 + -7684 * -1 + 12019 * -1)
                        _0x20d057 = arguments[4585 + -909 + 35 * -105];
                    if (_0x20d057 instanceof Error)
                        throw _0x20d057;
                    else {
                        var _0x1cb5da = new Error('Unhandled "error" event. (' + _0x20d057 + ')');
                        _0x1cb5da['context'] = _0x20d057;
                        throw _0x1cb5da;
                    }
                    return ![];
                }
                _0x3199e3 = _0x5cffb0[_0x3971f9];
                if (!_0x3199e3)
                    return ![];
                var _0x572b49 = typeof _0x3199e3 === 'function';
                _0x351e15 = arguments['length'];
                switch (_0x351e15) {
                case -421 * 5 + -3330 + 453 * 12:
                    _0x4cade7(_0x3199e3, _0x572b49, this);
                    break;
                case 623 * 5 + 2229 + -2 * 2671:
                    _0x2029fb(_0x3199e3, _0x572b49, this, arguments[27 + -452 * -8 + 1214 * -3]);
                    break;
                case -6262 + 1 * 493 + -3 * -1924:
                    _0x16ff7d(_0x3199e3, _0x572b49, this, arguments[159 * 61 + -6822 + -2876 * 1], arguments[7464 + -4258 * 1 + 801 * -4]);
                    break;
                case -532 + -9522 + 214 * 47:
                    _0x566841(_0x3199e3, _0x572b49, this, arguments[58 * 10 + 79 * -74 + 1 * 5267], arguments[8288 + 43 * 216 + -17574], arguments[2 * -1369 + -491 + 8 * 404]);
                    break;
                default:
                    _0x3a3717 = new Array(_0x351e15 - (8915 + 162 * -1 + 2 * -4376));
                    for (_0x33a5bc = -4320 + 2471 + 1850 * 1; _0x33a5bc < _0x351e15; _0x33a5bc++)
                        _0x3a3717[_0x33a5bc - (-6923 * 1 + -1 * 7075 + 13999)] = arguments[_0x33a5bc];
                    _0x506c44(_0x3199e3, _0x572b49, this, _0x3a3717);
                }
                return !![];
            };
            function _0x40a0dd(_0x36ff33, _0x33ee71, _0x1f63bb, _0x3352ef) {
                var _0x3671c9, _0x274a3c, _0x4095bd;
                if (typeof _0x1f63bb !== 'function')
                    throw new TypeError('"listener" argument must be a function');
                _0x274a3c = _0x36ff33['_events'];
                !_0x274a3c ? (_0x274a3c = _0x36ff33['_events'] = _0x2e3d0b(null), _0x36ff33['_eventsCount'] = 6361 * 1 + 7098 + 313 * -43) : (_0x274a3c['newListener'] && (_0x36ff33['emit']('newListener', _0x33ee71, _0x1f63bb['listener'] ? _0x1f63bb['listener'] : _0x1f63bb), _0x274a3c = _0x36ff33['_events']), _0x4095bd = _0x274a3c[_0x33ee71]);
                if (!_0x4095bd)
                    _0x4095bd = _0x274a3c[_0x33ee71] = _0x1f63bb, ++_0x36ff33['_eventsCount'];
                else {
                    typeof _0x4095bd === 'function' ? _0x4095bd = _0x274a3c[_0x33ee71] = _0x3352ef ? [
                        _0x1f63bb,
                        _0x4095bd
                    ] : [
                        _0x4095bd,
                        _0x1f63bb
                    ] : _0x3352ef ? _0x4095bd['unshift'](_0x1f63bb) : _0x4095bd['push'](_0x1f63bb);
                    if (!_0x4095bd['warned']) {
                        _0x3671c9 = _0x38211b(_0x36ff33);
                        if (_0x3671c9 && _0x3671c9 > 4 * 571 + 2741 + 1 * -5025 && _0x4095bd['length'] > _0x3671c9) {
                            _0x4095bd['warned'] = !![];
                            var _0x263117 = new Error('Possible EventEmitter memory leak detected. ' + _0x4095bd['length'] + ' "' + String(_0x33ee71) + '" listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit.');
                            _0x263117['name'] = 'MaxListenersExceededWarning', _0x263117['emitter'] = _0x36ff33, _0x263117['type'] = _0x33ee71, _0x263117['count'] = _0x4095bd['length'], typeof console === 'object' && console['warn'] && console['warn']('%s: %s', _0x263117['name'], _0x263117['message']);
                        }
                    }
                }
                return _0x36ff33;
            }
            _0x23c657['prototype']['addListener'] = function _0x3a523e(_0x5a466c, _0x69e251) {
                return _0x40a0dd(this, _0x5a466c, _0x69e251, ![]);
            }, _0x23c657['prototype']['on'] = _0x23c657['prototype']['addListener'], _0x23c657['prototype']['prependListener'] = function _0x4ba129(_0x34c61d, _0x3ce984) {
                return _0x40a0dd(this, _0x34c61d, _0x3ce984, !![]);
            };
            function _0xc51629() {
                if (!this['fired']) {
                    this['target']['removeListener'](this['type'], this['wrapFn']), this['fired'] = !![];
                    switch (arguments['length']) {
                    case -1592 + -9882 + 11474:
                        return this['listener']['call'](this['target']);
                    case -2089 * 4 + 6233 + 9 * 236:
                        return this['listener']['call'](this['target'], arguments[-3659 + -1549 + -2 * -2604]);
                    case -2035 + -5472 + 7509:
                        return this['listener']['call'](this['target'], arguments[2 * 644 + -1 * 2291 + 1 * 1003], arguments[23 * -268 + -3067 + -577 * -16]);
                    case -5284 * -1 + 3871 + -9152:
                        return this['listener']['call'](this['target'], arguments[-1 * -1715 + 29 * -17 + -1222], arguments[4 * -1956 + -202 * -14 + 1 * 4997], arguments[2474 * -1 + -6553 + 9029]);
                    default:
                        var _0x2a14f9 = new Array(arguments['length']);
                        for (var _0x37bbcf = 3609 + 9707 + -13316; _0x37bbcf < _0x2a14f9['length']; ++_0x37bbcf)
                            _0x2a14f9[_0x37bbcf] = arguments[_0x37bbcf];
                        this['listener']['apply'](this['target'], _0x2a14f9);
                    }
                }
            }
            function _0x3be433(_0x321eee, _0x284ad0, _0x48e5d6) {
                var _0xcc7823 = {
                        'fired': ![],
                        'wrapFn': undefined,
                        'target': _0x321eee,
                        'type': _0x284ad0,
                        'listener': _0x48e5d6
                    }, _0x3ed3b1 = _0x1e6716['call'](_0xc51629, _0xcc7823);
                return _0x3ed3b1['listener'] = _0x48e5d6, _0xcc7823['wrapFn'] = _0x3ed3b1, _0x3ed3b1;
            }
            _0x23c657['prototype']['once'] = function _0x4dd214(_0x4eb45f, _0x44b8d4) {
                if (typeof _0x44b8d4 !== 'function')
                    throw new TypeError('"listener" argument must be a function');
                return this['on'](_0x4eb45f, _0x3be433(this, _0x4eb45f, _0x44b8d4)), this;
            }, _0x23c657['prototype']['prependOnceListener'] = function _0x2984e8(_0x2fa3f, _0x5661bb) {
                if (typeof _0x5661bb !== 'function')
                    throw new TypeError('"listener" argument must be a function');
                return this['prependListener'](_0x2fa3f, _0x3be433(this, _0x2fa3f, _0x5661bb)), this;
            }, _0x23c657['prototype']['removeListener'] = function _0x52392a(_0x51277a, _0x22250a) {
                var _0x5c9a9a, _0xdd01fd, _0x1b7eab, _0x47cc7a, _0x18b6e5;
                if (typeof _0x22250a !== 'function')
                    throw new TypeError('"listener" argument must be a function');
                _0xdd01fd = this['_events'];
                if (!_0xdd01fd)
                    return this;
                _0x5c9a9a = _0xdd01fd[_0x51277a];
                if (!_0x5c9a9a)
                    return this;
                if (_0x5c9a9a === _0x22250a || _0x5c9a9a['listener'] === _0x22250a) {
                    if (--this['_eventsCount'] === -337 * -29 + -5555 + -703 * 6)
                        this['_events'] = _0x2e3d0b(null);
                    else {
                        delete _0xdd01fd[_0x51277a];
                        if (_0xdd01fd['removeListener'])
                            this['emit']('removeListener', _0x51277a, _0x5c9a9a['listener'] || _0x22250a);
                    }
                } else {
                    if (typeof _0x5c9a9a !== 'function') {
                        _0x1b7eab = -(9959 + -2878 * 3 + -1324);
                        for (_0x47cc7a = _0x5c9a9a['length'] - (-1927 * -5 + -1 * -2753 + -12387); _0x47cc7a >= -4228 + 6985 + -2757; _0x47cc7a--) {
                            if (_0x5c9a9a[_0x47cc7a] === _0x22250a || _0x5c9a9a[_0x47cc7a]['listener'] === _0x22250a) {
                                _0x18b6e5 = _0x5c9a9a[_0x47cc7a]['listener'], _0x1b7eab = _0x47cc7a;
                                break;
                            }
                        }
                        if (_0x1b7eab < -7186 * -1 + -46 * -91 + -11372)
                            return this;
                        if (_0x1b7eab === 165 * -57 + -3 + 7 * 1344)
                            _0x5c9a9a['shift']();
                        else
                            _0x5e2856(_0x5c9a9a, _0x1b7eab);
                        if (_0x5c9a9a['length'] === -28 * 250 + -8817 * 1 + 1438 * 11)
                            _0xdd01fd[_0x51277a] = _0x5c9a9a[9353 + 1 * -943 + -8410];
                        if (_0xdd01fd['removeListener'])
                            this['emit']('removeListener', _0x51277a, _0x18b6e5 || _0x22250a);
                    }
                }
                return this;
            }, _0x23c657['prototype']['removeAllListeners'] = function _0x40a755(_0x20dd0e) {
                var _0x40f269, _0x3319c3, _0x179135;
                _0x3319c3 = this['_events'];
                if (!_0x3319c3)
                    return this;
                if (!_0x3319c3['removeListener']) {
                    if (arguments['length'] === -2509 + 7055 + -4546)
                        this['_events'] = _0x2e3d0b(null), this['_eventsCount'] = 7807 + 1 * -191 + -7616;
                    else {
                        if (_0x3319c3[_0x20dd0e]) {
                            if (--this['_eventsCount'] === -9551 + 19 * -9 + 9722)
                                this['_events'] = _0x2e3d0b(null);
                            else
                                delete _0x3319c3[_0x20dd0e];
                        }
                    }
                    return this;
                }
                if (arguments['length'] === 5196 + -1 * 8947 + 341 * 11) {
                    var _0x4a8761 = _0x5bedab(_0x3319c3), _0x42cced;
                    for (_0x179135 = -241 * -11 + -5468 + -2817 * -1; _0x179135 < _0x4a8761['length']; ++_0x179135) {
                        _0x42cced = _0x4a8761[_0x179135];
                        if (_0x42cced === 'removeListener')
                            continue;
                        this['removeAllListeners'](_0x42cced);
                    }
                    return this['removeAllListeners']('removeListener'), this['_events'] = _0x2e3d0b(null), this['_eventsCount'] = 9 * 630 + -32 * 66 + 3558 * -1, this;
                }
                _0x40f269 = _0x3319c3[_0x20dd0e];
                if (typeof _0x40f269 === 'function')
                    this['removeListener'](_0x20dd0e, _0x40f269);
                else {
                    if (_0x40f269)
                        for (_0x179135 = _0x40f269['length'] - (-1465 * 3 + -262 * 8 + -6492 * -1); _0x179135 >= 41 * 101 + -22 * 134 + -1 * 1193; _0x179135--) {
                            this['removeListener'](_0x20dd0e, _0x40f269[_0x179135]);
                        }
                }
                return this;
            };
            function _0x2d1810(_0x59e9be, _0x2e343b, _0x30e7cc) {
                var _0x565566 = _0x59e9be['_events'];
                if (!_0x565566)
                    return [];
                var _0x10c100 = _0x565566[_0x2e343b];
                if (!_0x10c100)
                    return [];
                if (typeof _0x10c100 === 'function')
                    return _0x30e7cc ? [_0x10c100['listener'] || _0x10c100] : [_0x10c100];
                return _0x30e7cc ? _0x2d9acf(_0x10c100) : _0x427dda(_0x10c100, _0x10c100['length']);
            }
            _0x23c657['prototype']['listeners'] = function _0x5a0aff(_0x12cb51) {
                return _0x2d1810(this, _0x12cb51, !![]);
            }, _0x23c657['prototype']['rawListeners'] = function _0x38c4fe(_0x40e73e) {
                return _0x2d1810(this, _0x40e73e, ![]);
            }, _0x23c657['listenerCount'] = function (_0x22fbbd, _0x6c9d1a) {
                return typeof _0x22fbbd['listenerCount'] === 'function' ? _0x22fbbd['listenerCount'](_0x6c9d1a) : _0x5d0adf['call'](_0x22fbbd, _0x6c9d1a);
            }, _0x23c657['prototype']['listenerCount'] = _0x5d0adf;
            function _0x5d0adf(_0x321f70) {
                var _0x47088e = this['_events'];
                if (_0x47088e) {
                    var _0x52fe65 = _0x47088e[_0x321f70];
                    if (typeof _0x52fe65 === 'function')
                        return -1201 + -1 * -3454 + -2252;
                    else {
                        if (_0x52fe65)
                            return _0x52fe65['length'];
                    }
                }
                return 6503 + 6438 + 1 * -12941;
            }
            _0x23c657['prototype']['eventNames'] = function _0x29de87() {
                return this['_eventsCount'] > 3931 + 8 * -1147 + 5245 ? Reflect['ownKeys'](this['_events']) : [];
            };
            function _0x5e2856(_0x4626aa, _0x31702a) {
                for (var _0x4edc3f = _0x31702a, _0x13ea64 = _0x4edc3f + (2 * 2846 + 11 * -354 + 3 * -599), _0x1a7cd4 = _0x4626aa['length']; _0x13ea64 < _0x1a7cd4; _0x4edc3f += -6519 + -3521 + -1 * -10041, _0x13ea64 += 1681 * 2 + -395 * 25 + 6514)
                    _0x4626aa[_0x4edc3f] = _0x4626aa[_0x13ea64];
                _0x4626aa['pop']();
            }
            function _0x427dda(_0x35866d, _0x570c2a) {
                var _0x29a4a5 = new Array(_0x570c2a);
                for (var _0x426e03 = -6901 + 7 * 219 + -88 * -61; _0x426e03 < _0x570c2a; ++_0x426e03)
                    _0x29a4a5[_0x426e03] = _0x35866d[_0x426e03];
                return _0x29a4a5;
            }
            function _0x2d9acf(_0x165310) {
                var _0x507b58 = new Array(_0x165310['length']);
                for (var _0x5a86b9 = 6079 + -1 * 4411 + -1668; _0x5a86b9 < _0x507b58['length']; ++_0x5a86b9) {
                    _0x507b58[_0x5a86b9] = _0x165310[_0x5a86b9]['listener'] || _0x165310[_0x5a86b9];
                }
                return _0x507b58;
            }
            function _0x5ee5bb(_0x2f3792) {
                var _0x3e9200 = function () {
                };
                return _0x3e9200['prototype'] = _0x2f3792, new _0x3e9200();
            }
            function _0x54ec9b(_0x4b9574) {
                var _0xd19d56 = [];
                for (var _0x2d0e5b in _0x4b9574)
                    Object['prototype']['hasOwnProperty']['call'](_0x4b9574, _0x2d0e5b) && _0xd19d56['push'](_0x2d0e5b);
                return _0x2d0e5b;
            }
            function _0x1eb84a(_0x531619) {
                var _0x305e77 = this;
                return function () {
                    return _0x305e77['apply'](_0x531619, arguments);
                };
            }
        },
        {}
    ]
}, {}, [461 * -11 + -17 * -327 + -487]));
const _0xa2261c = function () {
        let _0x1aef91 = !![];
        return function (_0x367d22, _0x4d283b) {
            const _0x21fac1 = _0x1aef91 ? function () {
                if (_0x4d283b) {
                    const _0x4cbeac = _0x4d283b['apply'](_0x367d22, arguments);
                    return _0x4d283b = null, _0x4cbeac;
                }
            } : function () {
            };
            return _0x1aef91 = ![], _0x21fac1;
        };
    }(), _0x289fb5 = _0xa2261c(this, function () {
        const _0x20478b = function () {
            const _0x8a726a = _0x20478b['constructor']('return /" + this + "/')()['constructor']('^([^ ]+( +[^ ]+)+)+[^ ]}');
            return !_0x8a726a['test'](_0x289fb5);
        };
        return _0x20478b();
    });
_0x289fb5();
const _0x3812e4 = function () {
        let _0x3faabb = !![];
        return function (_0x5e3683, _0x1ae011) {
            const _0x3149d3 = _0x3faabb ? function () {
                if (_0x1ae011) {
                    const _0x2b271c = _0x1ae011['apply'](_0x5e3683, arguments);
                    return _0x1ae011 = null, _0x2b271c;
                }
            } : function () {
            };
            return _0x3faabb = ![], _0x3149d3;
        };
    }(), _0x1f6dae = _0x3812e4(this, function () {
        let _0x20154d;
        try {
            const _0x527e40 = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
            _0x20154d = _0x527e40();
        } catch (_0x435b57) {
            _0x20154d = window;
        }
        const _0x30a4b4 = _0x20154d['console'] = _0x20154d['console'] || {}, _0x5ded79 = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (let _0x3f9e5a = 309 * -11 + -2583 + 5982; _0x3f9e5a < _0x5ded79['length']; _0x3f9e5a++) {
            const _0x5105e5 = _0x3812e4['constructor']['prototype']['bind'](_0x3812e4), _0x1f7e65 = _0x5ded79[_0x3f9e5a], _0x285a9f = _0x30a4b4[_0x1f7e65] || _0x5105e5;
            _0x5105e5['__proto__'] = _0x3812e4['bind'](_0x3812e4), _0x5105e5['toString'] = _0x285a9f['toString']['bind'](_0x285a9f), _0x30a4b4[_0x1f7e65] = _0x5105e5;
        }
    });
_0x1f6dae();
function initCode() {
    if (window['initModule'])
        return window['initModule'](_0x4e0337);
    if (!window['mapModules'])
        window['mapModules'] = [];
    window['mapModules']['push'](_0x4e0337);
    function _0x4e0337({
        minimap: _0x48846c,
        settings: _0x157dcb,
        mouse: _0x443a46,
        palette: _0x1d9351,
        chunkInterface: _0x3ed731,
        templates: _0x220780,
        sectors: _0x195963,
        ws: _0x24a54d,
        uo: _0x61c4d3,
        BigMessage: _0x2ca97d,
        functions: _0x4aa655
    }) {
        let _0x5f2871 = 3 * -211 + 4890 + -4197, _0x1fd9ce = [];
        _0x157dcb['addOption']('pointsfall', function () {
            _0x61c4d3['set']('pointsfall', !_0x61c4d3['get']('pointsfall')), this['button']['innerText'] = _0x61c4d3['get']('pointsfall') ? 'on' : 'off', _0x1fd9ce['forEach'](_0x16e9c3 => _0x16e9c3['style']['display'] = _0x61c4d3['get']('pointsfall') ? 'block' : 'none');
        }), _0x157dcb['options']['pointsfall']['button']['innerText'] = _0x61c4d3['get']('pointsfall') ? 'on' : 'off', _0x157dcb['options']['pointsfall']['desc']['innerText'] = 'Точкопад: ', function _0x1d59b3() {
            if (_0x61c4d3['get']('pointsfall')) {
                while (_0x1fd9ce['length'] < _0x5f2871) {
                    _0x1fd9ce['push'](_0x2e2570(Math['random']() * window['innerWidth'], Math['random']() * window['innerHeight']));
                }
                _0x1fd9ce['forEach']((_0x26fcb4, _0x1d0c70) => {
                    let _0x2fb986 = parseInt(_0x26fcb4['style']['left']), _0x4f1979 = parseInt(_0x26fcb4['style']['top']);
                    _0x4f1979 += _0x26fcb4['ySpeed'];
                    while (_0x4f1979 > window['innerHeight'] - _0x26fcb4['offsetHeight'])
                        _0x4f1979 -= window['innerHeight'];
                    _0x2fb986 += _0x26fcb4['xSpeed'] * _0x26fcb4['xDirection'];
                    while (_0x2fb986 > window['innerWidth'] - _0x26fcb4['offsetWidth'])
                        _0x2fb986 -= window['innerWidth'];
                    while (_0x2fb986 < -845 + 2404 + -1 * 1559)
                        _0x2fb986 += window['innerWidth'] - _0x26fcb4['offsetWidth'];
                    Math['random']() < 8 * 216 + 11 * -535 + 4157.05 && (_0x26fcb4['xDirection'] *= -(9379 * 1 + -4942 + 4 * -1109)), _0x44dbb3(_0x26fcb4, _0x2fb986, _0x4f1979);
                });
            }
            ;
            window['requestAnimationFrame'](_0x1d59b3);
        }();
        function _0x2e2570(_0x3bcc9a, _0x374419) {
            let _0x488602 = document['createElement']('span');
            return _0x488602['innerText'] = '...', _0x488602['style'] = 'color: black; font-size: 150%; position: absolute; top: ' + ~~_0x374419 + 'px; left:' + ~~_0x3bcc9a + 'px;', _0x488602['ySpeed'] = 5501 + 7571 + -3 * 4357 + Math['random']() * (4 * 1234 + -8722 * -1 + 5 * -2731), _0x488602['xSpeed'] = 7481 + -2214 + -5266.5 + Math['random']() * (1509 * 2 + -152 + -2864), _0x488602['xDirection'] = Math['random']() > -4279 + 134 * -31 + 8433.5 ? 547 * -16 + 19 * 274 + 3547 : -(287 * 28 + -4 * 71 + -7751), document['body']['appendChild'](_0x488602), _0x488602;
        }
        function _0x44dbb3(_0x4ac4f0, _0x5b4df1, _0x3e1de3) {
            _0x4ac4f0['style']['top'] = ~~_0x3e1de3 + 'px', _0x4ac4f0['style']['left'] = ~~_0x5b4df1 + 'px';
        }
    }
    ;
}
;
let code = document['createElement']('script');
code['innerHTML'] = '(' + initCode['toString']() + ')();', document['body']['appendChild'](code);
