import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantType';
import textVariants from './variants';

type TextElements = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextProps<C extends TextElements> = PolymorphicComponentPropWithRef<
  C,
  VariantProps<typeof textVariants>
>;

const Text = React.forwardRef(
  (props: TextProps<TextElements>, ref: PolymorphicRef<TextElements>) => {
    const {
      as,
      className,
      size,
      align,
      weight,
      color,
      pseudos,
      transform,
      verticalAlign,
      ...rest
    } = props;

    const Component = (as || 'span') as React.ElementType;

    return (
      <Component
        ref={ref}
        className={textVariants({
          size,
          weight,
          align,
          color,
          transform,
          verticalAlign,
          pseudos,
          className,
        })}
        {...rest}
      />
    );
  }
);

export default Text;
