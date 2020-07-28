import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RegisterContext from './app/context/RegisterContext';
import RegisterStack from './app/navigation/RegistrationStack';

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@domain.com',
      password: '12345aA',
      type: 'registered',
      sms: '+6391254687154',
      user_last_login: null,
    },
    {
      id: 2,
      name: 'Kevin Dave',
      email: 'kevin@domain.com',
      password: '12345aA',
      type: 'suspended',
      sms: '+6391254687154',
      user_last_login: null,
    },
  ]);

  const handleGetData = (user) => {
    const result = data.find((d) => d.email == user.email);
    console.log(data);
    return result;
  };

  const handleAddData = (userData) => {
    const user = handleGetData(userData);
    if (user) return false;

    setData([...data, {id: data.count + 1, ...userData}]);

    return true;
  };

  const handleSignIn = (userData) => {
    const result = data.find(
      (d) => d.email == userData.email && d.password == userData.password,
    );

    if (!result) return 'Email or Password is incorrect';

    if (result.type == 'suspended') return 'Account is suspended';

    if (result.type == 'notverified') return 'Please verify your account';

    return 'Successfully login';
  };

  return (
    <RegisterContext.Provider
      value={{
        value: data,
        onhandleAddData: handleAddData,
        onhandleSignIn: handleSignIn,
      }}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <RegisterStack />
        </SafeAreaView>
      </NavigationContainer>
    </RegisterContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
