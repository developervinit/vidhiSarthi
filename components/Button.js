import { Pressable, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";


export default function Button({
  title,
  onPress,
  buttonPadding,
  buttonColor,
  buttonRadius,
  textColor,
  textSize,
  textWeight,
}) {
  const [topBottom] = buttonPadding;
  return (
    <Pressable
      style={[
        styles.buttonStyle,
        {
          backgroundColor: buttonColor,
          paddingTop: topBottom,
          paddingBottom: topBottom,
          borderRadius: buttonRadius,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.textStyle,
          { color: textColor, fontSize: textSize, fontWeight: textWeight },
        ]}
      >
        {title}  <AntDesign name="arrowright" size={20} color="#e6e6e6" />
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});
