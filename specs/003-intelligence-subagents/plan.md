# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implementation of an Intelligence Layer consisting of specialized subagents (Robotics-Architect, Urdu-Linguist, Content-Stylist) and reusable skills (Technical-Writing-Standards, Robotics-Hardware-Glossary) to generate technically accurate robotics content with automated Urdu translation. The system will be orchestrated through agent workflows that process content from technical generation to translation to styling, with integration into the Action Bar component for user-triggered operations. The solution follows a file-based architecture using JSON configurations for agents and MDX files for skills, integrated into the existing Docusaurus documentation framework.

## Technical Context

**Language/Version**: JSON, MDX, JavaScript/TypeScript (for Docusaurus framework)
**Primary Dependencies**: Claude Code, Docusaurus 3.x, React 18.x, Node.js 18+
**Storage**: File-based (JSON and MDX files in .claude/agents/ and .claude/skills/ directories)
**Testing**: Jest for unit tests, integration tests for agent workflows
**Target Platform**: Web-based Docusaurus documentation site
**Project Type**: Web/documentation - extends existing Docusaurus site
**Performance Goals**: <2 seconds response time for Action Bar integration, process 100 lessons for 13-week robotics course
**Constraints**: Subagents communicate internally only (no external authentication), cache results when external dependencies fail, maintain 95% technical accuracy for content
**Scale/Scope**: 100 lessons for robotics textbook, 3 subagents (Robotics-Architect, Urdu-Linguist, Content-Stylist), 2 skills (Technical-Writing-Standards, Robotics-Hardware-Glossary)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Compliance Verification:**
1. **Spec-First Development (MANDATORY)**: ✅ Plan follows spec-first methodology based on feature specification
2. **AI-Native Architecture (MANDATORY)**: ✅ Implements reusable intelligence via Claude Code Subagents and Agent Skills as required
3. **User Authentication & Profiling (MANDATORY)**: ✅ Implements user authentication using Better-Auth as specified in FR-012
4. **Chapter-Level Personalization (MANDATORY)**: ✅ Enables AI-driven content personalization through subagents and explicit UI controls as specified in FR-013
5. **Test-First Development (MANDATORY)**: ✅ Plan includes testing strategy for agent workflows
6. **Reusable & Modular Intelligence**: ✅ Design creates reusable, modular agents and skills

**Architecture & Tools Compliance:**
- ✅ Uses Claude Code for agent implementation
- ✅ Extends Docusaurus framework as required
- ✅ Supports RAG chatbot integration requirements (FR-011)
- ✅ Integrates Better-Auth for user authentication (FR-012)
- ✅ Provides chapter-level personalization controls (FR-013)

**Educational Principles Compliance:**
- ✅ Supports technical rigor and practical content delivery
- ✅ Enables startup-founder oriented approach through modular intelligence

## Project Structure

### Documentation (this feature)

```text
specs/003-intelligence-subagents/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Agent and Skill Configuration (repository root)

```text
.claude/
├── agents/              # Subagent configuration files
│   ├── robotics-architect.json
│   ├── urdu-linguist.json
│   └── content-stylist.json
└── skills/              # Skill knowledge base files
    ├── technical-writing-standards.mdx
    └── robotics-hardware-glossary.mdx
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── ActionBar/       # Action Bar component that triggers agents
│   ├── RAGChatbot/      # RAG chatbot component with OpenAI Agents/ChatKit SDK
│   └── Personalization/ # UI controls for content personalization
├── services/
│   ├── agent-service.js # Service to orchestrate subagent workflows
│   ├── i18n-service.js  # Service for Urdu translation workflows
│   ├── rag-service.js   # Service for RAG chatbot functionality
│   └── auth-service.js  # Service for Better-Auth integration
└── lib/
    ├── mdx-utils.js     # MDX content processing utilities
    └── ros2-standards.js # ROS 2 Python code standards utilities

api/
├── routes/
│   ├── auth.js          # Authentication routes using Better-Auth
│   └── rag-chat.js      # RAG chatbot API endpoints

tests/
├── unit/
│   ├── agent-service.test.js
│   ├── i18n-service.test.js
│   ├── rag-service.test.js
│   └── auth-service.test.js
├── integration/
│   └── agent-workflow.test.js
└── contract/
    └── agent-api-contract.test.js
```

**Structure Decision**: Web application structure selected to extend existing Docusaurus documentation site with agent orchestration capabilities. The .claude directory contains the core intelligence layer with JSON configuration for subagents and MDX files for skills, while source code provides the services to orchestrate agent workflows and integrate with the Action Bar component.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
