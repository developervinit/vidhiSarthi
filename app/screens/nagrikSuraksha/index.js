import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import GradientHeader from "../../../components/GradientHeader";

export default function NagrikSuraksha() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "भारतीय नागरिक सुरक्षा संहिता, 2023",
          headerBackground: () => <GradientHeader />,
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <View style={styles.container}>
        <Text>
          भारतीय नागरिक संहिता, 2023 की धाराओ और संबंधित प्रावधानों को दर्शाने
          वाली तालिका भविष्य में यंहा प्रदर्शित होगी |
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
