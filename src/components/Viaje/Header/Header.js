import React from "react";
import { View } from "react-native";
import { Text, Rating, Icon } from "react-native-elements";
import { styles } from "./Header.styles";

export function Header(props) {
  const { viaje } = props;
  return (
    <View styles={styles.content}>
      <View style={styles.cajaInfo}>
        <View style={styles.infoRow}>
          <Icon
            type="material-community"
            name="map-marker-right-outline"
            size={45}
            iconStyle={styles.icon}
          />
          <Text style={styles.infoText}>{viaje.origen}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon
            type="material-community"
            name="map-marker-right"
            size={45}
            iconStyle={styles.icon}
          />
          <Text style={styles.infoText}>{viaje.destino}</Text>
        </View>
        <View style={styles.infoRow2}>
          <View style={styles.infoRow}>
            <Icon
              type="material-community"
              name="calendar-month"
              size={45}
              iconStyle={styles.icon}
            />
            <Text style={styles.infoText}>{viaje.fecha}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon
              type="material-community"
              name="clock-outline"
              size={45}
              iconStyle={styles.icon}
            />
            <Text style={styles.infoText}>{viaje.hora}</Text>
          </View>
          <Text style={styles.infoText}>{viaje.precio}</Text>
        </View>
      </View>
    </View>
  );
}
