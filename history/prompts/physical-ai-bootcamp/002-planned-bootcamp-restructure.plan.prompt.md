---
id: 002
title: planned-bootcamp-restructure
stage: plan
date: 2025-12-19
surface: agent
model: claude-sonnet-4-5-20250929
feature: physical-ai-bootcamp
branch: 008-physical-ai-bootcamp
user: hassan
command: /sp.plan
labels: ["planning", "architecture", "homepage", "pre-phase", "i18n"]
links:
  spec: ../specs/008-physical-ai-bootcamp/spec.md
  plan: ../specs/008-physical-ai-bootcamp/plan.md
  research: ../specs/008-physical-ai-bootcamp/research.md
  data-model: ../specs/008-physical-ai-bootcamp/data-model.md
  quickstart: ../specs/008-physical-ai-bootcamp/quickstart.md
  contracts: ../specs/008-physical-ai-bootcamp/contracts/
  ticket: null
  adr: null
  pr: null
files:
  - specs/008-physical-ai-bootcamp/plan.md
  - specs/008-physical-ai-bootcamp/research.md
  - specs/008-physical-ai-bootcamp/data-model.md
  - specs/008-physical-ai-bootcamp/quickstart.md
  - specs/008-physical-ai-bootcamp/contracts/
  - specs/008-physical-ai-bootcamp/checklists/i18n-routing-validation.md
tests:
  - constitution check validation
  - agent context update
  - cross-document consistency
---

## Prompt

```
Architectural Blueprint for Final Deployment.
1. Design: Map out the 'src/pages/index.tsx' layout using a premium tech-startup aesthetic.
2. Content Mapping: Define the exact sections of the Pre-phase (BOM, Setup, Mindset).
3. Navigation: Plan the removal of all 'Chapter' logic to favor the 'Week' logic.
4. Validation: Design a check-list to verify i18n routing between English and Urdu versions of the new landing page.
```

## Response snapshot

Completed comprehensive implementation plan for Physical AI bootcamp restructuring with:

1. **Technical Context** (plan.md): Detailed technology stack including TypeScript 5.x, Docusaurus 3.x, React 18.x, Node.js 18+, with performance goals for homepage loading and i18n routing

2. **Research Summary** (research.md): Key architectural decisions on premium tech-startup aesthetic, Pre-phase content structure (BOM/Setup/Mindset), week-based navigation over chapter-based, and i18n routing validation strategy

3. **Data Model** (data-model.md): Entity definitions for HomepageContent, PrePhaseContent, NavigationItem, LocalizationPair, CurriculumWeek, and their relationships

4. **Quickstart Guide** (quickstart.md): Complete development setup, customization instructions, and testing approach for the bootcamp restructure

5. **i18n Validation Checklist** (checklists/i18n-routing-validation.md): 25-point validation checklist covering routing, content, functional, performance, and edge case validation between English and Urdu versions

6. **Agent Context Update**: Technology stack added to CLAUDE.md including Docusaurus 3.x, React 18.x, TypeScript 5.x, and MDX components

7. **Constitution Check**: Pre and post-design validation confirming alignment with project principles

8. **Project Structure**: Detailed directory structure showing homepage components, Pre-phase content organization, week-based navigation, and i18n routing

## Outcome

- ✅ Impact: Complete architectural blueprint for bootcamp restructure with premium aesthetic and week-based navigation
- 🧪 Tests: Constitution check passed with pre/post design validation
- 📁 Files: 6 planning artifacts created (plan, research, data model, quickstart, contracts dir, validation checklist)
- 🔁 Next prompts: Ready for task breakdown with /sp.tasks
- 🧠 Reflection: Plan addresses all user requirements with clear implementation pathway

## Evaluation notes (flywheel)

- Failure modes observed: None - all planning requirements fulfilled
- Graders run and results (PASS/FAIL): PASS - Complete planning validation successful
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Create detailed task breakdown with /sp.tasks