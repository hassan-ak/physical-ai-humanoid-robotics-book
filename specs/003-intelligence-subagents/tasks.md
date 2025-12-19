# Task List: Intelligence Layer (Subagents and Skills)

**Feature**: Intelligence Layer: Subagents & Skills for Physical AI Textbook
**Branch**: 003-intelligence-subagents
**Created**: 2025-12-18
**Input**: Feature specification and implementation plan

## Implementation Strategy

**MVP Scope**: Complete User Story 1 (Initialize AI Workforce Infrastructure) to establish the foundational agent and skill configuration system.

**Delivery Approach**: Incremental delivery by user story priority, with each story delivering independently testable functionality.

**Parallel Execution Opportunities**: Agent configuration files can be created in parallel, as can skill definition files.

## Dependencies

1. **User Story 1 (P1)**: Foundation - must be completed before other stories
2. **User Story 2 (P2)**: Depends on User Story 1
3. **User Story 3 (P3)**: Depends on User Story 1
4. **User Story 4 (P3)**: Depends on User Story 1

## Parallel Execution Examples

- **Within User Story 1**: Creating agent JSON files can run in parallel with creating skill MDX files
- **Within User Story 2-4**: Each agent configuration can be developed in parallel after foundational setup

---

## Phase 1: Setup Tasks

- [X] T001 Create .claude directory structure with agents/ and skills/ subdirectories
- [X] T002 Set up basic project configuration for Claude Code integration
- [ ] T003 Install required dependencies (Docusaurus 3.x, React 18.x, Node.js 18+)

## Phase 2: Foundational Tasks

- [ ] T004 Create base agent service framework in src/services/agent-service.js
- [ ] T005 Create i18n service framework in src/services/i18n-service.js
- [ ] T006 Implement MDX content processing utilities in src/lib/mdx-utils.js
- [ ] T007 Implement ROS 2 Python code standards utilities in src/lib/ros2-standards.js
- [ ] T008 Create Action Bar component structure in src/components/ActionBar/

## Phase 3: [US1] Initialize AI Workforce Infrastructure

**Goal**: Establish specialized AI workforce (Subagents) and Handbooks (Skills) to generate technically accurate robotics content with automated Urdu translation.

**Independent Test**: Verify that the `.claude/agents/` and `.claude/skills/` directories exist with properly configured JSON and MDX files, delivering the ability to orchestrate AI agents for content creation.

- [X] T009 [P] [US1] Create Robotics-Architect agent configuration in .claude/agents/robotics-architect.json
- [X] T010 [P] [US1] Create Urdu-Linguist agent configuration in .claude/agents/urdu-linguist.json
- [X] T011 [P] [US1] Create Content-Stylist agent configuration in .claude/agents/content-stylist.json
- [X] T012 [P] [US1] Create Technical-Writing-Standards skill in .claude/skills/technical-writing-standards.mdx
- [X] T013 [P] [US1] Create Robotics-Hardware-Glossary skill in .claude/skills/robotics-hardware-glossary.mdx
- [ ] T014 [US1] Implement agent orchestration workflow in agent-service.js
- [ ] T015 [US1] Test infrastructure initialization with sample content

## Phase 4: [US2] Configure Robotics-Architect Subagent

**Goal**: Configure Robotics-Architect subagent specialized in ROS 2 Humble, NVIDIA Isaac Sim, and Humanoid Kinematics to ensure technical accuracy and generate code examples for the robotics textbook.

**Independent Test**: Invoke the Robotics-Architect subagent and verify it produces technically accurate content and code examples related to ROS 2, Isaac Sim, and kinematics.

- [ ] T016 [US2] Enhance Robotics-Architect system prompt with ROS 2 Humble expertise
- [ ] T017 [US2] Enhance Robotics-Architect system prompt with NVIDIA Isaac Sim expertise
- [ ] T018 [US2] Enhance Robotics-Architect system prompt with Humanoid Kinematics expertise
- [ ] T019 [US2] Implement ROS 2 Python (rclpy) code example generation standards
- [ ] T020 [US2] Test Robotics-Architect with sample robotics concept requiring technical explanation

## Phase 5: [US3] Configure Urdu-Linguist Subagent

