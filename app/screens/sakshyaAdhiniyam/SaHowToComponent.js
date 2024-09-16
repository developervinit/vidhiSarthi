import { View, Text, StyleSheet } from "react-native";

export default function SaHowToComponent() {
  return (
    <View style={styles.BnsHowToContainer}>
      <View style={styles.BnsHowToContainer}>
        <Text>संग्रह अभी उपलब्ध नहीं है!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BnsHowToContainer: {
    flex: 1,
    width: "100%",
  },
});
