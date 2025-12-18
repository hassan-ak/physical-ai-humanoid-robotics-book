# Quickstart Guide: AI-Native Docusaurus Infrastructure

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git
- Vercel CLI (optional, for local deployment testing)

## Setup Instructions

### 1. Clone and Initialize
```bash
# Navigate to project root
cd /path/to/project

# Create website directory
mkdir website
cd website
```

### 2. Install Docusaurus
```bash
# Initialize Docusaurus project with TypeScript
npm init docusaurus@latest . classic --typescript
# OR with yarn
yarn create docusaurus . classic --typescript
```

### 3. Install Additional Dependencies
```bash
npm install @docusaurus/module-type-aliases @docusaurus/types
```

### 4. Project Structure Setup
```bash
# Create the required directory structure
mkdir -p docs/{module-1,module-2,module-3,module-4}
mkdir -p src/{components,theme}
mkdir -p src/components/ActionBar
mkdir -p src/theme/DocItem
```

### 5. Configure TypeScript
Update `tsconfig.json` with:
```json
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

### 6. Run Development Server
```bash
npm run start
# OR
yarn start
```

## Key Configuration Files

### docusaurus.config.js
- Main configuration file for site metadata, plugins, and themes
- Add i18n configuration for English and Urdu support

### sidebars.js
- Navigation structure for documentation
- Organized by course modules and chapters

### src/theme/DocItem/Layout/index.js
- Swizzled component to inject Action Bar
- Receives page metadata as props

### src/components/ActionBar/ActionBar.js
- Custom React component with personalization/translation placeholders
- Uses React hooks for state management

## Deployment to Vercel

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build` (or `yarn build`)
3. Set output directory: `build`
4. Configure environment variables as needed