//this is function to highlight text of the data.

import { Text } from "react-native";

export default renderHighlightedText = (text) => {
  // Split the text by '%' to extract highlighted sections
  const parts = text.split("%");

  return parts.map((part, index) => {
    // If the index is odd, this part should be highlighted
    if (index % 2 !== 0) {
      return (
        <Text key={index} style={{ color: "#10bd10", fontWeight: "bold" }}>
          {part}
        </Text>
      );
    }
    // Otherwise, render it as normal text
    return <Text key={index}>{part}</Text>;
  });
};
