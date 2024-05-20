import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { View } from './Themed'
import { PoppinText } from './StyledText'
import { MaterialIcons } from '@expo/vector-icons'

const Radio = ({options,checkedValue,onChange,style}:any) => {
  return (
    <View style={[styles.container,style]}>
      {options.map((option:any)=>{
        let active = checkedValue == option.value;
        return (
            <TouchableOpacity style={active ? [styles.radio,styles.activeRadio] : styles.radio} onPress={()=>{
                onChange(option.value)
            }}
            key={option.value} 
            >
                <MaterialIcons
                 name={active ? "radio-button-checked" : "radio-button-unchecked"}
                 size={24}
                 color='#64748b'
                />
                <PoppinText style={active ? [styles.text,styles.activeText] : styles.text}>{option.label}</PoppinText>
            </TouchableOpacity>
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
        backgroundColor:"#f3f4f6",
        paddingHorizontal:15,
        borderRadius:15,
    },
    activeRadio:{
        backgroundColor:"#06b6d4" + "11",
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