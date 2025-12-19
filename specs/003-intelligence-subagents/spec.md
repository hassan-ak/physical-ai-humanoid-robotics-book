# Feature Specification: Intelligence Layer: Subagents & Skills for Physical AI Textbook

**Feature Branch**: `003-intelligence-subagents`
**Created**: 2025-12-18
**Status**: Draft
**Input**: User description: "Intelligence Layer: Subagents & Skills for Physical AI Textbook.

Objective: Define and initialize the specialized AI workforce (Subagents) and Handbooks (Skills) required to generate technically accurate, 13-week robotics content with automated Urdu translation.

### 1. Reusable Intelligence: Subagents (.json)
- **Robotics-Architect**: Specialist in ROS 2 Humble, NVIDIA Isaac Sim, and Humanoid Kinematics. Responsible for technical accuracy and code generation.
- **Urdu-Linguist**: Specialist in technical translation. Responsible for converting complex robotics concepts into natural, accurate Urdu for the i18n layer.
- **Content-Stylist**: Responsible for maintaining the 'Startup Founder' tone and ensuring MDX components (Action Bar, Callouts) are used correctly.

### 2. Reusable Intelligence: Skills (SKILL.md)
- **Technical-Writing-Standards**: A skill containing formatting rules for MDX, code blocks, and the 'Action Bar' integration.
- **Robotics-Hardware-Glossary**: A skill containing specific parameters for the hardware mentioned in the course (Jetson Orin, Unitree G1, RealSense D435i).

### Functional Requirements:
- Initialize the `.claude/agents/` and `.claude/skills/` directories.
- Ensure the 'Urdu-Linguist' subagent is mapped to the 'ActionBar' Urdu Translate button logic.
- Ensure 'Robotics-Architect' can reference latest documentation for NVIDIA Isaac Sim (2023.1+) and ROS 2 Humble.

### Acceptance Criteria:
- All 3 subagent JSON files and 2 skill MDX files are created.
- The subagents are configured to collaborate (Architect writes, Linguist translates, Stylist reviews).
- The infrastructure is ready to receive the first batch of content implementation."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Initialize AI Workforce Infrastructure (Priority: P1)

Content creators need to establish a specialized AI workforce (Subagents) and Handbooks (Skills) to generate technically accurate robotics content with automated Urdu translation. This infrastructure will enable the automation of content creation, translation, and styling processes for the 13-week robotics textbook.

**Why this priority**: This is foundational - without the AI workforce infrastructure, no content can be generated, translated, or styled according to specifications.

**Independent Test**: Can be fully tested by verifying that the `.claude/agents/` and `.claude/skills/` directories exist with properly configured JSON and MDX files, delivering the ability to orchestrate AI agents for content creation.

**Acceptance Scenarios**:

1. **Given** a clean project environment, **When** the infrastructure initialization is complete, **Then** the `.claude/agents/` directory contains 3 subagent JSON files and the `.claude/skills/` directory contains 2 skill MDX files
2. **Given** the infrastructure is initialized, **When** content creation workflow is initiated, **Then** the system can orchestrate the three subagents in sequence (Architect writes, Linguist translates, Stylist reviews)

---

### User Story 2 - Configure Robotics-Architect Subagent (Priority: P2)

Technical content creators need a Robotics-Architect subagent specialized in ROS 2 Humble, NVIDIA Isaac Sim, and Humanoid Kinematics to ensure technical accuracy and generate code examples for the robotics textbook.

**Why this priority**: Critical for ensuring technical accuracy of the content, which is a core requirement of the robotics textbook.

**Independent Test**: Can be fully tested by invoking the Robotics-Architect subagent and verifying it produces technically accurate content and code examples related to ROS 2, Isaac Sim, and kinematics.

**Acceptance Scenarios**:

1. **Given** a technical robotics concept needs to be explained, **When** the Robotics-Architect subagent processes the request, **Then** it generates accurate explanations and code examples for ROS 2 Humble, NVIDIA Isaac Sim, and Humanoid Kinematics

---

### User Story 3 - Configure Urdu-Linguist Subagent (Priority: P3)

Content creators need a Urdu-Linguist subagent that can convert complex robotics concepts into natural, accurate Urdu for the internationalization layer, enabling broader accessibility of the textbook.

**Why this priority**: Important for internationalization and accessibility, but secondary to having the core content generation capability.

