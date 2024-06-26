import React from 'react';
import { StyleSheet, Animated, useWindowDimensions, View } from 'react-native';

const Paginator = ({ data, scrollX }: any) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: 'row', alignItems:'center' ,height: 64  }}>
      {data.map(
        (_: any, i: number) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange:[0.3,1,0.3],
            extrapolate:'clamp'
          })

          return (
            <Animated.View
              style={[styles.dot, { width: dotWidth ,opacity}]}
              key={i.toString()}
            />
          );
        }
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 8,
  },
});

export default Paginator;
