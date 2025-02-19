# Setting Up Email and Password for OTP Sending

## 1. Create a New Email Account (Optional)

If you don't want to use your personal email, create a new email account (e.g., Gmail) specifically for sending OTP codes.

## 2. Enable Less Secure Apps (For Gmail)

To allow your application to send emails using Gmail, you need to enable "Less Secure Apps" access.

1. Log in to your [Google Account Security page](https://myaccount.google.com/security).
2. Scroll down to **"Less secure app access"**.
3. Click **"Turn on access (not recommended)"**.
4. Confirm by enabling the toggle.

> **Note:** If you have 2-Step Verification enabled, you must generate an App Password instead.

## 3. Retrieve Email Credentials

- **EMAIL**: Your email address (e.g., `example@gmail.com`)
- **EMAIL_PASSWORD**: Your email account password or App Password if 2FA is enabled.

## 4. Update Your `.env` File

Add the following environment variables to your `.env` file:

```env
EMAIL=your-email@example.com
EMAIL_PASSWORD=your-email-password
```

> **Important:** Keep your `.env` file secure and do not share it publicly.

## 5. Test Email Sending

Use a simple Node.js script to verify the email configuration:

```javascript
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: "recipient@example.com",
  subject: "OTP Test",
  text: "Your OTP is 123456",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
```

Run the script using:

```bash
node test-email.js
```

If configured correctly, you should receive an email with an OTP test message.

Now, your application is ready to send OTP codes via email!
