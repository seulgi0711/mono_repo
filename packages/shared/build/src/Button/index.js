"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@emotion/react");
var styled_1 = __importDefault(require("@emotion/styled"));
var react_2 = __importDefault(require("react"));
var Element_1 = __importDefault(require("../Element"));
var Button = function (_a) {
    var as = _a.as, props = __rest(_a, ["as"]);
    var usedAs = as || props.to ? 'a' : 'button';
    return (react_2.default.createElement(StyledElement, __assign({ as: usedAs, type: "button" }, props)));
};
var StyledElement = styled_1.default(Element_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  border-radius: 4px;\n  border: 0;\n  padding: ", ";\n  font-weight: 600;\n  font-size: 14px;\n\n  ", ";\n"], ["\n  cursor: pointer;\n  border-radius: 4px;\n  border: 0;\n  padding: ", ";\n  font-weight: 600;\n  font-size: 14px;\n\n  ",
    ";\n"])), function (props) { return (props.icon ? '8px 16px' : '16px'); }, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, theme = _a.theme;
    return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), theme.colors[variant]);
});
exports.default = Button;
var templateObject_1, templateObject_2;
