This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Starting mock server

First you need to clone this (https://github.com/squirro/frontend-coding-challenge) repository.

To start Mock server, run the following command from the _root_ of book-store-api directory:

```bash
# using npm
npm start

```

## Step 2: Setting up .env into project

In the root of your project, create a .env file and add the following variables containing the base urls of the required endpoints.

```bash
# To fetch book store data
API_URL="http://localhost:3000/"

if you find connectivity issue please add your ip address instead of "localhost". For an example,  http://192.168.0.0:3000/

# To fetch country data from ISO2
API_COUNTRIES="https://countriesnow.space/api/v0.1/countries/"
```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 5: Running unit tests

In order to run test cases. Execute below command

```bash
# using npm
npm run test
```
