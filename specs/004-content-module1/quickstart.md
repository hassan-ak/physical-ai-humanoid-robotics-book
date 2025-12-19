# Quickstart Guide: Module 1 - The Robotic Nervous System

## Overview
This guide will help you set up and generate the content for Module 1: The Robotic Nervous System, which covers 5 weeks of educational content for the Physical AI & Humanoid Robotics textbook.

## Prerequisites
- Node.js 18+ installed
- Docusaurus 3.x project set up
- Access to ROS 2 Humble documentation
- Claude Code CLI installed
- NVIDIA Jetson Orin Nano and Intel RealSense D435i specifications available

## Setup

### 1. Initialize Content Directories
```bash
# Create the module content directory
mkdir -p docs/module-1

# Create the Urdu localization directory
mkdir -p i18n/ur/docusaurus-plugin-content-docs/current/module-1
```

### 2. Verify Agent Configuration
Ensure the following agents are properly configured in `.claude/agents/`:
- `robotics-architect.json` - For technical content and code generation
- `urdu-linguist.json` - For Urdu translation
- `content-stylist.json` - For tone and formatting

### 3. Verify Skills Configuration
Ensure the following skills are available in `.claude/skills/`:
- `technical-writing-standards.mdx` - For MDX formatting rules
- `robotics-hardware-glossary.mdx` - For hardware specifications

## Content Generation Process

### 1. Generate Week 1-2: Introduction to Physical AI
```bash
# Use the Robotics-Architect agent to generate the foundational content
claude agent run --agent robotics-architect --prompt "Generate Week 1-2 content covering Introduction to Physical AI: Foundations of Embodied Intelligence, the humanoid landscape, and an overview of sensor systems (LiDAR, IMU, Depth Cameras). Follow OOP rclpy patterns and include Mermaid.js diagrams." --output docs/module-1/week-1.mdx

# Generate continuation content for week 2
claude agent run --agent robotics-architect --prompt "Generate Week 2 content continuing Introduction to Physical AI with practical examples and code demonstrations. Follow OOP rclpy patterns and include Mermaid.js diagrams." --output docs/module-1/week-2.mdx
```

### 2. Generate Week 3: ROS 2 Architecture
```bash
# Generate ROS 2 Architecture content
claude agent run --agent robotics-architect --prompt "Generate Week 3 content covering ROS 2 Architecture: In-depth coverage of Nodes, the Graph, and the 'rclpy' client library. Include OOP examples and Mermaid.js diagrams for 'The ROS 2 Graph'." --output docs/module-1/week-3.mdx
```

### 3. Generate Week 4: Communication Patterns
```bash
# Generate Communication Patterns content
claude agent run --agent robotics-architect --prompt "Generate Week 4 content covering Communication Patterns: Topics (Publish/Subscribe) vs. Services (Request/Reply) with real-world robotics use cases. Include proper code examples and Mermaid.js diagrams for 'Node Lifecycle'." --output docs/module-1/week-4.mdx
```

### 4. Generate Week 5: Robot Identity
```bash
# Generate Robot Identity content
claude agent run --agent robotics-architect --prompt "Generate Week 5 content covering Robot Identity: Building custom ROS 2 packages and Introduction to URDF (Unified Robot Description Format) for humanoids. Include hardware integration examples with Jetson Orin Nano and Intel RealSense D435i." --output docs/module-1/week-5.mdx
```

## Localization Process

