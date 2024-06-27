import React from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphicTypes';
import { VariantProps } from '../../types/variantType';
import gridVariants from './variants';

type GridElements = 'div' | 'span' | 'nav';
export type GridProps = PolymorphicComponentPropWithRef<
  GridElements,
  VariantProps<typeof gridVariants>
>;

const Grid = React.forwardRef(
  (props: GridProps, ref: PolymorphicRef<GridElements>) => {
    const {
      as,
      className,
      m,
      mb,
      mt,
      ms,
      me,
      mx,
      my,
      p,
      pt,
      pb,
      ps,
      pe,
      px,
      py,
      gap,
      gapX,
      gapY,
      spaceX,
      spaceY,
      top,
      left,
      bottom,
      right,
      display = 'grid',
      position,
      opacity,
      aspectRatio,
      border,
      radius,
      borderStyle,
      borderBottom,
      borderTop,
      borderLeft,
      borderRight,
      width,
      height,
      scale,
      scaleX,
      scaleY,
      origin,
      rotate,
      translateX,
      translateY,
      transition,
      transitionDuration,
      transitionDelay,
      transitionTimingFunction,
      cursor,
      pointer,
      resize,
      borderColor,
      backgroundColor,
      flex,
      flexBasis,
      alignSelf,
      placeSelf,
      justifySelf,
      alignItems,
      placeItems,
      justifyItems,
      alignContent,
      placeContent,
      justifyContent,
      gridRow,
      gridColumn,
      gridRowStart,
      gridRowEnd,
      gridColumnStart,
      gridColumnEnd,
      gridRowSpan,
      gridColumnSpan,
      pseudos,
      ...rest
    } = props;
    const Component = (as || 'div') as React.ElementType;

    return (
      <Component
        className={gridVariants({
          m,
          mb,
          mt,
          ms,
          me,
          mx,
          my,
          p,
          pt,
          pb,
          ps,
          pe,
          px,
          py,
          gap,
          gapX,
          gapY,
          spaceX,
          spaceY,
          top,
          left,
          bottom,
          right,
          display,
          position,
          opacity,
          aspectRatio,
          border,
          radius,
          borderStyle,
          borderBottom,
          borderTop,
          borderLeft,
          borderRight,
          width,
          height,
          scale,
          scaleX,
          scaleY,
          origin,
          rotate,
          translateX,
          translateY,
          transition,
          transitionDuration,
          transitionDelay,
          transitionTimingFunction,
          cursor,
          pointer,
          resize,
          borderColor,
          backgroundColor,
          flex,
          flexBasis,
          alignSelf,
          placeSelf,
          justifySelf,
          alignItems,
          placeItems,
          justifyItems,
          alignContent,
          placeContent,
          justifyContent,
          gridRow,
          gridColumn,
          gridRowStart,
          gridRowEnd,
          gridColumnStart,
          gridColumnEnd,
          gridRowSpan,
          gridColumnSpan,
          pseudos,
          className,
        })}
        {...rest}
      />
    );
  }
);

export default Grid;
