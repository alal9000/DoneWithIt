import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function FormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => handleChange(name)(text)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormField;
