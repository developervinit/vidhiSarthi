import { View, Text, StyleSheet } from "react-native";
import CustomHeader from "../../../components/CustomHeader";
import HomeScreenModal from "../../../components/HomeScreenModal.js";

export default function SakshyaAdhiniyam() {
  const headerRight = () => {
    return (
      <View>
        <HomeScreenModal />
      </View>
    );
  };

  return (
    <>
      <CustomHeader
        screenTitle="भारतीय साक्ष्य अधिनियम, 2023"
        headerRight={headerRight}
      />
      <View style={styles.container}>
        <Text>
          भारतीय साक्ष्य अधिनियम की धाराओ और संबंधित प्रावधानों को दर्शाने वाली
          तालिका भविष्य में यंहा प्रदर्शित होगी |
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
