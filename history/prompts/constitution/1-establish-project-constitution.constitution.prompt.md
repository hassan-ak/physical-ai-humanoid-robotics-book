---
id: 1
title: Establish Project Constitution
stage: constitution
date: 2025-12-18
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: hassan
command: /sp.constitution
labels: [constitution,spec-driven-development,physical-ai,humanoid-robotics]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

"Establish the constitution for an AI-native, spec-driven textbook project titled
'Physical AI & Humanoid Robotics'.

This constitution must declare all requirements as mandatory and non-optional.

Mandatory Architecture & Tools:
- The project must be authored using Spec-Kit Plus and Claude Code.
- The textbook must be implemented using Docusaurus and deployed publicly (GitHub Pages or Vercel).
- Reusable intelligence via Claude Code Subagents and Agent Skills is mandatory.
- An integrated Retrieval-Augmented Generation (RAG) chatbot must be embedded within the book UI.
- The chatbot architecture must support OpenAI Agents/ChatKit SDK, FastAPI, Neon Serverless Postgres, and Qdrant Cloud.
- User authentication (signup/signin) must be implemented using Better-Auth.
- During signup, the system must capture user software and hardware background data.
- Every chapter must expose explicit UI controls for:
  - AI-driven content personalization based on user profiles
  - On-demand Urdu translation

Development Discipline:
- Enforce strict spec-first development: no implementation before constitution, specifications, plans, and tasks.
- All AI behavior must comply with this constitution and derived specs.
- Agents and skills must be reusable, modular, and evolution-friendly.

Quality & Testing Requirements:
- All implemented code must include comprehensive automated tests wherever technically feasible.
- Tests must cover unit, integration, and behavior-level scenarios.
- Tests must be executed as part of development to validate correctness.
- Code is considered incomplete unless tests pass successfully.
- The goal of testing is to eliminate the need for manual code review by the user.

Core Educational Principles:
- Theme: Embodied Intelligence — bridging digital AI systems with physical humanoid bodies.
- Technical Stack: ROS 2, Gazebo, Unity (Digital Twins), NVIDIA Isaac Sim, Isaac ROS, and Vision-Language-Action systems.
- Hardware Baseline: NVIDIA RTX 4070 Ti+ workstations and Jetson Orin edge kits.
- Content Scope: Beginner to advanced, progressing toward a humanoid robotics capstone.
- Tone: Technically rigorous, practical, empathetic, and startup-founder oriented.

Constraints:
- Do not define specific agents, skills, schemas, APIs, or code.
- This document defines binding principles only; implementation details must emerge through specs and plans."

## Response snapshot

Created the constitution for the Physical AI & Humanoid Robotics textbook project with all mandatory requirements as specified. The constitution includes:

- Core Principles emphasizing spec-first development, AI-native architecture, user authentication & profiling, chapter-level personalization, test-first development, and reusable intelligence
- Architecture & Tools Requirements specifying the technology stack
- Educational Principles focusing on embodied intelligence
- Governance section establishing the authority of the constitution

## Outcome

- ✅ Impact: Created foundational constitution document for the project
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with the new constitution
- 🔁 Next prompts: Proceed with creating specifications based on this constitution
- 🧠 Reflection: The constitution captures all mandatory requirements from the user input and establishes the governance structure for the project

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin creating the project specification based on this constitution