# Feedza 🍱 — Frontend

**Feedza** is a modern full-stack food ordering platform where users can discover meals, place orders, and track delivery status.  
This repository contains the **frontend** application built with Next.js and TypeScript, focusing on performance, scalability, and clean UI/UX.

---

## 🌐 Live & Source

- **Live Website**: [Feedza Frontend](https://feedza.vercel.app)
- **Frontend Code**: [GitHub Repository](https://github.com/atikur28/feedza-client)
- **Backend API**: [Feedza Backend Live](https://feedza-server.vercel.app)
- **Backend Code**: [Backend Repository](https://github.com/atikur28/feedza-server)

---

## 🛠️ Tech Stack (Frontend)

- **Next.js (App Router)** — Server-side rendering & routing
- **TypeScript** — Type safety & maintainability
- **Tailwind CSS** — Responsive and consistent UI
- **ShadCN UI** — Reusable UI components
- **Lucide Icons** — Icon system
- **Better Auth (Client)** — Authentication handling
- **Fetch API** — API communication

---

## ✨ Key Features (Frontend)

### 🌍 Public Features

- Browse meals and providers
- Filter meals by category and price
- View detailed meal & provider pages
- Responsive homepage with multiple sections

### 👤 Customer Features

- Register & login
- Add meals to cart
- Place orders (Cash on Delivery)
- Track order status
- View order history
- Manage profile

### 🍳 Provider Features

- Provider dashboard
- Manage menu items (CRUD)
- View incoming orders
- Update order status

### 🛡️ Admin Features

- Admin dashboard
- Manage users (activate/suspend)
- View all orders
- Manage food categories

---

## ⚙️ Environment Variables (Frontend)

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_BACKEND_URL=https://example-backend.vercel.app
NEXT_PUBLIC_FRONTEND_URL=https://example-frontend.vercel.app
NEXT_PUBLIC_AUTH_URL=https://example-backend.vercel.app/api/auth
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key_here
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
