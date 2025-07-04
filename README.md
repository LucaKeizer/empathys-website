# Empathys Website

A modern, high-performance e-commerce website built for Empathys, a Dutch therapeutic practice specializing in children's emotional development and educational support.

## Project Overview

Empathys is a professional therapy practice founded by Marian Plat and Melany Molenaar-Stroek, offering specialized training for children, parents, and professionals. This website serves as both an informational platform and e-commerce store for their therapeutic children's book "Samen naar de Finish."

## Key Features

### E-commerce Functionality
- Full shopping cart implementation with persistent storage
- Stripe payment integration with multiple payment methods (iDEAL, Credit Card, Bancontact)
- Dynamic shipping cost calculation (free delivery for Volendam addresses)
- Order management and email notifications
- Responsive checkout process with form validation

### Performance Optimizations
- Advanced lazy loading for below-the-fold components
- Image optimization with Next.js Image component
- Preloading of critical resources
- Cumulative Layout Shift (CLS) prevention
- Optimized font loading with minimal FOUT
- Smart caching strategies

### User Experience
- Responsive design optimized for all device sizes
- Smooth page transitions and loading states
- Accessibility-focused navigation and interactions
- Cookie consent management
- Real-time cart updates with toast notifications

## Technical Implementation

### Frontend Stack
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library

### Backend Integration
- **Stripe** - Payment processing and webhook handling
- **Resend** - Transactional email delivery
- **API Routes** - Server-side functionality

### Performance Features
- Server-side rendering (SSR) for optimal SEO
- Static generation for improved loading times
- Image optimization with WebP/AVIF formats
- Component-level code splitting
- Optimized bundle sizes

## Architecture Highlights

### State Management
Custom React Context implementation for cart functionality with:
- Persistent storage using localStorage
- Optimistic UI updates
- Type-safe state management
- Automatic total calculations

### Component Structure
- Modular component architecture
- Lazy-loaded non-critical components
- Reusable UI components with consistent styling
- Separation of concerns between presentation and logic

### Code Quality
- Consistent TypeScript implementation
- Modern React patterns (hooks, context)
- Performance-optimized component rendering
- Clean, maintainable code structure

## Advanced Features

### Dynamic Content
- Location-based shipping calculations
- Real-time business hours display
- Context-aware navigation states
- Dynamic meta tag generation

### SEO Optimization
- Structured metadata implementation
- OpenGraph integration
- Semantic HTML structure
- Optimized page loading strategies

### Developer Experience
- Hot module reloading in development
- TypeScript strict mode
- Automated build optimization
- Modern development tooling

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Configuration

The application requires the following environment variables:

```env
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_BASE_URL=your_domain_url
```

## Deployment Considerations

### Production Optimizations
- Automatic image optimization and resizing
- CSS and JavaScript minification
- Gzip compression enabled
- CDN-ready static asset handling

### Performance Metrics
- Lighthouse score optimization
- Core Web Vitals compliance
- Minimal JavaScript bundle sizes
- Optimized loading waterfall

## Business Impact

This website successfully serves a real therapeutic practice, handling:
- Product sales and order management
- Customer inquiries and contact forms
- Professional service information
- Educational content delivery

The implementation demonstrates practical e-commerce development skills, performance optimization expertise, and modern web development best practices in a production environment.

## Technologies Used

**Core Framework:** Next.js 15, React 19, TypeScript
**Styling:** Tailwind CSS, Custom CSS
**Payments:** Stripe API integration
**Email:** Resend API
**State Management:** React Context API
**Image Optimization:** Next.js Image component
**Development:** ESLint, Modern build tools

---

This project showcases full-stack web development capabilities, from user interface design to payment processing, while maintaining high performance standards and modern development practices.