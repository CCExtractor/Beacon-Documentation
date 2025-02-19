---
title: Getting Started
sidebar_position: 2
---

# Setting Up the Beacon Backend Locally

Follow these steps to set up and run the Beacon backend on your local machine.

## Clone the Repository

Begin by cloning the repository:

```bash
git clone git@github.com:CCExtractor/beacon-backend.git
```

## Install Dependencies

Navigate into the project directory and install the required dependencies:

```bash
cd beacon-backend
npm install
```

## Configure Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```bash
DB=mongodb+srv://username:password@bacon.someurl.mongodb.net/test?retryWrites=true&w=majority
JWT_SECRET=somesupersecretstring
REDIS_AUTH=Redis password you get while provisioning a Redis DB
REDIS_URL=Redis DB connection string
REDIS_PORT=Any port you want
REDIS_USERNAME=Username of the user that has access to the Redis DB
INSTANCE=EC2 instance ID
```

> **Note:** Replace placeholder values with actual credentials.

## Start the Server

Run the following command to start the backend server:

```bash
npm run dev
```

Once the server starts, it will be accessible at `http://localhost:4000`.

## Expected Console Output

If everything is set up correctly, you should see the following output in the terminal:

```bash
Server ready at http://localhost:4000/graphql
Subscriptions endpoint at ws://localhost:4000/graphql
```

Your backend is now up and running!
