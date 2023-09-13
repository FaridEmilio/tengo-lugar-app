import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Location from "expo-location";
import { Button } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { Toast } from "react-native-toast-message";
import { Modal } from "../../../Shared";
import { styles } from "./MapForm.styles";

export function MapForm(props) {
  const { show, close } = props;

  //Location.setGoogleApiKey

  const [location, setLocation] = useState({
    latitute: 0.001,
    longitude: 0.001,
    latituteDelta: 0.001,
    longitudeDelta: 0.001,
  });

  //como esto va a requerir tiempo hay que usar un async
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Ve a configuración y activa los permisos de maps",
        });
        return;
      }

      const locationTemp = await Location.getCurrentPositionAsync({});

      setLocation({
        latitute: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latituteDelta: 0.001,
        longitudeDelta: 0.001,
      });
    })();
  }, []);

  const saveLocation = () => {
    console.log(location);
  };

  return (
    <Modal show={show} close={close}>
      <MapView
        initialRegion={location}
        showsUserLocation={true}
        style={styles.mapStyle}
        onRegionChange={(locationTemp) => setLocation(locationTemp)}
      >
        <Marker draggable={true} coordinate={location} />
      </MapView>
      <View style={styles.mapActions}>
        <Button
          title="Cancelar"
          containerStyle={styles.btnContainerCancelar}
          buttonStyle={styles.btnCancelar}
          onPress={close}
        ></Button>
        <Button
          title="Confirmar"
          containerStyle={styles.btnContainerConfirmar}
          buttonStyle={styles.btnConfirmar}
          onPress={saveLocation}
        ></Button>
      </View>
    </Modal>
  );
}
