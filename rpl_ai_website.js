// package.json
{
  "name": "rpl-ai-automation-agency",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.263.1",
    "react-hook-form": "^7.47.0",
    "zod": "^3.22.4",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.0.0"
  }
}

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gray: {
          850: '#1f2937',
          950: '#030712',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig

// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RPL AI Automation Agency - Transform Your Business with AI',
  description: 'Leading AI automation agency specializing in intelligent solutions for modern businesses. Streamline operations, boost efficiency, and drive growth with cutting-edge AI technology.',
  keywords: 'AI automation, business automation, artificial intelligence, machine learning, process optimization, digital transformation',
  openGraph: {
    title: 'RPL AI Automation Agency',
    description: 'Transform Your Business with AI Automation Solutions',
    url: 'https://rpl-ai.com',
    siteName: 'RPL AI Automation Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RPL AI Automation Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RPL AI Automation Agency',
    description: 'Transform Your Business with AI Automation Solutions',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

// app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

@layer components {
  .gradient-text {
    @apply bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent;
  }
  
  .glass-effect {
    @apply bg-white/5 backdrop-blur-sm border border-white/10;
  }
  
  .btn-primary {
    @apply px-8 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-lg shadow-lg hover:from-brand-600 hover:to-brand-700 transition-all duration-300 transform hover:scale-105;
  }
  
  .btn-secondary {
    @apply px-8 py-3 border border-brand-500 text-brand-400 font-semibold rounded-lg hover:bg-brand-500 hover:text-white transition-all duration-300;
  }
  
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

// app/page.tsx
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <About />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}

// app/components/Header.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bot, ChevronRight } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">RPL AI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-white/10"
          >
            <div className="section-container py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="btn-primary flex items-center justify-center space-x-2 mt-4"
                >
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

// app/components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Brain } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.05),transparent_70%)]"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-brand-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-brand-600/10 rounded-full blur-xl"
      />

      <div className="section-container relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Business Automation</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your Business with{' '}
            <span className="gradient-text">AI Automation</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Streamline operations, boost efficiency, and drive growth with our cutting-edge AI solutions. 
            Let us automate your processes while you focus on what matters most.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-3 text-white border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Zap, label: 'Efficiency Increase', value: '300%' },
              { icon: Brain, label: 'AI Models Deployed', value: '500+' },
              { icon: Sparkles, label: 'Client Satisfaction', value: '99%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-500/10 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-brand-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-brand-500 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-brand-500 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

// app/components/Services.tsx
'use client'
import { motion } from 'framer-motion'
import { Bot, Database, Workflow, BarChart3, Shield, Cpu, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots & Assistants',
      description: 'Intelligent conversational AI that handles customer inquiries, support tickets, and lead qualification 24/7.',
      features: ['Natural Language Processing', 'Multi-language Support', 'CRM Integration', 'Analytics Dashboard'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Streamline repetitive tasks and workflows with intelligent automation solutions that adapt to your business needs.',
      features: ['Workflow Optimization', 'Task Automation', 'API Integration', 'Custom Solutions'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with advanced AI analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Monitoring', 'Custom Reports'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Make data-driven decisions with comprehensive BI solutions powered by artificial intelligence.',
      features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Insights'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and aligned with industry best practices.',
      features: ['Security Audits', 'Compliance Monitoring', 'Risk Assessment', 'Data Protection'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Cpu,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your unique business requirements and industry challenges.',
      features: ['Custom Models', 'API Development', 'Integration Services', 'Ongoing Support'],
      color: 'from-teal-500 to-blue-500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI automation solutions designed to transform your business operations 
            and drive unprecedented growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-brand-400 hover:text-brand-300 font-medium transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

// app/components/Features.tsx
'use client'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  Cpu, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Implementation',
      description: 'Deploy AI solutions in weeks, not months, with our streamlined implementation process.',
      stats: '75% faster deployment'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption and compliance with industry standards to protect your data.',
      stats: '99.9% uptime guarantee'
    },
    {
      icon: Cpu,
      title: 'Cutting-Edge AI Technology',
      description: 'Leverage the latest in machine learning and neural networks for superior results.',
      stats: '10x performance improvement'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Our AI systems grow with your business, handling increased workloads seamlessly.',
      stats: 'Unlimited scalability'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring & Support',
      description: 'Round-the-clock system monitoring and expert support to ensure optimal performance.',
      stats: '< 1 hour response time'
    },
    {
      icon: Users,
      title: 'Dedicated AI Specialists',
      description: 'Work with certified AI engineers and data scientists who understand your industry.',
      stats: '50+ AI experts'
    }
  ]

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase productivity by 300%',
    'Improve customer satisfaction scores',
    'Accelerate decision-making processes',
    'Minimize human error and inconsistencies',
    'Enable 24/7 business operations'
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">RPL AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver enterprise-grade AI solutions that transform businesses and drive measurable results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="text-brand-400 font-semibold text-sm">
                  {feature.stats}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-brand-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Measurable Business Impact
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Our AI automation solutions deliver tangible results that directly impact your bottom line. 
                See the difference AI can make for your business.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Right Column */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-brand-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

// app/components/About.tsx
'use client'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Globe, Lightbulb } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '500+', label: 'AI Projects Completed' },
    { number: '98%', label: 'Client Retention Rate' },
    { number: '50+', label: 'Industry Verticals' },
    { number: '24/7', label: 'Support & Monitoring' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'To democratize AI and make intelligent automation accessible to businesses of all sizes.'
    },
    {
      icon: Eye,
      title: 'Visionary Approach',
      description: 'We envision a future where AI enhances human potential and drives sustainable business growth.'
    },
    {
      icon: Award,
      title: 'Excellence Focused',
      description: 'Committed to delivering world-class AI solutions that exceed expectations and drive results.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">RPL AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the AI revolution with innovative automation solutions that transform how businesses operate.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Pioneering AI Innovation Since Day One
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Founded by a team of AI researchers and business strategists, RPL AI emerged from a simple 
                yet powerful vision: to bridge the gap between cutting-edge artificial intelligence and 
                practical business applications.
              </p>
              <p>
                Our journey began in the research labs of leading tech companies, where we witnessed 
                firsthand the transformative potential of AI. Today, we're proud to be at the forefront 
                of the AI automation revolution, helping businesses worldwide unlock unprecedented efficiency 
                and growth.
              </p>
              <p>
                With a proven track record of successful implementations across diverse industries, 
                we continue to push the boundaries of what's possible with intelligent automation.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Powered by Leading Technologies
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We leverage the most advanced AI frameworks and tools to deliver superior results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'TensorFlow', 'PyTorch', 'OpenAI GPT', 'LangChain', 
              'Hugging Face', 'Azure AI', 'AWS ML', 'Google AI',
              'Docker', 'Kubernetes', 'Python', 'Node.js'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-brand-400 font-medium text-sm">{tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

// app/components/Team.tsx
'use client'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former AI Research Lead at Google. PhD in Machine Learning from Stanford.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@rpl-ai.com'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Microsoft AI architect with 15+ years in enterprise automation solutions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        email: 'michael@rpl-ai.com'
      }
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of AI Research',
      bio: 'Leading researcher in deep learning with 50+ published papers in top-tier journals.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'priya@rpl-ai.com'
      }
    },
    {
      name: 'James Wilson',
      role: 'Head of Business Development',
      bio: 'Former McKinsey consultant specializing in digital transformation strategies.',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james@rpl-ai.com'
      }
    },
    {
      name: 'Emily Zhang',
      role: 'Lead Data Scientist',
      bio: 'Expert in predictive analytics and machine learning model optimization.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        email: 'emily@rpl-ai.com'
      }
    },
    {
      name: 'David Kumar',
      role: 'VP of Engineering',
      bio: 'Full-stack engineer with expertise in scalable AI infrastructure and DevOps.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        email: 'david@rpl-ai.com'
      }
    }
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class AI specialists, researchers, and engineers dedicated to delivering 
            exceptional automation solutions.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-brand-500 to-brand-600 p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-500/20 to-transparent rounded-full"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <div className="text-brand-400 font-medium mb-4">{member.role}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-brand-500/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-brand-400" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-brand-500/20 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-brand-400" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      href={member.social.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-brand-500/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-brand-400" />
                    </motion.a>
                  )}
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-brand-500/20 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-brand-400" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4 text-white">Join Our Team</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              We're always looking for talented individuals passionate about AI and automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team

