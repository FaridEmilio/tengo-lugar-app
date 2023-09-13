import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Loading } from "../../../components/Shared";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { Header } from "../../../components/Viaje";
import { db } from "../../../utils";

import { styles } from "./ViajeScreen.styles";

export function ViajeScreen(props) {
  const { route } = props;
  const [viaje, setViaje] = useState(null);
  //Aca obtenemos los datos de un restaurante especifico
  useEffect(() => {
    setViaje(null);
    onSnapshot(doc(db, "viajes", route.params.id), (doc) => {
      setViaje(doc.data());
    });
  }, [route.params.id]);

  if (!viaje) return <Loading show text="Cargando viaje..." />;

  return (
    <View style={styles.content}>
      <Header viaje={viaje} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTextSolicitar}>Solicitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
