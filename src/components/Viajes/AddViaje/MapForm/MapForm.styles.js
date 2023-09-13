import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: 550,
  },
  mapActions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  btnContainerConfirmar: {
    paddingRight: 5,
    width: "50%",
  },
  btnConfirmar: {
    backgroundColor: "purple",
  },
  btnContainerCancelar: {
    paddingLeft: 5,
    width: "50%",
  },
  btnCancelar: {
    backgroundColor: "red",
  },
});
