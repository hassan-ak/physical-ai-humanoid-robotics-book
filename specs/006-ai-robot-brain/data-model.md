# Data Model: AI-Robot Brain Educational Content

## Content Entities

### USD and Synthetic Data Content
- **Attributes**:
  - topic: String (e.g., "USD and Synthetic Data")
  - subtopics: Array<String> (e.g., ["Universal Scene Description", "RTX Rendering", "Synthetic Data Generation"])
  - concepts: Array<Object> (USD concepts with explanations)
  - examples: Array<Object> (code/configuration examples)
  - sim_to_real_mapping: Object (domain randomization techniques)

### Isaac ROS Perception Content
- **Attributes**:
  - topic: String (e.g., "Isaac ROS Perception")
  - subtopics: Array<String> (e.g., ["VSLAM", "Perception Pipelines", "Jetson Optimization"])
  - algorithms: Array<String> (VSLAM algorithms like ORB-SLAM, RTAB-Map)
  - hardware_optimization: Array<String> (NITROS, Jetson Orin specific optimizations)
  - examples: Array<Object> (Isaac ROS code examples)

### Navigation Content
- **Attributes**:
  - topic: String (e.g., "Nav2 Navigation")
  - subtopics: Array<String> (e.g., ["Path Planning", "Bipedal Locomotion", "Nav2 Integration"])
  - navigation_types: Array<String> (global planning, local planning, controller)
  - humanoid_specifics: Array<String> (bipedal kinematic constraints)
  - examples: Array<Object> (Nav2 configuration examples)

### Localized Content
- **Attributes**:
  - source_language: String (e.g., "en")
  - target_language: String (e.g., "ur")
  - technical_terms: Array<Object> (term mappings with definitions)
  - glossary: Array<Object> (comprehensive term translations)

## Content Relationships

- USD and Synthetic Data Content "enables" Isaac ROS Perception Content (synthetic data for training perception systems)
- Isaac ROS Perception Content "connects to" Navigation Content (perception feeds into navigation decisions)
- Localized Content "translates" all other content entities