'use client';

import { FC, ReactNode } from 'react';

// enum TypographyVariantE {
//   H1 = 'h1',
//   H2 = 'h2',
//   H3 = 'h3',
//   H4 = 'h4',
//   H5 = 'h5',
//   BODY1 = 'body1',
//   BODY2 = 'body2',
//   SUBTITLE1 = 'subtitle1',
//   SUBTITLE2 = 'subtitle2',
// }

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2';

type Props = {
  variant?: TypographyVariant;
  children: ReactNode;
};

const variants = {
  h1: (children: ReactNode) => (
    <h1 className="typography-h1">{children}</h1>
  ),
  h2: (children: ReactNode) => (
    <h2 className="typography-h2">{children}</h2>
  ),
  h3: (children: ReactNode) => (
    <h3 className="typography-h3">{children}</h3>
  ),
  h4: (children: ReactNode) => (
    <h4 className="typography-h4">{children}</h4>
  ),
  h5: (children: ReactNode) => (
    <h5 className="typography-h5">{children}</h5>
  ),
  body1: (children: ReactNode) => (
    <p className="typography-body1">{children}</p>
  ),
  body2: (children: ReactNode) => (
    <p className="typography-body2">{children}</p>
  ),
  subtitle1: (children: ReactNode) => (
    <span className="typography-subtitle1">{children}</span>
  ),
  subtitle2: (children: ReactNode) => (
    <span className="typography-subtitle2">{children}</span>
  ),
  DEFAULT: (children: ReactNode) => (
    <span className="typography-body1">{children}</span>
  ),
};

const Typography: FC<Props> = ({ variant, children }) => {
  return variant ? variants[variant](children) : variants.DEFAULT(children);
};

export { Typography };
