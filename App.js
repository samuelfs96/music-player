import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Songs from "./components/Songs";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
//import { useFonts, Asap_400Regular } from "@expo-google-fonts/asap";

const Tab = createBottomTabNavigator();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Asap_400Regular,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "All Songs") {
              iconName = focused
                ? "music-box-multiple"
                : "music-box-multiple-outline";
            } else if (route.name === "Player") {
              iconName = focused ? "play-box" : "play-box-outline";
            } else if (route.name === "Playlist") {
              iconName = focused ? "playlist-music" : "playlist-music-outline";
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#4b49ff",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            paddingBottom: 5,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="All Songs" component={Songs} />
        <Tab.Screen name="Player" component={Player} />
        <Tab.Screen name="Playlist" component={Playlist} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
