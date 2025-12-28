---

# Restaurant Management System (React + Vite)

This project is a **restaurant management frontend application** built with **React** and **Vite**.
It provides core features such as item search, reservations, authentication, and informational pages.

The application communicates with a backend REST API and is optimized for fast development using Vite’s Hot Module Replacement (HMR).

---

## Features

* **Item Search**

  * Search and browse restaurant items/products
  * Filter and view item details

* **Reservation System**

  * Create and manage table reservations
  * View available options dynamically

* **Authentication**

  * User login functionality
  * Secure access to protected pages

* **Pages**

  * About Us
  * Services
  * Login
  * Products / Items
  * Reservations

* **API Integration**

  * Axios-based API requests
  * Centralized error handling
  * Environment-based API configuration

---

## Tech Stack

* **React**
* **Vite**
* **Axios**
* **ESLint**
* **JavaScript (ES6+)**

---

## Project Setup

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Environment Configuration

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://your-api-domain.com/api
```

Make sure the backend server has a **valid SSL certificate**, otherwise API requests will fail in the browser.

---

## Folder Structure (Simplified)

```
src/
├── components/               # Global reusable components
│   ├── Header/
│   ├── Footer/
│   └── UI/
│
├── pages/                    # Feature-based modules
│   ├── About/
│   │   ├── routes.jsx
│   │   ├── components/
│   │   └── services.js
│   │
│   ├── Services/
│   │   ├── routes.jsx
│   │   ├── components/
│   │   └── services.js
│   │
│   ├── Login/
│   │   ├── routes.jsx
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services.js
│
├── api/                      # Axios configuration & shared API logic
│   └── axios.js
│
├── routes/                   # Global app routes (route aggregation)
│   └── index.jsx
│
├── hooks/                    # Global reusable hooks
├── utils/                    # Helpers & utilities
│
├── App.jsx
└── main.jsx

```

---

## Notes

* This project uses **Vite + React** for fast development and optimized builds.
* The frontend assumes a properly configured API.

---

## License

This project is for internal or training purposes.

---

