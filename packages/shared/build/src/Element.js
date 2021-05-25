"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@emotion/react");
var styled_1 = __importDefault(require("@emotion/styled"));
var Element = styled_1.default.span(function (props) {
    return react_1.css({
        boxSizing: 'border-box',
        margin: props.margin,
        marginX: props.marginX,
        marginY: props.marginY,
        marginBottom: props.marginBottom,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        padding: props.padding,
        paddingX: props.paddingX,
        paddingY: props.paddingY,
        paddingBottom: props.paddingBottom,
        paddingTop: props.paddingTop,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
    });
});
exports.default = Element;
