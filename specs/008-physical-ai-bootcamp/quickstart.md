# Quickstart Guide: Physical AI Bootcamp Restructure

## Setup for Development

1. **Prerequisites**:
   - Node.js 18+ with npm
   - Git for version control
   - A modern code editor (VS Code recommended)
   - Ubuntu 22.04 or compatible development environment

2. **Repository Setup**:
   ```bash
   git clone [repository-url]
   cd website
   npm install
   ```

3. **Local Development**:
   ```bash
   npm run start
   ```
   This will start the development server at http://localhost:3000

## Key Directories and Files

- `website/src/pages/index.tsx` - Homepage with premium tech-startup aesthetic
- `website/docs/pre-phase/` - Pre-phase content (BOM, Setup, Mindset)
- `website/sidebars.js` - Navigation structure (now week-based)
- `website/i18n/ur/` - Urdu localization files
- `website/src/components/` - Reusable components including Action Bar

## Homepage Customization

To customize the homepage:

1. Edit `website/src/pages/index.tsx` to modify the layout and content
2. Update the hero section with your specific value proposition
3. Modify the features section to highlight your bootcamp's unique benefits
4. Update the curriculum preview to match your specific 13-week structure

## Pre-phase Content Structure

The Pre-phase content is organized into three sections:

1. **BOM (Bill of Materials)**: `website/docs/pre-phase/bom.mdx`
   - Hardware requirements and recommendations
   - Software dependencies and versions
   - Budget considerations and purchasing guidance

2. **Setup**: `website/docs/pre-phase/setup.mdx`
   - Installation and configuration guides
   - Troubleshooting common issues
   - Validation procedures

3. **Mindset**: `website/docs/pre-phase/mindset.mdx`
   - Startup-founder approach to robotics
   - Innovation and entrepreneurship principles
   - Problem-solving methodologies

## Navigation Structure Update

To update from chapter-based to week-based navigation:

1. Edit `website/sidebars.js` to reorganize content structure
2. Change from `chapter-1`, `chapter-2`, etc. to `week-1`, `week-2`, etc.
3. Ensure the progression flows: Pre-phase → Week 1 → Week 2 → ... → Week 13 → Capstone

## i18n Routing Validation

To validate i18n routing between English and Urdu versions:

1. **Test English URLs**: Navigate to /docs/pre-phase/setup, /docs/module-1/week-1, etc.
2. **Test Urdu URLs**: Navigate to /ur/docs/pre-phase/setup, /ur/docs/module-1/week-1, etc.
3. **Test Language Switcher**: Click language switcher and verify content loads correctly
4. **Test Navigation Links**: Ensure all internal links work in both languages
5. **Test Content Availability**: Verify that content exists in both languages

## Building the Documentation

1. **Production Build**:
   ```bash
   npm run build
   ```

2. **Verify Build** (both English and Urdu):
   ```bash
   npm run build
   # Should generate static files in build/ and build/ur/
   ```

3. **Serve Locally for Testing**:
   ```bash
   npm run serve
   # Check locally at http://localhost:3000
   ```

## Testing Approach

- Validate all MDX files render correctly with new navigation
- Verify Action Bar components appear on all pages
- Confirm Urdu translations maintain technical accuracy
- Test navigation and cross-module links
- Verify week-based progression works correctly
- Test i18n routing between English and Urdu versions