import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { AddRestauranScreen } from "../screens/Restaurants/AddRestauranScreen";
const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Resturantes" }}
      />

      <Stack.Screen
        name={screen.restaurant.addRestaurant}
        component={AddRestauranScreen}
        options={{ title: "Nuevo restaurante" }}
      />
    </Stack.Navigator>
  );
}
