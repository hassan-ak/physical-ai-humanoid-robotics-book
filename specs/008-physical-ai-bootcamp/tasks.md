---
description: "Task list for Physical AI Bootcamp Restructure"
---

# Tasks: Physical AI Bootcamp Restructure

**Input**: Design documents from `/specs/008-physical-ai-bootcamp/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Documentation**: `website/docs/`, `website/i18n/` at repository root
- **Pages**: `website/src/pages/` for homepage and other pages
- **Components**: `website/src/components/`
- **MDX files**: `website/docs/pre-phase/` and `website/i18n/ur/docusaurus-plugin-content-docs/current/pre-phase/`
- **Configuration**: `website/sidebars.js`, `website/docusaurus.config.ts`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create website/src/pages/ directory if it doesn't exist
- [X] T002 Create website/docs/pre-phase/ directory structure
- [X] T003 Create website/i18n/ur/docusaurus-plugin-content-docs/current/pre-phase/ directory structure
- [X] T004 Verify Action Bar component exists in website/src/components/ActionBar/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Create basic homepage file structure with proper frontmatter in website/src/pages/index.tsx
- [X] T006 Create basic pre-phase MDX file structure with proper frontmatter
- [X] T007 Create sidebar backup before rewriting sidebars.js
- [X] T008 [P] Verify mobile responsiveness tools are available in Docusaurus setup

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Bootcamp Homepage Experience (Priority: P1) 🎯 MVP

**Goal**: Create high-conversion Landing Page in 'src/pages/index.tsx' with premium tech-startup aesthetic and compelling hero section focused on 'Humanoid Robotics' with startup tone

**Independent Test**: Homepage visitors understand this is a Physical AI bootcamp focused on humanoid robotics after viewing the hero section, delivering a clear understanding of the program's focus from a startup perspective

### Implementation for User Story 1

- [X] T009 [US1] Author 'website/src/pages/index.tsx' with premium tech-startup aesthetic homepage design
- [X] T010 [US1] Add compelling hero section for 'Humanoid Robotics' with startup tone in 'website/src/pages/index.tsx'
- [X] T011 [US1] Include value proposition messaging focused on Physical AI and humanoid robotics in 'website/src/pages/index.tsx'
- [X] T012 [US1] Add features/benefits section highlighting bootcamp advantages in 'website/src/pages/index.tsx'
- [X] T013 [US1] Create curriculum preview showing 13-week journey from Pre-phase to Capstone in 'website/src/pages/index.tsx'
- [X] T014 [US1] Add primary and secondary call-to-action buttons in 'website/src/pages/index.tsx'
- [X] T015 [US1] Style homepage with premium aesthetic using CSS modules in 'website/src/pages/index.tsx'
- [X] T016 [US1] Ensure responsive design works across desktop, tablet, and mobile in 'website/src/pages/index.tsx'
- [X] T017 [US1] Add Action Bar component import and implementation in 'website/src/pages/index.tsx'
- [X] T018 [US1] Ensure 'website/src/pages/index.tsx' follows Startup Founder tone and includes Importance of Physical AI insights

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Pre-phase Setup Experience (Priority: P2)

**Goal**: Create comprehensive Pre-phase content with BOM, Setup, and Mindset sections in both English and Urdu

**Independent Test**: Students can successfully complete Ubuntu 22.04 and Jetson Orin setup following the Pre-phase guides, delivering a properly prepared development workspace

### Implementation for User Story 2

- [X] T019 [US2] Author 'website/docs/pre-phase/bom.mdx' covering Bill of Materials for Jetson Orin and Ubuntu 22.04 setup
- [X] T020 [US2] Author 'website/docs/pre-phase/setup.mdx' covering comprehensive hardware/software setup guide for Ubuntu 22.04 + Jetson Orin
- [X] T021 [US2] Author 'website/docs/pre-phase/mindset.mdx' covering startup-founder approach to robotics development
- [X] T022 [US2] Add Action Bar component to all pre-phase pages in 'website/docs/pre-phase/'
- [X] T023 [US2] Ensure responsive design works for all pre-phase pages
- [X] T024 [US2] Verify all setup instructions are clear and comprehensive for beginners
- [X] T025 [US2] Include troubleshooting tips and common issues in setup guide
- [X] T026 [US2] Ensure all pre-phase content follows Startup Founder tone
- [X] T027 [US2] Add Importance of Physical AI insights throughout pre-phase content

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Navigation Experience (Priority: P3)

**Goal**: Rewrite 'sidebars.js' to show 'Pre-phase -> Weeks 1-13 -> Capstone' chronological structure

**Independent Test**: Students can clearly see curriculum progression from Pre-phase through Weeks 1-13 to Capstone in the navigation, delivering a clear understanding of the curriculum flow

### Implementation for User Story 3

- [X] T028 [US3] Rewrite 'website/sidebars.js' to implement 'Pre-phase -> Weeks 1-13 -> Capstone' navigation structure
- [X] T029 [US3] Replace all 'Chapter' references with 'Week' references in sidebar navigation
- [X] T030 [US3] Organize content chronologically from Pre-phase through Week 1 to Week 13 to Capstone
- [X] T031 [US3] Maintain proper nesting and hierarchy for all modules and weeks
- [X] T032 [US3] Verify navigation links work correctly across all existing content
- [X] T033 [US3] Update breadcrumbs to reflect new week-based structure
- [X] T034 [US3] Ensure navigation is responsive and works on mobile devices
- [X] T035 [US3] Test navigation flow from Pre-phase through all weeks to Capstone

**Checkpoint**: At this point, User Stories 1, 2 AND 3 should all work independently

---

## Phase 6: User Story 4 - Component Integration (Priority: P4)

**Goal**: Ensure <ActionBar /> component is functional across all Pre-phase pages and verify responsive design

**Independent Test**: Action Bar component functions properly on all Pre-phase pages across different devices, delivering consistent user experience across the curriculum

### Implementation for User Story 4

- [X] T036 [US4] Inject <ActionBar /> component to 'website/docs/pre-phase/bom.mdx'
- [X] T037 [US4] Inject <ActionBar /> component to 'website/docs/pre-phase/setup.mdx'
- [X] T038 [US4] Inject <ActionBar /> component to 'website/docs/pre-phase/mindset.mdx'
- [X] T039 [US4] Verify Action Bar functionality works on all Pre-phase pages
- [X] T040 [US4] Test responsive design for Action Bar on mobile devices
- [X] T041 [US4] Ensure Action Bar maintains consistent styling across all pages
- [X] T042 [US4] Verify Urdu localization functionality works through Action Bar
- [X] T043 [US4] Test mobile navigation and responsive behavior across all components

**Checkpoint**: All user stories should now be independently functional

---

## Phase 7: Localization & Polish

**Purpose**: Urdu localization and cross-cutting concerns

- [X] T044 Task the 'Urdu-Linguist' to translate 'website/docs/pre-phase/bom.mdx' to 'website/i18n/ur/docusaurus-plugin-content-docs/current/pre-phase/bom.mdx', focusing on maintaining technical accuracy in Urdu scripts
- [X] T045 Task the 'Urdu-Linguist' to translate 'website/docs/pre-phase/setup.mdx' to 'website/i18n/ur/docusaurus-plugin-content-docs/current/pre-phase/setup.mdx', focusing on maintaining technical accuracy in Urdu scripts
- [X] T046 Task the 'Urdu-Linguist' to translate 'website/docs/pre-phase/mindset.mdx' to 'website/i18n/ur/docusaurus-plugin-content-docs/current/pre-phase/mindset.mdx', focusing on maintaining technical accuracy in Urdu scripts
- [X] T047 [P] Ensure 'Humanoid Robotics' is translated consistently in Urdu versions as 'ہیومنوائڈ روبوٹکس' (Humanoid Robotics)
- [X] T048 [P] Ensure 'Jetson Orin' is translated consistently in Urdu versions as 'جیتسن اورن' (Jetson Orin)
- [X] T049 [P] Ensure 'Ubuntu 22.04' is translated consistently in Urdu versions as 'اوبنٹو 22.04' (Ubuntu 22.04)
- [X] T050 [P] Verify MDX exports and Action Bar visibility on English pre-phase versions
- [X] T051 [P] Verify MDX exports and Action Bar visibility on Urdu pre-phase versions
- [X] T052 [P] Run 'npm run build' to verify build for English locale
- [X] T053 [P] Run 'npm run build' to verify build for Urdu locale
- [X] T054 Execute production build ('npm run build') and verify all new links work correctly
- [X] T055 Test mobile responsiveness across all new pages and components
- [X] T056 Verify all Action Bar functionality works across all device sizes
- [X] T057 Perform comprehensive link verification across all content
- [X] T58 Verify all content follows Startup Founder tone consistently

**Checkpoint**: Complete production build and validation ready

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3 → P4)
- **Localization & Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (P4)**: Can start after Foundational (Phase 2) - May integrate with US1/US2/US3 but should be independently testable

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all homepage creation tasks for User Story 1 together:
Task: "Author 'website/src/pages/index.tsx' with premium tech-startup aesthetic homepage design"
Task: "Add compelling hero section for 'Humanoid Robotics' with startup tone in 'website/src/pages/index.tsx'"
Task: "Include value proposition messaging focused on Physical AI and humanoid robotics in 'website/src/pages/index.tsx'"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 4
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence