import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Onboarding from '@/components/Onboarding/Onboarding';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import FormInput from '@/components/FormInput';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';

const Login = () => {
  return (
    <SafeAreaView style={[styles.containerLogin, tw`h-full`]}>
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
          <View style={[tw`w-full flex flex-col gap-8 px-6`]}>
            <FormInput placeholder={'Phone number, email , username'} />
            <FormInput placeholder={'Password'} />
            <Text
              style={[
                tw`text-[#6B6B6B] text-[13px] pr-2`,
                { textAlign: 'right' },
              ]}
            >
              Forgot Password? <Text style={tw`text-white`}>Click Here</Text>
            </Text>
            <CustomButton
              title="Login"
              customStyles="bg-[#fff]"
              customText="text-[#0A1027]"
              handlePress={() => router.push('/(tabs)')}
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
              Don’t have an account?{' '}
              <Link href="/register" style={tw`text-white`}>
                Register here
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogin: {
    width: '100%',
    backgroundColor: '#0A1027',
  },
});