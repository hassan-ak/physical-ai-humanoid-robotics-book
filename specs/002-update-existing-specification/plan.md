# Implementation Plan: Docusaurus Customization and Cleanup

**Branch**: `002-update-existing-specification` | **Date**: 2025-12-18 | **Spec**: [Feature Spec](/specs/002-update-existing-specification/spec.md)

**Input**: Feature specification from `/specs/002-update-existing-specification/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan addresses the customization and cleanup of the existing Docusaurus infrastructure for the Physical AI & Humanoid Robotics textbook. The implementation involves removing blog functionality, updating footer information, removing GitHub links, cleaning up validation scripts, and configuring for Vercel deployment. The approach follows a systematic process of identifying all affected files, making necessary changes, and validating the changes maintain functionality while meeting the specified requirements.

## Technical Context

**Language/Version**: TypeScript 5.0+, JavaScript ES2022
**Primary Dependencies**: Docusaurus 3.x, React 18.x, Node.js 18+, npm 8+
**Storage**: [N/A - static site generation]
**Testing**: [N/A - configuration changes, validation via build process]
**Target Platform**: Web (Vercel deployment)
**Project Type**: Web application (frontend documentation site)
**Performance Goals**: [N/A - static site generation with Docusaurus defaults]
**Constraints**: Must maintain all existing documentation navigation and content after cleanup
**Scale/Scope**: Single documentation site with 13 chapters across 4 modules

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Spec-First Development**: ✅ Confirmed - following spec-first methodology with completed feature specification
- **AI-Native Architecture**: ✅ Confirmed - maintaining Docusaurus implementation with Vercel deployment as required
- **User Authentication & Profiling**: [N/A for this feature] - not implementing auth in this phase
- **Chapter-Level Personalization**: ✅ Confirmed - maintaining existing personalization components (ActionBar)
- **Test-First Development**: [N/A for this feature] - configuration changes, not functional code requiring tests
- **Reusable & Modular Intelligence**: [N/A for this feature] - not adding new agent functionality in this phase

## Project Structure

### Documentation (this feature)

```text
specs/002-update-existing-specification/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
website/
├── docusaurus.config.ts    # Docusaurus configuration with navbar and footer settings
├── sidebars.ts            # Navigation sidebar configuration
├── src/
│   ├── components/        # React components including ActionBar
│   │   └── ActionBar/
│   │       ├── ActionBar.tsx
│   │       └── ActionBar.module.css
│   ├── pages/             # Landing page and other custom pages
│   └── theme/             # Custom theme components (swizzled layouts)
│       └── DocItem/
│           └── Layout/
│               └── index.tsx
├── docs/                  # Documentation content (module-1 to module-4)
├── static/                # Static assets
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vercel.json            # Vercel deployment configuration

.github/                   # GitHub Actions workflows (to be removed)
└── workflows/
    └── validation.yml

scripts/                   # Validation scripts (to be removed)
├── validate-links.js
└── validate-mdx.js
```

**Structure Decision**: Single web application structure with Docusaurus-generated static site. The website directory contains the complete Docusaurus project with custom components, documentation content, and configuration files. The .github and scripts directories will be cleaned up as part of this feature.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [N/A] | [N/A] | [N/A] |