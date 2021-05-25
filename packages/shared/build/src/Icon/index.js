"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconBaseUrl = void 0;
var react_1 = __importDefault(require("react"));
var sprite_sheet_svg_1 = __importDefault(require("../../build/sprite-sheet.svg"));
exports.iconBaseUrl = sprite_sheet_svg_1.default;
var Icon = function (_a) {
    var name = _a.name, width = _a.width, height = _a.height;
    return (react_1.default.createElement("svg", { width: width, height: height },
        react_1.default.createElement("use", { xlinkHref: exports.iconBaseUrl + "#" + name })));
};
exports.default = Icon;
