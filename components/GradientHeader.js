import { LinearGradient } from "expo-linear-gradient";

export default function GradientHeader() {
  return (
    <LinearGradient
      colors={["#f4d691", "#f3d17d"]}
      style={{ flex: 1 }}
      start={[0, 0]}
      end={[1, 1]}
    />
  );
}
