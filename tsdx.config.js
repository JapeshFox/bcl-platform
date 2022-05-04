const postcss = require('rollup-plugin-postcss');
// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
const image = require('@rollup/plugin-image');
// const tailwindcss = require('tailwindcss');

module.exports = {
  rollup(config, options) {
    // config.plugins.push(
    //   postcss({
    //     plugins: [
    //       tailwindcss({
    //         purge: [
    //             "./src/**/*.{html,ts,tsx}",
    //         ],
    //         darkMode: false, // or 'media' or 'class'
    //         theme: {
    //           extend: {},
    //         },
    //         variants: {
    //           extend: {},
    //         },
    //         plugins: [],
    //       }),
    //       autoprefixer(),
    //     ],
    //     inject: false,
    //     // only write out CSS for the first bundle (avoids pointless extra files):
    //     extract: !!options.writeMeta,
    //   })
    // );
    config.plugins.unshift(image({}));
    return config;
  },
};
