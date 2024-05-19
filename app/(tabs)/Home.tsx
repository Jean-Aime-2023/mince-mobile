import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc'

const home = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.profileNav,tw`px-6`]}>
        <View style={styles.profileText}>
          <Text style={tw`text-[#6B6B6B]`}>Welcome</Text>
          <Text style={tw`text-[#fff]`}>Ange Nadette</Text>
        </View>
        <Ionicons name='notifications' color={'#fff'} style={tw`relative`} size={23} />
      </View> 
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    width:'100%',
  },
  profileNav:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center'
  },
  profileText:{
    flexDirection:'column'
  }
});
