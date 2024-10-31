import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import HindiKeyBoard from "./HindiKeyBoard";
import AntDesign from "@expo/vector-icons/AntDesign";
import SearchByCodeOfSectionType from "./SearchByCodeOfSectionType.js";

export default function SearchBar({
  getInputValueFn,
  codeOfSectionType,
  setCodeOfSectionType,
}) {
  const [hindiKeyboard, setHindiKeyboard] = useState(false);
  const [inputText, setInputText] = useState(""); // Manage the full input text
  const [isOptionsBoxVisible, setOptionsBoxVisible] = useState(false);

  // Function to append Hindi character to the input and trigger search
  const addHindiCharacter = (character) => {
    const newText = inputText + character;
    setInputText(newText);
    getInputValueFn(newText); // Trigger the search function with updated text
  };

  let hindiButtonBackgroundColor = hindiKeyboard ? "#8a8787" : "#616060";

  return (
    <KeyboardAvoidingView
      style={styles.inputControlsBarContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10} //don't let hide search bar behind the keyboard
    >
      {/*  hide and show on button click */}
      <HindiKeyBoard
        hindiKeyboard={hindiKeyboard}
        addHindiCharacter={addHindiCharacter}
      />

      {/*  box gets hide/show on button click to choose option */}
      <SearchByCodeOfSectionType
        isOptionsBoxVisible={isOptionsBoxVisible}
        setOptionsBoxVisible={setOptionsBoxVisible}
        setCodeOfSectionType={setCodeOfSectionType}
      />

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
              setInputText(text); // Update input text as the user types
              getInputValueFn(text); // Trigger search function with text from built-in keyboard
            }}
            value={inputText} // Use the full input text
            clearButtonMode="always" // Ensures the clear button is available on iOS
          />

          {/* btn to show/hide HindiKeyBoard */}
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

        {/* btn to show/hide SearchBy codeOfSectionType box */}
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => {
            setOptionsBoxVisible((isVisible) => !isVisible);
            setHindiKeyboard(false);
          }}
        >
          {isOptionsBoxVisible ? (
            <AntDesign name="downcircleo" size={32} color="#616060" />
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
    backgroundColor: "#616060", // Customize the button color
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
  filterBtn: {
    width: "15%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e7e7e7",
    borderWidth: 2,
    borderColor: "#616060",
  },
});
