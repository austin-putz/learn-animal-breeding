# Learn Animal Breeding Website

Comprehensive educational resources for animal breeding, quantitative genetics, and breeding program management.

---

## 🚀 Quick Start

### Starting the Development Server

```bash
# Navigate to the project directory
cd /Users/austinputz/Claude/learn-animal-breeding

# Start the development server
npm run dev
```

The website will be available at:
- **Local:** http://localhost:3000 (or http://localhost:3002 if 3000 is in use)
- **Network:** http://192.168.1.188:3000 (accessible from other devices on your network)

**The server will automatically reload when you make changes to the code.**

---

## 📦 Available Commands

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server (run after build)

# Code Quality
npm run lint         # Run ESLint to check for code issues
npm run type-check   # Run TypeScript type checking
```

---

## 🛑 Stopping the Development Server

Press `Ctrl + C` in the terminal where the server is running to stop it.

---

## 📁 Project Structure

```
learn-animal-breeding/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── providers.tsx      # Theme provider
├── components/
│   ├── layout/            # Header, Footer, etc.
│   ├── ui/                # Reusable UI components (Button, Card, Badge)
│   ├── content/           # Content-specific components
│   ├── search/            # Search components
│   ├── pdf/               # PDF viewer components
│   └── blog/              # Blog components
├── content/               # MDX content files
│   ├── books/
│   ├── course-notes/
│   ├── my-notes/
│   ├── short-courses/
│   └── software/
├── public/
│   ├── pdfs/              # PDF files (organized by category)
│   └── images/            # Images, book covers, logos
├── lib/                   # Utility functions and configurations
└── styles/                # Additional styles
```

---

## 📚 Adding Content

### Adding PDFs

Place your PDF files in the appropriate directory:

```bash
# Books
public/pdfs/books/animal-breeding/
public/pdfs/books/quantitative-genetics/
public/pdfs/books/bayesian/
public/pdfs/books/statistics/
public/pdfs/books/mathematics/

# Course Notes
public/pdfs/course-notes/animal-breeding/
public/pdfs/course-notes/statistics/

# Your Notes
public/pdfs/my-notes/animal-breeding/
public/pdfs/my-notes/statistics/

# Short Courses
public/pdfs/short-courses/iowa-state/
public/pdfs/short-courses/une-australia/
```

**Naming Convention:**
- Books: `author-lastname-title-year.pdf`
  - Example: `mrode-linear-models-2014.pdf`
- Course Notes: `institution-course-code-year.pdf`
  - Example: `iowa-state-ansci501-2023.pdf`
- Your Notes: `topic-description.pdf`
  - Example: `genomic-selection-overview.pdf`

See **CLAUDE.md** for detailed PDF organization guidelines.

### Adding Images

Place book covers and images in:

```bash
public/images/books/        # Book covers (400x600px recommended)
public/images/software/     # Software logos
public/images/general/      # General site images
```

---

## 🎨 Design System

### Colors

**Primary (Blue/Teal):**
- Light backgrounds: `primary-50`, `primary-100`
- Main brand: `primary-600`
- Dark accents: `primary-900`, `primary-950`

**Accent (Warm Orange/Yellow):**
- CTAs and highlights: `accent-400`, `accent-500`

**Usage:**
```tsx
className="bg-primary-600 text-white"
className="text-primary-600 hover:text-primary-700"
```

### Components

**Button:**
```tsx
<Button variant="primary" size="lg">Click Me</Button>
<Button variant="outline" href="/link">Link Button</Button>
```

**Card:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

**Badge:**
```tsx
<Badge>Essential</Badge>
<Badge variant="outline">Recommended</Badge>
```

---

## 🌙 Dark Mode

The site supports dark mode with three options:
- **System** (default) - Follows your OS settings
- **Light** - Always light theme
- **Dark** - Always dark theme

Theme automatically persists in localStorage.

---

## 🔧 Configuration Files

- **`next.config.js`** - Next.js configuration
- **`tailwind.config.ts`** - Tailwind CSS/design system
- **`tsconfig.json`** - TypeScript configuration
- **`package.json`** - Dependencies and scripts
- **`CLAUDE.md`** - Complete development guide and specifications

---

## 📖 Documentation

For detailed development guidelines, design specifications, and implementation details, see **CLAUDE.md**.

Topics covered:
- Complete tech stack explanation
- Book card designs with badges
- PDF organization guide
- Navigation structure
- Content management workflow
- Feature implementations
- SEO optimization
- Deployment instructions

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) and import your repository

3. Vercel will automatically detect Next.js and configure everything

4. Your site will be live at: `your-project-name.vercel.app`

5. Add your custom domain in Vercel settings

---

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is in use, Next.js will automatically use the next available port (3001, 3002, etc.).

To force a specific port:
```bash
PORT=3005 npm run dev
```

### TypeScript Errors

Run type checking:
```bash
npm run type-check
```

### Module Not Found

Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

---

## 📝 Development Workflow

### Making Changes

1. **Start dev server:** `npm run dev`
2. **Make changes** to files in `app/`, `components/`, etc.
3. **Changes auto-reload** in your browser
4. **View at:** http://localhost:3000

### Before Committing

```bash
npm run lint         # Check for code issues
npm run type-check   # Check TypeScript types
npm run build        # Ensure production build works
```

### Git Workflow

```bash
git status                    # See changed files
git add .                     # Stage all changes
git commit -m "Description"   # Commit changes
git push                      # Push to remote
```

---

## 🆘 Need Help?

- **Full Documentation:** See `CLAUDE.md` in project root
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React:** https://react.dev

---

## 📊 Project Status

**Version:** 1.0.0
**Framework:** Next.js 16
**Status:** Active Development

### Completed:
- ✅ Project setup and configuration
- ✅ Design system with Tailwind CSS
- ✅ Core UI components (Button, Card, Badge)
- ✅ Layout components (Header, Footer)
- ✅ Home page with hero section
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Folder structure for all content types

### In Progress:
- 🔨 Books page with sidebar navigation
- 🔨 Book cards with badges
- 🔨 Software tools catalog
- 🔨 PDF viewer component
- 🔨 Search functionality
- 🔨 Blog integration with Sanity CMS

### Planned:
- 📋 Course notes pages
- 📋 Short courses pages
- 📋 YouTube resources page
- 📋 About page
- 📋 Technical skills guide
- 📋 Journals list

---

**Last Updated:** November 1, 2025
**Author:** Austin Putz
**License:** ISC
