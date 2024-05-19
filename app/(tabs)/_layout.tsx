import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Notitfications from './notitfications'; 


const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Account"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Report"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notitfications"
          options={{
            headerShown: false, 
          }}
        />
      </Stack>
      <StatusBar backgroundColor="transparent" style="light" />
    </>
  );
};

export default AuthLayout;
