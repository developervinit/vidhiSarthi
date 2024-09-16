import { View, Text, StyleSheet } from "react-native";

export default function NsHowToComponent() {
  return (
    <View style={styles.BnsHowToContainer}>
      <Text>संग्रह अभी उपलब्ध नहीं है!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  BnsHowToContainer: {
    flex: 1,
    width: "100%",
  },
});
