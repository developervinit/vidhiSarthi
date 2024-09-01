import { Text, View, Image } from "react-native";
import { Link, Stack } from "expo-router";
// import ImageViewer from "../components/ImageViewer";


const Home = () => {
  return (
    <View>
    <Stack.Screen
      options={{
        headerTitle: "विधि सारथी",
        headerStyle: { backgroundColor: "#f4511e" },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white"
        },
        headerLeft: () => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/images/icon.png")}
              style={{ width: 40, height: 40, marginRight: 10, borderRadius: 5 }}
            />
          </View>
        ),
      }}
    />
    <View>
      <Text>This is from Home</Text>
      <Link href="/screens/BhartiyaNyayaSanhita">भारतीय न्याय संहिता, 2023</Link> 
    </View>
    </View>
  );
};

export default Home;
