import { Text, View, Image, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import Button from "../components/Button";
import GradientHeader from "../components/GradientHeader";

const Home = () => {
  const router = useRouter();

  function redirectTo(path) {
    router.push(`/screens/${path}`);
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "विधि सारथी",
          headerBackground: () => <GradientHeader />,

          headerTitleStyle: {
            fontWeight: "bold",
            color: "black",
          },
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/icon.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: 5,
                }}
              />
            </View>
          ),
        }}
      />
      <View style={styles.container}>
        <View style={styles.containerHome}>
          <Text>This is from Home</Text>
          <Button
            onPress={() => redirectTo("BhartiyaNyayaSanhita")}
            title="भारतीय न्याय संहिता, 2023"
            buttonPadding={[5, 10]}
            buttonMargin={[10]}
            buttonColor="blue"
            textColor="white"
            buttonRadius={5}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Centers children horizontally
  },

  containerHome: {
    marginTop: 50,
    backgroundColor: "green",
  },
});

export default Home;
