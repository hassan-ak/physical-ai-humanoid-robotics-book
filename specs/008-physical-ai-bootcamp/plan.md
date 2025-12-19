# Implementation Plan: Physical AI Bootcamp Restructure

**Branch**: `008-physical-ai-bootcamp` | **Date**: 2025-12-19 | **Spec**: [link to spec](./spec.md)
**Input**: Feature specification from `/specs/008-physical-ai-bootcamp/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create architectural blueprint for final deployment of Physical AI bootcamp, including premium tech-startup aesthetic homepage design, comprehensive Pre-phase content mapping (BOM, Setup, Mindset), navigation overhaul to replace 'Chapter' logic with 'Week' logic, and i18n routing validation between English and Urdu versions. This restructuring will transform the site into a professional bootcamp experience with clear progression from Pre-phase through Weeks 1-13 to Capstone.

## Technical Context

**Language/Version**: TypeScript 5.x, JavaScript ES2022 + Docusaurus 3.x, React 18.x, Node.js 18+, npm/yarn
**Primary Dependencies**: Docusaurus 3.x, React 18.x, Node.js 18+, TypeScript 5.x, npm/yarn, MDX, SCSS/CSS modules for styling
**Storage**: N/A (file-based documentation content in MDX format)
**Testing**: N/A (content validation through build process)
**Target Platform**: Web-based documentation site (Docusaurus) with i18n support
**Project Type**: Web/documentation - static site generation with educational content and interactive components
**Performance Goals**: Homepage loads under 2 seconds, all pages render correctly with responsive design, i18n routing works seamlessly between locales
**Constraints**: Must maintain "Startup Founder" tone, include Action Bar components, provide Urdu localization, ensure consistent navigation structure, follow Docusaurus best practices
**Scale/Scope**: 1 homepage redesign, 1 Pre-phase module with comprehensive setup guides, navigation overhaul across all existing content, i18n routing validation

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Pre-Design Check:
- **Spec-First Development**: ✅ Following constitution by creating plan after spec
- **AI-Native Architecture**: ✅ Content will be part of Docusaurus-based educational platform with integrated RAG chatbot
- **User Authentication & Profiling**: N/A for content creation
- **Chapter-Level Personalization**: ✅ Content will include UI controls for personalization and Urdu translation
- **Test-First Development**: ✅ Content will be validated through build process
- **Reusable & Modular Intelligence**: ✅ Following established content generation process with agent context updated

### Post-Design Check:
- **Spec-First Development**: ✅ Plan aligns with specification requirements
- **AI-Native Architecture**: ✅ Design includes RAG chatbot integration and Claude Code Subagents
- **User Authentication & Profiling**: N/A for content creation
- **Chapter-Level Personalization**: ✅ Design includes Urdu translation and personalization controls
- **Test-First Development**: ✅ Tasks include validation through build process
- **Reusable & Modular Intelligence**: ✅ Agent context updated with new technology stack

## Project Structure

### Documentation (this feature)

```text
specs/008-physical-ai-bootcamp/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Content (repository root)

```text
website/
├── src/
│   ├── pages/
│   │   └── index.tsx           # Homepage with premium tech-startup aesthetic
│   ├── components/
│   │   ├── Homepage/           # Homepage-specific components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Features.tsx
│   │   │   └── CTASection.tsx
│   │   └── ActionBar/          # Action Bar component
│   │       ├── ActionBar.jsx
│   │       └── ActionBar.module.css
│   ├── css/
│   │   └── custom.css          # Custom styles for premium aesthetic
│   └── theme/
│       └── navbar/             # Custom navbar for bootcamp structure
├── docs/
│   ├── pre-phase/              # Pre-phase content (BOM, Setup, Mindset)
│   │   ├── bom.mdx             # Bill of Materials guide
│   │   ├── setup.mdx           # Hardware/Software setup guide
│   │   └── mindset.mdx         # Startup-founder mindset guide
│   ├── module-1/               # Week-based content replacing chapters
│   │   ├── week-1.mdx
│   │   ├── week-2.mdx
│   │   └── ...
│   ├── module-2/
│   │   ├── week-6.mdx
│   │   ├── week-7.mdx
│   │   └── ...
│   ├── module-3/
│   │   ├── week-8.mdx
│   │   ├── week-9.mdx
│   │   └── week-10.mdx
│   └── module-4/
│       ├── week-11.mdx
│       ├── week-12.mdx
│       ├── week-13.mdx
│       └── capstone.mdx
├── i18n/
│   └── ur/
│       └── docusaurus-plugin-content-docs/
│           └── current/
│               ├── pre-phase/      # Urdu localized Pre-phase content
│               │   ├── bom.mdx
│               │   ├── setup.mdx
│               │   └── mindset.mdx
│               ├── module-1/       # Urdu localized week content
│               │   ├── week-1.mdx
│               │   ├── week-2.mdx
│               │   └── ...
│               └── [other modules]/ # Urdu localized content for all modules
├── sidebars.js                 # Updated navigation structure
├── docusaurus.config.ts        # Configuration with week-based structure
└── package.json                # Dependencies for premium aesthetic
```

**Structure Decision**: Web-based documentation structure following Docusaurus conventions with premium tech-startup aesthetic on homepage, comprehensive Pre-phase content organized by BOM/Setup/Mindset sections, and week-based navigation replacing chapter-based structure. Content will be organized by modules and weeks with proper i18n routing between English and Urdu versions.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