// app/components/Contact.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@rpl-ai.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      subtitle: 'Schedule an appointment'
    }
  ]

  const services = [
    'AI Chatbots & Assistants',
    'Process Automation',
    'Data Analytics & Insights',
    'Business Intelligence',
    'AI Security & Compliance',
    'Custom AI Development'
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help you 
            achieve your automation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-brand-400 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-secondary flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Consultation</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Live Chat Support</span>
              </motion.button>
            </div>

            {/* FAQ Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Have Questions?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Check out our frequently asked questions or download our AI automation guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 px-4 py-2 text-brand-400 border border-brand-500/30 rounded-lg hover:bg-brand-500/10 transition-all duration-300 text-sm">
                  View FAQ
                </button>
                <button className="flex-1 px-4 py-2 text-brand-400 border border-brand-500/30 rounded-lg hover:bg-brand-500/10 transition-all duration-300 text-sm">
                  Download Guide
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

// app/components/Footer.tsx
'use client'
import { motion } from 'framer-motion'
import { Bot, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      'AI Chatbots & Assistants',
      'Process Automation',
      'Data Analytics',
      'Business Intelligence',
      'AI Security',
      'Custom Development'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Blog',
      'Press Kit'
    ],
    resources: [
      'Documentation',
      'API Reference',
      'AI Guide',
      'Best Practices',
      'Webinars',
      'Support Center'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance',
      'Security',
      'Data Processing'
    ]
  }

  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold gradient-text">RPL AI</span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transforming businesses worldwide with cutting-edge AI automation solutions. 
                  Join thousands of companies already benefiting from intelligent automation.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>hello@rpl-ai.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 py-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Stay Updated with AI Insights
              </h3>
              <p className="text-gray-400">
                Get the latest AI automation trends, case studies, and industry insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} RPL AI Automation Agency. All rights reserved.
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { name: 'LinkedIn', href: '#' },
                { name: 'Twitter', href: '#' },
                { name: 'GitHub', href: '#' },
                { name: 'YouTube', href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-brand-500/20 transition-all duration-300 text-gray-400 hover:text-brand-400 text-sm font-medium"
                >
                  {social.name.charAt(0)}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// Additional configuration files:

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// .eslintrc.json
{
  "extends": "next/core-web-vitals"
}

// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

// README.md
# RPL AI Automation Agency Website

A modern, responsive website built with Next.js, React, and Tailwind CSS for RPL AI Automation Agency.

## Features

- 🚀 Next.js 14 with App Router
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 🎬 Framer Motion for animations
- 📱 Fully responsive design
- 🌙 Dark theme optimized
- ⚡ Lightning-fast performance
- 🔍 SEO optimized
- ♿ Accessibility compliant

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── components/          # React components
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json           # Dependencies
```

## Deployment

Deploy easily on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## License

© 2024 RPL AI Automation Agency. All rights reserved.
                