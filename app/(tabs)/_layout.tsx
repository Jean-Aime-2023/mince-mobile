import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React , {useState,useEffect} from 'react';
import { Image, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import tw from 'twrnc';

const TabIconHome = ({ color, focused }: any) => {
  return (
    <View
      style={[
        tw`items-center justify-center gap-2 p-2 rounded-full ${
          focused ? 'bg-[#fff]' : 'bg-transparent'
        }`,
      ]}
    >
      <Image tintColor={color} source={require('@/assets/images/home.png')} />
    </View>
  );
};
const TabIconReport = ({ color, focused }: any) => {
  return (
    <View
      style={[
        tw`items-center justify-center gap-2 p-2 rounded-full ${
          focused ? 'bg-[#fff]' : 'bg-transparent'
        }`,
      ]}
    >
      <Image tintColor={color} source={require('@/assets/images/report.png')} />
    </View>
  );
};
const TabIconAccount = ({ color, focused }: any) => {
  return (
    <View
      style={[
        tw`items-center justify-center gap-2 p-2 rounded-full ${
          focused ? 'bg-[#fff]' : 'bg-transparent'
        }`,
      ]}
    >
      <Image
        tintColor={color}
        source={require('@/assets/images/settings.png')}
      />
    </View>
  );
};

const _layout = () => {
  const [darkMode,setDarkMode]= useState(false)

  useEffect(()=>{
    const listener = EventRegister.addEventListener('ChangeTheme',(data)=>{
      setDarkMode(data)
    })
    return()=>{
      EventRegister.removeAllListeners(listener);
    }
  },[darkMode])
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#0A1027',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#0A1027',
            borderTopWidth: 1,
            borderTopColor: '#374151',
            height: 74,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIconHome color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="report"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIconReport color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIconAccount color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="transparent" style="light" />
    </>
  );
};

export default _layout;
