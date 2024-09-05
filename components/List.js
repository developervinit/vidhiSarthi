import { View, StyleSheet } from "react-native";
import DataCard from "./DataCard";

export default function List({ prevCode, prevCodeInfo, newCode, newCodeInfo }) {
  return (
    <View style={styles.container}>
      <DataCard
        heading="भारतीय दण्ड संहिता, 1860"
        code={prevCode}
        info={prevCodeInfo}
      />
      <DataCard
        heading="भारतीय न्याय संहिता, 2023"
        code={newCode}
        info={newCodeInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3d9ee",
    padding: 15,
    marginBottom: 8,
  },
});
