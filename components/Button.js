import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({ title, onPress, buttonPadding, buttonMargin, buttonColor, textColor, buttonRadius }) {
  return (
    <Pressable style={[styles.buttonStyle, {backgroundColor: buttonColor, padding: buttonPadding, margin: buttonMargin, borderRadius: buttonRadius, color: textColor }]} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        color: "white"
    }
});
