import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PoppinText } from './StyledText'
import { MaterialIcons } from '@expo/vector-icons'
import tw from 'twrnc'

const Radio = ({options,checkedValue,onChange,style}:any) => {
  return (
    <View style={[styles.container,style]}>
      {options.map((option:any)=>{
        let active = checkedValue == option.value;
        return (
            <Pressable style={active ? [styles.radio,styles.activeRadio] : [styles.radio,tw`border-2 border-gray-700`]} onPress={()=>{
                onChange(option.value)
            }}
            key={option.value} 
            >
                <MaterialIcons
                 name={active ? "radio-button-checked" : "radio-button-unchecked"}
                 size={24}
                 color={active ? "#0A1027" : "#fff"}
                />
                <PoppinText style={active ? [styles.text,styles.activeText] : styles.text}>{option.label}</PoppinText>
            </Pressable>
        )
      })}
    </View>
  )
}

export default Radio

const styles = StyleSheet.create({
    container:{
        width:"100%"
    },
    radio:{
        height:60,
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10,
        backgroundColor:"transparent",
        paddingHorizontal:15,
        borderRadius:15,
    },
    activeRadio:{
        backgroundColor:"#fff",
    },
    text:{
        fontSize:16,
        marginLeft:15,
        color:"#6b7280"
    },
    activeText:{
        color:"#374151"
    }
})