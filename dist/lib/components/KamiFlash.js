"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import lib
var kami_component_1 = require("kami-component");
var KamiProgressBar_1 = require("./KamiProgressBar");
var bottomAnimation_1 = require("../animations/bottomAnimation");
var topAnimation_1 = require("../animations/topAnimation");
// import enum
var Type_1 = require("../enum/Type");
var Color_1 = require("../enum/Color");
var Icon_1 = require("../enum/Icon");
var Position_1 = require("../enum/Position");
/**
 * Create a simple flash message
 * @class KamiFlash
 * @extends KamiComponent
 */
var KamiFlash = /** @class */ (function (_super) {
    __extends(KamiFlash, _super);
    function KamiFlash() {
        var _this = _super.call(this) || this;
        _this.index = 0;
        _this.stackedPosition = 0;
        _this.inLoad = true;
        // init animation
        _this.bottomAnimation = bottomAnimation_1.default;
        _this.topAnimation = topAnimation_1.default;
        // init all animation with the good position
        _this.animations = {};
        // bottom animation
        _this.animations[Position_1.default['BOTTOM']] = _this.bottomAnimation;
        _this.animations[Position_1.default['BOTTOMLEFT']] = _this.bottomAnimation;
        _this.animations[Position_1.default['BOTTOMRIGHT']] = _this.bottomAnimation;
        // top animation
        _this.animations[Position_1.default['TOP']] = _this.topAnimation;
        _this.animations[Position_1.default['TOPLEFT']] = _this.topAnimation;
        _this.animations[Position_1.default['TOPRIGHT']] = _this.topAnimation;
        // init animation option
        _this.animationOptions = {
            duration: 500,
            easing: 'ease'
        };
        return _this;
    }
    Object.defineProperty(KamiFlash, "tag", {
        /**
         * @static
         * @property {string} tag - the component tag
         */
        get: function () {
            return 'kami-flash';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KamiFlash.prototype, "closeBtn", {
        /**
         * @property {HTMLElement | null} close - the close btn
         */
        get: function () {
            return this.wrapper.querySelector('#close');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KamiFlash.prototype, "flash", {
        /**
         * @property {HTMLElement | null} flash - the dom structure
         */
        get: function () {
            return this.wrapper.querySelector('.flash');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KamiFlash.prototype, "dom", {
        /**
         * @property {HTMLElement} dom - the flash dom
         */
        get: function () {
            return this.flash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KamiFlash.prototype, "position", {
        /**
         * @property {String} position - get the position attribute
         */
        get: function () {
            return this.getAttribute('position') || 'BOTTOM';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KamiFlash, "observedAttributes", {
        get: function () {
            return ['type', 'message', 'position', 'stack', 'time', 'progressbar'];
        },
        enumerable: true,
        configurable: true
    });
    KamiFlash.prototype.setProperties = function () {
        this.inLoad = true;
        var type = this.getAttribute('type') || 'OK';
        var position = this.getAttribute('position') || 'BOTTOM';
        this.props = this.observe({
            position: position,
            type: type,
            message: this.getAttribute('message') || 'Write your message flash here',
            stack: this.toBoolean(this.getAttribute('stack')) || true,
            time: this.getAttribute('time') || null,
            progressbar: this.hasAttribute('progressbar') || false
        });
    };
    /**
     * This method is call when the compenent it create.
     * Here it use to add an enter animation
     */
    KamiFlash.prototype.connectedCallback = function () {
        // update the position if the flash is stacked
        this.toBoolean(this.getAttribute('stack'))
            ? this.stackFlash()
            : (this.props.stacked = KamiFlash.initialPosition);
        if (this.props.time && this.props.progressbar) {
            this.displayProgressBar();
        }
        this.display();
    };
    KamiFlash.prototype.display = function () {
        var _this = this;
        this.flash.animate(this.animations[Position_1.default[this.props.position]].enter, this.animationOptions);
        if (this.props.time) {
            setTimeout(this.close.bind(this), this.props.time);
            if (this.props.progressbar) {
                this.progressbar.start();
            }
        }
        setTimeout(function () {
            _this.closeBtn.animate([
                { opacity: '0', transform: 'translateX(20px) rotateZ(45deg)' },
                { opacity: '1', transform: 'translateX(0px) rotateZ(0deg)' }
            ], _this.animationOptions).onfinish = function () {
                _this.inLoad = false;
                _this.closeBtn.style.opacity = '1';
                _this.closeBtn.addEventListener('click', _this.close.bind(_this));
            };
        }, 400);
    };
    KamiFlash.prototype.displayProgressBar = function () {
        this.progressbar = new KamiProgressBar_1.default({
            width: this.flash.offsetWidth,
            time: this.props.time,
            type: this.props.type
        });
        this.flash.appendChild(this.progressbar);
    };
    /**
     * Close the flash instance.
     * @returns {Promise<KamiFlash>} the flash instance close
     */
    KamiFlash.prototype.close = function () {
        var _this = this;
        return new Promise(function (res) {
            _this.flash.animate(_this.animations[Position_1.default[_this.props.position]].out, _this.animationOptions).onfinish = function () {
                // delete this component.
                _this.remove();
                if (_this.props.stack) {
                    KamiFlash.stackedFlash[_this.position].forEach(function (flash) {
                        // update other flash only if it sup a the current flash
                        if (flash.index > _this.index) {
                            // update the stackedPosition property}
                            flash.stackedPosition = flash.stackedPosition - KamiFlash.ofsetPosition;
                            // update the position of all sup stacked flash
                            _this.position.substring(0, 6) === 'BOTTOM'
                                ? (flash.dom.style.bottom = flash.stackedPosition + "px")
                                : (flash.dom.style.top = flash.stackedPosition + "px");
                        }
                    });
                    // descrease the current static property
                    KamiFlash.stacked[_this.position] -= KamiFlash.ofsetPosition;
                    res(_this);
                }
            };
        });
    };
    KamiFlash.prototype.stackFlash = function () {
        this.props.stacked = KamiFlash.stacked[this.position];
        this.stackedPosition = KamiFlash.stacked[this.position];
        KamiFlash.stacked[this.position] += KamiFlash.ofsetPosition;
        // set the index of the flash into with the stacked flash length
        this.index = KamiFlash.stackedFlash[this.position].length;
        // push into the stackedFlash property the flash
        KamiFlash.stackedFlash[this.position].push(this);
    };
    KamiFlash.prototype.renderHtml = function () {
        return "\n            <div class=\"flash " + Position_1.default[this.props.position] + "\">\n                <div class=\"flash__message flash__message--" + Type_1.default[this.props.type] + " shadow__bottom--30px\">\n                    <iron-icon icon=\"" + Icon_1.default[this.props.type] + "\"></iron-icon>\n                    <div class=\"flash__text\">" + this.props.message + "</div>\n                    <iron-icon class=\"flash__close\" id=\"close\" icon=\"close\"></iron-icon>\n                </div>\n            </div>\n        ";
    };
    KamiFlash.prototype.renderStyle = function () {
        return "\n\n            .flash{\n                position: fixed;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                transition: all 0.5s ease;\n                z-index: 100;\n                width: fit-content;\n            }\n\n            .flash--bottom{\n                bottom: " + this.props.stacked + "px;\n                margin: 0% auto;\n                left: 0;\n                right: 0;\n            }\n\n            .flash--top{\n                top: " + this.props.stacked + "px;\n                margin: 0% auto;\n                left: 0;\n                right: 0;\n            }\n\n            .flash--topleft{\n                top: " + this.props.stacked + "px;\n                left: 20px;\n            }\n\n            .flash--topright{\n                top: " + this.props.stacked + "px;\n                right: 20px;\n            }\n\n            .flash--bottomleft{\n                bottom: " + this.props.stacked + "px;\n                left: 20px;\n            }\n\n            .flash--bottomright{\n                bottom: " + this.props.stacked + "px;\n                right: 20px;\n            }\n\n            .flash__message{\n                padding: 10px;\n                border-radius: .2857rem;\n                align-items: center;\n                justify-content: space-around;\n                display: flex;\n            }\n\n            .flash__text{\n                padding-right: 10px;\n                padding-left: 10px;\n                font-family: sans-serif;\n            }\n\n            .flash__message--" + Type_1.default.ERROR + "{\n                background-color: " + Color_1.default.ERROR + ";\n                color: white;\n            }\n\n            .flash__message--" + Type_1.default.OK + "{\n                background-color: " + Color_1.default.OK + ";\n                color: white;\n            }\n\n            .flash__message--" + Type_1.default.WARNING + "{\n                background-color: " + Color_1.default.WARNING + ";\n                color: white;\n            }\n\n            .flash__message--" + Type_1.default.INFO + "{\n                background-color: " + Color_1.default.INFO + ";\n                color: white;\n            }\n\n            .flash__close{\n                cursor: pointer;\n                opacity: 0;\n            }\n\n            .flash__close:hover{\n                transition : all 0.5s ease;\n            }\n        ";
    };
    /**
     * A static methode to create flash component and append
     * this directly to the body.
     * @param tagName {String} - your KamiFlash tag name
     * @param type {String} - flash type
     * @param message {String} - flash message
     * @param position {String} - flash position
     */
    KamiFlash.createFlash = function (tagName, type, message, position, stack, time, progressbar) {
        if (tagName === void 0) { tagName = KamiFlash.tag; }
        if (stack === void 0) { stack = true; }
        if (time === void 0) { time = null; }
        var flash = document.createElement(tagName);
        flash.setAttribute('type', type);
        flash.setAttribute('position', position);
        flash.setAttribute('stack', stack.toString());
        if (time) {
            flash.setAttribute('time', time);
        }
        if (progressbar) {
            flash.setAttribute('progressbar', 'true');
        }
        if (message !== '') {
            flash.setAttribute('message', message);
        }
        document.body.appendChild(flash);
    };
    /**
     * Close all flashs instance.
     * @returns {void}
     */
    KamiFlash.closeAll = function () {
        var _loop_1 = function (key, flashs) {
            flashs.forEach(function (flash) {
                flash
                    .close()
                    .then(function () {
                    KamiFlash.stacked[key] = KamiFlash.initialPosition;
                })
                    .catch(function (err) {
                    console.error(err);
                });
            });
        };
        for (var _i = 0, _a = Object.entries(KamiFlash.stackedFlash); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], flashs = _b[1];
            _loop_1(key, flashs);
        }
    };
    /**
     * @static
     * @property {number} initialPosition - the initial position of flash
     */
    KamiFlash.initialPosition = 20;
    /**
     * @static
     * @property {number} ofsetPosition - the ofset to add at the flash position if is stack
     */
    KamiFlash.ofsetPosition = 50;
    /**
     * @static
     * @property {IPosition} stacked - all the current stack position for each flash
     */
    KamiFlash.stacked = {
        BOTTOM: KamiFlash.initialPosition,
        BOTTOMLEFT: KamiFlash.initialPosition,
        BOTTOMRIGHT: KamiFlash.initialPosition,
        TOP: KamiFlash.initialPosition,
        TOPLEFT: KamiFlash.initialPosition,
        TOPRIGHT: KamiFlash.initialPosition
    };
    /**
     * @static
     * @property {IPosition} stackedFlash - all stacked flash.
     */
    KamiFlash.stackedFlash = {
        BOTTOM: [],
        BOTTOMLEFT: [],
        BOTTOMRIGHT: [],
        TOP: [],
        TOPLEFT: [],
        TOPRIGHT: []
    };
    return KamiFlash;
}(kami_component_1.default));
exports.default = KamiFlash;
//# sourceMappingURL=KamiFlash.js.map