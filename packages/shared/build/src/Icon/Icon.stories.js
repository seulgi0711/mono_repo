"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = void 0;
var ramda_1 = require("ramda");
var react_1 = __importStar(require("react"));
var index_1 = __importStar(require("./index"));
exports.default = {
    title: 'Example/Icon',
    component: index_1.default,
};
// export const Default = Template.bind({});
var All = function () {
    var ref = react_1.useRef(null);
    var _a = react_1.useState([]), symbolNodeList = _a[0], setSymbolNodeList = _a[1];
    var handleLoad = function (event) {
        var document = event.target.contentDocument;
        if (!document)
            return;
        var symbols = Array.prototype.slice.call(document.querySelectorAll('symbol'));
        setSymbolNodeList(symbols);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("object", { style: { position: 'absolute', visibility: 'hidden' }, "aria-label": "sprite-sheet", data: index_1.iconBaseUrl, onLoad: handleLoad, ref: ref }),
        ramda_1.map(function (symbol) {
            return (react_1.default.createElement("div", { key: symbol.id },
                react_1.default.createElement("span", null, symbol.id),
                react_1.default.createElement(index_1.default, { name: symbol.id, width: 15, height: 15 })));
        }, symbolNodeList)));
};
exports.All = All;
// export const Large = Template.bind({});
// Large.args = {
//   children: 'Button',
// };
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   children: 'Button',
// };
