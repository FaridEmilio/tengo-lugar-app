import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./SearchScreen.styles";
import {
  collection,
  query,
  startAt,
  endAt,
  limit,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { SearchBar, ListItem, Avatar, Icon, Text } from "react-native-elements";
import { db, screen } from "../../utils";
import { size, map } from "lodash";
import { Loading } from "../../components/Shared";
export function SearchScreen() {
  const [destino, setDestino] = useState(""); // Estado para almacenar la selección
  const [resultados, setResultados] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "viajes"),
        orderBy("destino"),
        startAt(destino),
        endAt(`${destino}\uf8ff`)
      );
      const querySnapshot = await getDocs(q);
      setResultados(querySnapshot.docs);
    })();
  }, [destino]);

  const goToViaje = (viajeId) => {
    navigation.navigate(screen.viajes.tab, {
      screen: screen.viajes.viaje,
      params: {
        id: viajeId,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* <GooglePlacesAutocomplete
        placeholder="¿A dónde querés viajar"
        styles={{
          textInput: styles.input,
        }}
        fetchDetails={true}
        onPress={(data, details = null) => {
          const desti = details.formatted_address;

          console.log(desti);

          setDestino(desti);
        }}
        enablePoweredByContainer={false}
        renderRightButton={() => (
          <Icon
            name="close"
            type="material"
            color="gray"
            onPress={() => {
              setDestino(""); // Limpiar el campo de búsqueda
            }}
          />
        )}
        query={{
          key: "AIzaSyD2UA8B5jBWF3DGa5r1UB60NUQt7YI_Du4",
          language: "en",
          types: "(cities)",
          components: "country:ar",
        }}
      /> */}

      <SearchBar
        placeholder="¿A dónde querés viajar?"
        value={destino}
        onChangeText={(text) => setDestino(text)}
      />
      {!resultados && <Loading show text="Buscando destino..." />}

      <ScrollView>
        {size(resultados) === 0 ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>
              No se han encontrado viajes a {destino}, vuelve mas tarde.
            </Text>
          </View>
        ) : (
          map(resultados, (item) => {
            const data = item.data();

            return (
              <ListItem
                key={data.id}
                bottomDivider
                onPress={() => goToViaje(data.id)}
              >
                <ListItem.Content>
                  <ListItem.Title
                    style={{ fontWeight: "bold", color: "green" }}
                  >
                    Viaje disponible
                  </ListItem.Title>
                  <ListItem.Title>De: {data.origen}</ListItem.Title>
                  <ListItem.Title>Hacia: {data.destino}</ListItem.Title>
                </ListItem.Content>
                <Icon type="material-community" name="chevron-right" />
              </ListItem>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
