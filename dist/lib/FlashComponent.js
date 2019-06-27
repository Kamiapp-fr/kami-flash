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
var FlashComponent = /** @class */ (function (_super) {
    __extends(FlashComponent, _super);
    function FlashComponent() {
        var _this = _super.call(this) || this;
        console.log('ok');
        return _this;
    }
    FlashComponent.prototype.initEventListener = function () {
    };
    FlashComponent.prototype.setProperties = function () {
    };
    FlashComponent.prototype.renderHtml = function () {
        return '';
    };
    FlashComponent.prototype.renderStyle = function () {
        return '';
    };
    return FlashComponent;
}(kami_component_1.default));
exports.default = FlashComponent;
//# sourceMappingURL=FlashComponent.js.map