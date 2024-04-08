/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            // min-width
            'tablet-sm': '500px',
            'tablet-md': '640px',
            'tablet-lg': '735px',
            'laptop-sm': '768px',
            'laptop-md': '834px',
            'laptop-lg': '900px',
            'desktop-sm': '1024px',
            'desktop-md': '1280px',
            'desktop-lg': '1441px',
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "a-bg-F7F9F9": "#F7F9F9",
                "a-primary-fff2f2": "#fff2f2",
                "a-primary-ffd5d0": "#ffd5d0",
                "a-primary-ffbfb7": "#ffbfb7",
                "a-primary-ff9285": "#ff9285",
                "a-primary-ff6653": "#ff6653",
                "a-primary-ee361f": "#ee361f",
                "a-primary-cc230e": "#cc230e",
                "a-primary-aa1402": "#aa1402",
                "a-primary-880f00": "#880f00",
                "a-primary-660b00": "#660b00",
                "a-primary-440800": "#440800",

                "a-black-333333": "#333333",
                "a-black-4D4D4D": "#4D4D4D",
                "a-black-666666": "#666666",
                "a-black-808080": "#808080",
                "a-black-999999": "#999999",
                "a-black-CCCCCC": "#CCCCCC",

                "a-white-FAFAFA": "#FAFAFA",
                "a-white-F8F8F8": "#F8F8F8",
                "a-white-FFFFFF": "#FFFFFF",
                "a-gray-AAAAAA": "#AAAAAA",
                "a-gray-F4F4F4": "#F4F4F4",
                "a-gray-E5E5E5": "#E5E5E5",
                "a-gray-E6E6E6": "#E6E6E6",
                "a-gray-909090": "#909090",
                "a-green-28A745": "#28A745",
                "a-red-E93C3C": "#E93C3C",
                "a-brown-c88d6d": "#c88d6d",

                "a-gray-1": "#b3b3b3",
                "a-gray-2": "#a2a2a2",
                "a-gray-3": "#6a6b6b",
                "a-gray-4": "#aaaaaa",

                "a-positive": '#28a745',
                "a-negative": '#e93c3c',
            },
            fontFamily: {
                main: ["main"],
            },
            fontSize: {
                8: '8px',
                10: '10px',
                12: '12px',
                14: '14px',
                16: '16px',
                18: '18px',
                20: '20px',
                22: '22px',
                24: '24px',
                26: '26px',
                28: '28px',
                32: '32px',
                40: '40px',
            },
            spacing: {
                "10px": "10px",
                "14px": "14px",
                "30px": "30px",
                "50px": "50px",
                "52px": "52px",
                "72px": "72px",
            },
            borderRadius: {
                5: "5px",
                10: "10px",
                20: "20px",
                50: "50px",
            },
            maxWidth: {
              '500px': '500px',
              '1200px': '1200px',
              '1600px': '1600px',
            },
            boxShadow: {
                "input": "0 1px 2px 0 rgba(15, 23, 42, 0.06)",
                "input-active": "0 0 0 2px rgba(249, 166, 1, 0.2)",
                "box-profile": "0 2px 6px 0 rgba(0, 0, 0, 0.15)"
            },
        },
    },
    plugins: [],
};
