import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";

import { styles } from "./Loading.styles";

export function Loading(props) {
  const { show, text } = props;

  if (!show) return null;
  return (
    <View style={styles.cargando}>
      <ActivityIndicator size="large" color="#800080" />

      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}
