module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@components': './src/components',
          '@core-ui': './src/core-ui',
          '@redux': './src/redux',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
