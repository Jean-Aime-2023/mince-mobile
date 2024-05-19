import { Text, TextProps } from './Themed';
import React from 'react';



export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'MonoText' }]} />;
}
export function PoppinText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'PoppinsMain' }]} />;
}
export function NunitoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'NunitoMain' }]} />;
}
export function PoppinsSemibold(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'PoppinsSemibold' }]} />;
}

