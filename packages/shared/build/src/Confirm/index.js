"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = __importDefault(require("react"));
var Confirm = function (_a) {
    var title = _a.title;
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(Title, null, title)));
};
var Wrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 400px;\n  height: 306px;\n  padding: 20px;\n"], ["\n  width: 400px;\n  height: 306px;\n  padding: 20px;\n"])));
var Title = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 600;\n  font-size: 16px;\n"], ["\n  font-weight: 600;\n  font-size: 16px;\n"])));
exports.default = Confirm;
var templateObject_1, templateObject_2;
