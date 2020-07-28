import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Password from '../screens/password/Password';
import Register from '../screens/register/Register';
import Signin from '../screens/signin/signin';

const RegisterStack = createStackNavigator();

export default function RegistrationStack() {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        options={{
          headerShown: false,
        }}
        name="Register"
        component={Register}
      />
      <RegisterStack.Screen name="Password" component={Password} />
      <RegisterStack.Screen name="signin" component={Signin} />
    </RegisterStack.Navigator>
  );
}
