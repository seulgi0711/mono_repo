/// <reference types="react" />
export interface ElementProps {
    margin?: number;
    marginX?: number;
    marginY?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    padding?: number;
    paddingX?: number;
    paddingY?: number;
    paddingBottom?: number;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
}
declare const Element: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ElementProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export default Element;
//# sourceMappingURL=Element.d.ts.map