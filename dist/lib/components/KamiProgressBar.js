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
var kami_component_1 = require("kami-component");
var Type_1 = require("../enum/Type");
var ColorProgressBar_1 = require("../enum/ColorProgressBar");
var KamiProgressBar = /** @class */ (function (_super) {
    __extends(KamiProgressBar, _super);
    function KamiProgressBar(_a) {
        var width = _a.width, time = _a.time, type = _a.type;
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.props.width = width;
        _this.props.time = time;
        _this.props.type = type;
        _this.color = ColorProgressBar_1.default[_this.props.type];
        return _this;
    }
    Object.defineProperty(KamiProgressBar, "tag", {
        /**
         * @static
         * @property {string} tag - the component tag
         */
        get: function () {
            return 'kami-progressbar';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KamiProgressBar.prototype, "deltaWidth", {
        get: function () {
            return (this.width / this.props.time) * 10;
        },
        enumerable: true,
        configurable: true
    });
    KamiProgressBar.prototype.setProperties = function () {
        this.props = this.observe({
            width: 0,
            time: 0,
            type: Type_1.default.INFO
        });
    };
    KamiProgressBar.prototype.start = function () {
        this.interval = setInterval(this.progress.bind(this), 10);
    };
    KamiProgressBar.prototype.progress = function () {
        if (this.props.width <= 0) {
            clearInterval(this.interval);
        }
        else {
            this.props.width = this.props.width - this.deltaWidth;
        }
    };
    KamiProgressBar.prototype.renderHtml = function () {
        return "\n            <div class=\"progressbar\">\n            </div>\n        ";
    };
    KamiProgressBar.prototype.renderStyle = function () {
        return "\n            .progressbar{\n                position: absolute;\n                width: " + this.props.width + "px;\n                height: 5px;\n                background-color: " + this.color + ";\n                bottom: 0;\n                left: 0;\n                border-radius: .2857rem;\n            }\n        ";
    };
    return KamiProgressBar;
}(kami_component_1.default));
exports.default = KamiProgressBar;
//# sourceMappingURL=KamiProgressBar.js.map