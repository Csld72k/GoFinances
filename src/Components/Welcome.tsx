import React from "react";

import { View, Text } from "react-native";

// import { Styles } from './styles';

interface Props {
  title: string;
}

export function Welcome({ title }: Props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}