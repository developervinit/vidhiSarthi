import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HindiKeyBoard({ addHindiCharacter }) {
  const hindiChar = [
    "क",
    "ख",
    "ग",
    "घ",
    "ङ",
    "च",
    "छ",
    "ज",
    "झ",
    "ञ",
    "ट",
    "ठ",
    "ड",
    "ढ",
    "ण",
    "त",
    "द",
    "ध",
    "न",
    "प",
    "फ",
    "ब",
    "भ",
    "म",
    "य",
    "र",
    "ल",
    "व",
    "श",
    "ष",
    "स",
    "ह",
    "क्ष",
    "त्र",
    "ज्ञ",
    "श्र",
    "अ",
    "इ",
    "उ",
    "ऋ",
    "ए",
  ];

  return (
    <View style={styles.keyboardContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
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
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    height: 182,
    backgroundColor: "white",
    position: "absolute",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 5,
  },
  hindiCharacterWrapper: {
    backgroundColor: "#e7e7e7",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 2,
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
