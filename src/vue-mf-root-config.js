import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mf/sidenavbar",
  app: () => System.import("@vue-mf/sidenavbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@vue-mf/report-dashboard",
  app: () => System.import("@vue-mf/report-dashboard"),
  activeWhen: "/reports",
});

registerApplication({
  name: "@vue-mf/profile-info",
  app: () => System.import("@vue-mf/profile-info"),
  activeWhen: "/profile-info",
});

start();
