# VueDash (Vue Nuxt.js 3 Tailwind CSS Admin Dashboard Template)

A modern, responsive, and customizable admin dashboard template built with **Vue.js**, **Nuxt.js 3**, **NuxtUI** and **Tailwind CSS**. This template is perfect for building powerful admin interfaces, dashboards, and web applications with a clean and minimal design.

## 🚀 Features

- **Nuxt.js 3**: Seamless server-side rendering (SSR) and static site generation (SSG) with Vue 3 composition API.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive UI development.
- **Reusable Components**: Modular and reusable UI components for easy customization.
- **Dark Mode**: Built-in support for light and dark themes.
- **Responsive Design**: Fully optimized for all screen sizes.
- **Dynamic Routing**: Flexible routing system powered by Nuxt.js.
- **Extendable**: Easy to add new pages, components, and plugins.

## 📦 Tech Stack

- **Frontend Framework**: Vue.js 3 (Composition API)
- **Meta Framework**: Nuxt.js 3
- **Styling**: Tailwind CSS
- **UI Component Library**: NextUI
- **Package Manager**: pnpm

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kei-K23/vue-dash
   cd vue-dash
   ```
2. **Install dependencies**:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**:

   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## 📄 File Structure

```
admin-dashboard-template/
├── layouts/           # Layouts for the app
├── pages/             # Nuxt.js pages and routes
├── features/          # Organize logic, ui components and state into domain or feature
├── public/            # Static assets
├── nuxt.config.ts     # Nuxt.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🎨 Customization

### Tailwind CSS

Modify the `tailwind.config.js` file to customize themes, extend styles, or add plugins.

### Components

All components are in the `components/` directory inside `features/(domain)/` directory. Create new components or extend existing ones to suit your project needs.

### Pages and Routing

Add or edit files in the `pages/` directory to create new routes dynamically.

## 🧩 Dependencies

- [Vue 3](https://vuejs.org/)
- [Nuxt.js 3](https://v3.nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NuxtUI](https://ui.nuxt.com/)

## 📖 Documentation

### Setting up Authentication

You can integrate any authentication service (e.g., Firebase, Auth0, or custom JWT) using Nuxt's middleware and plugins. Refer to the Nuxt.js [auth module](https://auth.nuxtjs.org/) for more details.

### Adding API Integrations

Use Nuxt's server routes or external API calls in the `pages/` or `composables/` directories. Learn more about Nuxt.js API handling [here](https://nuxt.com/docs/guide/directory-structure/server).

## 🧪 Testing

### Unit Testing

Install and configure [Vitest](https://vitest.dev/) for unit testing your Vue components.

### End-to-End Testing

Use [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/) for end-to-end testing.

## 📂 Deployment

1. **Static Site Generation (SSG)**:

   ```bash
   pnpm run generate
   ```

   Deploy the generated files from the `dist/` folder to a static hosting provider (e.g., Netlify, Vercel).

2. **Server-Side Rendering (SSR)**:
   ```bash
   pnpm run build
   pnpm run start
   ```
   Deploy the application to Node.js hosting (e.g., AWS, Heroku, or DigitalOcean).

## 📧 Support

If you encounter any issues, have questions, or want to request new features or pages, feel free to open an issue or reach out to [keiksl2301@gmail.com](mailto:keiksl2301@gmail.com).

## 🤝 Contributions

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

## 🌟 Acknowledgements

- [Vue.js](https://vuejs.org/)
- [Nuxt.js](https://v3.nuxtjs.org/)
- [NuxtUI](https://ui.nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Page Preview

## Desktop View

![desktop](/public/page-screens/Macbook-Air-1559x975.png)

## Tablet View

![tablet](/public/page-screens/iPad-Air-5-820x1180.png)

## Mobile View

![mobile](/public/page-screens/iPhone-14-Pro-Max-395x932.png)
