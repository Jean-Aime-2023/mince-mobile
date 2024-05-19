import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc'

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={tw`text-[#fff]`}>Report ⁉️</Text>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
