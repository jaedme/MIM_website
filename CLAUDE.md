# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) for implementing a world-class RIA website for Meixler Investment Management.

## Project Overview

Transform the existing Meixler Investment Management website into an elite, modern financial advisory site that rivals top-tier RIA firms. The goal is to create a sophisticated, trust-inspiring digital presence that converts high-net-worth prospects.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Design Vision

### Overall Aesthetic
- **Premium & Sophisticated**: Every element should feel expensive and trustworthy
- **Modern Yet Timeless**: Contemporary design that won't feel dated in 5 years
- **Performance-Focused**: Smooth animations and fast load times
- **Conversion-Optimized**: Clear CTAs and trust signals throughout

### Visual Design Requirements

#### Color Palette
```css
/* Primary Colors */
--primary-blue-900: #1e3a8a;
--primary-blue-800: #1e40af;
--primary-blue-700: #1d4ed8;
--primary-blue-600: #2563eb;
--primary-blue-500: #3b82f6;

/* Secondary Colors */
--indigo-700: #4338ca;
--indigo-600: #4f46e5;
--purple-600: #9333ea;

/* Neutral Colors */
--gray-900: #111827;
--gray-800: #1f2937;
--gray-700: #374151;
--gray-600: #4b5563;
--gray-50: #f9fafb;

/* Gradients */
--hero-gradient: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%);
--card-gradient: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
--button-gradient: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
```

#### Typography
```css
/* Font Stack */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-serif: 'Playfair Display', Georgia, serif;

/* Font Sizes */
--text-7xl: 4.5rem; /* Hero headlines */
--text-5xl: 3rem;   /* Section headers */
--text-3xl: 1.875rem; /* Subsection headers */
--text-xl: 1.25rem; /* Body large */
--text-base: 1rem;  /* Body regular */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Component Specifications

#### Navigation Header
- **Fixed position** with backdrop blur effect
- **Glass morphism** background: `rgba(255, 255, 255, 0.95)`
- **Shadow**: `0 4px 30px rgba(0, 0, 0, 0.1)`
- **Logo**: 48x48px gradient square with "M" monogram
- **CTA Button**: Gradient background with hover lift effect
- **Mobile responsive** with hamburger menu

#### Hero Section
- **Full viewport height** with gradient background
- **Floating animation orbs** in background (subtle parallax)
- **Large typography** mixing sans and serif fonts
- **Multiple CTAs** with primary and secondary styling
- **Trust indicators**: SEC Registered, $500M+ AUM, 20+ Years

#### Value Proposition Cards
- **Hover lift effect**: `transform: translateY(-8px)` on hover
- **Premium shadows**: `0 10px 40px rgba(30, 58, 138, 0.15)`
- **Icon containers**: 56x56px gradient backgrounds
- **Card backgrounds**: Subtle gradients (blue/indigo/purple variations)

#### Philosophy Section
- **Dark background** with gradient overlay
- **Glass morphism quote box** with performance metrics
- **Bullet points** with custom blue indicators
- **Split layout** on desktop, stacked on mobile

#### Services Section
- **Service cards** with category badges
- **Fee structure table** with glass effect background
- **Checkmark lists** with green indicators
- **Gradient CTA box** for fee transparency

#### Team Section
- **Circular photos** with credential badges
- **Badge positioning**: Bottom-right of photo
- **Professional titles** in brand blue
- **Consistent bio length** for visual balance

#### Market Insights
- **Blog-style cards** with gradient header images
- **Category tags** with colored backgrounds
- **Hover effects** on entire card
- **"Read More" links** with arrow icons

#### Footer
- **Dark background** (#111827)
- **Multi-column layout** with clear sections
- **Legal disclaimers** in muted text
- **Contact information** with icons

### Animation Guidelines

#### Hover Effects
```css
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(30, 58, 138, 0.2);
}
```

#### Page Transitions
- **Fade in animations** for sections on scroll
- **Stagger animations** for card grids
- **Smooth scrolling** between sections
- **Loading states** for dynamic content

### Technical Architecture

#### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full TypeScript implementation
- **Components**: React functional components with hooks
- **Fonts**: Inter (sans-serif) and Playfair Display (serif)

#### Site Structure
- **Header**: Fixed navigation with glass morphism
- **Hero**: Full-screen gradient with floating elements
- **Value Props**: 3-card grid with hover effects
- **Philosophy**: Dark section with quote and metrics
- **Services**: Detailed service breakdown with pricing
- **Team**: Professional profiles with credentials
- **Insights**: Market commentary blog section
- **Contact**: Multi-step form with map integration
- **Footer**: Comprehensive links and disclaimers

#### Content Focus
The website emphasizes:
- Graham-Dodd value investing philosophy with Austrian Economic influence
- 20-year proven track record with specific performance metrics
- Hand-picked, customized portfolios with no expensive outside managers
- Conservative, research-driven approach questioning market assumptions
- Long-term wealth preservation for high-net-worth clients
- Professional credibility for Show Low, AZ location
- SEC registration and fiduciary standard

#### Component Organization
- All components in `/src/components/` directory with TypeScript
- Utility components for animations and effects
- Custom hooks for scroll animations and form handling
- Global styles with CSS custom properties for design tokens
- Responsive design with mobile-first approach
- Performance optimized with lazy loading and image optimization

#### Development Guidelines
- Use semantic HTML for accessibility
- Implement proper SEO meta tags and structured data
- Follow WCAG accessibility guidelines
- Optimize for Core Web Vitals
- Include proper financial services disclaimers
- Implement contact form with validation
- Add Google Analytics and conversion tracking