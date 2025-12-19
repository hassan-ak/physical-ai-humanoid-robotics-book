# Data Model: Digital Twin Physics Simulation and Humanoid Modeling

## Content Entities

### Physics Simulation Content
- **Attributes**:
  - topic: String (e.g., "Gazebo Physics Engines")
  - subtopics: Array<String> (e.g., ["ODE", "Bullet", "World Properties"])
  - parameters: Array<Object> (physics parameters with descriptions)
  - sim_to_real_mapping: Object (simulation to real-world parameter correlations)
  - examples: Array<Object> (code/configuration examples)

### URDF Modeling Content
- **Attributes**:
  - topic: String (e.g., "URDF Anatomy")
  - components: Array<String> (e.g., ["Links", "Joints", "Inertial Tags"])
  - joint_types: Array<String> (e.g., ["Revolute", "Fixed", "Prismatic"])
  - examples: Array<Object> (URDF code examples)
  - best_practices: Array<String> (URDF creation guidelines)

### Digital Twin Concepts
- **Attributes**:
  - comparison_type: String (e.g., "URDF vs SDF")
  - format_a: String (first format to compare)
  - format_b: String (second format to compare)
  - use_cases: Array<String> (when to use each format)
  - humanoid_specifics: Array<String> (format considerations for bipedal robots)

### Localized Content
- **Attributes**:
  - source_language: String (e.g., "en")
  - target_language: String (e.g., "ur")
  - technical_terms: Array<Object> (term mappings with definitions)
  - glossary: Array<Object> (comprehensive term translations)

## Content Relationships

- Physics Simulation Content "includes" URDF Modeling Content (for simulation setup)
- Digital Twin Concepts "references" Physics Simulation Content and URDF Modeling Content
- Localized Content "translates" Physics Simulation Content, URDF Modeling Content, and Digital Twin Concepts