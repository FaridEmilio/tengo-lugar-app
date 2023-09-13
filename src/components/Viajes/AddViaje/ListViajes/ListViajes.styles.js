import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viaje: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 10,
    width: "95%",
    shadowColor: "#800080",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  origin: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  destination: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#800080",
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: "#800080",
    marginBottom: 4,
  },
  seats: {
    fontSize: 14,
    color: "#800080",
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#43a047",
  },
});
