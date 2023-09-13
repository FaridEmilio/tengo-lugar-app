import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViajesScreen } from "../screens/Viajes/ViajesScreen";
import { screen } from "../utils";
import { ViajeScreen } from "../screens/Viajes/ViajeScreen";
import { AddViajeScreen } from "../screens/Viajes/AddViajeScreen";
const Stack = createNativeStackNavigator();

export function ViajeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.viajes.viajes}
        component={ViajesScreen}
        options={{ title: "Tengo Lugar VIAJES" }}
      />
      <Stack.Screen
        name={screen.viajes.addViaje}
        component={AddViajeScreen}
        options={{ title: "CREAR VIAJE" }}
      />
      <Stack.Screen
        name={screen.viajes.viaje}
        component={ViajeScreen}
        options={{ title: "VIAJE" }}
      />
    </Stack.Navigator>
  );
}
