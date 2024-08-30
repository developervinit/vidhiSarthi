import { Stack } from "expo-router";
import { Text, View } from "react-native";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="Home" />
    </Stack>
  );
};

export default _layout;
