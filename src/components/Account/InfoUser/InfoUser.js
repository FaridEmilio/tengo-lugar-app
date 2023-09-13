import React, { useState } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { styles } from "./InfoUser.styles";

export function InfoUser(props) {
  const { setLoading, setLoadingText } = props;
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL);
  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      // Accede a la primera imagen seleccionada a través del arreglo "assets"
      const selectedImage = result.assets[0];

      uploadImage(selectedImage.uri);
    }
  };

  const uploadImage = async (uri) => {
    setLoadingText("Actualizando foto de perfil");
    setLoading(true);

    try {
      //El uso del axios me lo dio chat GPT como solucion a un error que me generaba el fetch
      const response = await axios.get(uri, { responseType: "blob" });
      const blob = response.data;

      const storage = getStorage();
      const storageRef = ref(storage, `avatar/${uid}`);

      uploadBytes(storageRef, blob).then((snapshot) => {
        updatePhotoUrl(snapshot.metadata.fullPath);
      });
    } catch (error) {
      alert("Error al cargar la imagen: ", error);
      setLoading(false);
    }
  };

  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageUrl = await getDownloadURL(imageRef);

    const auth = getAuth();
    updateProfile(auth.currentUser, { photoURL: imageUrl });
    setAvatar(imageUrl);
    setLoading(false);
  };

  return (
    <View style={styles.content}>
      <Avatar
        size={"large"}
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory
          size={24}
          onPress={changeAvatar}
          style={styles.accessoryStyle}
        ></Avatar.Accessory>
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
