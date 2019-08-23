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
    function KamiProgressBar() {
        return _super.call(this) || this;
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
    KamiProgressBar.prototype.setProperties = function () {
        this.props = this.observe({});
    };
    KamiProgressBar.prototype.renderHtml = function () {
        return "\n            <div class=\"progressbar\">\n            </div>\n        ";
    };
    KamiProgressBar.prototype.renderStyle = function () {
        return "\n\n        ";
    };
    return KamiProgressBar;
}(kami_component_1.default));
exports.default = KamiProgressBar;
//# sourceMappingURL=KamiProgressBar.js.map