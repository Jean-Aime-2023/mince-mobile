import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw, { style } from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PoppinText } from '@/components/StyledText';
import CustomButton from '@/components/CustomButton';

const Account = () => {
  return (
    <SafeAreaView>
      <View style={tw`flex flex-col gap-10`}>
        <View style={tw`flex flex-col gap-7`}>
          <Image source={{ uri: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={[{ width: 100, height: 100 },tw`rounded-full`]} />
          <PoppinText>Ange Nadette BATETE</PoppinText>
          <PoppinText>bateteangenadette@gmail.com</PoppinText>
          <CustomButton title={'Edit profile'} customStyles='bg-[#353D65]' customText='text-[#fff]' />
        </View>
        <View style={tw`flex flex-col gap-7`}>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
