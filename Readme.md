# Movie Booking System

A full-stack web application for online movie ticket booking built with MERN stack (MongoDB, Express.js, React.js, Node.js). This system provides a comprehensive platform for users to browse movies, select seats, and book tickets while offering administrators full control over cinema management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [GitHub Repository Setup](#github-repository-setup)
- [Cloning and Running the Project](#cloning-and-running-the-project)
- [Database Configuration](#database-configuration)
- [Initial Data Seeding](#initial-data-seeding)
- [API Documentation](#api-documentation)
- [Frontend-Backend Integration](#frontend-backend-integration)
- [Real-time Seat Blocking System](#real-time-seat-blocking-system)
- [Website Functionality Screenshots](#website-functionality-screenshots)
- [Environment Variables](#environment-variables)


## Features

### User Features
- Developed REST APIs to create user accounts and associate them with booking records
- Built APIs to manage cinema listings and display all available cinema locations  
- Created APIs to handle individual screens within cinemas with 10x10 seat layout configuration
- Developed APIs for movie details, listings, and metadata management
- Built APIs to manage specific showtimes linking movies to screens with time slots
- Created APIs to save user seat selections and manage booking transactions
- Built main screen displaying all cinemas and movie showtimes upon cinema selection
- Developed visual seat layout showing booked/available seats with 6-seat selection limit
- Created "Pay" button functionality that marks seats as booked and displays confirmation screen
- Built dedicated screen for users to view their past bookings and transaction history


### Admin Features
- Complete cinema management (CRUD operations)
- Movie catalog management
- Show scheduling and management
- Real-time booking analytics
- User booking oversight
- Admin dashboard with statistics
- Developed admin interface to add, edit, and delete cinemas, screens, movies, and show schedules
- Built admin dashboard to oversee all user bookings, manage customer accounts, and control      operations

### System Features
- Real-time seat blocking during selection
- JWT-based authentication and authorization
- RESTful API architecture
- Socket.io for real-time updates
- MongoDB database with proper indexing
- Input validation and error handling
- CORS configuration for cross-origin requests

## Tech Stack

### Backend
- **Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time Communication**: Socket.io
- **Security**: Helmet, CORS, bcryptjs
- **Validation**: Express-validator

### Frontend
- **Framework**: React.js (v18)
- **Routing**: React Router DOM
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

### Development Tools
- **API Testing**: Postman
- **Database Management**: MongoDB Compass
- **Version Control**: Git & GitHub
- **Package Manager**: npm

## Project Structure

```
movie-booking-system/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── cinemaController.js
│   │   ├── movieController.js
│   │   ├── showController.js
│   │   └── bookingController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── admin.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Cinema.js
│   │   ├── Screen.js
│   │   ├── Movie.js
│   │   ├── Show.js
│   │   └── Booking.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── cinemas.js
│   │   ├── movies.js
│   │   ├── shows.js
│   │   └── bookings.js
│   ├── utils/
│   │   ├── seatGenerator.js
│   │   └── cleanupDatabase.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout/
│   │   │   ├── Auth/
│   │   │   ├── Cinema/
│   │   │   ├── Movie/
│   │   │   ├── Booking/
│   │   │   └── Admin/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git
- Code editor (VS Code recommended)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-booking-system.git
   cd movie-booking-system
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Configuration**
   - Create `.env` files in both backend and frontend directories
   - Configure environment variables as specified in the Environment Variables section

5. **Database Setup**
   - Start MongoDB service
   - Database and collections will be created automatically

6. **Start the Application**
   
   **Backend** (Terminal 1):
   ```bash
   cd backend
   node createAdmin.js    
   npm start
   ```
   
   **Frontend** (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

7. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Health Check: http://localhost:5000/api/health

## GitHub Repository Setup

### Creating and Pushing to GitHub

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Movie Booking System"
   ```

2. **Create GitHub Repository**
   - Go to GitHub.com
   - Click on "New Repository"
   - Name: `movie-booking-system`
   - Description: `Full-stack movie ticket booking application`
   - Set as Public or Private
   - Do not initialize with README (since you already have one)

3. **Connect Local Repository to GitHub**
   ```bash
   git remote add origin https://github.com/ratnesh-bt22cse/movie-booking-system.git
   git branch -M main
   git push -u origin main
   ```

4. **Push Updates**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
1. **Clone the Repository**
   ```bash
   git clone https://github.com/ratnesh-bt22cse/movie-booking-system.git
   cd movie-booking-system


2. **Install Dependencies**

   ```bash
   # Backend dependencies
   cd backend
   npm install

   # Frontend dependencies
   cd ../frontend
   npm install


3. **Configure Environment Variables**
   
   **Backend `.env`**:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/movie-booking
   JWT_SECRET=your-jwt-secret-key
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   ```
   
   

4. **Start MongoDB**
   - Ensure MongoDB is running locally
   - Or configure MongoDB Atlas connection string

5. **Run the Application**
   ```bash
   # Start backend (Terminal 1)
   cd backend
   node createAdmin.js(only 1 time)
   npm start
   
   # Start frontend (Terminal 2)
   cd frontend
   npm run dev
   ```

## Database Configuration

### MongoDB Setup
- **Local MongoDB**: Default connection at `mongodb://localhost:27017`
- **MongoDB Atlas**: Cloud database with connection string
- **Database Name**: `movie-booking`
- **Collections**: users, cinemas, screens, movies, shows, bookings

### Database Schema
- **Users**: Authentication and user profiles
- **Cinemas**: Cinema locations and details
- **Screens**: Individual screens within cinemas
- **Movies**: Movie catalog with metadata
- **Shows**: Scheduled movie screenings
- **Bookings**: User ticket reservations

## Initial Data Seeding

The application includes an automatic data seeding system that populates the database with sample data on first run:

### Seeded Data Includes
- **Admin User**: Email: `admin@moviebooking.com`, Password: `admin123`
- **3 Sample Cinemas**: PVR Cinemas, INOX Movies, Cinepolis
- **9 Screens**: 3 screens per cinema with 100 seats each (10x10 layout)
- **5 Sample Movies**: Popular movies with posters and metadata
- **Multiple Shows**: 7 days of shows with 4 time slots per day

### Current Data Management
- Initial seeding provides base data for testing and demonstration
- Admin panel allows real-time creation, updating, and deletion of movies
- New movies automatically get shows scheduled across all cinemas
- Database cleanup utilities handle orphaned records

### Manual Data Management
- Admins can add new cinemas with multiple screens
- Movie catalog is fully manageable through admin interface
- Show scheduling can be customized for each cinema-movie combination

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication APIs

#### Register User
- **Endpoint**: `POST /auth/register`
- **Description**: Register new user account
- **Authentication**: None required

[![alt text](<Screenshot 2025-09-21 110909.png>)]

#### Login User
- **Endpoint**: `POST /auth/login`
- **Description**: User authentication and JWT token generation
- **Authentication**: None required

[![alt text](<Screenshot 2025-09-21 111103.png>)]

#### Login Admin
- **Endpoint**: `POST /auth/login`
- **Description**: Admin authentication with elevated privileges
- **Authentication**: None required

[![alt text](<Screenshot 2025-09-21 114137.png>)]

#### Get User Profile
- **Endpoint**: `GET /auth/profile`
- **Description**: Retrieve authenticated user profile
- **Authentication**: Bearer Token required

[![alt text](<Screenshot 2025-09-21 111834.png>)]

### Cinema Management APIs

#### Get All Cinemas
- **Endpoint**: `GET /cinemas`
- **Description**: Retrieve list of all available cinemas
- **Authentication**: None required

[![alt text](<Screenshot 2025-09-21 111947.png>)]

#### Get Cinema by ID
- **Endpoint**: `GET /cinemas/{id}`
- **Description**: Retrieve specific cinema details
- **Authentication**: None required

[![alt text](<Screenshot 2025-09-21 112049.png>)]

#### Create Cinema (Admin Only)
- **Endpoint**: `POST /cinemas`
- **Description**: Add new cinema location
- **Authentication**: Admin Bearer Token required

[![alt text](<Screenshot 2025-09-21 114636.png>)]

#### Update Cinema (Admin Only)
- **Endpoint**: `PUT /cinemas/{id}`
- **Description**: Update existing cinema information
- **Authentication**: Admin Bearer Token required

[![alt text](<Screenshot 2025-09-21 114941.png>)]

#### Delete Cinema (Admin Only)
- **Endpoint**: `DELETE /cinemas/{id}`
- **Description**: Remove cinema and associated data
- **Authentication**: Admin Bearer Token required

[![alt text](<Screenshot 2025-09-21 115023.png>)]

### Movie Management APIs

#### Get All Movies
- **Endpoint**: `GET /movies`
- **Description**: Retrieve complete movie catalog
- **Authentication**: None required

[![alt text](<Screenshot 2025-09-21 112249.png>)]

#### Get Movie by ID
- **Endpoint**: `GET /movies/{id}`
- **Description**: Retrieve specific movie details
- **Authentication**: None required

[![alt text](<Screenshot 2025-09-21 120541.png>)]



### Show Management APIs

#### Get Shows by Cinema
- **Endpoint**: `GET /shows/cinema/{cinemaId}`
- **Description**: Retrieve shows for specific cinema and date
- **Authentication**: None required

[![alt text](<Screenshot 2025-09-21 121012.png>)]

#### Get Show by ID
- **Endpoint**: `GET /shows/{id}`
- **Description**: Retrieve specific show details with seat availability
- **Authentication**: None required

[![alt text](<Screenshot 2025-09-21 121102.png>)]

#### Block Seats
- **Endpoint**: `POST /shows/{showId}/block-seats`
- **Description**: Temporarily block seats during selection
- **Authentication**: Bearer Token required

[![alt text](<Screenshot 2025-09-21 121159.png>)]

#### Unblock Seats
- **Endpoint**: `POST /shows/{showId}/unblock-seats`
- **Description**: Release temporarily blocked seats
- **Authentication**: Bearer Token required

[![alt text](<Screenshot 2025-09-21 121232.png>)]

### Booking Management APIs

#### Create Booking
- **Endpoint**: `POST /bookings`
- **Description**: Confirm seat booking and create reservation
- **Authentication**: Bearer Token required

[![alt text](<Screenshot 2025-09-21 124509.png>)]

#### Get User Bookings
- **Endpoint**: `GET /bookings/user`
- **Description**: Retrieve user's booking history
- **Authentication**: Bearer Token required

[![alt text](<Screenshot 2025-09-21 124544.png>)]

#### Cancel Booking
- **Endpoint**: `PUT /bookings/{id}/cancel`
- **Description**: Cancel existing booking and release seats
- **Authentication**: Bearer Token required

[![alt text](<Screenshot 2025-09-21 124715.png>)]

## Frontend-Backend Integration

### Communication Architecture
- **HTTP Requests**: Axios library for RESTful API communication
- **Authentication**: JWT tokens stored in localStorage and sent via Authorization headers
- **State Management**: React Context API for global state (authentication, booking flow)
- **Error Handling**: Centralized error handling with user-friendly notifications
- **Loading States**: Loading spinners and disabled states during API calls

### API Integration Patterns
- **Interceptors**: Automatic token attachment and error response handling
- **Context Providers**: Centralized authentication and booking state management
- **Protected Routes**: Route-level authentication checks
- **Real-time Updates**: Socket.io integration for live seat availability

### Data Flow
1. User interactions trigger React components
2. Components call API utility functions
3. Axios sends HTTP requests with authentication headers
4. Backend processes requests and returns JSON responses
5. Frontend updates UI based on response data
6. Context API manages global state changes
7. Socket.io provides real-time updates for concurrent users

## Real-time Seat Blocking System

### Socket.io Implementation
The application uses Socket.io to provide real-time seat availability updates, preventing double bookings and enhancing user experience.

### Technical Implementation
- **Backend**: Socket.io server integrated with Express.js
- **Frontend**: Socket.io client for real-time communication
- **Room-based Architecture**: Users join show-specific rooms
- **Event-driven Updates**: Seat selections broadcast to other users

### Seat Blocking Flow
1. **User Joins Show**: Client connects to show-specific Socket.io room
2. **Seat Selection**: User selects seats, triggers block request to backend
3. **Database Update**: Backend temporarily blocks seats in database
4. **Real-time Broadcast**: Socket.io emits seat-blocked event to all room members
5. **UI Update**: Other users see selected seats as blocked in real-time
6. **Timeout Mechanism**: Blocked seats auto-release after 5 minutes of inactivity
7. **Booking Confirmation**: Successful booking permanently reserves seats

### Benefits
- Prevents double booking conflicts
- Provides immediate visual feedback
- Enhances user experience with real-time updates
- Reduces booking failures and user frustration
- Scales efficiently with room-based architecture

## Website Functionality Screenshots

### User Interface
#### Login/Signup Tests
[![alt text](<Screenshot 2025-09-21 144705.png>)]
[![alt text](<Screenshot 2025-09-21 144802.png>)]

#### Home Page
[![alt text](<Screenshot 2025-09-21 144840.png>)]
[![alt text](<Screenshot 2025-09-21 144853.png>)]

#### Cinema Listing
[![alt text](<Screenshot 2025-09-21 144909.png>)]

#### Movie Shows
[![alt text](<Screenshot 2025-09-21 144928.png>)]
[![alt text](<Screenshot 2025-09-21 145012.png>)]

#### Seat Selection
[![alt text](<Screenshot 2025-09-21 145030.png>)]

#### Booking Confirmation
[![alt text](<Screenshot 2025-09-21 145038.png>)]

#### Payment Confirmation
[![alt text](<Screenshot 2025-09-21 145049.png>)]

#### Booking Confirmation(MY BOOKING)
[![alt text](<Screenshot 2025-09-21 155924.png>)]

### Admin Interface

#### Admin Dashboard
[![alt text](<Screenshot 2025-09-21 145141.png>)]
[![alt text](<Screenshot 2025-09-21 145150.png>)]
#### Add Movie

[![alt text](<Screenshot 2025-09-21 145205.png>)]
#### Add Cinema
[![alt text](<Screenshot 2025-09-21 145221.png>)]

#### Update Or delete show
[![alt text](<Screenshot 2025-09-21 145251.png>)]

#### Ticket Cancellation
[![alt text](<Screenshot 2025-09-21 145306.png>)]



## Environment Variables

### Backend Environment Variables
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/movie-booking
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=admin@moviebooking.com
ADMIN_PASSWORD=admin123
```








