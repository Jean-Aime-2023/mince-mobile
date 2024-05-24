import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PoppinText } from '@/components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Notification from '@/components/Notification';

const index = () => {
  return (
    <SafeAreaView style={[styles.container, tw`h-full`]}>
      <View style={tw`px- w-full px-4`}>
        <View style={[styles.profileNav, tw`py-7`]}>
          <View
            style={tw`flex flex-row items-center gap-2`}
          >
            <Ionicons
              name="document-text-outline"
              color={'#6B6B6B'}
              size={20}
            />
            <PoppinText style={tw`text-[#fff] text-[16px]`}>
              Notifications
            </PoppinText>
          </View>
          <Pressable
            style={tw`flex flex-row items-center gap-2`}
          >
            <PoppinText style={tw`text-[#fff] text-[14px]`}>
              Mark all as read
            </PoppinText>
            <Ionicons
              name="checkmark-done-outline"
              color={'#fff'}
              style={tw`relative`}
              size={17}
            />
          </Pressable>
        </View>

        <ScrollView style={tw`mb-20`}>
          <Notification
            image={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJG2GN3-l3gBCEyCMdvA1gKCUH8VMajB-ywUBav8LdlBcw3vL-d0YkF4NRJMODdecORY&usqp=CAU'
            }
            title={'Ange you have succesfully paid'}
            desc={'Paid $34 to rwandair was approved'}
            time={'12-march-2024'}
            dot={true}
            btn={false}
          />
          <Notification
            image="https://i.pinimg.com/236x/c6/f4/1c/c6f41cd6e175e0b661c62e002566a5f0.jpg"
            title="Ange you have succesfully paid"
            desc="Paid $34 to rwandair was approved"
            time="Just now"
            dot={false}
            btn={true}
          />
          <Notification
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJG2GN3-l3gBCEyCMdvA1gKCUH8VMajB-ywUBav8LdlBcw3vL-d0YkF4NRJMODdecORY&usqp=CAU"
            title="Ange you have succesfully paid"
            desc="Yesterday 11-march-2023"
            time="12-march-2024"
            dot={true}
            btn={false}
          />
          <Notification
            image="https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2020/02/owen.jpg?fit=258%2C300&ssl=1"
            title="Ange you have succesfully paid"
            desc="Paid $34 to rwandair was approved"
            time="12-march-2024"
            dot={false}
            btn={true}
          />
          <Notification
            image="https://i.pinimg.com/236x/c6/f4/1c/c6f41cd6e175e0b661c62e002566a5f0.jpg"
            title="Ange you have succesfully paid"
            desc="Paid $34 to rwandair was approved"
            time="12-march-2024"
            dot={true}
            btn={true}
          />
          <Notification
            image={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJG2GN3-l3gBCEyCMdvA1gKCUH8VMajB-ywUBav8LdlBcw3vL-d0YkF4NRJMODdecORY&usqp=CAU'
            }
            title={'Ange you have succesfully paid'}
            desc={'Paid $34 to rwandair was approved'}
            time={'12-march-2024'}
            dot={true}
            btn={false}
          />
          <Notification
            image="https://i.pinimg.com/236x/c6/f4/1c/c6f41cd6e175e0b661c62e002566a5f0.jpg"
            title="Ange you have succesfully paid"
            desc="Paid $34 to rwandair was approved"
            time="Just now"
            dot={false}
            btn={true}
          />
          <Notification
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJG2GN3-l3gBCEyCMdvA1gKCUH8VMajB-ywUBav8LdlBcw3vL-d0YkF4NRJMODdecORY&usqp=CAU"
            title="Ange you have succesfully paid"
            desc="Yesterday 11-march-2023"
            time="12-march-2024"
            dot={true}
            btn={false}
          />
          <Notification
            image="https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2020/02/owen.jpg?fit=258%2C300&ssl=1"
            title="Ange you have succesfully paid"
            desc="Paid $34 to rwandair was approved"
            time="12-march-2024"
            dot={false}
            btn={true}
          />
          <Notification
            image="https://i.pinimg.com/236x/c6/f4/1c/c6f41cd6e175e0b661c62e002566a5f0.jpg"
            title="Ange you have succesfully paid"
            desc="Paid $34 to rwandair was approved"
            time="12-march-2024"
            dot={true}
            btn={true}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A1027',
    flex: 1,
  },
  profileNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
