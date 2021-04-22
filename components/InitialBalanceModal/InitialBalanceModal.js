import * as Yup from 'yup';
import Input from '../Input';
import Modal from '../Modal';
import Button from '../Button';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import {
  editInitialBalance,
  selectInitialBalance,
} from '../../store/app/walletSlice';
import { useDispatch, useSelector } from 'react-redux';

const validationSchema = Yup.object().shape({
  initialBalance: Yup.number()
    .min(0, 'Initial balance must be greater than or equal to 0')
    .required('Initial balance is a required field'),
});

const InitialBalanceModal = ({ isOpen, onClose }) => {
  const initialBalance = useSelector(selectInitialBalance);
  const dispatch = useDispatch();

  const handleEditInitialBalance = (values) => {
    dispatch(editInitialBalance(values.initialBalance));
    onClose();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    handleReset,
  } = useFormik({
    validationSchema,
    enableReinitialize: true,
    onSubmit: handleEditInitialBalance,
    initialValues: { initialBalance },
  });

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Edit Initial Balance">
      <form className="bg-gray-50" onSubmit={handleSubmit}>
        <div className="p-6 mb-4">
          <Input
            type="number"
            name="initialBalance"
            label="Initial Balance"
            value={values.initialBalance}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.initialBalance && touched.initialBalance}
          />
          {errors.initialBalance && touched.initialBalance && (
            <p className="text-red-500">{errors.initialBalance}</p>
          )}
        </div>
        <div className="sm:flex sm:items-center sm:justify-between px-6 py-4 border-t border-gray-300">
          <Button
            type="button"
            color="secondary"
            onClick={handleClose}
            className="w-full sm:w-auto mb-3 sm:mb-0 sm:mr-4"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className="w-full sm:w-auto"
          >
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

InitialBalanceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default InitialBalanceModal;
