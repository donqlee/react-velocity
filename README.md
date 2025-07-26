# React Velocity 🚀

[![npm version](https://badge.fury.io/js/react-velocity.svg)](https://badge.fury.io/js/react-velocity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

High-performance React optimization library with image optimization, virtualization, and performance monitoring.

## ✨ Features

### 🖼️ Image Optimization

- **Lazy Loading**: Intersection Observer based lazy loading
- **WebP Conversion**: Automatic WebP format with fallbacks
- **Responsive Images**: Automatic srcset generation
- **Performance Monitoring**: Real-time loading metrics

### 📊 Performance Monitoring

- **Core Web Vitals**: LCP, FID, CLS tracking
- **Custom Metrics**: Component render times
- **Network Monitoring**: Resource loading analysis
- **Real-time Dashboard**: Performance insights

### 🔄 Virtualization & Infinite Scroll

- **Window Virtualization**: Render only visible items
- **Infinite Scroll**: Seamless data loading
- **Auto-sizing**: Dynamic item height support
- **Smooth Scrolling**: Optimized scroll performance

## 🚀 Quick Start

### Installation

```bash
# Install the core package
npm install react-velocity

# Or install individual packages
npm install @react-velocity/image
npm install @react-velocity/monitor
npm install @react-velocity/virtualization
Basic Usage
tsximport { OptimizedImage, PerformanceMonitor, VirtualScroller } from 'react-velocity';

// Image Optimization
function App() {
  return (
    <OptimizedImage
      src="/large-image.jpg"
      alt="Optimized image"
      lazy
      webp
      responsive
      breakpoints={[480, 768, 1024]}
    />
  );
}

// Performance Monitoring
function AppWithMonitoring() {
  return (
    <PerformanceMonitor>
      <App />
    </PerformanceMonitor>
  );
}

// Virtual Scrolling
function ProductList({ products }) {
  return (
    <VirtualScroller
      items={products}
      itemHeight={100}
      renderItem={({ item, index }) => (
        <ProductCard key={item.id} product={item} />
      )}
    />
  );
}
📦 Packages
PackageDescriptionSizereact-velocityAll-in-one package이미지 표시@react-velocity/imageImage optimization이미지 표시@react-velocity/monitorPerformance monitoring이미지 표시@react-velocity/virtualizationVirtualization & infinite scroll이미지 표시
🛠️ Development
Prerequisites

Node.js 18.20.4+
pnpm 9.0.0+

Setup
bash# Clone repository
git clone https://github.com/your-username/react-velocity.git
cd react-velocity

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development mode
pnpm dev

# Run tests
pnpm test

# Lint code
pnpm lint
Project Structure
react-velocity/
├── apps/
│   ├── docs/              # Documentation site
│   └── playground/        # Development playground
├── packages/
│   ├── core/              # Main package
│   ├── image/             # Image optimization
│   ├── monitor/           # Performance monitoring
│   └── virtualization/    # Virtualization & infinite scroll
├── examples/              # Usage examples
└── tools/                 # Development tools
📖 Documentation

Getting Started
Image Optimization Guide
Performance Monitoring
Virtualization Guide
API Reference

🤝 Contributing
We welcome contributions! Please see our Contributing Guide for details.
Development Workflow

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'feat: add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

Turborepo for monorepo management
tsup for fast TypeScript bundling
Vitest for lightning fast testing

📊 Stats
이미지 표시
이미지 표시
이미지 표시

<p align="center">
  Made with ❤️ by <a href="https://github.com/your-username">Your Name</a>
</p>
```
