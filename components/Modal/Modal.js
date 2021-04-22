import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      bodyOpenClassName="overflow-hidden w-full h-full"
      className="absolute top-1/2	left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 md:max-w-lg shadow-lg rounded-lg outline-none overflow-auto"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity overflow-hidden z-50"
    >
      {title && (
        <div className="flex align-center px-6 py-4 bg-white border-b border-gray-300">
          <h3 className="text-lg">{title}</h3>
        </div>
      )}
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
