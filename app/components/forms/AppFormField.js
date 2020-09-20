import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, style, ...otherProps }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        style={style}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFormField;
