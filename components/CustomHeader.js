import { Stack } from "expo-router";
import GradientHeader from "./GradientHeader.js";
import { headerHeadingColor } from "../constants/colors.js";

export default function CustomHeader({ screenTitle, headerLeft, headerRight }) {
  return (
    <Stack.Screen
      options={{
        title: screenTitle,
        headerBackground: () => <GradientHeader />,
        headerTintColor: headerHeadingColor,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerLeft: headerLeft ? headerLeft : null,
        headerRight: headerRight ? headerRight : null,
      }}
    />
  );
}
