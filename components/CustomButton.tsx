import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const CustomButton = ({ title ,icon , customStyles , customText , handlePress }: any) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7} style={[tw`py-3 rounded-[10px] h-[53px] flex flex-row items-center justify-center gap-5 w-full ${customStyles}`]}>
       {icon && 
         <Image
         source={icon}
         resizeMode="contain"
         />
       }
      <Text style={tw`${customText} text-center text-[15px]`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    
})