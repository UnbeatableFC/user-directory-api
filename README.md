# User Directory API

## Overview

User Directory API is a clean, production-style RESTful service built with Express.js to manage user profiles efficiently. It provides comprehensive CRUD (Create, Read, Update, Delete) capabilities while maintaining data integrity through strict validation and structured middleware.

## Features

- **Full CRUD endpoints** for user management:
  - List all users
  - Get a single user by ID
  - Create a new user
  - Update existing user
  - Delete user
- **Middleware stack** including:
  - Request logging with HTTP method, URL, and timestamp
  - Validation middleware ensuring required fields (`name`, `email`, `role`) are present and valid
  - 404 error handler for unknown routes
  - Global error handler to catch unexpected errors and respond with JSON
- **Environment-driven configuration** via `.env` file (e.g., configurable server port)
- **In-memory data store for demo purposes**, easily extensible to persistent databases

## Installation and Setup

1. Clone the repository
2. Install dependencies
3. Create `.env` file in project root with PORT set in it
4. Start the server with `npm run dev`
5. API will be accessible at `http://localhost:<PORT>/api/users`


## API Endpoints

| Method | Endpoint           | Description                   |
|--------|--------------------|-------------------------------|
| GET    | `/api/users`       | Retrieve all users             |
| GET    | `/api/users/:id`   | Retrieve a user by ID          |
| POST   | `/api/users`       | Create a new user              |
| PUT    | `/api/users/:id`   | Update an existing user        |
| DELETE | `/api/users/:id`   | Delete a user                  |

All responses are JSON formatted, including errors.

## Middleware

- **LoggerMiddleware:** Logs each request’s method, URL, and timestamp. 
- **Validation:** Verifies that `name`, `email` (valid format), and `role` are provided on create/update requests; returns detailed error info if invalid.  
- **NotFound Handler:** Returns JSON error when route is not found.  
- **Error Handler:** Catches unexpected errors and responds with a consistent JSON error message.

## Notes

- This project uses an **in-memory array** to maintain users for demonstration located in the lib folder.  
- The validation and routing structure are modularized with best practices for scalability and maintainability.  
- This API is designed for ease of extension and integration in full-stack applications or microservices.







