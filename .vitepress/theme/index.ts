import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import StarfishHero from "./components/StarfishHero.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  // Inject the animated mark into the homepage hero's image slot.
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-hero-image": () => h(StarfishHero),
    });
  },
};
