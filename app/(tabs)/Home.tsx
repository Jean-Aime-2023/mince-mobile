import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import services from '@/data/services';
import transactions from '@/data/transactions';
import { PoppinText } from '@/components/StyledText';

const home = () => {
  return (
    <ScrollView style={tw`mt-20`}>
      <View style={[styles.profileNav, tw`px-6`]}>
        <View style={styles.profileText}>
          <PoppinText style={tw`text-[#6B6B6B] text-[15px]`}>Welcome</PoppinText>
          <PoppinText style={tw`text-[#fff] text-[15px]`}>Ange Nadette</PoppinText>
        </View>
        <Ionicons
          name="notifications"
          color={'#fff'}
          style={tw`relative`}
          size={23}
        />
      </View>
      <View style={tw`w-full py-10 pl-4`}>
        <Image
          source={require('@/assets/images/card.png')}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.services, tw`px-6 flex-col gap-5`]}>
        <PoppinText style={[tw`text-[#fff] text-[15px]`,styles.desc]}>Our Services</PoppinText>
        <ScrollView
          horizontal
          style={tw`w-full`}
          contentContainerStyle={tw`grid grid-cols-4 gap-5`}
          showsHorizontalScrollIndicator={false}
        >
          {services.map((service) => (
            <Pressable
              key={service.id}
              style={tw`border border-gray-700 p-5 justify-center items-center gap-2 rounded-[10px] w-[94px] h-[78px]`}
            >
              <Image source={service.image} resizeMode="contain" />
              <PoppinText style={tw`text-[#fff] text-[12px]`}>{service.text}</PoppinText>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View style={[styles.services, tw`px-6 flex-col gap-5 mt-10`]}>
        <PoppinText style={[tw`text-[#fff]`,styles.desc]}>Recent Transactions</PoppinText>
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
  );
};

export default home;

const styles = StyleSheet.create({
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
});
