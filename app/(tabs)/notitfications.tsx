import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const notitfications = () => {
  return (
    <View style={styles.container}>
    <Text style={tw`text-[#fff]`}>Notifications 👱🏼</Text>
  </View>
  )
}

export default notitfications

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0A1027',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  