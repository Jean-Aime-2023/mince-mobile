import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { PoppinText } from './StyledText';

const CustomButton = ({ title ,icon ,style, customStyles , customText , handlePress }: any) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7} style={[tw`py-3 rounded-[10px] h-[53px] flex flex-row items-center justify-center gap-5 ${customStyles}`]}>
       {/* {icon ?
        <View style={tw`pr-2`}>
          {icon}
        </View> : null
       } */}
      <PoppinText style={tw`${customText} text-center text-[15px]`}>{title}</PoppinText>
    </TouchableOpacity>
  );
};

export default CustomButton;

