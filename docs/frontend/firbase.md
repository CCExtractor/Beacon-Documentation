---
title: Setting Up Firebase
sidebar_position: 2
---

# Setting Up Firebase for Google Authentication in Flutter

To integrate Google Authentication into your Flutter app using Firebase, follow the steps below.

## 1. Create a Firebase Project

1. **Sign in to Firebase Console**: Navigate to the [Firebase Console](https://console.firebase.google.com/) and sign in with your Google account.
2. **Add a New Project**: Click on "Add project" and follow the on-screen instructions to create a new project.

## 2. Register Your App with Firebase

### For Android:

1. **Add Android App**: In the Firebase Console, select your project, then click on the Android icon to add an Android app.
2. **Register App**: Enter your app's package name (found in your Flutter project's `android/app/src/main/AndroidManifest.xml`), and provide a nickname and SHA-1 key if needed.
3. **Download `google-services.json`**: After registering, download the `google-services.json` file and place it in your Flutter project at `android/app/`.
4. **Modify `build.gradle` Files**:
   - **Project-level (`android/build.gradle`)**: Add the classpath to the `dependencies` section.
   - **App-level (`android/app/build.gradle`)**: Apply the Google services plugin and add the `google-services.json` file.

### For iOS:

1. **Add iOS App**: In the Firebase Console, click on the iOS icon to add an iOS app.
2. **Register App**: Enter your iOS bundle ID (found in `ios/Runner.xcodeproj`), and provide other required information.
3. **Download `GoogleService-Info.plist`**: After registering, download the `GoogleService-Info.plist` file and place it in your Flutter project at `ios/Runner/`.
4. **Modify `ios/Podfile`**: Ensure the platform is set to iOS 10 or later.
5. **Install Pods**: Run `pod install` in the `ios` directory.

## 3. Enable Google Sign-In in Firebase

1. **Navigate to Authentication**: In the Firebase Console, go to the "Authentication" section.
2. **Set Up Sign-In Method**: Under the "Sign-in method" tab, enable "Google" as a sign-in provider and configure the necessary settings.

## 4. Initialize Firebase in Your Flutter App

In your `main.dart` file, ensure that Firebase is initialized before running the app.

## 5. Implement Google Sign-In

Utilize the `firebase_auth` and `google_sign_in` packages to handle authentication.

## 6. Test Authentication

Run your app on a device or emulator to test the Google Sign-In functionality. Ensure that the Google account used is added as a tester in your Firebase project if your app isn't publicly released.

For more detailed information, refer to the [Firebase Authentication for Flutter](https://firebase.google.com/docs/auth/flutter/start) guide.
