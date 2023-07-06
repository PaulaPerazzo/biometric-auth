# Biometric Login App
This project is a simple mobile application built using JavaScript, Expo, and React Native. The main focus of this project was to study the implementation of biometric authentication (Face ID or Fingerprint ID) for user login. The biometrics library used for this project is Expo Local Authentication.

## Features
 - Login Screen: A screen where the user can enter their credentials (username and password) to log in.
 - Protected Screen: A screen that is only accessible after successful biometric authentication.
 - Biometric Authentication: The application utilizes the device's biometric capabilities (Face ID or Fingerprint ID) to authorize the user's login.
 - Expo Local Authentication: The Expo Local Authentication library is used to interface with the device's biometric functionalities.

## Prerequisites
Before running the application, make sure you have the following software installed:
 - Node.js: Install Node.js from the official website.
 - Expo CLI: Install Expo CLI globally by running the following command:

```shell
npm install -g expo-cli
```

## Getting Started
Follow these steps to run the application:

1. Clone the repository:
```shell
git clone https://github.com/PaulaPerazzo/biometric-auth.git
```

2. Navigate to the project directory:
```shell
cd biometric-login-app
```

3. Install dependencies:
```shell
npm install
```
or
```shell
yarn install
```

4. Start the Expo development server:
```shell
expo start
```

5. Use your preferred method (Expo Go app, iOS Simulator, Android Emulator) to run the application.

## Configuration
The Expo Local Authentication library provides a simple interface to integrate biometric authentication into your application. The configuration for this project is already set up, but you can modify it if needed.

 - App.js: The main entry point of the application. It contains the navigation setup and routes to the login and protected screens.
 - pages/LoginPage.js: The login screen component where the user can enter their credentials.
 - pages/HomePage.js: The protected screen component that is only accessible after successful biometric authentication.

## Resources
 - [Expo](https://docs.expo.dev/)
 - [React Native](https://reactnative.dev/)
 - [Expo Local Authentication](https://docs.expo.dev/versions/latest/sdk/local-authentication/)

## Acknowledgments
This Medium article helped and inspired me to create this application to learn new things: https://medium.com/swlh/how-to-use-face-id-with-react-native-or-expo-134231a25fe4

Also, note that it may not work correctly in iOS devices, because it is not authorizaed in expo client mode, but if you want to try in bare React Native, there is also this article explaining: https://medium.com/@championuzoma/biometrics-authentication-in-android-and-ios-apps-with-react-native-c8fc1ebd376e
