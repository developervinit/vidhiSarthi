import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import { useState, useRef } from "react";
import HindiKeyBoard from "./HindiKeyBoard";
import AntDesign from "@expo/vector-icons/AntDesign";
import SearchByCodeOfSectionType from "./SearchByCodeOfSectionType.js";

export default function SearchBar({
  getInputValueFn,
  codeOfSectionType,
  setCodeOfSectionType,
}) {
  const [hindiKeyboard, setHindiKeyboard] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isOptionsBoxVisible, setOptionsBoxVisible] = useState(false);

  // Initialize the animated value for translateY
  const translateY = useRef(new Animated.Value(400)).current; // Start hidden

  // Function to append Hindi character to the input and trigger search
  const addHindiCharacter = (character) => {
    const newText = inputText + character;
    setInputText(newText);
    getInputValueFn(newText);
  };

  const toggleOptionsBox = () => {
    // Toggle visibility and trigger the animation
    setOptionsBoxVisible((prev) => !prev);
    Animated.timing(translateY, {
      toValue: isOptionsBoxVisible ? 400 : -260, // Slide up or down based on position 400 for invisible, -260 for visible.
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  let hindiButtonBackgroundColor = hindiKeyboard ? "#616060" : "#8a8787";

  return (
    <KeyboardAvoidingView
      style={styles.inputControlsBarContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <HindiKeyBoard
        hindiKeyboard={hindiKeyboard}
        addHindiCharacter={addHindiCharacter}
      />

      {/* Animated component */}
      <Animated.View
        style={[
          {
            transform: [{ translateY }],
          },
        ]}
      >
        <SearchByCodeOfSectionType
          toggleOptionsBoxFn={toggleOptionsBox}
          setCodeOfSectionType={setCodeOfSectionType}
        />
      </Animated.View>

      <View style={styles.textInputBtnFilterWrapper}>
        <View style={styles.textInputAndBtnWrapper}>
          <TextInput
            style={styles.input}
            placeholder={
              codeOfSectionType === "prevCode"
                ? "यहाँ पूर्व धारा कोड दर्ज करें|"
                : "यहाँ नई धारा कोड दर्ज करें|"
            }
            onChangeText={(text) => {
              setInputText(text);
              getInputValueFn(text);
            }}
            value={inputText}
            clearButtonMode="always"
          />

          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: hindiButtonBackgroundColor },
            ]}
            onPress={() => {
              setHindiKeyboard((hK) => !hK);
              setOptionsBoxVisible(false);
            }}
          >
            <Text style={styles.buttonText}>क,ख...</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.optionBtn,
            { backgroundColor: isOptionsBoxVisible ? "#8a8787" : "#e7e7e7" },
          ]}
          onPress={toggleOptionsBox}
        >
          {isOptionsBoxVisible ? (
            <AntDesign name="downcircleo" size={32} color="white" />
          ) : (
            <AntDesign name="upcircleo" size={32} color="#616060" />
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputControlsBarContainer: {
    width: "100%",
    position: "absolute",
    bottom: 5,
    right: 0,
    left: 0,
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "white",
  },
  textInputBtnFilterWrapper: {
    flexDirection: "row",
    gap: 5,
  },
  textInputAndBtnWrapper: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e7e7e7",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#616060",
  },
  input: {
    flex: 1,
    height: 50,
    padding: 10,
    fontSize: 22,
    backgroundColor: "#e7e7e7",
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#616060",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  optionBtn: {
    width: "15%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#616060",
  },
});
