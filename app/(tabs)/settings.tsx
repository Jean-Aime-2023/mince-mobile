import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PoppinText } from '@/components/StyledText';
import CustomButton from '@/components/CustomButton';
import EditProfile from '@/data/EditProfile';
import { Ionicons } from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners'

const account = () => {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <SafeAreaView style={[styles.container, tw`py-4`]}>
      <ScrollView style={tw`relative`}>
        <Pressable style={tw`absolute right-6 top-3`}>
          <Ionicons name="log-in-outline" size={30} color={'#fff'} />
        </Pressable>
        <View style={tw`flex flex-col justify-center items-center gap-10 px-6`}>
          <View
            style={tw`w-full flex flex-col gap-3 items-center justify-center`}
          >
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600',
              }}
              style={[{ width: 100, height: 100 }, tw`rounded-full`]}
            />
            <PoppinText style={tw`text-[#fff]`}>Ange Nadette BATETE</PoppinText>
            <PoppinText style={tw`text-[#fff]`}>
              bateteangenadette@gmail.com
            </PoppinText>
            <CustomButton
              title={'Edit profile'}
              customStyles="bg-[#353D65] w-[127px]"
              customText="text-[#fff] text-[13px]"
            />
          </View>
          <View style={tw`flex flex-col`}>
            {EditProfile.map((action, index) => (
              <Pressable
                key={action.id}
                style={tw`flex-row items-center justify-between p-4 w-full`}
              >
                <View style={tw`flex-row items-center gap-4`}>
                  <View style={tw`border-2 border-gray-700 rounded-lg p-3`}>
                    <Image source={action.image} resizeMode="contain" />
                  </View>
                  <PoppinText style={tw`text-[14px] text-white`}>
                    {action.text}
                  </PoppinText>
                </View>
                {index === EditProfile.length - 1 ? (
                  <Switch value={darkMode} onValueChange={(value)=>{setDarkMode(value);EventRegister.emit('Change Theme',value)}} />
                ) : (
                  <Ionicons
                    name="chevron-forward-outline"
                    size={25}
                    color={'#fff'}
                  />
                )}
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A1027',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
