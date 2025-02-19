---
title: GraphQL Schema
sidebar_position: 4
---

# GraphQL Schema Documentation

## Overview

This documentation details the GraphQL schema for a location-based group tracking application. The schema defines the structure for managing users, groups, beacons (tracking sessions), and real-time location updates.

## Types

### Location

Represents geographical coordinates

```graphql
type Location {
  lat: String!
  lon: String!
}
```

### Beacon

Represents a tracking session

```graphql
type Beacon {
  _id: ID!
  title: String
  shortcode: String!
  createdAt: Float!
  updatedAt: Float!
  startsAt: Float!
  expiresAt: Float!
  location: Location! # Most recent location
  leader: User! # Session leader
  showAdminName: Boolean!
  followers: [User!]! # Session participants
  route: [Location!]! # Track history
  landmarks: [Landmark!]! # Points of interest
  group: Group! # Parent group
}
```

### Landmark

Represents points of interest during a tracking session

```graphql
type Landmark {
  _id: ID!
  createdAt: Float!
  title: String!
  location: Location!
  createdBy: User!
}
```

### User

Represents application users

```graphql
type User {
  _id: ID!
  createdAt: Float!
  name: String # Optional for anonymous access
  email: String # Optional for anonymous access
  isVerified: Boolean
  location: Location # Optional for anonymous access
  beacons: [Beacon!]!
  groups: [Group!]!
}
```

### Group

Represents user groups

```graphql
type Group {
  _id: ID!
  title: String
  shortcode: String!
  leader: User!
  members: [User!]!
  beacons: [Beacon!]!
}
```

## Queries

### User Queries

- `me: User`: Get current user's profile
- `hello: String`: Basic health check query

### Beacon Queries

- `beacon(id: ID!): Beacon!`: Get specific beacon
- `nearbyBeacons(id: ID!, location: LocationInput!, radius: Float!): [Beacon!]!`: Find beacons within radius
- `beacons(groupId: ID!, page: Int, pageSize: Int): [Beacon!]!`: Get paginated beacons for a group
- `filterBeacons(id: ID!, type: String): [Beacon!]!`: Filter beacons by type

### Group Queries

- `group(id: ID!): Group!`: Get specific group
- `groups(page: Int, pageSize: Int): [Group!]!`: Get paginated list of user's groups

## Mutations

### Authentication

```graphql
register(user: RegistrationInput): User!
login(id: ID, credentials: AuthPayload): String!
oAuth(userInput: oAuthInput): String
sendVerificationCode(email: String!): String!
completeVerification(userId: String!): User!
```

### Group Management

```graphql
createGroup(group: GroupInput): Group!
joinGroup(shortcode: String!): Group!
removeMember(groupId: ID!, memberId: ID!): User!
changeShortcode(groupId: ID!): Group!
```

### Beacon Management

```graphql
createBeacon(beacon: BeaconInput, groupID: String!): Beacon!
joinBeacon(shortcode: String!): Beacon!
deleteBeacon(id: ID!): Boolean!
rescheduleHike(newExpiresAt: Float!, newStartsAt: Float!, beaconID: ID!): Beacon!
changeLeader(beaconID: ID!, newLeaderID: ID!): Beacon!
```

### Location & Safety

```graphql
createLandmark(landmark: LandmarkInput, beaconID: ID!): Landmark!
updateUserLocation(id: ID!, location: LocationInput!): User
sos(id: ID!): User!
```

## Subscriptions

### Real-time Updates

```graphql
type Subscription {
  beaconLocations(id: ID!): BeaconLocationsPayload!
  JoinLeaveBeacon(id: ID!): JoinLeaveBeaconPayload!
  groupUpdate(groupIds: [ID!]): UpdatedGroupPayload!
}
```

### Subscription Payloads

#### BeaconLocationsPayload

```graphql
type BeaconLocationsPayload {
  userSOS: User # SOS alerts
  route: [Location] # Route updates
  updatedUser: User # User location updates
  landmark: Landmark # New landmarks
}
```

#### JoinLeaveBeaconPayload

```graphql
type JoinLeaveBeaconPayload {
  newfollower: User
  inactiveuser: User
}
```

#### UpdatedGroupPayload

```graphql
type UpdatedGroupPayload {
  groupId: ID!
  newUser: User
  newBeacon: Beacon
  deletedBeacon: Beacon
  updatedBeacon: Beacon
}
```

## Input Types

### Location Input

```graphql
input LocationInput {
  lat: String!
  lon: String!
}
```

### Beacon Input

```graphql
input BeaconInput {
  title: String
  startsAt: Float # Default is Date.now
  expiresAt: Float!
  startLocation: LocationInput!
}
```

### Authentication Inputs

```graphql
input AuthPayload {
  email: String!
  password: String!
}

input RegistrationInput {
  name: String!
  credentials: AuthPayload
}

input oAuthInput {
  email: String
  name: String
}
```

### Other Inputs

```graphql
input LandmarkInput {
  title: String!
  location: LocationInput!
}

input GroupInput {
  title: String!
}
```

## Notes

- All IDs are represented as GraphQL ID type
- Timestamps are represented as Float type (Unix timestamps)
- Required fields are marked with !
- Arrays of required items are marked with [Type!]
- Required arrays are marked with [Type]!
- Required arrays of required items are marked with [Type!]!
