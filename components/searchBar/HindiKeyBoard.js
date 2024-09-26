import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function HindiKeyBoard({ hindiKeyboard, addHindiCharacter }) {
  const hindiChar = ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ठ", "ड", "ढ", "ण", "त", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "श्र", "अ", "इ", "उ", "ऋ", "ए"];

  return (
    <View>
      {hindiKeyboard ? (
        // Set a fixed height for the scrollable area
        <View style={styles.keyboardContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
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
            </View>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    height: 100, // Set fixed height for the keyboard container
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  hindiCharacterWrapper: {
    backgroundColor: "#e7e7e7",
    padding: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  hindiCharacter: {
    fontSize: 20,
    color: "black",
  },
  hindiKeyboard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "space-evenly",
  },
});
