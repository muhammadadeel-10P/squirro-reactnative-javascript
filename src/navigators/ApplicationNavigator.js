import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '@/screens/home/HomeScreen';
import {Colors} from '@/utils/Colors';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primaryBlue, // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the color of the header title and buttons
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
