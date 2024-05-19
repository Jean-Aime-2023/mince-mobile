import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import FormInput from '@/components/FormInput';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const Register = () => {
  return (
    <SafeAreaView style={[styles.containerRegister, tw`h-full`]}>
      <ScrollView>
        <View
          style={[
            {
              minHeight: Dimensions.get('window').height - 100,
            },
            tw`w-full flex items-center my-16 gap-7`,
          ]}
        >
          <Image
            source={require('@/assets/images/mince1.png')}
            resizeMode="cover"
            style={tw`mb-6`}
          />
          <View style={[tw`w-full flex flex-col gap-10 px-6`]}>
            <View style={[tw`w-full flex flex-col gap-4`]}>
              <FormInput placeholder={'Username'} />
              <FormInput placeholder={'Email'} />
              <FormInput placeholder={'Password'} />
              <FormInput placeholder={'Confirm Password'} />
            </View>
            <CustomButton
              title="Create account"
              customStyles="bg-[#fff]"
              customText="text-[#0A1027]"
            />
            <CustomButton
              title="Continue With Google"
              customStyles="bg-transparent border-2 border-gray-700"
              icon={require('@/assets/images/googleLogo.png')}
              customText="text-[#fff]"
            />
            <Text
              style={[tw`text-[#6B6B6B] text-[13px]`, { textAlign: 'center' }]}
            >
              Already have an account?{' '}
              <Link href="/login" style={tw`text-white`}>
                Login here
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  containerRegister: {
    width: '100%',
    backgroundColor: '#0A1027',
  },
});