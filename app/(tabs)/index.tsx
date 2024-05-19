import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './Home'
import Report from './Report'
import Account from './Account'


export default class index extends React.Component {
  state = {
    screenText: 'home',
    selectedIcon: 'home',
  };

  changeText = (text: string) => {
    console.log(text + ' has been pressed ');
    this.setState({
      screenText: text,
      selectedIcon: text,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={tw`mt-12`}>
            {/* <Text style={[tw`text-[#fff]`]}>{this.state.screenText}</Text> */}
            {this.state.selectedIcon === 'home' && <Home/>}
            {this.state.selectedIcon === 'report' && <Report/>}
            {this.state.selectedIcon === 'account' && <Account/>}
        </SafeAreaView>
        <View style={styles.navContainer}>
          <View style={[styles.navBar, tw`p-3 px-5 border border-black/30`]}>
            <Pressable 
              onPress={() => this.changeText('home')} 
              style={[styles.IconBehave, this.state.selectedIcon === 'home' && styles.selectedIcon]} 
              android_ripple={{ borderless: true, radius: 50 }}
            >
              <Ionicons name='home' color={this.state.selectedIcon === 'home' ? '#0A1027' : '#fff'} size={23} />
            </Pressable>
            <Pressable 
              onPress={() => this.changeText('report')} 
              style={[styles.IconBehave, this.state.selectedIcon === 'report' && styles.selectedIcon]} 
              android_ripple={{ borderless: true, radius: 50 }}
            >
              <Ionicons name='alert-circle' color={this.state.selectedIcon === 'report' ? '#0A1027' : '#fff'} size={23} />
            </Pressable>
            <Pressable 
              onPress={() => this.changeText('account')} 
              style={[styles.IconBehave, this.state.selectedIcon === 'account' && styles.selectedIcon]} 
              android_ripple={{ borderless: true, radius: 50 }}
            >
              <Ionicons name='person' color={this.state.selectedIcon === 'account' ? '#0A1027' : '#fff'} size={23} />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1027',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navContainer: {
    marginBottom:90,
    marginTop:10
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#0A1027',
    width: '95%',
    justifyContent: 'space-between',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 10, // for Android shadow
  },
  IconBehave: {
    padding: 10,
    borderRadius: 50,
  },
  selectedIcon: {
    backgroundColor: '#fff',
  },
});