### 1. Generate Urdu Translations
```bash
# For each English file, generate the Urdu translation
claude agent run --agent urdu-linguist --prompt "Translate the following English content to technical Urdu while preserving code blocks, mathematical formulas, and technical diagrams. Use consistent technical Urdu terms like 'Aasabi Nizam' for Nervous System and 'Girah' for Node." --input docs/module-1/week-1.mdx --output i18n/ur/docusaurus-plugin-content-docs/current/module-1/week-1.mdx

# Repeat for weeks 2-5
claude agent run --agent urdu-linguist --prompt "Translate the following English content to technical Urdu while preserving code blocks, mathematical formulas, and technical diagrams. Use consistent technical Urdu terms like 'Aasabi Nizam' for Nervous System and 'Girah' for Node." --input docs/module-1/week-2.mdx --output i18n/ur/docusaurus-plugin-content-docs/current/module-1/week-2.mdx

claude agent run --agent urdu-linguist --prompt "Translate the following English content to technical Urdu while preserving code blocks, mathematical formulas, and technical diagrams. Use consistent technical Urdu terms like 'Aasabi Nizam' for Nervous System and 'Girah' for Node." --input docs/module-1/week-3.mdx --output i18n/ur/docusaurus-plugin-content-docs/current/module-1/week-3.mdx

claude agent run --agent urdu-linguist --prompt "Translate the following English content to technical Urdu while preserving code blocks, mathematical formulas, and technical diagrams. Use consistent technical Urdu terms like 'Aasabi Nizam' for Nervous System and 'Girah' for Node." --input docs/module-1/week-4.mdx --output i18n/ur/docusaurus-plugin-content-docs/current/module-1/week-4.mdx

claude agent run --agent urdu-linguist --prompt "Translate the following English content to technical Urdu while preserving code blocks, mathematical formulas, and technical diagrams. Use consistent technical Urdu terms like 'Aasabi Nizam' for Nervous System and 'Girah' for Node." --input docs/module-1/week-5.mdx --output i18n/ur/docusaurus-plugin-content-docs/current/module-1/week-5.mdx
```

## Quality Assurance Process

### 1. Apply Startup Founder Tone and Formatting
```bash
# Use Content-Stylist to review and apply consistent formatting and tone
claude agent run --agent content-stylist --prompt "Apply Startup Founder tone and ensure proper MDX component usage (Action Bar, Callouts) to the following content. Verify technical accuracy while improving readability and maintain the educational content accessible." --input docs/module-1/week-1.mdx

# Repeat for all weeks
```

### 2. Add Action Bar Components
Ensure each MDX file includes the Action Bar component immediately after the main h1 heading:

```mdx
---
title: "Week 1: Introduction to Physical AI"
sidebar_position: 1
---

# Week 1: Introduction to Physical AI

<ActionBar />

[Rest of content...]
```

## Verification Steps

### 1. Validate Content Structure
```bash
# Check that all files exist and are properly structured
ls -la docs/module-1/
ls -la i18n/ur/docusaurus-plugin-content-docs/current/module-1/
```

### 2. Verify Code Examples
- Check that all ROS 2 code examples follow OOP rclpy patterns
- Verify that all code targets ROS 2 Humble
- Ensure hardware references (Jetson Orin Nano, RealSense D435i) are accurate

### 3. Verify Mermaid.js Diagrams
- Confirm that Mermaid.js syntax is properly formatted in all files
- Test that diagrams render correctly in the Docusaurus environment

### 4. Test Localization
- Verify that Urdu translations maintain technical accuracy
- Check that code blocks remain unchanged in translations
- Ensure technical terms are consistently translated

## Testing

### 1. Unit Tests
```bash
npm test
```

### 2. Content Generation Tests
```bash
npm run test:content-generation
```

### 3. Integration Tests
```bash
npm run test:integration
```

## Running the Documentation Site

```bash
npm start
```

The content will be available at http://localhost:3000/module-1/ with proper navigation and localization support.

## Troubleshooting

### Common Issues

1. **Agent not responding**: Check that all agent configuration files are properly formatted JSON
2. **Translation quality issues**: Review the Urdu-Linguist configuration and skill content
3. **Code example errors**: Verify ROS 2 Python standards in the Technical Writing Standards skill
4. **Mermaid.js diagrams not rendering**: Check Docusaurus Mermaid plugin configuration

### Debugging Content Generation
Enable debug mode to see detailed logs:
```bash
DEBUG=agents:* claude agent run --agent robotics-architect [options]
```