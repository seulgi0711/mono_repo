"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@emotion/react");
var react_2 = __importDefault(require("react"));
var theme_1 = __importDefault(require("./theme"));
var ThemeProvider = function (_a) {
    var children = _a.children;
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement(react_1.ThemeProvider, { theme: theme_1.default }, children)));
};
exports.default = ThemeProvider;
