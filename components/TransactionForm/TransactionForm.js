import * as Yup from 'yup';
import Input from '../Input';
import Link from 'next/link';
import Button from '../Button';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

const validationSchema = Yup.object().shape({
  amount: Yup.string().required(),
  note: Yup.string().required(),
  date: Yup.date().required(),
});

const TransactionForm = ({
  initialValues,
  edit = false,
  onSubmit,
  onDelete,
}) => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    enableReinitialize: edit,
  });

  return (
    <form className="w-full p-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input
          name="amount"
          type="number"
          label="Enter amount"
          value={values.amount}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.amount && touched.amount}
        />
        {errors.amount && touched.amount && (
          <p className="text-red-500">{errors.amount}</p>
        )}
      </div>

      <div className="mb-4">
        <Input
          name="note"
          label="Note"
          value={values.note}
          multiline
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.note && touched.note}
        />
        {errors.note && touched.note && (
          <p className="text-red-500">{errors.note}</p>
        )}
      </div>

      <div className="mb-4">
        <Input
          name="date"
          type="date"
          label="Date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.date && touched.date}
        />
        {errors.date && touched.date && (
          <p className="text-red-500">{errors.date}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 text-lg font-bold mb-2"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          onBlur={handleBlur}
          value={values.category}
          onChange={handleChange}
          className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {errors.category && touched.category && <div>{errors.category}</div>}
      </div>

      <hr className="my-14 border-gray-300" />

      <div className="sm:flex sm:items-center sm:justify-between mb-4">
        <Link href="/" passHref>
          <Button color="secondary" className="w-full sm:w-auto mb-3 sm:mb-0">
            Cancel
          </Button>
        </Link>
        <div className="sm:flex sm:flex-row-reverse">
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className="w-full sm:w-auto mb-3 sm:mb-0"
          >
            Save Transaction
          </Button>
          {edit && (
            <Button
              type="button"
              color="secondary"
              onClick={onDelete}
              className="w-full sm:w-auto sm:mr-4"
            >
              Delete
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

TransactionForm.propTypes = {
  initialValues: PropTypes.shape({
    id: PropTypes.string,
    note: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  edit: PropTypes.bool,
  onDelete: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default TransactionForm;
