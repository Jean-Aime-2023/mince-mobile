import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import services from '@/data/services';
import transactions from '@/data/transactions';
import { PoppinText, PoppinsBold, PoppinsSemibold } from '@/components/StyledText';
import cards from '@/data/cards';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const home = () => {
  return (
    <SafeAreaView style={[styles.container,tw`pt-8 pb-2`]}>
      <ScrollView>
      <View style={[styles.profileNav, tw`px-6`]}>
        <View style={styles.profileText}>
          <PoppinText style={tw`text-[#6B6B6B] text-[15px]`}>
            Welcome
          </PoppinText>
          <PoppinText style={tw`text-[#fff] text-[15px]`}>
            Ange Nadette
          </PoppinText>
        </View>
        <Pressable style={tw`relative`} onPress={() => router.push('/notify')}>
          <Image source={require('@/assets/images/notifDot.png')} resizeMode='contain' style={tw`absolute right-0 top-0 z-10`} />
          <Ionicons
            name="notifications-outline"
            color={'#6B6B6B'}
            style={tw`relative`}
            size={23}
          />
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`w-full py-10 px-4`}
        contentContainerStyle={tw`flex-row gap-6`}
      >
        {cards.map((card) => (
          <Image key={card.id} source={card.image} resizeMode="contain" style={tw`w-[300px] h-[180px]`} />
        ))}
      </ScrollView>
      <View style={[styles.services, tw`px-6 flex-col gap-5`]}>
        <PoppinsSemibold style={[tw`text-[#fff] text-[17px]`, styles.desc]}>
          Our Services
        </PoppinsSemibold>
        <ScrollView
          horizontal
          style={tw`w-full`}
          contentContainerStyle={tw`flex-row gap-6`}
          showsHorizontalScrollIndicator={false}
        >
          {services.map((service) => (
            <Pressable
              key={service.id}
              style={tw`border border-gray-700 p-5 justify-center items-center gap-2 rounded-[10px] w-[94px] h-[78px]`}
            >
              <Image source={service.image} resizeMode="contain" />
              <PoppinText style={tw`text-[#fff] text-[12px]`}>
                {service.text}
              </PoppinText>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View style={[styles.services, tw`px-6 flex-col gap-5 mt-10`]}>
        <PoppinsSemibold style={[tw`text-[#fff] text-[17px]`, styles.desc]}>
          Recent Transactions
        </PoppinsSemibold>
        <View style={tw`gap-5`}>
          {transactions.map((transaction) => (
            <Pressable
              key={transaction.id}
              style={tw`flex-row border border-gray-700 px-5 py-4 justify-between rounded-[10px] w-full items-center`}
            >
              <View style={tw`gap-7 flex-row items-center`}>
                <Image
                  source={transaction.image}
                  resizeMode="contain"
                  style={tw`w-[30px] h-[30px]`}
                />
                <View style={tw`flex-col`}>
                  <PoppinText style={tw`text-[#fff]`}>
                    {transaction.title}
                  </PoppinText>
                  <PoppinText style={tw`text-[#6B6B6B]`}>
                    {transaction.date}
                  </PoppinText>
                </View>
              </View>
              <PoppinText style={tw`text-[#fff] text-[16px]`}>
                {transaction.price}
              </PoppinText>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#0A1027',
    flex:1
  },
  profileNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  profileText: {
    flexDirection: 'column',
  },
  services: {
    flexDirection: 'column',
    gap: 6,
  },
  desc: {
    fontWeight: '400',
    fontSize: 15,
  },
  image:{
    width:"100%",
    height:"100%"
  }
});
