import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';

const report = () => {
  return (
    <SafeAreaView style={[styles.container, tw`py-4`]}>
      <ScrollView style={tw`relative`}>
        <Text style={tw`text-[#fff]`}>Report ⁉️</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default report;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A1027',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

