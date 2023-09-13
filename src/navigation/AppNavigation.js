import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { ViajeStack } from "./ViajeStack";
import { MensajeriaStack } from "./MensajeriaStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";
import { screen } from "../utils";
import { color } from "@rneui/base";

const Tab = createBottomTabNavigator();
//SI ALGUNA RUTA NO ESTA AÑADIDA AL SISTEMA DE NAVEGACION ES IMPOSIBLE ACCEDER A ELLA. ES POR ESO QUE IGUALEMNTE SE LA AÑADE PERO CON UN PAR DE CODIGOS SE LA ESCONDE.
export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarIcon: ({ size, color }) => tabIconOptions(route, size, color),
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        name={screen.viajes.tab}
        component={ViajeStack}
        options={{ title: "VIAJES" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "ENVíOS" }}
      />

      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "BUSCAR" }}
      />
      <Tab.Screen
        name={screen.mensajeria.tab}
        component={MensajeriaStack}
        options={{ title: "MENSAJES" }}
      />

      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "MI CUENTA " }}
      />
    </Tab.Navigator>
  );
}

//Funcion para dar un icono a cada boton IMPORTANTE: EVITAR LOS SWITCHS, PERO TARDAN MUCHO
function tabIconOptions(route, size, color) {
  let iconName;

  if (route.name === screen.viajes.tab) {
    iconName = "car-back";
  }

  if (route.name === screen.mensajeria.tab) {
    iconName = "forum-outline";
  }

  if (route.name === screen.ranking.tab) {
    iconName = "package-variant-closed";
  }

  if (route.name === screen.search.tab) {
    iconName = "magnify";
  }

  if (route.name === screen.account.tab) {
    iconName = "account-circle";
  }

  return (
    <Icon
      type="material-community"
      name={iconName}
      color={color}
      size={size}
    ></Icon>
  );
}
