# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 website for Meixler Investment Management, an investment advisory firm specializing in deep value investing. The site follows a professional, conservative design appropriate for a financial services company.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full TypeScript implementation
- **Components**: React functional components with hooks

### Design System
- **Colors**: Primary blue palette with gold accents reflecting trust and stability
- **Typography**: Serif fonts (Georgia) for professional, traditional feel
- **Layout**: Responsive grid system with consistent spacing
- **Components**: Reusable UI components with consistent styling patterns

### Site Structure
- **Header**: Fixed navigation with mobile menu
- **Hero**: Value proposition with call-to-action
- **About**: Company background and commitments  
- **Philosophy**: Investment principles and Warren Buffett-style approach
- **Services**: Portfolio management, advisory, and wealth preservation
- **Contact**: Contact form and business information
- **Footer**: Company details and disclaimers

### Content Focus
The website emphasizes:
- Graham-Dodd value investing philosophy with Austrian Economic influence
- 20-year proven track record
- Hand-picked, customized portfolios with no expensive outside managers
- Conservative, research-driven approach questioning market assumptions
- Long-term wealth preservation
- Professional credibility for Show Low, AZ location

### Component Organization
- All components in `/src/components/` directory
- Main page assembly in `/src/app/page.tsx`
- Global styles and Tailwind config optimized for investment advisory branding
- Responsive design ensuring mobile-first approach

### Development Notes
- Uses Tailwind's component classes for consistent styling
- Form handling ready for backend integration
- SEO-optimized with proper meta tags
- Professional disclaimers included for financial services compliance