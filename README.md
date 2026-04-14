# Uptime Monitoring API

A lightweight and secure RESTful API built with Node.js for monitoring website and service uptime. Track availability, response times, and get real-time up/down status of your links.

---

## ✨ Features

- **User Management**: Create, edit, and delete users
- **Token-based Authentication** (JWT)
- **Secure Logout** mechanism
- **Monitor Management**: Add, edit, and delete monitoring links
- **Rate Limiting** on sensitive endpoints
- **Uptime Checking**: Manually or automatically check if a link is Up or Down
- **Up/Down Status Tracking**
- **RESTful API** design

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose) _(recommended)_
- **Authentication**: JWT (JSON Web Tokens)
- **Rate Limiting**: express-rate-limit
- **Environment Management**: dotenv
- **Validation**: Joi / express-validator (optional)
- **Logging**: Winston / Morgan
