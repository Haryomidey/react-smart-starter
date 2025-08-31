# React Smart Starter

![React](https://img.shields.io/badge/React-18.0-blue?style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![npm version](https://img.shields.io/npm/v/react-smart-starter?color=blue&style=flat-square)
![npm downloads](https://img.shields.io/npm/dt/react-smart-starter?color=green&style=flat-square)

🚀 A modern **React + Vite + Tailwind starter CLI** designed to help developers **kickstart projects quickly** with preconfigured routes, authentication, context management, and reusable UI components.

Fully responsive and customizable, it includes a **dashboard layout**, login/signup flow, OTP verification, and a clean design inspired by ShadCN.

---

## ✨ Features

* ✅ **Routing** with React Router v6
* ✅ **Authentication**: Login, Signup, OTP, Forgot/Reset Password
* ✅ **Dashboard** layout with Sidebar, Header, and responsive content area
* ✅ Reusable **components**: Navbar, Footer, Cards, Buttons
* ✅ Responsive design using **TailwindCSS**
* ✅ **Customizable color theme**
* ✅ 404 Not Found page

---

## 📦 Prerequisites

- Node.js **>= 16**
- npm **>= 7** (or yarn/pnpm)

---

## 🚀 Installation

Create a new project in seconds:

Run with **npx**:
```bash
npx react-smart-starter my-app
cd my-app
npm install
npm run dev
```

Or with **npm init**:
```bash
npm init react-smart-starter my-app
```

---

## 📂 Project Structure

```
src/
├─ components/       # Reusable components (Header, Footer, etc.)
├─ layouts/          # MainLayout, DashboardLayout, ProtectedRoute
├─ pages/            # Home, Signup, Login, Dashboard, OTP, Forgot/Reset
├─ contexts/         # AuthContext for authentication state
├─ hooks/            # Custom hooks
└─ main.jsx          # Router setup
```

---

## ⚡ Usage

* **Public pages**: Home, Signup, Login, OTP, Forgot/Reset Password  
* **Protected pages**: Dashboard (accessible only when logged in)  

Example: adding a new dashboard route  
```jsx
{
  path: "users",
  element: <UsersPage />
}
```

🎨 Customize **colors** and **fonts** in `tailwind.config.js`.

---

## 📸 Screenshots / Demo

After running:

```bash
npx react-smart-starter my-app
```

You'll instantly get a project with authentication, dashboard, and Tailwind preconfigured 👇

![Starter Preview](./screenshot.png)

---

## 🌍 Live Demo

👉 Coming soon on [Vercel](https://vercel.com/)!

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/new-feature`)  
3. Make your changes  
4. Submit a Pull Request  

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Ayotech** – [Portfolio](https://portfolio-six-flax-15.vercel.app/)