import React, {useContext, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppButton from '../../components/AppButton/AppButton';
import AppText from '../../components/AppText/AppText';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import {Container, Title} from './PasswordStyles';
import {regularExpression} from '../../config/regularExpression';
import RegisterContext from '../../context/RegisterContext';

const {oneLowerCase, oneUpperCase, regExpNumber} = regularExpression;
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .min(8)
    .matches(regExpNumber, 'At least 1 numeric (0-9)')
    .matches(oneLowerCase, 'At least 1 lowercase (a-z)')
    .matches(oneUpperCase, 'At least 1 lowercase (A-Z)')
    .label('Password'),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export default function Password({route, navigation}) {
  const {value, onhandleAddData} = useContext(RegisterContext);
  const [errorMessage, setErrorMessage] = useState();
  const userInfo = route.params;

  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirm: '',
      }}
      onSubmit={(values) => {
        const response = onhandleAddData({
          ...userInfo,
          password: values.password,
          type: 'notverified',
        });
        if (!response) return setErrorMessage('User already exist');

        navigation.navigate('signin', 'Successfully created account');
      }}
      validationSchema={validationSchema}>
      {({
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldTouched,
        touched,
        values,
      }) => (
        <Container>
          <Title>Create an account</Title>
          <AppText
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <ErrorMessage visible={touched.password} message={errors.password} />
          <AppText
            autoCapitalize="none"
            autoCorrect={false}
            name="passwordConfirm"
            onChangeText={handleChange('passwordConfirm')}
            onBlur={() => setFieldTouched('passwordConfirm')}
            placeholder="Confirm password"
            secureTextEntry
            textContentType="password"
          />
          <ErrorMessage
            visible={touched.passwordConfirm}
            message={errors.passwordConfirm}
          />
          <ErrorMessage visible={errorMessage} message={errorMessage} />
          <AppButton onPress={handleSubmit} name="register" />
        </Container>
      )}
    </Formik>
  );
}
