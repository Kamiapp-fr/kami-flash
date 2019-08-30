"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// polyfill
require("@webcomponents/webcomponentsjs/custom-elements-es5-adapter");
require("@webcomponents/webcomponentsjs/webcomponents-bundle");
require("web-animations-js");
var KamiFlash_1 = require("./components/KamiFlash");
var KamiProgressBar_1 = require("./components/KamiProgressBar");
// define the iron-icon component if is not already define
if (!customElements.get('iron-icon')) {
    Promise.resolve().then(function () { return require('@polymer/iron-icons'); }).catch(function (error) { return console.error(error); });
    Promise.resolve().then(function () { return require('@polymer/iron-icon'); }).catch(function (error) { return console.error(error); });
}
// define the search if is not already define
if (!customElements.get(KamiProgressBar_1.default.tag)) {
    customElements.define(KamiProgressBar_1.default.tag, KamiProgressBar_1.default);
}
exports.default = KamiFlash_1.default;
//# sourceMappingURL=index.js.map