**Goal**: Configure Urdu-Linguist subagent that can convert complex robotics concepts into natural, accurate Urdu for the internationalization layer, enabling broader accessibility of the textbook.

**Independent Test**: Provide English robotics content to the Urdu-Linguist and verify accurate and natural Urdu translation.

- [ ] T021 [US3] Enhance Urdu-Linguist system prompt with technical translation capabilities
- [ ] T022 [US3] Implement Urdu translation verification for sample robotics MDX file
- [ ] T023 [US3] Test Urdu-Linguist with robotics concepts that have no direct Urdu equivalents
- [ ] T024 [US3] Test Urdu-Linguist with complex mathematical equations in content
- [ ] T025 [US3] Verify Urdu-Linguist preserves code blocks during translation

## Phase 6: [US4] Configure Content-Stylist Subagent

**Goal**: Configure Content-Stylist subagent to maintain the 'Startup Founder' tone and ensure proper use of MDX components (Action Bar, Callouts) for consistent presentation of the textbook content.

**Independent Test**: Provide raw content to the Content-Stylist and verify it applies the correct tone and formatting components.

- [ ] T026 [US4] Enhance Content-Stylist system prompt with 'Startup Founder' tone guidelines
- [ ] T027 [US4] Implement MDX component usage standards (Action Bar, Callouts)
- [ ] T028 [US4] Test Content-Stylist with raw robotics content for tone consistency
- [ ] T029 [US4] Test Content-Stylist with MDX formatting component integration

## Phase 7: [US3] Map Urdu-Linguist to Action Bar Integration

**Goal**: Ensure the 'Urdu-Linguist' subagent is mapped to the 'ActionBar' Urdu Translate button logic.

**Independent Test**: Verify that clicking the Urdu Translate button in the Action Bar triggers the Urdu-Linguist subagent and produces Urdu translation.

- [ ] T030 [US3] Implement Urdu Translate button in Action Bar component
- [ ] T031 [US3] Map Urdu Translate button to Urdu-Linguist agent execution
- [ ] T032 [US3] Test Urdu translation workflow from Action Bar interface

## Phase 8: [US2] Ensure Robotics-Architect Documentation Access

**Goal**: Ensure 'Robotics-Architect' can reference latest documentation for NVIDIA Isaac Sim (2023.1+) and ROS 2 Humble.

**Independent Test**: Verify that Robotics-Architect can access and reference the latest documentation when generating content.

- [ ] T033 [US2] Implement documentation access mechanism for Robotics-Architect
- [ ] T034 [US2] Test Robotics-Architect with latest NVIDIA Isaac Sim documentation
- [ ] T035 [US2] Test Robotics-Architect with latest ROS 2 Humble documentation

## Phase 9: [US1] Enable Collaboration Workflow

**Goal**: Enable collaboration workflow where Architect writes, Linguist translates, and Stylist reviews.

**Independent Test**: Verify that all three agents can collaborate on a single 'Week 1' draft without formatting conflicts.

- [ ] T036 [US1] Implement multi-agent workflow orchestration
- [ ] T037 [US1] Test end-to-end workflow: Architect writes → Linguist translates → Stylist reviews
- [ ] T038 [US1] Verify no formatting conflicts in collaborative workflow
- [ ] T039 [US1] Test collaboration workflow with sample 'Week 1' content draft

## Phase 10: Constitution Compliance & Cross-Cutting Concerns

- [ ] T040 Implement RAG chatbot with OpenAI Agents/ChatKit SDK, FastAPI, Neon Serverless Postgres, and Qdrant Cloud (FR-011)
- [ ] T041 Implement Better-Auth user authentication capturing software/hardware background data (FR-012)
- [ ] T042 Create UI controls for AI-driven content personalization based on user profiles (FR-013)
- [ ] T043 Implement caching mechanism for external dependency failures
- [ ] T044 Add performance monitoring for Action Bar integration (<2 seconds response)
- [X] T045 Create documentation for agent configuration and usage
- [ ] T046 Implement error handling and logging for agent workflows
- [ ] T047 Add unit tests for agent service functionality
- [ ] T048 Add integration tests for multi-agent workflows
- [ ] T049 Perform end-to-end testing of all agent collaboration scenarios