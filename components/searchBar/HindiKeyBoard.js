import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HindiKeyBoard({ hindiKeyboard, addHindiCharacter }) {
  const hindiChar = ["क", "ख", "ग", "घ", "ङ", "च", "छ"];

  return (
    <View>
      {hindiKeyboard ? (
        <View style={styles.hindiKeyboard}>
          {hindiChar.map((char) => {
            return (
              <TouchableOpacity
                onPress={() => addHindiCharacter(char)}
                key={char}
                style={styles.hindiCharacterWrapper}
              >
                <Text style={styles.hindiCharacter}>{char}</Text>
              </TouchableOpacity>
            );
          })}

          {/* Add more characters as needed */}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  hindiCharacterWrapper: {
    backgroundColor: "#e7e7e7",
    padding: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  hindiCharacter: {
    fontSize: 20,
    color: "black",
  },
  hindiKeyboard: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly", // Arrange buttons
    alignItems: "center",
  },
});
