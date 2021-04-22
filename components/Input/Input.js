import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = ({
  id,
  name,
  label,
  type = 'text',
  error = false,
  multiline = false,
  className,
  ...rest
}) => {
  const inputId = id ? id : name;
  const Component = multiline ? 'textarea' : 'input';
  return (
    <>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-gray-700 text-lg font-bold mb-2"
        >
          {label}
        </label>
      )}
      <Component
        id={inputId}
        type={type}
        name={name}
        className={clsx(
          'appearance-none border border-gray-300 focus:outline-none p-3 rounded-md w-full',
          error && 'border-red-500',
          className
        )}
        {...rest}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  error: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
};

export default Input;
