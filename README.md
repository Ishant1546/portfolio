# 🎮 DevCraft Portfolio - Minecraft & Discord Developer

![Portfolio Preview](https://placehold.co/800x400/1e293b/6366f1?text=DevCraft+Portfolio+Preview)

A modern, responsive portfolio website for Minecraft and Discord developers showcasing skills, projects, and contact information with a vibrant color scheme.

## 🌟 Features

### 🎨 Beautiful Design
- **🎨 Discord/Minecraft Color Scheme**: Indigo and green gradient theme
- **📱 Fully Responsive**: Works on all devices from mobile to desktop
- **✨ Smooth Animations**: Subtle transitions and hover effects
- **🌓 Dark Mode**: Easy on the eyes dark theme

### 🧭 Navigation
- **🧭 Single Page Navigation**: Smooth scrolling between sections
- **🍔 Mobile-Friendly Menu**: Hamburger menu for small screens
- **📍 Active Section Highlighting**: Current page indicator

### 📚 Portfolio Sections

#### 🏠 Home Page
- **👋 Hero Section**: Eye-catching introduction with call-to-action buttons
- **📊 Statistics Display**: Key metrics with animated counters
- **⚡ Quick Access**: Direct links to projects and contact

#### 💻 Skills Page
- **🛠️ Skill Categories**: Organized skill展示 with icons
- **🏷️ Technology Tags**: Programming languages and tools used
- **📈 Expertise Levels**: Visual representation of proficiency

#### 📁 Projects Page
- **🖼️ Project Gallery**: Grid layout with project cards
- **🔖 Category Tags**: Filter projects by type
- **🔧 Technology Stack**: Tools used in each project

#### 👤 About Page
- **📖 Personal Bio**: Professional background and experience
- **✅ Experience Highlights**: Key accomplishments and skills
- **🎯 Career Timeline**: Professional journey overview

#### 📞 Contact Page
- **📧 Contact Form**: Easy way to get in touch
- **📱 Social Links**: Direct connections to profiles
- **💼 Availability Status**: Current project availability

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **📥 Clone the repository**
```bash
git clone https://github.com/yourusername/minecraft-portfolio.git
cd minecraft-portfolio
```

2. **📦 Install dependencies**
```bash
npm install
# or
yarn install
```

3. **🔥 Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **🏗️ Build for production**
```bash
npm run build
# or
yarn build
```

5. **🌐 Preview production build**
```bash
npm run preview
# or
yarn preview
```

## 🛠️ Development Workflow

1. **🎨 Create a new branch for features**
```bash
git checkout -b feature/new-feature
```

2. **💾 Commit your changes**
```bash
git add .
git commit -m "Add new feature"
```

3. **📤 Push to GitHub**
```bash
git push origin feature/new-feature
```

4. **🔄 Create a Pull Request**

## 📁 Project Structure

```
minecraft-portfolio/
├── 📁 src/
│   ├── 📄 App.tsx          # Main application component
│   ├── 📄 main.tsx         # Entry point
│   ├── 📁 pages/           # Page components
│   │   ├── 📄 HomePage.tsx
│   │   ├── 📄 SkillsPage.tsx
│   │   ├── 📄 ProjectsPage.tsx
│   │   ├── 📄 AboutPage.tsx
│   │   └── 📄 ContactPage.tsx
│   └── 📁 components/
│       └── 📁 ui/          # Reusable UI components
│           ├── 📄 button.tsx
│           ├── 📄 card.tsx
│           ├── 📄 input.tsx
│           ├── 📄 label.tsx
│           └── 📄 textarea.tsx
├── 📄 index.html           # HTML template
├── 📄 vite.config.ts       # Vite configuration
├── 📄 tsconfig.json        # TypeScript configuration
└── 📄 package.json         # Project dependencies
```

## ⚙️ Configuration

### 🎨 Tailwind CSS
Custom configuration in `tailwind.config.js`:
- Extended color palette with Discord/Minecraft theme
- Custom spacing and sizing
- Responsive breakpoints

### 🚀 Vite
Optimized build settings in `vite.config.ts`:
- Path aliases for cleaner imports
- Asset optimization
- Environment variables support

## 🧪 Testing

### 🖥️ Browser Testing
- Chrome (primary development browser)
- Firefox
- Safari
- Edge

### 📱 Device Testing
- iPhone SE to iPhone 14 Pro Max
- iPad and iPad Pro
- Android phones and tablets
- Desktop resolutions from 1080p to 4K

## 🚀 Deployment Options

### 🟦 Netlify
Deploy to Netlify

### ▲ Vercel
Deploy with Vercel

### 🐳 Docker Deployment
```bash
# Build the image
docker build -t minecraft-portfolio .

# Run the container
docker run -p 3000:3000 minecraft-portfolio
```

### ☁️ Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=DevCraft Portfolio
VITE_APP_DESCRIPTION=Minecraft & Discord Developer Portfolio
VITE_CONTACT_EMAIL=contact@devcraft.dev
```

## 📈 Performance Optimization

### 🖼️ Image Optimization
- Lazy loading for all images
- WebP format where supported
- Responsive image sizes

### ⚡ Code Splitting
- Route-based code splitting
- Dynamic imports for heavy components
- Bundle analysis with `npm run analyze`

### 🌐 Caching Strategy
- Service worker for offline support
- Cache-first strategy for static assets
- Network-first for API requests

## 🔒 Security Best Practices
- Content Security Policy (CSP) headers
- XSS protection
- Secure form handling
- Rate limiting on contact forms

## 🤝 Contributing Guidelines

1. フォーク the repository
2. ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. コミット する (`git commit -m 'Add some AmazingFeature'`)
4. プッシュ する (`git push origin feature/AmazingFeature`)
5. プルリクエスト を開く

## 🐛 Reporting Issues

When reporting issues, please include:
- 📱 Browser and version
- 🖥️ Operating system
- 📋 Steps to reproduce
- 📸 Screenshots if applicable
- 📦 Error messages

## 🔄 Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

## 📜 License Information

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Community & Support

- 📧 Email: support@devcraft.dev
- 🐦 Twitter: @DevCraftDev
- 💬 Discord: Join our community
- 📚 Documentation: docs.devcraft.dev

## 🙏 Acknowledgments

- 🎨 Tailwind CSS for the utility-first framework
- ⚛️ React for the UI library
- 🚀 Vite for the build tool
- 🎭 Lucide Icons for beautiful icons
- 🎮 Minecraft and Discord communities for inspiration

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</p>
