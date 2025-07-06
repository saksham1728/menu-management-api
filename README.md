````markdown
# Menu Management API

A simple, modular REST API for managing menu items with JWT‑protected routes. Built with Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Running the Server](#running-the-server)  
- [API Documentation](#api-documentation)  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  
- [License](#license)  

## Features

- **User Authentication**: Sign up & login with JSON Web Tokens  
- **Menu Management**: Create, list, and delete menu items  
- **Protected Routes**: All menu endpoints require a valid JWT  
- **Error Handling**: Centralized error‑handling middleware  
- **Modular Structure**: Separate controllers, routes, models, and middleware  

## Prerequisites

- [Node.js](https://nodejs.org/) v14+  
- [MongoDB](https://www.mongodb.com/) (local or hosted)  

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-username>/menu-management-api.git
   cd menu-management-api
````

2. **Install dependencies**

   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the project root with the following:

```env
MONGO_URI=mongodb://localhost:27017/menu-db
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
PORT=5000
```

## Running the Server

* **Development** (with auto‑reload via nodemon)

  ```bash
  npm run dev
  ```

* **Production**

  ```bash
  npm start
  ```

By default, the server listens on `http://localhost:5000`.

## API Documentation

All endpoints have been documented in Postman. You can import or view the collection here:

[Menu-API Postman Collection](https://documenter.getpostman.com/view/42697506/2sB34cohuJ)

> **Tip:**
>
> * Set the `{{base_url}}` variable to `http://localhost:5000`.
> * After successful login, copy the returned `token` into the `{{auth_token}}` variable for protected routes.

## Folder Structure

```
menu-management-api/
├── src/
│   ├── config/           # Database connection setup
│   ├── controllers/      # Route handlers
│   ├── middlewares/      # Auth & error middleware
│   ├── models/           # Mongoose schemas
│   ├── routes/           # Express routers
│   ├── utils/            # Helper functions (e.g. JWT generator)
│   ├── app.js            # Express app configuration
│   └── server.js         # Entry point
├── .env                  # Environment variables
├── .gitignore            # Files/folders to ignore in Git
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch

   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

## License

This project is licensed under the MIT License.

```
```
