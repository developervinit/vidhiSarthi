import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import GradientHeader from "../../../components/GradientHeader";

export default function SakshyaAdhiniyam() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "भारतीय साक्ष्य अधिनियम, 2023",
          headerBackground: () => <GradientHeader />,
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
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
