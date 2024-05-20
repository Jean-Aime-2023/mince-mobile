import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PoppinText } from '@/components/StyledText';
import { Radio } from '@/components';
import { useState } from 'react';

const report = () => {
  const [issue,setIssue] = useState("");

  return (
    <SafeAreaView style={[styles.container, tw`py-4`]}>
      <ScrollView style={tw`flex flex-col gap-10`}>
        <PoppinText style={tw`text-white`}>How would you describe the privacy issue you met or that occurred</PoppinText> 

        <Radio options={[
          {label:"Card Withdrawal",value:"Card Withdrawal"},
          {label:"I don’t know what happened",value:"I don’t know what happened"},
          {label:"Other",value:"Other"},
        ]}
         checkedValue={issue}
         onChange={setIssue}
         style={{marginBottom:15}}
        />
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
});

