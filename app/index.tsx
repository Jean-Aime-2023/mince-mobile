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

const index = () => {
  return (
    <View style={styles.container}>
      <Onboarding/>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
