import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splashscreen from './componentes/Splashscreen';
import Preguntas from './componentes/preguntas';

// Crear una instancia de createNativeStackNavigator y asignarla a Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Splashscreen} 
          options={{ headerShown: false }} // Oculta la barra superior en el Splashscreen
        />
        <Stack.Screen name="Preguntas" component={Preguntas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});