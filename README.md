📸 Screenshot

- ![Preview](./src/assets/images/preview.png)

---

🌐 Demo

- [DEMO LINK](https://uusuff.github.io/SmartRent/)

---

# SmartRent

SmartRent connects tenants and landlords directly. You can search for apartments, contact owners through chat, and arrange rentals without agents or extra fees.

---

## 🚀 Features

- Apartment catalog
- Filtering and search
- Product details view
- Favorites and cart stored in **localStorage**
- Sorting (price, novelty, rating)
- Connected mock API
- Pagination and infinite scroll
- Tests (Jest + React Testing Library)
- Improved accessibility (ARIA, focus management)
- Smooth animations and interactions
- Deployed on **GitHub Pages**

---

## 🧩 Tech Stack
Frontend

- React (functional components + hooks)
- CSS / SCSS (project styles)
- Optional: React Router (for routing between list / details)
- Bundler: your project setup Vite

Backend

- Node.js
- Express
- REST API
- Deployed on Vercel

---

## 📁 Project Structure

```
src/
├── api/        # API logic (fetch, client, mock-API requests)
├── assets/     # static assets (images, icons)
├── components/ # reusable React components (apartmentCard, BurgerMenu, CatalogFilter, etc.)
├── modules/    # feature modules or large functional blocks (e.g., Footer, Header)
├── pages/      # page-level components that combine modules and components
├── router/     # routing (react-router)
├── shared/     # variables, utils, storage, mixins
├── styles/     # reset styles
├── App.tsx     # root application component
└── main.tsx    # entry point (ReactDOM.createRoot, renders App)

```

---

## 💻 Installation & Local Run

1. Clone the repo:

```

git clone https://github.com/Uusuff/SmartRent.git

```

2. Install dependencies:

```

cd react_phone-catalog
npm install

```

3. Start development server:

```
npm start

```

---
