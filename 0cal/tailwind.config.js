// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require('tailwindcss/defaultTheme')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('tailwindcss/defaultConfig')
const fontSize = config.theme.fontSize
const fontFamily = config.theme.fontFamily
const boxShadow = config.theme.boxShadow

/**
 * カラーパレット
 * デザインデータに登録されているカラーパレットを登録
 * classでの呼び出し時は`.{text | bg | border ...}-c-{label}`
 */
const colorPalette = {
  primary: '#E07F6A',
  disabled: '#DADADA',
}

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  mode: 'jit',
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    // enabled: false,
    purge: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    content: [
      'app/components/**/*.vue',
      'app/layouts/**/*.vue',
      'app/pages/**/*.vue',
      'app/plugins/**/*.js',
      'app/plugins/**/*.ts',
      'app/nuxt.config.js',
      'app/nuxt.config.ts',
    ],
    options: {
      whitelist: [
        'fixed',
        'z-10',
        'shadow-xs',
        'rounded-full',
        'object-cover',
        'hidden',
        'static',
      ],
      whitelistPatterns: [/^(text|mx|w|h|bg)-.*/],
    },
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    /**
     * color
     * プロジェクトごとにデザイントークンで設定された色をcolorPaletteにてカスタマイズして設定してください。
     */
    colors: {
      ...colors,
      c: {
        ...colorPalette,
      },
    },
    /**
     * タイポグラフィ
     * フォントサイズ等を指定します。
     * プロジェクトごとにデザイントークンで設定されているフォントサイズおよびline-heightをカスタマイズしてください。
     * line-heightは親要素で計算された値の継承を防ぐため、基本的に単位（rem,em等）は付けないこと。
     */
    fontSize: {
      ...fontSize,
      xxs: ['0.625rem', { lineHeight: '1' }],
      xs: ['0.75rem', { lineHeight: '1' }],
      sm: ['0.875rem', { lineHeight: '1' }],
      base: ['1rem', { lineHeight: '1' }],
      lg: ['1.25rem', { lineHeight: '1.5' }],
      xl: ['1.5rem', { lineHeight: '1.5' }],
      '2xl': ['2rem', { lineHeight: '1.5' }],
      '3xl': ['3rem', { lineHeight: '1.5' }],
      '4xl': ['3.5rem', { lineHeight: '1.8' }],
      '5xl': ['3.75rem', { lineHeight: '1.8' }],
      '6xl': ['4rem', { lineHeight: '1.8' }],
      '7xl': ['4.5rem', { lineHeight: '1.8' }],
      '8xl': ['6rem', { lineHeight: '1.8' }],
      '9xl': ['8rem', { lineHeight: '1.8' }],
    },
    /**
     * line-height
     * ベースの行間を指定します。
     * 親要素で計算された値の継承を防ぐため、基本的に単位（rem,em等）は付けないこと。
     */
    lineHeight: {
      none: '1', // for label and heading
      tight: '1.25',
      normal: '1.5', // for paragraph text
      relaxed: '1.8',
    },
    /**
     * font-family
     * プロジェクトで使用するフォントを定義します。
     */
    fontFamily: {
      ...fontFamily,
      sans: [...fontFamily.sans],
      barlow: ['Barlow', 'sans-serif'],
    },
    /**
     * box-shadow
     * 要素の周りに落とす影の大きさを定義します。
     * デザイントークンに設定されているものを以下に設定してください。
     */
    boxShadow: {
      ...boxShadow,
      0: 'none',
      1: '0px 2px 8px rgba(100, 44, 22, 0.15)',
      focus: '0 0 2px 4px #7db5d3',
    },
    extend: {
      opacity: {
        40: '0.4',
        70: '0.7',
      },
      maxWidth: {
        main: '1200px',
      },
      margin: {
        0.5: '0.125rem',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    padding: ['responsive', 'odd', 'last'],
    margin: ['responsive', 'odd', 'last'],
    fontWeight: ['last'],
    flex: ['responsive'],
    borderWidth: ['first', 'last', 'responsive'],
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    background: ['focus', 'hover'],
  },
  plugins: [],
  corePlugins: {
    // accessibility: false,
    alignContent: false,
    fill: false,
    // fontFamily: false,
    // fontSmoothing: false,
    placeholderColor: false,
    placeholderOpacity: false,
    // rotate: false,
    // scale: false,
    // skew: false,
    space: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
    textOpacity: false,
    textTransform: false,
    userSelect: false,
    // verticalAlign: false,
    // visibility: false,
    // whitespace: false,
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
