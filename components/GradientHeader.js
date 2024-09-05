import { LinearGradient } from "expo-linear-gradient";

export default function GradientHeader() {
  return (
    <LinearGradient
      colors={["#eedaac", "#eed497"]} //"#f4d691", "#d8b86a"
      style={{ flex: 1 }}
      start={[0, 0]}
      end={[1, 1]}
    />
  );
}
