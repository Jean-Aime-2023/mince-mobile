import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PoppinText } from './StyledText';
import tw from 'twrnc';

const Notification = ({ image, title, desc, time, dot, btn }: any) => {
  return (
    <View style={tw`border-2 border-gray-700 rounded-lg relative w-full mb-5`}>
      {dot === true ? (
        <Image
          source={require('@/assets/images/dot.png')}
          resizeMode="contain"
          style={tw`absolute top-0 right-0 m-2`}
        />
      ) : null}
      <View style={tw`flex flex-col gap-3 p-4`}>
        <View style={tw`flex flex-row items-center gap-3`}>
          <View>
            <Image
              source={{
                uri: image,
              }}
              resizeMode="contain"
              style={[tw`rounded-full`]}
              width={40}
              height={40}
            />
          </View>
          <View style={tw`flex flex-col flex-wrap`}>
            <PoppinText
              style={tw`text-[#fff] text-[14px]`}
              numberOfLines={2}
              ellipsizeMode="head"
            >
              {title}
            </PoppinText>
            <PoppinText
              style={tw`text-[#6B6B6B] text-[12px]`}
              numberOfLines={2}
              ellipsizeMode="head"
            >
              {desc}
            </PoppinText>
          </View>
        </View>
        <View
          style={[
            {
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'flex-end',
              gap: 5,
            },
          ]}
        >
          <PoppinText
            style={[tw`text-[#6B6B6B] text-[12px]`, { textAlign: 'right' }]}
          >
            {time}
          </PoppinText>
          {btn === true ? (
            <View style={tw`flex flex-row gap-3 w-full`}>
              <TouchableOpacity style={tw`bg-white rounded-[10px]`}>
                <PoppinText
                  style={tw`text-[12px] text-[#D82E2B] w-[83px] h-[35px] px-4 py-2 text-center`}
                >
                  Decline
                </PoppinText>
              </TouchableOpacity>
              <TouchableOpacity style={tw`bg-white rounded-[10px]`}>
                <PoppinText
                  style={tw`text-[12px] text-[#0A1027] w-[83px] h-[35px] px-4 py-2 text-center`}
                >
                  Accept
                </PoppinText>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
