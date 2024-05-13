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
    'inline-dotenv',
    'react-native-reanimated/plugin', // needs to be last
  ],
};
