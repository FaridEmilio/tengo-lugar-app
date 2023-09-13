import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Icon, Input } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./InfoForm.styles";
/*Para validar los  datos del envio de este formulario, el del curso no los valida aca con el formik, sino que lo va a hacer su padre, en este caso el padre es AddViajeScreen*/
export function InfoForm(props) {
  const { formik } = props;

  //Logica para el mapa

  const onOpenCloseMap = () => setShowMap((prevState) => !prevState);

  const [showMap, setShowMap] = useState(false);

  const [passengerCount, setPassengerCount] = useState(1);
  return (
    <View style={styles.content}>
      <ScrollView
        style={{ flex: 1 }}
        nestedScrollEnabled={true} // <---- 1.
        keyboardShouldPersistTaps={"handled"}
      >
        <GooglePlacesAutocomplete
          placeholder="Origen"
          styles={{
            textInput: styles.input,
          }}
          disableScroll={true}
          fetchDetails={true}
          onPress={(data, details = null) => {
            formik.setFieldValue("origen", details.formatted_address);
            console.log(details.formatted_address);
          }}
          enablePoweredByContainer={false}
          query={{
            key: "AIzaSyD2UA8B5jBWF3DGa5r1UB60NUQt7YI_Du4",
            language: "en",
            types: "(cities)",
            components: "country:ar",
          }}
          // textInputProps={{
          //   InputComp: Input,
          //   leftIcon: { type: "material-community", name: "star" },
          //   errorStyle: { color: "red" },
          // }}
        />
        <GooglePlacesAutocomplete
          placeholder="Destino"
          styles={{
            textInput: styles.input,
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            formik.setFieldValue("destino", details.formatted_address);
            console.log(details.formatted_address);
          }}
          disableScroll={true}
          query={{
            key: "AIzaSyD2UA8B5jBWF3DGa5r1UB60NUQt7YI_Du4",
            language: "en",
            types: "(cities)",
            components: "country:ar",
          }}
        />
        {/* <Input
        onChangeText={(text) => formik.setFieldValue("origen", text)}
        rightIcon={{
          type: "material-community",
          name: "map-marker-radius",
          onPress: onOpenCloseMap,
        }}
        errorMessage={formik.errors.origen}
      />
      <Input
        placeholder="Destino"
        inputContainerStyle={styles.input}
        onChangeText={(text) => formik.setFieldValue("destino", text)}
        errorMessage={formik.errors.destino}
        rightIcon={{
          type: "material-community",
          name: "map-marker-distance",
        }}
      /> */}

        <Input
          placeholder="Fecha de salida"
          inputContainerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("fecha", text)}
          errorMessage={formik.errors.fecha}
          rightIcon={{
            type: "material-community",
            name: "calendar-month",
          }}
        />
        <Input
          placeholder="Hora de salida"
          inputContainerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("hora", text)}
          errorMessage={formik.errors.hora}
          rightIcon={{
            type: "material-community",
            name: "car-clock",
          }}
        />
        <View style={styles.lugares}>
          <Icon
            type="material-community"
            name="car-seat"
            size={35}
            color="white"
          />
          <Text style={styles.label}>Lugares libres:</Text>
          <Picker
            style={styles.picker}
            //selectedValue={passengerCount}
            selectedValue={formik.values.lugares}
            onValueChange={(itemValue) =>
              formik.setFieldValue("lugares", itemValue)
            }
            errorMessage={formik.errors.lugares}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
          </Picker>
        </View>
        <Input
          placeholder="Precio por persona"
          inputContainerStyle={styles.input}
          keyboardType="numeric" // Teclado numérico
          onChangeText={(numeric) => formik.setFieldValue("precio", numeric)}
          errorMessage={formik.errors.precio}
          leftIcon={{
            type: "material-community",
            name: "currency-usd",
          }}
        />
      </ScrollView>
    </View>
  );
}
