import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Idiomas from './src/screens/Idiomas'; // Asume que tienes una pantalla Idiomas
import LoginScreen_2 from './src/screens/LoginScreen_2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen_2} />
        <Stack.Screen name="Idiomas" component={Idiomas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
