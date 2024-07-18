import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Idiomas from './src/screens/Idiomas';
import Untitled from './src/screens/Untitled';
import LoginScreen_2 from './src/screens/LoginScreen_2';
import SignUpScreen from './src/screens/SignUpScreen_2.1';
import Interpreter from './src/screens/Interpreter_3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Interpreter">
        <Stack.Screen name="Login" component={LoginScreen_2} />
        <Stack.Screen name="Idiomas" component={Idiomas} />
        <Stack.Screen name="Untitled" component={Untitled} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="Interpreter" component={Interpreter}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
