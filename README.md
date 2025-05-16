# BrightOps Group Website

A modern, responsive static website for BrightOps Group showcasing cloud consulting services tailored specifically for startups.

![BrightOps Group Logo](client/src/assets/logo.png)

## Project Overview

The BrightOps Group website is built as a static site that can be hosted on GitHub Pages. It features a clean, professional design with a fun, laid-back startup vibe to showcase cloud consulting services.

### Technology Stack

- **Frontend**: React.js with TypeScript
- **Styling**: TailwindCSS
- **Build System**: Vite
- **Deployment Platform**: GitHub Pages

### Key Features

- Responsive design that works on mobile, tablet, and desktop devices
- Modern, interactive UI elements with subtle animations
- Optimized performance with quick load times
- SEO-friendly structure
- Static site compatible with GitHub Pages hosting

## Local Development

### Prerequisites

- Node.js 18 or newer
- npm or yarn

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/brightops-group-website.git
   cd brightops-group-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if you use yarn
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or with yarn
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## Building for Production

When you're ready to build the site for production:

```bash
npm run build
# or with yarn
yarn build
```

This will create a production-ready build in the `dist` directory.

## Deploying to GitHub Pages

### Option 1: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Create (or update) a `.github/workflows/deploy.yml` file with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: dist
             branch: gh-pages
   ```

3. Push to your GitHub repository:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

4. Go to your GitHub repository settings, navigate to the "Pages" section, and set the source to the "gh-pages" branch.

### Option 2: Using gh-pages package

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   # or with yarn
   yarn add gh-pages --dev
   ```

2. Add these scripts to your `package.json`:
   ```json
   "scripts": {
     // other scripts...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update the `vite.config.ts` file to use the correct base path for GitHub Pages:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // other config...
   });
   ```

4. Deploy with:
   ```bash
   npm run deploy
   # or with yarn
   yarn deploy
   ```

## Project Structure

```
brightops-group-website/
├── client/              # Frontend code
│   ├── src/             # Source files
│   │   ├── assets/      # Images, fonts, etc.
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main App component
│   │   ├── index.css    # Global CSS
│   │   └── main.tsx     # Entry point
│   └── index.html       # HTML template
├── server/              # Server for local development
├── dist/                # Built files (after running build)
└── README.md            # This file
```

## Customization

### Updating Content

Most content can be updated by editing the component files in `client/src/components/`:

- `Hero.tsx` - Main headline and intro text
- `Services.tsx` - Service offerings
- `About.tsx` - About section content
- `Tools.tsx` - BrightOps tools information
- `Contact.tsx` - Contact information
- `Footer.tsx` - Footer content and links

### Changing Styles

The project uses TailwindCSS for styling. The main theme colors and fonts are defined in:

- `client/src/index.css` - Global styles and theme variables
- `tailwind.config.ts` - TailwindCSS configuration

## Contact

For any questions about this project, please contact:
- Email: brightopsgroup@gmail.com
- Location: South Jordan, UT
- LinkedIn: [BrightOps Group](https://www.linkedin.com/company/brightops-group)

## License

This project is licensed under the MIT License - see the LICENSE file for details.