import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

export default function ActionableCard({ title, url, image }) {
  const router = useRouter();

  function redirectTo(path) {
    router.push(`/screens/${path}`);
  }

  return (
    <View style={styles.cardContainer}>
      <Text>{image}</Text>
      <Text>{title}</Text>
      <Button
        onPress={() => redirectTo(url)}
        title="Click Here"
        buttonPadding={[10, 10]}
        buttonMargin={[10]}
        buttonColor="#eedff6"
        textColor="black"
        buttonRadius={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#cce5e2",
    height: 200,
    width: 300,
    borderRadius: 10,
    marginBottom: 5,
  },
});
