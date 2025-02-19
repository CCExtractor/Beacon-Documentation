---
title: GraphQL Resolvers
sidebar_position: 5
---

# GraphQL Resolvers Documentation

## Overview

This documentation covers the GraphQL resolvers implementation for a location-based group tracking application. The system allows users to create groups, beacons (tracking sessions), and landmarks while providing real-time location updates through subscriptions.

## Dependencies

- apollo-server-express: For GraphQL server functionality
- bcryptjs: Password hashing
- jsonwebtoken: JWT authentication
- nanoid: Unique ID generation
- geolib: Geolocation utilities
- nodemailer: Email services
- MongoDB/Mongoose: Database operations

## Core Features

### Authentication

- User registration with email/password
- OAuth support
- JWT-based authentication
- Email verification system

### Query Resolvers

#### `me`

Returns the currently authenticated user's profile.

#### `beacon(id: ID!)`

Returns a specific beacon by ID. User must be either the leader or a follower of the beacon.

#### `group(id: ID!)`

Returns a specific group by ID. User must be either the leader or a member of the group.

#### `groups(page: Int!, pageSize: Int!)`

Returns paginated list of groups the user belongs to.

#### `beacons(groupId: ID!, page: Int!, pageSize: Int!)`

Returns paginated list of beacons in a group, sorted by:

1. Active beacons
2. Upcoming beacons
3. Inactive beacons

#### `filterBeacons(id: ID!, type: String!)`

Filters beacons by type:

- ACTIVE: Currently running
- INACTIVE: Expired
- UPCOMING: Not yet started

#### `nearbyBeacons(location: LocationInput!, id: ID!, radius: Float!)`

Returns beacons within specified radius of given location.

### Mutation Resolvers

#### User Management

- `register(user: UserInput!)`: Register new user
- `oAuth(userInput: OAuthInput!)`: Handle OAuth login
- `login(id: ID, credentials: CredentialsInput)`: User login
- `sendVerificationCode(email: String!)`: Send email verification
- `completeVerification(userId: ID!)`: Complete email verification

#### Group Management

- `createGroup(group: GroupInput!)`: Create new group
- `joinGroup(shortcode: String!)`: Join existing group
- `removeMember(groupId: ID!, memberId: ID!)`: Remove group member
- `changeShortcode(groupId: ID!)`: Generate new group shortcode

#### Beacon Management

- `createBeacon(beacon: BeaconInput!, groupID: ID!)`: Create new beacon
- `joinBeacon(shortcode: String!)`: Join existing beacon
- `deleteBeacon(id: ID!)`: Delete beacon
- `rescheduleHike(newStartsAt: DateTime!, newExpiresAt: DateTime!, beaconID: ID!)`: Update beacon schedule

#### Location & Safety

- `createLandmark(landmark: LandmarkInput!, beaconID: ID!)`: Create location landmark
- `updateUserLocation(id: ID!, location: LocationInput!)`: Update user location
- `sos(id: ID!)`: Trigger SOS alert

### Subscriptions

#### `beaconLocations`

Real-time updates for:

- User locations
- SOS alerts
- Route changes
- New landmarks

#### `JoinLeaveBeacon`

Notifications when users:

- Join beacon
- Leave beacon

#### `groupUpdate`

Updates for:

- New members
- New beacons
- Deleted beacons
- Updated beacons

## Security Features

1. JWT-based authentication
2. Password hashing using bcrypt
3. Permission checks for all operations
4. Group membership validation
5. Beacon access control

## Real-time Features

- Location tracking
- SOS alerts
- Group activity monitoring
- Beacon status updates

## Error Handling

- Custom error types for different scenarios
- Proper error messages for invalid operations
- Duplicate shortcode handling
- Invalid access attempts

## Best Practices

1. Populated references for efficient data access
2. Pagination for large data sets
3. Proper permission checks before operations
4. Data validation before database operations
5. Proper error handling and user feedback
