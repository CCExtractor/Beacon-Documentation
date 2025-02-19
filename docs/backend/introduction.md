---
title: Introduction
sidebar_position: 0
---

# Beacon Backend

The backend of the Beacon app is a robust system designed to facilitate real-time location sharing among users. It leverages several key technologies to ensure efficiency, scalability, and reliability.

## Tech Stack

- **GraphQL** with Apollo Server for efficient data querying and real-time subscriptions.
- **MongoDB Atlas** for scalable cloud-based database management.
- **Node.js** as the server environment for handling requests.
- **Redis** for caching frequently accessed data.
- **Nodemailer** for handling email notifications.
- **Render.com** for backend hosting.

## GraphQL with Apollo Server

The backend is built using [GraphQL](https://graphql.org/) with [Apollo Server](https://www.apollographql.com/docs/apollo-server/), enabling flexible and efficient data queries. Apollo Server supports real-time subscriptions, which push live location updates to clients.

## Real-Time Subscriptions

GraphQL subscriptions enable the backend to send real-time updates when a user's location changes. This ensures immediate location sharing among users, enhancing the app’s responsiveness.

## Database Management with MongoDB Atlas

The backend utilizes [MongoDB Atlas](https://www.mongodb.com/atlas) for scalable and secure database management. MongoDB's document-oriented structure is ideal for handling dynamic location data efficiently.

## Server Environment with Node.js

The backend is powered by [Node.js](https://nodejs.org/), known for its non-blocking, event-driven architecture, which is well-suited for real-time applications.

## Caching with Redis

To improve performance, [Redis](https://redis.io/) is used for caching frequently accessed data. This minimizes database queries, reducing response times and server load.

## Email Services with Nodemailer

[Nodemailer](https://nodemailer.com/) is used to handle email functionalities, such as user verification and notifications. It provides an easy-to-integrate solution for sending emails from the backend.

## Deployment on Render.com

The backend is deployed on [Render](https://render.com/), ensuring a scalable and reliable hosting environment. Render provides automatic deployments and easy integration with cloud databases.

## Example Code

Below is an example of how a GraphQL query might be structured in this backend:

```graphql
query {
  userLocation(userId: "12345") {
    latitude
    longitude
    updatedAt
  }
}
```

For real-time updates, a subscription example:

```graphql
subscription {
  locationUpdated(userId: "12345") {
    latitude
    longitude
    updatedAt
  }
}
```

