import { View, Text, StyleSheet } from "react-native";

export default function ErrorDisplay({ errorMassage }) {
  return (
    <View style={styles.errorCard}>
      <Text style={styles.errorTexT}>{errorMassage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorCard: {
    width: "95%",
    maxWidth: 350,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 15,
    backgroundColor: "#ff5b5b",
    padding: 15,
  },
  errorTexT: {
    color: "white",
    fontSize: 22,
  },
});
