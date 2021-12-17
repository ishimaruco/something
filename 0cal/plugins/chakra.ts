import Chakra from "@chakra-ui/vue";
import Vue from "vue/types/umd";

const customIcons = {
  'icon-submit': {
    path: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#E07F6A"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9C11.5523 9 12 9.44772 12 10V12C12 13.3062 12.8348 14.4175 14 14.8293V10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10V14.8293C17.1652 14.4175 18 13.3062 18 12V10C18 9.44772 18.4477 9 19 9C19.5523 9 20 9.44772 20 10V12C20 14.419 18.2822 16.4367 16 16.9V20C17.1046 20 18 20.8954 18 22V29C18 30.6569 16.6569 32 15 32C13.3431 32 12 30.6569 12 29V22C12 20.8954 12.8954 20 14 20V16.9C11.7178 16.4367 10 14.419 10 12V10C10 9.44772 10.4477 9 11 9ZM14 29V22H16V29C16 29.5523 15.5523 30 15 30C14.4477 30 14 29.5523 14 29Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.5C24 10.9691 25.0345 10 26 10C26.9655 10 28 10.9691 28 12.5C28 14.0309 26.9655 15 26 15C25.0345 15 24 14.0309 24 12.5ZM27 16.8624C28.8037 16.3512 30 14.4872 30 12.5C30 10.1649 28.3482 8 26 8C23.6518 8 22 10.1649 22 12.5C22 14.4872 23.1963 16.3512 25 16.8624V20C23.8954 20 23 20.8954 23 22V29C23 30.6569 24.3431 32 26 32C27.6569 32 29 30.6569 29 29V22C29 20.8954 28.1046 20 27 20V16.8624ZM25 22V29C25 29.5523 25.4477 30 26 30C26.5523 30 27 29.5523 27 29V22H25Z" fill="white"/>
    </svg>`,
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