**Independent Test**: Can be fully tested by providing English robotics content to the Urdu-Linguist and verifying accurate and natural Urdu translation.

**Acceptance Scenarios**:

1. **Given** English robotics content needs translation, **When** the Urdu-Linguist subagent processes the content, **Then** it produces natural, accurate Urdu translations that maintain technical precision

---

### User Story 4 - Configure Content-Stylist Subagent (Priority: P3)

Content creators need a Content-Stylist subagent to maintain the 'Startup Founder' tone and ensure proper use of MDX components (Action Bar, Callouts) for consistent presentation of the textbook content.

**Why this priority**: Important for maintaining consistent brand voice and formatting, but secondary to content creation and translation.

**Independent Test**: Can be fully tested by providing raw content to the Content-Stylist and verifying it applies the correct tone and formatting components.

**Acceptance Scenarios**:

1. **Given** raw robotics content, **When** the Content-Stylist subagent processes it, **Then** it maintains the 'Startup Founder' tone and properly implements MDX components

---

### Edge Cases

- What happens when a robotics concept has no equivalent term in Urdu and requires transliteration?
- How does the system handle complex mathematical equations or diagrams during Urdu translation?
- What occurs when the Robotics-Architect encounters outdated ROS 2 documentation?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST initialize the `.claude/agents/` directory with 3 subagent JSON configuration files
- **FR-002**: System MUST initialize the `.claude/skills/` directory with 2 skill MDX files
- **FR-003**: System MUST configure the Robotics-Architect subagent with expertise in ROS 2 Humble, NVIDIA Isaac Sim, and Humanoid Kinematics
- **FR-004**: System MUST configure the Urdu-Linguist subagent with technical translation capabilities for robotics concepts
- **FR-005**: System MUST configure the Content-Stylist subagent to maintain 'Startup Founder' tone and MDX component usage
- **FR-006**: System MUST map the Urdu-Linguist subagent to the 'ActionBar' Urdu Translate button logic
- **FR-007**: System MUST ensure the Robotics-Architect can reference latest documentation for NVIDIA Isaac Sim (2023.1+) and ROS 2 Humble
- **FR-008**: System MUST enable collaboration workflow where Architect writes, Linguist translates, and Stylist reviews
- **FR-009**: System MUST implement Technical-Writing-Standards skill containing formatting rules for MDX, code blocks, and Action Bar integration
- **FR-010**: System MUST implement Robotics-Hardware-Glossary skill containing specific parameters for Jetson Orin, Unitree G1, and RealSense D435i
- **FR-011**: System MUST implement integrated Retrieval-Augmented Generation (RAG) chatbot embedded within the book UI, supporting OpenAI Agents/ChatKit SDK, FastAPI, Neon Serverless Postgres, and Qdrant Cloud
- **FR-012**: System MUST implement user authentication using Better-Auth that captures user software and hardware background data during signup
- **FR-013**: System MUST expose explicit UI controls for AI-driven content personalization based on user profiles and on-demand Urdu translation in every chapter

### Key Entities

- **Subagent**: A specialized AI configuration file (.json) that defines the role, expertise, and behavior of an AI agent (Robotics-Architect, Urdu-Linguist, Content-Stylist)
- **Skill**: A handbook file (.mdx) containing reusable knowledge, standards, or parameters that guide AI behavior (Technical-Writing-Standards, Robotics-Hardware-Glossary)

## Clarifications

### Session 2025-12-18

- Q: Should subagent communication require authentication? → A: No authentication (subagents communicate internally only)
- Q: How should subagents handle external dependency failures? → A: Cache results and continue using cached data when external dependencies fail
- Q: What is the required response time for Action Bar integration? → A: 2 seconds
- Q: How many lessons should the system handle? → A: 100 lessons
- Q: How long should processed content be retained? → A: Indefinitely

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Content creators can generate technically accurate robotics content with automated Urdu translation within 5 minutes per lesson
- **SC-002**: The AI workforce produces content with 95% technical accuracy verified by subject matter experts
- **SC-003**: Urdu translations maintain 90% semantic accuracy while preserving technical precision
- **SC-004**: The system successfully orchestrates all three subagents in sequence for 100% of content generation workflows
- **SC-005**: Generated content consistently follows the 'Startup Founder' tone and properly implements MDX components
