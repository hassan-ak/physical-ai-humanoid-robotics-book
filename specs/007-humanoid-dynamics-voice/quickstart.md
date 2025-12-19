# Quickstart Guide: Humanoid Dynamics and AI-Voice Integration

## Setup for Development

1. **Prerequisites**:
   - Node.js 18+ with npm
   - Python 3.8+ for ROS 2 Humble
   - Docusaurus 3.x installed

2. **Repository Setup**:
   ```bash
   cd website
   npm install
   ```

3. **Local Development**:
   ```bash
   npm run start
   ```

## Content Structure

- `website/docs/module-4/` - English content for Module 4
  - `week-11.mdx` - Humanoid balance control and Inverse Kinematics
  - `week-12.mdx` - Grasping techniques for humanoid robots
  - `week-13.mdx` - Voice-to-action systems and LLM planning
  - `capstone.mdx` - Integrated capstone project guide

- `website/i18n/ur/docusaurus-plugin-content-docs/current/module-4/` - Urdu localization

## Key Technical Concepts Covered

### Humanoid Dynamics
- Zero Moment Point (ZMP) and Capture Point methods
- Inverse Kinematics: analytical vs numerical approaches
- Grasp planning: antipodal grasp with force/form closure

### Voice Integration
- OpenAI Whisper API for speech recognition
- LLM-based semantic understanding
- VLA Logic: mapping "Pick up the blue ball" to ROS 2 coordinates

### Integration Points
- Linking Module 1 (ROS 2) with Module 4 (voice commands)
- Python snippets for Whisper API and LLM-to-ROS 2 mapping
- Mermaid.js diagrams for system architecture

## Building the Documentation

1. **Production Build**:
   ```bash
   cd website && npm run build
   ```

2. **Verify Build** (both English and Urdu):
   ```bash
   npm run build
   # Should generate static files in build/ and build/ur/
   ```

3. **Link Verification**:
   ```bash
   npm run serve
   # Check locally at http://localhost:3000
   ```

## Testing Approach

- Validate all MDX files render correctly
- Verify Action Bar components appear on all pages
- Confirm Urdu translations maintain technical accuracy
- Test navigation and cross-module links
- Verify Python code snippets are properly formatted

## Urdu Glossary
- Natural Language Understanding → "قدرتی زبان کی سمجھ" (Qudrat-e-Zaban ki Samajh)
- Kinematics → "گتیات" (Gatiat)
- Inverse Kinematics → "معکوس گتیات" (Maakus Gatiat)
- Balance Control → "توازن کنٹرول" (Tazan-e-Kontrol)
- Grasping → "پکڑنا" (Pakarna)