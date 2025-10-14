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

You can test the APIs using Postman.

### Import the Collection
1. Open Postman.
2. Click **Import** → **Upload Files**.
3. Select `PrimetradeAssignment.postman_collection.json`.
4. All endpoints will be available for testing.

Each API request includes:
- URL
- Method
- Headers (if required)
- Example request body
- Detailed description

---

## Author

- Srija Vallala
- GitHub: https://github.com/srijavallala
- Email: srijavallala22@gmail.com