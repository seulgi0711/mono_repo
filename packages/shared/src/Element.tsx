import { css } from '@emotion/react';
import styled from '@emotion/styled';

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

const Element = styled.span<ElementProps>((props) => {
  return css({
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

export default Element;
