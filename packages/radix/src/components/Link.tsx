import styled from 'styled-components';
import css from '@styled-system/css';
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  compose,
} from 'styled-system';

type LinkProps = ColorProps & FontSizeProps & { to?: string };

const styleProps = compose(
  color,
  fontSize
);

// TODO: Fix color typings
// @ts-ignore
export const Link = styled('a')<LinkProps>(
  css({
    color: 'blue',
    textDecoration: 'none',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  styleProps
);
