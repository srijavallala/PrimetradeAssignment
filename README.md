# PrimetradeAssignment

## Overview
**PrimetradeAssignment** is a **full-stack project** built with Node.js (backend) and React.js (frontend).  
It includes **user authentication**, **role-based access**, and **task management** with CRUD operations.  

---

## Technologies Used
- **Backend**: Node.js, Express.js, SQLite, bcrypt, JWT  
- **Frontend**: React.js, Axios, CSS  
- **Other Tools**: Postman or Swagger for API documentation  

---

## Setup Instructions

### Backend
1. Navigate to the backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env file in the backend root with:
```bash
PORT=5000
JWT_SECRET=your_jwt_secret
```
4. Start the backend server:
```bash
npm start
```
Server runs at: http://localhost:5000

---

### Frontend

1. Navigate to the frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the frontend server:
```bash
npm start
```
Frontend runs at: http://localhost:3000

---

## Features

### Backend

- User registration & login
- JWT authentication
- Role-based access (Admin can delete tasks)
- CRUD operations for tasks
- Input validation & error handling

### Frontend

- Registration & login forms
- Protected dashboard accessible with valid JWT
- Add, edit, delete tasks
- Toast messages for success/error notifications

---

## API Endpoints

### Authentication

- POST /api/v1/auth/register – Register a new user
- POST /api/v1/auth/login – Login and get JWT

### Tasks (Authentication Required)

- GET /api/v1/tasks – Get all tasks
- POST /api/v1/tasks – Create a task
- PUT /api/v1/tasks/:id – Update a task
- DELETE /api/v1/tasks/:id – Delete a task (Admin only)

---

## Project Structure

```bash
PrimetradeAssignment/
├── backend/
│   ├── src/
│   │   ├── controllers/       # API logic (userController.js, taskController.js)
│   │   ├── models/            # Database models (user.js, task.js)
│   │   ├── routes/            # API routes (authRoutes.js, taskRoutes.js)
│   │   ├── middleware/        # Authentication & role-based middleware
│   │   ├── config/            # Database connection & environment variables
│   │   └── utils/             # Helper functions (JWT utils, error handling)
│   ├── database/              # SQLite database file
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables (e.g., JWT_SECRET)
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components (Login.js, Dashboard.js, TaskCard.js)
│   │   ├── services/          # API call functions (api.js)
│   │   ├── App.js             # Main app component
│   │   └── index.js           # Entry point
│   ├── public/                # Static files
│   ├── package.json           # Frontend dependencies
│   └── README.md              # Frontend-specific instructions (optional)
│
├── README.md                  # Main project README
└── .gitignore                 # Git ignore file (e.g., .env)
```
---

## API Documentation

- This collection demonstrates how each endpoint works, including sample requests, responses, and required headers or tokens.
- The Postman collection for all API endpoints is available in the repository.
- You can import it into Postman using the following file path:
```bash
backend/docs/primetradeAssignment.postman_collection.json
```
### Steps to view the documentation:

1. Open Postman.
2. Click on Import.
3. Select the file primetradeAssignment.postman_collection.json from the backend/docs folder.
4. You will see all API endpoints with their descriptions and sample requests.

---

## Scalability Note

This project can be scaled for production by:
- **Using a cloud database** like PostgreSQL or MongoDB Atlas instead of SQLite.
- **Adding caching** with Redis or Memcached to improve performance.
- **Implementing load balancing** to handle multiple server instances.
- **Containerizing the app** using Docker for easier deployment.
- **Using microservices architecture** for separating authentication, tasks, and other services.

---

## Author

- Srija Vallala
- GitHub: https://github.com/srijavallala
- Email: srijavallala22@gmail.com