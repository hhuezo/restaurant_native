import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { screen } from "../../utils";

export function RestaurantsScreen(props) {
  const { navigation } = props;
  const goToRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant);
  };
  return (
    <View>
      <Text> textInComponent </Text>
      <Button title="Crear restaurante" onPress={goToRestaurant}></Button>
    </View>
  );
}
