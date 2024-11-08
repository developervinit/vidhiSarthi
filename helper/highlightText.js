//this is function to highlight text of the data.
import { Text } from "react-native";

export default function renderHighlightedText(text) {
  // Split text by both `$` and `%` markers
  const parts = text.split(/(\$|%)/);
  let isRed = false; // Tracks if we are within a "$" block
  let isGreen = false; // Tracks if we are within a "%" block

  return parts.map((part, index) => {
    // Check for markers
    if (part === "$") {
      isRed = !isRed; // Toggle red highlighting on/off
      return null; // Skip rendering "$" marker itself
    } else if (part === "%") {
      isGreen = !isGreen; // Toggle green highlighting on/off
      return null; // Skip rendering "%" marker itself
    }

    // Apply red color if inside "$" block
    if (isRed) {
      return (
        <Text key={index} style={{ color: "red", fontWeight: "bold" }}>
          {part}
        </Text>
      );
    }

    // Apply green color if inside "%" block
    if (isGreen) {
      return (
        <Text key={index} style={{ color: "#10bd10", fontWeight: "bold" }}>
          {part}
        </Text>
      );
    }

    // Render as normal text if not inside any highlight block
    return <Text key={index}>{part}</Text>;
  });
}
