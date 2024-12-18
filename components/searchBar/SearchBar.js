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

  // Separate animated values for each component
  const translateY = useRef(new Animated.Value(400)).current; // For SearchByCodeOfSectionType
  const translateYHindi = useRef(new Animated.Value(400)).current; // For HindiKeyBoard

  // Function to append Hindi character to the input and trigger search
  const addHindiCharacter = (character) => {
    const newText = inputText + character;
    setInputText(newText);
    getInputValueFn(newText);
  };

  //to hide/show option box
  const toggleOptionsBox = () => {
    //first hide hindiKyeBoard if it is visible.
    if (hindiKeyboard) {
      // Hide Hindi keyboard if it's visible
      setHindiKeyboard(false);
      Animated.timing(translateYHindi, {
        toValue: 200,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }

    setOptionsBoxVisible((prev) => !prev);
    Animated.timing(translateY, {
      toValue: isOptionsBoxVisible ? 400 : -260,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  //to hide/show hindiKeyBoard
  const toggleHindiKeyBoard = () => {
    //hide optionBox if it is visible.
    if (isOptionsBoxVisible) {
      // Hide Options Box if it's visible
      setOptionsBoxVisible(false);
      Animated.timing(translateY, {
        toValue: 400,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }

    setHindiKeyboard((hk) => !hk);
    Animated.timing(translateYHindi, {
      toValue: hindiKeyboard ? 200 : -185,
      duration: 200,
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
      {/* Hindi Keyboard with its own animation */}
      <Animated.View
        style={[
          {
            transform: [{ translateY: translateYHindi }],
          },
        ]}
      >
        <HindiKeyBoard
          hindiKeyboard={hindiKeyboard}
          addHindiCharacter={addHindiCharacter}
        />
      </Animated.View>

      {/* Options box with separate animation */}
      <Animated.View
        style={[
          {
            transform: [{ translateY: translateY }],
          },
        ]}
      >
        <SearchByCodeOfSectionType
          toggleOptionsBoxFn={toggleOptionsBox}
          setCodeOfSectionType={setCodeOfSectionType}
          codeOfSectionType={codeOfSectionType}
        />
      </Animated.View>

      <View style={styles.textInputBtnFilterWrapper}>
        <View style={styles.textInputAndBtnWrapper}>
          <TextInput
            keyboardType="phone-pad"
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
              toggleHindiKeyBoard();
            }}
          >
            <Text style={styles.buttonText}>क,ख..</Text>
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
    height: 51,
    padding: 10,
    fontSize: 21,
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
