# She Can Foundation - Contact Portal & Admin Dashboard

Welcome to the **She Can Foundation** web application. This project provides an elegant, responsive contact form for users to reach out to the NGO, alongside a secure Admin Dashboard to view and manage incoming inquiries. 

The application is built using the **MERN Stack** (MongoDB, Express, React, Node.js) and features a modern, accessible UI styled meticulously with Tailwind CSS.

### 🌐 Live Demo
- **Main Website / Contact Form:** [https://she-can-foundation-khaki.vercel.app/](https://she-can-foundation-khaki.vercel.app/)
- **Admin Dashboard:** [https://she-can-foundation-khaki.vercel.app/admin](https://she-can-foundation-khaki.vercel.app/admin)

---

## ✨ Features

### Frontend (User Interface)
- **Modern & Responsive Design:** Fully responsive layout built with Tailwind CSS, customized to match the NGO's specific brand colors (Rose, Gold, Cream, Ink).
- **Interactive Form Validation:** Client-side validation ensuring robust data collection (Name, Email, Intent, and Message).
- **Dynamic Notifications:** Real-time success and error toast notifications using `react-hot-toast`.
- **Client-Side Routing:** Seamless single-page application navigation using `react-router-dom`.
- **Custom Branding:** Bespoke typography and tailored SVG integrations.

### Backend (API & Database)
- **RESTful API Architecture:** Clean, modular Express.js routes and controllers handling form submissions and data retrieval.
- **Data Persistence:** MongoDB integration via Mongoose, storing contact records securely.
- **Intent Tracking:** Schemas specifically configured to categorize user intents (e.g., Donate, Volunteer, Partner).
- **Secure CORS Configuration:** Strictly configured to communicate exclusively with the verified frontend domain.

---

## 🛠️ Tech Stack

**Frontend:**
- [React](https://reactjs.org/) (bootstrapped with [Vite](https://vitejs.dev/))
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) (API calls)
- [React Router](https://reactrouter.com/) (Routing)
- [React Hot Toast](https://react-hot-toast.com/) (Notifications)

**Backend:**
- [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv) (Environment variable management)
- [cors](https://www.npmjs.com/package/cors) (Cross-Origin Resource Sharing)

**Deployment:**
- **Frontend:** [Vercel](https://vercel.com/)
- **Backend:** [Render](https://render.com/)
- **Database:** MongoDB Atlas

---

## 📂 Project Structure

```text
she-can-foundation/
├── backend/                  # Express.js Server
│   ├── config/               # Database connection logic
│   ├── controllers/          # Request handlers
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API endpoint definitions
│   ├── server.js             # Main entry point
│   └── .env                  # Backend environment variables
│
└── frontend/                 # Vite React App
    ├── src/
    │   ├── AdminDashboard.jsx # Admin table view component
    │   ├── ContactForm.jsx    # Main form UI component
    │   ├── App.jsx            # React Router wrapper
    │   ├── index.css          # Tailwind base & custom layers
    │   └── main.jsx           # React DOM rendering
    ├── index.html            # Entry HTML file
    ├── vercel.json           # Vercel SPA routing configuration
    ├── tailwind.config.js    # Theme configurations
    └── .env                  # Frontend environment variables
```

---

## 🚀 Getting Started (Local Development)

To run this project locally, you will need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd she-can-foundation
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create a .env file and add your MongoDB URI
# Example:
# PORT=5001
# MONGO_URI=mongodb://localhost:27017/shecan
# FRONTEND_URL=http://localhost:5173

# Start the server
npm start
```

### 3. Frontend Setup
```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create a .env file to link the frontend to the local backend
# Example:
# VITE_API_URL=http://localhost:5001

# Start the Vite development server
npm run dev
```

### 4. View the App
Open your browser and navigate to `http://localhost:5173`. 
The backend API will be running on `http://localhost:5001`.

---

## 📡 API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint | Description | Payload |
|--------|----------|-------------|---------|
| **POST** | `/api/contact/submit` | Submits a new contact form inquiry. | `{ name, email, message, intent }` |
| **GET** | `/api/contact/all` | Retrieves all submitted messages (Admin). | None |
| **GET** | `/` | Health-check endpoint to verify API status. | None |

---

## 📜 License

This project was built specifically for the She Can Foundation. All rights reserved.
