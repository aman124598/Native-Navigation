import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { createStaticNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
    Profile: ProfileScreen
  }
});

const Navigation = createStaticNavigation(Stack);

export default function StaticNavigator() {
  return (
    <Navigation />
  );
}