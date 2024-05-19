import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

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
      </Stack>
      <StatusBar backgroundColor="transparent" style="light" />
    </>
  );
};

export default AuthLayout;
