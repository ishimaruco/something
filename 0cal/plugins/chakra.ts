import Chakra from "@chakra-ui/vue";
import Vue from "vue/types/umd";

const customIcons = {
  'icon-submit': {
    path: `<svg fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#E07F6A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 9a1 1 0 0 1 1 1v2c0 1.306.835 2.418 2 2.83V10a1 1 0 1 1 2 0v4.83A3.001 3.001 0 0 0 18 12v-2a1 1 0 1 1 2 0v2a5.002 5.002 0 0 1-4 4.9V20a2 2 0 0 1 2 2v7a3 3 0 1 1-6 0v-7a2 2 0 0 1 2-2v-3.1a5.002 5.002 0 0 1-4-4.9v-2a1 1 0 0 1 1-1Zm3 20v-7h2v7a1 1 0 1 1-2 0ZM24 12.5c0-1.53 1.035-2.5 2-2.5.965 0 2 .97 2 2.5S26.965 15 26 15c-.965 0-2-.97-2-2.5Zm3 4.362c1.804-.51 3-2.375 3-4.362 0-2.335-1.652-4.5-4-4.5s-4 2.165-4 4.5c0 1.987 1.196 3.851 3 4.362V20a2 2 0 0 0-2 2v7a3 3 0 1 0 6 0v-7a2 2 0 0 0-2-2v-3.138ZM25 22v7a1 1 0 1 0 2 0v-7h-2Z" fill="#fff"/></svg>`,
    // If the icon's viewBox is `0 0 24 24`, you can ignore `viewBox`
    viewBox: "0 0 40 40",
  },
};

Vue.use(Chakra, {
  /**
   * Extends the Chakra theme object with the values
   * provided in this option. Chakra UI recursively merges this
   * theme object and will overwrite defaults with extended theme
   * values.
   *
   * @see
   * - Theme specification - https://theme-ui.com/theme-spec/
   * - Example:
   *  https://vue.chakra-ui.com/extending-theme#extending-theme-object
   */
  extendTheme: {},
  /**
   * Enables extension of icons inside the Chakra app.
   * Currently it only supports FontAwesome icons.
   *
   * @see
   *  - Icons: https://vue.chakra-ui.com/icon
   */
  icons: {
    /**
     * The pack of the icons being used.
     * This defaults to FontAwesome (fa).
     */
    iconPack: "fa",
    /**
     *The object of icon paths to be consumed.
     * For example:
     *  - faArrowUp
     *  - faArrowDown
     */
    iconSet: {},
    /**
     * Custom SVG paths that can be added to the
     * Chakra application and can be accessed by Chakra.
     * Chakra defaults all SVG icon paths 'viewBox' to `0 0 24 24`.
     *
     * e.g.
     * extend: {
     *    github: {
     *       path: `<path ...> </path>`,
     *        viewbox: `0 0 24 24`
     *    }
     * }
     *
     * @see
     *  - Icons: https://vue.chakra-ui.com/icon
     */
    extend: {
        ...customIcons
    },
  },
});
