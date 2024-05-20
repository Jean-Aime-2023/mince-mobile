import {
  View,
  Text,
  useWindowDimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Paginator from './Paginator';
import NextButton from './NextButton';
import { PoppinText, PoppinsSemibold } from '../StyledText';

const OnboardingItem = ({
  item,
  scrollTo,
  scrollX,
  currentIndex,
  data,
}: any) => {
  const { width } = useWindowDimensions();
  return (
    <ImageBackground
      source={item.image}
      resizeMode="cover"
      style={[styles.container, { width }]}
    >
      <View style={styles.transparentBg}>
        <View style={styles.textDiv}>
          <PoppinsSemibold style={styles.title}>{item.title}</PoppinsSemibold>
          <PoppinText style={styles.desc}>{item.desc}</PoppinText>
        </View>
        <View style={styles.bottomSect}>
          <View>
            <Paginator data={data} scrollX={scrollX} />
          </View>
          <View>
            <NextButton
              scrollTo={scrollTo}
              percentage={(currentIndex + 1) * (100 / data.length)}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transparentBg: {
    display: 'flex',
    gap: 20,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  textDiv: {
    paddingRight: 9,
  },
  title: {
    fontWeight: '600',
    fontSize: 35,
    marginBottom: 10,
    color: '#ffffff',
    textAlign: 'left',
  },
  desc: {
    fontWeight: '300',
    fontSize: 15,
    color: '#959595',
    textAlign: 'left',
  },
  bottomSect: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
});
