---
title: Generating MongoDB Connection URL
sidebar_position: 2
---

# Generating a MongoDB Connection URL

To set up the Beacon backend, you need a MongoDB connection URL. Follow these steps to generate it using [MongoDB Atlas](https://www.mongodb.com/atlas):

## Step 1: Create a MongoDB Atlas Account

1. Visit [MongoDB Atlas](https://www.mongodb.com/atlas) and sign up or log in.
2. Click on **Create a New Project** and give it a name.
3. Click **Next** and then **Create Project**.

## Step 2: Set Up a Cluster

1. In your project dashboard, click on **Build a Database**.
2. Choose **Shared** (Free) for a free-tier cluster.
3. Select a cloud provider (AWS, GCP, or Azure) and region.
4. Click **Create Cluster**.

## Step 3: Configure Database Access

1. Once the cluster is created, go to **Database Access** in the left sidebar.
2. Click **Add New Database User**.
3. Set a username and password (you'll use these in your `.env` file).
4. Choose **Read and Write Access** and click **Add User**.

## Step 4: Allow Network Access

1. Go to **Network Access** in the left sidebar.
2. Click **Add IP Address**.
3. Select **Allow Access from Anywhere** or add your IP manually.
4. Click **Confirm**.

## Step 5: Get the Connection URL

1. Go to **Database Deployments** and click **Connect** on your cluster.
2. Select **Connect your application**.
3. Copy the provided **Connection String**.
4. Replace `<username>` and `<password>` with the credentials from Step 3.

## Step 6: Add the URL to Your `.env` File

Paste the connection string into your `.env` file:

```bash
DB=mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority
```

> **Note:** Replace `<username>`, `<password>`, and `<cluster-url>` with your actual values.

Your MongoDB database is now ready to use!
