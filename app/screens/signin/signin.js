import React, {useContext, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppButton from '../../components/AppButton/AppButton';
import AppText from '../../components/AppText/AppText';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import {Container, Title} from './signinStyles';
import RegisterContext from '../../context/RegisterContext';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

export default function Signin({route}) {
  const {value, onhandleSignIn} = useContext(RegisterContext);
  const [errorMessage, setErrorMessage] = useState();

  const registerMessage = route.params;

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        const result = onhandleSignIn(values);
        setErrorMessage(result);
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
          <Title>Login</Title>
          <ErrorMessage visible={registerMessage} message={registerMessage} />
          <AppText
            autoCapitalize="none"
            autoCorrect={false}
            name="email"
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder="email"
            textContentType="emailAddress"
          />
          <ErrorMessage visible={touched.email} message={errors.email} />
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
          <ErrorMessage visible={errorMessage} message={errorMessage} />
          <AppButton onPress={handleSubmit} name="Sign In" />
        </Container>
      )}
    </Formik>
  );
}
