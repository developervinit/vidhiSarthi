import { Stack } from "expo-router";
import GradientHeader from "./GradientHeader";

export default function Header({ screenTitle }) {

    
  return (
    <Stack.Screen
      options={{
        title: screenTitle,
        headerBackground: () => <GradientHeader />,
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
