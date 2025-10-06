# Essentielsdollar - Online Grocery Store

A modern, responsive web application for an online grocery store built with React, Vite, and Tailwind CSS. This project provides a complete e-commerce experience with shopping cart functionality, product browsing, and user authentication.

## 🚀 Live Demo

- **Production:** [https://essentielsdollarfinaldversion.netlify.app/](https://essentielsdollarfinaldversion.netlify.app/)
- **Course:** SEG3125 Project 2 Website

## ✨ Features

### 🛒 E-commerce Core
- **Product Catalog**: Browse fruits, vegetables, meat, and kitchen utensils
- **Shopping Cart**: Add, remove, and manage items with real-time quantity updates
- **Checkout Process**: Complete purchase flow with order summary
- **Product Categories**: Organized product browsing by category

### 🎨 User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive UI**: Smooth animations and modern component design
- **Video Background**: Engaging hero section with promotional content
- **Error Handling**: Comprehensive error boundaries and 404 pages

### 👤 User Management
- **Authentication**: Sign in and sign up functionality
- **User Profiles**: Account management system
- **Newsletter**: Subscription form for updates

### 📱 Additional Pages
- **About Us**: Company story and mission
- **Contact**: Get in touch with customer service
- **Hiring**: Career opportunities and job applications
- **AI Chatbot**: Customer support integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router 6** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework
- **FontAwesome** - Icon library for UI elements

### State Management
- **React Context** - Global state for cart and user data
- **Local Storage** - Persistent cart data across sessions

### Additional Libraries
- **EmailJS** - Contact form integration
- **React Player** - Video content handling
- **Chart.js** - Data visualization components
- **Axios** - HTTP client for API requests

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation header
│   ├── Hero.jsx        # Landing page hero section
│   ├── CartPage.jsx    # Shopping cart interface
│   ├── Checkout.jsx    # Order completion
│   └── ...             # Other components
├── pages/              # Page-level components
│   ├── shop/           # Product browsing pages
│   └── cart/           # Cart-related pages
├── context/            # React Context providers
│   └── shop-context.jsx # Global state management
├── assets/             # Static assets
│   ├── products/       # Product images
│   └── ...             # Other media files
├── products.js         # Static product data
└── main.jsx           # Application entry point
```

## ️ Usage Guide

### Shopping Flow
1. **Browse Products**: Navigate through different categories
2. **Add to Cart**: Click "Add to Cart" on desired items
3. **View Cart**: Check items and quantities in cart page
4. **Checkout**: Complete purchase with order details
5. **Confirmation**: Receive order confirmation

### Product Management
- Products are defined in `src/products.js`
- Images stored in `src/assets/products/`
- Categories: Fruits, Vegetables, Meat, Utensils

### State Management
- Cart data managed through React Context
- Persistent storage using localStorage
- Real-time updates across all components

## 🎨 Design System

### Styling Approach
- **Tailwind CSS** for utility-first styling
- **Component-specific CSS** for custom animations
- **Responsive design** with mobile-first approach
- **Consistent color scheme** and typography

### Key Components
- **Navbar**: Fixed navigation with cart counter
- **Hero**: Video background with call-to-action
- **Product Cards**: Consistent product display format
- **Cart**: Dynamic quantity management

## 🚢 Deployment

### Netlify Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Configure redirects**
   - `public/_redirects` handles SPA routing

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

## 📝 License

This project is part of SEG3125 coursework. Please respect academic integrity guidelines.

## 👨‍💻 Development Team

- **Repository**: [marcycode/essentielsdollar](https://github.com/marcycode/essentielsdollar)
- **Course**: SEG3125 - User Interface Design
- **Institution**: University of Ottawa
