import React, {useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Loading from '../../components/Loading/Loading';
import AppButton from '../../components/AppButton/AppButton';
import AppText from '../../components/AppText/AppText';
import {regularExpression} from '../../config/regularExpression';
import {
  Container,
  Label,
  MemberNavigationContainer,
  PhoneContainer,
  SignInNav,
  Title,
} from './registerStyles';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useExternalIP from '../../hooks/useExternalIP';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().min(4).label('Firstname'),
  lastname: Yup.string().required().min(4).label('Lastname'),
  email: Yup.string().required().email().label('Email'),
  countryCode: Yup.string()
    .required()
    .max(4)
    .matches(regularExpression.countryCode, 'Country code is not valid')
    .label('Country Code'),
  smsNumber: Yup.number().required().min(10).label('SMS number'),
});

export default function Register({navigation}) {
  const {data, error, loading, getExternalIP} = useExternalIP(
    'country_calling_code',
  );
  useEffect(() => {
    getExternalIP();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        countryCode: data + '',
        smsNumber: '',
      }}
      onSubmit={(values) => navigation.navigate('Password', values)}
      validationSchema={validationSchema}>
      {({
        errors,
        handleChange,
        handleSubmit,
        setFieldTouched,
        touched,
        values,
      }) => (
        <Container behavior="Platform.OS === 'ios' ? 40 : 0">
          <Title>Create an account</Title>
          <AppText
            autoCorrect={false}
            onChangeText={handleChange('firstname')}
            name="firstname"
            onBlur={() => setFieldTouched('firstname')}
            placeholder="First name"
          />
          <ErrorMessage
            visible={touched.firstname}
            message={errors.firstname}
          />

          <AppText
            autoCorrect={false}
            onChangeText={handleChange('lastname')}
            name="lastname"
            onBlur={() => setFieldTouched('lastname')}
            placeholder="Last name"
          />

          <ErrorMessage visible={touched.lastname} message={errors.lastname} />
          <AppText
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            onBlur={() => setFieldTouched('email')}
            onChangeText={handleChange('email')}
            placeholder="Email"
            textContentType="emailAddress"
          />
          <ErrorMessage visible={touched.email} message={errors.email} />
          <PhoneContainer>
            {loading ? (
              <Loading />
            ) : (
              <AppText
                autoCorrect={false}
                countryCode
                name="countryCode"
                onBlur={() => setFieldTouched('countryCode')}
                onChangeText={handleChange('countryCode')}
                placeholder="+639"
                maxLength={4}
                value={values.countryCode}
              />
            )}

            <AppText
              autoCorrect={false}
              name="smsNumber"
              onBlur={() => setFieldTouched('smsNumber')}
              onChangeText={handleChange('smsNumber')}
              placeholder="9171234567"
              maxLength={10}
              sms
            />
          </PhoneContainer>
          <ErrorMessage
            visible={touched.countryCode}
            message={errors.countryCode}
          />
          <ErrorMessage
            visible={touched.smsNumber}
            message={errors.smsNumber}
          />

          <AppButton onPress={handleSubmit} name="next" />
          <MemberNavigationContainer>
            <Label>Already a member</Label>
            <SignInNav onPress={() => navigation.navigate('signin')}>
              Sign in
            </SignInNav>
          </MemberNavigationContainer>
        </Container>
      )}
    </Formik>
  );
}
