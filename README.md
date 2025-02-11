# 📞 Backend for Contacts App

## 🚀 Project Overview

**Backend for Contacts App** is a Node.js-based API that provides full CRUD operations for managing a contacts collection. It also includes user authentication and authorization features, such as:

- 🔹 User registration (including Google OAuth)
- 🔹 Login and logout
- 🔹 Token-based authentication (refresh token support)
- 🔹 Password recovery
- 🔹 Pagination, sorting, and filtering for contacts

The project is deployed on **Render**.

## 🛠️ Technology Stack

- **Backend:** Node.js, JavaScript, Express, MongoDB, Mongoose
- **Authentication:** bcrypt, jsonwebtoken, cookie-parser, google-auth-library
- **Validation & Security:** joi, http-errors, cors, dotenv
- **File Uploads & Storage:** multer, Cloudinary
- **Logging & Email:** pino-http, nodemailer, handlebars
- **API Documentation:** Swagger-UI-Express

## 📂 API Endpoints

- 📌 `GET /contacts` - Get list of contacts (supports pagination, sorting, filtering)
- 📌 `POST /contacts` - Create a new contact
- 📌 `GET /contacts/:id` - Get a specific contact
- 📌 `PATCH /contacts/:id` - Update a contact
- 📌 `DELETE /contacts/:id` - Remove a contact
- 🔐 User authentication and authorization routes included

## 📖 Documentation

📑 **API Docs:** [Swagger Documentation](https://contacts-app-a7gm.onrender.com/api-docs/)

## 🚀 Deployment

This project is deployed on **Render**.

## 🔗 Links

- 📂 **Live page:** [Contacts App Backend](https://contacts-app-a7gm.onrender.com)
- 📑 **API Documentation:** [Swagger Docs](https://contacts-app-a7gm.onrender.com/api-docs/)
