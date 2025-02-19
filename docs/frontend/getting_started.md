---
title: Getting Started
sidebar_position: 1
---

# Setting Up the Beacon Frontend Locally

This guide will help you set up and run the **Beacon frontend application** on your local machine.

## About the Beacon Frontend

The **Beacon frontend** is a Flutter-built native interface designed to ease **group traveling (or hiking).** With this app:

- 📍 The **group leader** can share their real-time location.
- 🧭 Lost members can **navigate back to the group** easily by following the beacon.

## Prerequisites

Before you begin, ensure you have the following installed:

- 🛠 **Flutter SDK** (version 3.0.1 or higher)
- 💻 **Android Studio / VS Code**
- 📱 **A compatible mobile device or emulator**

### Check Your Flutter Version

To verify your Flutter version, run:

```bash
flutter --version
```

## Clone the Repository

First fork the repository
from
[here](https://github.com/CCExtractor/beacon.git)
to your GitHub account and then clone it:

```bash
git clone https://github.com/<username>/beacon.git
cd beacon
```

## Install Dependencies

```bash
flutter pub get
```

## Create a .env File

Create a `.env` file in the root directory of the project and add the following:

```ini
ANDROID_MAP_API_KEY=
IOS_MAP_API_KEY=
HTTP_ENDPOINT=
WEBSOCKET_ENDPOINT=
```

🔑 Follow the instructions in the [API Keys](/docs/backend/getting_started) guide to obtain the required keys.

## Run the Application

```bash
flutter run
```

This command will **build and launch** the application on your connected device or emulator. 🚀
