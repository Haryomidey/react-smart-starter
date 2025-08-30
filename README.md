# React Smart Starter

![React](https://img.shields.io/badge/React-18.0-blue?style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

A **modern React starter template** designed to help developers **kickstart projects quickly** with preconfigured routes, authentication, context management, and reusable UI components. Fully responsive and customizable, it includes a **dashboard layout**, login/signup flow, OTP verification, and a consistent color theme inspired by ShadCN.

---

## Features

* ✅ Pre-configured React project structure
* ✅ **Routing** with React Router v6
* ✅ **Authentication**: Login, Signup, OTP, Forgot/Reset Password
* ✅ **Dashboard** layout with Sidebar, Header, and responsive content area
* ✅ Reusable **components**: Navbar, Footer, Cards, Buttons
* ✅ Responsive design using **TailwindCSS**
* ✅ **Customizable color theme**
* ✅ 404 Not Found page

---

## Installation

```bash
# Clone the repository
git clone https://github.com/haryomidey/react-smart-starter.git

# Navigate into the project directory
cd react-smart-starter

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

---

## Project Structure

```
src/
├─ components/       # Reusable components (Header, Footer, etc.)
├─ layouts/          # MainLayout, DashboardLayout, ProtectedRoute
├─ pages/            # Home, Signup, Login, Dashboard, OTP, Forgot/Reset
├─ contexts/         # AuthContext for authentication state
├─ hooks/            # Custom hooks
└─ App.jsx           # Router setup
```

---

## Usage

* Public pages: Home, Signup, Login, OTP, Forgot/Reset Password
* Protected pages: Dashboard (accessible only when logged in)
* Extend the dashboard by adding more nested routes under `DashboardLayout`

```jsx
// Example: Adding a new dashboard page
{
  path: "users",
  element: <UsersPage />
}
```

* Customize **colors** and **fonts** in `tailwind.config.js`

---

## Screenshots

* Home Page
* Login / Signup
* Dashboard with Sidebar and Cards
* 404 Not Found page

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Submit a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Author

* Your Name – [Ayotech](https://portfolio-six-flax-15.vercel.app/)
