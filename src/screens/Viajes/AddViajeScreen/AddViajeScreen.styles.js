import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    margin: 20,
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "purple",
  },

  btnContainer: {
    marginTop: 20,
    alignSelf: "center",
    width: "80%",
    overflow: "hidden", // Asegura que los bordes redondeados del botón sean consistentes
  },
});
