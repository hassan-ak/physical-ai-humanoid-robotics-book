# Quickstart Guide: Intelligence Layer (Subagents and Skills)

## Overview
This guide will help you set up and use the Intelligence Layer for generating robotics content with automated Urdu translation using specialized subagents.

## Prerequisites
- Node.js 18+ installed
- Claude Code CLI installed
- Docusaurus 3.x project set up
- Access to ROS 2 Humble and NVIDIA Isaac Sim documentation

## Setup

### 1. Initialize the Agent System
```bash
# Create the agent configuration directories
mkdir -p .claude/agents
mkdir -p .claude/skills
```

### 2. Install Dependencies
```bash
npm install @docusaurus/core @docusaurus/module-type-aliases @docusaurus/types
```

### 3. Configure Subagents
Copy the following JSON configuration files to `.claude/agents/`:

#### Robotics-Architect Configuration
```json
{
  "id": "robotics-architect",
  "name": "Robotics-Architect",
  "description": "Specialist in ROS 2 Humble, NVIDIA Isaac Sim, and Humanoid Kinematics",
  "personality": "You are a Robotics-Architect AI assistant specializing in ROS 2 Humble, NVIDIA Isaac Sim, and Humanoid Kinematics. Your role is to generate technically accurate content and code examples for robotics education. Always provide practical, implementation-ready solutions based on the latest documentation. Follow ROS 2 Python (rclpy) standards and ensure all code examples are complete, tested, and properly documented.",
  "constraints": [
    "Provide accurate technical information based on latest documentation",
    "Generate code examples in ROS 2 Python (rclpy) following established standards",
    "Focus on practical implementation details",
    "Reference NVIDIA Isaac Sim 2023.1+ features specifically"
  ],
  "expertise": ["ROS 2 Humble", "NVIDIA Isaac Sim", "Humanoid Kinematics", "rclpy"],
  "skills": ["technical-writing-standards", "robotics-hardware-glossary"]
}
```

#### Urdu-Linguist Configuration
```json
{
  "id": "urdu-linguist",
  "name": "Urdu-Linguist",
  "description": "Specialist in technical translation to Urdu",
  "personality": "You are an Urdu-Linguist AI assistant specializing in technical translation. Your role is to convert complex robotics concepts into natural, accurate Urdu while maintaining technical precision. Preserve code snippets and mathematical formulas in their original form. Use transliteration for robotics-specific terms when direct translation is inadequate. Generate content for the i18n/ur directory following internationalization standards.",
  "constraints": [
    "Maintain technical precision while using natural Urdu language",
    "Preserve mathematical formulas and code snippets in original form",
    "Use transliteration for robotics-specific terms when direct translation is inadequate",
    "Support i18n/ur directory for Urdu content generation"
  ],
  "expertise": ["Urdu Translation", "Technical Content", "Internationalization"],
  "skills": ["technical-writing-standards"]
}
```

#### Content-Stylist Configuration
```json
{
  "id": "content-stylist",
  "name": "Content-Stylist",
  "description": "Maintains 'Startup Founder' tone and MDX component usage",
  "personality": "You are a Content-Stylist AI assistant responsible for maintaining the 'Startup Founder' tone and ensuring proper MDX component usage. Apply consistent branding voice, format content with appropriate MDX components (Action Bar, Callouts), and ensure educational content is accessible while maintaining technical accuracy.",
  "constraints": [
    "Maintain consistent 'Startup Founder' voice throughout content",
    "Ensure proper MDX component usage (Action Bar, Callouts)",
    "Follow technical writing standards for educational content",
    "Preserve technical accuracy while improving readability"
  ],
  "expertise": ["Content Styling", "Brand Voice", "MDX Components", "Educational Content"],
  "skills": ["technical-writing-standards"]
}
```

### 4. Configure Skills
Create the following MDX files in `.claude/skills/`:

