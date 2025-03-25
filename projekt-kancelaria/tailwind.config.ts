import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-shadow': 'inset 0 4px 10px 0 #00000080',
        'drop-shadow': '0px 4px 4px 0px #00000040',
        'drop-shadow-inset': 'inset 0px 4px 4px 0px #00000040',
      },
      height: {

      },
      minHeight: {
        40: '40px',
        130: '130px',
      },
      maxHeight: {
        50: '50px',
        120: '120px',
        170: '170px',
      },  
      fontSize: {
        LawName: [
          '45px',
          {
            lineHeight: ' 50px',
            fontWeight: '500',
          },
        ],
        ButtonFont: [
          '26px',
          {
            lineHeight: '30px',
            fontWeight: '100',
          }
        ],
        TitleNameFont: [
          '25px',
          {
            lineHeight: '30px',
            fontWeight: '500'
          }
        ], 
        SmallTitleFont: [
          '20px',
          {
            lineHeight: '25px',
            fontWeight: '300'
          }
        ],
        LargeTextFont: [
          '25px',
          {
            lineHeight: '30px',
            fontWeight: '300'
          }
        ],
        NormalTextFont: [
          '20px',
          {
            lineHeight: '26px',
            fontWeight: '200'
          }
        ],
        FooterFont: [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: '100'
          }
        ]
      },
      fontFamily: {},
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'tablet': '992px',
        'desktop': '1200px',
      },
      zIndex: {
        1: '1',
        10: '10',
      }
    },
    colors: {
      DarkGreen: '#006400',
      White: '#FFFFFF',
      RedAllert: '#ff0000',
      Page404: '#0066ff',
      Gray: '#b3b3b3'
    },
    spacing: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        16: '16px',
        20: '20px',
        30: '30px',
        40: '40px',
        50: '50px',
        60: '60px',
        80: '80px',
        120: '120px',
        170: '170px',
        200: '200px',
        400: "400px",
        500: '500px',
        600: '600px',
    }
  },
  plugins: [],
} satisfies Config;
//breakpoints: 1024 / 