---
title: Folder Structure
sidebar_position: 1
---

# BEACON Backend Project Structure

This project follows **Clean Architecture** with the following structure:

```plaintext
beacon/
├── lib/
│   ├── config/                         # Configuration files
│   ├── core/                           # Core application logic
│   ├── data/
│   │   ├── datasources/
│   │   │   ├── local/                  # Local data sources
│   │   │   └── remote/                 # Remote data sources
│   │   ├── models/                     # Data models
│   │   └── repositories/               # Data repositories
│   ├── domain/
│   │   ├── entities/                   # Domain entities
│   │   ├── repositories/               # Domain repositories
│   │   └── usecases/                   # Domain use cases
│   ├── presentation/
│   │   ├── auth/
│   │   │   ├── cubit/                  # Authentication Cubit
│   │   │   ├── widget/                 # Authentication widgets
│   │   │   └── screen/                 # Authentication screens
│   │   ├── home/
│   │   │   ├── cubit/                  # Home Cubit
│   │   │   ├── widget/                 # Home widgets
│   │   │   └── screen/                 # Home screens
│   │   ├── group/
│   │   │   ├── cubit/                  # Group Cubit
│   │   │   ├── widget/                 # Group widgets
│   │   │   └── screen/                 # Group screens
│   │   ├── hike/
│   │   │   ├── cubit/                  # Hike Cubit
│   │   │   ├── widget/                 # Hike widgets
│   │   │   └── screen/                 # Hike screens
│   │   ├── widgets/                    # Shared widgets used across all presentation folders
│   │   └── splash_screen.dart          # Initial screen displayed while loading
├── main.dart                           # App entry point
├── theme/                              # Theme configurations
├── locator.dart                        # Dependency injection setup (using get_it)
├── router.dart                         # App navigation routes
```

## Explanation

- **`config/`** - Stores configuration-related files.
- **`core/`** - Contains core application logic and utilities.
- **`data/`** - Manages data sources, models, and repositories.
  - **`datasources/`** - Divided into `local/` (database, cache) and `remote/` (API calls).
  - **`models/`** - Defines the data structure used in the app.
  - **`repositories/`** - Acts as an interface between data and domain layers.
- **`domain/`** - Contains application business logic.
  - **`entities/`** - Defines core domain objects.
  - **`repositories/`** - Defines abstract repositories implemented in `data/`.
  - **`usecases/`** - Defines individual business logic operations.
- **`presentation/`** - Handles UI and state management.
  - Organized into different features (`auth/`, `home/`, `group/`, etc.), each containing:
    - **`cubit/`** - Manages state using Cubit.
    - **`widget/`** - Stores reusable UI components.
    - **`screen/`** - Defines screens for the feature.
  - **`widgets/`** - Stores shared UI components across screens.
  - **`splash_screen.dart`** - Initial loading screen.
- **`main.dart`** - Entry point of the Flutter application.
- **`theme/`** - Centralized theme configurations.
- **`locator.dart`** - Manages dependency injection using `get_it`.
- **`router.dart`** - Defines application navigation and routing logic.

This structured approach ensures **maintainability, scalability, and testability**. 🚀