#### Technical-Writing-Standards.skill.mdx
```mdx
---
id: technical-writing-standards
name: Technical Writing Standards
---

# Technical Writing Standards

## MDX Component Standards

### Action Bar Integration
- Use the `<ActionBar>` component for interactive elements
- Include translation buttons for internationalization
- Ensure responsive behavior across all devices

### Code Blocks
- Use proper syntax highlighting for ROS 2 Python (rclpy)
- Include descriptive captions for all code examples
- Follow the established ROS 2 Python standards template

### Callouts
- Use `<Note>` for important information
- Use `<Tip>` for helpful suggestions
- Use `<Caution>` for warnings
- Use `<Danger>` for critical warnings

## ROS 2 Python (rclpy) Standards

### Template Structure
- Include proper imports at the top
- Use descriptive class and function names
- Include comments explaining non-obvious logic
- Follow PEP 8 style guidelines
- Include error handling where appropriate
- Use appropriate message types from ROS 2 standard packages
- Include main() function with proper shutdown sequence

### Documentation Standards
- Include docstrings for all classes and functions
- Use consistent terminology throughout
- Reference relevant ROS 2 documentation
- Include example usage where appropriate
```

#### Robotics-Hardware-Glossary.skill.mdx
```mdx
---
id: robotics-hardware-glossary
name: Robotics Hardware Glossary
---

# Robotics Hardware Glossary

## NVIDIA Jetson Orin Nano

### Specifications
- **Model**: Jetson Orin Nano Developer Kit
- **GPU**: 1024-core NVIDIA Ampere architecture GPU
- **CPU**: Quad-core Arm Cortex-A78AE v8.2 64-bit CPU
- **DL Accelerator**: 4x Tensor Cores
- **Memory**: 4GB or 8GB LPDDR5
- **Storage**: MicroSD card slot, eMMC support
- **Power**: 7W to 15W consumption modes
- **Connectivity**: Gigabit Ethernet, M.2 Key E slot for Wi-Fi/Bluetooth
- **Sensors**: MIPI CSI-2 interfaces for camera modules
- **ROS Support**: Full ROS 2 Humble Hawksbill compatibility

## Unitree G1

### Specifications
- **Type**: Humanoid Robot Platform
- **Height**: 1.45m
- **Weight**: 32kg
- **Degrees of Freedom**: 32 (16 per leg, 4 per arm)
- **Actuators**: High-torque servo actuators
- **Sensors**: IMU, force sensors, cameras
- **Battery Life**: 2+ hours operation time
- **Control**: Real-time control system
- **Programming**: SDK for ROS 2 integration
- **Capabilities**: Walking, balancing, basic manipulation

## Intel RealSense D435i

### Specifications
- **Type**: Stereo Depth Camera with IMU
- **Depth Technology**: Active stereo vision
- **Depth Accuracy**: ±2% at 1m distance
- **Depth Range**: 0.25m to 9.1m
- **Resolution**: 1280×720 at 30/60 FPS
- **FOV**: 87°×58°±5° (H×V±5°)
- **IMU**: Gyroscope and accelerometer
- **Connectivity**: USB 3.2 Gen 1 Type-C
- **Operating Range**: 0°C to 40°C
- **ROS Support**: RealSense ROS 2 package
```

## Usage

### 1. Create Content Workflow
To generate robotics content with Urdu translation:

1. Prepare your English content in MDX format
2. Run the content through the Robotics-Architect to add technical details and code examples
3. Pass the result to Urdu-Linguist for translation
4. Apply Content-Stylist to ensure consistent formatting and tone

### 2. Using the Action Bar
The Action Bar component can trigger agent workflows:

```jsx
import ActionBar from '@site/src/components/ActionBar';

<ActionBar
  translateUrdu={true}
  translateUrduCallback={handleUrduTranslation}
  agentStatus={agentStatus}
/>
```

### 3. Running Agent Workflows
```bash
# Example command to run the full workflow
claude agent run --workflow content-generation --input "lesson-about-ros-nodes.mdx"
```

## Testing

### Unit Tests
```bash
npm test
```

### Integration Tests
```bash
npm run test:integration
```

### Agent Workflow Tests
```bash
npm run test:agents
```

## Troubleshooting

### Common Issues

1. **Agent not responding**: Check that all agent configuration files are properly formatted JSON
2. **Translation quality issues**: Review the Urdu-Linguist configuration and skill content
3. **Code example errors**: Verify ROS 2 Python standards in the Technical Writing Standards skill
4. **Performance issues**: Check caching configuration and external dependency access

### Debugging Agent Workflows
Enable debug mode to see detailed logs:
```bash
DEBUG=agents:* claude agent run --workflow content-generation
```