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
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
require("@webcomponents/webcomponentsjs/custom-elements-es5-adapter");
require("@webcomponents/webcomponentsjs/webcomponents-bundle");
var kami_component_1 = require("kami-component");
var Type;
(function (Type) {
    Type["OK"] = "OK";
    Type["ERROR"] = "ERROR";
    Type["WARNING"] = "WARNING";
})(Type || (Type = {}));
var Color;
(function (Color) {
    Color["OK"] = "#00bf9a";
    Color["ERROR"] = "red";
    Color["WARNING"] = "orange";
})(Color || (Color = {}));
/**
 * Create a simple flash message
 * @class Flash
 * @extends Component
 * @example <caption>index.js</caption>
 * import Flash from "./Components/Flash";
 * window.customElements.define('flash-element', Flash);
 *
 * @example  <caption>html</caption>
 * <flash-element typeProps="OK" messageProps="a good message"></flash-element>
 * <flash-element typeProps="WARNING" messageProps="a warning message"></flash-element>
 * <flash-element typeProps="ERROR" messageProps="a error message"></flash-element>
 */
var KamiFlash = /** @class */ (function (_super) {
    __extends(KamiFlash, _super);
    function KamiFlash() {
        var _this = _super.call(this) || this;
        _this.close = null;
        return _this;
    }
    Object.defineProperty(KamiFlash, "observedAttributes", {
        get: function () { return ['typeprops', 'messageprops']; },
        enumerable: true,
        configurable: true
    });
    /**
     * This method is call when the compenent it create.
     * Here it use to add an enter animation
     */
    KamiFlash.prototype.connectedCallback = function () {
        var flash = this.wrapper.querySelector('.flash');
        var icon = this.wrapper.querySelector('.flash__close');
        if (flash && icon) {
            icon.style.opacity = '0';
            flash.animate([
                { opacity: '0', transform: 'translateY(20px)' },
                { opacity: '1', transform: 'translateY(0px)' }
            ], {
                duration: 500,
                easing: 'ease'
            });
            setTimeout(function () {
                icon.animate([
                    { opacity: '0', transform: 'translateX(20px) rotateZ(45deg)' },
                    { opacity: '1', transform: 'translateX(0px) rotateZ(0deg)' }
                ], {
                    duration: 500,
                    easing: 'ease',
                }).onfinish = function () {
                    icon.style.opacity = '1';
                };
            }, 400);
        }
    };
    KamiFlash.prototype.initEventListener = function () {
        this.close = this.wrapper.querySelector('#close');
        this.close.addEventListener('click', function () {
            console.log('ok');
        });
    };
    /**
     * set properties for the parent class
     */
    KamiFlash.prototype.setProperties = function () {
        var type = this.getAttribute('typeProps') || 'OK';
        this.props = this.observe({
            type: Type[type],
            message: this.getAttribute('messageProps') || 'Ecrivez votre message flash'
        });
    };
    /**
     * Render the html template
     * @returns {String} a html template
     */
    KamiFlash.prototype.renderHtml = function () {
        return "\n            <div class=\"flash\">\n                <div class=\"flash__message flash__message--" + this.props.type + " shadow__bottom--30px\">\n                    <div class=\"flash__text\">" + this.props.message + "</div>\n                    <div id=\"close\" class=\"flash__close\">\u274C</div>\n                </div>\n            </div>\n        ";
    };
    /**
     * Render the style for the web component
     * @returns {String} a style sheet
     */
    KamiFlash.prototype.renderStyle = function () {
        return "\n\n            .flash{\n                position: fixed;\n                bottom: 20px;\n                width: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                transition: all 1s ease;\n                z-index: 100;\n            }\n\n            .flash__message{\n                padding: 10px;\n                border-radius: .2857rem;\n                align-items: center;\n                justify-content: space-around;\n                display: flex;\n            }\n\n            .flash__text{\n                padding-right: 10px;\n                padding-left: 10px;\n                font-family: sans-serif;\n            }\n\n            .flash__message--" + Type.ERROR + "{\n                background-color: " + Color.ERROR + ";\n                color: white;\n            }\n\n            .flash__message--" + Type.OK + "{\n                background-color: " + Color.OK + ";\n                color: white;\n            }\n\n            .flash__message--" + Type.WARNING + "{\n                background-color: " + Type.WARNING + ";\n                color: white;\n            }\n\n            .flash__close{\n                cursor: pointer;\n                transition : all 0.5s ease;\n            }\n\n            .flash__close:hover{\n                transition : all 0.5s ease;\n            }\n        ";
    };
    return KamiFlash;
}(kami_component_1.default));
exports.default = KamiFlash;
//# sourceMappingURL=KamiFlash.js.map