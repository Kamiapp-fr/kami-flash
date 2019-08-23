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
var KamiProgressBar = /** @class */ (function (_super) {
    __extends(KamiProgressBar, _super);
    function KamiProgressBar(_a) {
        var width = _a.width, time = _a.time;
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.props.width = width;
        _this.props.time = time;
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
            time: 0
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
        return "\n            .progressbar{\n                position: absolute;\n                width: " + this.props.width + "px;\n                height: 5px;\n                background-color: red;\n                bottom: 0;\n                left: 0;\n            }\n        ";
    };
    return KamiProgressBar;
}(kami_component_1.default));
exports.default = KamiProgressBar;
//# sourceMappingURL=KamiProgressBar.js.map