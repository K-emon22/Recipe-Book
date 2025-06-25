# 🍲 Emon's Recipe Book

Welcome to **Emon's Recipe Book** — a full-stack recipe management web application built with the **MERN stack**. Users can browse, like, add, update, and delete recipes. This project includes secure authentication, protected routes, filtering options, and a fully responsive UI.

---

## 🌐 Live Site

- 🔗 [Visit Live Website](https://emons-recipe-book.netlify.app/)

---

## 📦 GitHub Repositories

- 💻 **Frontend:** [Client Repository](https://github.com/K-emon22/Recipe-Book.git)
- 🛠 **Backend:** [Server Repository](https://github.com/K-emon22/Recipe-Book-Server.git)

---

## ✨ Features
 
- 🔐 **Authentication**
  - Email/password and Google-based login.
  - Password validation .
  - Conditional rendering for navbar buttons.
  - Private/protected routes based on login state.
- 🏠 **Home Page**
  - Hero banner/slider.
  - Showcases top 6 liked recipes .
  - Theme toggle (dark/light).
  - Extra static content for enhanced UX.
- 📋 **All Recipes Page**
  - All user-submitted recipes displayed .
  - Filtering by cuisine type using a dropdown menu.
  - “See Details” button on each recipe card.
- ➕ **Add Recipe Page**
  - Available only to logged-in users (private route).
  - Form fields include: image, title, ingredients, instructions, categories, cuisine type, prep time.
  - Data saved to MongoDB on submission.
- 🔍 **Recipe Details Page**
  - View full recipe details.
  - Like functionality for recipes (except own recipes).
  - Displays how many people liked the recipe.
- 📁 **My Recipes Page**
  - Shows recipes created by the logged-in user.
  - Users can:
    - Update recipes via a modal form.
    - Delete recipes with confirmation.
- 🚫 **Custom 404 Page**
  - Food-themed design.
  -
- 🎨 **Other UI Enhancements**
  - Responsive design for mobile/tablet/desktop.
  - Feedback with toasts and alerts.
  - Footer with social media links and contact info.
  - Animations using:
    - `react-awesome-reveal`
    - `react-simple-typewriter`

---

## 🛠 Tech Stack

- 🧩 **Frontend**
  - React.js
  - React Router DOM
  - Tailwind CSS + DaisyUI
  - Firebase Authentication
  - React Hook Form
  - React Toastify
  - SweetAlert2
- 🔧 **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - CORS
  - dotenv

---
