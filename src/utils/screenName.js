//Video 37 - Se crea esto para evitar futuros errores. por ejemplo el cambia de un nombre
const viajesStack = {
  tab: "ViajesTab", //<- esas son las claves que NUNCA SE PUEDEN REPETIR
  viajes: "Viajes",
  addViaje: "AddViaje",
  viaje: "Viaje",
};

const mensajeriaStack = {
  tab: "MensajeriaTab",
  mensajeria: "Mensajeria",
  chat: "Chat",
};

const rankingStack = {
  tab: "RanckingTab",
  ranking: "Ranking",
};

const searchStack = {
  tab: "SearchTab",
  search: "Search",
};
const accountStack = {
  tab: "AccountTab",
  account: "Account",
  login: "Login",
  register: "Register",
};

export const screen = {
  viajes: viajesStack,
  mensajeria: mensajeriaStack,
  ranking: rankingStack,
  search: searchStack,
  account: accountStack,
};
//se recomienda estructurar bien todo, no meter todo en screen.
