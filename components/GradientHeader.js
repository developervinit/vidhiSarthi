import { LinearGradient } from "expo-linear-gradient";
import { headerBackgroundColorArr } from "../constants/colors.js";

export default function GradientHeader() {
  return (
    <LinearGradient
      colors={headerBackgroundColorArr} //"#f4d691", "#d8b86a"
      style={{ flex: 1 }}
      start={[0, 0]}
      end={[1, 1]}
    />
  );
}
