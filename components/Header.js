import { Stack } from "expo-router";
import GradientHeader from "./GradientHeader";
import { headerHeadingColor } from "../constants/colors.js";

export default function Header({ screenTitle }) {

    
  return (
    <Stack.Screen
      options={{
        title: screenTitle,
        headerBackground: () => <GradientHeader />,
        headerTintColor: headerHeadingColor,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
