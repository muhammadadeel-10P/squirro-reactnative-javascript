module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@services': './src/services',
          types: './@types',
        },
      },
    ],
    'react-native-reanimated/plugin',
    [
      'babel-plugin-inline-dotenv',
      {
        path: '.env',
      },
    ],
  ],
};
