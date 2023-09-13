import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../../utils";
import { styles } from "./ListViajes.styles";

export function ListViajes(props) {
  const { viajes } = props;

  const navigation = useNavigation();

  const goToViaje = (viaje) => {
    try {
      navigation.navigate(screen.viajes.viaje, { id: viaje.id }); //ahi le mandamos el id de un viaje especifico para que lo mande por pantalla
    } catch (error) {
      console.error("Error al navegar:", error);
    }
  };

  return (
    <FlatList
      data={viajes}
      renderItem={(doc) => {
        const viaje = doc.item.data(); //aca sacamos la informacion de cada viaje;
        return (
          <TouchableOpacity onPress={() => goToViaje(viaje)}>
            <View style={styles.viaje}>
              {/* Aca tiene que ir la foto de perfil del driver */}

              <View style={styles.container}>
                <Text style={styles.origin}>Origen: {viaje.origen}</Text>
                <Text style={styles.destination}>Destino: {viaje.destino}</Text>
                <Text style={styles.date}>Fecha de salida: {viaje.fecha}</Text>
                <Text style={styles.time}>Hora de salida: {viaje.hora}</Text>
                <Text style={styles.seats}>
                  Asientos libres: {viaje.lugares}
                </Text>
                <Text style={styles.price}>Precio: $ {viaje.precio}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
