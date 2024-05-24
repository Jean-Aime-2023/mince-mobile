import { ScrollView, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PoppinText } from '@/components/StyledText';
import { Radio } from '@/components';
import { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { View } from '@/components/Themed';

const report = () => {
  const [issue, setIssue] = useState('');

  return (
    <SafeAreaView style={[styles.container, tw`py-4`]}>
        <View style={tw`flex flex-row items-center gap-4 py-4 px-6 bg-transparent`}>
          <Ionicons name="document-text-outline" color={'#6B6B6B'} size={23} />
          <PoppinText style={tw`text-[#fff] text-[15px]`}>
            Report
          </PoppinText>
        </View>
        <ScrollView style={tw`px-6`}>
        <PoppinText style={tw`text-white text-[15px] py-4`}>
          How would you describe the privacy issue you met or that occurred
        </PoppinText>
        <View style={tw`flex flex-col gap-6 bg-transparent py-4`}>
          <Radio
            options={[
              { label: 'Card Withdrawal', value: 'Card Withdrawal' },
              {
                label: 'I don’t know what happened',
                value: 'I don’t know what happened',
              },
              { label: 'Other', value: 'Other' },
            ]}
            checkedValue={issue}
            onChange={setIssue}
            style={{ marginBottom: 15 }}
          />
        </View>
        <PoppinText style={tw`text-white text-[15px] pb-3`}>
          If your answer was Others. Please explain in details{' '}
        </PoppinText>
        <TextInput
          style={[
            {
              borderWidth: 2,
              borderColor: '#374151',
              height: 100,
              color: '#fff',
              borderRadius: 10,
              textAlignVertical: 'top',
            },
            tw`p-4 text-[14px]`,
          ]}
          placeholder="Please explain in brief"
          placeholderTextColor="#FFFFFF"
          multiline={true}
          numberOfLines={8}
          onChangeText={(text) => console.log(text)}
        />
        <View style={[{ alignSelf: 'flex-end' }, tw`bg-transparent`]}>
          <CustomButton
            title={'Submit'}
            icon={
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                color={'#fff'}
              />
            }
            customStyles="border-2 border-gray-700 bg-transparent my-6 w-[130px] text-[15px]"
            customText="text-white"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default report;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A1027',
    flex: 1,
  },
  textArea: {
    textAlignVertical: 'top',
  },
});
