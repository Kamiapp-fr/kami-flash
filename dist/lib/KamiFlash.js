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
//polyfill
require("@webcomponents/webcomponentsjs/custom-elements-es5-adapter");
require("@webcomponents/webcomponentsjs/webcomponents-bundle");
require("web-animations-js");
require("@polymer/iron-icon/iron-icon.js");
require("@polymer/iron-icons/iron-icons.js");
//import lib
var kami_component_1 = require("kami-component");
var Type_1 = require("./enum/Type");
var Color_1 = require("./enum/Color");
var Icon_1 = require("./enum/Icon");
/**
 * Create a simple flash message
 * @class KamiFlash
 * @extends KamiComponent
 */
var KamiFlash = /** @class */ (function (_super) {
    __extends(KamiFlash, _super);
    function KamiFlash() {
        var _this = _super.call(this) || this;
        _this.close = _this.wrapper.querySelector('#close');
        _this.flash = _this.wrapper.querySelector('.flash');
        return _this;
    }
    Object.defineProperty(KamiFlash, "observedAttributes", {
        get: function () {
            return ['typeprops', 'messageprops'];
        },
        enumerable: true,
        configurable: true
    });
    KamiFlash.prototype.setProperties = function () {
        var type = this.getAttribute('typeProps') || 'OK';
        this.props = this.observe({
            type: Type_1.default[type],
            icon: Icon_1.default[type],
            message: this.getAttribute('messageProps') || 'Write your message flash here'
        });
    };
    KamiFlash.prototype.initEventListener = function () {
        var _this = this;
        //reinit this property because this method
        //is call before the constructor of this class
        this.flash = this.wrapper.querySelector('.flash');
        this.close = this.wrapper.querySelector('#close');
        this.close.addEventListener('click', function () {
            _this.flash.animate([
                { opacity: '1', transform: 'translateY(0px)' },
                { opacity: '0', transform: 'translateY(30px)' }
            ], {
                duration: 500,
                easing: 'ease'
            }).onfinish = function () {
                //delete this component.
                _this.remove();
            };
        });
    };
    /**
     * This method is call when the compenent it create.
     * Here it use to add an enter animation
     */
    KamiFlash.prototype.connectedCallback = function () {
        var _this = this;
        if (this.flash && this.close) {
            this.flash.animate([
                { opacity: '0', transform: 'translateY(20px)' },
                { opacity: '1', transform: 'translateY(0px)' }
            ], {
                duration: 500,
                easing: 'ease'
            });
            setTimeout(function () {
                _this.close.animate([
                    { opacity: '0', transform: 'translateX(20px) rotateZ(45deg)' },
                    { opacity: '1', transform: 'translateX(0px) rotateZ(0deg)' }
                ], {
                    duration: 500,
                    easing: 'ease'
                }).onfinish = function () {
                    _this.close.style.opacity = '1';
                };
            }, 400);
        }
    };
    KamiFlash.prototype.renderHtml = function () {
        return "\n        \n            <div class=\"flash\">\n                <div class=\"flash__message flash__message--" + this.props.type + " shadow__bottom--30px\">\n                    <iron-icon icon=\"" + this.props.icon + "\"></iron-icon>\n                    <div class=\"flash__text\">" + this.props.message + "</div>\n                    <iron-icon class=\"flash__close\" id=\"close\" icon=\"close\"></iron-icon>\n                </div>\n            </div>\n        ";
    };
    KamiFlash.prototype.renderStyle = function () {
        return "\n\n            .flash{\n                position: fixed;\n                bottom: 20px;\n                width: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                transition: all 1s ease;\n                z-index: 100;\n            }\n\n            .flash__message{\n                padding: 10px;\n                border-radius: .2857rem;\n                align-items: center;\n                justify-content: space-around;\n                display: flex;\n            }\n\n            .flash__text{\n                padding-right: 10px;\n                padding-left: 10px;\n                font-family: sans-serif;\n            }\n\n            .flash__message--" + Type_1.default.ERROR + "{\n                background-color: " + Color_1.default.ERROR + ";\n                color: white;\n            }\n\n            .flash__message--" + Type_1.default.OK + "{\n                background-color: " + Color_1.default.OK + ";\n                color: white;\n            }\n\n            .flash__message--" + Type_1.default.WARNING + "{\n                background-color: " + Type_1.default.WARNING + ";\n                color: white;\n            }\n\n            .flash__close{\n                cursor: pointer;\n                opacity: 0;\n            }\n\n            .flash__close:hover{\n                transition : all 0.5s ease;\n            }\n        ";
    };
    return KamiFlash;
}(kami_component_1.default));
exports.default = KamiFlash;
//# sourceMappingURL=KamiFlash.js.map