import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { LoadingModal } from "../../../components/Shared";
import { ListViajes } from "../../../components/Viajes/AddViaje/ListViajes";

import { styles } from "./ViajesScreen.styles";
import { screen, db } from "../../../utils";

export function ViajesScreen(props) {
  const { navigation } = props;

  //Logica para que si no estas loggeado, no aparezca el +
  const [currentUser, setCurrentUser] = useState(null);

  const [viajes, setViajes] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    const q = query(collection(db, "viajes"), orderBy("createdAt", "desc"));

    onSnapshot(q, (snapshot) => {
      setViajes(snapshot.docs);
    });
  }, []);

  const goToAddViaje = () => {
    navigation.navigate(screen.viajes.addViaje);
  };
  return (
    <View style={styles.content}>
      {!viajes ? (
        <LoadingModal show text="Cargando, por favor espere." />
      ) : (
        <ListViajes viajes={viajes} />
      )}

      {currentUser && (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="purple"
          containerStyle={styles.bntContainer}
          onPress={goToAddViaje}
        />
      )}
    </View>
  );
}
