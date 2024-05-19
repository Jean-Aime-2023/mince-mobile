// Onboarding.tsx
import { View, FlatList, StyleSheet, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import data from '../../data/slides';
import OnboardingItem from './OnboardingItem';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<FlatList<any>>(null);
  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < data.length - 1) {
      slideRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.push('/login')
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <OnboardingItem
            item={item}
            scrollTo={scrollTo}
            scrollX={scrollX}
            currentIndex={currentIndex}
            data={data}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
