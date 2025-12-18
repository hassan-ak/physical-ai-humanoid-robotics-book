<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.0.0 (initial constitution for Physical AI & Humanoid Robotics project)
- Modified principles: All principles newly defined for this project
- Added sections: Architecture & Tools, Development Discipline, Quality & Testing, Educational Principles
- Removed sections: None (new project constitution)
- Templates requiring updates: ✅ Updated
- Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Constitution

## Core Principles

### I. Spec-First Development (MANDATORY)
All development must follow strict spec-first methodology: constitution → specifications → plans → tasks → implementation. No code implementation is allowed before completing the full spec pipeline. All AI behavior must comply with this constitution and derived specifications. This ensures systematic, predictable development aligned with project goals.

### II. AI-Native Architecture (MANDATORY)
The textbook must be implemented using Docusaurus and deployed publicly (GitHub Pages or Vercel). Reusable intelligence via Claude Code Subagents and Agent Skills is mandatory. An integrated Retrieval-Augmented Generation (RAG) chatbot must be embedded within the book UI, supporting OpenAI Agents/ChatKit SDK, FastAPI, Neon Serverless Postgres, and Qdrant Cloud.

### III. User Authentication & Profiling (MANDATORY)
User authentication must be implemented using Better-Auth. During signup, the system must capture user software and hardware background data. This enables AI-driven content personalization based on user profiles and ensures the educational content adapts to diverse technical backgrounds.

### IV. Chapter-Level Personalization (MANDATORY)
Every chapter must expose explicit UI controls for AI-driven content personalization based on user profiles and on-demand Urdu translation. This ensures accessibility and adaptability to different learning needs and linguistic preferences.

### V. Test-First Development (MANDATORY)
All implemented code must include comprehensive automated tests wherever technically feasible. Tests must cover unit, integration, and behavior-level scenarios. Tests must be executed as part of development to validate correctness. Code is considered incomplete unless tests pass successfully. The goal of testing is to eliminate the need for manual code review by the user.

### VI. Reusable & Modular Intelligence
Agents and skills must be reusable, modular, and evolution-friendly. This supports the long-term maintainability and extensibility of the educational platform while enabling consistent, scalable AI interactions across the textbook.

## Architecture & Tools Requirements
The project must be authored using Spec-Kit Plus and Claude Code. The technical stack must include ROS 2, Gazebo, Unity (Digital Twins), NVIDIA Isaac Sim, Isaac ROS, and Vision-Language-Action systems. Hardware baseline requirements include NVIDIA RTX 4070 Ti+ workstations and Jetson Orin edge kits.

## Educational Principles
The project must focus on Embodied Intelligence — bridging digital AI systems with physical humanoid bodies. Content must progress from beginner to advanced levels, culminating in a humanoid robotics capstone. The tone must be technically rigorous, practical, empathetic, and startup-founder oriented.

## Governance
This constitution supersedes all other development practices and requirements. All implementation must verify compliance with these principles. Amendments require formal documentation and approval process. All development activities must reference this constitution for guidance and compliance verification.

**Version**: 1.0.0 | **Ratified**: 2025-12-18 | **Last Amended**: 2025-12-18
