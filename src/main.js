import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faStar as SolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as RegularStar } from "@fortawesome/free-regular-svg-icons";

library.add(
  faUserSecret,
  faMagnifyingGlass,
  faBell,
  faSortDown,
  SolidStar,
  RegularStar
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
