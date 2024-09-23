// eslint-disable-next-line react/prop-types
const FormikErr = ({ touched, errors }) => {
  return (
    <>
      <small className="text-sm text-red-500">{touched && errors}</small>
    </>
  );
};

export default FormikErr;
