# Varini Bridal Next.js

Modern e-commerce platform for Varini Bridal Bliss - Elegant bridal jewelry collection built with Next.js 14, TypeScript, and modern web technologies.

## 🚀 Features

- **Modern E-commerce Experience**: Browse and shop bridal jewelry with an elegant interface
- **Server-Side Rendering**: Optimized for SEO and performance
- **Real-time Cart**: Persistent shopping cart with Zustand
- **Secure Payments**: Integrated with Stripe for secure transactions
- **Admin Dashboard**: Manage products, orders, and inventory
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Built with TypeScript throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand + TanStack Query
- **Payment Processing**: Stripe
- **Email Service**: Resend
- **Analytics**: Vercel Analytics

## 📋 Prerequisites

- Node.js 18.17 or later
- PostgreSQL database
- Stripe account
- Cloudinary account (for image hosting)

## 🔧 Getting Started

1. **Clone the repository**:
```bash
git clone https://github.com/abhishekrajpura/varini-bridal-nextjs.git
cd varini-bridal-nextjs
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env
```

4. **Set up the database**:
```bash
npx prisma generate
npx prisma db push
```

5. **Run development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── hooks/                 # Custom React hooks
├── store/                 # Zustand stores
├── types/                 # TypeScript type definitions
└── config/                # App configuration
```

## 🚀 Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abhishekrajpura/varini-bridal-nextjs)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

This project is licensed under the MIT License.

---

**© 2025 Varini Bridal Bliss - Elegant Bridal Jewelry Collection**
