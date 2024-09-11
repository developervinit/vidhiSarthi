import CustomModal from "./CustomModal";
import { View, Text } from "react-native";

export default function PageInfoModal() {
  return (
    <CustomModal content="This is the content of modal">
      <View>
        <Text style={{ color: "black" }}>Press Me</Text>
      </View>
    </CustomModal>
  );
}
