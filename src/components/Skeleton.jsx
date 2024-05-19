import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Skeleton = ({ loading, children, variant, animation }) => {
  const [dimensions, setDimensions] = useState({ width: '100%', height: 'auto' });
  const ref = useRef();

  useEffect(() => {
    if (loading && ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [loading]);

  if (loading) {
    const skeletonClasses = classNames(
      'bg-gray-200 dark:bg-gray-700',
      animation === 'pulse' && 'animate-pulse',
      animation === 'wave' && 'animate-wave',
      variant === 'text' && 'h-6 w-full',
      variant === 'circle' && 'h-12 w-12 rounded-full',
      variant === 'rect' && 'w-full'
    );

    const skeletonStyle = {
      width: dimensions.width,
      height: dimensions.height,
    };

    return <div className={skeletonClasses} style={skeletonStyle}></div>;
  }

  return React.cloneElement(children, { ref });
};

Skeleton.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  variant: PropTypes.oneOf(['text', 'rect', 'circle']),
  animation: PropTypes.oneOf(['pulse', 'wave']),
};

Skeleton.defaultProps = {
  variant: 'rect',
  animation: 'pulse',
};

export default Skeleton;
