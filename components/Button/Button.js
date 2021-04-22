import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function getColorClasses(variant, color) {
  let bgColor = '';

  if (color === 'primary') {
    bgColor = 'yellow';
  }

  if (color === 'secondary') {
    bgColor = 'blue';
  }

  if (variant === 'contained') {
    return `bg-${bgColor}-300 hover:bg-${bgColor}-500`;
  }

  return `hover:bg-${bgColor}-50`;
}

const Button = forwardRef(
  ({ color = 'primary', variant = 'text', className, ...rest }, ref) => {
    const Component = rest.href ? 'a' : 'button';

    const defaultClasses =
      'inline-flex justify-center items-center px-4 py-2 font-semibold rounded focus:outline-none';

    return (
      <Component
        ref={ref}
        className={clsx(
          defaultClasses,
          getColorClasses(variant, color),
          className
        )}
        {...rest}
      />
    );
  }
);

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
