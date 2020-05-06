import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mf/sidenavbar",
  app: () => System.import("@vue-mf/sidenavbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@vue-mf/dogs-dashboard",
  app: () => System.import("@vue-mf/report-dashboard"),
  activeWhen: "/reports",
});

start();
