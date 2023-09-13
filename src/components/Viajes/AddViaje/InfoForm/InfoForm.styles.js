import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  inputContainer: {
    borderRadius: 50,
    paddingHorizontal: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },

  input: {
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 0,
    backgroundColor: "#ffff",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
  },
  picker: {
    marginHorizontal: 15,
    width: "24%",
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  lugares: {
    marginHorizontal: 15,
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginRight: 2,
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
});
