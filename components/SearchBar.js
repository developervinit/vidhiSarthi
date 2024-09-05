import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";

export default function SearchBar({ getInputValueFn }) {
  return (
    <KeyboardAvoidingView
      style={styles.searchBarContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100} //don't let hide search bar behind the keyboard
    >
      <TextInput
        style={styles.input}
        placeholder="यहाँ पूर्व कानून दर्ज करें"
        onChangeText={(text) => getInputValueFn(text)}
        clearButtonMode="always" // Ensures the clear button is available on iOS
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: "#fff",
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 4,
    fontSize: 22,
  },
});
