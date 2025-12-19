# Data Model: Module 1 - The Robotic Nervous System

## Core Entities

### ModuleContent
- **id**: string (unique identifier for the module)
- **name**: string (name of the module, e.g., "Module 1: The Robotic Nervous System")
- **description**: string (brief description of the module's purpose)
- **weeks_count**: integer (number of weeks in the module, e.g., 5)
- **learning_objectives**: array of strings (key learning objectives for the module)
- **prerequisites**: array of strings (knowledge required before starting this module)
- **created_at**: datetime (timestamp when module was created)
- **updated_at**: datetime (timestamp when module was last updated)

### Chapter
- **id**: string (unique identifier for the chapter)
- **module_id**: string (reference to the parent module)
- **week_number**: integer (which week this chapter belongs to, 1-5)
- **title**: string (title of the chapter)
- **subtitle**: string (optional subtitle)
- **content_type**: enum (Introduction, Architecture, Communication, Identity, etc.)
- **duration_estimate**: string (estimated time to complete, e.g., "45 minutes")
- **learning_outcomes**: array of strings (what students should learn from this chapter)
- **prerequisites**: array of strings (what students should know before this chapter)
- **technical_requirements**: array of strings (hardware/software requirements)
- **difficulty_level**: enum (Beginner, Intermediate, Advanced)
- **status**: enum (Draft, Review, Published, Archived)
- **created_at**: datetime (timestamp when chapter was created)
- **updated_at**: datetime (timestamp when chapter was last updated)

### ContentSection
- **id**: string (unique identifier for the content section)
- **chapter_id**: string (reference to the parent chapter)
- **title**: string (title of the section)
- **order_index**: integer (order of the section within the chapter)
- **content_type**: enum (Text, Code, Diagram, Exercise, Quiz, Video, etc.)
- **content**: string (the actual content in MDX format)
- **technical_insights**: string (optional insights from Robotics-Architect)
- **learning_notes**: array of strings (key learning points)
- **resources**: array of objects (related resources and links)
- **created_at**: datetime (timestamp when section was created)
- **updated_at**: datetime (timestamp when section was last updated)

### CodeExample
- **id**: string (unique identifier for the code example)
- **section_id**: string (reference to the parent section)
- **title**: string (title of the code example)
- **description**: string (explanation of what the code does)
- **language**: string (programming language, e.g., "python")
- **code**: string (the actual code in proper syntax)
- **ros_version**: string (ROS version, e.g., "ROS 2 Humble")
- **hardware_target**: string (target hardware, e.g., "Jetson Orin Nano")
- **technical_insights**: string (insights from Robotics-Architect)
- **usage_scenario**: string (when and how to use this code)
- **created_at**: datetime (timestamp when code example was created)
- **updated_at**: datetime (timestamp when code example was last updated)

### Diagram
- **id**: string (unique identifier for the diagram)
- **section_id**: string (reference to the parent section)
- **title**: string (title of the diagram)
- **description**: string (explanation of what the diagram shows)
- **diagram_type**: enum (Flowchart, Sequence, Architecture, State, etc.)
- **mermaid_syntax**: string (the Mermaid.js syntax for the diagram)
- **rendered_image**: string (optional path to rendered image)
- **created_at**: datetime (timestamp when diagram was created)
- **updated_at**: datetime (timestamp when diagram was last updated)

### Localization
- **id**: string (unique identifier for the localization entry)
- **original_content_id**: string (reference to the original content - chapter, section, etc.)
- **locale**: string (language code, e.g., "ur" for Urdu)
- **localized_title**: string (title in the target language)
- **localized_content**: string (content in the target language)
- **technical_terms**: object (mapping of technical terms in target language)
- **status**: enum (Pending, Translated, Verified, Published)
- **translator**: string (agent or person who performed the translation)
- **reviewer**: string (agent or person who reviewed the translation)
- **created_at**: datetime (timestamp when localization was created)
- **updated_at**: datetime (timestamp when localization was last updated)

## Relationships

### ModuleContent -> Chapter (One-to-Many)
- One module contains multiple chapters
- Each chapter belongs to exactly one module

### Chapter -> ContentSection (One-to-Many)
- One chapter contains multiple content sections
- Each section belongs to exactly one chapter

### ContentSection -> CodeExample (One-to-Many)
- One section can contain multiple code examples
- Each code example belongs to exactly one section

### ContentSection -> Diagram (One-to-Many)
- One section can contain multiple diagrams
- Each diagram belongs to exactly one section

### ContentSection -> Localization (One-to-Many)
- One section can have multiple localizations (for different languages)
- Each localization corresponds to exactly one original content item

## Validation Rules

### ModuleContent Validation
- Name must be unique across all modules
- Learning objectives must contain at least 3 items
- Weeks count must be between 1 and 20

### Chapter Validation
- Title must be unique within the module
- Week number must be sequential within the module
- Status transition rules: Draft → Review → Published
- Difficulty level must match or exceed module prerequisites

### ContentSection Validation
- Title must be unique within the chapter
- Order index must be sequential within the chapter
- Content type must be one of the defined enum values
- Each section must have at least 100 words of content

### CodeExample Validation
- Language must be one of the supported languages (python, etc.)
- ROS version must match the chapter's target ROS version
- Code must pass syntax validation
- Hardware target must be from the supported hardware list

### Diagram Validation
- Mermaid syntax must be valid
- Diagram type must be one of the defined enum values
- Description must be provided

### Localization Validation
- Locale must be one of the supported locales
- Original content ID must reference an existing content item
- Status transitions must follow: Pending → Translated → Verified → Published

## State Transitions

### Chapter State Transitions
- Draft → Review (when content is complete and ready for review)
- Review → Published (when content passes review and is approved)
- Review → Draft (when content needs revision)
- Published → Draft (when content needs updates)
- Any → Archived (when content is deprecated)

### Localization State Transitions
- Pending → Translated (when initial translation is complete)
- Translated → Verified (when translation is verified by reviewer)
- Verified → Published (when translation is approved for publication)
- Verified → Translated (when translation needs corrections)
- Published → Translated (when translation needs updates)