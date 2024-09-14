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

export default function SearchBar({ getInputValueFn }) {
  const [hindiKeyboard, setHindiKeyboard] = useState(false);
  const [inputText, setInputText] = useState(""); // Manage the full input text

  // Function to append Hindi character to the input and trigger search
  const addHindiCharacter = (character) => {
    const newText = inputText + character;
    setInputText(newText);
    getInputValueFn(newText); // Trigger the search function with updated text
  };

  let hindiButtonBackgroundColor = hindiKeyboard ? "#8a8787" : "#616060";

  return (
    <KeyboardAvoidingView
      style={styles.searchBarContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10} //don't let hide search bar behind the keyboard
    >
      <HindiKeyBoard
        hindiKeyboard={hindiKeyboard}
        addHindiCharacter={addHindiCharacter}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="यहाँ पूर्व कानून दर्ज करें"
          onChangeText={(text) => {
            setInputText(text); // Update input text as the user types
            getInputValueFn(text); // Trigger search function with text from built-in keyboard
          }}
          value={inputText} // Use the full input text
          clearButtonMode="always" // Ensures the clear button is available on iOS
        />
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: hindiButtonBackgroundColor },
          ]}
          onPress={() => setHindiKeyboard((hK) => !hK)}
        >
          <Text style={styles.buttonText}>क,ख...</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    position: "absolute",
    bottom: 10,
    right: 0,
    left: 0,
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "white",
  },
  inputContainer: {
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
});
