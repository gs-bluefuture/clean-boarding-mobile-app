import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import TabNavigator from '../components/TabNavigator/TabNavigator';
import { User } from 'firebase/auth'
import DocumentationPage from '../screens/Documents';

type StackComponentProps = {
  user: User | null;
};


const Stack = createNativeStackNavigator();

export default function StackComponent({ user }: StackComponentProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            title: '',
              headerTransparent: true,
              headerShown: false,
              gestureEnabled: false
            }}
            />
          ) : (
            <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Register}
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Portal"
              component={Register}
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Documents"
              component={DocumentationPage}
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
