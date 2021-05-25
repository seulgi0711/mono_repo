"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconPrimary = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = __importDefault(require("./index"));
exports.default = {
    title: 'Example/Button',
    component: index_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return react_1.default.createElement(index_1.default, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    variant: 'primary',
    children: 'Primary Button',
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    variant: 'secondary',
    children: 'Secondary Button',
};
exports.IconPrimary = Template.bind({});
exports.IconPrimary.args = {
    variant: 'primary',
    children: 'Icon Primary Button',
};
// export const Large = Template.bind({});
// Large.args = {
//   children: 'Button',
// };
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   children: 'Button',
// };
