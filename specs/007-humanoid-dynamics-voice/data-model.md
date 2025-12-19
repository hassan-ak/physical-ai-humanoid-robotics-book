# Data Model: Humanoid Dynamics and AI-Voice Integration

## Entity: HumanoidDynamicsContent
- **name**: String (e.g., "Balance Control Principles")
- **description**: String (fundamental concepts of humanoid balance)
- **components**: Array<String> (ZMP, Capture Point, etc.)
- **related_modules**: Array<String> (Module 1 ROS 2 integration points)
- **validation_rules**: Contains theoretical concepts and practical implementations

## Entity: VoiceIntegrationContent
- **name**: String (e.g., "Voice-to-Action Pipeline")
- **description**: String (processing natural language to robot actions)
- **components**: Array<String> (Whisper, LLM, ROS 2 mapping)
- **related_modules**: Array<String> (Module 1 ROS 2 integration)
- **validation_rules**: Contains API examples and mapping logic

## Entity: VLACommandMapping
- **name**: String (e.g., "Pick up the blue ball")
- **input_command**: String (natural language command)
- **parsed_action**: String (extracted action like "grasp")
- **target_object**: String (object to interact with like "blue ball")
- **ros_coordinates**: String (mapped ROS 2 coordinates)
- **validation_rules**: Must successfully translate to executable ROS 2 commands

## Entity: CapstoneProjectGuide
- **name**: String (e.g., "Autonomous Humanoid Simulation")
- **description**: String (integrated project combining all modules)
- **components**: Array<String> (dynamics, voice, integration)
- **requirements**: Array<String> (all skills from Modules 1-4)
- **validation_rules**: Must demonstrate integration of all learned concepts

## Entity: UrduLocalization
- **english_term**: String (original English technical term)
- **urdu_translation**: String (Urdu script translation)
- **phonetic_spelling**: String (Romanized pronunciation)
- **validation_rules**: Must preserve technical accuracy while being linguistically correct

## State Transitions
- Content progresses from theoretical concepts → practical examples → integrated applications
- Voice commands transition from recognition → understanding → mapping → execution
- Student understanding moves from basic concepts → implementation skills → project integration