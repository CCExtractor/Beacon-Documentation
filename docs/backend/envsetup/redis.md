# Setting Up Redis Cloud

## 1. Create a Redis Cloud Account

Visit the [Redis Cloud website](https://redis.com/try-free/) and sign up for a free account.

## 2. Create a Database

- After logging in, click on **"Create a Subscription"**.
- Choose the **Free** plan or select a plan that suits your requirements.
- Click **"Next"** to proceed.
- In the **"Create Database"** section, provide a name for your database.
- Select the desired cloud provider and region.
- Click **"Activate"** to create your database.

## 3. Configure Database Access

- Once the database is active, navigate to the **"Security"** tab.
- Set a **password** for the default user. This password will be used for authentication.

## 4. Retrieve Connection Details

- Go to the **"Overview"** tab of your database.
- Locate the **"Public Endpoint"**; this is your Redis server URL.

## 5. Update Your `.env` File

In your project's `.env` file, set the following environment variables:

```env
REDIS_URL=redis://<username>:<password>@<public-endpoint>:<port>
REDIS_AUTH=<password>
REDIS_PORT=<port>
REDIS_USERNAME=<username>
```

- Replace `<username>` with `default` (unless you've created a new user).
- Replace `<password>` with the password you set in step 3.
- Replace `<public-endpoint>` with the endpoint from step 4.
- Replace `<port>` with the port number specified in the endpoint (default is 6379).

## 6. Test the Connection

Use a Redis client or a tool like [Redis Insight](https://redis.com/redis-enterprise/redis-insight/) to connect to your Redis database and ensure everything is working correctly.

By following these steps, you'll have Redis Cloud set up and configured for your application. For more detailed instructions, refer to the [Redis Cloud Quick Start Guide](https://redis.io/docs/latest/operate/rc/rc-quickstart/).
