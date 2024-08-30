import { View, Text, StyleSheet } from "react-native";

export default function List({ prevCode, prevCodeInfo, newCode, newCodeInfo }) {
  return (
    <View>
      <View style={styles.codeContainer}>
        <View>
          <Text style={styles.containerHeading}>भारतीय दण्ड संहिता, 1860</Text>
        </View>
        <View style={styles.separator}></View>
        <Text>
          <Text style={styles.label}>धारा: </Text>
          <Text style={styles.result}>{prevCode}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>शीर्षक: </Text>
          <Text style={styles.result}>{prevCodeInfo}</Text>
        </Text>
      </View>

      <View style={styles.codeContainer}>
        <View>
          <Text style={styles.containerHeading}>भारतीय न्याय संहिता, 2023</Text>
        </View>
        <View style={styles.separator}></View>
        <Text>
          <Text style={styles.label}>धारा: </Text>
          <Text style={styles.result}>{newCode}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>शीर्षक: </Text>
          <Text style={styles.result}>{newCodeInfo}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "black",
    height: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  containerHeading: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  codeContainer: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgb(60 60 60)",
    borderWidth: 1,
    marginBottom: 14,
    padding: 20,
    paddingTop: 10,
  },
  label: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgb(60 60 60)",
  },
  result: {
    fontSize: 22,
    color: "rgb(98 98 98)",
  },
});
