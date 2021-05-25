"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var _1 = __importDefault(require("."));
exports.default = {
    title: 'Example/Confirm',
    component: _1.default,
};
// export const Default = Template.bind({});
var Default = function () {
    return react_1.default.createElement(_1.default, { title: "\uADFC\uBB34\uC81C\uB3C4 \uC0DD\uC131" });
};
exports.Default = Default;
// export const Large = Template.bind({});
// Large.args = {
//   children: 'Button',
// };
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   children: 'Button',
// };
